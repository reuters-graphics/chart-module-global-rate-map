import ChartComponent from './base/ChartComponent';
import d3 from './utils/d3';
import population from './pop.json';
import * as topojson from 'topojson-client';
import { mintChocolateCaraCara } from '@reuters-graphics/style-color/dist/diverging';
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
    const { width } = node.getBoundingClientRect();

    const gradients = [{
      color: props.fill,
      start_opacity: 1,
      mid_opacity: 0.8,
      stop_opacity: .2,
      id: 'up'
    },
    {
      color: props.low,
      start_opacity: .2,
      mid_opacity: 0.8,
      stop_opacity: 1,
      id: 'down',
    }];

    const transition = d3.transition()
      .duration(750);

    const weeklyChange = {};
    const weeklyArray = data.latestWeeklyAvgs.deaths;
    const casesArray = data.latestTotals.deaths;
    const maxCasesArray = {};

    let maxChange = 0;
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

    const color = d3.scaleLinear()
      .domain([-50, 0, 50])
      .range(['green', 'white', 'red']);

    console.log(minChange, maxChange)
    let useMax = d3.max([maxChange, minChange*-1])
    let scaleY = d3.scaleLinear().range([1,100]).domain([0,maxCases])
    let scaleX = d3.scaleLinear().range([2,25]).domain([0,maxCases])
    let angle = d3.scaleLinear().range([180,90,10,0]).domain([minChange,0,100,maxChange])
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
      //   const value = scaleY(weeklyChange[d.properties.slug]);
      //   return color(value)
      // })
      .attr('d', path);

    g.appendSelect('g.centroids')
      .selectAll('.centroid')
      .data(countries.features)
      .enter()
      .append('path')
      .attr('class', d => d.properties.slug + ' centroids')
      .attr('transform',function(d) {
        let value = angle(weeklyChange[d.properties.slug]);
        let obj = projection(d.properties.centroid);
        if (value){
          return 'translate('+obj[0]+','+obj[1]+') rotate('+value+' 0 0)'
        }
      })
      .attr('d', function(d) {
        let value;
        let xVal = 2;
        // console.log(weeklyChange[d.properties.slug],scaleY(weeklyChange[d.properties.slug]))
        value = scaleY(maxCasesArray[d.properties.slug]);
        // console.log(value);
        if (value) {
          return 'M' + (0 - xVal) + ' ' + 0 + ' L' + 0 + ' ' + (0 - value)+ ' L' + (0 + xVal) + ' ' + 0 + ' '
        }
      })
      // .attr('fill','none')
      // .attr('stroke', 'black')
      .attr('fill', d => colorReturn(weeklyChange[d.properties.slug]))
      .attr('stroke-width', 1)
      // .attr('fill', d => weeklyChange[d.properties.slug] >= 0 ? 'url(#up)' : 'url(#down)')
      .style('opacity', 0.7);

    return this;
  }
}

function colorReturn (d){
  if (d>=-0.5 && d<=0.5){
    return '#fce587'
  } else if (d>.5){
    return '#de2d26'
  } else if (d<-.5){
    return '#31a354'
  }
}

export default GlobalRateMap;
