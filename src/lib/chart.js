import ChartComponent from './base/ChartComponent';
import d3 from './utils/d3';
import population from './pop.json';
import * as topojson from 'topojson-client';

import AtlasMetadataClient from '@reuters-graphics/graphics-atlas-client';
const client = new AtlasMetadataClient();
// import topology from '@reuters-graphics/graphics-atlas-client/topojson/global.110m.json';

class GlobalRateMap extends ChartComponent {
  defaultProps = {
    map_stroke_width: .7,
    map_stroke_color: 'rgba(255, 255, 255, 0.15)',
    map_stroke_color_active: 'rgba(255, 255, 255, 0.5)',
    spike_color: '#eec331',
    height: 500,
    geo: false,
    spike_height: 20,
    spike_size: 2,
    spike_stroke_width: 0.2
  };

  draw() {
    const data = this.data();
    const props = this.props();
    const node = this.selection().node();
    const { width } = node.getBoundingClientRect();

    const gradients = [ {
      color: '#de2d26',
      start_opacity: 0.8,
      mid_opacity: 0.1,
      stop_opacity: 0,
      id: 'red'
    }, {
      color: '#f68e26',
      start_opacity: 0.8,
      mid_opacity: 0.1,
      stop_opacity: 0,
      id: 'orange',
    }, {
      color: 'rgba(255,255,255,0.8)',
      start_opacity: 0.8,
      mid_opacity: 0.1,
      stop_opacity: 0,
      id: 'white',
    }];

    const transition = d3.transition()
      .duration(750);

    const scaleY = d3.scaleLinear().range([0, props.spike_height]).domain([0, 1])
    const svg = this.selection()
      .appendSelect('svg') // see docs in ./utils/d3.js
      .attr('width', width)
      .attr('height', props.height);

    const g = svg.appendSelect('g')
      .attr('transform', `translate(${0}, ${0})`);

    const defs = svg.appendSelect('defs')
      .selectAll('linearGradient')
      .data(gradients)
      .enter()
      .appendSelect('linearGradient')
      .attr('id', d => d.id)
      .attr('x1', '0%')
      .attr('x2', '0%')
      .attr('y1', '0%')
      .attr('y2', '95%')
      .each(function(d) {
        const el = d3.select(this);
        el.append('stop')
          .attr('offset', 0+'%')
          .style('stop-color', d.color)
          .style('stop-opacity', d.start_opacity);

        el.append('stop')
          .attr('offset', (d.id === 'up')?'10%':'90%')
          .style('stop-color', d.color)
          .style('stop-opacity', d.mid_opacity);

        el.append('stop')
          .attr('offset', 100+'%')
          .style('stop-color', d.color)
          .style('stop-opacity', d.stop_opacity);
      });

    const projection = d3.geoNaturalEarth1();
    const countries = topojson.feature(props.geo, props.geo.objects.countries);
    const disputed = topojson.mesh(props.geo, props.geo.objects.disputedBoundaries);

    projection.fitSize([width, props.height], countries);
    const path = d3.geoPath().projection(projection);

    g.selectAll('.country').remove();

    const countryGroups = g.selectAll('g.country')
      .data(countries.features.filter(d => d.properties.slug != 'antarctica'))
      .enter()
      .append('g')
      .attr('class', 'country');

    countryGroups.append('path')
      .attr('class', d => 'c-' + d.properties.slug + ' level-0')
      .style('stroke', props.map_stroke_color)
      .style('stroke-width', props.map_stroke_width)
      .attr('d', path);

    countryGroups
      .append('path')
      .attr('class', d => d.properties.slug + ' centroid')
      .attr('d', function(d) {
        const obj = projection(d.properties.centroid);
        const o = data.filter(e => d.properties.isoAlpha2 === e.key)[0];
        if (o) {
          const value = scaleY(o.value);
          return 'M' + (obj[0] - props.spike_size) + ' ' + obj[1] + ' L' + obj[0] + ' ' + (obj[1] - value)+ ' L' + (obj[0] + props.spike_size) + ' ' + obj[1] + ' ';
        }
      })
      // .style('fill', function(d) {
      //   const o = data.filter(e => d.properties.isoAlpha2 === e.key)[0];
      //   if (o) {
      //     if (o.value >= 0.9) {
      //       return 'url("#red")';
      //     } else if (o.value >= 0.75) {
      //       return 'url("#orange")';
      //     } else {
      //       return 'url("#white")';
      //     }
      //   }
      // })
      .style('fill','none')
      .style('stroke', function(d) {
        const o = data.filter(e => d.properties.isoAlpha2 === e.key)[0];
        if (o) {
          if (o.value >= 0.9) {
            return '#de2d26';
          } else if (o.value >= 0.75) {
            return '#f68e26';
          } else {
            return 'rgba(255,255,255,0.8)';
          }
        }
      })
      .style('stroke-width', .8);
      // .style('stroke-width', props.spike_stroke_width);

    g.append('path').attr('class', 'disputed level-0')
      .style('stroke', props.map_stroke_color)
      .style('stroke-width', props.map_stroke_width)
      .attr('d', path(disputed))

    countryGroups.on('mouseover', tipOn)
      .on('mouseout', tipOff);

    function tipOn(obj) {
      const sel = d3.select(this)
      sel.selectAll('.level-0')
        .classed('active', true)
        .style('stroke', props.map_stroke_color_active)
        .style('stroke-width', 1);

      sel.select('.centroid')
        .classed('active', true)
        .style('stroke-width', 1);
    }

    function tipOff(obj) {
      const sel = d3.select(this);
      sel.selectAll('.level-0')
        .classed('active', false)
        .style('stroke', props.map_stroke_color)
        // .style('stroke-width', props.map_stroke_width);

      sel.select('.centroid')
        .classed('active', false)
        // .style('stroke-width', props.spike_stroke_width);
    }

    return this;
  }
}

export default GlobalRateMap;
