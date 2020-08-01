webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! topojson-client */ \"./node_modules/topojson-client/index.js\");\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n/* harmony import */ var d3_geo_voronoi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! d3-geo-voronoi */ \"./node_modules/d3-geo-voronoi/index.js\");\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n // import AtlasMetadataClient from '@reuters-graphics/graphics-atlas-client';\n\n\n\n // const client = new AtlasMetadataClient();\n// import topology from '@reuters-graphics/graphics-atlas-client/topojson/global.110m.json';\n\nvar GlobalRateMap = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(GlobalRateMap, _ChartComponent);\n\n  var _super = _createSuper(GlobalRateMap);\n\n  function GlobalRateMap() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, GlobalRateMap);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      map_stroke_width: 0.7,\n      map_stroke_color: 'rgba(255, 255, 255, 0.25)',\n      map_fill: '#333',\n      map_stroke_color_active: 'rgba(255, 255, 255, 0.75)',\n      spike_color: '#eec331',\n      heightRatio: 0.5,\n      geo: false,\n      locale: 'en',\n      hover_gap: 12.5,\n      spike_height: 30,\n      spike_size: 3,\n      range: {\n        min: 0,\n        max: 1\n      },\n      spike_stroke_width: 0.8,\n      spike_highlight_stroke_width: 1.2,\n      spike_color_scale: _utils_d3__WEBPACK_IMPORTED_MODULE_9__[\"default\"].scaleThreshold() // Can use a scale as a prop!\n      .domain([0.75, 0.9]).range(['#ccc', '#f68e26', '#de2d26']),\n      spike_inactive_opacity: 0\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(GlobalRateMap, [{\n    key: \"draw\",\n    value: function draw() {\n      var data = this.data();\n      var props = this.props();\n      var node = this.selection().node();\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var height = width * props.heightRatio;\n      var newData = data.filter(function (d) {\n        return d.value >= props.range.min && d.value <= props.range.max;\n      });\n      var scaleY = _utils_d3__WEBPACK_IMPORTED_MODULE_9__[\"default\"].scaleLinear().range([0, props.spike_height]).domain([0, 1]);\n      var svg = this.selection().appendSelect('svg') // see docs in ./utils/d3.js\n      .attr('width', width).attr('height', height);\n      var g = svg.appendSelect('g').attr('transform', \"translate(\".concat(0, \", \", 0, \")\"));\n      var projection = _utils_d3__WEBPACK_IMPORTED_MODULE_9__[\"default\"].geoNaturalEarth1();\n      var countries = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"feature\"](props.geo, props.geo.objects.countries);\n      var disputed = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"mesh\"](props.geo, props.geo.objects.disputedBoundaries);\n      var filteredCountryKeys = newData.map(function (d) {\n        return d.key;\n      });\n      var countryCentroids = countries.features.filter(function (c) {\n        return filteredCountryKeys.includes(c.properties.isoAlpha2);\n      }).map(function (_ref) {\n        var properties = _ref.properties;\n        return {\n          type: 'Feature',\n          properties: properties,\n          geometry: {\n            type: 'Point',\n            coordinates: properties.centroid\n          }\n        };\n      }); // Adding some points in the ocean to create voronoi spaces that will\n      // reset the map, so as your cursor traces land masses, you get highlights,\n      // but in the ocean you can see the whole world picture...\n\n      var resetPoints = [[-40.248108, 38.653788], // North Atlantic\n      [-29.800018, 14.536220], // Central Atlantic\n      [-15.485548, -12.941648], // South Atlantic\n      [-174.808659, 35.856127], // North Pacific\n      [-117.324414, -11.130821], // South Pacific\n      [64.407024, 5.045815], // North Indian\n      [75.569128, -31.691939], // South Indian\n      [-5.783266, -83.608077] // Antarctica\n      ];\n      var voronoiCentroids = countryCentroids.concat(resetPoints.map(function (centroid) {\n        return {\n          type: 'Feature',\n          properties: {\n            reset: true\n          },\n          geometry: {\n            type: 'Point',\n            coordinates: centroid\n          }\n        };\n      }));\n      projection.fitSize([width, height], countries);\n      var path = _utils_d3__WEBPACK_IMPORTED_MODULE_9__[\"default\"].geoPath().projection(projection);\n      g.selectAll('.country').remove();\n      var countryGroups = g.selectAll('g.country').data(countries.features.filter(function (d) {\n        return d.properties.slug !== 'antarctica';\n      })).enter().append('g').attr('class', function (d) {\n        return \"country g-\".concat(d.properties.slug);\n      }).style('pointer-events', 'none');\n      countryGroups.appendSelect('path.level-0').attr('class', function (d) {\n        return 'c-' + d.properties.slug + ' level-0';\n      }).style('stroke', props.map_stroke_color).style('stroke-width', props.map_stroke_width).style('fill', props.map_fill).attr('d', path);\n      countryGroups.appendSelect('path.centroid').attr('class', function (d) {\n        return d.properties.slug + ' centroid';\n      }).attr('d', function (d) {\n        var obj = projection(d.properties.centroid);\n        var o = newData.filter(function (e) {\n          return d.properties.isoAlpha2 === e.key;\n        })[0];\n\n        if (o) {\n          var value = scaleY(o.value);\n          return 'M' + (obj[0] - props.spike_size) + ' ' + obj[1] + ' L' + obj[0] + ' ' + (obj[1] - value) + ' L' + (obj[0] + props.spike_size) + ' ' + obj[1] + ' ';\n        }\n      }).style('fill', 'none').style('stroke', function (d) {\n        var o = newData.filter(function (e) {\n          return d.properties.isoAlpha2 === e.key;\n        })[0];\n        return o ? props.spike_color_scale(o.value) : null;\n      }).style('stroke-width', props.spike_stroke_width);\n      g.appendSelect('path.disputed').attr('class', 'disputed level-0').style('stroke', props.map_stroke_color).style('stroke-width', props.map_stroke_width).attr('d', path(disputed));\n      var countryVoronoiCentroids = g.appendSelect('g.voronoi').selectAll('path.voronoi').data(Object(d3_geo_voronoi__WEBPACK_IMPORTED_MODULE_10__[\"geoVoronoi\"])().polygons(voronoiCentroids).features);\n      countryVoronoiCentroids.enter().append('path').attr('class', 'voronoi').merge(countryVoronoiCentroids).style('fill', 'none').style('cursor', 'crosshair').attr('pointer-events', 'all').attr('d', path).on('mouseover', tipOn).on('mouseout', tipOff);\n\n      function tipOn(voronoiPath) {\n        var properties = voronoiPath.properties.site.properties;\n        if (properties.reset) return;\n        var sel = g.select(\"g.country.g-\".concat(properties.slug)).moveToFront();\n        g.selectAll('path.centroid').style('opacity', props.spike_inactive_opacity);\n        g.selectAll(\"path.centroid.\".concat(properties.slug)).style('opacity', 1);\n        sel.appendSelect('text').attr('transform', function (d) {\n          var o = projection(d.properties.centroid);\n          return \"translate(\".concat(o[0], \",\").concat(o[1] + props.hover_gap, \")\");\n        }).style('text-anchor', 'middle').text(function (d) {\n          return d.properties.translations[props.locale];\n        });\n        sel.style('opacity', 1);\n        sel.selectAll('.level-0').classed('active', true).style('stroke', props.map_stroke_color_active);\n        sel.select('.centroid').classed('active', true).style('stroke-width', props.spike_highlight_stroke_width);\n      }\n\n      function tipOff(voronoiPath) {\n        var properties = voronoiPath.properties.site.properties;\n        var sel = g.select(\"g.country.g-\".concat(properties.slug));\n        g.selectAll('path.centroid').style('opacity', 1);\n        sel.select('text').remove();\n        sel.selectAll('.level-0').classed('active', false).style('stroke', props.map_stroke_color);\n        sel.select('.centroid').classed('active', false).style('stroke-width', props.spike_stroke_width);\n      }\n\n      return this;\n    }\n  }]);\n\n  return GlobalRateMap;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GlobalRateMap);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiR2xvYmFsUmF0ZU1hcCIsIm1hcF9zdHJva2Vfd2lkdGgiLCJtYXBfc3Ryb2tlX2NvbG9yIiwibWFwX2ZpbGwiLCJtYXBfc3Ryb2tlX2NvbG9yX2FjdGl2ZSIsInNwaWtlX2NvbG9yIiwiaGVpZ2h0UmF0aW8iLCJnZW8iLCJsb2NhbGUiLCJob3Zlcl9nYXAiLCJzcGlrZV9oZWlnaHQiLCJzcGlrZV9zaXplIiwicmFuZ2UiLCJtaW4iLCJtYXgiLCJzcGlrZV9zdHJva2Vfd2lkdGgiLCJzcGlrZV9oaWdobGlnaHRfc3Ryb2tlX3dpZHRoIiwic3Bpa2VfY29sb3Jfc2NhbGUiLCJkMyIsInNjYWxlVGhyZXNob2xkIiwiZG9tYWluIiwic3Bpa2VfaW5hY3RpdmVfb3BhY2l0eSIsImRhdGEiLCJwcm9wcyIsIm5vZGUiLCJzZWxlY3Rpb24iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsImhlaWdodCIsIm5ld0RhdGEiLCJmaWx0ZXIiLCJkIiwidmFsdWUiLCJzY2FsZVkiLCJzY2FsZUxpbmVhciIsInN2ZyIsImFwcGVuZFNlbGVjdCIsImF0dHIiLCJnIiwicHJvamVjdGlvbiIsImdlb05hdHVyYWxFYXJ0aDEiLCJjb3VudHJpZXMiLCJ0b3BvanNvbiIsIm9iamVjdHMiLCJkaXNwdXRlZCIsImRpc3B1dGVkQm91bmRhcmllcyIsImZpbHRlcmVkQ291bnRyeUtleXMiLCJtYXAiLCJrZXkiLCJjb3VudHJ5Q2VudHJvaWRzIiwiZmVhdHVyZXMiLCJjIiwiaW5jbHVkZXMiLCJwcm9wZXJ0aWVzIiwiaXNvQWxwaGEyIiwidHlwZSIsImdlb21ldHJ5IiwiY29vcmRpbmF0ZXMiLCJjZW50cm9pZCIsInJlc2V0UG9pbnRzIiwidm9yb25vaUNlbnRyb2lkcyIsImNvbmNhdCIsInJlc2V0IiwiZml0U2l6ZSIsInBhdGgiLCJnZW9QYXRoIiwic2VsZWN0QWxsIiwicmVtb3ZlIiwiY291bnRyeUdyb3VwcyIsInNsdWciLCJlbnRlciIsImFwcGVuZCIsInN0eWxlIiwib2JqIiwibyIsImUiLCJjb3VudHJ5Vm9yb25vaUNlbnRyb2lkcyIsImdlb1Zvcm9ub2kiLCJwb2x5Z29ucyIsIm1lcmdlIiwib24iLCJ0aXBPbiIsInRpcE9mZiIsInZvcm9ub2lQYXRoIiwic2l0ZSIsInNlbCIsInNlbGVjdCIsIm1vdmVUb0Zyb250IiwidGV4dCIsInRyYW5zbGF0aW9ucyIsImNsYXNzZWQiLCJDaGFydENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7O0FBQ0E7QUFDQTtDQUdBO0FBQ0E7O0lBRU1BLGE7Ozs7Ozs7Ozs7Ozs7Ozs7dU5BQ1c7QUFDYkMsc0JBQWdCLEVBQUUsR0FETDtBQUViQyxzQkFBZ0IsRUFBRSwyQkFGTDtBQUdiQyxjQUFRLEVBQUUsTUFIRztBQUliQyw2QkFBdUIsRUFBRSwyQkFKWjtBQUtiQyxpQkFBVyxFQUFFLFNBTEE7QUFNYkMsaUJBQVcsRUFBRSxHQU5BO0FBT2JDLFNBQUcsRUFBRSxLQVBRO0FBUWJDLFlBQU0sRUFBRSxJQVJLO0FBU2JDLGVBQVMsRUFBRSxJQVRFO0FBVWJDLGtCQUFZLEVBQUUsRUFWRDtBQVdiQyxnQkFBVSxFQUFFLENBWEM7QUFZYkMsV0FBSyxFQUFFO0FBQUVDLFdBQUcsRUFBRSxDQUFQO0FBQVVDLFdBQUcsRUFBRTtBQUFmLE9BWk07QUFhYkMsd0JBQWtCLEVBQUUsR0FiUDtBQWNiQyxrQ0FBNEIsRUFBRSxHQWRqQjtBQWViQyx1QkFBaUIsRUFBRUMsaURBQUUsQ0FBQ0MsY0FBSCxHQUFvQjtBQUFwQixPQUNoQkMsTUFEZ0IsQ0FDVCxDQUFDLElBQUQsRUFBTyxHQUFQLENBRFMsRUFFaEJSLEtBRmdCLENBRVYsQ0FBQyxNQUFELEVBQVMsU0FBVCxFQUFvQixTQUFwQixDQUZVLENBZk47QUFrQmJTLDRCQUFzQixFQUFFO0FBbEJYLEs7Ozs7Ozs7MkJBcUJSO0FBQ0wsVUFBTUMsSUFBSSxHQUFHLEtBQUtB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QUFkLEVBQ0d3QixPQURILENBQ1csUUFEWCxFQUNxQixLQURyQixFQUVHbEIsS0FGSCxDQUVTLFFBRlQsRUFFbUJqRCxLQUFLLENBQUNyQixnQkFGekI7QUFJQW1GLFdBQUcsQ0FBQ0MsTUFBSixDQUFXLFdBQVgsRUFDR0ksT0FESCxDQUNXLFFBRFgsRUFDcUIsS0FEckIsRUFFR2xCLEtBRkgsQ0FFUyxjQUZULEVBRXlCakQsS0FBSyxDQUFDUixrQkFGL0I7QUFHRDs7QUFFRCxhQUFPLElBQVA7QUFDRDs7OztFQWhMeUI0RSw0RDs7QUFtTGIzRiw0RUFBZiIsImZpbGUiOiIuL3NyYy9saWIvY2hhcnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0b3BvanNvbiBmcm9tICd0b3BvanNvbi1jbGllbnQnO1xuXG4vLyBpbXBvcnQgQXRsYXNNZXRhZGF0YUNsaWVudCBmcm9tICdAcmV1dGVycy1ncmFwaGljcy9ncmFwaGljcy1hdGxhcy1jbGllbnQnO1xuaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJy4vYmFzZS9DaGFydENvbXBvbmVudCc7XG5pbXBvcnQgZDMgZnJvbSAnLi91dGlscy9kMyc7XG5pbXBvcnQgeyBnZW9Wb3Jvbm9pIH0gZnJvbSAnZDMtZ2VvLXZvcm9ub2knO1xuXG4vLyBjb25zdCBjbGllbnQgPSBuZXcgQXRsYXNNZXRhZGF0YUNsaWVudCgpO1xuLy8gaW1wb3J0IHRvcG9sb2d5IGZyb20gJ0ByZXV0ZXJzLWdyYXBoaWNzL2dyYXBoaWNzLWF0bGFzLWNsaWVudC90b3BvanNvbi9nbG9iYWwuMTEwbS5qc29uJztcblxuY2xhc3MgR2xvYmFsUmF0ZU1hcCBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgZGVmYXVsdFByb3BzID0ge1xuICAgIG1hcF9zdHJva2Vfd2lkdGg6IDAuNyxcbiAgICBtYXBfc3Ryb2tlX2NvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KScsXG4gICAgbWFwX2ZpbGw6ICcjMzMzJyxcbiAgICBtYXBfc3Ryb2tlX2NvbG9yX2FjdGl2ZTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSknLFxuICAgIHNwaWtlX2NvbG9yOiAnI2VlYzMzMScsXG4gICAgaGVpZ2h0UmF0aW86IDAuNSxcbiAgICBnZW86IGZhbHNlLFxuICAgIGxvY2FsZTogJ2VuJyxcbiAgICBob3Zlcl9nYXA6IDEyLjUsXG4gICAgc3Bpa2VfaGVpZ2h0OiAzMCxcbiAgICBzcGlrZV9zaXplOiAzLFxuICAgIHJhbmdlOiB7IG1pbjogMCwgbWF4OiAxIH0sXG4gICAgc3Bpa2Vfc3Ryb2tlX3dpZHRoOiAwLjgsXG4gICAgc3Bpa2VfaGlnaGxpZ2h0X3N0cm9rZV93aWR0aDogMS4yLFxuICAgIHNwaWtlX2NvbG9yX3NjYWxlOiBkMy5zY2FsZVRocmVzaG9sZCgpIC8vIENhbiB1c2UgYSBzY2FsZSBhcyBhIHByb3AhXG4gICAgICAuZG9tYWluKFswLjc1LCAwLjldKVxuICAgICAgLnJhbmdlKFsnI2NjYycsICcjZjY4ZTI2JywgJyNkZTJkMjYnXSksXG4gICAgc3Bpa2VfaW5hY3RpdmVfb3BhY2l0eTogMCxcbiAgfTtcblxuICBkcmF3KCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGEoKTtcbiAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHMoKTtcbiAgICBjb25zdCBub2RlID0gdGhpcy5zZWxlY3Rpb24oKS5ub2RlKCk7XG4gICAgY29uc3QgeyB3aWR0aCB9ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBoZWlnaHQgPSB3aWR0aCAqIHByb3BzLmhlaWdodFJhdGlvO1xuXG4gICAgY29uc3QgbmV3RGF0YSA9IGRhdGEuZmlsdGVyKGQgPT4gZC52YWx1ZSA+PSBwcm9wcy5yYW5nZS5taW4gJiYgZC52YWx1ZSA8PSBwcm9wcy5yYW5nZS5tYXgpO1xuXG4gICAgY29uc3Qgc2NhbGVZID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbMCwgcHJvcHMuc3Bpa2VfaGVpZ2h0XSkuZG9tYWluKFswLCAxXSk7XG4gICAgY29uc3Qgc3ZnID0gdGhpcy5zZWxlY3Rpb24oKVxuICAgICAgLmFwcGVuZFNlbGVjdCgnc3ZnJykgLy8gc2VlIGRvY3MgaW4gLi91dGlscy9kMy5qc1xuICAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gICAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KTtcblxuICAgIGNvbnN0IGcgPSBzdmcuYXBwZW5kU2VsZWN0KCdnJylcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7MH0sICR7MH0pYCk7XG5cbiAgICBjb25zdCBwcm9qZWN0aW9uID0gZDMuZ2VvTmF0dXJhbEVhcnRoMSgpO1xuICAgIGNvbnN0IGNvdW50cmllcyA9IHRvcG9qc29uLmZlYXR1cmUocHJvcHMuZ2VvLCBwcm9wcy5nZW8ub2JqZWN0cy5jb3VudHJpZXMpO1xuICAgIGNvbnN0IGRpc3B1dGVkID0gdG9wb2pzb24ubWVzaChwcm9wcy5nZW8sIHByb3BzLmdlby5vYmplY3RzLmRpc3B1dGVkQm91bmRhcmllcyk7XG5cbiAgICBjb25zdCBmaWx0ZXJlZENvdW50cnlLZXlzID0gbmV3RGF0YS5tYXAoZCA9PiBkLmtleSk7XG4gICAgY29uc3QgY291bnRyeUNlbnRyb2lkcyA9IGNvdW50cmllcy5mZWF0dXJlc1xuICAgICAgLmZpbHRlcihjID0+IGZpbHRlcmVkQ291bnRyeUtleXMuaW5jbHVkZXMoYy5wcm9wZXJ0aWVzLmlzb0FscGhhMikpXG4gICAgICAubWFwKCh7IHByb3BlcnRpZXMgfSkgPT4gKHtcbiAgICAgICAgdHlwZTogJ0ZlYXR1cmUnLFxuICAgICAgICBwcm9wZXJ0aWVzLFxuICAgICAgICBnZW9tZXRyeToge1xuICAgICAgICAgIHR5cGU6ICdQb2ludCcsXG4gICAgICAgICAgY29vcmRpbmF0ZXM6IHByb3BlcnRpZXMuY2VudHJvaWQsXG4gICAgICAgIH0sXG4gICAgICB9KSk7XG5cbiAgICAvLyBBZGRpbmcgc29tZSBwb2ludHMgaW4gdGhlIG9jZWFuIHRvIGNyZWF0ZSB2b3Jvbm9pIHNwYWNlcyB0aGF0IHdpbGxcbiAgICAvLyByZXNldCB0aGUgbWFwLCBzbyBhcyB5b3VyIGN1cnNvciB0cmFjZXMgbGFuZCBtYXNzZXMsIHlvdSBnZXQgaGlnaGxpZ2h0cyxcbiAgICAvLyBidXQgaW4gdGhlIG9jZWFuIHlvdSBjYW4gc2VlIHRoZSB3aG9sZSB3b3JsZCBwaWN0dXJlLi4uXG4gICAgY29uc3QgcmVzZXRQb2ludHMgPSBbXG4gICAgICBbLTQwLjI0ODEwOCwgMzguNjUzNzg4XSwgLy8gTm9ydGggQXRsYW50aWNcbiAgICAgIFstMjkuODAwMDE4LCAxNC41MzYyMjBdLCAvLyBDZW50cmFsIEF0bGFudGljXG4gICAgICBbLTE1LjQ4NTU0OCwgLTEyLjk0MTY0OF0sIC8vIFNvdXRoIEF0bGFudGljXG4gICAgICBbLTE3NC44MDg2NTksIDM1Ljg1NjEyN10sIC8vIE5vcnRoIFBhY2lmaWNcbiAgICAgIFstMTE3LjMyNDQxNCwgLTExLjEzMDgyMV0sIC8vIFNvdXRoIFBhY2lmaWNcbiAgICAgIFs2NC40MDcwMjQsIDUuMDQ1ODE1XSwgLy8gTm9ydGggSW5kaWFuXG4gICAgICBbNzUuNTY5MTI4LCAtMzEuNjkxOTM5XSwgLy8gU291dGggSW5kaWFuXG4gICAgICBbLTUuNzgzMjY2LCAtODMuNjA4MDc3XSwgLy8gQW50YXJjdGljYVxuICAgIF07XG4gICAgY29uc3Qgdm9yb25vaUNlbnRyb2lkcyA9IGNvdW50cnlDZW50cm9pZHMuY29uY2F0KHJlc2V0UG9pbnRzLm1hcChjZW50cm9pZCA9PiAoe1xuICAgICAgdHlwZTogJ0ZlYXR1cmUnLFxuICAgICAgcHJvcGVydGllczogeyByZXNldDogdHJ1ZSB9LFxuICAgICAgZ2VvbWV0cnk6IHtcbiAgICAgICAgdHlwZTogJ1BvaW50JyxcbiAgICAgICAgY29vcmRpbmF0ZXM6IGNlbnRyb2lkLFxuICAgICAgfSxcbiAgICB9KSkpO1xuXG4gICAgcHJvamVjdGlvbi5maXRTaXplKFt3aWR0aCwgaGVpZ2h0XSwgY291bnRyaWVzKTtcbiAgICBjb25zdCBwYXRoID0gZDMuZ2VvUGF0aCgpLnByb2plY3Rpb24ocHJvamVjdGlvbik7XG5cbiAgICBnLnNlbGVjdEFsbCgnLmNvdW50cnknKS5yZW1vdmUoKTtcblxuICAgIGNvbnN0IGNvdW50cnlHcm91cHMgPSBnLnNlbGVjdEFsbCgnZy5jb3VudHJ5JylcbiAgICAgIC5kYXRhKGNvdW50cmllcy5mZWF0dXJlcy5maWx0ZXIoZCA9PiBkLnByb3BlcnRpZXMuc2x1ZyAhPT0gJ2FudGFyY3RpY2EnKSlcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsIGQgPT4gYGNvdW50cnkgZy0ke2QucHJvcGVydGllcy5zbHVnfWApXG4gICAgICAuc3R5bGUoJ3BvaW50ZXItZXZlbnRzJywgJ25vbmUnKTtcblxuICAgIGNvdW50cnlHcm91cHMuYXBwZW5kU2VsZWN0KCdwYXRoLmxldmVsLTAnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgZCA9PiAnYy0nICsgZC5wcm9wZXJ0aWVzLnNsdWcgKyAnIGxldmVsLTAnKVxuICAgICAgLnN0eWxlKCdzdHJva2UnLCBwcm9wcy5tYXBfc3Ryb2tlX2NvbG9yKVxuICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCBwcm9wcy5tYXBfc3Ryb2tlX3dpZHRoKVxuICAgICAgLnN0eWxlKCdmaWxsJywgcHJvcHMubWFwX2ZpbGwpXG4gICAgICAuYXR0cignZCcsIHBhdGgpO1xuXG4gICAgY291bnRyeUdyb3Vwc1xuICAgICAgLmFwcGVuZFNlbGVjdCgncGF0aC5jZW50cm9pZCcpXG4gICAgICAuYXR0cignY2xhc3MnLCBkID0+IGQucHJvcGVydGllcy5zbHVnICsgJyBjZW50cm9pZCcpXG4gICAgICAuYXR0cignZCcsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgY29uc3Qgb2JqID0gcHJvamVjdGlvbihkLnByb3BlcnRpZXMuY2VudHJvaWQpO1xuICAgICAgICBjb25zdCBvID0gbmV3RGF0YS5maWx0ZXIoZSA9PiBkLnByb3BlcnRpZXMuaXNvQWxwaGEyID09PSBlLmtleSlbMF07XG4gICAgICAgIGlmIChvKSB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBzY2FsZVkoby52YWx1ZSk7XG4gICAgICAgICAgcmV0dXJuICdNJyArIChvYmpbMF0gLSBwcm9wcy5zcGlrZV9zaXplKSArICcgJyArIG9ialsxXSArICcgTCcgKyBvYmpbMF0gKyAnICcgKyAob2JqWzFdIC0gdmFsdWUpICsgJyBMJyArIChvYmpbMF0gKyBwcm9wcy5zcGlrZV9zaXplKSArICcgJyArIG9ialsxXSArICcgJztcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5zdHlsZSgnZmlsbCcsICdub25lJylcbiAgICAgIC5zdHlsZSgnc3Ryb2tlJywgZnVuY3Rpb24oZCkge1xuICAgICAgICBjb25zdCBvID0gbmV3RGF0YS5maWx0ZXIoZSA9PiBkLnByb3BlcnRpZXMuaXNvQWxwaGEyID09PSBlLmtleSlbMF07XG4gICAgICAgIHJldHVybiBvID8gcHJvcHMuc3Bpa2VfY29sb3Jfc2NhbGUoby52YWx1ZSkgOiBudWxsO1xuICAgICAgfSlcbiAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgcHJvcHMuc3Bpa2Vfc3Ryb2tlX3dpZHRoKTtcblxuICAgIGcuYXBwZW5kU2VsZWN0KCdwYXRoLmRpc3B1dGVkJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdkaXNwdXRlZCBsZXZlbC0wJylcbiAgICAgIC5zdHlsZSgnc3Ryb2tlJywgcHJvcHMubWFwX3N0cm9rZV9jb2xvcilcbiAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgcHJvcHMubWFwX3N0cm9rZV93aWR0aClcbiAgICAgIC5hdHRyKCdkJywgcGF0aChkaXNwdXRlZCkpO1xuXG4gICAgY29uc3QgY291bnRyeVZvcm9ub2lDZW50cm9pZHMgPSBnLmFwcGVuZFNlbGVjdCgnZy52b3Jvbm9pJylcbiAgICAgIC5zZWxlY3RBbGwoJ3BhdGgudm9yb25vaScpXG4gICAgICAuZGF0YShnZW9Wb3Jvbm9pKCkucG9seWdvbnModm9yb25vaUNlbnRyb2lkcykuZmVhdHVyZXMpO1xuXG4gICAgY291bnRyeVZvcm9ub2lDZW50cm9pZHMuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAndm9yb25vaScpXG4gICAgICAubWVyZ2UoY291bnRyeVZvcm9ub2lDZW50cm9pZHMpXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCAnbm9uZScpXG4gICAgICAuc3R5bGUoJ2N1cnNvcicsICdjcm9zc2hhaXInKVxuICAgICAgLmF0dHIoJ3BvaW50ZXItZXZlbnRzJywgJ2FsbCcpXG4gICAgICAuYXR0cignZCcsIHBhdGgpXG4gICAgICAub24oJ21vdXNlb3ZlcicsIHRpcE9uKVxuICAgICAgLm9uKCdtb3VzZW91dCcsIHRpcE9mZik7XG5cbiAgICBmdW5jdGlvbiB0aXBPbih2b3Jvbm9pUGF0aCkge1xuICAgICAgY29uc3QgeyBwcm9wZXJ0aWVzIH0gPSB2b3Jvbm9pUGF0aC5wcm9wZXJ0aWVzLnNpdGU7XG4gICAgICBpZiAocHJvcGVydGllcy5yZXNldCkgcmV0dXJuO1xuICAgICAgY29uc3Qgc2VsID0gZy5zZWxlY3QoYGcuY291bnRyeS5nLSR7cHJvcGVydGllcy5zbHVnfWApLm1vdmVUb0Zyb250KCk7XG4gICAgICBnLnNlbGVjdEFsbCgncGF0aC5jZW50cm9pZCcpXG4gICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIHByb3BzLnNwaWtlX2luYWN0aXZlX29wYWNpdHkpO1xuICAgICAgZy5zZWxlY3RBbGwoYHBhdGguY2VudHJvaWQuJHtwcm9wZXJ0aWVzLnNsdWd9YCkuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgIHNlbC5hcHBlbmRTZWxlY3QoJ3RleHQnKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIGNvbnN0IG8gPSBwcm9qZWN0aW9uKGQucHJvcGVydGllcy5jZW50cm9pZCk7XG4gICAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGUoJHtvWzBdfSwke29bMV0gKyBwcm9wcy5ob3Zlcl9nYXB9KWA7XG4gICAgICAgIH0pXG4gICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAgICAgLnRleHQoZCA9PiBkLnByb3BlcnRpZXMudHJhbnNsYXRpb25zW3Byb3BzLmxvY2FsZV0pO1xuXG4gICAgICBzZWwuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgIHNlbC5zZWxlY3RBbGwoJy5sZXZlbC0wJylcbiAgICAgICAgLmNsYXNzZWQoJ2FjdGl2ZScsIHRydWUpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgcHJvcHMubWFwX3N0cm9rZV9jb2xvcl9hY3RpdmUpO1xuXG4gICAgICBzZWwuc2VsZWN0KCcuY2VudHJvaWQnKVxuICAgICAgICAuY2xhc3NlZCgnYWN0aXZlJywgdHJ1ZSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCBwcm9wcy5zcGlrZV9oaWdobGlnaHRfc3Ryb2tlX3dpZHRoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0aXBPZmYodm9yb25vaVBhdGgpIHtcbiAgICAgIGNvbnN0IHsgcHJvcGVydGllcyB9ID0gdm9yb25vaVBhdGgucHJvcGVydGllcy5zaXRlO1xuICAgICAgY29uc3Qgc2VsID0gZy5zZWxlY3QoYGcuY291bnRyeS5nLSR7cHJvcGVydGllcy5zbHVnfWApO1xuICAgICAgZy5zZWxlY3RBbGwoJ3BhdGguY2VudHJvaWQnKS5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICAgICAgc2VsLnNlbGVjdCgndGV4dCcpLnJlbW92ZSgpO1xuICAgICAgc2VsLnNlbGVjdEFsbCgnLmxldmVsLTAnKVxuICAgICAgICAuY2xhc3NlZCgnYWN0aXZlJywgZmFsc2UpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgcHJvcHMubWFwX3N0cm9rZV9jb2xvcik7XG5cbiAgICAgIHNlbC5zZWxlY3QoJy5jZW50cm9pZCcpXG4gICAgICAgIC5jbGFzc2VkKCdhY3RpdmUnLCBmYWxzZSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCBwcm9wcy5zcGlrZV9zdHJva2Vfd2lkdGgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFJhdGVNYXA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})