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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_images_near_shore_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/images/near-shore.png */ \"./public/images/near-shore.png\");\n/* harmony import */ var _public_images_far_shore_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/images/far-shore.png */ \"./public/images/far-shore.png\");\n/* harmony import */ var _public_images_poof_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/images/poof.png */ \"./public/images/poof.png\");\n/* harmony import */ var _components_allItems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/allItems */ \"./pages/components/allItems.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_popover__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/popover */ \"./pages/components/popover.js\");\n/* harmony import */ var _components_emptyBoat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/emptyBoat */ \"./pages/components/emptyBoat.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/zeal/Projects/gitfcc/fox-chicken-corn/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n      clickedItem = _useState[0],\n      setClickedItem = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n      itemInBoat = _useState2[0],\n      setItemInBoat = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    (0,_components_popover__WEBPACK_IMPORTED_MODULE_9__.default)();\n  });\n\n  var moveItem = function moveItem(item) {\n    setClickedItem(item);\n    var currentItem = document.getElementById(item);\n    currentItem.classList.add('hidden');\n  };\n\n  var moveBoat = function moveBoat() {\n    if (clickedItem === 'corn') {\n      setItemInBoat('corn');\n      var deadChicken = document.getElementById('chicken');\n      deadChicken.classList.add('dead');\n    }\n\n    var boatImg = document.getElementById('boat');\n    boatImg.classList.toggle('boat-animation');\n  };\n\n  if (clickedItem === '') {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      className: 'd-flex main-height justify-content-start align-items-end landscape',\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'fox',\n        \"aria-describedby\": \"tooltip\",\n        onClick: function onClick() {\n          return moveItem('fox');\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_6__.Fox, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'chicken',\n        \"aria-describedby\": \"tooltip\",\n        onClick: function onClick() {\n          return moveItem('chicken');\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_6__.Chicken, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'corn',\n        \"aria-describedby\": \"tooltip\",\n        onClick: function onClick() {\n          return moveItem('corn');\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          id: 'tooltip',\n          role: \"tooltip\",\n          className: 'bg-white p-2',\n          children: \"I don't want to die!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_6__.Corn, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_emptyBoat__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this);\n  } else if (clickedItem !== '' && itemInBoat === 'corn') {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      className: 'd-flex main-height justify-content-start align-items-end landscape',\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'fox',\n        \"aria-describedby\": \"tooltip\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_6__.Fox, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n        src: _public_images_poof_png__WEBPACK_IMPORTED_MODULE_5__.default,\n        alt: \"Poof\",\n        width: 200,\n        height: 200\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'chicken',\n        \"aria-describedby\": \"tooltip\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_6__.Chicken, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'corn',\n        \"aria-describedby\": \"tooltip\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          id: 'tooltip',\n          role: \"tooltip\",\n          className: 'bg-white p-2',\n          children: \"I don't want to die!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'boat',\n        className: 'd-flex flex-column justify-content-end',\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: 'position-relative farmer-position',\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_6__.Farmer, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: 'position-absolute',\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_6__.Corn, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: 'position-absolute',\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_6__.Boat, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, this);\n  } else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      className: 'd-flex main-height justify-content-start align-items-end landscape',\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'fox',\n        \"aria-describedby\": \"tooltip\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_6__.Fox, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'chicken',\n        \"aria-describedby\": \"tooltip\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_6__.Chicken, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'corn',\n        \"aria-describedby\": \"tooltip\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          id: 'tooltip',\n          role: \"tooltip\",\n          className: 'bg-white p-2',\n          children: \"I don't want to die!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_6__.Corn, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'boat',\n        className: 'd-flex flex-column justify-content-end',\n        onClick: moveBoat,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: 'position-relative farmer-position',\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_6__.Farmer, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 99,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: 'position-absolute',\n          children: _components_allItems__WEBPACK_IMPORTED_MODULE_6__.items.map(function (item) {\n            if (item.alt === clickedItem) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: item.src,\n                alt: item.alt,\n                width: item.width,\n                height: item.height\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 105,\n                columnNumber: 17\n              }, _this);\n            }\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: 'position-absolute',\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_6__.Boat, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 116,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }, this);\n  }\n} //   function Boat(item) {\n//     console.log(item)\n//     switch(item) {\n//       case 'fox':\n//         return <FoxInBoat />;\n//       case 'chicken':\n//         return <ChickenInBoat />;\n//       case 'corn': \n//         return <CornInBoat />;\n//       default:\n//         return <EmptyBoat />;\n//   }\n// }\n\n_s(Home, \"AvG54wbzWX0yKPy1scGV0TG+22A=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJjbGlja2VkSXRlbSIsInNldENsaWNrZWRJdGVtIiwiaXRlbUluQm9hdCIsInNldEl0ZW1JbkJvYXQiLCJ1c2VFZmZlY3QiLCJQb3BvdmVyIiwibW92ZUl0ZW0iLCJpdGVtIiwiY3VycmVudEl0ZW0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwiYWRkIiwibW92ZUJvYXQiLCJkZWFkQ2hpY2tlbiIsImJvYXRJbWciLCJ0b2dnbGUiLCJwb29mIiwiaXRlbXMiLCJhbHQiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDU0MsK0NBQVEsQ0FBQyxFQUFELENBRGpCO0FBQUEsTUFDdEJDLFdBRHNCO0FBQUEsTUFDVEMsY0FEUzs7QUFBQSxtQkFFT0YsK0NBQVEsQ0FBQyxFQUFELENBRmY7QUFBQSxNQUV0QkcsVUFGc0I7QUFBQSxNQUVWQyxhQUZVOztBQUc3QkMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RDLGdFQUFPO0FBQ1IsR0FGUSxDQUFUOztBQUlBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLElBQUQsRUFBVTtBQUN6Qk4sa0JBQWMsQ0FBQ00sSUFBRCxDQUFkO0FBQ0EsUUFBTUMsV0FBVyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0JILElBQXhCLENBQXBCO0FBQ0FDLGVBQVcsQ0FBQ0csU0FBWixDQUFzQkMsR0FBdEIsQ0FBMEIsUUFBMUI7QUFDRCxHQUpEOztBQU1BLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsUUFBR2IsV0FBVyxLQUFL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TyxFQUFFSixRQUEvRTtBQUFBLGdDQUNBO0FBQUssbUJBQVMsRUFBRSxtQ0FBaEI7QUFBQSxpQ0FDRSw4REFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEQSxlQUlBO0FBQUssbUJBQVMsRUFBRSxtQkFBaEI7QUFBQSxvQkFDR0ssMkRBQUEsQ0FBVSxVQUFBWCxJQUFJLEVBQUk7QUFDakIsZ0JBQUdBLElBQUksQ0FBQ1ksR0FBTCxLQUFhbkIsV0FBaEIsRUFBNkI7QUFDM0Isa0NBQ0UsOERBQUMsbURBQUQ7QUFDRSxtQkFBRyxFQUFFTyxJQUFJLENBQUNhLEdBRFo7QUFFRSxtQkFBRyxFQUFFYixJQUFJLENBQUNZLEdBRlo7QUFHRSxxQkFBSyxFQUFFWixJQUFJLENBQUNjLEtBSGQ7QUFJRSxzQkFBTSxFQUFFZCxJQUFJLENBQUNlO0FBSmY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERjtBQVFIO0FBQ0YsV0FYRTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkEsZUFrQkE7QUFBSyxtQkFBUyxFQUFFLG1CQUFoQjtBQUFBLGlDQUNFLDhEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWxCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQXFDRDtBQUNGLEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7R0E3SHdCeEIsSTs7S0FBQUEsSSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgbmVhclNob3JlIGZyb20gJy4uL3B1YmxpYy9pbWFnZXMvbmVhci1zaG9yZS5wbmcnXG5pbXBvcnQgZmFyU2hvcmUgZnJvbSAnLi4vcHVibGljL2ltYWdlcy9mYXItc2hvcmUucG5nJ1xuaW1wb3J0IHBvb2YgZnJvbSAnLi4vcHVibGljL2ltYWdlcy9wb29mLnBuZydcbmltcG9ydCB7Rm94LCBDaGlja2VuLCBDb3JuLCBCb2F0LCBGYXJtZXIsIGl0ZW1zfSBmcm9tICcuL2NvbXBvbmVudHMvYWxsSXRlbXMnXG5pbXBvcnQgJCwgeyBldmVudCB9IGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3MnXG5pbXBvcnQgUG9wb3ZlciBmcm9tICcuL2NvbXBvbmVudHMvcG9wb3ZlcidcbmltcG9ydCBFbXB0eUJvYXQgZnJvbSAnLi9jb21wb25lbnRzL2VtcHR5Qm9hdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2NsaWNrZWRJdGVtLCBzZXRDbGlja2VkSXRlbV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2l0ZW1JbkJvYXQsIHNldEl0ZW1JbkJvYXRdID0gdXNlU3RhdGUoJycpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgUG9wb3ZlcigpO1xuICB9KVxuXG4gIGNvbnN0IG1vdmVJdGVtID0gKGl0ZW0pID0+IHtcbiAgICBzZXRDbGlja2VkSXRlbShpdGVtKVxuICAgIGNvbnN0IGN1cnJlbnRJdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbSk7XG4gICAgY3VycmVudEl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgfVxuXG4gIGNvbnN0IG1vdmVCb2F0ID0gKCkgPT4ge1xuICAgIGlmKGNsaWNrZWRJdGVtID09PSAnY29ybicpIHtcbiAgICAgIHNldEl0ZW1JbkJvYXQoJ2Nvcm4nKVxuICAgICAgY29uc3QgZGVhZENoaWNrZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hpY2tlbicpO1xuICAgICAgZGVhZENoaWNrZW4uY2xhc3NMaXN0LmFkZCgnZGVhZCcpXG4gICAgfVxuICAgIGNvbnN0IGJvYXRJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hdCcpXG4gICAgYm9hdEltZy5jbGFzc0xpc3QudG9nZ2xlKCdib2F0LWFuaW1hdGlvbicpXG4gIH1cblxuICBpZihjbGlja2VkSXRlbSA9PT0gJycpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPG1haW4gY2xhc3NOYW1lPXsnZC1mbGV4IG1haW4taGVpZ2h0IGp1c3RpZnktY29udGVudC1zdGFydCBhbGlnbi1pdGVtcy1lbmQgbGFuZHNjYXBlJ30+XG4gICAgICAgIDxkaXYgaWQ9eydmb3gnfSBhcmlhLWRlc2NyaWJlZGJ5PVwidG9vbHRpcFwiIG9uQ2xpY2s9eygpID0+IG1vdmVJdGVtKCdmb3gnKX0+XG4gICAgICAgICAgPEZveCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD17J2NoaWNrZW4nfSBhcmlhLWRlc2NyaWJlZGJ5PVwidG9vbHRpcFwiIG9uQ2xpY2s9eygpID0+IG1vdmVJdGVtKCdjaGlja2VuJyl9PlxuICAgICAgICAgIDxDaGlja2VuIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPXsnY29ybid9IGFyaWEtZGVzY3JpYmVkYnk9XCJ0b29sdGlwXCIgb25DbGljaz17KCkgPT4gbW92ZUl0ZW0oJ2Nvcm4nKX0+XG4gICAgICAgIDxkaXYgaWQ9eyd0b29sdGlwJ30gcm9sZT1cInRvb2x0aXBcIiBjbGFzc05hbWU9eydiZy13aGl0ZSBwLTInfT5JIGRvbid0IHdhbnQgdG8gZGllITwvZGl2PlxuICAgICAgICAgIDxDb3JuIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8RW1wdHlCb2F0IC8+XG4gICAgICAgIHsvKiA8SW1hZ2Ugc3JjPXtmYXJTaG9yZX0gYWx0PVwiVGhlIGZhciBzaG9yZVwiIC8+ICovfVxuICAgICAgPC9tYWluPlxuICAgICkgXG4gIH0gZWxzZSBpZiAoY2xpY2tlZEl0ZW0gIT09ICcnICYmIGl0ZW1JbkJvYXQgPT09ICdjb3JuJykge1xuICAgIHJldHVybiAoXG4gICAgICA8bWFpbiBjbGFzc05hbWU9eydkLWZsZXggbWFpbi1oZWlnaHQganVzdGlmeS1jb250ZW50LXN0YXJ0IGFsaWduLWl0ZW1zLWVuZCBsYW5kc2NhcGUnfT5cbiAgICAgICAgICA8ZGl2IGlkPXsnZm94J30gYXJpYS1kZXNjcmliZWRieT1cInRvb2x0aXBcIj5cbiAgICAgICAgICAgIDxGb3ggLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICAgIHNyYz17cG9vZn0gXG4gICAgICAgICAgICAgIGFsdD1cIlBvb2ZcIiBcbiAgICAgICAgICAgICAgd2lkdGg9ezIwMH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXsyMDB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgaWQ9eydjaGlja2VuJ30gYXJpYS1kZXNjcmliZWRieT1cInRvb2x0aXBcIiA+XG4gICAgICAgICAgICA8Q2hpY2tlbiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgaWQ9eydjb3JuJ30gYXJpYS1kZXNjcmliZWRieT1cInRvb2x0aXBcIj5cbiAgICAgICAgICA8ZGl2IGlkPXsndG9vbHRpcCd9IHJvbGU9XCJ0b29sdGlwXCIgY2xhc3NOYW1lPXsnYmctd2hpdGUgcC0yJ30+SSBkb24ndCB3YW50IHRvIGRpZSE8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGlkPXsnYm9hdCd9IGNsYXNzTmFtZT17J2QtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtZW5kJ30gPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncG9zaXRpb24tcmVsYXRpdmUgZmFybWVyLXBvc2l0aW9uJ30+XG4gICAgICAgICAgICA8RmFybWVyIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydwb3NpdGlvbi1hYnNvbHV0ZSd9PlxuICAgICAgICAgICAgPENvcm4gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3Bvc2l0aW9uLWFic29sdXRlJ30+XG4gICAgICAgICAgICA8Qm9hdCAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogPEltYWdlIHNyYz17ZmFyU2hvcmV9IGFsdD1cIlRoZSBmYXIgc2hvcmVcIiAvPiAqL31cbiAgICAgICAgPC9tYWluPlxuICAgICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8bWFpbiBjbGFzc05hbWU9eydkLWZsZXggbWFpbi1oZWlnaHQganVzdGlmeS1jb250ZW50LXN0YXJ0IGFsaWduLWl0ZW1zLWVuZCBsYW5kc2NhcGUnfT5cbiAgICAgICAgPGRpdiBpZD17J2ZveCd9IGFyaWEtZGVzY3JpYmVkYnk9XCJ0b29sdGlwXCI+XG4gICAgICAgICAgPEZveCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD17J2NoaWNrZW4nfSBhcmlhLWRlc2NyaWJlZGJ5PVwidG9vbHRpcFwiID5cbiAgICAgICAgICA8Q2hpY2tlbiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD17J2Nvcm4nfSBhcmlhLWRlc2NyaWJlZGJ5PVwidG9vbHRpcFwiPlxuICAgICAgICA8ZGl2IGlkPXsndG9vbHRpcCd9IHJvbGU9XCJ0b29sdGlwXCIgY2xhc3NOYW1lPXsnYmctd2hpdGUgcC0yJ30+SSBkb24ndCB3YW50IHRvIGRpZSE8L2Rpdj5cbiAgICAgICAgICA8Q29ybiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD17J2JvYXQnfSBjbGFzc05hbWU9eydkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWVuZCd9IG9uQ2xpY2s9e21vdmVCb2F0fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydwb3NpdGlvbi1yZWxhdGl2ZSBmYXJtZXItcG9zaXRpb24nfT5cbiAgICAgICAgICA8RmFybWVyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3Bvc2l0aW9uLWFic29sdXRlJ30+XG4gICAgICAgICAge2l0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmKGl0ZW0uYWx0ID09PSBjbGlja2VkSXRlbSkge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5zcmN9IFxuICAgICAgICAgICAgICAgICAgYWx0PXtpdGVtLmFsdH0gXG4gICAgICAgICAgICAgICAgICB3aWR0aD17aXRlbS53aWR0aH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17aXRlbS5oZWlnaHR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncG9zaXRpb24tYWJzb2x1dGUnfT5cbiAgICAgICAgICA8Qm9hdCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgICB7LyogPEltYWdlIHNyYz17ZmFyU2hvcmV9IGFsdD1cIlRoZSBmYXIgc2hvcmVcIiAvPiAqL31cbiAgICAgIDwvbWFpbj5cbiAgICApXG4gIH1cbn1cblxuLy8gICBmdW5jdGlvbiBCb2F0KGl0ZW0pIHtcbi8vICAgICBjb25zb2xlLmxvZyhpdGVtKVxuLy8gICAgIHN3aXRjaChpdGVtKSB7XG4vLyAgICAgICBjYXNlICdmb3gnOlxuLy8gICAgICAgICByZXR1cm4gPEZveEluQm9hdCAvPjtcbi8vICAgICAgIGNhc2UgJ2NoaWNrZW4nOlxuLy8gICAgICAgICByZXR1cm4gPENoaWNrZW5JbkJvYXQgLz47XG4vLyAgICAgICBjYXNlICdjb3JuJzogXG4vLyAgICAgICAgIHJldHVybiA8Q29ybkluQm9hdCAvPjtcbi8vICAgICAgIGRlZmF1bHQ6XG4vLyAgICAgICAgIHJldHVybiA8RW1wdHlCb2F0IC8+O1xuLy8gICB9XG4vLyB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});