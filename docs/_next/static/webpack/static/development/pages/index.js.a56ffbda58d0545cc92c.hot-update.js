webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! topojson-client */ \"./node_modules/topojson-client/index.js\");\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n/* harmony import */ var d3_geo_voronoi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! d3-geo-voronoi */ \"./node_modules/d3-geo-voronoi/index.js\");\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n // import AtlasMetadataClient from '@reuters-graphics/graphics-atlas-client';\n\n\n\n // const client = new AtlasMetadataClient();\n// import topology from '@reuters-graphics/graphics-atlas-client/topojson/global.110m.json';\n\nvar GlobalRateMap = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(GlobalRateMap, _ChartComponent);\n\n  var _super = _createSuper(GlobalRateMap);\n\n  function GlobalRateMap() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, GlobalRateMap);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      map_stroke_width: 0.7,\n      map_stroke_color: 'rgba(255, 255, 255, 0.25)',\n      map_stroke_color_active: 'rgba(255, 255, 255, 0.75)',\n      spike_color: '#eec331',\n      heightRatio: 0.6,\n      geo: false,\n      locale: 'en',\n      hover_gap: 12.5,\n      spike_height: 30,\n      spike_size: 3,\n      range: {\n        min: 0.75,\n        max: 1\n      },\n      spike_stroke_width: 0.8,\n      spike_highlight_stroke_width: 1.2,\n      spike_color_scale: _utils_d3__WEBPACK_IMPORTED_MODULE_9__[\"default\"].scaleThreshold() // Can use a scale as a prop!\n      .domain([0.75, 0.9]).range(['#ccc', '#f68e26', '#de2d26']),\n      spike_inactive_opacity: 0\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(GlobalRateMap, [{\n    key: \"draw\",\n    value: function draw() {\n      var data = this.data();\n      var props = this.props();\n      var node = this.selection().node();\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var height = width * props.heightRatio;\n      var newData = data.filter(function (d) {\n        return d.value >= props.range.min && d.value <= props.range.max;\n      });\n      var scaleY = _utils_d3__WEBPACK_IMPORTED_MODULE_9__[\"default\"].scaleLinear().range([0, props.spike_height]).domain([0, 1]);\n      var svg = this.selection().appendSelect('svg') // see docs in ./utils/d3.js\n      .attr('width', width).attr('height', height);\n      var g = svg.appendSelect('g').attr('transform', \"translate(\".concat(0, \", \", 0, \")\"));\n      var projection = _utils_d3__WEBPACK_IMPORTED_MODULE_9__[\"default\"].geoNaturalEarth1();\n      var countries = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"feature\"](props.geo, props.geo.objects.countries);\n      var disputed = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"mesh\"](props.geo, props.geo.objects.disputedBoundaries);\n      var filteredCountryKeys = newData.map(function (d) {\n        return d.key;\n      });\n      var countryCentroids = countries.features.filter(function (c) {\n        return filteredCountryKeys.includes(c.properties.isoAlpha2);\n      }).map(function (_ref) {\n        var properties = _ref.properties;\n        return {\n          type: 'Feature',\n          properties: properties,\n          geometry: {\n            type: 'Point',\n            coordinates: properties.centroid\n          }\n        };\n      });\n      projection.fitSize([width, height], countries);\n      var path = _utils_d3__WEBPACK_IMPORTED_MODULE_9__[\"default\"].geoPath().projection(projection);\n      g.selectAll('.country').remove();\n      var countryGroups = g.selectAll('g.country').data(countries.features.filter(function (d) {\n        return d.properties.slug !== 'antarctica';\n      })).enter().append('g').attr('class', function (d) {\n        return \"country g-\".concat(d.properties.slug);\n      }).style('pointer-events', 'none');\n      countryGroups.appendSelect('path.level-0').attr('class', function (d) {\n        return 'c-' + d.properties.slug + ' level-0';\n      }).style('stroke', props.map_stroke_color).style('stroke-width', props.map_stroke_width).style('fill', 'transparent').attr('d', path);\n      countryGroups.appendSelect('path.centroid').attr('class', function (d) {\n        return d.properties.slug + ' centroid';\n      }).attr('d', function (d) {\n        var obj = projection(d.properties.centroid);\n        var o = newData.filter(function (e) {\n          return d.properties.isoAlpha2 === e.key;\n        })[0];\n\n        if (o) {\n          var value = scaleY(o.value);\n          return 'M' + (obj[0] - props.spike_size) + ' ' + obj[1] + ' L' + obj[0] + ' ' + (obj[1] - value) + ' L' + (obj[0] + props.spike_size) + ' ' + obj[1] + ' ';\n        }\n      }).style('fill', 'none').style('stroke', function (d) {\n        var o = newData.filter(function (e) {\n          return d.properties.isoAlpha2 === e.key;\n        })[0];\n        return o ? props.spike_color_scale(o.value) : null;\n      }).style('stroke-width', props.spike_stroke_width);\n      g.appendSelect('path.disputed').attr('class', 'disputed level-0').style('stroke', props.map_stroke_color).style('stroke-width', props.map_stroke_width).attr('d', path(disputed));\n      var countryVoronoiCentroids = g.appendSelect('g.voronoi').selectAll('path.voronoi').data(Object(d3_geo_voronoi__WEBPACK_IMPORTED_MODULE_10__[\"geoVoronoi\"])().polygons(countryCentroids).features);\n      countryVoronoiCentroids.enter().append('path').attr('class', 'voronoi').merge(countryVoronoiCentroids).style('fill', 'none').style('cursor', 'crosshair').attr('pointer-events', 'all').attr('d', path).on('mouseover', tipOn).on('mouseout', tipOff);\n\n      function tipOn(voronoiPath) {\n        var properties = voronoiPath.properties.site.properties;\n        var sel = g.select(\"g.country.g-\".concat(properties.slug));\n        g.selectAll('path.centroid').style('opacity', props.spike_inactive_opacity);\n        g.selectAll(\"path.centroid.\".concat(properties.slug)).style('opacity', 1);\n        sel.appendSelect('text').attr('transform', function (d) {\n          var o = projection(d.properties.centroid);\n          return \"translate(\".concat(o[0], \",\").concat(o[1] + props.hover_gap, \")\");\n        }).style('text-anchor', 'middle').text(function (d) {\n          return d.properties.translations[props.locale];\n        });\n        sel.style('opacity', 1);\n        sel.selectAll('.level-0').classed('active', true).style('stroke', props.map_stroke_color_active);\n        sel.select('.centroid').classed('active', true).style('stroke-width', props.spike_highlight_stroke_width);\n      }\n\n      function tipOff(voronoiPath) {\n        var properties = voronoiPath.properties.site.properties;\n        var sel = g.select(\"g.country.g-\".concat(properties.slug));\n        g.selectAll('path.centroid').style('opacity', 1);\n        sel.select('text').remove();\n        sel.selectAll('.level-0').classed('active', false).style('stroke', props.map_stroke_color);\n        sel.select('.centroid').classed('active', false).style('stroke-width', props.spike_stroke_width);\n      }\n\n      return this;\n    }\n  }]);\n\n  return GlobalRateMap;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GlobalRateMap);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiR2xvYmFsUmF0ZU1hcCIsIm1hcF9zdHJva2Vfd2lkdGgiLCJtYXBfc3Ryb2tlX2NvbG9yIiwibWFwX3N0cm9rZV9jb2xvcl9hY3RpdmUiLCJzcGlrZV9jb2xvciIsImhlaWdodFJhdGlvIiwiZ2VvIiwibG9jYWxlIiwiaG92ZXJfZ2FwIiwic3Bpa2VfaGVpZ2h0Iiwic3Bpa2Vfc2l6ZSIsInJhbmdlIiwibWluIiwibWF4Iiwic3Bpa2Vfc3Ryb2tlX3dpZHRoIiwic3Bpa2VfaGlnaGxpZ2h0X3N0cm9rZV93aWR0aCIsInNwaWtlX2NvbG9yX3NjYWxlIiwiZDMiLCJzY2FsZVRocmVzaG9sZCIsImRvbWFpbiIsInNwaWtlX2luYWN0aXZlX29wYWNpdHkiLCJkYXRhIiwicHJvcHMiLCJub2RlIiwic2VsZWN0aW9uIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJuZXdEYXRhIiwiZmlsdGVyIiwiZCIsInZhbHVlIiwic2NhbGVZIiwic2NhbGVMaW5lYXIiLCJzdmciLCJhcHBlbmRTZWxlY3QiLCJhdHRyIiwiZyIsInByb2plY3Rpb24iLCJnZW9OYXR1cmFsRWFydGgxIiwiY291bnRyaWVzIiwidG9wb2pzb24iLCJvYmplY3RzIiwiZGlzcHV0ZWQiLCJkaXNwdXRlZEJvdW5kYXJpZXMiLCJmaWx0ZXJlZENvdW50cnlLZXlzIiwibWFwIiwia2V5IiwiY291bnRyeUNlbnRyb2lkcyIsImZlYXR1cmVzIiwiYyIsImluY2x1ZGVzIiwicHJvcGVydGllcyIsImlzb0FscGhhMiIsInR5cGUiLCJnZW9tZXRyeSIsImNvb3JkaW5hdGVzIiwiY2VudHJvaWQiLCJmaXRTaXplIiwicGF0aCIsImdlb1BhdGgiLCJzZWxlY3RBbGwiLCJyZW1vdmUiLCJjb3VudHJ5R3JvdXBzIiwic2x1ZyIsImVudGVyIiwiYXBwZW5kIiwic3R5bGUiLCJvYmoiLCJvIiwiZSIsImNvdW50cnlWb3Jvbm9pQ2VudHJvaWRzIiwiZ2VvVm9yb25vaSIsInBvbHlnb25zIiwibWVyZ2UiLCJvbiIsInRpcE9uIiwidGlwT2ZmIiwidm9yb25vaVBhdGgiLCJzaXRlIiwic2VsIiwic2VsZWN0IiwidGV4dCIsInRyYW5zbGF0aW9ucyIsImNsYXNzZWQiLCJDaGFydENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7O0FBQ0E7QUFDQTtDQUdBO0FBQ0E7O0lBRU1BLGE7Ozs7Ozs7Ozs7Ozs7Ozs7dU5BQ1c7QUFDYkMsc0JBQWdCLEVBQUUsR0FETDtBQUViQyxzQkFBZ0IsRUFBRSwyQkFGTDtBQUdiQyw2QkFBdUIsRUFBRSwyQkFIWjtBQUliQyxpQkFBVyxFQUFFLFNBSkE7QUFLYkMsaUJBQVcsRUFBRSxHQUxBO0FBTWJDLFNBQUcsRUFBRSxLQU5RO0FBT2JDLFlBQU0sRUFBRSxJQVBLO0FBUWJDLGVBQVMsRUFBRSxJQVJFO0FBU2JDLGtCQUFZLEVBQUUsRUFURDtBQVViQyxnQkFBVSxFQUFFLENBVkM7QUFXYkMsV0FBSyxFQUFFO0FBQUVDLFdBQUcsRUFBRSxJQUFQO0FBQWFDLFdBQUcsRUFBRTtBQUFsQixPQVhNO0FBWWJDLHdCQUFrQixFQUFFLEdBWlA7QUFhYkMsa0NBQTRCLEVBQUUsR0FiakI7QUFjYkMsdUJBQWlCLEVBQUVDLGlEQUFFLENBQUNDLGNBQUgsR0FBb0I7QUFBcEIsT0FDaEJDLE1BRGdCLENBQ1QsQ0FBQyxJQUFELEVBQU8sR0FBUCxDQURTLEVBRWhCUixLQUZnQixDQUVWLENBQUMsTUFBRCxFQUFTLFNBQVQsRUFBb0IsU0FBcEIsQ0FGVSxDQWROO0FBaUJiUyw0QkFBc0IsRUFBRTtBQWpCWCxLOzs7Ozs7OzJCQW9CUjtBQUNMLFVBQU1DLElBQUksR0FBRyxLQUFLQSxJQUFMLEVBQWI7QUFDQSxVQUFNQyxLQUFLLEdBQUcsS0FBS0EsS0FBTCxFQUFkO0FBQ0EsVUFBTUMsSUFBSSxHQUFHLEtBQUtDLFNBQUwsR0FBaUJELElBQWpCLEVB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QWEsV0FBRyxDQUFDQyxNQUFKLENBQVcsTUFBWCxFQUFtQm5CLE1BQW5CO0FBQ0FrQixXQUFHLENBQUNuQixTQUFKLENBQWMsVUFBZCxFQUNHdUIsT0FESCxDQUNXLFFBRFgsRUFDcUIsS0FEckIsRUFFR2pCLEtBRkgsQ0FFUyxRQUZULEVBRW1CN0MsS0FBSyxDQUFDcEIsZ0JBRnpCO0FBSUE4RSxXQUFHLENBQUNDLE1BQUosQ0FBVyxXQUFYLEVBQ0dHLE9BREgsQ0FDVyxRQURYLEVBQ3FCLEtBRHJCLEVBRUdqQixLQUZILENBRVMsY0FGVCxFQUV5QjdDLEtBQUssQ0FBQ1Isa0JBRi9CO0FBR0Q7O0FBRUQsYUFBTyxJQUFQO0FBQ0Q7Ozs7RUF4SnlCdUUsNEQ7O0FBMkpickYsNEVBQWYiLCJmaWxlIjoiLi9zcmMvbGliL2NoYXJ0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdG9wb2pzb24gZnJvbSAndG9wb2pzb24tY2xpZW50JztcblxuLy8gaW1wb3J0IEF0bGFzTWV0YWRhdGFDbGllbnQgZnJvbSAnQHJldXRlcnMtZ3JhcGhpY3MvZ3JhcGhpY3MtYXRsYXMtY2xpZW50JztcbmltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICcuL2Jhc2UvQ2hhcnRDb21wb25lbnQnO1xuaW1wb3J0IGQzIGZyb20gJy4vdXRpbHMvZDMnO1xuaW1wb3J0IHsgZ2VvVm9yb25vaSB9IGZyb20gJ2QzLWdlby12b3Jvbm9pJztcblxuLy8gY29uc3QgY2xpZW50ID0gbmV3IEF0bGFzTWV0YWRhdGFDbGllbnQoKTtcbi8vIGltcG9ydCB0b3BvbG9neSBmcm9tICdAcmV1dGVycy1ncmFwaGljcy9ncmFwaGljcy1hdGxhcy1jbGllbnQvdG9wb2pzb24vZ2xvYmFsLjExMG0uanNvbic7XG5cbmNsYXNzIEdsb2JhbFJhdGVNYXAgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBtYXBfc3Ryb2tlX3dpZHRoOiAwLjcsXG4gICAgbWFwX3N0cm9rZV9jb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSknLFxuICAgIG1hcF9zdHJva2VfY29sb3JfYWN0aXZlOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KScsXG4gICAgc3Bpa2VfY29sb3I6ICcjZWVjMzMxJyxcbiAgICBoZWlnaHRSYXRpbzogMC42LFxuICAgIGdlbzogZmFsc2UsXG4gICAgbG9jYWxlOiAnZW4nLFxuICAgIGhvdmVyX2dhcDogMTIuNSxcbiAgICBzcGlrZV9oZWlnaHQ6IDMwLFxuICAgIHNwaWtlX3NpemU6IDMsXG4gICAgcmFuZ2U6IHsgbWluOiAwLjc1LCBtYXg6IDEgfSxcbiAgICBzcGlrZV9zdHJva2Vfd2lkdGg6IDAuOCxcbiAgICBzcGlrZV9oaWdobGlnaHRfc3Ryb2tlX3dpZHRoOiAxLjIsXG4gICAgc3Bpa2VfY29sb3Jfc2NhbGU6IGQzLnNjYWxlVGhyZXNob2xkKCkgLy8gQ2FuIHVzZSBhIHNjYWxlIGFzIGEgcHJvcCFcbiAgICAgIC5kb21haW4oWzAuNzUsIDAuOV0pXG4gICAgICAucmFuZ2UoWycjY2NjJywgJyNmNjhlMjYnLCAnI2RlMmQyNiddKSxcbiAgICBzcGlrZV9pbmFjdGl2ZV9vcGFjaXR5OiAwLFxuICB9O1xuXG4gIGRyYXcoKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YSgpO1xuICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wcygpO1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnNlbGVjdGlvbigpLm5vZGUoKTtcbiAgICBjb25zdCB7IHdpZHRoIH0gPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGhlaWdodCA9IHdpZHRoICogcHJvcHMuaGVpZ2h0UmF0aW87XG5cbiAgICBjb25zdCBuZXdEYXRhID0gZGF0YS5maWx0ZXIoZCA9PiBkLnZhbHVlID49IHByb3BzLnJhbmdlLm1pbiAmJiBkLnZhbHVlIDw9IHByb3BzLnJhbmdlLm1heCk7XG5cbiAgICBjb25zdCBzY2FsZVkgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFswLCBwcm9wcy5zcGlrZV9oZWlnaHRdKS5kb21haW4oWzAsIDFdKTtcbiAgICBjb25zdCBzdmcgPSB0aGlzLnNlbGVjdGlvbigpXG4gICAgICAuYXBwZW5kU2VsZWN0KCdzdmcnKSAvLyBzZWUgZG9jcyBpbiAuL3V0aWxzL2QzLmpzXG4gICAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpO1xuXG4gICAgY29uc3QgZyA9IHN2Zy5hcHBlbmRTZWxlY3QoJ2cnKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHswfSwgJHswfSlgKTtcblxuICAgIGNvbnN0IHByb2plY3Rpb24gPSBkMy5nZW9OYXR1cmFsRWFydGgxKCk7XG4gICAgY29uc3QgY291bnRyaWVzID0gdG9wb2pzb24uZmVhdHVyZShwcm9wcy5nZW8sIHByb3BzLmdlby5vYmplY3RzLmNvdW50cmllcyk7XG4gICAgY29uc3QgZGlzcHV0ZWQgPSB0b3BvanNvbi5tZXNoKHByb3BzLmdlbywgcHJvcHMuZ2VvLm9iamVjdHMuZGlzcHV0ZWRCb3VuZGFyaWVzKTtcblxuICAgIGNvbnN0IGZpbHRlcmVkQ291bnRyeUtleXMgPSBuZXdEYXRhLm1hcChkID0+IGQua2V5KTtcbiAgICBjb25zdCBjb3VudHJ5Q2VudHJvaWRzID0gY291bnRyaWVzLmZlYXR1cmVzXG4gICAgICAuZmlsdGVyKGMgPT4gZmlsdGVyZWRDb3VudHJ5S2V5cy5pbmNsdWRlcyhjLnByb3BlcnRpZXMuaXNvQWxwaGEyKSlcbiAgICAgIC5tYXAoKHsgcHJvcGVydGllcyB9KSA9PiAoe1xuICAgICAgICB0eXBlOiAnRmVhdHVyZScsXG4gICAgICAgIHByb3BlcnRpZXMsXG4gICAgICAgIGdlb21ldHJ5OiB7XG4gICAgICAgICAgdHlwZTogJ1BvaW50JyxcbiAgICAgICAgICBjb29yZGluYXRlczogcHJvcGVydGllcy5jZW50cm9pZCxcbiAgICAgICAgfSxcbiAgICAgIH0pKTtcblxuICAgIHByb2plY3Rpb24uZml0U2l6ZShbd2lkdGgsIGhlaWdodF0sIGNvdW50cmllcyk7XG4gICAgY29uc3QgcGF0aCA9IGQzLmdlb1BhdGgoKS5wcm9qZWN0aW9uKHByb2plY3Rpb24pO1xuXG4gICAgZy5zZWxlY3RBbGwoJy5jb3VudHJ5JykucmVtb3ZlKCk7XG5cbiAgICBjb25zdCBjb3VudHJ5R3JvdXBzID0gZy5zZWxlY3RBbGwoJ2cuY291bnRyeScpXG4gICAgICAuZGF0YShjb3VudHJpZXMuZmVhdHVyZXMuZmlsdGVyKGQgPT4gZC5wcm9wZXJ0aWVzLnNsdWcgIT09ICdhbnRhcmN0aWNhJykpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCBkID0+IGBjb3VudHJ5IGctJHtkLnByb3BlcnRpZXMuc2x1Z31gKVxuICAgICAgLnN0eWxlKCdwb2ludGVyLWV2ZW50cycsICdub25lJyk7XG5cbiAgICBjb3VudHJ5R3JvdXBzLmFwcGVuZFNlbGVjdCgncGF0aC5sZXZlbC0wJylcbiAgICAgIC5hdHRyKCdjbGFzcycsIGQgPT4gJ2MtJyArIGQucHJvcGVydGllcy5zbHVnICsgJyBsZXZlbC0wJylcbiAgICAgIC5zdHlsZSgnc3Ryb2tlJywgcHJvcHMubWFwX3N0cm9rZV9jb2xvcilcbiAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgcHJvcHMubWFwX3N0cm9rZV93aWR0aClcbiAgICAgIC5zdHlsZSgnZmlsbCcsICd0cmFuc3BhcmVudCcpXG4gICAgICAuYXR0cignZCcsIHBhdGgpO1xuXG4gICAgY291bnRyeUdyb3Vwc1xuICAgICAgLmFwcGVuZFNlbGVjdCgncGF0aC5jZW50cm9pZCcpXG4gICAgICAuYXR0cignY2xhc3MnLCBkID0+IGQucHJvcGVydGllcy5zbHVnICsgJyBjZW50cm9pZCcpXG4gICAgICAuYXR0cignZCcsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgY29uc3Qgb2JqID0gcHJvamVjdGlvbihkLnByb3BlcnRpZXMuY2VudHJvaWQpO1xuICAgICAgICBjb25zdCBvID0gbmV3RGF0YS5maWx0ZXIoZSA9PiBkLnByb3BlcnRpZXMuaXNvQWxwaGEyID09PSBlLmtleSlbMF07XG4gICAgICAgIGlmIChvKSB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBzY2FsZVkoby52YWx1ZSk7XG4gICAgICAgICAgcmV0dXJuICdNJyArIChvYmpbMF0gLSBwcm9wcy5zcGlrZV9zaXplKSArICcgJyArIG9ialsxXSArICcgTCcgKyBvYmpbMF0gKyAnICcgKyAob2JqWzFdIC0gdmFsdWUpICsgJyBMJyArIChvYmpbMF0gKyBwcm9wcy5zcGlrZV9zaXplKSArICcgJyArIG9ialsxXSArICcgJztcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5zdHlsZSgnZmlsbCcsICdub25lJylcbiAgICAgIC5zdHlsZSgnc3Ryb2tlJywgZnVuY3Rpb24oZCkge1xuICAgICAgICBjb25zdCBvID0gbmV3RGF0YS5maWx0ZXIoZSA9PiBkLnByb3BlcnRpZXMuaXNvQWxwaGEyID09PSBlLmtleSlbMF07XG4gICAgICAgIHJldHVybiBvID8gcHJvcHMuc3Bpa2VfY29sb3Jfc2NhbGUoby52YWx1ZSkgOiBudWxsO1xuICAgICAgfSlcbiAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgcHJvcHMuc3Bpa2Vfc3Ryb2tlX3dpZHRoKTtcblxuICAgIGcuYXBwZW5kU2VsZWN0KCdwYXRoLmRpc3B1dGVkJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdkaXNwdXRlZCBsZXZlbC0wJylcbiAgICAgIC5zdHlsZSgnc3Ryb2tlJywgcHJvcHMubWFwX3N0cm9rZV9jb2xvcilcbiAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgcHJvcHMubWFwX3N0cm9rZV93aWR0aClcbiAgICAgIC5hdHRyKCdkJywgcGF0aChkaXNwdXRlZCkpO1xuXG4gICAgY29uc3QgY291bnRyeVZvcm9ub2lDZW50cm9pZHMgPSBnLmFwcGVuZFNlbGVjdCgnZy52b3Jvbm9pJylcbiAgICAgIC5zZWxlY3RBbGwoJ3BhdGgudm9yb25vaScpXG4gICAgICAuZGF0YShnZW9Wb3Jvbm9pKCkucG9seWdvbnMoY291bnRyeUNlbnRyb2lkcykuZmVhdHVyZXMpO1xuXG4gICAgY291bnRyeVZvcm9ub2lDZW50cm9pZHMuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAndm9yb25vaScpXG4gICAgICAubWVyZ2UoY291bnRyeVZvcm9ub2lDZW50cm9pZHMpXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCAnbm9uZScpXG4gICAgICAuc3R5bGUoJ2N1cnNvcicsICdjcm9zc2hhaXInKVxuICAgICAgLmF0dHIoJ3BvaW50ZXItZXZlbnRzJywgJ2FsbCcpXG4gICAgICAuYXR0cignZCcsIHBhdGgpXG4gICAgICAub24oJ21vdXNlb3ZlcicsIHRpcE9uKVxuICAgICAgLm9uKCdtb3VzZW91dCcsIHRpcE9mZik7XG5cbiAgICBmdW5jdGlvbiB0aXBPbih2b3Jvbm9pUGF0aCkge1xuICAgICAgY29uc3QgeyBwcm9wZXJ0aWVzIH0gPSB2b3Jvbm9pUGF0aC5wcm9wZXJ0aWVzLnNpdGU7XG4gICAgICBjb25zdCBzZWwgPSBnLnNlbGVjdChgZy5jb3VudHJ5LmctJHtwcm9wZXJ0aWVzLnNsdWd9YCk7XG4gICAgICBnLnNlbGVjdEFsbCgncGF0aC5jZW50cm9pZCcpXG4gICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIHByb3BzLnNwaWtlX2luYWN0aXZlX29wYWNpdHkpO1xuICAgICAgZy5zZWxlY3RBbGwoYHBhdGguY2VudHJvaWQuJHtwcm9wZXJ0aWVzLnNsdWd9YCkuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgIHNlbC5hcHBlbmRTZWxlY3QoJ3RleHQnKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIGNvbnN0IG8gPSBwcm9qZWN0aW9uKGQucHJvcGVydGllcy5jZW50cm9pZCk7XG4gICAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGUoJHtvWzBdfSwke29bMV0gKyBwcm9wcy5ob3Zlcl9nYXB9KWA7XG4gICAgICAgIH0pXG4gICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAgICAgLnRleHQoZCA9PiBkLnByb3BlcnRpZXMudHJhbnNsYXRpb25zW3Byb3BzLmxvY2FsZV0pO1xuXG4gICAgICBzZWwuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgIHNlbC5zZWxlY3RBbGwoJy5sZXZlbC0wJylcbiAgICAgICAgLmNsYXNzZWQoJ2FjdGl2ZScsIHRydWUpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgcHJvcHMubWFwX3N0cm9rZV9jb2xvcl9hY3RpdmUpO1xuXG4gICAgICBzZWwuc2VsZWN0KCcuY2VudHJvaWQnKVxuICAgICAgICAuY2xhc3NlZCgnYWN0aXZlJywgdHJ1ZSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCBwcm9wcy5zcGlrZV9oaWdobGlnaHRfc3Ryb2tlX3dpZHRoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0aXBPZmYodm9yb25vaVBhdGgpIHtcbiAgICAgIGNvbnN0IHsgcHJvcGVydGllcyB9ID0gdm9yb25vaVBhdGgucHJvcGVydGllcy5zaXRlO1xuICAgICAgY29uc3Qgc2VsID0gZy5zZWxlY3QoYGcuY291bnRyeS5nLSR7cHJvcGVydGllcy5zbHVnfWApO1xuICAgICAgZy5zZWxlY3RBbGwoJ3BhdGguY2VudHJvaWQnKS5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICAgICAgc2VsLnNlbGVjdCgndGV4dCcpLnJlbW92ZSgpO1xuICAgICAgc2VsLnNlbGVjdEFsbCgnLmxldmVsLTAnKVxuICAgICAgICAuY2xhc3NlZCgnYWN0aXZlJywgZmFsc2UpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgcHJvcHMubWFwX3N0cm9rZV9jb2xvcik7XG5cbiAgICAgIHNlbC5zZWxlY3QoJy5jZW50cm9pZCcpXG4gICAgICAgIC5jbGFzc2VkKCdhY3RpdmUnLCBmYWxzZSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCBwcm9wcy5zcGlrZV9zdHJva2Vfd2lkdGgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFJhdGVNYXA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})