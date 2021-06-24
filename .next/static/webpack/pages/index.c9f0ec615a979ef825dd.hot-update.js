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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_images_near_shore_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/images/near-shore.png */ \"./public/images/near-shore.png\");\n/* harmony import */ var _public_images_far_shore_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/images/far-shore.png */ \"./public/images/far-shore.png\");\n/* harmony import */ var _components_allItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/allItems */ \"./pages/components/allItems.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_popover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/popover */ \"./pages/components/popover.js\");\n/* harmony import */ var _components_moveItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/moveItem */ \"./pages/components/moveItem.js\");\n/* harmony import */ var _components_moveItem__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_moveItem__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_emptyBoat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/emptyBoat */ \"./pages/components/emptyBoat.js\");\n/* harmony import */ var _components_cornInBoat__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/cornInBoat */ \"./pages/components/cornInBoat.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/zeal/Projects/gitfcc/fox-chicken-corn/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n // import ItemsOnNearShore from './components/itemsOnNearShore'\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n      boatState = _useState[0],\n      setBoatState = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    (0,_components_popover__WEBPACK_IMPORTED_MODULE_8__.default)();\n  });\n\n  var moveItem = function moveItem(item) {\n    setBoatState(item);\n    var currentItem = document.getElementById(item);\n    currentItem.classList.add('hidden');\n  };\n\n  var items = [_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Fox, _components_allItems__WEBPACK_IMPORTED_MODULE_5__.Chicken, _components_allItems__WEBPACK_IMPORTED_MODULE_5__.Corn];\n\n  if (boatState === '') {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      className: 'd-flex main-height justify-content-start align-items-end landscape',\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'fox',\n        \"aria-describedby\": \"tooltip\",\n        onClick: function onClick() {\n          return moveItem('fox');\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Fox, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'chicken',\n        \"aria-describedby\": \"tooltip\",\n        onClick: function onClick() {\n          return moveItem('chicken');\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Chicken, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'corn',\n        \"aria-describedby\": \"tooltip\",\n        onClick: function onClick() {\n          return moveItem('corn');\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          id: 'tooltip',\n          role: \"tooltip\",\n          className: 'bg-white p-2',\n          children: \"I don't want to die!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Corn, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_emptyBoat__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, this);\n  } else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      className: 'd-flex main-height justify-content-start align-items-end landscape',\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'fox',\n        \"aria-describedby\": \"tooltip\",\n        onClick: function onClick() {\n          return setBoatState('fox');\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Fox, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'chicken',\n        \"aria-describedby\": \"tooltip\",\n        onClick: function onClick() {\n          return setBoatState('chicken');\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Chicken, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'corn',\n        \"aria-describedby\": \"tooltip\",\n        onClick: function onClick() {\n          return moveItem('corn');\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          id: 'tooltip',\n          role: \"tooltip\",\n          className: 'bg-white p-2',\n          children: \"I don't want to die!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Corn, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cornInBoat__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, this);\n  }\n} //   function BoatState(item) {\n//     console.log(item)\n//     switch(item) {\n//       case 'fox':\n//         return <FoxInBoat />;\n//       case 'chicken':\n//         return <ChickenInBoat />;\n//       case 'corn': \n//         return <CornInBoat />;\n//       default:\n//         return <EmptyBoat />;\n//   }\n// }\n\n_s(Home, \"MinEYF1R0kXMr4Zcp2H8zxaHB1g=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJib2F0U3RhdGUiLCJzZXRCb2F0U3RhdGUiLCJ1c2VFZmZlY3QiLCJQb3BvdmVyIiwibW92ZUl0ZW0iLCJpdGVtIiwiY3VycmVudEl0ZW0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwiYWRkIiwiaXRlbXMiLCJGb3giLCJDaGlja2VuIiwiQ29ybiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUNLQywrQ0FBUSxDQUFDLEVBQUQsQ0FEYjtBQUFBLE1BQ3RCQyxTQURzQjtBQUFBLE1BQ1hDLFlBRFc7O0FBRTdCQyxrREFBUyxDQUFDLFlBQU07QUFDZEMsZ0VBQU87QUFDUixHQUZRLENBQVQ7O0FBSUYsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRCxFQUFVO0FBQ3pCSixnQkFBWSxDQUFDSSxJQUFELENBQVo7QUFDQSxRQUFNQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QkgsSUFBeEIsQ0FBcEI7QUFDQUMsZUFBVyxDQUFDRyxTQUFaLENBQXNCQyxHQUF0QixDQUEwQixRQUExQjtBQUNELEdBSkQ7O0FBTUEsTUFBTUMsS0FBSyxHQUFHLENBQUNDLHFEQUFELEVBQU1DLHlEQUFOLEVBQWVDLHNEQUFmLENBQWQ7O0FBRUUsTUFBR2QsU0FBUyxLQUFLLEVBQWpCLEVBQXFCO0FBQ25CLHdCQUNFO0FBQU0sZUFBUyxFQUFFLG9FQUFqQjtBQUFBLDhCQUNFO0FBQUssVUFBRSxFQUFFLEtBQVQ7QUFBZ0IsNEJBQWlCLFNBQWpDO0FBQTJDLGVBQU8sRUFBRTtBQUFBLGlCQUFNSSxRQUFRLENBQUMsS0FBRCxDQUFkO0FBQUEsU0FBcEQ7QUFBQSwrQkFDRSw4REFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUU7QUFBSyxVQUFFLEVBQUUsU0FBVDtBQUFvQiw0QkFBaUIsU0FBckM7QUFBK0MsZUFBTyxFQUFFO0FBQUEsaUJBQU1BLFFBQVEsQ0FBQyxTQUFELENBQWQ7QUFBQSxTQUF4RDtBQUFBLCtCQUNFLDhEQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFPRTtBQUFLLFVBQUUsRUFBRSxNQUFUO0FBQWlCLDRCQUFpQixTQUFsQztBQUE0QyxlQUFPLEVBQUU7QUFBQSxpQkFBTUEsUUFBUSxDQUFDLE1BQUQsQ0FBZDtBQUFBLFNBQXJEO0FBQUEsZ0NBQ0E7QUFBSyxZQUFFLEVBQUUsU0FBVDtBQUFvQixjQUFJLEVBQUMsU0FBekI7QUFBbUMsbUJBQVMsRUFBRSxjQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEQSxlQUVFLDhEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEYsZUFXRSw4REFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFnQkQsR0FqQkQsTUFpQk87QUFDTCx3QkFDRTtBQUFNLGVBQVMsRUFBRSxvRUFBakI7QUFBQSw4QkFDRTtBQUFLLFVBQUUsRUFBRSxLQUFUO0FBQWdCLDRCQUFpQixTQUFqQztBQUEyQyxlQUFPLEVBQUU7QUFBQSxpQkFBTUgsWUFBWSxDQUFDLEtBQUQsQ0FBbEI7QUFBQSxTQUFwRDtBQUFBLCtCQUNFLDhEQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRTtBQUFLLFVBQUUsRUFBRSxTQUFUO0FBQW9CLDRCQUFpQixTQUFyQztBQUErQyxlQUFPLEVBQUU7QUFBQSxpQkFBTUEsWUFBWSxDQUFDLFNBQUQsQ0FBbEI7QUFBQSxTQUF4RDtBQUFBLCtCQUNFLDhEQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFPRTtBQUFLLFVBQUUsRUFBRSxNQUFUO0FBQWlCLDRCQUFpQixTQUFsQztBQUE0QyxlQUFPLEVBQUU7QUFBQSxpQkFBTUcsUUFBUSxDQUFDLE1BQUQsQ0FBZDtBQUFBLFNBQXJEO0FBQUEsZ0NBQ0E7QUFBSyxZQUFFLEVBQUUsU0FBVDtBQUFvQixjQUFJLEVBQUMsU0FBekI7QUFBbUMsbUJBQVMsRUFBRSxjQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEQSxlQUVFLDhEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEYsZUFXRSw4REFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFnQkQ7QUFDRixDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0dBL0R3Qk4sSTs7S0FBQUEsSSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgbmVhclNob3JlIGZyb20gJy4uL3B1YmxpYy9pbWFnZXMvbmVhci1zaG9yZS5wbmcnXG5pbXBvcnQgZmFyU2hvcmUgZnJvbSAnLi4vcHVibGljL2ltYWdlcy9mYXItc2hvcmUucG5nJ1xuaW1wb3J0IHtGb3gsIENoaWNrZW4sIENvcm59IGZyb20gJy4vY29tcG9uZW50cy9hbGxJdGVtcydcbmltcG9ydCAkLCB7IGV2ZW50IH0gZnJvbSBcImpxdWVyeVwiO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcydcbmltcG9ydCBQb3BvdmVyIGZyb20gJy4vY29tcG9uZW50cy9wb3BvdmVyJ1xuaW1wb3J0IE1vdmVJdGVtIGZyb20gJy4vY29tcG9uZW50cy9tb3ZlSXRlbSdcbi8vIGltcG9ydCBJdGVtc09uTmVhclNob3JlIGZyb20gJy4vY29tcG9uZW50cy9pdGVtc09uTmVhclNob3JlJ1xuaW1wb3J0IEVtcHR5Qm9hdCBmcm9tICcuL2NvbXBvbmVudHMvZW1wdHlCb2F0J1xuaW1wb3J0IENvcm5JbkJvYXQgZnJvbSAnLi9jb21wb25lbnRzL2Nvcm5JbkJvYXQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtib2F0U3RhdGUsIHNldEJvYXRTdGF0ZV0gPSB1c2VTdGF0ZSgnJylcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBQb3BvdmVyKCk7XG4gIH0pXG5cbmNvbnN0IG1vdmVJdGVtID0gKGl0ZW0pID0+IHtcbiAgc2V0Qm9hdFN0YXRlKGl0ZW0pXG4gIGNvbnN0IGN1cnJlbnRJdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbSk7XG4gIGN1cnJlbnRJdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG59XG5cbmNvbnN0IGl0ZW1zID0gW0ZveCwgQ2hpY2tlbiwgQ29ybl07XG5cbiAgaWYoYm9hdFN0YXRlID09PSAnJykge1xuICAgIHJldHVybiAoXG4gICAgICA8bWFpbiBjbGFzc05hbWU9eydkLWZsZXggbWFpbi1oZWlnaHQganVzdGlmeS1jb250ZW50LXN0YXJ0IGFsaWduLWl0ZW1zLWVuZCBsYW5kc2NhcGUnfT5cbiAgICAgICAgPGRpdiBpZD17J2ZveCd9IGFyaWEtZGVzY3JpYmVkYnk9XCJ0b29sdGlwXCIgb25DbGljaz17KCkgPT4gbW92ZUl0ZW0oJ2ZveCcpfT5cbiAgICAgICAgICA8Rm94IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPXsnY2hpY2tlbid9IGFyaWEtZGVzY3JpYmVkYnk9XCJ0b29sdGlwXCIgb25DbGljaz17KCkgPT4gbW92ZUl0ZW0oJ2NoaWNrZW4nKX0+XG4gICAgICAgICAgPENoaWNrZW4gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9eydjb3JuJ30gYXJpYS1kZXNjcmliZWRieT1cInRvb2x0aXBcIiBvbkNsaWNrPXsoKSA9PiBtb3ZlSXRlbSgnY29ybicpfT5cbiAgICAgICAgPGRpdiBpZD17J3Rvb2x0aXAnfSByb2xlPVwidG9vbHRpcFwiIGNsYXNzTmFtZT17J2JnLXdoaXRlIHAtMid9PkkgZG9uJ3Qgd2FudCB0byBkaWUhPC9kaXY+XG4gICAgICAgICAgPENvcm4gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxFbXB0eUJvYXQgLz5cbiAgICAgICAgey8qIDxJbWFnZSBzcmM9e2ZhclNob3JlfSBhbHQ9XCJUaGUgZmFyIHNob3JlXCIgLz4gKi99XG4gICAgICA8L21haW4+XG4gICAgKSBcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPG1haW4gY2xhc3NOYW1lPXsnZC1mbGV4IG1haW4taGVpZ2h0IGp1c3RpZnktY29udGVudC1zdGFydCBhbGlnbi1pdGVtcy1lbmQgbGFuZHNjYXBlJ30+XG4gICAgICAgIDxkaXYgaWQ9eydmb3gnfSBhcmlhLWRlc2NyaWJlZGJ5PVwidG9vbHRpcFwiIG9uQ2xpY2s9eygpID0+IHNldEJvYXRTdGF0ZSgnZm94Jyl9PlxuICAgICAgICAgIDxGb3ggLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9eydjaGlja2VuJ30gYXJpYS1kZXNjcmliZWRieT1cInRvb2x0aXBcIiBvbkNsaWNrPXsoKSA9PiBzZXRCb2F0U3RhdGUoJ2NoaWNrZW4nKX0+XG4gICAgICAgICAgPENoaWNrZW4gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9eydjb3JuJ30gYXJpYS1kZXNjcmliZWRieT1cInRvb2x0aXBcIiBvbkNsaWNrPXsoKSA9PiBtb3ZlSXRlbSgnY29ybicpfT5cbiAgICAgICAgPGRpdiBpZD17J3Rvb2x0aXAnfSByb2xlPVwidG9vbHRpcFwiIGNsYXNzTmFtZT17J2JnLXdoaXRlIHAtMid9PkkgZG9uJ3Qgd2FudCB0byBkaWUhPC9kaXY+XG4gICAgICAgICAgPENvcm4gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxDb3JuSW5Cb2F0IC8+XG4gICAgICAgIHsvKiA8SW1hZ2Ugc3JjPXtmYXJTaG9yZX0gYWx0PVwiVGhlIGZhciBzaG9yZVwiIC8+ICovfVxuICAgICAgPC9tYWluPlxuICAgICkgXG4gIH1cbn1cblxuLy8gICBmdW5jdGlvbiBCb2F0U3RhdGUoaXRlbSkge1xuLy8gICAgIGNvbnNvbGUubG9nKGl0ZW0pXG4vLyAgICAgc3dpdGNoKGl0ZW0pIHtcbi8vICAgICAgIGNhc2UgJ2ZveCc6XG4vLyAgICAgICAgIHJldHVybiA8Rm94SW5Cb2F0IC8+O1xuLy8gICAgICAgY2FzZSAnY2hpY2tlbic6XG4vLyAgICAgICAgIHJldHVybiA8Q2hpY2tlbkluQm9hdCAvPjtcbi8vICAgICAgIGNhc2UgJ2Nvcm4nOiBcbi8vICAgICAgICAgcmV0dXJuIDxDb3JuSW5Cb2F0IC8+O1xuLy8gICAgICAgZGVmYXVsdDpcbi8vICAgICAgICAgcmV0dXJuIDxFbXB0eUJvYXQgLz47XG4vLyAgIH1cbi8vIH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});