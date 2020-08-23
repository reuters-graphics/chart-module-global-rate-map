webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/demo/Chart.js":
/*!***************************!*\
  !*** ./src/demo/Chart.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _lib_chart_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/chart.js */ \"./src/lib/chart.js\");\n/* harmony import */ var _furniture_ChartContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./furniture/ChartContainer */ \"./src/demo/furniture/ChartContainer.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/debounce */ \"./node_modules/lodash/debounce.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _defaultData_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./defaultData.json */ \"./src/demo/defaultData.json\");\nvar _defaultData_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./defaultData.json */ \"./src/demo/defaultData.json\", 1);\n/* harmony import */ var _topo_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./topo.json */ \"./src/demo/topo.json\");\nvar _topo_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./topo.json */ \"./src/demo/topo.json\", 1);\n/* harmony import */ var _oceania_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./oceania.json */ \"./src/demo/oceania.json\");\nvar _oceania_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./oceania.json */ \"./src/demo/oceania.json\", 1);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/u6068973/Documents/work/coronavirus/tracker-news-app/global-rate-map/src/demo/Chart.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\nvar newData = [];\n\nfor (var _i = 0, _Object$keys = Object.keys(_defaultData_json__WEBPACK_IMPORTED_MODULE_11__.distributionRanks.cases); _i < _Object$keys.length; _i++) {\n  var key = _Object$keys[_i];\n  newData.push({\n    key: key,\n    value: _defaultData_json__WEBPACK_IMPORTED_MODULE_11__.distributionRanks.cases[key]\n  });\n}\n\nvar ChartComponent = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ChartComponent, _React$Component);\n\n  var _super = _createSuper(ChartComponent);\n\n  function ChartComponent() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ChartComponent);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      width: '992'\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"chartContainer\", react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"chart\", new _lib_chart_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"resize\", lodash_debounce__WEBPACK_IMPORTED_MODULE_10___default()(function () {\n      _this.chart.draw();\n    }, 250));\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ChartComponent, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      // Use our chart module.\n      this.chart.selection(this.chartContainer.current).data(newData).props({\n        geo: _topo_json__WEBPACK_IMPORTED_MODULE_12__,\n        annotations: {\n          name: ['US', 'IN', 'AU'],\n          value: ['CA', 'AU']\n        },\n        interaction: false // custom_center: [173.640289, 3.403072],\n        // map_custom_projections: {\n        //   center: [0, 5],\n        //   rotate: [-180, 0],\n        //   // scale: 150,\n        //   clip_box: [\n        //     [111, 2] , [225, -50]\n        //   ],\n        // },\n\n      }).draw(); // Use it again.\n\n      setTimeout(function () {\n        _this2.chart.data(_oceania_json__WEBPACK_IMPORTED_MODULE_13__).props({\n          map_custom_projections: {\n            center: [0, 5],\n            rotate: [-180, 0],\n            clip_box: [[111, 2], [225, -50]],\n            annotations: {\n              name: ['US'],\n              value: ['AU']\n            }\n          }\n        }).draw();\n      }, 2000); // setTimeout(() => {\n      //   this.chart\n      //     .data([30, 50, 30])\n      //     .props({ fill: base.blue.hex })\n      //     .draw();\n      // }, 2000);\n      // Add a listener to resize chart with the window.\n\n      window.addEventListener('resize', this.resize);\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      // Remove listener if the component is removed, too.\n      window.removeEventListener('resize', this.resize);\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {\n      // Update the chart with the component.\n      // Can change data or props here, whatever...\n      this.chart.draw();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var width = this.state.width;\n      return __jsx(_furniture_ChartContainer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        width: width,\n        setWidth: function setWidth(width) {\n          return _this3.setState({\n            width: width\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 7\n        }\n      }, __jsx(\"div\", {\n        id: \"chart\",\n        ref: this.chartContainer,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 9\n        }\n      }));\n    }\n  }]);\n\n  return ChartComponent;\n}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChartComponent);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGVtby9DaGFydC5qcz8zMjA2Il0sIm5hbWVzIjpbIm5ld0RhdGEiLCJPYmplY3QiLCJrZXlzIiwiZGVmYXVsdERhdGEiLCJkaXN0cmlidXRpb25SYW5rcyIsImNhc2VzIiwia2V5IiwicHVzaCIsInZhbHVlIiwiQ2hhcnRDb21wb25lbnQiLCJ3aWR0aCIsIlJlYWN0IiwiY3JlYXRlUmVmIiwiQ2hhcnQiLCJkZWJvdW5jZSIsImNoYXJ0IiwiZHJhdyIsInNlbGVjdGlvbiIsImNoYXJ0Q29udGFpbmVyIiwiY3VycmVudCIsImRhdGEiLCJwcm9wcyIsImdlbyIsImRlZmF1bHRHZW8iLCJhbm5vdGF0aW9ucyIsIm5hbWUiLCJpbnRlcmFjdGlvbiIsInNldFRpbWVvdXQiLCJvY2VhbmlhIiwibWFwX2N1c3RvbV9wcm9qZWN0aW9ucyIsImNlbnRlciIsInJvdGF0ZSIsImNsaXBfYm94Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlc2l6ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdGF0ZSIsInNldFN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxPQUFPLEdBQUcsRUFBaEI7O0FBQ0EsZ0NBQWdCQyxNQUFNLENBQUNDLElBQVAsQ0FBWUMsK0NBQVcsQ0FBQ0MsaUJBQVosQ0FBOEJDLEtBQTFDLENBQWhCLGtDQUFrRTtBQUE3RCxNQUFJQyxHQUFHLG1CQUFQO0FBQ0hOLFNBQU8sQ0FBQ08sSUFBUixDQUFhO0FBQ1hELE9BQUcsRUFBSEEsR0FEVztBQUVYRSxTQUFLLEVBQUVMLCtDQUFXLENBQUNDLGlCQUFaLENBQThCQyxLQUE5QixDQUFvQ0MsR0FBcEM7QUFGSSxHQUFiO0FBSUQ7O0lBQ0tHLGM7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFBRUMsV0FBSyxFQUFFO0FBQVQsSzs7eU5BQ1NDLDRDQUFLLENBQUNDLFNBQU4sRTs7Z05BR1QsSUFBSUMscURBQUosRTs7aU5BR0NDLHVEQUFRLENBQUMsWUFBTTtBQUFFLFlBQUtDLEtBQUwsQ0FBV0MsSUFBWDtBQUFvQixLQUE3QixFQUErQixHQUEvQixDOzs7Ozs7O3dDQUVHO0FBQUE7O0FBQ2xCO0FBQ0EsV0FBS0QsS0FBTCxDQUNHRSxTQURILENBQ2EsS0FBS0MsY0FBTCxDQUFvQkMsT0FEakMsRUFFR0MsSUFGSCxDQUVRcEIsT0FGUixFQUdHcUIsS0FISCxDQUdTO0FBQ0xDLFdBQUcsRUFBRUMsd0NBREE7QUFFTEMsbUJBQVcsRUFBRTtBQUNYQyxjQUFJLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsQ0FESztBQUVYakIsZUFBSyxFQUFFLENBQUMsSUFBRCxFQUFNLElBQU47QUFGSSxTQUZSO0FBTUxrQixtQkFBVyxFQUFFLEtBTlIsQ0FPTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBZkssT0FIVCxFQW9CR1YsSUFwQkgsR0FGa0IsQ0F3QmxCOztBQUNBVyxnQkFBVSxDQUFDLFlBQU07QUFDZixjQUFJLENBQUNaLEtBQUwsQ0FDR0ssSUFESCxDQUNRUSwyQ0FEUixFQUVHUCxLQUZILENBRVM7QUFBQ1EsZ0NBQXNCLEVBQUU7QUFDOUJDLGtCQUFNLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQURzQjtBQUVwQ0Msa0JBQU0sRUFBRSxDQUFDLENBQUMsR0FBRixFQUFPLENBQVAsQ0FGNEI7QUFHcENDLG9CQUFRLEVBQUUsQ0FBQyxDQUFDLEdBQUQsRUFBTSxDQUFOLENBQUQsRUFBVyxDQUFDLEdBQUQsRUFBTSxDQUFDLEVBQVAsQ0FBWCxDQUgwQjtBQUk5QlIsdUJBQVcsRUFBRTtBQUNYQyxrQkFBSSxFQUFFLENBQUMsSUFBRCxDQURLO0FBRVhqQixtQkFBSyxFQUFFLENBQUMsSUFBRDtBQUZJO0FBSmlCO0FBQXpCLFNBRlQsRUFXR1EsSUFYSDtBQVlELE9BYlMsRUFhUCxJQWJPLENBQVYsQ0F6QmtCLENBdUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQWlCLFlBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsS0FBS0MsTUFBdkM7QUFDRDs7OzJDQUVzQjtBQUNyQjtBQUNBRixZQUFNLENBQUNHLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDLEtBQUtELE1BQTFDO0FBQ0Q7Ozt5Q0FFb0I7QUFDbkI7QUFDQTtBQUNBLFdBQUtwQixLQUFMLENBQVdDLElBQVg7QUFDRDs7OzZCQUVRO0FBQUE7O0FBQUEsVUFDQ04sS0FERCxHQUNXLEtBQUsyQixLQURoQixDQUNDM0IsS0FERDtBQUVQLGFBQ0UsTUFBQyxpRUFBRDtBQUFnQixhQUFLLEVBQUVBLEtBQXZCO0FBQThCLGdCQUFRLEVBQUUsa0JBQUNBLEtBQUQ7QUFBQSxpQkFBVyxNQUFJLENBQUM0QixRQUFMLENBQWM7QUFBRTVCLGlCQUFLLEVBQUxBO0FBQUYsV0FBZCxDQUFYO0FBQUEsU0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVFO0FBQUssVUFBRSxFQUFDLE9BQVI7QUFBZ0IsV0FBRyxFQUFFLEtBQUtRLGNBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGRixDQURGO0FBTUQ7Ozs7RUEvRTBCUCw0Q0FBSyxDQUFDNEIsUzs7QUFrRnBCOUIsNkVBQWYiLCJmaWxlIjoiLi9zcmMvZGVtby9DaGFydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGFydCBmcm9tICcuLi9saWIvY2hhcnQuanMnO1xuaW1wb3J0IENoYXJ0Q29udGFpbmVyIGZyb20gJy4vZnVybml0dXJlL0NoYXJ0Q29udGFpbmVyJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoL2RlYm91bmNlJztcbmltcG9ydCBkZWZhdWx0RGF0YSBmcm9tICcuL2RlZmF1bHREYXRhLmpzb24nO1xuaW1wb3J0IGRlZmF1bHRHZW8gZnJvbSAnLi90b3BvLmpzb24nO1xuaW1wb3J0IG9jZWFuaWEgZnJvbSAnLi9vY2VhbmlhLmpzb24nO1xuXG5cbmNvbnN0IG5ld0RhdGEgPSBbXTtcbmZvciAodmFyIGtleSBvZiBPYmplY3Qua2V5cyhkZWZhdWx0RGF0YS5kaXN0cmlidXRpb25SYW5rcy5jYXNlcykpIHtcbiAgbmV3RGF0YS5wdXNoKHtcbiAgICBrZXksXG4gICAgdmFsdWU6IGRlZmF1bHREYXRhLmRpc3RyaWJ1dGlvblJhbmtzLmNhc2VzW2tleV0sXG4gIH0pO1xufVxuY2xhc3MgQ2hhcnRDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHsgd2lkdGg6ICc5OTInIH07XG4gIGNoYXJ0Q29udGFpbmVyID0gUmVhY3QuY3JlYXRlUmVmKCk7XG5cbiAgLy8gSW5zdGFudGlhdGUgYW5kIGFkZCBvdXIgY2hhcnQgY2xhc3MgdG8gdGhpcyBjb21wb25lbnQuXG4gIGNoYXJ0ID0gbmV3IENoYXJ0KCk7XG5cbiAgLy8gQSByZXNpemUgZnVuY3Rpb24gdG8gcmVkcmF3IHRoZSBjaGFydC5cbiAgcmVzaXplID0gZGVib3VuY2UoKCkgPT4geyB0aGlzLmNoYXJ0LmRyYXcoKTsgfSwgMjUwKTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBVc2Ugb3VyIGNoYXJ0IG1vZHVsZS5cbiAgICB0aGlzLmNoYXJ0XG4gICAgICAuc2VsZWN0aW9uKHRoaXMuY2hhcnRDb250YWluZXIuY3VycmVudClcbiAgICAgIC5kYXRhKG5ld0RhdGEpXG4gICAgICAucHJvcHMoe1xuICAgICAgICBnZW86IGRlZmF1bHRHZW8sXG4gICAgICAgIGFubm90YXRpb25zOiB7XG4gICAgICAgICAgbmFtZTogWydVUycsICdJTicsICdBVSddLFxuICAgICAgICAgIHZhbHVlOiBbJ0NBJywnQVUnXSxcbiAgICAgICAgfSxcbiAgICAgICAgaW50ZXJhY3Rpb246IGZhbHNlLFxuICAgICAgICAvLyBjdXN0b21fY2VudGVyOiBbMTczLjY0MDI4OSwgMy40MDMwNzJdLFxuICAgICAgICAvLyBtYXBfY3VzdG9tX3Byb2plY3Rpb25zOiB7XG4gICAgICAgIC8vICAgY2VudGVyOiBbMCwgNV0sXG4gICAgICAgIC8vICAgcm90YXRlOiBbLTE4MCwgMF0sXG4gICAgICAgIC8vICAgLy8gc2NhbGU6IDE1MCxcbiAgICAgICAgLy8gICBjbGlwX2JveDogW1xuICAgICAgICAvLyAgICAgWzExMSwgMl0gLCBbMjI1LCAtNTBdXG4gICAgICAgIC8vICAgXSxcbiAgICAgICAgLy8gfSxcbiAgICAgIH0pXG4gICAgICAuZHJhdygpO1xuXG4gICAgLy8gVXNlIGl0IGFnYWluLlxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jaGFydFxuICAgICAgICAuZGF0YShvY2VhbmlhKVxuICAgICAgICAucHJvcHMoe21hcF9jdXN0b21fcHJvamVjdGlvbnM6IHtcbiAgICAgICAgICBjZW50ZXI6IFswLCA1XSxcbiAgICByb3RhdGU6IFstMTgwLCAwXSxcbiAgICBjbGlwX2JveDogW1sxMTEsIDJdLCBbMjI1LCAtNTBdXSxcbiAgICAgICAgICBhbm5vdGF0aW9uczoge1xuICAgICAgICAgICAgbmFtZTogWydVUyddLFxuICAgICAgICAgICAgdmFsdWU6IFsnQVUnXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9fSlcbiAgICAgICAgLmRyYXcoKTtcbiAgICB9LCAyMDAwKTtcbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAvLyAgIHRoaXMuY2hhcnRcbiAgICAvLyAgICAgLmRhdGEoWzMwLCA1MCwgMzBdKVxuICAgIC8vICAgICAucHJvcHMoeyBmaWxsOiBiYXNlLmJsdWUuaGV4IH0pXG4gICAgLy8gICAgIC5kcmF3KCk7XG4gICAgLy8gfSwgMjAwMCk7XG5cbiAgICAvLyBBZGQgYSBsaXN0ZW5lciB0byByZXNpemUgY2hhcnQgd2l0aCB0aGUgd2luZG93LlxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAvLyBSZW1vdmUgbGlzdGVuZXIgaWYgdGhlIGNvbXBvbmVudCBpcyByZW1vdmVkLCB0b28uXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAvLyBVcGRhdGUgdGhlIGNoYXJ0IHdpdGggdGhlIGNvbXBvbmVudC5cbiAgICAvLyBDYW4gY2hhbmdlIGRhdGEgb3IgcHJvcHMgaGVyZSwgd2hhdGV2ZXIuLi5cbiAgICB0aGlzLmNoYXJ0LmRyYXcoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHdpZHRoIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8Q2hhcnRDb250YWluZXIgd2lkdGg9e3dpZHRofSBzZXRXaWR0aD17KHdpZHRoKSA9PiB0aGlzLnNldFN0YXRlKHsgd2lkdGggfSl9PlxuICAgICAgICB7LyogVGhpcyBpcyBvdXIgY2hhcnQgY29udGFpbmVyIPCfkYcgKi99XG4gICAgICAgIDxkaXYgaWQ9J2NoYXJ0JyByZWY9e3RoaXMuY2hhcnRDb250YWluZXJ9IC8+XG4gICAgICA8L0NoYXJ0Q29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhcnRDb21wb25lbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/demo/Chart.js\n");

/***/ })

})