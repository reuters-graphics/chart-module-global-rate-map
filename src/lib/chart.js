import * as topojson from 'topojson-client';

import AtlasMetadataClient from '@reuters-graphics/graphics-atlas-client';
import ChartComponent from './base/ChartComponent';
import d3 from './utils/d3';
import { geoVoronoi } from 'd3-geo-voronoi';

const Atlas = new AtlasMetadataClient();
// import topology from '@reuters-graphics/graphics-atlas-client/topojson/global.110m.json';

class GlobalRateMap extends ChartComponent {
  defaultProps = {
    map_stroke_width: 1,
    map_stroke_color: '#2f353f',
    map_highlight_stroke_width: 1.2,
    map_fill: 'rgba(153,153,153,0.25)',
    map_stroke_color_active: 'rgba(255, 255, 255, 0.75)',
    spike_color: '#eec331',
    heightRatio: 0.5,
    geo: false,
    locale: 'en',
    map_custom_projections: {
      clip_box: null,
      projection: 'geoNaturalEarth1',
      center: null,
      scale: null,
      rotate: null,
    },
    hover_gap: 12.5,
    spike_height: 35,
    spike_size: 3.5,
    getDataRange: (width) => ({ min: 0, max: 1 }),
    spike_stroke_width: 0.5,
    spike_highlight_stroke_width: 2,
    spike_highlight_fill: true,
    spike_color_scale: d3.scaleThreshold() // Can use a scale as a prop!
      .domain([0.75, 0.9])
      .range(['#ccc', '#f68e26', '#de2d26']),
    spike_stroke_width_scale: d3.scaleThreshold() // Can use a scale as a prop!
      .domain([0.75, 0.9])
      .range([0.6, 0.9, 1.1]),
    spike_inactive_opacity: 1,
    disputed_dasharray: [5, 3],
    key: {
      text: {
        main_text: 'How close is the current weekly average to the country’s peak',
        red_peak: '>90%',
        orange_peak: '90 to 75%',
        white_peak: '<75%',
      },
      width: 140,
    },
    annotations: {
      name: [],
      value: [],
    },
    interaction: true,
    at_peak_text: 'At peak',
    of_peak_text: 'of peak',
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
    const keyBox = this.selection()
      .appendSelect('div.key');

    keyBox.appendSelect('p.left-text.text-inline.key-text')
      .html(props.key.text.main_text);

    const keySvgContainer = keyBox.appendSelect('div.svg-container.text-inline')
    const keyGap = props.key.width / 3;
    // add key box
    const keySvg = keySvgContainer.appendSelect('svg.text-inline')
      .attr('height', props.spike_height + 6)
      .style('fill', 'none')
      .attr('width', props.key.width - (keyGap * 0.27));

    keySvg.appendSelect('defs')
      .appendSelect('marker.top')
      .attr('id', 'arrow-up')
      .attr('markerWidth', 12)
      .attr('markerHeight', 10)
      .attr('refY', 5)
      .attr('refX', 6)
      .attr('orient', 'auto')
      .appendSelect('path.up')
      .style('stroke', 'white')
      .style('stroke-width', 0.6)
      .attr('d', 'M0 0 L6 5 L0 10');

    keySvg.select('defs')
      .appendSelect('marker.down')
      .attr('id', 'arrow-down')
      .attr('markerWidth', 12)
      .attr('markerHeight', 10)
      .attr('refY', 5)
      .attr('refX', 0)
      .attr('orient', 'auto')
      .appendSelect('path.down')
      .style('stroke', 'white')
      .style('stroke-width', 0.6)
      .attr('d', 'M6 0 L0 5 L6 10');

    // add spike 1
    keySvg.appendSelect('path.red-spike.high')
      .style('stroke', props.spike_color_scale(1))
      .attr('d', (d) => {
        const obj = [keyGap * 0.7, props.spike_height];
        const value = scaleY(1);
        return 'M' + (obj[0] - props.spike_size) + ' ' + obj[1] + ' L' + obj[0] + ' ' + (obj[1] - value) + ' L' + (obj[0] + props.spike_size) + ' ' + obj[1] + ' ';
      });

    keySvg.appendSelect('path.red-spike.low')
      .style('stroke', props.spike_color_scale(0.9))
      .style('fill',props.spike_color_scale(0.9))
      .attr('d', (d) => {
        const obj = [keyGap * 0.7 + props.spike_size*1.4, props.spike_height];
        const value = scaleY(0.9);
        return 'M' + (obj[0] - props.spike_size) + ' ' + obj[1] + ' L' + obj[0] + ' ' + (obj[1] - value) + ' L' + (obj[0] + props.spike_size) + ' ' + obj[1] + ' ';
      });

    keySvg.appendSelect('path.orange-spike.high')
      .style('stroke', props.spike_color_scale(0.89))
      .attr('d', (d, i) => {
        const obj = [keyGap * 1.5, props.spike_height];
        const value = scaleY(0.89);
        return 'M' + (obj[0] - props.spike_size) + ' ' + obj[1] + ' L' + obj[0] + ' ' + (obj[1] - value) + ' L' + (obj[0] + props.spike_size) + ' ' + obj[1] + ' ';
      });

    keySvg.appendSelect('path.orange-spike.low')
      .style('stroke', props.spike_color_scale(0.75))
      .style('fill',props.spike_color_scale(0.75))
      .attr('d', (d) => {
        const obj = [keyGap * 1.5+props.spike_size*1.4, props.spike_height];
        const value = scaleY(0.75);
        return 'M' + (obj[0] - props.spike_size) + ' ' + obj[1] + ' L' + obj[0] + ' ' + (obj[1] - value) + ' L' + (obj[0] + props.spike_size) + ' ' + obj[1] + ' ';
      });

    keySvg.appendSelect('path.white-spike.high')
      .style('stroke', props.spike_color_scale(0.74))
      .attr('d', (d, i) => {
        const obj = [keyGap * 2.3, props.spike_height];
        const value = scaleY(0.74);
        return 'M' + (obj[0] - props.spike_size) + ' ' + obj[1] + ' L' + obj[0] + ' ' + (obj[1] - value) + ' L' + (obj[0] + props.spike_size) + ' ' + obj[1] + ' ';
      });

    keySvg.appendSelect('path.white-spike.low')
      .style('stroke', '#ccc')
      .style('fill','#ccc')
      .attr('d', (d, i) => {
        const obj = [keyGap * 2.3+props.spike_size*1.4, props.spike_height];
        const value = scaleY(0);
        return 'M' + (obj[0] - props.spike_size) + ' ' + obj[1] + ' L' + obj[0] + ' ' + (obj[1] - value) + ' L' + (obj[0] + props.spike_size) + ' ' + obj[1] + ' ';
      });

    keySvg.appendSelect('line')
      .style('stroke', 'white')
      .style('stroke-width',.7)
      .attr('x1', 10)
      .attr('x2', 10)
      .attr('y1', 7)
      .attr('y1', props.spike_height)
      .attr('marker-end', 'url(#arrow-up)')
      .attr('marker-start', 'url(#arrow-down)');

    const bottomKeyText = keySvgContainer.appendSelect('div.bottom-text')
      .style('padding-left', `${keyGap*.4}px`);
    bottomKeyText.appendSelect('p.red-text.key-text.text-inline')
      .style('width', `${keyGap*.8}px`)
      .html(props.key.text.red_peak);
    bottomKeyText.appendSelect('p.orange-text.key-text.text-inline')
      .style('width', `${keyGap*.8}px`)
      .html(props.key.text.orange_peak);
    bottomKeyText.appendSelect('p.white-text.key-text.text-inline')
      .style('width', `${keyGap*.8}px`)
      .html(props.key.text.white_peak);

    // SVG begins here
    const svg = this.selection()
      .appendSelect('svg.chart') // see docs in ./utils/d3.js
      .attr('width', width)
      .attr('height', height);

    const g = svg.appendSelect('g');

    if (!d3[props.map_custom_projections.projection]) {
      props.map_custom_projections.projection = 'geoNaturalEarth1';
    }

    const projection = d3[props.map_custom_projections.projection]();
    const countries = topojson.feature(props.geo, props.geo.objects.countries);
    let disputed;
    if (props.geo.objects.disputedBoundaries) {
      disputed = topojson.mesh(props.geo, props.geo.objects.disputedBoundaries);  
    }

    if (props.map_custom_projections.center && props.map_custom_projections.center.length === 2) {
      projection.center(props.map_custom_projections.center);
    }

    if (props.map_custom_projections.rotate && props.map_custom_projections.rotate.length === 2) {
      projection.rotate(props.map_custom_projections.rotate);
    }

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

    if (props.map_custom_projections.clip_box && (props.map_custom_projections.clip_box.length === 2 && props.map_custom_projections.clip_box[0].length === 2 && props.map_custom_projections.clip_box[1].length === 2)) {
      console.log('clipping! :)');
      projection.fitSize([width, height], makeRangeBox(props.map_custom_projections.clip_box));
    } else {
      console.log('cant clip :(');
      projection.fitSize([width, height], countries);
    }

    if (props.map_custom_projections.scale) {
      projection.scale(props.map_custom_projections.scale);
    }

    const path = d3.geoPath().projection(projection);

    svg.selectAll('.country,.disputed,.centroid').remove();

    const countryGroups = g.appendSelect('g.countries')
      .style('pointer-events', 'none')
      .style('fill', props.map_fill)
      .selectAll('path.country')
      .data(countries.features.filter(d => d.properties.slug !== 'antarctica'), d => d.properties.slug);

    countryGroups
      .enter()
      .append('path')
      .attr('class', d => `country c-${d.properties.slug} level-0`)
      .merge(countryGroups)
      .style('stroke', props.map_stroke_color)
      .style('stroke-width', props.map_stroke_width)
      .attr('d', path);

    if (disputed) {
      g.appendSelect('path.disputed')
        .attr('class', 'disputed level-0')
        .style('pointer-events', 'none')
        .style('stroke', props.map_stroke_color)
        .style('stroke-width', props.map_stroke_width)
        .style('fill', 'none')
        .style('stroke-dasharray', props.disputed_dasharray)
        .attr('d', path(disputed));
    }

    const sortedCentroids = countryCentroids.sort((a, b) => {
      const aO = filteredData.filter(e => a.properties.isoAlpha2 === e.key)[0];
      const bO = filteredData.filter(e => b.properties.isoAlpha2 === e.key)[0];
      return aO.value - bO.value;
    });

    sortedCentroids.forEach((d) => {
      const o = filteredData.filter(e => d.properties.isoAlpha2 === e.key)[0];
      if (o) {
        d.value = o.value;
      }
    });

    const spikeCentroids = g.appendSelect('g.spike-layer')
      .style('pointer-events', 'none')
      .selectAll('path.centroid')
      .data(sortedCentroids);

    spikeCentroids.enter()
      .append('path')
      .attr('class', d => d.properties.slug + ' centroid')
      .merge(spikeCentroids)
      .attr('d', function(d) {
        const obj = projection(d.properties.centroid);
        const value = scaleY(d.value);
        return 'M' + (obj[0] - props.spike_size) + ' ' + obj[1] + ' L' + obj[0] + ' ' + (obj[1] - value) + ' L' + (obj[0] + props.spike_size) + ' ' + obj[1] + ' ';
      })
      .style('fill', 'none')
      .style('stroke', function(d) {
        return d.value ? props.spike_color_scale(d.value) : '#ccc';
      })
      .style('stroke-width', function(d) {
        return d.value ? props.spike_stroke_width_scale(d.value) : 0.5;
      });

    const countryVoronoiCentroids = g.appendSelect('g.voronoi')
      .style('fill', 'none')
      .style('cursor', props.interaction?'crosshair':'default')
      .style('pointer-events', 'all')
      .selectAll('path.voronoi')
      .data(geoVoronoi().polygons(voronoiCentroids).features);

    countryVoronoiCentroids.enter()
      .append('path')
      .attr('class', d => 'voronoi')
      .merge(countryVoronoiCentroids)
      .attr('d', path)
      .on('mouseover', d => {
        if (props.interaction) {
          tipOn(d);
        }
      })
      .on('mouseout', d => {
        if (props.interaction) {
          tipOff(d);
        }
      });

    countryVoronoiCentroids.exit()
      .remove();

    const tooltip = g.appendSelect('g.text-group')
      .style('pointer-events', 'none')
      .append('text');

    let annotationData = props.annotations.name.map((d) => {
      const c = Atlas.getCountry(d);
      const geo = countryCentroids.filter(e => e.properties.isoAlpha2 === c.isoAlpha2)[0]
      return {
        countryMeta: c,
        countryGeo: geo,
      };
    });

    let annotationNumData = props.annotations.value.map((d) => {
      const c = Atlas.getCountry(d);
      const geo = sortedCentroids.filter(e => e.properties.isoAlpha2 === c.isoAlpha2)[0]
      return {
        countryMeta: c,
        countryGeo: geo,
      };
    });

    annotationData = annotationData.filter(d => d.countryMeta && d.countryGeo)
    annotationNumData = annotationNumData.filter(d => d.countryMeta && d.countryGeo)

    const annotations = g.appendSelect('g.name-annotations')
      .style('pointer-events', 'none')
      .selectAll('text.annotation')
      .data(annotationData, d => d.countryMeta.isoAlpha2);

    annotations.enter()
      .append('text')
      .attr('class', 'annotation')
      .merge(annotations)
      .attr('transform', (d) => {
        const p = projection(d.countryGeo.geometry.coordinates);
        return `translate(${p[0]},${p[1] + props.hover_gap})`;
      })
      .text((d) => {
        return d.countryMeta.translations[props.locale];
      });

    annotations.exit()
      .remove();

    const annotationsNumbers = g.appendSelect('g.number-annotations')
      .style('pointer-events', 'none')
      .selectAll('text.annotation')
      .data(annotationNumData);

    annotationsNumbers.enter()
      .append('text')
      .attr('class', 'annotation')
      .merge(annotationsNumbers)
      .attr('transform', (d) => {
        const p = projection(d.countryGeo.geometry.coordinates);
        return `translate(${p[0]},${p[1] + props.hover_gap})`;
      })
      .html((d) => {
        return getPeakText(d.countryGeo.value);
      });

    annotationsNumbers.exit()
      .remove();

    function tipOn(voronoiPath) {
      const { properties } = voronoiPath.properties.site;
      if (properties.reset) return;
      const { value } = filteredData.find(e => properties.isoAlpha2 === e.key);

      if (!value && value !== filterMin) return;
      g.selectAll('path.centroid')
        .style('fill', 'none')
        .style('opacity', props.spike_inactive_opacity);

      g.selectAll('.name-annotations,.number-annotations')
        .style('opacity',0)

      g.selectAll(`path.centroid.${properties.slug}`)
        .style('opacity', 1)
        .style('fill', (d) => {
          return d.value ? props.spike_color_scale(d.value) : null;
        })
        .classed('active', true)
        .raise();

      tooltip
        .attr('transform', function(d) {
          const o = projection(properties.centroid);
          return `translate(${o[0]},${o[1] + props.hover_gap})`;
        })
        .style('text-anchor', 'middle')
        .html(d => `
          <tspan x="0" y="0">${properties.translations[props.locale]}</tspan>
          ${getPeakText(value)}`);

      g.selectAll(`.country.c-${properties.slug}`)
        .classed('active', true);
    }

    function tipOff(voronoiPath) {

      const { properties } = voronoiPath.properties.site;
      const country = g.selectAll(`.country.c-${properties.slug}`);

      g.selectAll('path.centroid').style('opacity', 1)
        .classed('active', false)
        .style('fill', 'none');

      g.selectAll('.name-annotations,.number-annotations')
        .style('opacity',1);

      tooltip.html('');

      country.classed('active', false)
        .style('stroke', props.map_stroke_color);
    }

    function getPeakText(value) {
      value = Math.round(value * 100);
      if (value < 100 && value >= 1) {
        return `<tspan dy="1rem" x="0">${value.toLocaleString(props.locale)}%</tspan> <tspan class="smaller">${props.of_peak_text}</tspan>`
      } else if (value < 1) {
        return `<tspan dy="1rem" x="0"><1%</tspan> <tspan class="smaller">${props.of_peak_text}</tspan>`
      } else if (value===100) {
        return `<tspan dy="1rem" x="0">${props.at_peak_text}</tspan>`
      }
    }

    return this;
  }
}

function makeRangeBox(opts) {
  var lon0 = opts[0][0];
  var lon1 = opts[1][0];
  var lat0 = opts[0][1];
  var lat1 = opts[1][1];

  // to cross antimeridian w/o ambiguity
  if (lon0 > 0 && lon1 < 0) {
    lon1 += 360;
  }

  // to make lat span unambiguous
  if (lat0 > lat1) {
    var tmp = lat0;
    lat0 = lat1;
    lat1 = tmp;
  }

  var dlon4 = (lon1 - lon0) / 4;

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
