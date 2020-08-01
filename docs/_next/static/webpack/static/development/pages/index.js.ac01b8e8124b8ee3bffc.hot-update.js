webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! topojson-client */ \"./node_modules/topojson-client/index.js\");\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n/* harmony import */ var d3_geo_voronoi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! d3-geo-voronoi */ \"./node_modules/d3-geo-voronoi/index.js\");\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n // import AtlasMetadataClient from '@reuters-graphics/graphics-atlas-client';\n\n\n\n // const client = new AtlasMetadataClient();\n// import topology from '@reuters-graphics/graphics-atlas-client/topojson/global.110m.json';\n\nvar GlobalRateMap = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(GlobalRateMap, _ChartComponent);\n\n  var _super = _createSuper(GlobalRateMap);\n\n  function GlobalRateMap() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, GlobalRateMap);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      map_stroke_width: 0.7,\n      map_stroke_color: 'rgba(255, 255, 255, 0.25)',\n      map_fill: '#333',\n      map_stroke_color_active: 'rgba(255, 255, 255, 0.75)',\n      spike_color: '#eec331',\n      heightRatio: 0.5,\n      geo: false,\n      locale: 'en',\n      hover_gap: 12.5,\n      spike_height: 30,\n      spike_size: 3,\n      range: {\n        min: 0.75,\n        max: 1\n      },\n      spike_stroke_width: 0.8,\n      spike_highlight_stroke_width: 1.2,\n      spike_color_scale: _utils_d3__WEBPACK_IMPORTED_MODULE_9__[\"default\"].scaleThreshold() // Can use a scale as a prop!\n      .domain([0.75, 0.9]).range(['#ccc', '#f68e26', '#de2d26']),\n      spike_inactive_opacity: 0\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(GlobalRateMap, [{\n    key: \"draw\",\n    value: function draw() {\n      var data = this.data();\n      var props = this.props();\n      var node = this.selection().node();\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var height = width * props.heightRatio;\n      var newData = data.filter(function (d) {\n        return d.value >= props.range.min && d.value <= props.range.max;\n      });\n      var scaleY = _utils_d3__WEBPACK_IMPORTED_MODULE_9__[\"default\"].scaleLinear().range([0, props.spike_height]).domain([0, 1]);\n      var svg = this.selection().appendSelect('svg') // see docs in ./utils/d3.js\n      .attr('width', width).attr('height', height);\n      var g = svg.appendSelect('g').attr('transform', \"translate(\".concat(0, \", \", 0, \")\"));\n      var projection = _utils_d3__WEBPACK_IMPORTED_MODULE_9__[\"default\"].geoNaturalEarth1();\n      var countries = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"feature\"](props.geo, props.geo.objects.countries);\n      var disputed = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"mesh\"](props.geo, props.geo.objects.disputedBoundaries);\n      var filteredCountryKeys = newData.map(function (d) {\n        return d.key;\n      });\n      var countryCentroids = countries.features.filter(function (c) {\n        return filteredCountryKeys.includes(c.properties.isoAlpha2);\n      }).map(function (_ref) {\n        var properties = _ref.properties;\n        return {\n          type: 'Feature',\n          properties: properties,\n          geometry: {\n            type: 'Point',\n            coordinates: properties.centroid\n          }\n        };\n      });\n      projection.fitSize([width, height], countries);\n      var path = _utils_d3__WEBPACK_IMPORTED_MODULE_9__[\"default\"].geoPath().projection(projection);\n      g.selectAll('.country').remove();\n      var countryGroups = g.selectAll('g.country').data(countries.features.filter(function (d) {\n        return d.properties.slug !== 'antarctica';\n      })).enter().append('g').attr('class', function (d) {\n        return \"country g-\".concat(d.properties.slug);\n      }).style('pointer-events', 'none');\n      countryGroups.appendSelect('path.level-0').attr('class', function (d) {\n        return 'c-' + d.properties.slug + ' level-0';\n      }).style('stroke', props.map_stroke_color).style('stroke-width', props.map_stroke_width).style('fill', props.map_fill).attr('d', path);\n      countryGroups.appendSelect('path.centroid').attr('class', function (d) {\n        return d.properties.slug + ' centroid';\n      }).attr('d', function (d) {\n        var obj = projection(d.properties.centroid);\n        var o = newData.filter(function (e) {\n          return d.properties.isoAlpha2 === e.key;\n        })[0];\n\n        if (o) {\n          var value = scaleY(o.value);\n          return 'M' + (obj[0] - props.spike_size) + ' ' + obj[1] + ' L' + obj[0] + ' ' + (obj[1] - value) + ' L' + (obj[0] + props.spike_size) + ' ' + obj[1] + ' ';\n        }\n      }).style('fill', 'none').style('stroke', function (d) {\n        var o = newData.filter(function (e) {\n          return d.properties.isoAlpha2 === e.key;\n        })[0];\n        return o ? props.spike_color_scale(o.value) : null;\n      }).style('stroke-width', props.spike_stroke_width);\n      g.appendSelect('path.disputed').attr('class', 'disputed level-0').style('stroke', props.map_stroke_color).style('stroke-width', props.map_stroke_width).attr('d', path(disputed));\n      var countryVoronoiCentroids = g.appendSelect('g.voronoi').selectAll('path.voronoi').data(Object(d3_geo_voronoi__WEBPACK_IMPORTED_MODULE_10__[\"geoVoronoi\"])().polygons(countryCentroids).features);\n      countryVoronoiCentroids.enter().append('path').attr('class', 'voronoi').merge(countryVoronoiCentroids).style('fill', function (d) {\n        return d.properties.site.properties.slug ? 'rgba(255, 0, 0, 0.1)' : 'none';\n      }).style('stroke', 'yellow').style('cursor', 'crosshair').attr('pointer-events', 'all').attr('d', path).on('mouseover', tipOn).on('mouseout', tipOff);\n\n      function tipOn(voronoiPath) {\n        var properties = voronoiPath.properties.site.properties;\n        var sel = g.select(\"g.country.g-\".concat(properties.slug)).moveToFront();\n        g.selectAll('path.centroid').style('opacity', props.spike_inactive_opacity);\n        g.selectAll(\"path.centroid.\".concat(properties.slug)).style('opacity', 1);\n        sel.appendSelect('text').attr('transform', function (d) {\n          var o = projection(d.properties.centroid);\n          return \"translate(\".concat(o[0], \",\").concat(o[1] + props.hover_gap, \")\");\n        }).style('text-anchor', 'middle').text(function (d) {\n          return d.properties.translations[props.locale];\n        });\n        sel.style('opacity', 1);\n        sel.selectAll('.level-0').classed('active', true).style('stroke', props.map_stroke_color_active);\n        sel.select('.centroid').classed('active', true).style('stroke-width', props.spike_highlight_stroke_width);\n      }\n\n      function tipOff(voronoiPath) {\n        var properties = voronoiPath.properties.site.properties;\n        var sel = g.select(\"g.country.g-\".concat(properties.slug));\n        g.selectAll('path.centroid').style('opacity', 1);\n        sel.select('text').remove();\n        sel.selectAll('.level-0').classed('active', false).style('stroke', props.map_stroke_color);\n        sel.select('.centroid').classed('active', false).style('stroke-width', props.spike_stroke_width);\n      }\n\n      return this;\n    }\n  }]);\n\n  return GlobalRateMap;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GlobalRateMap);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiR2xvYmFsUmF0ZU1hcCIsIm1hcF9zdHJva2Vfd2lkdGgiLCJtYXBfc3Ryb2tlX2NvbG9yIiwibWFwX2ZpbGwiLCJtYXBfc3Ryb2tlX2NvbG9yX2FjdGl2ZSIsInNwaWtlX2NvbG9yIiwiaGVpZ2h0UmF0aW8iLCJnZW8iLCJsb2NhbGUiLCJob3Zlcl9nYXAiLCJzcGlrZV9oZWlnaHQiLCJzcGlrZV9zaXplIiwicmFuZ2UiLCJtaW4iLCJtYXgiLCJzcGlrZV9zdHJva2Vfd2lkdGgiLCJzcGlrZV9oaWdobGlnaHRfc3Ryb2tlX3dpZHRoIiwic3Bpa2VfY29sb3Jfc2NhbGUiLCJkMyIsInNjYWxlVGhyZXNob2xkIiwiZG9tYWluIiwic3Bpa2VfaW5hY3RpdmVfb3BhY2l0eSIsImRhdGEiLCJwcm9wcyIsIm5vZGUiLCJzZWxlY3Rpb24iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsImhlaWdodCIsIm5ld0RhdGEiLCJmaWx0ZXIiLCJkIiwidmFsdWUiLCJzY2FsZVkiLCJzY2FsZUxpbmVhciIsInN2ZyIsImFwcGVuZFNlbGVjdCIsImF0dHIiLCJnIiwicHJvamVjdGlvbiIsImdlb05hdHVyYWxFYXJ0aDEiLCJjb3VudHJpZXMiLCJ0b3BvanNvbiIsIm9iamVjdHMiLCJkaXNwdXRlZCIsImRpc3B1dGVkQm91bmRhcmllcyIsImZpbHRlcmVkQ291bnRyeUtleXMiLCJtYXAiLCJrZXkiLCJjb3VudHJ5Q2VudHJvaWRzIiwiZmVhdHVyZXMiLCJjIiwiaW5jbHVkZXMiLCJwcm9wZXJ0aWVzIiwiaXNvQWxwaGEyIiwidHlwZSIsImdlb21ldHJ5IiwiY29vcmRpbmF0ZXMiLCJjZW50cm9pZCIsImZpdFNpemUiLCJwYXRoIiwiZ2VvUGF0aCIsInNlbGVjdEFsbCIsInJlbW92ZSIsImNvdW50cnlHcm91cHMiLCJzbHVnIiwiZW50ZXIiLCJhcHBlbmQiLCJzdHlsZSIsIm9iaiIsIm8iLCJlIiwiY291bnRyeVZvcm9ub2lDZW50cm9pZHMiLCJnZW9Wb3Jvbm9pIiwicG9seWdvbnMiLCJtZXJnZSIsInNpdGUiLCJvbiIsInRpcE9uIiwidGlwT2ZmIiwidm9yb25vaVBhdGgiLCJzZWwiLCJzZWxlY3QiLCJtb3ZlVG9Gcm9udCIsInRleHQiLCJ0cmFuc2xhdGlvbnMiLCJjbGFzc2VkIiwiQ2hhcnRDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztBQUNBO0FBQ0E7Q0FHQTtBQUNBOztJQUVNQSxhOzs7Ozs7Ozs7Ozs7Ozs7O3VOQUNXO0FBQ2JDLHNCQUFnQixFQUFFLEdBREw7QUFFYkMsc0JBQWdCLEVBQUUsMkJBRkw7QUFHYkMsY0FBUSxFQUFFLE1BSEc7QUFJYkMsNkJBQXVCLEVBQUUsMkJBSlo7QUFLYkMsaUJBQVcsRUFBRSxTQUxBO0FBTWJDLGlCQUFXLEVBQUUsR0FOQTtBQU9iQyxTQUFHLEVBQUUsS0FQUTtBQVFiQyxZQUFNLEVBQUUsSUFSSztBQVNiQyxlQUFTLEVBQUUsSUFURTtBQVViQyxrQkFBWSxFQUFFLEVBVkQ7QUFXYkMsZ0JBQVUsRUFBRSxDQVhDO0FBWWJDLFdBQUssRUFBRTtBQUFFQyxXQUFHLEVBQUUsSUFBUDtBQUFhQyxXQUFHLEVBQUU7QUFBbEIsT0FaTTtBQWFiQyx3QkFBa0IsRUFBRSxHQWJQO0FBY2JDLGtDQUE0QixFQUFFLEdBZGpCO0FBZWJDLHVCQUFpQixFQUFFQyxpREFBRSxDQUFDQyxjQUFILEdBQW9CO0FBQXBCLE9BQ2hCQyxNQURnQixDQUNULENBQUMsSUFBRCxFQUFPLEdBQVAsQ0FEUyxFQUVoQlIsS0FGZ0IsQ0FFVixDQUFDLE1BQUQsRUFBUyxTQUFULEVBQW9CLFNBQXBCLENBRlUsQ0FmTjtBQWtCYlMsNEJBQXNCLEVBQUU7QUFsQlgsSzs7Ozs7OzsyQkFxQlI7QUFDTCxVQUFNQyxJQUFJLEdBQUcsS0FBS0EsSUFBTCxFQUFiO0FBQ0EsVUFBTUMsS0FBSyxHQUFHLEtBQUtBLEtBQUwsRUFBZDtBQUNBLFVBQU1DLElBQUksR0FBRyxLQUFLQyxTQUFMLEdBQWlCRCxJQUFqQixFQUFiOztBQUhLLGtDQUlhQSxJQUFJLENBQUNFLHFCQUFMLEVBSmI7QUFBQSxVQUlHQyxLQUpILHlCQUlHQSxLQUpIOztBQUtMLFVBQU1DLE1BQU0sR0FBR0QsS0FBSyxHQUFHSixLQUFLLENBQUNqQixXQUE3QjtBQUVBLFVBQU11QixPQUFPLEdBQUdQLElBQUksQ0FBQ1EsTUFBTCxDQUFZLFVBQUFDLENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUNDLEtBQUYsSUFBV1QsS0FBSyxDQUFDWCxLQUFOLENBQVlDLEdBQXZCLElBQThCa0IsQ0FBQyxDQUFDQyxLQUFGLElBQVdULEtBQUssQ0FBQ1gsS0FBTixDQUFZRSxHQUF6RDtBQUFBLE9BQWIsQ0FBaEI7QUFFQSxVQUFNbUIsTUFBTSxHQUFHZixpREFBRSxDQUFDZ0IsV0FBSCxHQUFpQnRCLEtBQWpCLENBQXVCLENBQUMsQ0FBRCxFQUFJVyxLQUFLLENBQUNiLFlBQVYsQ0FBdkIsRUFBZ0RVLE1BQWhELENBQXVELENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBdkQsQ0FBZjtBQUNBLFVBQU1lLEdBQUcsR0FBRyxLQUFLVixTQUFMLEdBQ1RXLFlBRFMsQ0FDSSxLQURKLEVBQ1c7QUFEWCxPQUVUQyxJQUZTLENBRUosT0FGSSxFQUVLVixLQUZMLEVBR1RVLElBSFMsQ0FHSixRQUhJLEVBR01ULE1BSE4sQ0FBWjtBQUtBLFVBQU1VLENBQUMsR0FBR0gsR0FBRyxDQUFDQyxZQUFKLENBQWlCLEdBQWpCLEVBQ1BDLElBRE8sQ0FDRixXQURFLHNCQUN3QixDQUR4QixRQUM4QixDQUQ5QixPQUFWO0FBR0EsVUFBTUUsVUFBVSxHQUFHckIsaURBQUUsQ0FBQ3NCLGdCQUFILEVBQW5CO0FBQ0EsVUFBTUMsU0FBUyxHQUFHQyx1REFBQSxDQUFpQm5CLEtBQUssQ0FBQ2hCLEdBQXZCLEVBQTRCZ0IsS0FBSyxDQUFDaEIsR0FBTixDQUFVb0MsT0FBVixDQUFrQkYsU0FBOUMsQ0FBbEI7QUFDQSxVQUFNRyxRQUFRLEdBQUdGLG9EQUFBLENBQWNuQixLQUFLLENBQUNoQixHQUFwQixFQUF5QmdCLEtBQUssQ0FBQ2hCLEdBQU4sQ0FBVW9DLE9BQVYsQ0FBa0JFLGtCQUEzQyxDQUFqQjtBQUVBLFVBQU1DLG1CQUFtQixHQUFHakIsT0FBTyxDQUFDa0IsR0FBUixDQUFZLFVBQUFoQixDQUFDO0FBQUEsZUFBSUEsQ0FBQyxDQUFDaUIsR0FBTjtBQUFBLE9BQWIsQ0FBNUI7QUFDQSxVQUFNQyxnQkFBZ0IsR0FBR1IsU0FBUyxDQUFDUyxRQUFWLENBQ3RCcEIsTUFEc0IsQ0FDZixVQUFBcUIsQ0FBQztBQUFBLGVBQUlMLG1CQUFtQixDQUFDTSxRQUFwQixDQUE2QkQsQ0FBQyxDQUFDRSxVQUFGLENBQWFDLFNBQTFDLENBQUo7QUFBQSxPQURjLEVBRXRCUCxHQUZzQixDQUVsQjtBQUFBLFlBQUdNLFVBQUgsUUFBR0EsVUFBSDtBQUFBLGVBQXFCO0FBQ3hCRSxjQUFJLEVBQUUsU0FEa0I7QUFFeEJGLG9CQUFVLEVBQVZBLFVBRndCO0FBR3hCRyxrQkFBUSxFQUFFO0FBQ1JELGdCQUFJLEVBQUUsT0FERTtBQUVSRSx1QkFBVyxFQUFFSixVQUFVLENBQUNLO0FBRmhCO0FBSGMsU0FBckI7QUFBQSxPQUZrQixDQUF6QjtBQVdBbkIsZ0JBQVUsQ0FBQ29CLE9BQVgsQ0FBbUIsQ0FBQ2hDLEtBQUQsRUFBUUMsTUFBUixDQUFuQixFQUFvQ2EsU0FBcEM7QUFDQSxVQUFNbUIsSUFBSSxHQUFHMUMsaURBQUUsQ0FBQzJDLE9BQUgsR0FBYXRCLFVBQWIsQ0FBd0JBLFVBQXhCLENBQWI7QUFFQUQsT0FBQyxDQUFDd0IsU0FBRixDQUFZLFVBQVosRUFBd0JDLE1BQXhCO0FBRUEsVUFBTUMsYUFBYSxHQUFHMUIsQ0FBQyxDQUFDd0IsU0FBRixDQUFZLFdBQVosRUFDbkJ4QyxJQURtQixDQUNkbUIsU0FBUyxDQUFDUyxRQUFWLENBQW1CcEIsTUFBbkIsQ0FBMEIsVUFBQUMsQ0FBQztBQUFBLGVBQUlBLENBQUMsQ0FBQ3NCLFVBQUYsQ0FBYVksSUFBYixLQUFzQixZQUExQjtBQUFBLE9BQTNCLENBRGMsRUFFbkJDLEtBRm1CLEdBR25CQyxNQUhtQixDQUdaLEdBSFksRUFJbkI5QixJQUptQixDQUlkLE9BSmMsRUFJTCxVQUFBTixDQUFDO0FBQUEsbUNBQWlCQSxDQUFDLENBQUNzQixVQUFGLENBQWFZLElBQTlCO0FBQUEsT0FKSSxFQUtuQkcsS0FMbUIsQ0FLYixnQkFMYSxFQUtLLE1BTEwsQ0FBdEI7QUFPQUosbUJBQWEsQ0FBQzVCLFlBQWQsQ0FBMkIsY0FBM0IsRUFDR0MsSUFESCxDQUNRLE9BRFIsRUFDaUIsVUFBQU4sQ0FBQztBQUFBLGVBQUksT0FBT0EsQ0FBQyxDQUFDc0IsVUFBRixDQUFhWSxJQUFwQixHQUEyQixVQUEvQjtBQUFBLE9BRGxCLEVBRUdHLEtBRkgsQ0FFUyxRQUZULEVBRW1CN0MsS0FBSyxDQUFDckIsZ0JBRnpCLEVBR0drRSxLQUhILENBR1MsY0FIVCxFQUd5QjdDLEtBQUssQ0FBQ3RCLGdCQUgvQixFQUlHbUUsS0FKSCxDQUlTLE1BSlQsRUFJaUI3QyxLQUFLLENBQUNwQixRQUp2QixFQUtHa0MsSUFMSCxDQUtRLEdBTFIsRUFLYXVCLElBTGI7QUFPQUksbUJBQWEsQ0FDVjVCLFlBREgsQ0FDZ0IsZUFEaEIsRUFFR0MsSUFGSCxDQUVRLE9BRlIsRUFFaUIsVUFBQU4sQ0FBQztBQUFBLGVBQUlBLENBQUMsQ0FBQ3NCLFVBQUYsQ0FBYVksSUFBYixHQUFvQixXQUF4QjtBQUFBLE9BRmxCLEVBR0c1QixJQUhILENBR1EsR0FIUixFQUdhLFVBQVNOLENBQVQsRUFBWTtBQUNyQixZQUFNc0MsR0FBRyxHQUFHOUIsVUFBVSxDQUFDUixDQUFDLENBQUNzQixVQUFGLENBQWFLLFFBQWQsQ0FBdEI7QUFDQSxZQUFNWSxDQUFDLEdBQUd6QyxPQUFPLENBQUNDLE1BQVIsQ0FBZSxVQUFBeUMsQ0FBQztBQUFBLGlCQUFJeEMsQ0FBQyxDQUFDc0IsVUFBRixDQUFhQyxTQUFiLEtBQTJCaUIsQ0FBQyxDQUFDdkIsR0FBakM7QUFBQSxTQUFoQixFQUFzRCxDQUF0RCxDQUFWOztBQUNBLFlBQUlzQixDQUFKLEVBQU87QUFDTCxjQUFNdEMsS0FBSyxHQUFHQyxNQUFNLENBQUNxQyxDQUFDLENBQUN0QyxLQUFILENBQXBCO0FBQ0EsaUJBQU8sT0FBT3FDLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBUzlDLEtBQUssQ0FBQ1osVUFBdEIsSUFBb0MsR0FBcEMsR0FBMEMwRCxHQUFHLENBQUMsQ0FBRCxDQUE3QyxHQUFtRCxJQUFuRCxHQUEwREEsR0FBRyxDQUFDLENBQUQsQ0FBN0QsR0FBbUUsR0FBbkUsSUFBMEVBLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBU3JDLEtBQW5GLElBQTRGLElBQTVGLElBQW9HcUMsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTOUMsS0FBSyxDQUFDWixVQUFuSCxJQUFpSSxHQUFqSSxHQUF1STBELEdBQUcsQ0FBQyxDQUFELENBQTFJLEdBQWdKLEdBQXZKO0FBQ0Q7QUFDRixPQVZILEVBV0dELEtBWEgsQ0FXUyxNQVhULEVBV2lCLE1BWGpCLEVBWUdBLEtBWkgsQ0FZUyxRQVpULEVBWW1CLFVBQVNyQyxDQUFULEVBQVk7QUFDM0IsWUFBTXVDLENBQUMsR0FBR3pDLE9BQU8sQ0FBQ0MsTUFBUixDQUFlLFVBQUF5QyxDQUFDO0FBQUEsaUJBQUl4QyxDQUFDLENBQUNzQixVQUFGLENBQWFDLFNBQWIsS0FBMkJpQixDQUFDLENBQUN2QixHQUFqQztBQUFBLFNBQWhCLEVBQXNELENBQXRELENBQVY7QUFDQSxlQUFPc0IsQ0FBQyxHQUFHL0MsS0FBSyxDQUFDTixpQkFBTixDQUF3QnFELENBQUMsQ0FBQ3RDLEtBQTFCLENBQUgsR0FBc0MsSUFBOUM7QUFDRCxPQWZILEVBZ0JHb0MsS0FoQkgsQ0FnQlMsY0FoQlQsRUFnQnlCN0MsS0FBSyxDQUFDUixrQkFoQi9CO0FBa0JBdUIsT0FBQyxDQUFDRixZQUFGLENBQWUsZUFBZixFQUNHQyxJQURILENBQ1EsT0FEUixFQUNpQixrQkFEakIsRUFFRytCLEtBRkgsQ0FFUyxRQUZULEVBRW1CN0MsS0FBSyxDQUFDckIsZ0JBRnpCLEVBR0drRSxLQUhILENBR1MsY0FIVCxFQUd5QjdDLEtBQUssQ0FBQ3RCLGdCQUgvQixFQUlHb0MsSUFKSCxDQUlRLEdBSlIsRUFJYXVCLElBQUksQ0FBQ2hCLFFBQUQsQ0FKakI7QUFNQSxVQUFNNEIsdUJBQXVCLEdBQUdsQyxDQUFDLENBQUNGLFlBQUYsQ0FBZSxXQUFmLEVBQzdCMEIsU0FENkIsQ0FDbkIsY0FEbUIsRUFFN0J4QyxJQUY2QixDQUV4Qm1ELGtFQUFVLEdBQUdDLFFBQWIsQ0FBc0J6QixnQkFBdEIsRUFBd0NDLFFBRmhCLENBQWhDO0FBSUFzQiw2QkFBdUIsQ0FBQ04sS0FBeEIsR0FDR0MsTUFESCxDQUNVLE1BRFYsRUFFRzlCLElBRkgsQ0FFUSxPQUZSLEVBRWlCLFNBRmpCLEVBR0dzQyxLQUhILENBR1NILHVCQUhULEVBSUdKLEtBSkgsQ0FJUyxNQUpULEVBSWlCLFVBQUFyQyxDQUFDO0FBQUEsZUFBSUEsQ0FBQyxDQUFDc0IsVUFBRixDQUFhdUIsSUFBYixDQUFrQnZCLFVBQWxCLENBQTZCWSxJQUE3QixHQUFvQyxzQkFBcEMsR0FBNkQsTUFBakU7QUFBQSxPQUpsQixFQUtHRyxLQUxILENBS1MsUUFMVCxFQUttQixRQUxuQixFQU1HQSxLQU5ILENBTVMsUUFOVCxFQU1tQixXQU5uQixFQU9HL0IsSUFQSCxDQU9RLGdCQVBSLEVBTzBCLEtBUDFCLEVBUUdBLElBUkgsQ0FRUSxHQVJSLEVBUWF1QixJQVJiLEVBU0dpQixFQVRILENBU00sV0FUTixFQVNtQkMsS0FUbkIsRUFVR0QsRUFWSCxDQVVNLFVBVk4sRUFVa0JFLE1BVmxCOztBQVlBLGVBQVNELEtBQVQsQ0FBZUUsV0FBZixFQUE0QjtBQUFBLFlBQ2xCM0IsVUFEa0IsR0FDSDJCLFdBQVcsQ0FBQzNCLFVBQVosQ0FBdUJ1QixJQURwQixDQUNsQnZCLFVBRGtCO0FBRzFCLFlBQU00QixHQUFHLEdBQUczQyxDQUFDLENBQUM0QyxNQUFGLHVCQUF3QjdCLFVBQVUsQ0FBQ1ksSUFBbkMsR0FBMkNrQixXQUEzQyxFQUFaO0FBQ0E3QyxTQUFDLENBQUN3QixTQUFGLENBQVksZUFBWixFQUNHTSxLQURILENBQ1MsU0FEVCxFQUNvQjdDLEtBQUssQ0FBQ0Ysc0JBRDFCO0FBRUFpQixTQUFDLENBQUN3QixTQUFGLHlCQUE2QlQsVUFBVSxDQUFDWSxJQUF4QyxHQUFnREcsS0FBaEQsQ0FBc0QsU0FBdEQsRUFBaUUsQ0FBakU7QUFDQWEsV0FBRyxDQUFDN0MsWUFBSixDQUFpQixNQUFqQixFQUNHQyxJQURILENBQ1EsV0FEUixFQUNxQixVQUFTTixDQUFULEVBQVk7QUFDN0IsY0FBTXVDLENBQUMsR0FBRy9CLFVBQVUsQ0FBQ1IsQ0FBQyxDQUFDc0IsVUFBRixDQUFhSyxRQUFkLENBQXBCO0FBQ0EscUNBQW9CWSxDQUFDLENBQUMsQ0FBRCxDQUFyQixjQUE0QkEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPL0MsS0FBSyxDQUFDZCxTQUF6QztBQUNELFNBSkgsRUFLRzJELEtBTEgsQ0FLUyxhQUxULEVBS3dCLFFBTHhCLEVBTUdnQixJQU5ILENBTVEsVUFBQXJELENBQUM7QUFBQSxpQkFBSUEsQ0FBQyxDQUFDc0IsVUFBRixDQUFhZ0MsWUFBYixDQUEwQjlELEtBQUssQ0FBQ2YsTUFBaEMsQ0FBSjtBQUFBLFNBTlQ7QUFRQXlFLFdBQUcsQ0FBQ2IsS0FBSixDQUFVLFNBQVYsRUFBcUIsQ0FBckI7QUFDQWEsV0FBRyxDQUFDbkIsU0FBSixDQUFjLFVBQWQsRUFDR3dCLE9BREgsQ0FDVyxRQURYLEVBQ3FCLElBRHJCLEVBRUdsQixLQUZILENBRVMsUUFGVCxFQUVtQjdDLEtBQUssQ0FBQ25CLHVCQUZ6QjtBQUlBNkUsV0FBRyxDQUFDQyxNQUFKLENBQVcsV0FBWCxFQUNHSSxPQURILENBQ1csUUFEWCxFQUNxQixJQURyQixFQUVHbEIsS0FGSCxDQUVTLGNBRlQsRUFFeUI3QyxLQUFLLENBQUNQLDRCQUYvQjtBQUdEOztBQUVELGVBQVMrRCxNQUFULENBQWdCQyxXQUFoQixFQUE2QjtBQUFBLFlBQ25CM0IsVUFEbUIsR0FDSjJCLFdBQVcsQ0FBQzNCLFVBQVosQ0FBdUJ1QixJQURuQixDQUNuQnZCLFVBRG1CO0FBRTNCLFlBQU00QixHQUFHLEdBQUczQyxDQUFDLENBQUM0QyxNQUFGLHVCQUF3QjdCLFVBQVUsQ0FBQ1ksSUFBbkMsRUFBWjtBQUNBM0IsU0FBQyxDQUFDd0IsU0FBRixDQUFZLGVBQVosRUFBNkJNLEtBQTdCLENBQW1DLFNBQW5DLEVBQThDLENBQTlDO0FBQ0FhLFdBQUcsQ0FBQ0MsTUFBSixDQUFXLE1BQVgsRUFBbUJuQixNQUFuQjtBQUNBa0IsV0FBRyxDQUFDbkIsU0FBSixDQUFjLFVBQWQsRUFDR3dCLE9BREgsQ0FDVyxRQURYLEVBQ3FCLEtBRHJCLEVBRUdsQixLQUZILENBRVMsUUFGVCxFQUVtQjdDLEtBQUssQ0FBQ3JCLGdCQUZ6QjtBQUlBK0UsV0FBRyxDQUFDQyxNQUFKLENBQVcsV0FBWCxFQUNHSSxPQURILENBQ1csUUFEWCxFQUNxQixLQURyQixFQUVHbEIsS0FGSCxDQUVTLGNBRlQsRUFFeUI3QyxLQUFLLENBQUNSLGtCQUYvQjtBQUdEOztBQUVELGFBQU8sSUFBUDtBQUNEOzs7O0VBM0p5QndFLDREOztBQThKYnZGLDRFQUFmIiwiZmlsZSI6Ii4vc3JjL2xpYi9jaGFydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHRvcG9qc29uIGZyb20gJ3RvcG9qc29uLWNsaWVudCc7XG5cbi8vIGltcG9ydCBBdGxhc01ldGFkYXRhQ2xpZW50IGZyb20gJ0ByZXV0ZXJzLWdyYXBoaWNzL2dyYXBoaWNzLWF0bGFzLWNsaWVudCc7XG5pbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnLi9iYXNlL0NoYXJ0Q29tcG9uZW50JztcbmltcG9ydCBkMyBmcm9tICcuL3V0aWxzL2QzJztcbmltcG9ydCB7IGdlb1Zvcm9ub2kgfSBmcm9tICdkMy1nZW8tdm9yb25vaSc7XG5cbi8vIGNvbnN0IGNsaWVudCA9IG5ldyBBdGxhc01ldGFkYXRhQ2xpZW50KCk7XG4vLyBpbXBvcnQgdG9wb2xvZ3kgZnJvbSAnQHJldXRlcnMtZ3JhcGhpY3MvZ3JhcGhpY3MtYXRsYXMtY2xpZW50L3RvcG9qc29uL2dsb2JhbC4xMTBtLmpzb24nO1xuXG5jbGFzcyBHbG9iYWxSYXRlTWFwIGV4dGVuZHMgQ2hhcnRDb21wb25lbnQge1xuICBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbWFwX3N0cm9rZV93aWR0aDogMC43LFxuICAgIG1hcF9zdHJva2VfY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpJyxcbiAgICBtYXBfZmlsbDogJyMzMzMnLFxuICAgIG1hcF9zdHJva2VfY29sb3JfYWN0aXZlOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KScsXG4gICAgc3Bpa2VfY29sb3I6ICcjZWVjMzMxJyxcbiAgICBoZWlnaHRSYXRpbzogMC41LFxuICAgIGdlbzogZmFsc2UsXG4gICAgbG9jYWxlOiAnZW4nLFxuICAgIGhvdmVyX2dhcDogMTIuNSxcbiAgICBzcGlrZV9oZWlnaHQ6IDMwLFxuICAgIHNwaWtlX3NpemU6IDMsXG4gICAgcmFuZ2U6IHsgbWluOiAwLjc1LCBtYXg6IDEgfSxcbiAgICBzcGlrZV9zdHJva2Vfd2lkdGg6IDAuOCxcbiAgICBzcGlrZV9oaWdobGlnaHRfc3Ryb2tlX3dpZHRoOiAxLjIsXG4gICAgc3Bpa2VfY29sb3Jfc2NhbGU6IGQzLnNjYWxlVGhyZXNob2xkKCkgLy8gQ2FuIHVzZSBhIHNjYWxlIGFzIGEgcHJvcCFcbiAgICAgIC5kb21haW4oWzAuNzUsIDAuOV0pXG4gICAgICAucmFuZ2UoWycjY2NjJywgJyNmNjhlMjYnLCAnI2RlMmQyNiddKSxcbiAgICBzcGlrZV9pbmFjdGl2ZV9vcGFjaXR5OiAwLFxuICB9O1xuXG4gIGRyYXcoKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YSgpO1xuICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wcygpO1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnNlbGVjdGlvbigpLm5vZGUoKTtcbiAgICBjb25zdCB7IHdpZHRoIH0gPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGhlaWdodCA9IHdpZHRoICogcHJvcHMuaGVpZ2h0UmF0aW87XG5cbiAgICBjb25zdCBuZXdEYXRhID0gZGF0YS5maWx0ZXIoZCA9PiBkLnZhbHVlID49IHByb3BzLnJhbmdlLm1pbiAmJiBkLnZhbHVlIDw9IHByb3BzLnJhbmdlLm1heCk7XG5cbiAgICBjb25zdCBzY2FsZVkgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFswLCBwcm9wcy5zcGlrZV9oZWlnaHRdKS5kb21haW4oWzAsIDFdKTtcbiAgICBjb25zdCBzdmcgPSB0aGlzLnNlbGVjdGlvbigpXG4gICAgICAuYXBwZW5kU2VsZWN0KCdzdmcnKSAvLyBzZWUgZG9jcyBpbiAuL3V0aWxzL2QzLmpzXG4gICAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpO1xuXG4gICAgY29uc3QgZyA9IHN2Zy5hcHBlbmRTZWxlY3QoJ2cnKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHswfSwgJHswfSlgKTtcblxuICAgIGNvbnN0IHByb2plY3Rpb24gPSBkMy5nZW9OYXR1cmFsRWFydGgxKCk7XG4gICAgY29uc3QgY291bnRyaWVzID0gdG9wb2pzb24uZmVhdHVyZShwcm9wcy5nZW8sIHByb3BzLmdlby5vYmplY3RzLmNvdW50cmllcyk7XG4gICAgY29uc3QgZGlzcHV0ZWQgPSB0b3BvanNvbi5tZXNoKHByb3BzLmdlbywgcHJvcHMuZ2VvLm9iamVjdHMuZGlzcHV0ZWRCb3VuZGFyaWVzKTtcblxuICAgIGNvbnN0IGZpbHRlcmVkQ291bnRyeUtleXMgPSBuZXdEYXRhLm1hcChkID0+IGQua2V5KTtcbiAgICBjb25zdCBjb3VudHJ5Q2VudHJvaWRzID0gY291bnRyaWVzLmZlYXR1cmVzXG4gICAgICAuZmlsdGVyKGMgPT4gZmlsdGVyZWRDb3VudHJ5S2V5cy5pbmNsdWRlcyhjLnByb3BlcnRpZXMuaXNvQWxwaGEyKSlcbiAgICAgIC5tYXAoKHsgcHJvcGVydGllcyB9KSA9PiAoe1xuICAgICAgICB0eXBlOiAnRmVhdHVyZScsXG4gICAgICAgIHByb3BlcnRpZXMsXG4gICAgICAgIGdlb21ldHJ5OiB7XG4gICAgICAgICAgdHlwZTogJ1BvaW50JyxcbiAgICAgICAgICBjb29yZGluYXRlczogcHJvcGVydGllcy5jZW50cm9pZCxcbiAgICAgICAgfSxcbiAgICAgIH0pKTtcblxuICAgIHByb2plY3Rpb24uZml0U2l6ZShbd2lkdGgsIGhlaWdodF0sIGNvdW50cmllcyk7XG4gICAgY29uc3QgcGF0aCA9IGQzLmdlb1BhdGgoKS5wcm9qZWN0aW9uKHByb2plY3Rpb24pO1xuXG4gICAgZy5zZWxlY3RBbGwoJy5jb3VudHJ5JykucmVtb3ZlKCk7XG5cbiAgICBjb25zdCBjb3VudHJ5R3JvdXBzID0gZy5zZWxlY3RBbGwoJ2cuY291bnRyeScpXG4gICAgICAuZGF0YShjb3VudHJpZXMuZmVhdHVyZXMuZmlsdGVyKGQgPT4gZC5wcm9wZXJ0aWVzLnNsdWcgIT09ICdhbnRhcmN0aWNhJykpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCBkID0+IGBjb3VudHJ5IGctJHtkLnByb3BlcnRpZXMuc2x1Z31gKVxuICAgICAgLnN0eWxlKCdwb2ludGVyLWV2ZW50cycsICdub25lJyk7XG5cbiAgICBjb3VudHJ5R3JvdXBzLmFwcGVuZFNlbGVjdCgncGF0aC5sZXZlbC0wJylcbiAgICAgIC5hdHRyKCdjbGFzcycsIGQgPT4gJ2MtJyArIGQucHJvcGVydGllcy5zbHVnICsgJyBsZXZlbC0wJylcbiAgICAgIC5zdHlsZSgnc3Ryb2tlJywgcHJvcHMubWFwX3N0cm9rZV9jb2xvcilcbiAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgcHJvcHMubWFwX3N0cm9rZV93aWR0aClcbiAgICAgIC5zdHlsZSgnZmlsbCcsIHByb3BzLm1hcF9maWxsKVxuICAgICAgLmF0dHIoJ2QnLCBwYXRoKTtcblxuICAgIGNvdW50cnlHcm91cHNcbiAgICAgIC5hcHBlbmRTZWxlY3QoJ3BhdGguY2VudHJvaWQnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgZCA9PiBkLnByb3BlcnRpZXMuc2x1ZyArICcgY2VudHJvaWQnKVxuICAgICAgLmF0dHIoJ2QnLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIGNvbnN0IG9iaiA9IHByb2plY3Rpb24oZC5wcm9wZXJ0aWVzLmNlbnRyb2lkKTtcbiAgICAgICAgY29uc3QgbyA9IG5ld0RhdGEuZmlsdGVyKGUgPT4gZC5wcm9wZXJ0aWVzLmlzb0FscGhhMiA9PT0gZS5rZXkpWzBdO1xuICAgICAgICBpZiAobykge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gc2NhbGVZKG8udmFsdWUpO1xuICAgICAgICAgIHJldHVybiAnTScgKyAob2JqWzBdIC0gcHJvcHMuc3Bpa2Vfc2l6ZSkgKyAnICcgKyBvYmpbMV0gKyAnIEwnICsgb2JqWzBdICsgJyAnICsgKG9ialsxXSAtIHZhbHVlKSArICcgTCcgKyAob2JqWzBdICsgcHJvcHMuc3Bpa2Vfc2l6ZSkgKyAnICcgKyBvYmpbMV0gKyAnICc7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCAnbm9uZScpXG4gICAgICAuc3R5bGUoJ3N0cm9rZScsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgY29uc3QgbyA9IG5ld0RhdGEuZmlsdGVyKGUgPT4gZC5wcm9wZXJ0aWVzLmlzb0FscGhhMiA9PT0gZS5rZXkpWzBdO1xuICAgICAgICByZXR1cm4gbyA/IHByb3BzLnNwaWtlX2NvbG9yX3NjYWxlKG8udmFsdWUpIDogbnVsbDtcbiAgICAgIH0pXG4gICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIHByb3BzLnNwaWtlX3N0cm9rZV93aWR0aCk7XG5cbiAgICBnLmFwcGVuZFNlbGVjdCgncGF0aC5kaXNwdXRlZCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZGlzcHV0ZWQgbGV2ZWwtMCcpXG4gICAgICAuc3R5bGUoJ3N0cm9rZScsIHByb3BzLm1hcF9zdHJva2VfY29sb3IpXG4gICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIHByb3BzLm1hcF9zdHJva2Vfd2lkdGgpXG4gICAgICAuYXR0cignZCcsIHBhdGgoZGlzcHV0ZWQpKTtcblxuICAgIGNvbnN0IGNvdW50cnlWb3Jvbm9pQ2VudHJvaWRzID0gZy5hcHBlbmRTZWxlY3QoJ2cudm9yb25vaScpXG4gICAgICAuc2VsZWN0QWxsKCdwYXRoLnZvcm9ub2knKVxuICAgICAgLmRhdGEoZ2VvVm9yb25vaSgpLnBvbHlnb25zKGNvdW50cnlDZW50cm9pZHMpLmZlYXR1cmVzKTtcblxuICAgIGNvdW50cnlWb3Jvbm9pQ2VudHJvaWRzLmVudGVyKClcbiAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3Zvcm9ub2knKVxuICAgICAgLm1lcmdlKGNvdW50cnlWb3Jvbm9pQ2VudHJvaWRzKVxuICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiBkLnByb3BlcnRpZXMuc2l0ZS5wcm9wZXJ0aWVzLnNsdWcgPyAncmdiYSgyNTUsIDAsIDAsIDAuMSknIDogJ25vbmUnKVxuICAgICAgLnN0eWxlKCdzdHJva2UnLCAneWVsbG93JylcbiAgICAgIC5zdHlsZSgnY3Vyc29yJywgJ2Nyb3NzaGFpcicpXG4gICAgICAuYXR0cigncG9pbnRlci1ldmVudHMnLCAnYWxsJylcbiAgICAgIC5hdHRyKCdkJywgcGF0aClcbiAgICAgIC5vbignbW91c2VvdmVyJywgdGlwT24pXG4gICAgICAub24oJ21vdXNlb3V0JywgdGlwT2ZmKTtcblxuICAgIGZ1bmN0aW9uIHRpcE9uKHZvcm9ub2lQYXRoKSB7XG4gICAgICBjb25zdCB7IHByb3BlcnRpZXMgfSA9IHZvcm9ub2lQYXRoLnByb3BlcnRpZXMuc2l0ZTtcblxuICAgICAgY29uc3Qgc2VsID0gZy5zZWxlY3QoYGcuY291bnRyeS5nLSR7cHJvcGVydGllcy5zbHVnfWApLm1vdmVUb0Zyb250KCk7XG4gICAgICBnLnNlbGVjdEFsbCgncGF0aC5jZW50cm9pZCcpXG4gICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIHByb3BzLnNwaWtlX2luYWN0aXZlX29wYWNpdHkpO1xuICAgICAgZy5zZWxlY3RBbGwoYHBhdGguY2VudHJvaWQuJHtwcm9wZXJ0aWVzLnNsdWd9YCkuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgIHNlbC5hcHBlbmRTZWxlY3QoJ3RleHQnKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIGNvbnN0IG8gPSBwcm9qZWN0aW9uKGQucHJvcGVydGllcy5jZW50cm9pZCk7XG4gICAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGUoJHtvWzBdfSwke29bMV0gKyBwcm9wcy5ob3Zlcl9nYXB9KWA7XG4gICAgICAgIH0pXG4gICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAgICAgLnRleHQoZCA9PiBkLnByb3BlcnRpZXMudHJhbnNsYXRpb25zW3Byb3BzLmxvY2FsZV0pO1xuXG4gICAgICBzZWwuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgIHNlbC5zZWxlY3RBbGwoJy5sZXZlbC0wJylcbiAgICAgICAgLmNsYXNzZWQoJ2FjdGl2ZScsIHRydWUpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgcHJvcHMubWFwX3N0cm9rZV9jb2xvcl9hY3RpdmUpO1xuXG4gICAgICBzZWwuc2VsZWN0KCcuY2VudHJvaWQnKVxuICAgICAgICAuY2xhc3NlZCgnYWN0aXZlJywgdHJ1ZSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCBwcm9wcy5zcGlrZV9oaWdobGlnaHRfc3Ryb2tlX3dpZHRoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0aXBPZmYodm9yb25vaVBhdGgpIHtcbiAgICAgIGNvbnN0IHsgcHJvcGVydGllcyB9ID0gdm9yb25vaVBhdGgucHJvcGVydGllcy5zaXRlO1xuICAgICAgY29uc3Qgc2VsID0gZy5zZWxlY3QoYGcuY291bnRyeS5nLSR7cHJvcGVydGllcy5zbHVnfWApO1xuICAgICAgZy5zZWxlY3RBbGwoJ3BhdGguY2VudHJvaWQnKS5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICAgICAgc2VsLnNlbGVjdCgndGV4dCcpLnJlbW92ZSgpO1xuICAgICAgc2VsLnNlbGVjdEFsbCgnLmxldmVsLTAnKVxuICAgICAgICAuY2xhc3NlZCgnYWN0aXZlJywgZmFsc2UpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgcHJvcHMubWFwX3N0cm9rZV9jb2xvcik7XG5cbiAgICAgIHNlbC5zZWxlY3QoJy5jZW50cm9pZCcpXG4gICAgICAgIC5jbGFzc2VkKCdhY3RpdmUnLCBmYWxzZSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCBwcm9wcy5zcGlrZV9zdHJva2Vfd2lkdGgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFJhdGVNYXA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})