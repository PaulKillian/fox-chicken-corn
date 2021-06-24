/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_images_near_shore_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/images/near-shore.png */ \"./public/images/near-shore.png\");\n/* harmony import */ var _public_images_far_shore_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/images/far-shore.png */ \"./public/images/far-shore.png\");\n/* harmony import */ var _public_images_fox_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/images/fox.png */ \"./public/images/fox.png\");\n/* harmony import */ var _public_images_chicken_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/images/chicken.png */ \"./public/images/chicken.png\");\n/* harmony import */ var _public_images_corn_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/images/corn.png */ \"./public/images/corn.png\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_popover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/popover */ \"./pages/components/popover.js\");\n/* harmony import */ var _components_moveItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/moveItem */ \"./pages/components/moveItem.js\");\n/* harmony import */ var _components_itemsOnNearShore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/itemsOnNearShore */ \"./pages/components/itemsOnNearShore.js\");\n/* harmony import */ var _components_itemsOnNearShore__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_components_itemsOnNearShore__WEBPACK_IMPORTED_MODULE_12__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/zeal/Projects/gitfcc/fox-chicken-corn/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n // import EmptyBoat from './components/emptyBoat'\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    BoatState();\n    (0,_components_popover__WEBPACK_IMPORTED_MODULE_10__.default)();\n  });\n\n  function BoatState(item) {\n    console.log(item);\n\n    switch (item) {\n      case 'fox':\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FoxInBoat, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 16\n        }, this);\n\n      case 'chicken':\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChickenInBoat, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 16\n        }, this);\n\n      case 'corn':\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CornInBoat, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 16\n        }, this);\n\n      default:\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EmptyBoat, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 16\n        }, this);\n    }\n  }\n\n  var EmptyBoat = function EmptyBoat() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'fox',\n        \"aria-describedby\": \"tooltip\",\n        onClick: function onClick() {\n          return BoatState('fox');\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n          src: _public_images_fox_png__WEBPACK_IMPORTED_MODULE_5__.default,\n          alt: \"The fox\",\n          width: 130,\n          height: 150\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'chicken',\n        \"aria-describedby\": \"tooltip\",\n        onClick: function onClick() {\n          return BoatState('chicken');\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n          src: _public_images_chicken_png__WEBPACK_IMPORTED_MODULE_6__.default,\n          alt: \"The chicken\",\n          width: 130,\n          height: 180\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'corn',\n        \"aria-describedby\": \"tooltip\",\n        onClick: function onClick() {\n          return BoatState('corn');\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          id: 'tooltip',\n          role: \"tooltip\",\n          className: 'bg-white p-2',\n          children: \"I don't want to die!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n          src: _public_images_corn_png__WEBPACK_IMPORTED_MODULE_7__.default,\n          alt: \"The corn\",\n          width: 110,\n          height: 150\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n    className: 'd-flex main-height justify-content-start align-items-end landscape',\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_itemsOnNearShore__WEBPACK_IMPORTED_MODULE_12___default()), {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EmptyBoat, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 68,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlRWZmZWN0IiwiQm9hdFN0YXRlIiwiUG9wb3ZlciIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwiRW1wdHlCb2F0IiwiZm94IiwiY2hpY2tlbiIsImNvcm4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQzdCQyxrREFBUyxDQUFDLFlBQU07QUFDZEMsYUFBUztBQUNUQyxpRUFBTztBQUNSLEdBSFEsQ0FBVDs7QUFLQSxXQUFTRCxTQUFULENBQW1CRSxJQUFuQixFQUF5QjtBQUN2QkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7O0FBQ0EsWUFBT0EsSUFBUDtBQUNFLFdBQUssS0FBTDtBQUNFLDRCQUFPLDhEQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBUDs7QUFDRixXQUFLLFNBQUw7QUFDRSw0QkFBTyw4REFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVA7O0FBQ0YsV0FBSyxNQUFMO0FBQ0UsNEJBQU8sOERBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFQOztBQUNGO0FBQ0UsNEJBQU8sOERBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFQO0FBUko7QUFVSDs7QUFFQyxNQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCLHdCQUNFO0FBQUEsOEJBQ0U7QUFBSyxVQUFFLEVBQUUsS0FBVDtBQUFnQiw0QkFBaUIsU0FBakM7QUFBMkMsZUFBTyxFQUFFO0FBQUEsaUJBQU1MLFNBQVMsQ0FBQyxLQUFELENBQWY7QUFBQSxTQUFwRDtBQUFBLCtCQUNFLDhEQUFDLG1EQUFEO0FBQ0ksYUFBRyxFQUFFTSwyREFEVDtBQUVJLGFBQUcsRUFBQyxTQUZSO0FBR0ksZUFBSyxFQUFFLEdBSFg7QUFJSSxnQkFBTSxFQUFFO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQVNFO0FBQUssVUFBRSxFQUFFLFNBQVQ7QUFBb0IsNEJBQWlCLFNBQXJDO0FBQStDLGVBQU8sRUFBRTtBQUFBLGlCQUFNTixTQUFTLENBQUMsU0FBRCxDQUFmO0FBQUEsU0FBeEQ7QUFBQSwrQkFDRSw4REFBQyxtREFBRDtBQUNJLGFBQUcsRUFBRU8sK0RBRFQ7QUFFSSxhQUFHLEVBQUMsYUFGUjtBQUdJLGVBQUssRUFBRSxHQUhYO0FBSUksZ0JBQU0sRUFBRTtBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEYsZUFpQkU7QUFBSyxVQUFFLEVBQUUsTUFBVDtBQUFpQiw0QkFBaUIsU0FBbEM7QUFBNEMsZUFBTyxFQUFFO0FBQUEsaUJBQU1QLFNBQVMsQ0FBQyxNQUFELENBQWY7QUFBQSxTQUFyRDtBQUFBLGdDQUNBO0FBQUssWUFBRSxFQUFFLFNBQVQ7QUFBb0IsY0FBSSxFQUFDLFNBQXpCO0FBQW1DLG1CQUFTLEVBQUUsY0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREEsZUFFRSw4REFBQyxtREFBRDtBQUNJLGFBQUcsRUFBRVEsNERBRFQ7QUFFSSxhQUFHLEVBQUMsVUFGUjtBQUdJLGVBQUssRUFBRSxHQUhYO0FBSUksZ0JBQU0sRUFBRTtBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBakJGO0FBQUEsb0JBREY7QUE2QkQsR0E5QkQ7O0FBZ0NBLHNCQUNFO0FBQU0sYUFBUyxFQUFFLG9FQUFqQjtBQUFBLDRCQUNFLDhEQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLDhEQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBT0Q7O0dBM0R1QlYsSTs7S0FBQUEsSSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgbmVhclNob3JlIGZyb20gJy4uL3B1YmxpYy9pbWFnZXMvbmVhci1zaG9yZS5wbmcnXG5pbXBvcnQgZmFyU2hvcmUgZnJvbSAnLi4vcHVibGljL2ltYWdlcy9mYXItc2hvcmUucG5nJ1xuaW1wb3J0IGZveCBmcm9tICcuLi9wdWJsaWMvaW1hZ2VzL2ZveC5wbmcnXG5pbXBvcnQgY2hpY2tlbiBmcm9tICcuLi9wdWJsaWMvaW1hZ2VzL2NoaWNrZW4ucG5nJ1xuaW1wb3J0IGNvcm4gZnJvbSAnLi4vcHVibGljL2ltYWdlcy9jb3JuLnBuZydcbmltcG9ydCAkLCB7IGV2ZW50IH0gZnJvbSBcImpxdWVyeVwiO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcydcbmltcG9ydCBQb3BvdmVyIGZyb20gJy4vY29tcG9uZW50cy9wb3BvdmVyJ1xuaW1wb3J0IE1vdmVJdGVtIGZyb20gJy4vY29tcG9uZW50cy9tb3ZlSXRlbSdcbmltcG9ydCBJdGVtc09uTmVhclNob3JlIGZyb20gJy4vY29tcG9uZW50cy9pdGVtc09uTmVhclNob3JlJ1xuLy8gaW1wb3J0IEVtcHR5Qm9hdCBmcm9tICcuL2NvbXBvbmVudHMvZW1wdHlCb2F0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIEJvYXRTdGF0ZSgpXG4gICAgUG9wb3ZlcigpO1xuICB9KVxuXG4gIGZ1bmN0aW9uIEJvYXRTdGF0ZShpdGVtKSB7XG4gICAgY29uc29sZS5sb2coaXRlbSlcbiAgICBzd2l0Y2goaXRlbSkge1xuICAgICAgY2FzZSAnZm94JzpcbiAgICAgICAgcmV0dXJuIDxGb3hJbkJvYXQgLz47XG4gICAgICBjYXNlICdjaGlja2VuJzpcbiAgICAgICAgcmV0dXJuIDxDaGlja2VuSW5Cb2F0IC8+O1xuICAgICAgY2FzZSAnY29ybic6IFxuICAgICAgICByZXR1cm4gPENvcm5JbkJvYXQgLz47XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gPEVtcHR5Qm9hdCAvPjtcbiAgfVxufVxuXG4gIGNvbnN0IEVtcHR5Qm9hdCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGRpdiBpZD17J2ZveCd9IGFyaWEtZGVzY3JpYmVkYnk9XCJ0b29sdGlwXCIgb25DbGljaz17KCkgPT4gQm9hdFN0YXRlKCdmb3gnKX0+XG4gICAgICAgICAgPEltYWdlIFxuICAgICAgICAgICAgICBzcmM9e2ZveH0gXG4gICAgICAgICAgICAgIGFsdD1cIlRoZSBmb3hcIiBcbiAgICAgICAgICAgICAgd2lkdGg9ezEzMH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXsxNTB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9eydjaGlja2VuJ30gYXJpYS1kZXNjcmliZWRieT1cInRvb2x0aXBcIiBvbkNsaWNrPXsoKSA9PiBCb2F0U3RhdGUoJ2NoaWNrZW4nKX0+XG4gICAgICAgICAgPEltYWdlIFxuICAgICAgICAgICAgICBzcmM9e2NoaWNrZW59IFxuICAgICAgICAgICAgICBhbHQ9XCJUaGUgY2hpY2tlblwiXG4gICAgICAgICAgICAgIHdpZHRoPXsxMzB9XG4gICAgICAgICAgICAgIGhlaWdodD17MTgwfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPXsnY29ybid9IGFyaWEtZGVzY3JpYmVkYnk9XCJ0b29sdGlwXCIgb25DbGljaz17KCkgPT4gQm9hdFN0YXRlKCdjb3JuJyl9PlxuICAgICAgICA8ZGl2IGlkPXsndG9vbHRpcCd9IHJvbGU9XCJ0b29sdGlwXCIgY2xhc3NOYW1lPXsnYmctd2hpdGUgcC0yJ30+SSBkb24ndCB3YW50IHRvIGRpZSE8L2Rpdj5cbiAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICAgIHNyYz17Y29ybn0gXG4gICAgICAgICAgICAgIGFsdD1cIlRoZSBjb3JuXCJcbiAgICAgICAgICAgICAgd2lkdGg9ezExMH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXsxNTB9IFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC8+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9eydkLWZsZXggbWFpbi1oZWlnaHQganVzdGlmeS1jb250ZW50LXN0YXJ0IGFsaWduLWl0ZW1zLWVuZCBsYW5kc2NhcGUnfT5cbiAgICAgIDxJdGVtc09uTmVhclNob3JlIC8+XG4gICAgICA8RW1wdHlCb2F0IC8+XG4gICAgICB7LyogPEltYWdlIHNyYz17ZmFyU2hvcmV9IGFsdD1cIlRoZSBmYXIgc2hvcmVcIiAvPiAqL31cbiAgICA8L21haW4+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});