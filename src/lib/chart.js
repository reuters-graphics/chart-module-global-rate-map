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
    map_stroke_color: '#2f353f',
    map_highlight_stroke_width: 1.2,
    map_fill: 'rgba(153,153,153,0.25)',
    map_stroke_color_active: 'rgba(255, 255, 255, 0.75)',
    spike_color: '#eec331',
    heightRatio: 0.5,
    geo: false,
    locale: 'en',
    projection: 'geoNaturalEarth1',
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
    disputed_dasharray: [5, 3],
    clip_box: null,
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

    if (!d3[props.projection]) {
      props.projection='geoNaturalEarth1'
    }

    const projection = d3[props.projection]();
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

    if (props.clip_box && (props.clip_box.length === 2 && props.clip_box[0].length === 2 && props.clip_box[1].length === 2)) {
      console.log('clipping! :)')
      projection.fitSize([width, height], makeRangeBox(props.clip_box));
    } else {
      console.log('cant clip :(')
      projection.fitSize([width, height], countries);
    }
    const path = d3.geoPath().projection(projection);

    svg.selectAll('.disputed').remove();

    const countryGroups = g.appendSelect('g.countries')
      .selectAll('path.country')
      .data(countries.features.filter(d => d.properties.slug !== 'antarctica'), d => d.properties.slug);

    countryGroups
      .enter()
      .append('path')
      .attr('class', d => `country c-${d.properties.slug} level-0`)
      .merge(countryGroups)
      .style('pointer-events', 'none')
      .style('stroke', props.map_stroke_color)
      .style('stroke-width', props.map_stroke_width)
      .style('fill', props.map_fill)
      .attr('d', path);

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

    svg.appendSelect('path.disputed')
      .attr('class', 'disputed level-0')
      .style('stroke', props.map_stroke_color)
      .style('stroke-width', props.map_stroke_width)
      .style('fill', 'none')
      .style('stroke-dasharray', props.disputed_dasharray)
      .attr('d', path(disputed));

    const spikeCentroids = g.appendSelect('g.spike-layer')
      .selectAll('path.centroid')
      .data(countries.features.filter(d => d.properties.slug !== 'antarctica'))

    spikeCentroids.enter()
      .append('path')
      .attr('class', d => d.properties.slug + ' centroid')
      .merge(spikeCentroids)
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

    const tooltip = g.appendSelect('g.text-group')
      .append('text');

    function tipOn(voronoiPath) {
      const { properties } = voronoiPath.properties.site;
      if (properties.reset) return;
      const { value } = filteredData.find(e => properties.isoAlpha2 === e.key);
      if (!value) return;

      g.selectAll('path.centroid')
        .style('opacity', props.spike_inactive_opacity);

      g.selectAll(`path.centroid.${properties.slug}`)
        .style('opacity', 1)
        .classed('active', true)
        .style('stroke-width', props.spike_highlight_stroke_width);

      tooltip
        .attr('transform', function(d) {
          const o = projection(properties.centroid);
          return `translate(${o[0]},${o[1] + props.hover_gap})`;
        })
        .style('text-anchor', 'middle')
        .html(d => `
          <tspan x="0" y="0">${properties.translations[props.locale]}</tspan>
          <tspan x="0" dy="1em">${(Math.round(value * 100)).toLocaleString(props.locale)}%</tspan> <tspan class="smaller">of peak</tspan>
        `);

      g.selectAll(`.country.c-${properties.slug}`)
        .classed('active', true)
        .style('stroke-width', props.map_highlight_stroke_width)
        .style('stroke', props.map_stroke_color_active)
        .moveToFront();
    }

    function tipOff(voronoiPath) {
      const { properties } = voronoiPath.properties.site;
      const country = g.selectAll(`.country.c-${properties.slug}`);

      g.selectAll('path.centroid').style('opacity', 1)
        .classed('active', false)
        .style('stroke-width', props.spike_stroke_width);

      tooltip.html('');

      country.classed('active', false)
        .style('stroke-width', props.map_stroke_width)
        .style('stroke', props.map_stroke_color);
    }

    return this;
  }
}

function makeRangeBox (opts) {
  var lon0 = opts[0][0]
  var lon1 = opts[0][1]
  var lat0 = opts[1][0]
  var lat1 = opts[1][1]

  // to cross antimeridian w/o ambiguity
  if (lon0 > 0 && lon1 < 0) {
    lon1 += 360
  }

  // to make lat span unambiguous
  if (lat0 > lat1) {
    var tmp = lat0
    lat0 = lat1
    lat1 = tmp
  }

  var dlon4 = (lon1 - lon0) / 4

  return {
    type: 'Polygon',
    coordinates: [[
      [lon0, lat0],
      [lon0, lat1],
      [lon0 + dlon4, lat1],
      [lon0 + 2 * dlon4, lat1],
      [lon0 + 3 * dlon4, lat1],
      [lon1, lat1],
      [lon1, lat0],
      [lon1 - dlon4, lat0],
      [lon1 - 2 * dlon4, lat0],
      [lon1 - 3 * dlon4, lat0],
      [lon0, lat0],
    ]]
  };
}
export default GlobalRateMap;
