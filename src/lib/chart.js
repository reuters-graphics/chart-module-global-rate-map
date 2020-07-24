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
    fill: 'steelblue',
    low: '#000',
    height: 400,
    geo: false,
  };

  draw() {

    const data = this.data()[0];
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
    const weeklyChange = {};
    const weeklyArray = data.latestWeeklyAvgs.cases;
    const casesArray = data.latestTotals.cases;
    const maxCasesArray={};

    let maxChange = 0
    let minChange = 0;
    for (var key of Object.keys(weeklyArray)) {
      if (key!='EH' && key!='HR') {
        weeklyChange[client.getCountrySlug(key)] = (weeklyArray[key][weeklyArray[key].length-1] - weeklyArray[key][weeklyArray[key].length-2]) / (weeklyArray[key][weeklyArray[key].length-2]) * 100
        if (!isFinite(weeklyChange[client.getCountrySlug(key)])) {
          weeklyChange[client.getCountrySlug(key)] = 0;
        }
        if (weeklyChange[client.getCountrySlug(key)] > maxChange && (weeklyArray[key][weeklyArray[key].length-1]!=0 && weeklyArray[key][weeklyArray[key].length-2]!=0)) {
          maxChange = weeklyChange[client.getCountrySlug(key)];
        } else if (weeklyChange[client.getCountrySlug(key)] < minChange) {
          minChange = weeklyChange[client.getCountrySlug(key)];
        }
      }
    };
    let maxCases = 0;
    for (var key of Object.keys(casesArray)) {
      if (key != 'EH' && key != 'HR') {
        maxCases = (casesArray[key]>maxCases) ? casesArray[key] : maxCases
        maxCasesArray[client.getCountrySlug(key)] = casesArray[key];
      }
    }

    let useMax = d3.max([maxChange,minChange*-1])
    let scaleY = d3.scaleLinear().range([0,100]).domain([0,useMax])
    let scaleX = d3.scaleLinear().range([2,25]).domain([0,maxCases])

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
        let value;
        let xVal = scaleX(maxCasesArray[d.properties.slug]);
        // console.log(weeklyChange[d.properties.slug],scaleY(weeklyChange[d.properties.slug]))
        if (weeklyChange[d.properties.slug] < 0) {
          value = scaleY(weeklyChange[d.properties.slug]);
        } else {
          value = scaleY(weeklyChange[d.properties.slug]);
        }
        // console.log(value);
        if (value) {
          return 'M' + (obj[0] - xVal) + ' ' + obj[1] + ' L' + obj[0] + ' ' + (obj[1] - value)+ ' L' + (obj[0] + xVal) + ' ' + obj[1] + ' '
        } else {
          console.log(d.properties.slug)
        }
      })
      .attr('stroke', d => weeklyChange[d.properties.slug] >= 0 ? props.fill : props.low)
      .attr('stroke-width', 0.5)
      .attr('fill', d => weeklyChange[d.properties.slug] >= 0 ? 'url(#up)' : 'url(#down)')
      .style('opacity', 0.7);

    return this;
  }
}

export default GlobalRateMap;
