webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/demo/Chart.js":
/*!***************************!*\
  !*** ./src/demo/Chart.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _lib_chart_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/chart.js */ \"./src/lib/chart.js\");\n/* harmony import */ var _furniture_ChartContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./furniture/ChartContainer */ \"./src/demo/furniture/ChartContainer.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/debounce */ \"./node_modules/lodash/debounce.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _defaultData_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./defaultData.json */ \"./src/demo/defaultData.json\");\nvar _defaultData_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./defaultData.json */ \"./src/demo/defaultData.json\", 1);\n/* harmony import */ var _topo_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./topo.json */ \"./src/demo/topo.json\");\nvar _topo_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./topo.json */ \"./src/demo/topo.json\", 1);\n/* harmony import */ var _oceania_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./oceania.json */ \"./src/demo/oceania.json\");\nvar _oceania_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./oceania.json */ \"./src/demo/oceania.json\", 1);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/u6068973/Documents/work/coronavirus/tracker-news-app/global-rate-map/src/demo/Chart.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\nconsole.log(_oceania_json__WEBPACK_IMPORTED_MODULE_13__);\nvar newData = [];\n\nfor (var _i = 0, _Object$keys = Object.keys(_defaultData_json__WEBPACK_IMPORTED_MODULE_11__.distributionRanks.cases); _i < _Object$keys.length; _i++) {\n  var key = _Object$keys[_i];\n  newData.push({\n    key: key,\n    value: _defaultData_json__WEBPACK_IMPORTED_MODULE_11__.distributionRanks.cases[key]\n  });\n}\n\nvar ChartComponent = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ChartComponent, _React$Component);\n\n  var _super = _createSuper(ChartComponent);\n\n  function ChartComponent() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ChartComponent);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      width: '992'\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"chartContainer\", react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"chart\", new _lib_chart_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"resize\", lodash_debounce__WEBPACK_IMPORTED_MODULE_10___default()(function () {\n      _this.chart.draw();\n    }, 250));\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ChartComponent, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      // Use our chart module.\n      this.chart.selection(this.chartContainer.current).data(newData).props({\n        geo: _topo_json__WEBPACK_IMPORTED_MODULE_12__,\n        annotations: {\n          name: ['US', 'IN', 'AU'],\n          value: ['CA', 'AU']\n        },\n        interaction: false // custom_center: [173.640289, 3.403072],\n        // map_custom_projections: {\n        //   center: [0, 5],\n        //   rotate: [-180, 0],\n        //   // scale: 150,\n        //   clip_box: [\n        //     [111, 2] , [225, -50]\n        //   ],\n        // },\n\n      }).draw(); // Use it again.\n\n      setTimeout(function () {\n        _this2.chart.data(newData).props({\n          geo: _oceania_json__WEBPACK_IMPORTED_MODULE_13__,\n          map_custom_projections: {\n            center: [0, 5],\n            rotate: [-180, 0],\n            clip_box: [[111, 2], [225, -50]]\n          },\n          interaction: true,\n          annotations: {\n            name: ['US'],\n            value: ['AU']\n          }\n        }).draw();\n      }, 2000); // setTimeout(() => {\n      //   this.chart\n      //     .data([30, 50, 30])\n      //     .props({ fill: base.blue.hex })\n      //     .draw();\n      // }, 2000);\n      // Add a listener to resize chart with the window.\n\n      window.addEventListener('resize', this.resize);\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      // Remove listener if the component is removed, too.\n      window.removeEventListener('resize', this.resize);\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {\n      // Update the chart with the component.\n      // Can change data or props here, whatever...\n      this.chart.draw();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var width = this.state.width;\n      return __jsx(_furniture_ChartContainer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        width: width,\n        setWidth: function setWidth(width) {\n          return _this3.setState({\n            width: width\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 7\n        }\n      }, __jsx(\"div\", {\n        id: \"chart\",\n        ref: this.chartContainer,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 9\n        }\n      }));\n    }\n  }]);\n\n  return ChartComponent;\n}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChartComponent);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGVtby9DaGFydC5qcz8zMjA2Il0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJvY2VhbmlhIiwibmV3RGF0YSIsIk9iamVjdCIsImtleXMiLCJkZWZhdWx0RGF0YSIsImRpc3RyaWJ1dGlvblJhbmtzIiwiY2FzZXMiLCJrZXkiLCJwdXNoIiwidmFsdWUiLCJDaGFydENvbXBvbmVudCIsIndpZHRoIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJDaGFydCIsImRlYm91bmNlIiwiY2hhcnQiLCJkcmF3Iiwic2VsZWN0aW9uIiwiY2hhcnRDb250YWluZXIiLCJjdXJyZW50IiwiZGF0YSIsInByb3BzIiwiZ2VvIiwiZGVmYXVsdEdlbyIsImFubm90YXRpb25zIiwibmFtZSIsImludGVyYWN0aW9uIiwic2V0VGltZW91dCIsIm1hcF9jdXN0b21fcHJvamVjdGlvbnMiLCJjZW50ZXIiLCJyb3RhdGUiLCJjbGlwX2JveCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXNpemUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3RhdGUiLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQywyQ0FBWjtBQUNBLElBQU1DLE9BQU8sR0FBRyxFQUFoQjs7QUFDQSxnQ0FBZ0JDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQywrQ0FBVyxDQUFDQyxpQkFBWixDQUE4QkMsS0FBMUMsQ0FBaEIsa0NBQWtFO0FBQTdELE1BQUlDLEdBQUcsbUJBQVA7QUFDSE4sU0FBTyxDQUFDTyxJQUFSLENBQWE7QUFDWEQsT0FBRyxFQUFIQSxHQURXO0FBRVhFLFNBQUssRUFBRUwsK0NBQVcsQ0FBQ0MsaUJBQVosQ0FBOEJDLEtBQTlCLENBQW9DQyxHQUFwQztBQUZJLEdBQWI7QUFJRDs7SUFDS0csYzs7Ozs7Ozs7Ozs7Ozs7OztnTkFDSTtBQUFFQyxXQUFLLEVBQUU7QUFBVCxLOzt5TkFDU0MsNENBQUssQ0FBQ0MsU0FBTixFOztnTkFHVCxJQUFJQyxxREFBSixFOztpTkFHQ0MsdURBQVEsQ0FBQyxZQUFNO0FBQUUsWUFBS0MsS0FBTCxDQUFXQyxJQUFYO0FBQW9CLEtBQTdCLEVBQStCLEdBQS9CLEM7Ozs7Ozs7d0NBRUc7QUFBQTs7QUFDbEI7QUFDQSxXQUFLRCxLQUFMLENBQ0dFLFNBREgsQ0FDYSxLQUFLQyxjQUFMLENBQW9CQyxPQURqQyxFQUVHQyxJQUZILENBRVFwQixPQUZSLEVBR0dxQixLQUhILENBR1M7QUFDTEMsV0FBRyxFQUFFQyx3Q0FEQTtBQUVMQyxtQkFBVyxFQUFFO0FBQ1hDLGNBQUksRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixDQURLO0FBRVhqQixlQUFLLEVBQUUsQ0FBQyxJQUFELEVBQU0sSUFBTjtBQUZJLFNBRlI7QUFNTGtCLG1CQUFXLEVBQUUsS0FOUixDQU9MO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFmSyxPQUhULEVBb0JHVixJQXBCSCxHQUZrQixDQXdCbEI7O0FBQ0FXLGdCQUFVLENBQUMsWUFBTTtBQUNmLGNBQUksQ0FBQ1osS0FBTCxDQUNHSyxJQURILENBQ1FwQixPQURSLEVBRUdxQixLQUZILENBRVM7QUFDTEMsYUFBRyxFQUFFdkIsMkNBREE7QUFFTDZCLGdDQUFzQixFQUFFO0FBQ3RCQyxrQkFBTSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FEYztBQUV0QkMsa0JBQU0sRUFBRSxDQUFDLENBQUMsR0FBRixFQUFPLENBQVAsQ0FGYztBQUd0QkMsb0JBQVEsRUFBRSxDQUFDLENBQUMsR0FBRCxFQUFNLENBQU4sQ0FBRCxFQUFXLENBQUMsR0FBRCxFQUFNLENBQUMsRUFBUCxDQUFYO0FBSFksV0FGbkI7QUFPTEwscUJBQVcsRUFBRSxJQVBSO0FBUUxGLHFCQUFXLEVBQUU7QUFDWEMsZ0JBQUksRUFBRSxDQUFDLElBQUQsQ0FESztBQUVYakIsaUJBQUssRUFBRSxDQUFDLElBQUQ7QUFGSTtBQVJSLFNBRlQsRUFnQkdRLElBaEJIO0FBaUJELE9BbEJTLEVBa0JQLElBbEJPLENBQVYsQ0F6QmtCLENBNENsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQWdCLFlBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsS0FBS0MsTUFBdkM7QUFDRDs7OzJDQUVzQjtBQUNyQjtBQUNBRixZQUFNLENBQUNHLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDLEtBQUtELE1BQTFDO0FBQ0Q7Ozt5Q0FFb0I7QUFDbkI7QUFDQTtBQUNBLFdBQUtuQixLQUFMLENBQVdDLElBQVg7QUFDRDs7OzZCQUVRO0FBQUE7O0FBQUEsVUFDQ04sS0FERCxHQUNXLEtBQUswQixLQURoQixDQUNDMUIsS0FERDtBQUVQLGFBQ0UsTUFBQyxpRUFBRDtBQUFnQixhQUFLLEVBQUVBLEtBQXZCO0FBQThCLGdCQUFRLEVBQUUsa0JBQUNBLEtBQUQ7QUFBQSxpQkFBVyxNQUFJLENBQUMyQixRQUFMLENBQWM7QUFBRTNCLGlCQUFLLEVBQUxBO0FBQUYsV0FBZCxDQUFYO0FBQUEsU0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVFO0FBQUssVUFBRSxFQUFDLE9BQVI7QUFBZ0IsV0FBRyxFQUFFLEtBQUtRLGNBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGRixDQURGO0FBTUQ7Ozs7RUFwRjBCUCw0Q0FBSyxDQUFDMkIsUzs7QUF1RnBCN0IsNkVBQWYiLCJmaWxlIjoiLi9zcmMvZGVtby9DaGFydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGFydCBmcm9tICcuLi9saWIvY2hhcnQuanMnO1xuaW1wb3J0IENoYXJ0Q29udGFpbmVyIGZyb20gJy4vZnVybml0dXJlL0NoYXJ0Q29udGFpbmVyJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoL2RlYm91bmNlJztcbmltcG9ydCBkZWZhdWx0RGF0YSBmcm9tICcuL2RlZmF1bHREYXRhLmpzb24nO1xuaW1wb3J0IGRlZmF1bHRHZW8gZnJvbSAnLi90b3BvLmpzb24nO1xuaW1wb3J0IG9jZWFuaWEgZnJvbSAnLi9vY2VhbmlhLmpzb24nO1xuXG5jb25zb2xlLmxvZyhvY2VhbmlhKVxuY29uc3QgbmV3RGF0YSA9IFtdO1xuZm9yICh2YXIga2V5IG9mIE9iamVjdC5rZXlzKGRlZmF1bHREYXRhLmRpc3RyaWJ1dGlvblJhbmtzLmNhc2VzKSkge1xuICBuZXdEYXRhLnB1c2goe1xuICAgIGtleSxcbiAgICB2YWx1ZTogZGVmYXVsdERhdGEuZGlzdHJpYnV0aW9uUmFua3MuY2FzZXNba2V5XSxcbiAgfSk7XG59XG5jbGFzcyBDaGFydENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0geyB3aWR0aDogJzk5MicgfTtcbiAgY2hhcnRDb250YWluZXIgPSBSZWFjdC5jcmVhdGVSZWYoKTtcblxuICAvLyBJbnN0YW50aWF0ZSBhbmQgYWRkIG91ciBjaGFydCBjbGFzcyB0byB0aGlzIGNvbXBvbmVudC5cbiAgY2hhcnQgPSBuZXcgQ2hhcnQoKTtcblxuICAvLyBBIHJlc2l6ZSBmdW5jdGlvbiB0byByZWRyYXcgdGhlIGNoYXJ0LlxuICByZXNpemUgPSBkZWJvdW5jZSgoKSA9PiB7IHRoaXMuY2hhcnQuZHJhdygpOyB9LCAyNTApO1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIFVzZSBvdXIgY2hhcnQgbW9kdWxlLlxuICAgIHRoaXMuY2hhcnRcbiAgICAgIC5zZWxlY3Rpb24odGhpcy5jaGFydENvbnRhaW5lci5jdXJyZW50KVxuICAgICAgLmRhdGEobmV3RGF0YSlcbiAgICAgIC5wcm9wcyh7XG4gICAgICAgIGdlbzogZGVmYXVsdEdlbyxcbiAgICAgICAgYW5ub3RhdGlvbnM6IHtcbiAgICAgICAgICBuYW1lOiBbJ1VTJywgJ0lOJywgJ0FVJ10sXG4gICAgICAgICAgdmFsdWU6IFsnQ0EnLCdBVSddLFxuICAgICAgICB9LFxuICAgICAgICBpbnRlcmFjdGlvbjogZmFsc2UsXG4gICAgICAgIC8vIGN1c3RvbV9jZW50ZXI6IFsxNzMuNjQwMjg5LCAzLjQwMzA3Ml0sXG4gICAgICAgIC8vIG1hcF9jdXN0b21fcHJvamVjdGlvbnM6IHtcbiAgICAgICAgLy8gICBjZW50ZXI6IFswLCA1XSxcbiAgICAgICAgLy8gICByb3RhdGU6IFstMTgwLCAwXSxcbiAgICAgICAgLy8gICAvLyBzY2FsZTogMTUwLFxuICAgICAgICAvLyAgIGNsaXBfYm94OiBbXG4gICAgICAgIC8vICAgICBbMTExLCAyXSAsIFsyMjUsIC01MF1cbiAgICAgICAgLy8gICBdLFxuICAgICAgICAvLyB9LFxuICAgICAgfSlcbiAgICAgIC5kcmF3KCk7XG5cbiAgICAvLyBVc2UgaXQgYWdhaW4uXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNoYXJ0XG4gICAgICAgIC5kYXRhKG5ld0RhdGEpXG4gICAgICAgIC5wcm9wcyh7XG4gICAgICAgICAgZ2VvOiBvY2VhbmlhLFxuICAgICAgICAgIG1hcF9jdXN0b21fcHJvamVjdGlvbnM6IHtcbiAgICAgICAgICAgIGNlbnRlcjogWzAsIDVdLFxuICAgICAgICAgICAgcm90YXRlOiBbLTE4MCwgMF0sXG4gICAgICAgICAgICBjbGlwX2JveDogW1sxMTEsIDJdLCBbMjI1LCAtNTBdXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGludGVyYWN0aW9uOiB0cnVlLFxuICAgICAgICAgIGFubm90YXRpb25zOiB7XG4gICAgICAgICAgICBuYW1lOiBbJ1VTJ10sXG4gICAgICAgICAgICB2YWx1ZTogWydBVSddLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgICAgIC5kcmF3KCk7XG4gICAgfSwgMjAwMCk7XG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gICB0aGlzLmNoYXJ0XG4gICAgLy8gICAgIC5kYXRhKFszMCwgNTAsIDMwXSlcbiAgICAvLyAgICAgLnByb3BzKHsgZmlsbDogYmFzZS5ibHVlLmhleCB9KVxuICAgIC8vICAgICAuZHJhdygpO1xuICAgIC8vIH0sIDIwMDApO1xuXG4gICAgLy8gQWRkIGEgbGlzdGVuZXIgdG8gcmVzaXplIGNoYXJ0IHdpdGggdGhlIHdpbmRvdy5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgLy8gUmVtb3ZlIGxpc3RlbmVyIGlmIHRoZSBjb21wb25lbnQgaXMgcmVtb3ZlZCwgdG9vLlxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgLy8gVXBkYXRlIHRoZSBjaGFydCB3aXRoIHRoZSBjb21wb25lbnQuXG4gICAgLy8gQ2FuIGNoYW5nZSBkYXRhIG9yIHByb3BzIGhlcmUsIHdoYXRldmVyLi4uXG4gICAgdGhpcy5jaGFydC5kcmF3KCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB3aWR0aCB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPENoYXJ0Q29udGFpbmVyIHdpZHRoPXt3aWR0aH0gc2V0V2lkdGg9eyh3aWR0aCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHdpZHRoIH0pfT5cbiAgICAgICAgey8qIFRoaXMgaXMgb3VyIGNoYXJ0IGNvbnRhaW5lciDwn5GHICovfVxuICAgICAgICA8ZGl2IGlkPSdjaGFydCcgcmVmPXt0aGlzLmNoYXJ0Q29udGFpbmVyfSAvPlxuICAgICAgPC9DaGFydENvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJ0Q29tcG9uZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/demo/Chart.js\n");

/***/ })

})