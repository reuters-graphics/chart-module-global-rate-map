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

    // map highlight stroke width
    map_highlight_stroke_width: 1.2,

    // Color on country borders when hovered
    map_stroke_color_active: 'rgba(255, 255, 255, 0.5)',

    // Map fill
    map_fill: '#333',

    // Map height
    heightRatio: (width, breakpoint) => (width < breakpoint ? 0.8 : 0.5),

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

    map_custom_projections: {
      // clip_box helps clip the map to a custom bounding box. 
      // If not passed, it maps to the full shapefile.
      // Data is an array as two lng/lat points.
      // First value is the top left corner
      // Second value is the bottom right corner

      // Can use http://bboxfinder.com/ to find a bounding box
      clip_box: [
            [-13.271484, 23.523700], [50.009766,48.603858]
      ],
      // Pass the d3 projection name you want to use
      projection: 'geoNaturalEarth1',

      // custom centre of the map
      center: null,

      // custom scale of the map
      scale: null,

      // custom rotate of the map
      rotate: null,

      annotations: {
        // An array of all places (names, codes or slugs) for which you want a fixed name label
        name: ['india','RU','US'],
        // An array of all places (names, codes or slugs) for which you want a fixed value label
        value: ['RU','Brazil'],
      },

      // If you want interaction on hover
      interaction: true,
      // If you want the inset on mobile
      mobile: true,
      refBox: {
        // height of the inset box
        height: 90,
        // width of the inset box
        width: 180,
        // width breakpoint at which to show inset
        breakpoint: 900,
        // what is the width of the svg going to be
        useWidth: (width,factor) => (width * factor),
        // the factor that is to be used in the above function
        factor: 2.2,
      },
    },
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
