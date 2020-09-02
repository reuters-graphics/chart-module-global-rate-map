'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var AtlasMetadataClient = _interopDefault(require('@reuters-graphics/graphics-atlas-client'));
var d3 = require('d3');
var merge = _interopDefault(require('lodash/merge'));
var d3GeoVoronoi = require('d3-geo-voronoi');
var Mustache = _interopDefault(require('mustache'));

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function identity(x) {
  return x;
}

function transform(transform) {
  if (transform == null) return identity;
  var x0,
      y0,
      kx = transform.scale[0],
      ky = transform.scale[1],
      dx = transform.translate[0],
      dy = transform.translate[1];
  return function(input, i) {
    if (!i) x0 = y0 = 0;
    var j = 2, n = input.length, output = new Array(n);
    output[0] = (x0 += input[0]) * kx + dx;
    output[1] = (y0 += input[1]) * ky + dy;
    while (j < n) output[j] = input[j], ++j;
    return output;
  };
}

function reverse(array, n) {
  var t, j = array.length, i = j - n;
  while (i < --j) t = array[i], array[i++] = array[j], array[j] = t;
}

function feature(topology, o) {
  return o.type === "GeometryCollection"
      ? {type: "FeatureCollection", features: o.geometries.map(function(o) { return feature$1(topology, o); })}
      : feature$1(topology, o);
}

function feature$1(topology, o) {
  var id = o.id,
      bbox = o.bbox,
      properties = o.properties == null ? {} : o.properties,
      geometry = object(topology, o);
  return id == null && bbox == null ? {type: "Feature", properties: properties, geometry: geometry}
      : bbox == null ? {type: "Feature", id: id, properties: properties, geometry: geometry}
      : {type: "Feature", id: id, bbox: bbox, properties: properties, geometry: geometry};
}

function object(topology, o) {
  var transformPoint = transform(topology.transform),
      arcs = topology.arcs;

  function arc(i, points) {
    if (points.length) points.pop();
    for (var a = arcs[i < 0 ? ~i : i], k = 0, n = a.length; k < n; ++k) {
      points.push(transformPoint(a[k], k));
    }
    if (i < 0) reverse(points, n);
  }

  function point(p) {
    return transformPoint(p);
  }

  function line(arcs) {
    var points = [];
    for (var i = 0, n = arcs.length; i < n; ++i) arc(arcs[i], points);
    if (points.length < 2) points.push(points[0]); // This should never happen per the specification.
    return points;
  }

  function ring(arcs) {
    var points = line(arcs);
    while (points.length < 4) points.push(points[0]); // This may happen if an arc has only two points.
    return points;
  }

  function polygon(arcs) {
    return arcs.map(ring);
  }

  function geometry(o) {
    var type = o.type, coordinates;
    switch (type) {
      case "GeometryCollection": return {type: type, geometries: o.geometries.map(geometry)};
      case "Point": coordinates = point(o.coordinates); break;
      case "MultiPoint": coordinates = o.coordinates.map(point); break;
      case "LineString": coordinates = line(o.arcs); break;
      case "MultiLineString": coordinates = o.arcs.map(line); break;
      case "Polygon": coordinates = polygon(o.arcs); break;
      case "MultiPolygon": coordinates = o.arcs.map(polygon); break;
      default: return null;
    }
    return {type: type, coordinates: coordinates};
  }

  return geometry(o);
}

function stitch(topology, arcs) {
  var stitchedArcs = {},
      fragmentByStart = {},
      fragmentByEnd = {},
      fragments = [],
      emptyIndex = -1;

  // Stitch empty arcs first, since they may be subsumed by other arcs.
  arcs.forEach(function(i, j) {
    var arc = topology.arcs[i < 0 ? ~i : i], t;
    if (arc.length < 3 && !arc[1][0] && !arc[1][1]) {
      t = arcs[++emptyIndex], arcs[emptyIndex] = i, arcs[j] = t;
    }
  });

  arcs.forEach(function(i) {
    var e = ends(i),
        start = e[0],
        end = e[1],
        f, g;

    if (f = fragmentByEnd[start]) {
      delete fragmentByEnd[f.end];
      f.push(i);
      f.end = end;
      if (g = fragmentByStart[end]) {
        delete fragmentByStart[g.start];
        var fg = g === f ? f : f.concat(g);
        fragmentByStart[fg.start = f.start] = fragmentByEnd[fg.end = g.end] = fg;
      } else {
        fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
      }
    } else if (f = fragmentByStart[end]) {
      delete fragmentByStart[f.start];
      f.unshift(i);
      f.start = start;
      if (g = fragmentByEnd[start]) {
        delete fragmentByEnd[g.end];
        var gf = g === f ? f : g.concat(f);
        fragmentByStart[gf.start = g.start] = fragmentByEnd[gf.end = f.end] = gf;
      } else {
        fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
      }
    } else {
      f = [i];
      fragmentByStart[f.start = start] = fragmentByEnd[f.end = end] = f;
    }
  });

  function ends(i) {
    var arc = topology.arcs[i < 0 ? ~i : i], p0 = arc[0], p1;
    if (topology.transform) p1 = [0, 0], arc.forEach(function(dp) { p1[0] += dp[0], p1[1] += dp[1]; });
    else p1 = arc[arc.length - 1];
    return i < 0 ? [p1, p0] : [p0, p1];
  }

  function flush(fragmentByEnd, fragmentByStart) {
    for (var k in fragmentByEnd) {
      var f = fragmentByEnd[k];
      delete fragmentByStart[f.start];
      delete f.start;
      delete f.end;
      f.forEach(function(i) { stitchedArcs[i < 0 ? ~i : i] = 1; });
      fragments.push(f);
    }
  }

  flush(fragmentByEnd, fragmentByStart);
  flush(fragmentByStart, fragmentByEnd);
  arcs.forEach(function(i) { if (!stitchedArcs[i < 0 ? ~i : i]) fragments.push([i]); });

  return fragments;
}

function mesh(topology) {
  return object(topology, meshArcs.apply(this, arguments));
}

function meshArcs(topology, object, filter) {
  var arcs, i, n;
  if (arguments.length > 1) arcs = extractArcs(topology, object, filter);
  else for (i = 0, arcs = new Array(n = topology.arcs.length); i < n; ++i) arcs[i] = i;
  return {type: "MultiLineString", arcs: stitch(topology, arcs)};
}

function extractArcs(topology, object, filter) {
  var arcs = [],
      geomsByArc = [],
      geom;

  function extract0(i) {
    var j = i < 0 ? ~i : i;
    (geomsByArc[j] || (geomsByArc[j] = [])).push({i: i, g: geom});
  }

  function extract1(arcs) {
    arcs.forEach(extract0);
  }

  function extract2(arcs) {
    arcs.forEach(extract1);
  }

  function extract3(arcs) {
    arcs.forEach(extract2);
  }

  function geometry(o) {
    switch (geom = o, o.type) {
      case "GeometryCollection": o.geometries.forEach(geometry); break;
      case "LineString": extract1(o.arcs); break;
      case "MultiLineString": case "Polygon": extract2(o.arcs); break;
      case "MultiPolygon": extract3(o.arcs); break;
    }
  }

  geometry(object);

  geomsByArc.forEach(filter == null
      ? function(geoms) { arcs.push(geoms[0].i); }
      : function(geoms) { if (filter(geoms[0].g, geoms[geoms.length - 1].g)) arcs.push(geoms[0].i); });

  return arcs;
}

var ChartError = /*#__PURE__*/function (_Error) {
  _inherits(ChartError, _Error);

  var _super = _createSuper(ChartError);

  function ChartError() {
    var _this;

    var constructorName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Chart component';

    _classCallCheck(this, ChartError);

    _this = _super.call(this, constructorName);
    _this.constructorName = constructorName;
    _this.name = 'ChartComponentError';
    return _this;
  }

  return ChartError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
var ErrorDrawMethodUndefined = /*#__PURE__*/function (_ChartError) {
  _inherits(ErrorDrawMethodUndefined, _ChartError);

  var _super2 = _createSuper(ErrorDrawMethodUndefined);

  function ErrorDrawMethodUndefined() {
    var _this2;

    _classCallCheck(this, ErrorDrawMethodUndefined);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this2), "message", "".concat(_this2.constructorName, " should have a draw method"));

    return _this2;
  }

  return ErrorDrawMethodUndefined;
}(ChartError);
var ErrorSelectorType = /*#__PURE__*/function (_ChartError2) {
  _inherits(ErrorSelectorType, _ChartError2);

  var _super3 = _createSuper(ErrorSelectorType);

  function ErrorSelectorType() {
    var _this3;

    _classCallCheck(this, ErrorSelectorType);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this3 = _super3.call.apply(_super3, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this3), "message", "".concat(_this3.constructorName, " selector should be a DOM Element or selector string"));

    return _this3;
  }

  return ErrorSelectorType;
}(ChartError);
var ErrorTopojsonType = /*#__PURE__*/function (_ChartError3) {
  _inherits(ErrorTopojsonType, _ChartError3);

  var _super4 = _createSuper(ErrorTopojsonType);

  function ErrorTopojsonType() {
    var _this4;

    _classCallCheck(this, ErrorTopojsonType);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this4 = _super4.call.apply(_super4, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this4), "message", "".concat(_this4.constructorName, " topojson should be an Object"));

    return _this4;
  }

  return ErrorTopojsonType;
}(ChartError);
var ErrorPropsType = /*#__PURE__*/function (_ChartError4) {
  _inherits(ErrorPropsType, _ChartError4);

  var _super5 = _createSuper(ErrorPropsType);

  function ErrorPropsType() {
    var _this5;

    _classCallCheck(this, ErrorPropsType);

    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    _this5 = _super5.call.apply(_super5, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this5), "message", "".concat(_this5.constructorName, " props should be an Object"));

    return _this5;
  }

  return ErrorPropsType;
}(ChartError);
var ErrorDataType = /*#__PURE__*/function (_ChartError5) {
  _inherits(ErrorDataType, _ChartError5);

  var _super6 = _createSuper(ErrorDataType);

  function ErrorDataType() {
    var _this6;

    _classCallCheck(this, ErrorDataType);

    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    _this6 = _super6.call.apply(_super6, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this6), "message", "".concat(_this6.constructorName, " data should be an Array"));

    return _this6;
  }

  return ErrorDataType;
}(ChartError);

d3.selection.prototype.moveToFront = function () {
  return this.each(function () {
    this.parentNode.appendChild(this);
  });
};

d3.selection.prototype.moveToBack = function () {
  return this.each(function () {
    var firstChild = this.parentNode.firstChild;

    if (firstChild) {
      this.parentNode.insertBefore(this, firstChild);
    }
  });
}; // ... and the important addition. ⬇️⬇️⬇️

/**
 * appendSelect either selects a matching child element of your current
 * selection if one exists or appends that child and selects it. It's useful
 * for writing idempotent chart functions.
 *
 * Use it like this:
 *
 * selection.appendSelect(<query selector>)
 *
 * It can be chained like any normal d3 selection:
 *
 * const g = d3.select(myNode).appendSelect('g', 'viz-group');
 * g.appendSelect('rect')
 *   .attr('x', 0); etc.
 *
 * @param  {string} querySelector  String representation of element to be
 *                                 appended/selected, e.g., div.myClass, svg,
 *                                 button.myClass.anotherClass.
 * @return {object}     d3 selection of child element
 */


d3.selection.prototype.appendSelect = function (querySelector) {
  // Test querySlector w/ classes
  if (!/^[a-zA-Z]+[0-9]?\.-?[_a-zA-Z][_a-zA-Z0-9.-]*[a-zA-Z0-9]*$/.test(querySelector)) {
    // Test querySelector just an element
    if (!/^[a-zA-Z]+[0-9]?$/.test(querySelector)) {
      throw new Error("Invalid query selector passed to appendSelect. Must be an element with zero or more classes: \"div.myClass.another\". Got \"".concat(querySelector, "\"."));
    }
  }

  var element = querySelector.split('.')[0];
  var classes = querySelector.split('.').slice(1);
  var selection = this.select(querySelector);
  if (!selection.empty()) return selection;
  selection = this.append(element);
  classes.forEach(function (cls) {
    return selection.classed(cls, true);
  });
  return selection;
};

var ChartComponent = /*#__PURE__*/function () {
  function ChartComponent(selector, props, data) {
    _classCallCheck(this, ChartComponent);

    _defineProperty(this, "defaultProps", {});

    _defineProperty(this, "defaultData", []);

    this.selection(selector);
    this.props(props);
    this.data(data);
  }
  /**
   * Getter/setter for DOM node chart is drawn into
   * @param  {String or Element} selector
   */


  _createClass(ChartComponent, [{
    key: "selection",
    value: function selection(selector) {
      if (!selector) return this._selection;

      if (!(selector instanceof Element) && typeof selector !== 'string') {
        throw new ErrorSelectorType(this.constructor.name);
      }

      this._selection = d3.select(selector);
      return this;
    }
    /**
     * Default props
     * @type {Object}
     */

  }, {
    key: "props",

    /**
     * Getter/setter for props object
     * @param  {Object} obj props
     */
    value: function props(obj) {
      if (!obj) return this._props || this.defaultProps;

      if (!(obj instanceof Object)) {
        throw new ErrorPropsType(this.constructor.name);
      }

      this._props = merge(this._props || this.defaultProps, obj);
      return this;
    }
    /**
     * Default data
     * @type {Array}
     */

  }, {
    key: "data",

    /**
     * Getter/setter for chart data
     * @param  {Array} arr data
     */
    value: function data(arr) {
      if (!arr) return this._data || this.defaultData;

      if (!(arr instanceof Array)) {
        throw new ErrorDataType(this.constructor.name);
      }

      this._data = arr;
      return this;
    }
    /**
     * Getter/setter for chart topojson
     * @param  {Object} obj topology
     */

  }, {
    key: "topojson",
    value: function topojson(obj) {
      if (!obj) return this._topojson || {};

      if (_typeof(obj) !== 'object') {
        throw new ErrorTopojsonType(this.constructor.name);
      }

      this._topojson = obj;
      return this;
    }
  }, {
    key: "draw",
    value: function draw() {
      throw new ErrorDrawMethodUndefined(this.constructor.name);
    }
  }]);

  return ChartComponent;
}();

var Atlas = new AtlasMetadataClient(); // import topology from '@reuters-graphics/graphics-atlas-client/topojson/global.110m.json';

var GlobalRateMap = /*#__PURE__*/function (_ChartComponent) {
  _inherits(GlobalRateMap, _ChartComponent);

  var _super = _createSuper(GlobalRateMap);

  function GlobalRateMap() {
    var _this;

    _classCallCheck(this, GlobalRateMap);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "defaultProps", {
      map_stroke_width: 1,
      map_stroke_color: '#2f353f',
      map_highlight_stroke_width: 1.2,
      map_fill: 'rgba(153,153,153,0.25)',
      map_stroke_color_active: 'rgba(255, 255, 255, 0.75)',
      spike_color: '#eec331',
      heightRatio: function heightRatio(width, breakpoint) {
        return width < breakpoint ? 0.8 : 0.5;
      },
      locale: 'en',
      map_custom_projections: {
        clip_box: [[-130, 70], [194, -39]],
        projection: 'geoNaturalEarth1',
        center: null,
        scale: null,
        rotate: null
      },
      hover_gap: 12.5,
      spike_height: 35,
      spike_size: 3.5,
      getDataRange: function getDataRange(width) {
        return {
          min: 0,
          max: 1
        };
      },
      spike_stroke_width: 0.5,
      spike_highlight_stroke_width: 2,
      spike_highlight_fill: true,
      spike_color_scale: d3.scaleThreshold() // Can use a scale as a prop!
      .domain([0.75, 0.9]).range(['#ccc', '#f68e26', '#de2d26']),
      spike_stroke_width_scale: d3.scaleThreshold() // Can use a scale as a prop!
      .domain([0.75, 0.9]).range([0.6, 0.9, 1.1]),
      spike_inactive_opacity: 1,
      disputed_dasharray: [5, 3],
      key: {
        text: {
          main_text: 'How close is the current weekly average to the country’s peak',
          red_peak: '>90%',
          orange_peak: '90 to 75%',
          white_peak: '<75%'
        },
        width: 140
      },
      annotations: {
        name: [],
        value: []
      },
      mobile: true,
      refBox: {
        height: 90,
        width: 180,
        breakpoint: 900,
        useWidth: function useWidth(width, factor) {
          return width * factor;
        },
        factor: 2.2
      },
      interaction: true,
      at_peak_text: 'At peak',
      of_peak_text: "<tspan> {{ percent }}</tspan> <tspan class='smaller'>of peak</tspan>"
    });

    return _this;
  }

  _createClass(GlobalRateMap, [{
    key: "draw",
    value: function draw() {
      var data = this.data();
      var props = this.props();
      var topo = this.topojson();
      if (!topo) return this;
      var node = this.selection().node();

      var _node$getBoundingClie = node.getBoundingClientRect(),
          width = _node$getBoundingClie.width;

      var ratio = props.heightRatio(width, props.refBox.breakpoint);
      var useWidth, height;

      if (width < props.refBox.breakpoint && props.mobile) {
        useWidth = props.refBox.useWidth(width, props.refBox.factor);
        this.selection().classed('mobile', true);
        height = useWidth * 0.5;
      } else {
        useWidth = width;
        this.selection().classed('mobile', false);
        height = width * ratio;
      }

      var _props$getDataRange = props.getDataRange(width),
          filterMin = _props$getDataRange.min,
          filterMax = _props$getDataRange.max;

      var filteredData = data.filter(function (d) {
        return d.value >= filterMin && d.value <= filterMax;
      });
      var scaleY = d3.scaleLinear().range([0, props.spike_height]).domain([0, 1]);
      var keyBox = this.selection().appendSelect('div.key');
      keyBox.appendSelect('p.left-text.text-inline.key-text').html(props.key.text.main_text);
      var keySvgContainer = keyBox.appendSelect('div.svg-container.text-inline');
      var keyGap = props.key.width / 3; // add key box

      var keySvg = keySvgContainer.appendSelect('svg.text-inline').attr('height', props.spike_height + 6).style('fill', 'none').attr('width', props.key.width - keyGap * 0.27);
      keySvg.appendSelect('defs').appendSelect('marker.top').attr('id', 'arrow-up').attr('markerWidth', 12).attr('markerHeight', 10).attr('refY', 5).attr('refX', 6).attr('orient', 'auto').appendSelect('path.up').style('stroke', 'white').style('stroke-width', 0.6).attr('d', 'M0 0 L6 5 L0 10');
      keySvg.select('defs').appendSelect('marker.down').attr('id', 'arrow-down').attr('markerWidth', 12).attr('markerHeight', 10).attr('refY', 5).attr('refX', 0).attr('orient', 'auto').appendSelect('path.down').style('stroke', 'white').style('stroke-width', 0.6).attr('d', 'M6 0 L0 5 L6 10'); // add spike 1

      keySvg.appendSelect('path.red-spike.high').style('stroke', props.spike_color_scale(1)).attr('d', function (d) {
        var obj = [keyGap * 0.7, props.spike_height];
        var value = scaleY(1);
        return 'M' + (obj[0] - props.spike_size) + ' ' + obj[1] + ' L' + obj[0] + ' ' + (obj[1] - value) + ' L' + (obj[0] + props.spike_size) + ' ' + obj[1] + ' ';
      });
      keySvg.appendSelect('path.red-spike.low').style('stroke', props.spike_color_scale(0.9)).style('fill', props.spike_color_scale(0.9)).attr('d', function (d) {
        var obj = [keyGap * 0.7 + props.spike_size * 1.4, props.spike_height];
        var value = scaleY(0.9);
        return 'M' + (obj[0] - props.spike_size) + ' ' + obj[1] + ' L' + obj[0] + ' ' + (obj[1] - value) + ' L' + (obj[0] + props.spike_size) + ' ' + obj[1] + ' ';
      });
      keySvg.appendSelect('path.orange-spike.high').style('stroke', props.spike_color_scale(0.89)).attr('d', function (d, i) {
        var obj = [keyGap * 1.5, props.spike_height];
        var value = scaleY(0.89);
        return 'M' + (obj[0] - props.spike_size) + ' ' + obj[1] + ' L' + obj[0] + ' ' + (obj[1] - value) + ' L' + (obj[0] + props.spike_size) + ' ' + obj[1] + ' ';
      });
      keySvg.appendSelect('path.orange-spike.low').style('stroke', props.spike_color_scale(0.75)).style('fill', props.spike_color_scale(0.75)).attr('d', function (d) {
        var obj = [keyGap * 1.5 + props.spike_size * 1.4, props.spike_height];
        var value = scaleY(0.75);
        return 'M' + (obj[0] - props.spike_size) + ' ' + obj[1] + ' L' + obj[0] + ' ' + (obj[1] - value) + ' L' + (obj[0] + props.spike_size) + ' ' + obj[1] + ' ';
      });
      keySvg.appendSelect('path.white-spike.high').style('stroke', props.spike_color_scale(0.74)).attr('d', function (d, i) {
        var obj = [keyGap * 2.3, props.spike_height];
        var value = scaleY(0.74);
        return 'M' + (obj[0] - props.spike_size) + ' ' + obj[1] + ' L' + obj[0] + ' ' + (obj[1] - value) + ' L' + (obj[0] + props.spike_size) + ' ' + obj[1] + ' ';
      });
      keySvg.appendSelect('path.white-spike.low').style('stroke', '#ccc').style('fill', '#ccc').attr('d', function (d, i) {
        var obj = [keyGap * 2.3 + props.spike_size * 1.4, props.spike_height];
        var value = scaleY(0);
        return 'M' + (obj[0] - props.spike_size) + ' ' + obj[1] + ' L' + obj[0] + ' ' + (obj[1] - value) + ' L' + (obj[0] + props.spike_size) + ' ' + obj[1] + ' ';
      });
      keySvg.appendSelect('line').style('stroke', 'white').style('stroke-width', 0.7).attr('x1', 10).attr('x2', 10).attr('y1', 7).attr('y1', props.spike_height).attr('marker-end', 'url(#arrow-up)').attr('marker-start', 'url(#arrow-down)');
      var bottomKeyText = keySvgContainer.appendSelect('div.bottom-text').style('padding-left', "".concat(keyGap * 0.4, "px"));
      bottomKeyText.appendSelect('p.red-text.key-text.text-inline').style('width', "".concat(keyGap * 0.8, "px")).html(props.key.text.red_peak);
      bottomKeyText.appendSelect('p.orange-text.key-text.text-inline').style('width', "".concat(keyGap * 0.8, "px")).html(props.key.text.orange_peak);
      bottomKeyText.appendSelect('p.white-text.key-text.text-inline').style('width', "".concat(keyGap * 0.8, "px")).html(props.key.text.white_peak); // SVG begins here

      var svg = this.selection().appendSelect('div.chart-container-div').attr('id', 'map-container').style('overflow-x', 'scroll').appendSelect('svg.chart') // see docs in ./utils/d3.js
      .attr('width', useWidth).attr('height', height);
      var g = svg.appendSelect('g');

      if (!d3[props.map_custom_projections.projection]) {
        props.map_custom_projections.projection = 'geoNaturalEarth1';
      }

      var projection = d3[props.map_custom_projections.projection]();
      var countries = feature(topo, topo.objects.countries);
      var disputed;

      if (topo.objects.disputedBoundaries) {
        disputed = mesh(topo, topo.objects.disputedBoundaries);
      }

      if (props.map_custom_projections.center && props.map_custom_projections.center.length === 2) {
        projection.center(props.map_custom_projections.center);
      }

      if (props.map_custom_projections.rotate && props.map_custom_projections.rotate.length === 2) {
        projection.rotate(props.map_custom_projections.rotate);
      }

      var filteredCountryKeys = filteredData.map(function (d) {
        return d.key;
      });
      var countryCentroids = countries.features.filter(function (c) {
        return filteredCountryKeys.includes(c.properties.isoAlpha2);
      }).filter(function (c) {
        return c.properties.centroid.length == 2 && c.properties.centroid[0] && c.properties.centroid[1];
      }).map(function (_ref) {
        var properties = _ref.properties;
        return {
          type: 'Feature',
          properties: properties,
          geometry: {
            type: 'Point',
            coordinates: properties.centroid
          }
        };
      }); // Adding some points in the ocean to create voronoi spaces that will
      // reset the map, so as your cursor traces land masses, you get highlights,
      // but in the ocean you can see the whole world picture...

      var resetPoints = [[-40.248108, 38.653788], // North Atlantic
      [-29.800018, 14.536220], // Central Atlantic
      [-15.485548, -12.941648], // South Atlantic
      [-174.808659, 35.856127], // North Pacific
      [-117.324414, -11.130821], // South Pacific
      [-173.039131, -44.920697], // Southwest pacific
      [64.407024, 5.045815], // North Indian
      [75.569128, -31.691939], // South Indian
      [-5.783266, -83.608077] // Antarctica
      ];
      var voronoiCentroids = countryCentroids.concat(resetPoints.map(function (centroid) {
        return {
          type: 'Feature',
          properties: {
            reset: true
          },
          geometry: {
            type: 'Point',
            coordinates: centroid
          }
        };
      }));

      if (props.map_custom_projections.clip_box && props.map_custom_projections.clip_box.length === 2 && props.map_custom_projections.clip_box[0].length === 2 && props.map_custom_projections.clip_box[1].length === 2) {
        projection.fitSize([useWidth, height], makeRangeBox(props.map_custom_projections.clip_box));
      } else {
        projection.fitSize([useWidth, height], countries);
      }

      if (props.map_custom_projections.scale) {
        projection.scale(props.map_custom_projections.scale);
      }

      var path = d3.geoPath().projection(projection);
      svg.selectAll('.country,.disputed,.centroid').remove();
      var countryGroups = g.appendSelect('g.countries').style('pointer-events', 'none').style('fill', props.map_fill).selectAll('path.country').data(countries.features.filter(function (d) {
        return d.properties.slug !== 'antarctica';
      }), function (d) {
        return d.properties.slug;
      });
      countryGroups.enter().append('path').attr('class', function (d) {
        return "country c-".concat(d.properties.slug, " level-0");
      }).merge(countryGroups).style('stroke', props.map_stroke_color).style('stroke-width', props.map_stroke_width).attr('d', path);

      if (disputed) {
        g.appendSelect('path.disputed').attr('class', 'disputed level-0').style('pointer-events', 'none').style('stroke', props.map_stroke_color).style('stroke-width', props.map_stroke_width).style('fill', 'none').style('stroke-dasharray', props.disputed_dasharray).attr('d', path(disputed));
      }

      var sortedCentroids = countryCentroids.sort(function (a, b) {
        var aO = filteredData.filter(function (e) {
          return a.properties.isoAlpha2 === e.key;
        })[0];
        var bO = filteredData.filter(function (e) {
          return b.properties.isoAlpha2 === e.key;
        })[0];
        return aO.value - bO.value;
      });
      sortedCentroids.forEach(function (d) {
        var o = filteredData.filter(function (e) {
          return d.properties.isoAlpha2 === e.key;
        })[0];

        if (o) {
          d.value = o.value;
        }
      });
      var spikeCentroids = g.appendSelect('g.spike-layer').style('pointer-events', 'none').selectAll('path.centroid').data(sortedCentroids);
      spikeCentroids.enter().append('path').attr('class', function (d) {
        return d.properties.slug + ' centroid';
      }).merge(spikeCentroids).attr('d', function (d) {
        var obj = projection(d.properties.centroid);
        var value = scaleY(d.value);
        return 'M' + (obj[0] - props.spike_size) + ' ' + obj[1] + ' L' + obj[0] + ' ' + (obj[1] - value) + ' L' + (obj[0] + props.spike_size) + ' ' + obj[1] + ' ';
      }).style('fill', 'none').style('stroke', function (d) {
        return d.value ? props.spike_color_scale(d.value) : '#ccc';
      }).style('stroke-width', function (d) {
        return d.value ? props.spike_stroke_width_scale(d.value) : 0.5;
      });
      var countryVoronoiCentroids = g.appendSelect('g.voronoi').style('fill', 'none').style('cursor', props.interaction ? 'crosshair' : 'default').style('pointer-events', 'all').selectAll('path.voronoi').data(d3GeoVoronoi.geoVoronoi().polygons(voronoiCentroids).features);
      countryVoronoiCentroids.enter().append('path').attr('class', function (d) {
        return 'voronoi';
      }).merge(countryVoronoiCentroids).attr('d', path).on('mouseover', function (d) {
        if (props.interaction) {
          tipOn(d);
        }
      }).on('mouseout', function (d) {
        if (props.interaction) {
          tipOff(d);
        }
      });
      countryVoronoiCentroids.exit().remove();
      var tooltip = g.appendSelect('g.text-group').style('pointer-events', 'none').append('text');
      var annotationData = props.annotations.name.map(function (d) {
        var c = Atlas.getCountry(d);
        var geo = countryCentroids.filter(function (e) {
          return e.properties.isoAlpha2 === c.isoAlpha2;
        })[0];
        return {
          countryMeta: c,
          countryGeo: geo
        };
      });
      var annotationNumData = props.annotations.value.map(function (d) {
        var c = Atlas.getCountry(d);
        var geo = sortedCentroids.filter(function (e) {
          return e.properties.isoAlpha2 === c.isoAlpha2;
        })[0];
        return {
          countryMeta: c,
          countryGeo: geo
        };
      });
      annotationData = annotationData.filter(function (d) {
        return d.countryMeta && d.countryGeo;
      });
      annotationNumData = annotationNumData.filter(function (d) {
        return d.countryMeta && d.countryGeo;
      });
      var annotations = g.appendSelect('g.name-annotations').style('pointer-events', 'none').selectAll('text.annotation').data(annotationData, function (d) {
        return d.countryMeta.isoAlpha2;
      });
      annotations.enter().append('text').attr('class', 'annotation').merge(annotations).attr('transform', function (d) {
        var p = projection(d.countryGeo.geometry.coordinates);
        return "translate(".concat(p[0], ",").concat(p[1] + props.hover_gap, ")");
      }).text(function (d) {
        return d.countryMeta.translations[props.locale];
      });
      annotations.exit().remove();
      var annotationsNumbers = g.appendSelect('g.number-annotations').style('pointer-events', 'none').selectAll('text.annotation').data(annotationNumData);
      annotationsNumbers.enter().append('text').attr('class', 'annotation').merge(annotationsNumbers).attr('transform', function (d) {
        var p = projection(d.countryGeo.geometry.coordinates);
        return "translate(".concat(p[0], ",").concat(p[1] + props.hover_gap, ")");
      }).html(function (d) {
        return getPeakText(d.countryGeo.value);
      });
      annotationsNumbers.exit().remove();

      if (props.mobile && width < props.refBox.breakpoint) {
        // Ref box at the bottom for mobile starts here
        var refBoxContainer = this.selection().appendSelect('div.ref-box').classed('hide', false).style('text-align', 'center').style('width', "".concat(props.refBox.width, "px")).style('height', "".concat(props.refBox.height, "px"));
        var refBox = refBoxContainer.appendSelect('canvas').attr('width', props.refBox.width).attr('height', props.refBox.height);
        var context = refBox.node().getContext('2d');
        var projectionRef = d3.geoNaturalEarth1();

        if (props.map_custom_projections.clip_box && props.map_custom_projections.clip_box.length === 2 && props.map_custom_projections.clip_box[0].length === 2 && props.map_custom_projections.clip_box[1].length === 2) {
          projectionRef.fitSize([props.refBox.width, props.refBox.height], makeRangeBox(props.map_custom_projections.clip_box));
        } else {
          projectionRef.fitSize([props.refBox.width, props.refBox.height], countries);
        }

        if (props.map_custom_projections.scale) {
          projectionRef.scale(props.map_custom_projections.scale);
        }

        if (props.map_custom_projections.center && props.map_custom_projections.center.length === 2) {
          projectionRef.center(props.map_custom_projections.center);
        }

        if (props.map_custom_projections.rotate && props.map_custom_projections.rotate.length === 2) {
          projectionRef.rotate(props.map_custom_projections.rotate);
        }

        var woAntarctica = {
          type: countries.type,
          features: countries.features.filter(function (e) {
            return e.properties.slug !== 'antarctica';
          })
        };
        var pathRef = d3.geoPath(projectionRef, context);
        context.clearRect(0, 0, props.refBox.width, props.refBox.height);
        context.beginPath();
        pathRef(woAntarctica);
        context.fillStyle = props.map_fill;
        context.fill();
        var activeWidth = width / useWidth * props.refBox.width;
        var activeRegion = refBoxContainer.appendSelect('div').attr('class', 'active-region').style('width', "".concat(activeWidth, "px")).style('height', "".concat(props.refBox.height, "px")).style('left', "".concat(props.refBox.width / 2 - activeWidth / 2, "px")).call(d3.drag().on('start.interrupt', function () {
          activeRegion.interrupt();
        }).on('start drag', function () {
          var calcX = d3.event.x - activeWidth / 2;

          if (d3.event.x <= activeWidth / 2) {
            calcX = 0;
          } else if (d3.event.x >= props.refBox.width - activeWidth / 2) {
            calcX = props.refBox.width - activeWidth;
          }

          activeRegion.style('left', calcX + 'px');
          document.getElementById('map-container').scrollLeft = calcX / props.refBox.width * useWidth;
        }));
        var mapEl = document.getElementById('map-container');
        mapEl.scrollLeft = useWidth / 2 - width / 2;
        mapEl.addEventListener('scroll', function (d) {
          var pos = d.target.scrollLeft;
          activeRegion.style('left', pos / useWidth * props.refBox.width + 'px');
        }); // Refbox ends here
      } else {
        this.selection().select('.ref-box').classed('hide', true);
      }

      function tipOn(voronoiPath) {
        var properties = voronoiPath.properties.site.properties;
        if (properties.reset) return;

        var _filteredData$find = filteredData.find(function (e) {
          return properties.isoAlpha2 === e.key;
        }),
            value = _filteredData$find.value;

        if (!value && value !== filterMin) return;
        g.selectAll('path.centroid').style('fill', 'none').style('opacity', props.spike_inactive_opacity);
        g.selectAll('.name-annotations,.number-annotations').style('opacity', 0);
        g.selectAll("path.centroid.".concat(properties.slug)).style('opacity', 1).style('fill', function (d) {
          return d.value ? props.spike_color_scale(d.value) : null;
        }).classed('active', true).raise();
        tooltip.attr('transform', function (d) {
          var o = projection(properties.centroid);
          return "translate(".concat(o[0], ",").concat(o[1] + props.hover_gap, ")");
        }).style('text-anchor', 'middle').html(function (d) {
          return "\n          <tspan x=\"0\" y=\"0\">".concat(properties.translations[props.locale], "</tspan>\n          ").concat(getPeakText(value));
        });
        g.selectAll(".country.c-".concat(properties.slug)).classed('active', true);
      }

      function tipOff(voronoiPath) {
        var properties = voronoiPath.properties.site.properties;
        var country = g.selectAll(".country.c-".concat(properties.slug));
        g.selectAll('path.centroid').style('opacity', 1).classed('active', false).style('fill', 'none');
        g.selectAll('.name-annotations,.number-annotations').style('opacity', 1);
        tooltip.html('');
        country.classed('active', false).style('stroke', props.map_stroke_color);
      }

      function getPeakText(value) {
        value = Math.round(value * 100);
        var textVar;

        if (value < 100 && value >= 1) {
          textVar = Mustache.render(props.of_peak_text, {
            percent: value.toLocaleString(props.locale) + '%'
          });
        } else if (value < 1) {
          textVar = Mustache.render(props.of_peak_text, {
            percent: '<1%'
          });
        } else if (value === 100) {
          textVar = "<tspan>".concat(props.at_peak_text, "</tspan>");
        }

        return textVar.replace('<tspan>', '<tspan dy="1em" x="0">');
      }

      return this;
    }
  }]);

  return GlobalRateMap;
}(ChartComponent);

function makeRangeBox(opts) {
  var lon0 = opts[0][0];
  var lon1 = opts[1][0];
  var lat0 = opts[0][1];
  var lat1 = opts[1][1]; // to cross antimeridian w/o ambiguity

  if (lon0 > 0 && lon1 < 0) {
    lon1 += 360;
  } // to make lat span unambiguous


  if (lat0 > lat1) {
    var tmp = lat0;
    lat0 = lat1;
    lat1 = tmp;
  }

  var dlon4 = (lon1 - lon0) / 4;
  return {
    type: 'Polygon',
    coordinates: [[[lon0, lat0], [lon0, lat1], [lon0 + dlon4, lat1], [lon0 + 2 * dlon4, lat1], [lon0 + 3 * dlon4, lat1], [lon1, lat1], [lon1, lat0], [lon1 - dlon4, lat0], [lon1 - 2 * dlon4, lat0], [lon1 - 3 * dlon4, lat0], [lon0, lat0]]]
  };
}

module.exports = GlobalRateMap;
