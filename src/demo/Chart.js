import Chart from '../lib/chart.js';
import ChartContainer from './furniture/ChartContainer';
import React from 'react';
import debounce from 'lodash/debounce';
import defaultData from './defaultData.json';
import defaultGeo from './topo.json';
import oceania from './oceania.json';
import europe from './europe.json';
const newData = [];

for (var key of Object.keys(defaultData.distributionRanks.cases)) {
  newData.push({
    key,
    value: defaultData.distributionRanks.cases[key],
  });
}
class ChartComponent extends React.Component {
  state = { width: '992' };
  chartContainer = React.createRef();

  // Instantiate and add our chart class to this component.
  chart = new Chart();

  // A resize function to redraw the chart.
  resize = debounce(() => { this.chart.draw(); }, 250);

  componentDidMount() {
    // Use our chart module.
    this.chart
      .selection(this.chartContainer.current)
      .data(newData)
      .topojson(defaultGeo)
      .props({
        locale: 'ja',
        // map_custom_projections: {
        //   projection: 'geoNaturalEarth1',
        //   center: [0, 5],
        //   rotate: [-180, 0],
        //   clip_box: [[111, 2], [230, -50]],
        // },
        // annotations: {
        //   name: ['AU', 'NZ', 'french-polynesia', 'papua-new-guinea'],
        //   value: ['AU', 'NZ', 'french-polynesia', 'papua-new-guinea'],
        // },
        mobile: false,
        heightRatio: (width, breakpoint) => (width < breakpoint ? 0.5 : 0.4),
      })
      .draw();

    // Use it again.
    // setTimeout(() => {
    //   this.chart
    //     .data(newData)
    //     .topojson(europe)
    //     .props({
    //       map_custom_projections: {
    //         projection: 'geoNaturalEarth1',
    //         center: null,
    //         scale: null,
    //         rotate: null,
    //         clip_box: [[-30, 71], [66, 34]],
    //       },
    //       annotations: {
    //         name: ['russia', 'spain'],
    //         value: ['RU', 'ES'],
    //       },
    //       heightRatio: (width, breakpoint) => (width < breakpoint ? 1 : 0.7),
    //     })
    //     .draw();
    // }, 2000);
    // setTimeout(() => {
    //   this.chart
    //     .data([30, 50, 30])
    //     .props({ fill: base.blue.hex })
    //     .draw();
    // }, 2000);

    // Add a listener to resize chart with the window.
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    // Remove listener if the component is removed, too.
    window.removeEventListener('resize', this.resize);
  }

  componentDidUpdate() {
    // Update the chart with the component.
    // Can change data or props here, whatever...
    this.chart.draw();
  }

  render() {
    const { width } = this.state;
    return (
      <ChartContainer width={width} setWidth={(width) => this.setState({ width })}>
        {/* This is our chart container 👇 */}
        <div id='chart' ref={this.chartContainer} />
      </ChartContainer>
    );
  }
}

export default ChartComponent;
