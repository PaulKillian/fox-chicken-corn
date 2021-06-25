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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_images_near_shore_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/images/near-shore.png */ \"./public/images/near-shore.png\");\n/* harmony import */ var _public_images_far_shore_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/images/far-shore.png */ \"./public/images/far-shore.png\");\n/* harmony import */ var _components_allItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/allItems */ \"./pages/components/allItems.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_popover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/popover */ \"./pages/components/popover.js\");\n/* harmony import */ var _components_emptyBoat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/emptyBoat */ \"./pages/components/emptyBoat.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/zeal/Projects/gitfcc/fox-chicken-corn/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n      clickedItem = _useState[0],\n      setClickedItem = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n      itemInBoat = _useState2[0],\n      setItemInBoat = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    (0,_components_popover__WEBPACK_IMPORTED_MODULE_8__.default)();\n  });\n\n  var moveItem = function moveItem(item) {\n    setClickedItem(item);\n    var currentItem = document.getElementById(item);\n    currentItem.classList.add('hidden');\n  };\n\n  var moveBoat = function moveBoat() {\n    if (clickedItem === 'corn') {\n      setItemInBoat('corn');\n      var deadChicken = document.getElementById('chicken');\n      deadChicken.classList.add('hidden');\n    }\n\n    var boatImg = document.getElementById('boat');\n    boatImg.classList.toggle('boat-animation');\n  };\n\n  if (clickedItem === '') {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      className: 'd-flex main-height justify-content-start align-items-end landscape',\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'fox',\n        \"aria-describedby\": \"tooltip\",\n        onClick: function onClick() {\n          return moveItem('fox');\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Fox, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'chicken',\n        \"aria-describedby\": \"tooltip\",\n        onClick: function onClick() {\n          return moveItem('chicken');\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Chicken, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'corn',\n        \"aria-describedby\": \"tooltip\",\n        onClick: function onClick() {\n          return moveItem('corn');\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          id: 'tooltip',\n          role: \"tooltip\",\n          className: 'bg-white p-2',\n          children: \"I don't want to die!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Corn, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_emptyBoat__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this);\n  } else if (clickedItem !== '' && itemInBoat === 'corn') {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      className: 'd-flex main-height justify-content-start align-items-end landscape',\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'fox',\n        \"aria-describedby\": \"tooltip\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Fox, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'chicken',\n        \"aria-describedby\": \"tooltip\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Chicken, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'corn',\n        \"aria-describedby\": \"tooltip\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          id: 'tooltip',\n          role: \"tooltip\",\n          className: 'bg-white p-2',\n          children: \"I don't want to die!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Corn, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'boat',\n        className: 'd-flex flex-column justify-content-end',\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: 'position-relative farmer-position',\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Farmer, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: 'position-absolute',\n          children: _components_allItems__WEBPACK_IMPORTED_MODULE_5__.items.map(function (item) {\n            if (item.alt === clickedItem) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: item.src,\n                alt: item.alt,\n                width: item.width,\n                height: item.height\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 72,\n                columnNumber: 19\n              }, _this);\n            }\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: 'position-absolute',\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Boat, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, this);\n  } else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      className: 'd-flex main-height justify-content-start align-items-end landscape',\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'fox',\n        \"aria-describedby\": \"tooltip\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Fox, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'chicken',\n        \"aria-describedby\": \"tooltip\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Chicken, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'corn',\n        \"aria-describedby\": \"tooltip\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          id: 'tooltip',\n          role: \"tooltip\",\n          className: 'bg-white p-2',\n          children: \"I don't want to die!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Corn, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'boat',\n        className: 'd-flex flex-column justify-content-end',\n        onClick: moveBoat,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: 'position-relative farmer-position',\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Farmer, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 104,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: 'position-absolute',\n          children: _components_allItems__WEBPACK_IMPORTED_MODULE_5__.items.map(function (item) {\n            if (item.alt === clickedItem) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: item.src,\n                alt: item.alt,\n                width: item.width,\n                height: item.height\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 110,\n                columnNumber: 17\n              }, _this);\n            }\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: 'position-absolute',\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Boat, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 121,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 120,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }, this);\n  }\n} //   function Boat(item) {\n//     console.log(item)\n//     switch(item) {\n//       case 'fox':\n//         return <FoxInBoat />;\n//       case 'chicken':\n//         return <ChickenInBoat />;\n//       case 'corn': \n//         return <CornInBoat />;\n//       default:\n//         return <EmptyBoat />;\n//   }\n// }\n\n_s(Home, \"AvG54wbzWX0yKPy1scGV0TG+22A=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJjbGlja2VkSXRlbSIsInNldENsaWNrZWRJdGVtIiwiaXRlbUluQm9hdCIsInNldEl0ZW1JbkJvYXQiLCJ1c2VFZmZlY3QiLCJQb3BvdmVyIiwibW92ZUl0ZW0iLCJpdGVtIiwiY3VycmVudEl0ZW0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwiYWRkIiwibW92ZUJvYXQiLCJkZWFkQ2hpY2tlbiIsImJvYXRJbWciLCJ0b2dnbGUiLCJpdGVtcyIsImFsdCIsInNyYyIsIndpZHRoIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUNTQywrQ0FBUSxDQUFDLEVBQUQsQ0FEakI7QUFBQSxNQUN0QkMsV0FEc0I7QUFBQSxNQUNUQyxjQURTOztBQUFBLG1CQUVPRiwrQ0FBUSxDQUFDLEVBQUQsQ0FGZjtBQUFBLE1BRXRCRyxVQUZzQjtBQUFBLE1BRVZDLGFBRlU7O0FBRzdCQyxrREFBUyxDQUFDLFlBQU07QUFDZEMsZ0VBQU87QUFDUixHQUZRLENBQVQ7O0FBSUEsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRCxFQUFVO0FBQ3pCTixrQkFBYyxDQUFDTSxJQUFELENBQWQ7QUFDQSxRQUFNQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QkgsSUFBeEIsQ0FBcEI7QUFDQUMsZUFBVyxDQUFDRyxTQUFaLENBQXNCQyxHQUF0QixDQUEwQixRQUExQjtBQUNELEdBSkQ7O0FBTUEsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixRQUFHYixXQUFXLEtBQUssTUFBbkIsRUFBMkI7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ZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgbmVhclNob3JlIGZyb20gJy4uL3B1YmxpYy9pbWFnZXMvbmVhci1zaG9yZS5wbmcnXG5pbXBvcnQgZmFyU2hvcmUgZnJvbSAnLi4vcHVibGljL2ltYWdlcy9mYXItc2hvcmUucG5nJ1xuaW1wb3J0IHtGb3gsIENoaWNrZW4sIENvcm4sIEJvYXQsIEZhcm1lciwgaXRlbXN9IGZyb20gJy4vY29tcG9uZW50cy9hbGxJdGVtcydcbmltcG9ydCAkLCB7IGV2ZW50IH0gZnJvbSBcImpxdWVyeVwiO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcydcbmltcG9ydCBQb3BvdmVyIGZyb20gJy4vY29tcG9uZW50cy9wb3BvdmVyJ1xuaW1wb3J0IEVtcHR5Qm9hdCBmcm9tICcuL2NvbXBvbmVudHMvZW1wdHlCb2F0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbY2xpY2tlZEl0ZW0sIHNldENsaWNrZWRJdGVtXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbaXRlbUluQm9hdCwgc2V0SXRlbUluQm9hdF0gPSB1c2VTdGF0ZSgnJylcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBQb3BvdmVyKCk7XG4gIH0pXG5cbiAgY29uc3QgbW92ZUl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgIHNldENsaWNrZWRJdGVtKGl0ZW0pXG4gICAgY29uc3QgY3VycmVudEl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVtKTtcbiAgICBjdXJyZW50SXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICB9XG5cbiAgY29uc3QgbW92ZUJvYXQgPSAoKSA9PiB7XG4gICAgaWYoY2xpY2tlZEl0ZW0gPT09ICdjb3JuJykge1xuICAgICAgc2V0SXRlbUluQm9hdCgnY29ybicpXG4gICAgICBjb25zdCBkZWFkQ2hpY2tlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGlja2VuJyk7XG4gICAgICBkZWFkQ2hpY2tlbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIH1cbiAgICBjb25zdCBib2F0SW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXQnKVxuICAgIGJvYXRJbWcuY2xhc3NMaXN0LnRvZ2dsZSgnYm9hdC1hbmltYXRpb24nKVxuICB9XG5cbiAgaWYoY2xpY2tlZEl0ZW0gPT09ICcnKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17J2QtZmxleCBtYWluLWhlaWdodCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnQgYWxpZ24taXRlbXMtZW5kIGxhbmRzY2FwZSd9PlxuICAgICAgICA8ZGl2IGlkPXsnZm94J30gYXJpYS1kZXNjcmliZWRieT1cInRvb2x0aXBcIiBvbkNsaWNrPXsoKSA9PiBtb3ZlSXRlbSgnZm94Jyl9PlxuICAgICAgICAgIDxGb3ggLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9eydjaGlja2VuJ30gYXJpYS1kZXNjcmliZWRieT1cInRvb2x0aXBcIiBvbkNsaWNrPXsoKSA9PiBtb3ZlSXRlbSgnY2hpY2tlbicpfT5cbiAgICAgICAgICA8Q2hpY2tlbiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD17J2Nvcm4nfSBhcmlhLWRlc2NyaWJlZGJ5PVwidG9vbHRpcFwiIG9uQ2xpY2s9eygpID0+IG1vdmVJdGVtKCdjb3JuJyl9PlxuICAgICAgICA8ZGl2IGlkPXsndG9vbHRpcCd9IHJvbGU9XCJ0b29sdGlwXCIgY2xhc3NOYW1lPXsnYmctd2hpdGUgcC0yJ30+SSBkb24ndCB3YW50IHRvIGRpZSE8L2Rpdj5cbiAgICAgICAgICA8Q29ybiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEVtcHR5Qm9hdCAvPlxuICAgICAgICB7LyogPEltYWdlIHNyYz17ZmFyU2hvcmV9IGFsdD1cIlRoZSBmYXIgc2hvcmVcIiAvPiAqL31cbiAgICAgIDwvbWFpbj5cbiAgICApIFxuICB9IGVsc2UgaWYgKGNsaWNrZWRJdGVtICE9PSAnJyAmJiBpdGVtSW5Cb2F0ID09PSAnY29ybicpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPG1haW4gY2xhc3NOYW1lPXsnZC1mbGV4IG1haW4taGVpZ2h0IGp1c3RpZnktY29udGVudC1zdGFydCBhbGlnbi1pdGVtcy1lbmQgbGFuZHNjYXBlJ30+XG4gICAgICAgICAgPGRpdiBpZD17J2ZveCd9IGFyaWEtZGVzY3JpYmVkYnk9XCJ0b29sdGlwXCI+XG4gICAgICAgICAgICA8Rm94IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBpZD17J2NoaWNrZW4nfSBhcmlhLWRlc2NyaWJlZGJ5PVwidG9vbHRpcFwiID5cbiAgICAgICAgICAgIDxDaGlja2VuIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBpZD17J2Nvcm4nfSBhcmlhLWRlc2NyaWJlZGJ5PVwidG9vbHRpcFwiPlxuICAgICAgICAgIDxkaXYgaWQ9eyd0b29sdGlwJ30gcm9sZT1cInRvb2x0aXBcIiBjbGFzc05hbWU9eydiZy13aGl0ZSBwLTInfT5JIGRvbid0IHdhbnQgdG8gZGllITwvZGl2PlxuICAgICAgICAgICAgPENvcm4gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGlkPXsnYm9hdCd9IGNsYXNzTmFtZT17J2QtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtZW5kJ30gPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncG9zaXRpb24tcmVsYXRpdmUgZmFybWVyLXBvc2l0aW9uJ30+XG4gICAgICAgICAgICA8RmFybWVyIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydwb3NpdGlvbi1hYnNvbHV0ZSd9PlxuICAgICAgICAgICAge2l0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgaWYoaXRlbS5hbHQgPT09IGNsaWNrZWRJdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLnNyY30gXG4gICAgICAgICAgICAgICAgICAgIGFsdD17aXRlbS5hbHR9IFxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17aXRlbS53aWR0aH1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtpdGVtLmhlaWdodH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydwb3NpdGlvbi1hYnNvbHV0ZSd9PlxuICAgICAgICAgICAgPEJvYXQgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIDxJbWFnZSBzcmM9e2ZhclNob3JlfSBhbHQ9XCJUaGUgZmFyIHNob3JlXCIgLz4gKi99XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPG1haW4gY2xhc3NOYW1lPXsnZC1mbGV4IG1haW4taGVpZ2h0IGp1c3RpZnktY29udGVudC1zdGFydCBhbGlnbi1pdGVtcy1lbmQgbGFuZHNjYXBlJ30+XG4gICAgICAgIDxkaXYgaWQ9eydmb3gnfSBhcmlhLWRlc2NyaWJlZGJ5PVwidG9vbHRpcFwiPlxuICAgICAgICAgIDxGb3ggLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9eydjaGlja2VuJ30gYXJpYS1kZXNjcmliZWRieT1cInRvb2x0aXBcIiA+XG4gICAgICAgICAgPENoaWNrZW4gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9eydjb3JuJ30gYXJpYS1kZXNjcmliZWRieT1cInRvb2x0aXBcIj5cbiAgICAgICAgPGRpdiBpZD17J3Rvb2x0aXAnfSByb2xlPVwidG9vbHRpcFwiIGNsYXNzTmFtZT17J2JnLXdoaXRlIHAtMid9PkkgZG9uJ3Qgd2FudCB0byBkaWUhPC9kaXY+XG4gICAgICAgICAgPENvcm4gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9eydib2F0J30gY2xhc3NOYW1lPXsnZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1lbmQnfSBvbkNsaWNrPXttb3ZlQm9hdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncG9zaXRpb24tcmVsYXRpdmUgZmFybWVyLXBvc2l0aW9uJ30+XG4gICAgICAgICAgPEZhcm1lciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydwb3NpdGlvbi1hYnNvbHV0ZSd9PlxuICAgICAgICAgIHtpdGVtcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICBpZihpdGVtLmFsdCA9PT0gY2xpY2tlZEl0ZW0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uc3JjfSBcbiAgICAgICAgICAgICAgICAgIGFsdD17aXRlbS5hbHR9IFxuICAgICAgICAgICAgICAgICAgd2lkdGg9e2l0ZW0ud2lkdGh9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9e2l0ZW0uaGVpZ2h0fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3Bvc2l0aW9uLWFic29sdXRlJ30+XG4gICAgICAgICAgPEJvYXQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgICAgey8qIDxJbWFnZSBzcmM9e2ZhclNob3JlfSBhbHQ9XCJUaGUgZmFyIHNob3JlXCIgLz4gKi99XG4gICAgICA8L21haW4+XG4gICAgKVxuICB9XG59XG5cbi8vICAgZnVuY3Rpb24gQm9hdChpdGVtKSB7XG4vLyAgICAgY29uc29sZS5sb2coaXRlbSlcbi8vICAgICBzd2l0Y2goaXRlbSkge1xuLy8gICAgICAgY2FzZSAnZm94Jzpcbi8vICAgICAgICAgcmV0dXJuIDxGb3hJbkJvYXQgLz47XG4vLyAgICAgICBjYXNlICdjaGlja2VuJzpcbi8vICAgICAgICAgcmV0dXJuIDxDaGlja2VuSW5Cb2F0IC8+O1xuLy8gICAgICAgY2FzZSAnY29ybic6IFxuLy8gICAgICAgICByZXR1cm4gPENvcm5JbkJvYXQgLz47XG4vLyAgICAgICBkZWZhdWx0OlxuLy8gICAgICAgICByZXR1cm4gPEVtcHR5Qm9hdCAvPjtcbi8vICAgfVxuLy8gfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});