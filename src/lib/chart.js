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
    spike_color: '#eec331',
    height: 500,
    geo: false,
  };

  draw() {
    const data = this.data();
    const props = this.props();
    const node = this.selection().node();
    console.log(data)
    const { width } = node.getBoundingClientRect();

    const gradients = [ {
      color: '#de2d26',
      start_opacity: .8,
      mid_opacity: 0.1,
      stop_opacity: 0,
      id: 'red'
    },{
      color: '#f68e26',
      start_opacity: .8,
      mid_opacity: 0.1,
      stop_opacity: 0,
      id: 'orange',
    },{
      color:  'rgba(255,255,255,.8)',
      start_opacity: .8,
      mid_opacity: 0.1,
      stop_opacity: 0,
      id:'white',
    }];

    const transition = d3.transition()
      .duration(750);

    const scaleY = d3.scaleLinear().range([0,35]).domain([0, 1])
    const xVal = 3
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
        let el = d3.select(this);
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

    let projection = d3.geoNaturalEarth1();
    let countries = topojson.feature(props.geo, props.geo.objects.countries);
    let disputed = topojson.feature(props.geo, props.geo.objects.disputedBoundaries);

    projection.fitSize([width, props.height], countries);
    let path = d3.geoPath().projection(projection);

    g.appendSelect('g.world')
      .selectAll('path')
      .data(countries.features)
      .enter()
      .append('path')
      .attr('class', d => 'c-' + d.properties.slug + ' level-0')
      .style('stroke',props.map_stroke_color)
      .style('stroke-width',props.map_stroke_width)
      // .style('fill', function(d) {
      //   let value = scaleY(weeklyChange[d.properties.slug]);
      //   if (value === 0) {
      //     return 'gray'
      //   } else if (value > 0) {
      //     return 'steelblue'
      //   } else if (value < 0) {
      //     return 'black'
      //   }

      // })
      .attr('d', path);

    g.appendSelect('g.centroids')
      .selectAll('.centroid')
      .data(countries.features)
      .enter()
      .append('path')
      .attr('class', d => d.properties.slug + ' centroids')
      .attr('d', function(d) {
        let obj = projection(d.properties.centroid);
        let o = data.filter(e=>d.properties.isoAlpha2===e.key)[0]
        if (o){
          let value = scaleY(o.value);
           return 'M' + (obj[0] - xVal) + ' ' + obj[1] + ' L' + obj[0] + ' ' + (obj[1] - value)+ ' L' + (obj[0] + xVal) + ' ' + obj[1] + ' '
        }
      })
      .style('fill', function(d) {
        let o = data.filter(e=>d.properties.isoAlpha2===e.key)[0]
        if (o){
          if (o.value>=.9){
            return 'url("#red")'
          } else if (o.value>=.75){
            return 'url("#orange")'
          } else {
            return 'url("#white")'
          }
        }
      })
      .style('stroke', function(d) {
        let o = data.filter(e=>d.properties.isoAlpha2===e.key)[0]
        if (o){
          if (o.value>=.9){
            return '#de2d26'
          } else if (o.value>=.75){
            return '#f68e26'
          } else {
            return 'rgba(255,255,255,.8)'
          }
        }
      })
      .style('stroke-width',.5)

    return this;
  }
}

export default GlobalRateMap;
