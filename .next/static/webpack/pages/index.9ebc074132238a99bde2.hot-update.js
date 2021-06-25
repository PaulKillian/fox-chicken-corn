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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_images_near_shore_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/images/near-shore.png */ \"./public/images/near-shore.png\");\n/* harmony import */ var _public_images_far_shore_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/images/far-shore.png */ \"./public/images/far-shore.png\");\n/* harmony import */ var _components_allItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/allItems */ \"./pages/components/allItems.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_popover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/popover */ \"./pages/components/popover.js\");\n/* harmony import */ var _components_emptyBoat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/emptyBoat */ \"./pages/components/emptyBoat.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/zeal/Projects/gitfcc/fox-chicken-corn/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n      clickedItem = _useState[0],\n      setClickedItem = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),\n      itemInBoat = _useState2[0],\n      setItemInBoat = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    (0,_components_popover__WEBPACK_IMPORTED_MODULE_8__.default)();\n  });\n\n  var moveItem = function moveItem(item) {\n    setClickedItem(item);\n    var currentItem = document.getElementById(item);\n    currentItem.classList.add('hidden');\n  };\n\n  var moveBoat = function moveBoat() {\n    var boatImg = document.getElementById('boat');\n    boatImg.classList.toggle('boat-animation');\n  };\n\n  if (clickedItem === '') {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      id: \"particles-js\",\n      className: 'd-flex main-height justify-content-start align-items-end landscape',\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'fox',\n        \"aria-describedby\": \"tooltip\",\n        onClick: function onClick() {\n          return moveItem('fox');\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Fox, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'chicken',\n        \"aria-describedby\": \"tooltip\",\n        onClick: function onClick() {\n          return moveItem('chicken');\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Chicken, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'corn',\n        \"aria-describedby\": \"tooltip\",\n        onClick: function onClick() {\n          return moveItem('corn');\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          id: 'tooltip',\n          role: \"tooltip\",\n          className: 'bg-white p-2',\n          children: \"I don't want to die!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Corn, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_emptyBoat__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this);\n  } else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      id: \"particles-js\",\n      className: 'd-flex main-height justify-content-start align-items-end landscape',\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'fox',\n        \"aria-describedby\": \"tooltip\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Fox, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'chicken',\n        \"aria-describedby\": \"tooltip\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Chicken, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'corn',\n        \"aria-describedby\": \"tooltip\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          id: 'tooltip',\n          role: \"tooltip\",\n          className: 'bg-white p-2',\n          children: \"I don't want to die!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Corn, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'boat',\n        className: 'd-flex flex-column justify-content-end',\n        onClick: moveBoat,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: 'position-relative farmer-position',\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Farmer, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: 'position-absolute',\n          children: _components_allItems__WEBPACK_IMPORTED_MODULE_5__.items.map(function (item) {\n            if (item.alt === clickedItem) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: item.src,\n                alt: item.alt,\n                width: item.width,\n                height: item.height\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 67,\n                columnNumber: 17\n              }, _this);\n            }\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: 'position-absolute',\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Boat, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, this);\n  }\n} //   function Boat(item) {\n//     console.log(item)\n//     switch(item) {\n//       case 'fox':\n//         return <FoxInBoat />;\n//       case 'chicken':\n//         return <ChickenInBoat />;\n//       case 'corn': \n//         return <CornInBoat />;\n//       default:\n//         return <EmptyBoat />;\n//   }\n// }\n\n_s(Home, \"1zYkzbOpns56dG8BqgKvF5PkrsU=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJjbGlja2VkSXRlbSIsInNldENsaWNrZWRJdGVtIiwiaXRlbUluQm9hdCIsInNldEl0ZW1JbkJvYXQiLCJ1c2VFZmZlY3QiLCJQb3BvdmVyIiwibW92ZUl0ZW0iLCJpdGVtIiwiY3VycmVudEl0ZW0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwiYWRkIiwibW92ZUJvYXQiLCJib2F0SW1nIiwidG9nZ2xlIiwiaXRlbXMiLCJhbHQiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDU0MsK0NBQVEsQ0FBQyxFQUFELENBRGpCO0FBQUEsTUFDdEJDLFdBRHNCO0FBQUEsTUFDVEMsY0FEUzs7QUFBQSxtQkFFT0YsK0NBQVEsQ0FBQyxFQUFELENBRmY7QUFBQSxNQUV0QkcsVUFGc0I7QUFBQSxNQUVWQyxhQUZVOztBQUc3QkMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RDLGdFQUFPO0FBQ1IsR0FGUSxDQUFUOztBQUlGLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLElBQUQsRUFBVTtBQUN6Qk4sa0JBQWMsQ0FBQ00sSUFBRCxDQUFkO0FBQ0EsUUFBTUMsV0FBVyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0JILElBQXhCLENBQXBCO0FBQ0FDLGVBQVcsQ0FBQ0csU0FBWixDQUFzQkMsR0FBdEIsQ0FBMEIsUUFBMUI7QUFDRCxHQUpEOztBQU1BLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsUUFBTUMsT0FBTyxHQUFHTCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFB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QUFHRSxxQkFBSyxFQUFFVixJQUFJLENBQUNZLEtBSGQ7QUFJRSxzQkFBTSxFQUFFWixJQUFJLENBQUNhO0FBSmY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERjtBQVFIO0FBQ0YsV0FYRTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkEsZUFrQkE7QUFBSyxtQkFBUyxFQUFFLG1CQUFoQjtBQUFBLGlDQUNFLDhEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWxCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQXFDRDtBQUNGLEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7R0F4RndCdEIsSTs7S0FBQUEsSSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgbmVhclNob3JlIGZyb20gJy4uL3B1YmxpYy9pbWFnZXMvbmVhci1zaG9yZS5wbmcnXG5pbXBvcnQgZmFyU2hvcmUgZnJvbSAnLi4vcHVibGljL2ltYWdlcy9mYXItc2hvcmUucG5nJ1xuaW1wb3J0IHtGb3gsIENoaWNrZW4sIENvcm4sIEJvYXQsIEZhcm1lciwgaXRlbXN9IGZyb20gJy4vY29tcG9uZW50cy9hbGxJdGVtcydcbmltcG9ydCAkLCB7IGV2ZW50IH0gZnJvbSBcImpxdWVyeVwiO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcydcbmltcG9ydCBQb3BvdmVyIGZyb20gJy4vY29tcG9uZW50cy9wb3BvdmVyJ1xuaW1wb3J0IEVtcHR5Qm9hdCBmcm9tICcuL2NvbXBvbmVudHMvZW1wdHlCb2F0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbY2xpY2tlZEl0ZW0sIHNldENsaWNrZWRJdGVtXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbaXRlbUluQm9hdCwgc2V0SXRlbUluQm9hdF0gPSB1c2VTdGF0ZSh7fSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBQb3BvdmVyKCk7XG4gIH0pXG5cbmNvbnN0IG1vdmVJdGVtID0gKGl0ZW0pID0+IHtcbiAgc2V0Q2xpY2tlZEl0ZW0oaXRlbSlcbiAgY29uc3QgY3VycmVudEl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVtKTtcbiAgY3VycmVudEl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbn1cblxuY29uc3QgbW92ZUJvYXQgPSAoKSA9PiB7XG4gIGNvbnN0IGJvYXRJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hdCcpXG4gIGJvYXRJbWcuY2xhc3NMaXN0LnRvZ2dsZSgnYm9hdC1hbmltYXRpb24nKVxufVxuXG4gIGlmKGNsaWNrZWRJdGVtID09PSAnJykge1xuICAgIHJldHVybiAoXG4gICAgICA8bWFpbiBpZD1cInBhcnRpY2xlcy1qc1wiIGNsYXNzTmFtZT17J2QtZmxleCBtYWluLWhlaWdodCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnQgYWxpZ24taXRlbXMtZW5kIGxhbmRzY2FwZSd9PlxuICAgICAgICA8ZGl2IGlkPXsnZm94J30gYXJpYS1kZXNjcmliZWRieT1cInRvb2x0aXBcIiBvbkNsaWNrPXsoKSA9PiBtb3ZlSXRlbSgnZm94Jyl9PlxuICAgICAgICAgIDxGb3ggLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9eydjaGlja2VuJ30gYXJpYS1kZXNjcmliZWRieT1cInRvb2x0aXBcIiBvbkNsaWNrPXsoKSA9PiBtb3ZlSXRlbSgnY2hpY2tlbicpfT5cbiAgICAgICAgICA8Q2hpY2tlbiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD17J2Nvcm4nfSBhcmlhLWRlc2NyaWJlZGJ5PVwidG9vbHRpcFwiIG9uQ2xpY2s9eygpID0+IG1vdmVJdGVtKCdjb3JuJyl9PlxuICAgICAgICA8ZGl2IGlkPXsndG9vbHRpcCd9IHJvbGU9XCJ0b29sdGlwXCIgY2xhc3NOYW1lPXsnYmctd2hpdGUgcC0yJ30+SSBkb24ndCB3YW50IHRvIGRpZSE8L2Rpdj5cbiAgICAgICAgICA8Q29ybiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEVtcHR5Qm9hdCAvPlxuICAgICAgICB7LyogPEltYWdlIHNyYz17ZmFyU2hvcmV9IGFsdD1cIlRoZSBmYXIgc2hvcmVcIiAvPiAqL31cbiAgICAgIDwvbWFpbj5cbiAgICApIFxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8bWFpbiBpZD1cInBhcnRpY2xlcy1qc1wiIGNsYXNzTmFtZT17J2QtZmxleCBtYWluLWhlaWdodCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnQgYWxpZ24taXRlbXMtZW5kIGxhbmRzY2FwZSd9PlxuICAgICAgICA8ZGl2IGlkPXsnZm94J30gYXJpYS1kZXNjcmliZWRieT1cInRvb2x0aXBcIj5cbiAgICAgICAgICA8Rm94IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPXsnY2hpY2tlbid9IGFyaWEtZGVzY3JpYmVkYnk9XCJ0b29sdGlwXCIgPlxuICAgICAgICAgIDxDaGlja2VuIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPXsnY29ybid9IGFyaWEtZGVzY3JpYmVkYnk9XCJ0b29sdGlwXCI+XG4gICAgICAgIDxkaXYgaWQ9eyd0b29sdGlwJ30gcm9sZT1cInRvb2x0aXBcIiBjbGFzc05hbWU9eydiZy13aGl0ZSBwLTInfT5JIGRvbid0IHdhbnQgdG8gZGllITwvZGl2PlxuICAgICAgICAgIDxDb3JuIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPXsnYm9hdCd9IGNsYXNzTmFtZT17J2QtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtZW5kJ30gb25DbGljaz17bW92ZUJvYXR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3Bvc2l0aW9uLXJlbGF0aXZlIGZhcm1lci1wb3NpdGlvbid9PlxuICAgICAgICAgIDxGYXJtZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncG9zaXRpb24tYWJzb2x1dGUnfT5cbiAgICAgICAgICB7aXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYoaXRlbS5hbHQgPT09IGNsaWNrZWRJdGVtKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEltYWdlIFxuICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLnNyY30gXG4gICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0uYWx0fSBcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXtpdGVtLndpZHRofVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtpdGVtLmhlaWdodH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydwb3NpdGlvbi1hYnNvbHV0ZSd9PlxuICAgICAgICAgIDxCb2F0IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiA8SW1hZ2Ugc3JjPXtmYXJTaG9yZX0gYWx0PVwiVGhlIGZhciBzaG9yZVwiIC8+ICovfVxuICAgICAgPC9tYWluPlxuICAgICkgXG4gIH1cbn1cblxuLy8gICBmdW5jdGlvbiBCb2F0KGl0ZW0pIHtcbi8vICAgICBjb25zb2xlLmxvZyhpdGVtKVxuLy8gICAgIHN3aXRjaChpdGVtKSB7XG4vLyAgICAgICBjYXNlICdmb3gnOlxuLy8gICAgICAgICByZXR1cm4gPEZveEluQm9hdCAvPjtcbi8vICAgICAgIGNhc2UgJ2NoaWNrZW4nOlxuLy8gICAgICAgICByZXR1cm4gPENoaWNrZW5JbkJvYXQgLz47XG4vLyAgICAgICBjYXNlICdjb3JuJzogXG4vLyAgICAgICAgIHJldHVybiA8Q29ybkluQm9hdCAvPjtcbi8vICAgICAgIGRlZmF1bHQ6XG4vLyAgICAgICAgIHJldHVybiA8RW1wdHlCb2F0IC8+O1xuLy8gICB9XG4vLyB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});