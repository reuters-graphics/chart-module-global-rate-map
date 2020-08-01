webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! topojson-client */ \"./node_modules/topojson-client/index.js\");\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n/* harmony import */ var d3_geo_voronoi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! d3-geo-voronoi */ \"./node_modules/d3-geo-voronoi/index.js\");\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n // import AtlasMetadataClient from '@reuters-graphics/graphics-atlas-client';\n\n\n\n // const client = new AtlasMetadataClient();\n// import topology from '@reuters-graphics/graphics-atlas-client/topojson/global.110m.json';\n\nvar GlobalRateMap = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(GlobalRateMap, _ChartComponent);\n\n  var _super = _createSuper(GlobalRateMap);\n\n  function GlobalRateMap() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, GlobalRateMap);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      map_stroke_width: 0.7,\n      map_stroke_color: 'rgba(255, 255, 255, 0.25)',\n      map_fill: '#333',\n      map_stroke_color_active: 'rgba(255, 255, 255, 0.75)',\n      spike_color: '#eec331',\n      heightRatio: 0.5,\n      geo: false,\n      locale: 'en',\n      hover_gap: 12.5,\n      spike_height: 30,\n      spike_size: 3,\n      range: {\n        min: 0.75,\n        max: 1\n      },\n      spike_stroke_width: 0.8,\n      spike_highlight_stroke_width: 1.2,\n      spike_color_scale: _utils_d3__WEBPACK_IMPORTED_MODULE_9__[\"default\"].scaleThreshold() // Can use a scale as a prop!\n      .domain([0.75, 0.9]).range(['#ccc', '#f68e26', '#de2d26']),\n      spike_inactive_opacity: 0\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(GlobalRateMap, [{\n    key: \"draw\",\n    value: function draw() {\n      var data = this.data();\n      var props = this.props();\n      var node = this.selection().node();\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var height = width * props.heightRatio;\n      var newData = data.filter(function (d) {\n        return d.value >= props.range.min && d.value <= props.range.max;\n      });\n      var scaleY = _utils_d3__WEBPACK_IMPORTED_MODULE_9__[\"default\"].scaleLinear().range([0, props.spike_height]).domain([0, 1]);\n      var svg = this.selection().appendSelect('svg') // see docs in ./utils/d3.js\n      .attr('width', width).attr('height', height);\n      var g = svg.appendSelect('g').attr('transform', \"translate(\".concat(0, \", \", 0, \")\"));\n      var projection = _utils_d3__WEBPACK_IMPORTED_MODULE_9__[\"default\"].geoNaturalEarth1();\n      var countries = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"feature\"](props.geo, props.geo.objects.countries);\n      var disputed = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"mesh\"](props.geo, props.geo.objects.disputedBoundaries);\n      var filteredCountryKeys = newData.map(function (d) {\n        return d.key;\n      });\n      var countryCentroids = countries.features.filter(function (c) {\n        return filteredCountryKeys.includes(c.properties.isoAlpha2);\n      }).map(function (_ref) {\n        var properties = _ref.properties;\n        return {\n          type: 'Feature',\n          properties: properties,\n          geometry: {\n            type: 'Point',\n            coordinates: properties.centroid\n          }\n        };\n      });\n      projection.fitSize([width, height], countries);\n      var path = _utils_d3__WEBPACK_IMPORTED_MODULE_9__[\"default\"].geoPath().projection(projection);\n      g.selectAll('.country').remove();\n      var countryGroups = g.selectAll('g.country').data(countries.features.filter(function (d) {\n        return d.properties.slug !== 'antarctica';\n      })).enter().append('g').attr('class', function (d) {\n        return \"country g-\".concat(d.properties.slug);\n      }).style('pointer-events', 'none');\n      countryGroups.appendSelect('path.level-0').attr('class', function (d) {\n        return 'c-' + d.properties.slug + ' level-0';\n      }).style('stroke', props.map_stroke_color).style('stroke-width', props.map_stroke_width).style('fill', props.map_fill).attr('d', path);\n      countryGroups.appendSelect('path.centroid').attr('class', function (d) {\n        return d.properties.slug + ' centroid';\n      }).attr('d', function (d) {\n        var obj = projection(d.properties.centroid);\n        var o = newData.filter(function (e) {\n          return d.properties.isoAlpha2 === e.key;\n        })[0];\n\n        if (o) {\n          var value = scaleY(o.value);\n          return 'M' + (obj[0] - props.spike_size) + ' ' + obj[1] + ' L' + obj[0] + ' ' + (obj[1] - value) + ' L' + (obj[0] + props.spike_size) + ' ' + obj[1] + ' ';\n        }\n      }).style('fill', 'none').style('stroke', function (d) {\n        var o = newData.filter(function (e) {\n          return d.properties.isoAlpha2 === e.key;\n        })[0];\n        return o ? props.spike_color_scale(o.value) : null;\n      }).style('stroke-width', props.spike_stroke_width);\n      g.appendSelect('path.disputed').attr('class', 'disputed level-0').style('stroke', props.map_stroke_color).style('stroke-width', props.map_stroke_width).attr('d', path(disputed));\n      var countryVoronoiCentroids = g.appendSelect('g.voronoi').selectAll('path.voronoi').data(Object(d3_geo_voronoi__WEBPACK_IMPORTED_MODULE_10__[\"geoVoronoi\"])().polygons(countryCentroids).features);\n      countryVoronoiCentroids.enter().append('path').attr('class', 'voronoi').merge(countryVoronoiCentroids).style('fill', 'none').style('cursor', 'crosshair').attr('pointer-events', 'all').attr('d', path).on('mouseover', tipOn).on('mouseout', tipOff);\n\n      function tipOn(voronoiPath) {\n        if (!_utils_d3__WEBPACK_IMPORTED_MODULE_9__[\"default\"].event) return;\n        var coordinates = _utils_d3__WEBPACK_IMPORTED_MODULE_9__[\"default\"].mouse(svg.node());\n        console.log(coordinates);\n        var properties = voronoiPath.properties.site.properties;\n        var sel = g.select(\"g.country.g-\".concat(properties.slug)).moveToFront();\n        g.selectAll('path.centroid').style('opacity', props.spike_inactive_opacity);\n        g.selectAll(\"path.centroid.\".concat(properties.slug)).style('opacity', 1);\n        sel.appendSelect('text').attr('transform', function (d) {\n          var o = projection(d.properties.centroid);\n          return \"translate(\".concat(o[0], \",\").concat(o[1] + props.hover_gap, \")\");\n        }).style('text-anchor', 'middle').text(function (d) {\n          return d.properties.translations[props.locale];\n        });\n        sel.style('opacity', 1);\n        sel.selectAll('.level-0').classed('active', true).style('stroke', props.map_stroke_color_active);\n        sel.select('.centroid').classed('active', true).style('stroke-width', props.spike_highlight_stroke_width);\n      }\n\n      function tipOff(voronoiPath) {\n        var properties = voronoiPath.properties.site.properties;\n        var sel = g.select(\"g.country.g-\".concat(properties.slug));\n        g.selectAll('path.centroid').style('opacity', 1);\n        sel.select('text').remove();\n        sel.selectAll('.level-0').classed('active', false).style('stroke', props.map_stroke_color);\n        sel.select('.centroid').classed('active', false).style('stroke-width', props.spike_stroke_width);\n      }\n\n      return this;\n    }\n  }]);\n\n  return GlobalRateMap;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GlobalRateMap);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiR2xvYmFsUmF0ZU1hcCIsIm1hcF9zdHJva2Vfd2lkdGgiLCJtYXBfc3Ryb2tlX2NvbG9yIiwibWFwX2ZpbGwiLCJtYXBfc3Ryb2tlX2NvbG9yX2FjdGl2ZSIsInNwaWtlX2NvbG9yIiwiaGVpZ2h0UmF0aW8iLCJnZW8iLCJsb2NhbGUiLCJob3Zlcl9nYXAiLCJzcGlrZV9oZWlnaHQiLCJzcGlrZV9zaXplIiwicmFuZ2UiLCJtaW4iLCJtYXgiLCJzcGlrZV9zdHJva2Vfd2lkdGgiLCJzcGlrZV9oaWdobGlnaHRfc3Ryb2tlX3dpZHRoIiwic3Bpa2VfY29sb3Jfc2NhbGUiLCJkMyIsInNjYWxlVGhyZXNob2xkIiwiZG9tYWluIiwic3Bpa2VfaW5hY3RpdmVfb3BhY2l0eSIsImRhdGEiLCJwcm9wcyIsIm5vZGUiLCJzZWxlY3Rpb24iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsImhlaWdodCIsIm5ld0RhdGEiLCJmaWx0ZXIiLCJkIiwidmFsdWUiLCJzY2FsZVkiLCJzY2FsZUxpbmVhciIsInN2ZyIsImFwcGVuZFNlbGVjdCIsImF0dHIiLCJnIiwicHJvamVjdGlvbiIsImdlb05hdHVyYWxFYXJ0aDEiLCJjb3VudHJpZXMiLCJ0b3BvanNvbiIsIm9iamVjdHMiLCJkaXNwdXRlZCIsImRpc3B1dGVkQm91bmRhcmllcyIsImZpbHRlcmVkQ291bnRyeUtleXMiLCJtYXAiLCJrZXkiLCJjb3VudHJ5Q2VudHJvaWRzIiwiZmVhdHVyZXMiLCJjIiwiaW5jbHVkZXMiLCJwcm9wZXJ0aWVzIiwiaXNvQWxwaGEyIiwidHlwZSIsImdlb21ldHJ5IiwiY29vcmRpbmF0ZXMiLCJjZW50cm9pZCIsImZpdFNpemUiLCJwYXRoIiwiZ2VvUGF0aCIsInNlbGVjdEFsbCIsInJlbW92ZSIsImNvdW50cnlHcm91cHMiLCJzbHVnIiwiZW50ZXIiLCJhcHBlbmQiLCJzdHlsZSIsIm9iaiIsIm8iLCJlIiwiY291bnRyeVZvcm9ub2lDZW50cm9pZHMiLCJnZW9Wb3Jvbm9pIiwicG9seWdvbnMiLCJtZXJnZSIsIm9uIiwidGlwT24iLCJ0aXBPZmYiLCJ2b3Jvbm9pUGF0aCIsImV2ZW50IiwibW91c2UiLCJjb25zb2xlIiwibG9nIiwic2l0ZSIsInNlbCIsInNlbGVjdCIsIm1vdmVUb0Zyb250IiwidGV4dCIsInRyYW5zbGF0aW9ucyIsImNsYXNzZWQiLCJDaGFydENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7O0FBQ0E7QUFDQTtDQUdBO0FBQ0E7O0lBRU1BLGE7Ozs7Ozs7Ozs7Ozs7Ozs7dU5BQ1c7QUFDYkMsc0JBQWdCLEVBQUUsR0FETDtBQUViQyxzQkFBZ0IsRUFBRSwyQkFGTDtBQUdiQyxjQUFRLEVBQUUsTUFIRztBQUliQyw2QkFBdUIsRUFBRSwyQkFKWjtBQUtiQyxpQkFBVyxFQUFFLFNBTEE7QUFNYkMsaUJBQVcsRUFBRSxHQU5BO0FBT2JDLFNBQUcsRUFBRSxLQVBRO0FBUWJDLFlBQU0sRUFBRSxJQVJLO0FBU2JDLGVBQVMsRUFBRSxJQVRFO0FBVWJDLGtCQUFZLEVBQUUsRUFWRDtBQVdiQyxnQkFBVSxFQUFFLENBWEM7QUFZYkMsV0FBSyxFQUFFO0FBQUVDLFdBQUcsRUFBRSxJQUFQO0FBQWFDLFdBQUcsRUFBRTtBQUFsQixPQVpNO0FBYWJDLHdCQUFrQixFQUFFLEdBYlA7QUFjYkMsa0NBQTRCLEVBQUUsR0FkakI7QUFlYkMsdUJBQWlCLEVBQUVDLGlEQUFFLENBQUNDLGNBQUgsR0FBb0I7QUFBcEIsT0FDaEJDLE1BRGdCLENBQ1QsQ0FBQyxJQUFELEVBQU8sR0FBUCxDQURTLEVBRWhCUixLQUZnQixDQUVWLENBQUMsTUFBRCxFQUFTLFNBQVQsRUFBb0IsU0FBcEIsQ0FGVSxDQWZOO0FBa0JiUyw0QkFBc0IsRUFBRTtBQWxCWCxLOzs7Ozs7OzJCQXFCUjtBQUNMLFVBQU1DLElBQUksR0FBRyxLQUFLQSxJQUFMLEVBQWI7QUFDQSxV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QjtBQUdEOztBQUVELGVBQVM4RCxNQUFULENBQWdCQyxXQUFoQixFQUE2QjtBQUFBLFlBQ25CMUIsVUFEbUIsR0FDSjBCLFdBQVcsQ0FBQzFCLFVBQVosQ0FBdUIrQixJQURuQixDQUNuQi9CLFVBRG1CO0FBRTNCLFlBQU1nQyxHQUFHLEdBQUcvQyxDQUFDLENBQUNnRCxNQUFGLHVCQUF3QmpDLFVBQVUsQ0FBQ1ksSUFBbkMsRUFBWjtBQUNBM0IsU0FBQyxDQUFDd0IsU0FBRixDQUFZLGVBQVosRUFBNkJNLEtBQTdCLENBQW1DLFNBQW5DLEVBQThDLENBQTlDO0FBQ0FpQixXQUFHLENBQUNDLE1BQUosQ0FBVyxNQUFYLEVBQW1CdkIsTUFBbkI7QUFDQXNCLFdBQUcsQ0FBQ3ZCLFNBQUosQ0FBYyxVQUFkLEVBQ0c0QixPQURILENBQ1csUUFEWCxFQUNxQixLQURyQixFQUVHdEIsS0FGSCxDQUVTLFFBRlQsRUFFbUI3QyxLQUFLLENBQUNyQixnQkFGekI7QUFJQW1GLFdBQUcsQ0FBQ0MsTUFBSixDQUFXLFdBQVgsRUFDR0ksT0FESCxDQUNXLFFBRFgsRUFDcUIsS0FEckIsRUFFR3RCLEtBRkgsQ0FFUyxjQUZULEVBRXlCN0MsS0FBSyxDQUFDUixrQkFGL0I7QUFHRDs7QUFFRCxhQUFPLElBQVA7QUFDRDs7OztFQTVKeUI0RSw0RDs7QUErSmIzRiw0RUFBZiIsImZpbGUiOiIuL3NyYy9saWIvY2hhcnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0b3BvanNvbiBmcm9tICd0b3BvanNvbi1jbGllbnQnO1xuXG4vLyBpbXBvcnQgQXRsYXNNZXRhZGF0YUNsaWVudCBmcm9tICdAcmV1dGVycy1ncmFwaGljcy9ncmFwaGljcy1hdGxhcy1jbGllbnQnO1xuaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJy4vYmFzZS9DaGFydENvbXBvbmVudCc7XG5pbXBvcnQgZDMgZnJvbSAnLi91dGlscy9kMyc7XG5pbXBvcnQgeyBnZW9Wb3Jvbm9pIH0gZnJvbSAnZDMtZ2VvLXZvcm9ub2knO1xuXG4vLyBjb25zdCBjbGllbnQgPSBuZXcgQXRsYXNNZXRhZGF0YUNsaWVudCgpO1xuLy8gaW1wb3J0IHRvcG9sb2d5IGZyb20gJ0ByZXV0ZXJzLWdyYXBoaWNzL2dyYXBoaWNzLWF0bGFzLWNsaWVudC90b3BvanNvbi9nbG9iYWwuMTEwbS5qc29uJztcblxuY2xhc3MgR2xvYmFsUmF0ZU1hcCBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgZGVmYXVsdFByb3BzID0ge1xuICAgIG1hcF9zdHJva2Vfd2lkdGg6IDAuNyxcbiAgICBtYXBfc3Ryb2tlX2NvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KScsXG4gICAgbWFwX2ZpbGw6ICcjMzMzJyxcbiAgICBtYXBfc3Ryb2tlX2NvbG9yX2FjdGl2ZTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSknLFxuICAgIHNwaWtlX2NvbG9yOiAnI2VlYzMzMScsXG4gICAgaGVpZ2h0UmF0aW86IDAuNSxcbiAgICBnZW86IGZhbHNlLFxuICAgIGxvY2FsZTogJ2VuJyxcbiAgICBob3Zlcl9nYXA6IDEyLjUsXG4gICAgc3Bpa2VfaGVpZ2h0OiAzMCxcbiAgICBzcGlrZV9zaXplOiAzLFxuICAgIHJhbmdlOiB7IG1pbjogMC43NSwgbWF4OiAxIH0sXG4gICAgc3Bpa2Vfc3Ryb2tlX3dpZHRoOiAwLjgsXG4gICAgc3Bpa2VfaGlnaGxpZ2h0X3N0cm9rZV93aWR0aDogMS4yLFxuICAgIHNwaWtlX2NvbG9yX3NjYWxlOiBkMy5zY2FsZVRocmVzaG9sZCgpIC8vIENhbiB1c2UgYSBzY2FsZSBhcyBhIHByb3AhXG4gICAgICAuZG9tYWluKFswLjc1LCAwLjldKVxuICAgICAgLnJhbmdlKFsnI2NjYycsICcjZjY4ZTI2JywgJyNkZTJkMjYnXSksXG4gICAgc3Bpa2VfaW5hY3RpdmVfb3BhY2l0eTogMCxcbiAgfTtcblxuICBkcmF3KCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGEoKTtcbiAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHMoKTtcbiAgICBjb25zdCBub2RlID0gdGhpcy5zZWxlY3Rpb24oKS5ub2RlKCk7XG4gICAgY29uc3QgeyB3aWR0aCB9ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBoZWlnaHQgPSB3aWR0aCAqIHByb3BzLmhlaWdodFJhdGlvO1xuXG4gICAgY29uc3QgbmV3RGF0YSA9IGRhdGEuZmlsdGVyKGQgPT4gZC52YWx1ZSA+PSBwcm9wcy5yYW5nZS5taW4gJiYgZC52YWx1ZSA8PSBwcm9wcy5yYW5nZS5tYXgpO1xuXG4gICAgY29uc3Qgc2NhbGVZID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbMCwgcHJvcHMuc3Bpa2VfaGVpZ2h0XSkuZG9tYWluKFswLCAxXSk7XG4gICAgY29uc3Qgc3ZnID0gdGhpcy5zZWxlY3Rpb24oKVxuICAgICAgLmFwcGVuZFNlbGVjdCgnc3ZnJykgLy8gc2VlIGRvY3MgaW4gLi91dGlscy9kMy5qc1xuICAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gICAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KTtcblxuICAgIGNvbnN0IGcgPSBzdmcuYXBwZW5kU2VsZWN0KCdnJylcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7MH0sICR7MH0pYCk7XG5cbiAgICBjb25zdCBwcm9qZWN0aW9uID0gZDMuZ2VvTmF0dXJhbEVhcnRoMSgpO1xuICAgIGNvbnN0IGNvdW50cmllcyA9IHRvcG9qc29uLmZlYXR1cmUocHJvcHMuZ2VvLCBwcm9wcy5nZW8ub2JqZWN0cy5jb3VudHJpZXMpO1xuICAgIGNvbnN0IGRpc3B1dGVkID0gdG9wb2pzb24ubWVzaChwcm9wcy5nZW8sIHByb3BzLmdlby5vYmplY3RzLmRpc3B1dGVkQm91bmRhcmllcyk7XG5cbiAgICBjb25zdCBmaWx0ZXJlZENvdW50cnlLZXlzID0gbmV3RGF0YS5tYXAoZCA9PiBkLmtleSk7XG4gICAgY29uc3QgY291bnRyeUNlbnRyb2lkcyA9IGNvdW50cmllcy5mZWF0dXJlc1xuICAgICAgLmZpbHRlcihjID0+IGZpbHRlcmVkQ291bnRyeUtleXMuaW5jbHVkZXMoYy5wcm9wZXJ0aWVzLmlzb0FscGhhMikpXG4gICAgICAubWFwKCh7IHByb3BlcnRpZXMgfSkgPT4gKHtcbiAgICAgICAgdHlwZTogJ0ZlYXR1cmUnLFxuICAgICAgICBwcm9wZXJ0aWVzLFxuICAgICAgICBnZW9tZXRyeToge1xuICAgICAgICAgIHR5cGU6ICdQb2ludCcsXG4gICAgICAgICAgY29vcmRpbmF0ZXM6IHByb3BlcnRpZXMuY2VudHJvaWQsXG4gICAgICAgIH0sXG4gICAgICB9KSk7XG5cbiAgICBwcm9qZWN0aW9uLmZpdFNpemUoW3dpZHRoLCBoZWlnaHRdLCBjb3VudHJpZXMpO1xuICAgIGNvbnN0IHBhdGggPSBkMy5nZW9QYXRoKCkucHJvamVjdGlvbihwcm9qZWN0aW9uKTtcblxuICAgIGcuc2VsZWN0QWxsKCcuY291bnRyeScpLnJlbW92ZSgpO1xuXG4gICAgY29uc3QgY291bnRyeUdyb3VwcyA9IGcuc2VsZWN0QWxsKCdnLmNvdW50cnknKVxuICAgICAgLmRhdGEoY291bnRyaWVzLmZlYXR1cmVzLmZpbHRlcihkID0+IGQucHJvcGVydGllcy5zbHVnICE9PSAnYW50YXJjdGljYScpKVxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgZCA9PiBgY291bnRyeSBnLSR7ZC5wcm9wZXJ0aWVzLnNsdWd9YClcbiAgICAgIC5zdHlsZSgncG9pbnRlci1ldmVudHMnLCAnbm9uZScpO1xuXG4gICAgY291bnRyeUdyb3Vwcy5hcHBlbmRTZWxlY3QoJ3BhdGgubGV2ZWwtMCcpXG4gICAgICAuYXR0cignY2xhc3MnLCBkID0+ICdjLScgKyBkLnByb3BlcnRpZXMuc2x1ZyArICcgbGV2ZWwtMCcpXG4gICAgICAuc3R5bGUoJ3N0cm9rZScsIHByb3BzLm1hcF9zdHJva2VfY29sb3IpXG4gICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIHByb3BzLm1hcF9zdHJva2Vfd2lkdGgpXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCBwcm9wcy5tYXBfZmlsbClcbiAgICAgIC5hdHRyKCdkJywgcGF0aCk7XG5cbiAgICBjb3VudHJ5R3JvdXBzXG4gICAgICAuYXBwZW5kU2VsZWN0KCdwYXRoLmNlbnRyb2lkJylcbiAgICAgIC5hdHRyKCdjbGFzcycsIGQgPT4gZC5wcm9wZXJ0aWVzLnNsdWcgKyAnIGNlbnRyb2lkJylcbiAgICAgIC5hdHRyKCdkJywgZnVuY3Rpb24oZCkge1xuICAgICAgICBjb25zdCBvYmogPSBwcm9qZWN0aW9uKGQucHJvcGVydGllcy5jZW50cm9pZCk7XG4gICAgICAgIGNvbnN0IG8gPSBuZXdEYXRhLmZpbHRlcihlID0+IGQucHJvcGVydGllcy5pc29BbHBoYTIgPT09IGUua2V5KVswXTtcbiAgICAgICAgaWYgKG8pIHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHNjYWxlWShvLnZhbHVlKTtcbiAgICAgICAgICByZXR1cm4gJ00nICsgKG9ialswXSAtIHByb3BzLnNwaWtlX3NpemUpICsgJyAnICsgb2JqWzFdICsgJyBMJyArIG9ialswXSArICcgJyArIChvYmpbMV0gLSB2YWx1ZSkgKyAnIEwnICsgKG9ialswXSArIHByb3BzLnNwaWtlX3NpemUpICsgJyAnICsgb2JqWzFdICsgJyAnO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnN0eWxlKCdmaWxsJywgJ25vbmUnKVxuICAgICAgLnN0eWxlKCdzdHJva2UnLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIGNvbnN0IG8gPSBuZXdEYXRhLmZpbHRlcihlID0+IGQucHJvcGVydGllcy5pc29BbHBoYTIgPT09IGUua2V5KVswXTtcbiAgICAgICAgcmV0dXJuIG8gPyBwcm9wcy5zcGlrZV9jb2xvcl9zY2FsZShvLnZhbHVlKSA6IG51bGw7XG4gICAgICB9KVxuICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCBwcm9wcy5zcGlrZV9zdHJva2Vfd2lkdGgpO1xuXG4gICAgZy5hcHBlbmRTZWxlY3QoJ3BhdGguZGlzcHV0ZWQnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2Rpc3B1dGVkIGxldmVsLTAnKVxuICAgICAgLnN0eWxlKCdzdHJva2UnLCBwcm9wcy5tYXBfc3Ryb2tlX2NvbG9yKVxuICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCBwcm9wcy5tYXBfc3Ryb2tlX3dpZHRoKVxuICAgICAgLmF0dHIoJ2QnLCBwYXRoKGRpc3B1dGVkKSk7XG5cbiAgICBjb25zdCBjb3VudHJ5Vm9yb25vaUNlbnRyb2lkcyA9IGcuYXBwZW5kU2VsZWN0KCdnLnZvcm9ub2knKVxuICAgICAgLnNlbGVjdEFsbCgncGF0aC52b3Jvbm9pJylcbiAgICAgIC5kYXRhKGdlb1Zvcm9ub2koKS5wb2x5Z29ucyhjb3VudHJ5Q2VudHJvaWRzKS5mZWF0dXJlcyk7XG5cbiAgICBjb3VudHJ5Vm9yb25vaUNlbnRyb2lkcy5lbnRlcigpXG4gICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICd2b3Jvbm9pJylcbiAgICAgIC5tZXJnZShjb3VudHJ5Vm9yb25vaUNlbnRyb2lkcylcbiAgICAgIC5zdHlsZSgnZmlsbCcsICdub25lJylcbiAgICAgIC5zdHlsZSgnY3Vyc29yJywgJ2Nyb3NzaGFpcicpXG4gICAgICAuYXR0cigncG9pbnRlci1ldmVudHMnLCAnYWxsJylcbiAgICAgIC5hdHRyKCdkJywgcGF0aClcbiAgICAgIC5vbignbW91c2VvdmVyJywgdGlwT24pXG4gICAgICAub24oJ21vdXNlb3V0JywgdGlwT2ZmKTtcblxuICAgIGZ1bmN0aW9uIHRpcE9uKHZvcm9ub2lQYXRoKSB7XG4gICAgICBpZiAoIWQzLmV2ZW50KSByZXR1cm47XG4gICAgICBjb25zdCBjb29yZGluYXRlcyA9IGQzLm1vdXNlKHN2Zy5ub2RlKCkpO1xuICAgICAgY29uc29sZS5sb2coY29vcmRpbmF0ZXMpO1xuICAgICAgY29uc3QgeyBwcm9wZXJ0aWVzIH0gPSB2b3Jvbm9pUGF0aC5wcm9wZXJ0aWVzLnNpdGU7XG4gICAgICBjb25zdCBzZWwgPSBnLnNlbGVjdChgZy5jb3VudHJ5LmctJHtwcm9wZXJ0aWVzLnNsdWd9YCkubW92ZVRvRnJvbnQoKTtcbiAgICAgIGcuc2VsZWN0QWxsKCdwYXRoLmNlbnRyb2lkJylcbiAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgcHJvcHMuc3Bpa2VfaW5hY3RpdmVfb3BhY2l0eSk7XG4gICAgICBnLnNlbGVjdEFsbChgcGF0aC5jZW50cm9pZC4ke3Byb3BlcnRpZXMuc2x1Z31gKS5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICAgICAgc2VsLmFwcGVuZFNlbGVjdCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgY29uc3QgbyA9IHByb2plY3Rpb24oZC5wcm9wZXJ0aWVzLmNlbnRyb2lkKTtcbiAgICAgICAgICByZXR1cm4gYHRyYW5zbGF0ZSgke29bMF19LCR7b1sxXSArIHByb3BzLmhvdmVyX2dhcH0pYDtcbiAgICAgICAgfSlcbiAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgICAudGV4dChkID0+IGQucHJvcGVydGllcy50cmFuc2xhdGlvbnNbcHJvcHMubG9jYWxlXSk7XG5cbiAgICAgIHNlbC5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICAgICAgc2VsLnNlbGVjdEFsbCgnLmxldmVsLTAnKVxuICAgICAgICAuY2xhc3NlZCgnYWN0aXZlJywgdHJ1ZSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCBwcm9wcy5tYXBfc3Ryb2tlX2NvbG9yX2FjdGl2ZSk7XG5cbiAgICAgIHNlbC5zZWxlY3QoJy5jZW50cm9pZCcpXG4gICAgICAgIC5jbGFzc2VkKCdhY3RpdmUnLCB0cnVlKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIHByb3BzLnNwaWtlX2hpZ2hsaWdodF9zdHJva2Vfd2lkdGgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRpcE9mZih2b3Jvbm9pUGF0aCkge1xuICAgICAgY29uc3QgeyBwcm9wZXJ0aWVzIH0gPSB2b3Jvbm9pUGF0aC5wcm9wZXJ0aWVzLnNpdGU7XG4gICAgICBjb25zdCBzZWwgPSBnLnNlbGVjdChgZy5jb3VudHJ5LmctJHtwcm9wZXJ0aWVzLnNsdWd9YCk7XG4gICAgICBnLnNlbGVjdEFsbCgncGF0aC5jZW50cm9pZCcpLnN0eWxlKCdvcGFjaXR5JywgMSk7XG4gICAgICBzZWwuc2VsZWN0KCd0ZXh0JykucmVtb3ZlKCk7XG4gICAgICBzZWwuc2VsZWN0QWxsKCcubGV2ZWwtMCcpXG4gICAgICAgIC5jbGFzc2VkKCdhY3RpdmUnLCBmYWxzZSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCBwcm9wcy5tYXBfc3Ryb2tlX2NvbG9yKTtcblxuICAgICAgc2VsLnNlbGVjdCgnLmNlbnRyb2lkJylcbiAgICAgICAgLmNsYXNzZWQoJ2FjdGl2ZScsIGZhbHNlKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIHByb3BzLnNwaWtlX3N0cm9rZV93aWR0aCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsUmF0ZU1hcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})