import * as topojson from 'topojson-client';

// import AtlasMetadataClient from '@reuters-graphics/graphics-atlas-client';
import ChartComponent from './base/ChartComponent';
import d3 from './utils/d3';

// const client = new AtlasMetadataClient();
// import topology from '@reuters-graphics/graphics-atlas-client/topojson/global.110m.json';

class GlobalRateMap extends ChartComponent {
  defaultProps = {
    map_stroke_width: 0.7,
    map_stroke_color: 'rgba(255, 255, 255, 0.15)',
    map_stroke_color_active: 'rgba(255, 255, 255, 0.5)',
    spike_color: '#eec331',
    height: 400,
    geo: false,
    locale: 'en',
    hover_gap: 12.5,
    spike_height: 20,
    spike_size: 2,
    range: { min: 0.75, max: 1 },
    spike_stroke_width: 0.8,
    spike_highlight_stroke_width: 1.2,
    spike_color_scale: d3.scaleThreshold() // Can use a scale as a prop!
      .domain([0.75, 0.9])
      .range(['#ccc', '#f68e26', '#de2d26']),
  };

  draw() {
    const data = this.data();
    const props = this.props();
    const node = this.selection().node();
    const { width } = node.getBoundingClientRect();

    const newData = data.filter(d => d.value >= props.range.min && d.value <= props.range.max);

    const scaleY = d3.scaleLinear().range([0, props.spike_height]).domain([0, 1]);
    const svg = this.selection()
      .appendSelect('svg') // see docs in ./utils/d3.js
      .attr('width', width)
      .attr('height', props.height);

    const g = svg.appendSelect('g')
      .attr('transform', `translate(${0}, ${0})`);

    const projection = d3.geoNaturalEarth1();
    const countries = topojson.feature(props.geo, props.geo.objects.countries);
    const disputed = topojson.mesh(props.geo, props.geo.objects.disputedBoundaries);

    projection.fitSize([width, props.height], countries);
    const path = d3.geoPath().projection(projection);

    g.selectAll('.country').remove();

    const countryGroups = g.selectAll('g.country')
      .data(countries.features.filter(d => d.properties.slug !== 'antarctica'))
      .enter()
      .append('g')
      .attr('class', 'country');

    countryGroups.appendSelect('path.level-0')
      .attr('class', d => 'c-' + d.properties.slug + ' level-0')
      .style('stroke', props.map_stroke_color)
      .style('stroke-width', props.map_stroke_width)
      .style('fill', 'transparent')
      .attr('d', path);

    countryGroups
      .appendSelect('path.centroid')
      .attr('class', d => d.properties.slug + ' centroid')
      .attr('d', function(d) {
        const obj = projection(d.properties.centroid);
        const o = newData.filter(e => d.properties.isoAlpha2 === e.key)[0];
        if (o) {
          const value = scaleY(o.value);
          return 'M' + (obj[0] - props.spike_size) + ' ' + obj[1] + ' L' + obj[0] + ' ' + (obj[1] - value) + ' L' + (obj[0] + props.spike_size) + ' ' + obj[1] + ' ';
        }
      })
      .style('fill', 'none')
      .style('stroke', function(d) {
        const o = newData.filter(e => d.properties.isoAlpha2 === e.key)[0];
        return o ? props.spike_color_scale(o.value) : null;
      })
      .style('stroke-width', props.spike_stroke_width);

    g.appendSelect('path.disputed')
      .attr('class', 'disputed level-0')
      .style('stroke', props.map_stroke_color)
      .style('stroke-width', props.map_stroke_width)
      .attr('d', path(disputed));

    countryGroups
      .style('pointer-events', 'none')
      .style('pointer-events', function(d) {
        const o = newData.filter(e => d.properties.isoAlpha2 === e.key)[0];
        if (!o) return 'none';
        if (
          o.value >= props.range.min &&
          o.value <= props.range.max
        ) return 'auto';
        return 'none';
      })
      .on('mouseover', tipOn)
      .on('mouseout', tipOff);

    function tipOn(obj) {
      const sel = d3.select(this);
      g.selectAll('path.centroid').style('opacity', 0);
      g.selectAll(`path.centroid.${obj.properties.slug}`).style('opacity', 1);
      sel.appendSelect('text')
        .attr('transform', function(d) {
          const o = projection(d.properties.centroid);
          return `translate(${o[0]},${o[1] + props.hover_gap})`;
        })
        .style('text-anchor', 'middle')
        .text(d => d.properties.translations[props.locale]);

      sel.style('opacity', 1);
      sel.selectAll('.level-0')
        .classed('active', true)
        .style('stroke', props.map_stroke_color_active);

      sel.select('.centroid')
        .classed('active', true)
        .style('stroke-width', props.spike_highlight_stroke_width);
    }

    function tipOff(obj) {
      g.selectAll('path.centroid').style('opacity', 1);
      const sel = d3.select(this);
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
