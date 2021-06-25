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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_images_near_shore_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/images/near-shore.png */ \"./public/images/near-shore.png\");\n/* harmony import */ var _public_images_far_shore_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/images/far-shore.png */ \"./public/images/far-shore.png\");\n/* harmony import */ var _components_allItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/allItems */ \"./pages/components/allItems.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_popover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/popover */ \"./pages/components/popover.js\");\n/* harmony import */ var _components_emptyBoat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/emptyBoat */ \"./pages/components/emptyBoat.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/zeal/Projects/gitfcc/fox-chicken-corn/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n      clickedItem = _useState[0],\n      setClickedItem = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),\n      itemInBoat = _useState2[0],\n      setItemInBoat = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    (0,_components_popover__WEBPACK_IMPORTED_MODULE_8__.default)();\n  });\n  particlesJS.load('particles-js', 'assets/particles.json', function () {\n    console.log('callback - particles.js config loaded');\n  });\n\n  var moveItem = function moveItem(item) {\n    setClickedItem(item);\n    var currentItem = document.getElementById(item);\n    currentItem.classList.add('hidden');\n  };\n\n  var moveBoat = function moveBoat() {\n    var boatImg = document.getElementById('boat');\n    boatImg.classList.toggle('boat-animation');\n  };\n\n  if (clickedItem === '') {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      id: \"particles-js\",\n      className: 'd-flex main-height justify-content-start align-items-end landscape',\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'fox',\n        \"aria-describedby\": \"tooltip\",\n        onClick: function onClick() {\n          return moveItem('fox');\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Fox, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'chicken',\n        \"aria-describedby\": \"tooltip\",\n        onClick: function onClick() {\n          return moveItem('chicken');\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Chicken, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'corn',\n        \"aria-describedby\": \"tooltip\",\n        onClick: function onClick() {\n          return moveItem('corn');\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          id: 'tooltip',\n          role: \"tooltip\",\n          className: 'bg-white p-2',\n          children: \"I don't want to die!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Corn, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_emptyBoat__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, this);\n  } else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      id: \"particles-js\",\n      className: 'd-flex main-height justify-content-start align-items-end landscape',\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'fox',\n        \"aria-describedby\": \"tooltip\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Fox, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'chicken',\n        \"aria-describedby\": \"tooltip\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Chicken, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'corn',\n        \"aria-describedby\": \"tooltip\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          id: 'tooltip',\n          role: \"tooltip\",\n          className: 'bg-white p-2',\n          children: \"I don't want to die!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Corn, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'boat',\n        className: 'd-flex flex-column justify-content-end',\n        onClick: moveBoat,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: 'position-relative farmer-position',\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Farmer, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: 'position-absolute',\n          children: _components_allItems__WEBPACK_IMPORTED_MODULE_5__.items.map(function (item) {\n            if (item.alt === clickedItem) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: item.src,\n                alt: item.alt,\n                width: item.width,\n                height: item.height\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 71,\n                columnNumber: 17\n              }, _this);\n            }\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: 'position-absolute',\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Boat, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, this);\n  }\n} //   function Boat(item) {\n//     console.log(item)\n//     switch(item) {\n//       case 'fox':\n//         return <FoxInBoat />;\n//       case 'chicken':\n//         return <ChickenInBoat />;\n//       case 'corn': \n//         return <CornInBoat />;\n//       default:\n//         return <EmptyBoat />;\n//   }\n// }\n\n_s(Home, \"1zYkzbOpns56dG8BqgKvF5PkrsU=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJjbGlja2VkSXRlbSIsInNldENsaWNrZWRJdGVtIiwiaXRlbUluQm9hdCIsInNldEl0ZW1JbkJvYXQiLCJ1c2VFZmZlY3QiLCJQb3BvdmVyIiwicGFydGljbGVzSlMiLCJsb2FkIiwiY29uc29sZSIsImxvZyIsIm1vdmVJdGVtIiwiaXRlbSIsImN1cnJlbnRJdGVtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsImFkZCIsIm1vdmVCb2F0IiwiYm9hdEltZyIsInRvZ2dsZSIsIml0ZW1zIiwiYWx0Iiwic3JjIiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1NDLCtDQUFRLENBQUMsRUFBRCxDQURqQjtBQUFBLE1BQ3RCQyxXQURzQjtBQUFBLE1BQ1RDLGNBRFM7O0FBQUEsbUJBRU9GLCtDQUFRLENBQUMsRUFBRCxDQUZmO0FBQUEsTUFFdEJHLFVBRnNCO0FBQUEsTUFFVkMsYUFGVTs7QUFHN0JDLGtEQUFTLENBQUMsWUFBTTtBQUNkQyxnRUFBTztBQUNSLEdBRlEsQ0FBVDtBQUlBQyxhQUFXLENBQUNDLElBQVosQ0FBaUIsY0FBakIsRUFBaUMsdUJBQWpDLEVBQTBELFlBQVc7QUFDbkVDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHVDQUFaO0FBQ0QsR0FGRDs7QUFJQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxJQUFELEVBQVU7QUFDekJWLGtCQUFjLENBQUNVLElBQUQsQ0FBZDtBQUNBLFFBQU1DLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCSCxJQUF4QixDQUFwQjtBQUNB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STtBQUNqQixnQkFBR0EsSUFBSSxDQUFDVSxHQUFMLEtBQWFyQixXQUFoQixFQUE2QjtBQUMzQixrQ0FDRSw4REFBQyxtREFBRDtBQUNFLG1CQUFHLEVBQUVXLElBQUksQ0FBQ1csR0FEWjtBQUVFLG1CQUFHLEVBQUVYLElBQUksQ0FBQ1UsR0FGWjtBQUdFLHFCQUFLLEVBQUVWLElBQUksQ0FBQ1ksS0FIZDtBQUlFLHNCQUFNLEVBQUVaLElBQUksQ0FBQ2E7QUFKZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGO0FBUUg7QUFDRixXQVhFO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKQSxlQWtCQTtBQUFLLG1CQUFTLEVBQUUsbUJBQWhCO0FBQUEsaUNBQ0UsOERBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBcUNEO0FBQ0YsQyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztHQTVGd0IxQixJOztLQUFBQSxJIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBuZWFyU2hvcmUgZnJvbSAnLi4vcHVibGljL2ltYWdlcy9uZWFyLXNob3JlLnBuZydcbmltcG9ydCBmYXJTaG9yZSBmcm9tICcuLi9wdWJsaWMvaW1hZ2VzL2Zhci1zaG9yZS5wbmcnXG5pbXBvcnQge0ZveCwgQ2hpY2tlbiwgQ29ybiwgQm9hdCwgRmFybWVyLCBpdGVtc30gZnJvbSAnLi9jb21wb25lbnRzL2FsbEl0ZW1zJ1xuaW1wb3J0ICQsIHsgZXZlbnQgfSBmcm9tIFwianF1ZXJ5XCI7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJ1xuaW1wb3J0IFBvcG92ZXIgZnJvbSAnLi9jb21wb25lbnRzL3BvcG92ZXInXG5pbXBvcnQgRW1wdHlCb2F0IGZyb20gJy4vY29tcG9uZW50cy9lbXB0eUJvYXQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtjbGlja2VkSXRlbSwgc2V0Q2xpY2tlZEl0ZW1dID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtpdGVtSW5Cb2F0LCBzZXRJdGVtSW5Cb2F0XSA9IHVzZVN0YXRlKHt9KVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIFBvcG92ZXIoKTtcbiAgfSlcblxuICBwYXJ0aWNsZXNKUy5sb2FkKCdwYXJ0aWNsZXMtanMnLCAnYXNzZXRzL3BhcnRpY2xlcy5qc29uJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coJ2NhbGxiYWNrIC0gcGFydGljbGVzLmpzIGNvbmZpZyBsb2FkZWQnKTtcbiAgfSk7XG5cbiAgY29uc3QgbW92ZUl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgIHNldENsaWNrZWRJdGVtKGl0ZW0pXG4gICAgY29uc3QgY3VycmVudEl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVtKTtcbiAgICBjdXJyZW50SXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICB9XG5cbiAgY29uc3QgbW92ZUJvYXQgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9hdEltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2F0JylcbiAgICBib2F0SW1nLmNsYXNzTGlzdC50b2dnbGUoJ2JvYXQtYW5pbWF0aW9uJylcbiAgfVxuXG4gIGlmKGNsaWNrZWRJdGVtID09PSAnJykge1xuICAgIHJldHVybiAoXG4gICAgICA8bWFpbiBpZD1cInBhcnRpY2xlcy1qc1wiIGNsYXNzTmFtZT17J2QtZmxleCBtYWluLWhlaWdodCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnQgYWxpZ24taXRlbXMtZW5kIGxhbmRzY2FwZSd9PlxuICAgICAgICA8ZGl2IGlkPXsnZm94J30gYXJpYS1kZXNjcmliZWRieT1cInRvb2x0aXBcIiBvbkNsaWNrPXsoKSA9PiBtb3ZlSXRlbSgnZm94Jyl9PlxuICAgICAgICAgIDxGb3ggLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9eydjaGlja2VuJ30gYXJpYS1kZXNjcmliZWRieT1cInRvb2x0aXBcIiBvbkNsaWNrPXsoKSA9PiBtb3ZlSXRlbSgnY2hpY2tlbicpfT5cbiAgICAgICAgICA8Q2hpY2tlbiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD17J2Nvcm4nfSBhcmlhLWRlc2NyaWJlZGJ5PVwidG9vbHRpcFwiIG9uQ2xpY2s9eygpID0+IG1vdmVJdGVtKCdjb3JuJyl9PlxuICAgICAgICA8ZGl2IGlkPXsndG9vbHRpcCd9IHJvbGU9XCJ0b29sdGlwXCIgY2xhc3NOYW1lPXsnYmctd2hpdGUgcC0yJ30+SSBkb24ndCB3YW50IHRvIGRpZSE8L2Rpdj5cbiAgICAgICAgICA8Q29ybiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEVtcHR5Qm9hdCAvPlxuICAgICAgICB7LyogPEltYWdlIHNyYz17ZmFyU2hvcmV9IGFsdD1cIlRoZSBmYXIgc2hvcmVcIiAvPiAqL31cbiAgICAgIDwvbWFpbj5cbiAgICApIFxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8bWFpbiBpZD1cInBhcnRpY2xlcy1qc1wiIGNsYXNzTmFtZT17J2QtZmxleCBtYWluLWhlaWdodCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnQgYWxpZ24taXRlbXMtZW5kIGxhbmRzY2FwZSd9PlxuICAgICAgICA8ZGl2IGlkPXsnZm94J30gYXJpYS1kZXNjcmliZWRieT1cInRvb2x0aXBcIj5cbiAgICAgICAgICA8Rm94IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPXsnY2hpY2tlbid9IGFyaWEtZGVzY3JpYmVkYnk9XCJ0b29sdGlwXCIgPlxuICAgICAgICAgIDxDaGlja2VuIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPXsnY29ybid9IGFyaWEtZGVzY3JpYmVkYnk9XCJ0b29sdGlwXCI+XG4gICAgICAgIDxkaXYgaWQ9eyd0b29sdGlwJ30gcm9sZT1cInRvb2x0aXBcIiBjbGFzc05hbWU9eydiZy13aGl0ZSBwLTInfT5JIGRvbid0IHdhbnQgdG8gZGllITwvZGl2PlxuICAgICAgICAgIDxDb3JuIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPXsnYm9hdCd9IGNsYXNzTmFtZT17J2QtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtZW5kJ30gb25DbGljaz17bW92ZUJvYXR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3Bvc2l0aW9uLXJlbGF0aXZlIGZhcm1lci1wb3NpdGlvbid9PlxuICAgICAgICAgIDxGYXJtZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncG9zaXRpb24tYWJzb2x1dGUnfT5cbiAgICAgICAgICB7aXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYoaXRlbS5hbHQgPT09IGNsaWNrZWRJdGVtKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEltYWdlIFxuICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLnNyY30gXG4gICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0uYWx0fSBcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXtpdGVtLndpZHRofVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtpdGVtLmhlaWdodH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydwb3NpdGlvbi1hYnNvbHV0ZSd9PlxuICAgICAgICAgIDxCb2F0IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiA8SW1hZ2Ugc3JjPXtmYXJTaG9yZX0gYWx0PVwiVGhlIGZhciBzaG9yZVwiIC8+ICovfVxuICAgICAgPC9tYWluPlxuICAgICkgXG4gIH1cbn1cblxuLy8gICBmdW5jdGlvbiBCb2F0KGl0ZW0pIHtcbi8vICAgICBjb25zb2xlLmxvZyhpdGVtKVxuLy8gICAgIHN3aXRjaChpdGVtKSB7XG4vLyAgICAgICBjYXNlICdmb3gnOlxuLy8gICAgICAgICByZXR1cm4gPEZveEluQm9hdCAvPjtcbi8vICAgICAgIGNhc2UgJ2NoaWNrZW4nOlxuLy8gICAgICAgICByZXR1cm4gPENoaWNrZW5JbkJvYXQgLz47XG4vLyAgICAgICBjYXNlICdjb3JuJzogXG4vLyAgICAgICAgIHJldHVybiA8Q29ybkluQm9hdCAvPjtcbi8vICAgICAgIGRlZmF1bHQ6XG4vLyAgICAgICAgIHJldHVybiA8RW1wdHlCb2F0IC8+O1xuLy8gICB9XG4vLyB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});