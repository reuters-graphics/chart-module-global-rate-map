![](./badge.svg)

# GlobalRateMap

### Install

```
$ yarn add @reuters-graphics/chart-module-globalratemap
```

### Use

```javascript
import GlobalRateMap from '@reuters-graphics/chart-module-globalratemap';

const myChart = new GlobalRateMap();

// To create your chart, pass a selector string to the chart's selection method,
// as well as any props or data to their respective methods. Then call draw.
myChart
  .selection('#chart')
  // Data needs to be in this format
  .data([{
    'key': 'US',
    'value': .6,
  },
  {
    'key': 'IN',
    'value': .9,
  }])
  .props({ 
    // Stroke on the country borders
    map_stroke_width: 0.7,

    // Color on country borders
    map_stroke_color: 'rgba(255, 255, 255, 0.15)',

    // Color on country borders when hovered
    map_stroke_color_active: 'rgba(255, 255, 255, 0.5)',

    // Map fill
    map_fill: '#333',

    // Map height
    height: 400,

    // Topojson
    geo: false,

    // Locale for country names on hover
    locale: 'en',

    // Gap between text and centroid on hover
    hover_gap: 12.5,

    // Max height of the spike
    spike_height: 20,

    // Half of base for the spike
    spike_size: 2,

    // Stroke width of the spike
    spike_stroke_width: 0.8,

    // Stroke width of the spike when highlighted
    spike_highlight_stroke_width: 1.2,

    // Range of values to filter the data on. Use this for mobile maps.
    range: {min: 0, max: 1},

    // clip_box helps clip the map to a custom bounding box. 
    // If not passed, it maps to the full shapefile.
    // Data is an array as two lng/lat points.
    // First value is the top left corner
    // Second value is the bottom right corner

    // Can use http://bboxfinder.com/ to find a bounding box
    clip_box: [
          [-13.271484, 23.523700], [50.009766,48.603858]
    ],
  })
  .draw();

// You can call any method again to update the chart.
myChart
  .data([{
    'key': 'BR',
    'value': .6,
  },
  {
    'key': 'IN',
    'value': 1,
  }])
  .draw();

// Or just call the draw function alone, which is useful for resizing the chart.
myChart.draw();
```

To apply this chart's default styles when using SCSS, simply define the variable `$GlobalRateMap-container` to represent the ID or class of the chart's container(s) and import the `_chart.scss` partial.

```CSS
$GlobalRateMap-container: '#chart';

@import '~@reuters-graphics/chart-module-globalratemap/scss/main';
```

## Developing chart modules

Read more in the [DEVELOPING docs](./DEVELOPING.md) about how to write your chart module.
