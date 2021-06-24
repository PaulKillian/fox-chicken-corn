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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_images_near_shore_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/images/near-shore.png */ \"./public/images/near-shore.png\");\n/* harmony import */ var _public_images_far_shore_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/images/far-shore.png */ \"./public/images/far-shore.png\");\n/* harmony import */ var _components_allItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/allItems */ \"./pages/components/allItems.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_popover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/popover */ \"./pages/components/popover.js\");\n/* harmony import */ var _components_moveItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/moveItem */ \"./pages/components/moveItem.js\");\n/* harmony import */ var _components_moveItem__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_moveItem__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_emptyBoat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/emptyBoat */ \"./pages/components/emptyBoat.js\");\n/* harmony import */ var _components_cornInBoat__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/cornInBoat */ \"./pages/components/cornInBoat.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/zeal/Projects/gitfcc/fox-chicken-corn/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n // import ItemsOnNearShore from './components/itemsOnNearShore'\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n      boatState = _useState[0],\n      setBoatState = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    (0,_components_popover__WEBPACK_IMPORTED_MODULE_8__.default)();\n  });\n\n  var moveItem = function moveItem(item) {\n    setBoatState(item);\n    var currentItem = document.getElementById(item);\n    currentItem.classList.add('hidden');\n  };\n\n  var moveBoat = function moveBoat() {\n    var boatImg = document.getElementById('boat');\n    boatImg.classList.toggle('boat-animation');\n  };\n\n  var items = [_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Fox, _components_allItems__WEBPACK_IMPORTED_MODULE_5__.Chicken, _components_allItems__WEBPACK_IMPORTED_MODULE_5__.Corn];\n\n  if (boatState === '') {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      className: 'd-flex main-height justify-content-start align-items-end landscape',\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'fox',\n        \"aria-describedby\": \"tooltip\",\n        onClick: function onClick() {\n          return moveItem('fox');\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Fox, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'chicken',\n        \"aria-describedby\": \"tooltip\",\n        onClick: function onClick() {\n          return moveItem('chicken');\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Chicken, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'corn',\n        \"aria-describedby\": \"tooltip\",\n        onClick: function onClick() {\n          return moveItem('corn');\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          id: 'tooltip',\n          role: \"tooltip\",\n          className: 'bg-white p-2',\n          children: \"I don't want to die!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Corn, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_emptyBoat__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, this);\n  } else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      className: 'd-flex main-height justify-content-start align-items-end landscape',\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'fox',\n        \"aria-describedby\": \"tooltip\",\n        onClick: function onClick() {\n          return setBoatState('fox');\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Fox, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'chicken',\n        \"aria-describedby\": \"tooltip\",\n        onClick: function onClick() {\n          return setBoatState('chicken');\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Chicken, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'corn',\n        \"aria-describedby\": \"tooltip\",\n        onClick: function onClick() {\n          return moveItem('corn');\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          id: 'tooltip',\n          role: \"tooltip\",\n          className: 'bg-white p-2',\n          children: \"I don't want to die!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Corn, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'boat',\n        className: 'd-flex flex-column justify-content-end',\n        onClick: moveBoat,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: 'position-relative',\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Farmer, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: 'position-absolute',\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n            src: corn,\n            alt: \"The corn\",\n            width: 110,\n            height: 150\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: 'position-absolute',\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Boat, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, this);\n  }\n} //   function BoatState(item) {\n//     console.log(item)\n//     switch(item) {\n//       case 'fox':\n//         return <FoxInBoat />;\n//       case 'chicken':\n//         return <ChickenInBoat />;\n//       case 'corn': \n//         return <CornInBoat />;\n//       default:\n//         return <EmptyBoat />;\n//   }\n// }\n\n_s(Home, \"MinEYF1R0kXMr4Zcp2H8zxaHB1g=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJib2F0U3RhdGUiLCJzZXRCb2F0U3RhdGUiLCJ1c2VFZmZlY3QiLCJQb3BvdmVyIiwibW92ZUl0ZW0iLCJpdGVtIiwiY3VycmVudEl0ZW0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwiYWRkIiwibW92ZUJvYXQiLCJib2F0SW1nIiwidG9nZ2xlIiwiaXRlbXMiLCJGb3giLCJDaGlja2VuIiwiQ29ybiIsImNvcm4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFDS0MsK0NBQVEsQ0FBQyxFQUFELENBRGI7QUFBQSxNQUN0QkMsU0FEc0I7QUFBQSxNQUNYQyxZQURXOztBQUU3QkMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RDLGdFQUFPO0FBQ1IsR0FGUSxDQUFUOztBQUlGLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLElBQUQsRUFBVTtBQUN6QkosZ0JBQVksQ0FBQ0ksSUFBRCxDQUFaO0FBQ0EsUUFBTUMsV0FBVyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0JILElBQXhCLENBQXBCO0FBQ0FDLGVBQVcsQ0FBQ0csU0FBWixDQUFzQkMsR0FBdEIsQ0FBMEIsUUFBMUI7QUFDRCxHQUpEOztBQU1BLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsUUFBTUMsT0FBTyxHQUFHTCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBaEI7QUFDQUksV0FBTyxDQUFDSCxTQUFSLENBQWtCSSxNQUFsQixDQUF5QixnQkFBekI7QUFDRCxHQUhEOztBQUtBLE1BQU1DLEtBQUssR0FBRyxDQUFD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aUJBQUssRUFBRSxHQUhUO0FBSUUsa0JBQU0sRUFBRTtBQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpBLGVBWUE7QUFBSyxtQkFBUyxFQUFFLG1CQUFoQjtBQUFBLGlDQUNFLDhEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBK0JEO0FBQ0YsQyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztHQW5Gd0JwQixJOztLQUFBQSxJIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBuZWFyU2hvcmUgZnJvbSAnLi4vcHVibGljL2ltYWdlcy9uZWFyLXNob3JlLnBuZydcbmltcG9ydCBmYXJTaG9yZSBmcm9tICcuLi9wdWJsaWMvaW1hZ2VzL2Zhci1zaG9yZS5wbmcnXG5pbXBvcnQge0ZveCwgQ2hpY2tlbiwgQ29ybiwgQm9hdCwgRmFybWVyfSBmcm9tICcuL2NvbXBvbmVudHMvYWxsSXRlbXMnXG5pbXBvcnQgJCwgeyBldmVudCB9IGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3MnXG5pbXBvcnQgUG9wb3ZlciBmcm9tICcuL2NvbXBvbmVudHMvcG9wb3ZlcidcbmltcG9ydCBNb3ZlSXRlbSBmcm9tICcuL2NvbXBvbmVudHMvbW92ZUl0ZW0nXG4vLyBpbXBvcnQgSXRlbXNPbk5lYXJTaG9yZSBmcm9tICcuL2NvbXBvbmVudHMvaXRlbXNPbk5lYXJTaG9yZSdcbmltcG9ydCBFbXB0eUJvYXQgZnJvbSAnLi9jb21wb25lbnRzL2VtcHR5Qm9hdCdcbmltcG9ydCBDb3JuSW5Cb2F0IGZyb20gJy4vY29tcG9uZW50cy9jb3JuSW5Cb2F0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbYm9hdFN0YXRlLCBzZXRCb2F0U3RhdGVdID0gdXNlU3RhdGUoJycpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgUG9wb3ZlcigpO1xuICB9KVxuXG5jb25zdCBtb3ZlSXRlbSA9IChpdGVtKSA9PiB7XG4gIHNldEJvYXRTdGF0ZShpdGVtKVxuICBjb25zdCBjdXJyZW50SXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW0pO1xuICBjdXJyZW50SXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxufVxuXG5jb25zdCBtb3ZlQm9hdCA9ICgpID0+IHtcbiAgY29uc3QgYm9hdEltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2F0JylcbiAgYm9hdEltZy5jbGFzc0xpc3QudG9nZ2xlKCdib2F0LWFuaW1hdGlvbicpXG59XG5cbmNvbnN0IGl0ZW1zID0gW0ZveCwgQ2hpY2tlbiwgQ29ybl07XG5cbiAgaWYoYm9hdFN0YXRlID09PSAnJykge1xuICAgIHJldHVybiAoXG4gICAgICA8bWFpbiBjbGFzc05hbWU9eydkLWZsZXggbWFpbi1oZWlnaHQganVzdGlmeS1jb250ZW50LXN0YXJ0IGFsaWduLWl0ZW1zLWVuZCBsYW5kc2NhcGUnfT5cbiAgICAgICAgPGRpdiBpZD17J2ZveCd9IGFyaWEtZGVzY3JpYmVkYnk9XCJ0b29sdGlwXCIgb25DbGljaz17KCkgPT4gbW92ZUl0ZW0oJ2ZveCcpfT5cbiAgICAgICAgICA8Rm94IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPXsnY2hpY2tlbid9IGFyaWEtZGVzY3JpYmVkYnk9XCJ0b29sdGlwXCIgb25DbGljaz17KCkgPT4gbW92ZUl0ZW0oJ2NoaWNrZW4nKX0+XG4gICAgICAgICAgPENoaWNrZW4gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9eydjb3JuJ30gYXJpYS1kZXNjcmliZWRieT1cInRvb2x0aXBcIiBvbkNsaWNrPXsoKSA9PiBtb3ZlSXRlbSgnY29ybicpfT5cbiAgICAgICAgPGRpdiBpZD17J3Rvb2x0aXAnfSByb2xlPVwidG9vbHRpcFwiIGNsYXNzTmFtZT17J2JnLXdoaXRlIHAtMid9PkkgZG9uJ3Qgd2FudCB0byBkaWUhPC9kaXY+XG4gICAgICAgICAgPENvcm4gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxFbXB0eUJvYXQgLz5cbiAgICAgICAgey8qIDxJbWFnZSBzcmM9e2ZhclNob3JlfSBhbHQ9XCJUaGUgZmFyIHNob3JlXCIgLz4gKi99XG4gICAgICA8L21haW4+XG4gICAgKSBcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPG1haW4gY2xhc3NOYW1lPXsnZC1mbGV4IG1haW4taGVpZ2h0IGp1c3RpZnktY29udGVudC1zdGFydCBhbGlnbi1pdGVtcy1lbmQgbGFuZHNjYXBlJ30+XG4gICAgICAgIDxkaXYgaWQ9eydmb3gnfSBhcmlhLWRlc2NyaWJlZGJ5PVwidG9vbHRpcFwiIG9uQ2xpY2s9eygpID0+IHNldEJvYXRTdGF0ZSgnZm94Jyl9PlxuICAgICAgICAgIDxGb3ggLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9eydjaGlja2VuJ30gYXJpYS1kZXNjcmliZWRieT1cInRvb2x0aXBcIiBvbkNsaWNrPXsoKSA9PiBzZXRCb2F0U3RhdGUoJ2NoaWNrZW4nKX0+XG4gICAgICAgICAgPENoaWNrZW4gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9eydjb3JuJ30gYXJpYS1kZXNjcmliZWRieT1cInRvb2x0aXBcIiBvbkNsaWNrPXsoKSA9PiBtb3ZlSXRlbSgnY29ybicpfT5cbiAgICAgICAgPGRpdiBpZD17J3Rvb2x0aXAnfSByb2xlPVwidG9vbHRpcFwiIGNsYXNzTmFtZT17J2JnLXdoaXRlIHAtMid9PkkgZG9uJ3Qgd2FudCB0byBkaWUhPC9kaXY+XG4gICAgICAgICAgPENvcm4gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9eydib2F0J30gY2xhc3NOYW1lPXsnZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1lbmQnfSBvbkNsaWNrPXttb3ZlQm9hdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncG9zaXRpb24tcmVsYXRpdmUnfT5cbiAgICAgICAgICA8RmFybWVyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3Bvc2l0aW9uLWFic29sdXRlJ30+XG4gICAgICAgICAgPEltYWdlIFxuICAgICAgICAgICAgc3JjPXtjb3JufSBcbiAgICAgICAgICAgIGFsdD1cIlRoZSBjb3JuXCIgXG4gICAgICAgICAgICB3aWR0aD17MTEwfVxuICAgICAgICAgICAgaGVpZ2h0PXsxNTB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncG9zaXRpb24tYWJzb2x1dGUnfT5cbiAgICAgICAgICA8Qm9hdCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgICB7LyogPEltYWdlIHNyYz17ZmFyU2hvcmV9IGFsdD1cIlRoZSBmYXIgc2hvcmVcIiAvPiAqL31cbiAgICAgIDwvbWFpbj5cbiAgICApIFxuICB9XG59XG5cbi8vICAgZnVuY3Rpb24gQm9hdFN0YXRlKGl0ZW0pIHtcbi8vICAgICBjb25zb2xlLmxvZyhpdGVtKVxuLy8gICAgIHN3aXRjaChpdGVtKSB7XG4vLyAgICAgICBjYXNlICdmb3gnOlxuLy8gICAgICAgICByZXR1cm4gPEZveEluQm9hdCAvPjtcbi8vICAgICAgIGNhc2UgJ2NoaWNrZW4nOlxuLy8gICAgICAgICByZXR1cm4gPENoaWNrZW5JbkJvYXQgLz47XG4vLyAgICAgICBjYXNlICdjb3JuJzogXG4vLyAgICAgICAgIHJldHVybiA8Q29ybkluQm9hdCAvPjtcbi8vICAgICAgIGRlZmF1bHQ6XG4vLyAgICAgICAgIHJldHVybiA8RW1wdHlCb2F0IC8+O1xuLy8gICB9XG4vLyB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});