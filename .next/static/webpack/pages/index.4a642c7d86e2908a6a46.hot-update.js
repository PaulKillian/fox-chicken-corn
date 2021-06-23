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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_images_near_shore_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/images/near-shore.png */ \"./public/images/near-shore.png\");\n/* harmony import */ var _public_images_far_shore_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/images/far-shore.png */ \"./public/images/far-shore.png\");\n/* harmony import */ var _public_images_top_wave_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/images/top-wave.png */ \"./public/images/top-wave.png\");\n/* harmony import */ var _public_images_boat_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/images/boat.png */ \"./public/images/boat.png\");\n/* harmony import */ var _public_images_bottom_wave_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/images/bottom-wave.png */ \"./public/images/bottom-wave.png\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/zeal/Projects/gitfcc/fox-chicken-corn/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      boatMove = _useState[0],\n      setBoatMove = _useState[1];\n\n  var moveBoat = function moveBoat() {\n    var boatImg = document.getElementById('boat');\n    boatImg.classList.remove('boat-animation');\n    boatImg.classList.add('boat-animation');\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n    className: 'd-flex main-height justify-content-center align-items-end',\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: 'd-flex flex-column',\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: 'position-relative col-12',\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n          src: _public_images_top_wave_png__WEBPACK_IMPORTED_MODULE_5__.default,\n          alt: \"The top wave\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'boat',\n        className: 'position-absolute',\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n          src: _public_images_boat_png__WEBPACK_IMPORTED_MODULE_6__.default,\n          alt: \"The row boat\",\n          onClick: function onClick() {\n            return setBoatMove(1);\n          },\n          onAnimationEnd: function onAnimationEnd() {\n            return setBoatMove(0);\n          },\n          boatMove: boatMove\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, this), \" />\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: 'position-absolute',\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n          src: _public_images_bottom_wave_png__WEBPACK_IMPORTED_MODULE_7__.default,\n          alt: \"The bottom wave\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"y/qPrvS3E0WwwwB0tac4I3PSFEU=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJib2F0TW92ZSIsInNldEJvYXRNb3ZlIiwibW92ZUJvYXQiLCJib2F0SW1nIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInRvcFdhdmUiLCJib2F0IiwiYm90dG9tV2F2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBQ0dDLCtDQUFRLENBQUMsQ0FBRCxDQURYO0FBQUEsTUFDdEJDLFFBRHNCO0FBQUEsTUFDWkMsV0FEWTs7QUFFN0IsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixRQUFNQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUFoQjtBQUNBRixXQUFPLENBQUNHLFNBQVIsQ0FBa0JDLE1BQWxCLENBQXlCLGdCQUF6QjtBQUNBSixXQUFPLENBQUNHLFNBQVIsQ0FBa0JFLEdBQWxCLENBQXNCLGdCQUF0QjtBQUNILEdBSkM7O0FBTUEsc0JBQ0U7QUFBTSxhQUFTLEVBQUUsMkRBQWpCO0FBQUEsMkJBRUU7QUFBSyxlQUFTLEVBQUUsb0JBQWhCO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFFLDBCQUFoQjtBQUFBLCtCQUNFLDhEQUFDLG1EQUFEO0FBQU8sYUFBRyxFQUFFQyxnRUFBWjtBQUFxQixhQUFHLEVBQUM7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFO0FBQUssVUFBRSxFQUFFLE1BQVQ7QUFBaUIsaUJBQVMsRUFBRSxtQkFBNUI7QUFBQSxnQ0FDRSw4REFBQyxtREFBRDtBQUNFLGFBQUcsRUFBRUMsNERBRFA7QUFFRSxhQUFHLEVBQUMsY0FGTjtBQUdFLGlCQUFPLEVBQUU7QUFBQSxtQkFBTVQsV0FBVyxDQUFDLENBQUQsQ0FBakI7QUFBQSxXQUhYO0FBSUUsd0JBQWMsRUFBRTtBQUFBLG1CQUFNQSxXQUFXLENBQUMsQ0FBRCxDQUFqQjtBQUFBLFdBSmxCO0FBS0Usa0JBQVEsRUFBRUQ7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBYUU7QUFBSyxpQkFBUyxFQUFFLG1CQUFoQjtBQUFBLCtCQUNFLDhEQUFDLG1EQUFEO0FBQU8sYUFBRyxFQUFFVyxtRUFBWjtBQUF3QixhQUFHLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF1QkQ7O0dBL0J1QmIsSTs7S0FBQUEsSSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IG5lYXJTaG9yZSBmcm9tICcuLi9wdWJsaWMvaW1hZ2VzL25lYXItc2hvcmUucG5nJ1xuaW1wb3J0IGZhclNob3JlIGZyb20gJy4uL3B1YmxpYy9pbWFnZXMvZmFyLXNob3JlLnBuZydcbmltcG9ydCB0b3BXYXZlIGZyb20gJy4uL3B1YmxpYy9pbWFnZXMvdG9wLXdhdmUucG5nJ1xuaW1wb3J0IGJvYXQgZnJvbSAnLi4vcHVibGljL2ltYWdlcy9ib2F0LnBuZydcbmltcG9ydCBib3R0b21XYXZlIGZyb20gJy4uL3B1YmxpYy9pbWFnZXMvYm90dG9tLXdhdmUucG5nJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2JvYXRNb3ZlLCBzZXRCb2F0TW92ZV0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBtb3ZlQm9hdCA9ICgpID0+IHtcbiAgICBjb25zdCBib2F0SW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXQnKVxuICAgIGJvYXRJbWcuY2xhc3NMaXN0LnJlbW92ZSgnYm9hdC1hbmltYXRpb24nKVxuICAgIGJvYXRJbWcuY2xhc3NMaXN0LmFkZCgnYm9hdC1hbmltYXRpb24nKVxufVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPXsnZC1mbGV4IG1haW4taGVpZ2h0IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtZW5kJ30+XG4gICAgICB7LyogPEltYWdlIHNyYz17bmVhclNob3JlfSBhbHQ9XCJUaGUgbmVhciBzaG9yZVwiIC8+ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9eydkLWZsZXggZmxleC1jb2x1bW4nfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydwb3NpdGlvbi1yZWxhdGl2ZSBjb2wtMTInfT5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXt0b3BXYXZlfSBhbHQ9XCJUaGUgdG9wIHdhdmVcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD17J2JvYXQnfSBjbGFzc05hbWU9eydwb3NpdGlvbi1hYnNvbHV0ZSd9ID5cbiAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICBzcmM9e2JvYXR9IFxuICAgICAgICAgICAgYWx0PVwiVGhlIHJvdyBib2F0XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEJvYXRNb3ZlKDEpfVxuICAgICAgICAgICAgb25BbmltYXRpb25FbmQ9eygpID0+IHNldEJvYXRNb3ZlKDApfVxuICAgICAgICAgICAgYm9hdE1vdmU9e2JvYXRNb3ZlfVxuICAgICAgICAgIC8+IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3Bvc2l0aW9uLWFic29sdXRlJ30+XG4gICAgICAgICAgPEltYWdlIHNyYz17Ym90dG9tV2F2ZX0gYWx0PVwiVGhlIGJvdHRvbSB3YXZlXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiA8SW1hZ2Ugc3JjPXtmYXJTaG9yZX0gYWx0PVwiVGhlIGZhciBzaG9yZVwiIC8+ICovfVxuICAgIDwvbWFpbj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});