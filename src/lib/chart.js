import * as topojson from 'topojson-client';

// import AtlasMetadataClient from '@reuters-graphics/graphics-atlas-client';
import ChartComponent from './base/ChartComponent';
import d3 from './utils/d3';
import { geoVoronoi } from 'd3-geo-voronoi';

// const client = new AtlasMetadataClient();
// import topology from '@reuters-graphics/graphics-atlas-client/topojson/global.110m.json';

class GlobalRateMap extends ChartComponent {
  defaultProps = {
    map_stroke_width: 0.7,
    map_stroke_color: 'rgba(255, 255, 255, 0.25)',
    map_fill: '#333',
    map_stroke_color_active: 'rgba(255, 255, 255, 0.75)',
    spike_color: '#eec331',
    heightRatio: 0.5,
    geo: false,
    locale: 'en',
    hover_gap: 12.5,
    spike_height: 30,
    spike_size: 3,
    getDataRange: (width) => ({ min: 0, max: 1 }),
    spike_stroke_width: 0.8,
    spike_highlight_stroke_width: 1.2,
    spike_color_scale: d3.scaleThreshold() // Can use a scale as a prop!
      .domain([0.75, 0.9])
      .range(['#ccc', '#f68e26', '#de2d26']),
    spike_inactive_opacity: 0,
  };

  draw() {
    const data = this.data();
    const props = this.props();
    const node = this.selection().node();
    const { width } = node.getBoundingClientRect();
    const height = width * props.heightRatio;

    const { min: filterMin, max: filterMax } = props.getDataRange(width);
    const filteredData = data.filter(d => d.value >= filterMin && d.value <= filterMax);

    const scaleY = d3.scaleLinear().range([0, props.spike_height]).domain([0, 1]);
    const svg = this.selection()
      .appendSelect('svg') // see docs in ./utils/d3.js
      .attr('width', width)
      .attr('height', height);

    const g = svg.appendSelect('g');

    const projection = d3.geoNaturalEarth1();
    const countries = topojson.feature(props.geo, props.geo.objects.countries);
    const disputed = topojson.mesh(props.geo, props.geo.objects.disputedBoundaries);

    const filteredCountryKeys = filteredData.map(d => d.key);
    const countryCentroids = countries.features
      .filter(c => filteredCountryKeys.includes(c.properties.isoAlpha2))
      .map(({ properties }) => ({
        type: 'Feature',
        properties,
        geometry: {
          type: 'Point',
          coordinates: properties.centroid,
        },
      }));

    // Adding some points in the ocean to create voronoi spaces that will
    // reset the map, so as your cursor traces land masses, you get highlights,
    // but in the ocean you can see the whole world picture...
    const resetPoints = [
      [-40.248108, 38.653788], // North Atlantic
      [-29.800018, 14.536220], // Central Atlantic
      [-15.485548, -12.941648], // South Atlantic
      [-174.808659, 35.856127], // North Pacific
      [-117.324414, -11.130821], // South Pacific
      [-173.039131, -44.920697], // Southwest pacific
      [64.407024, 5.045815], // North Indian
      [75.569128, -31.691939], // South Indian
      [-5.783266, -83.608077], // Antarctica
    ];
    const voronoiCentroids = countryCentroids.concat(resetPoints.map(centroid => ({
      type: 'Feature',
      properties: { reset: true },
      geometry: {
        type: 'Point',
        coordinates: centroid,
      },
    })));

    projection.fitSize([width, height], countries);
    const path = d3.geoPath().projection(projection);

    g.selectAll('.country').remove();

    const countryGroups = g.selectAll('g.country')
      .data(countries.features.filter(d => d.properties.slug !== 'antarctica'))
      .enter()
      .append('g')
      .attr('class', d => `country g-${d.properties.slug}`)
      .style('pointer-events', 'none');

    countryGroups.appendSelect('path.level-0')
      .attr('class', d => 'c-' + d.properties.slug + ' level-0')
      .style('stroke', props.map_stroke_color)
      .style('stroke-width', props.map_stroke_width)
      .style('fill', props.map_fill)
      .attr('d', path);

    countryGroups
      .appendSelect('path.centroid')
      .attr('class', d => d.properties.slug + ' centroid')
      .attr('d', function(d) {
        const obj = projection(d.properties.centroid);
        const o = filteredData.filter(e => d.properties.isoAlpha2 === e.key)[0];
        if (o) {
          const value = scaleY(o.value);
          return 'M' + (obj[0] - props.spike_size) + ' ' + obj[1] + ' L' + obj[0] + ' ' + (obj[1] - value) + ' L' + (obj[0] + props.spike_size) + ' ' + obj[1] + ' ';
        }
      })
      .style('fill', 'none')
      .style('stroke', function(d) {
        const o = filteredData.find(e => d.properties.isoAlpha2 === e.key);
        return o ? props.spike_color_scale(o.value) : null;
      })
      .style('stroke-width', props.spike_stroke_width);

    g.appendSelect('path.disputed')
      .attr('class', 'disputed level-0')
      .style('stroke', props.map_stroke_color)
      .style('stroke-width', props.map_stroke_width)
      .attr('d', path(disputed));

    const countryVoronoiCentroids = g.appendSelect('g.voronoi')
      .selectAll('path.voronoi')
      .data(geoVoronoi().polygons(voronoiCentroids).features);

    countryVoronoiCentroids.enter()
      .append('path')
      .attr('class', d => 'voronoi')
      .merge(countryVoronoiCentroids)
      .style('fill', 'none')
      .style('cursor', 'crosshair')
      .attr('pointer-events', 'all')
      .attr('d', path)
      .on('mouseover', tipOn)
      .on('mouseout', tipOff);

    function tipOn(voronoiPath) {
      const { properties } = voronoiPath.properties.site;
      if (properties.reset) return;
      const { value } = filteredData.find(e => properties.isoAlpha2 === e.key);
      if (!value) return;
      const sel = g.select(`g.country.g-${properties.slug}`).moveToFront();
      g.selectAll('path.centroid')
        .style('opacity', props.spike_inactive_opacity);
      g.selectAll(`path.centroid.${properties.slug}`).style('opacity', 1);
      sel.appendSelect('text')
        .attr('transform', function(d) {
          const o = projection(d.properties.centroid);
          return `translate(${o[0]},${o[1] + props.hover_gap})`;
        })
        .style('text-anchor', 'middle')
        .html(d => `
          <tspan x="0" y="0">${d.properties.translations[props.locale]}</tspan>
          <tspan x="0" dy="1rem">${(Math.round(value * 100)).toLocaleString(props.locale)}%</tspan> <tspan class="smaller">of peak</tspan>
        `);

      sel.style('opacity', 1);
      sel.selectAll('.level-0')
        .classed('active', true)
        .style('stroke', props.map_stroke_color_active);

      sel.select('.centroid')
        .classed('active', true)
        .style('stroke-width', props.spike_highlight_stroke_width);
    }

    function tipOff(voronoiPath) {
      const { properties } = voronoiPath.properties.site;
      const sel = g.select(`g.country.g-${properties.slug}`);
      g.selectAll('path.centroid').style('opacity', 1);
      sel.select('text').remove();
      sel.selectAll('.level-0')
        .classed('active', false)
        .style('stroke', props.map_stroke_color);

      sel.select('.centroid')
        .classed('active', false)
        .style('stroke-width', props.spike_stroke_width);
    }

    return this;
  }
}

export default GlobalRateMap;
