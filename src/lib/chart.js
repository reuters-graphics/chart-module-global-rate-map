import ChartComponent from './base/ChartComponent';
import d3 from './utils/d3';
import population from './pop.json';
import * as topojson from 'topojson-client';

import AtlasMetadataClient from '@reuters-graphics/graphics-atlas-client';
const client = new AtlasMetadataClient();
// import topology from '@reuters-graphics/graphics-atlas-client/topojson/global.110m.json';

class GlobalRateMap extends ChartComponent {
  defaultProps = {
    stroke: '#aaa',
    strokeWidth: 1,
    up_arrow_fill: '#ee665b',
    down_arrow_fill: '#74c476',
    up_poly_fill: 'rgba(238, 102, 91, .1)',
    down_poly_fill: 'rgba(116, 196, 118, .1)',
    low: '#000',
    height: 400,
    geo: false,
  };

  draw() {
    let symbols = {}
    const data = this.data();
    data.forEach(function(d){
      console.log(d)
      if (d.values[1]<d.values[2] && d.values[2]<d.values[3] && d.values[0]<d.values[1]){
        console.log(d.key)
        symbols[d.key] = 'up'
      } else if (d.values[1]>d.values[2] && d.values[2]>d.values[3] && d.values[0]>d.values[1]){
        symbols[d.key] = 'down'
      }
    });

    const props = this.props();
    const node = this.selection().node();
    const margin = {left: 60, right: 50, top: 10, bottom: 30}
    const { width } = node.getBoundingClientRect();

    const gradients = [ {
      color: props.fill,
      start_opacity: 1,
      mid_opacity: 0.8,
      stop_opacity: 0,
      id: 'up' },
    {
      color: props.low,
      start_opacity: 0,
      mid_opacity: 0.8,
      stop_opacity: 1,
      id: 'down',
    }];

    const transition = d3.transition()
      .duration(750);

    const svg = this.selection()
      .appendSelect('svg') // see docs in ./utils/d3.js
      .attr('width', width)
      .attr('height', props.height);

    const g = svg.appendSelect('g')
      .attr('transform', `translate(${0}, ${0})`);

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
      .style('fill', function(d) {
        const f = symbols[d.properties.isoAlpha2];
        if (f) {
          if (f==='up') {
            return props.up_poly_fill
          } else {
            return props.down_poly_fill
          }
        }
      })
      .attr('d', path);

    g.appendSelect('g.centroids')
      .selectAll('.centroid')
      .data(countries.features.filter(d => symbols[d.properties.isoAlpha2]))
      .enter()
      .append('path')
      .attr('class', d => d.properties.slug + ' centroids')
      .attr('transform', function(d) {
        let obj = projection(d.properties.centroid);
        return `translate(${obj[0]},${obj[1]})`;
      })
      .attr('d', function(d) {
        if (symbols[d.properties.isoAlpha2]=='up'){
          return 'M' + (0 - 3) + ' ' + 0 + ' L' + 0 + ' ' + (0 - 5)+ ' L' + (0 + 3) + ' ' + 0 + ' '
        }else if (symbols[d.properties.isoAlpha2]=='down'){
          return 'M' + (0 - 3) + ' ' + 0 + ' L' + 0 + ' ' + (0 + 5)+ ' L' + (0 + 3) + ' ' + 0 + ' '
        }
      })
      // .attr('stroke', d => weeklyChange[d.properties.slug] >= 0 ? props.fill : props.low)
      .attr('stroke-width', 0.5)
      .attr('fill', d => symbols[d.properties.isoAlpha2]==='up' ? props.up_arrow_fill : props.down_arrow_fill)
      .style('opacity', 0.7);

    return this;
  }
}

export default GlobalRateMap;
