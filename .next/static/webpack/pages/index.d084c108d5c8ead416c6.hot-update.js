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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_images_near_shore_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/images/near-shore.png */ \"./public/images/near-shore.png\");\n/* harmony import */ var _public_images_far_shore_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/images/far-shore.png */ \"./public/images/far-shore.png\");\n/* harmony import */ var _components_allItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/allItems */ \"./pages/components/allItems.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_popover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/popover */ \"./pages/components/popover.js\");\n/* harmony import */ var _components_moveItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/moveItem */ \"./pages/components/moveItem.js\");\n/* harmony import */ var _components_moveItem__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_moveItem__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_emptyBoat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/emptyBoat */ \"./pages/components/emptyBoat.js\");\n/* harmony import */ var _components_cornInBoat__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/cornInBoat */ \"./pages/components/cornInBoat.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/zeal/Projects/gitfcc/fox-chicken-corn/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n // import ItemsOnNearShore from './components/itemsOnNearShore'\n\n\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n      boat = _useState[0],\n      setBoat = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),\n      boatItem = _useState2[0],\n      setBoatItem = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    (0,_components_popover__WEBPACK_IMPORTED_MODULE_8__.default)();\n  });\n\n  var moveItem = function moveItem(item) {\n    setBoat(item);\n    var currentItem = document.getElementById(item);\n    currentItem.classList.add('hidden');\n    _components_allItems__WEBPACK_IMPORTED_MODULE_5__.items.forEach(function (currentItem) {\n      if (item == currentItem.src) {\n        setBoatItem(currentItem);\n      }\n    });\n    console.log(boatItem);\n  };\n\n  var moveBoat = function moveBoat() {\n    var boatImg = document.getElementById('boat');\n    boatImg.classList.toggle('boat-animation');\n  };\n\n  if (boat === '') {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      className: 'd-flex main-height justify-content-start align-items-end landscape',\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'fox',\n        \"aria-describedby\": \"tooltip\",\n        onClick: function onClick() {\n          return moveItem('fox');\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Fox, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'chicken',\n        \"aria-describedby\": \"tooltip\",\n        onClick: function onClick() {\n          return moveItem('chicken');\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Chicken, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'corn',\n        \"aria-describedby\": \"tooltip\",\n        onClick: function onClick() {\n          return moveItem('corn');\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          id: 'tooltip',\n          role: \"tooltip\",\n          className: 'bg-white p-2',\n          children: \"I don't want to die!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Corn, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_emptyBoat__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, this);\n  } else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      className: 'd-flex main-height justify-content-start align-items-end landscape',\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'fox',\n        \"aria-describedby\": \"tooltip\",\n        onClick: function onClick() {\n          return setBoat('fox');\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Fox, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'chicken',\n        \"aria-describedby\": \"tooltip\",\n        onClick: function onClick() {\n          return setBoat('chicken');\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Chicken, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'corn',\n        \"aria-describedby\": \"tooltip\",\n        onClick: function onClick() {\n          return moveItem('corn');\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          id: 'tooltip',\n          role: \"tooltip\",\n          className: 'bg-white p-2',\n          children: \"I don't want to die!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Corn, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'boat',\n        className: 'd-flex flex-column justify-content-end',\n        onClick: moveBoat,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: 'position-relative',\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Farmer, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: 'position-absolute',\n          children: _components_allItems__WEBPACK_IMPORTED_MODULE_5__.items.map(function (item) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n              src: item.src,\n              alt: item.alt,\n              width: item.width,\n              height: item.height\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 75,\n              columnNumber: 13\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: 'position-absolute',\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_allItems__WEBPACK_IMPORTED_MODULE_5__.Boat, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, this);\n  }\n} //   function Boat(item) {\n//     console.log(item)\n//     switch(item) {\n//       case 'fox':\n//         return <FoxInBoat />;\n//       case 'chicken':\n//         return <ChickenInBoat />;\n//       case 'corn': \n//         return <CornInBoat />;\n//       default:\n//         return <EmptyBoat />;\n//   }\n// }\n\n_s(Home, \"vNXACvK1vmOeKLaMvwKS+PYn2c8=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJib2F0Iiwic2V0Qm9hdCIsImJvYXRJdGVtIiwic2V0Qm9hdEl0ZW0iLCJ1c2VFZmZlY3QiLCJQb3BvdmVyIiwibW92ZUl0ZW0iLCJpdGVtIiwiY3VycmVudEl0ZW0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwiYWRkIiwiaXRlbXMiLCJzcmMiLCJjb25zb2xlIiwibG9nIiwibW92ZUJvYXQiLCJib2F0SW1nIiwidG9nZ2xlIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDTEMsK0NBQVEsQ0FBQyxFQUFELENBREg7QUFBQSxNQUN0QkMsSUFEc0I7QUFBQSxNQUNoQkMsT0FEZ0I7O0FBQUEsbUJBRUdGLCtDQUFRLENBQUMsRUFBRCxDQUZYO0FBQUEsTUFFdEJHLFFBRnNCO0FBQUEsTUFFWkMsV0FGWTs7QUFHN0JDLGtEQUFTLENBQUMsWUFBTTtBQUNkQyxnRUFBTztBQUNSLEdBRlEsQ0FBVDs7QUFJRixNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxJQUFELEVBQVU7QUFDekJOLFdBQU8sQ0FBQ00sSUFBRCxDQUFQO0FBQ0EsUUFBTUMsV0FBVyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0JILElBQXhCLENBQXBCO0FBQ0FDLGVBQVcsQ0FBQ0csU0FBWixDQUFzQkMsR0FBdEIsQ0FBMEIsUUFBMUI7QUFFQUMsbUVBQUEsQ0FBYyxVQUFBTCxXQUFXLEVBQUc7QUFDMUIsVUFBR0QsSUFBSSxJQUFJQyxXQUFXLENBQUNNLEdBQXZCLEVBQTRCO0FBQzFCWCxtQkFBVyxDQUFDSyxXQUFELENBQVg7QUFDRDtBQUNGLEtBSkQ7QUFLQU8sV0FBTyxDQUFDQyxHQUFSLENBQVlkLFFBQVo7QUFDRCxHQVhEOztBQWFBLE1BQU1lLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsUUFBTUMsT0FBTyxHQUFHVCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBaEI7QUFDQVEsV0FBTyxDQUFDUCxTQUFSLENBQWtCUSxNQUFsQixDQUF5QixnQkFBekI7QUFDRCxHQUhEOztBQUtFLE1BQUduQixJQUFJLEtBQUssRUFBWixFQUFnQjtBQUNkLHdCQUNFO0FBQU0sZUFBUyxFQUFFLG9FQUFqQjtBQUFBLDhCQUNFO0FBQUssVUFBRSxFQUFFLEtBQVQ7QUFBZ0IsNEJBQWlCLFNBQWpDO0FBQTJDLGVBQU8sRUFBRTtBQUFBLGlCQUFNTSxRQUFRLENBQUMsS0FBRCxDQUFkO0FBQUEsU0FBcEQ7QUFBQSwrQkFDRSw4REFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUU7QUFBSyxVQUFFLEVBQUUsU0FBVDtBQUFvQiw0QkFBaUIsU0FBckM7QUFBK0MsZUFBTyxFQUFFO0FBQUEsaUJBQU1BLFFBQVEsQ0FBQyxTQUFELENBQWQ7QUFBQSxTQUF4RDtBQUFBLCtCQUNFLDhEQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFPRTtBQUFLLFVBQUUsRUFBRSxNQUFUO0FBQWlCLDRCQUFpQixTQUFsQztBQUE0QyxlQUFPLEVBQUU7QUFBQSxpQkFBTUEsUUFBUSxDQUFDLE1BQUQsQ0FBZDtBQUFBLFNBQXJEO0FBQUEsZ0NBQ0E7QUFBSyxZQUFFLEVBQUUsU0FBVDtBQUFvQixjQUFJLEVBQUMsU0FBekI7QUFBbUMsbUJBQVMsRUFBRSxjQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEQSxlQUVFLDhEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEYsZUFXRSw4REFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFnQkQsR0FqQkQsTUFpQk87QUFDTCx3QkFDRTtBQUFNLGVBQVMsRUFBRSxvRUFBakI7QUFBQSw4QkFDRTtBQUFLLFVBQUUsRUFBRSxLQUFUO0FBQWdCLDRCQUFpQixTQUFqQztBQUEyQyxlQUFPLEVBQUU7QUFBQSxpQkFBTUwsT0FBTyxDQUFDLEtBQUQsQ0FBYjtBQUFBLFNBQXBEO0FBQUEsK0JBQ0UsOERBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFO0FBQUssVUFBRSxFQUFFLFNBQVQ7QUFBb0IsNEJBQWlCLFNBQXJDO0FBQStDLGVBQU8sRUFBRTtBQUFBLGlCQUFNQSxPQUFPLENBQUMsU0FBRCxDQUFiO0FBQUEsU0FBeEQ7QUFBQSwrQkFDRSw4REFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBT0U7QUFBSyxVQUFFLEVBQUUsTUFBVDtBQUFpQiw0QkFBaUIsU0FBbEM7QUFBNEMsZUFBTyxFQUFFO0FBQUEsaUJBQU1LLFFBQVEsQ0FBQyxNQUFELENBQWQ7QUFBQSxTQUFyRDtBQUFBLGdDQUNBO0FBQUssWUFBRSxFQUFFLFNBQVQ7QUFBb0IsY0FBSSxFQUFDLFNBQXpCO0FBQW1DLG1CQUFTLEVBQUUsY0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsZUFFRSw4REFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGLGVBV0U7QUFBSyxVQUFFLEVBQUUsTUFBVDtBQUFpQixpQkFBUyxFQUFFLHdDQUE1QjtBQUFzRSxlQUFPLEVBQUVXLFFBQS9FO0FBQUEsZ0NBQ0E7QUFBSyxtQkFBUyxFQUFFLG1CQUFoQjtBQUFBLGlDQUNFLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBLGVBSUE7QUFBSyxtQkFBUyxFQUFFLG1CQUFoQjtBQUFBLG9CQUNHSiwyREFBQSxDQUFVLFVBQUFOLElBQUk7QUFBQSxnQ0FDYiw4REFBQyxtREFBRDtBQUNFLGlCQUFHLEVBQUVBLElBQUksQ0FBQ08sR0FEWjtBQUVFLGlCQUFHLEVBQUVQLElBQUksQ0FBQ2EsR0FGWjtBQUdFLG1CQUFLLEVBQUViLElBQUksQ0FBQ2MsS0FIZDtBQUlFLG9CQUFNLEVBQUVkLElBQUksQ0FBQ2U7QUFKZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURhO0FBQUEsV0FBZDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkEsZUFjQTtBQUFLLG1CQUFTLEVBQUUsbUJBQWhCO0FBQUEsaUNBQ0UsOERBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFpQ0Q7QUFDRixDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0dBM0Z3QnhCLEk7O0tBQUFBLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IG5lYXJTaG9yZSBmcm9tICcuLi9wdWJsaWMvaW1hZ2VzL25lYXItc2hvcmUucG5nJ1xuaW1wb3J0IGZhclNob3JlIGZyb20gJy4uL3B1YmxpYy9pbWFnZXMvZmFyLXNob3JlLnBuZydcbmltcG9ydCB7Rm94LCBDaGlja2VuLCBDb3JuLCBCb2F0LCBGYXJtZXIsIGl0ZW1zfSBmcm9tICcuL2NvbXBvbmVudHMvYWxsSXRlbXMnXG5pbXBvcnQgJCwgeyBldmVudCB9IGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3MnXG5pbXBvcnQgUG9wb3ZlciBmcm9tICcuL2NvbXBvbmVudHMvcG9wb3ZlcidcbmltcG9ydCBNb3ZlSXRlbSBmcm9tICcuL2NvbXBvbmVudHMvbW92ZUl0ZW0nXG4vLyBpbXBvcnQgSXRlbXNPbk5lYXJTaG9yZSBmcm9tICcuL2NvbXBvbmVudHMvaXRlbXNPbk5lYXJTaG9yZSdcbmltcG9ydCBFbXB0eUJvYXQgZnJvbSAnLi9jb21wb25lbnRzL2VtcHR5Qm9hdCdcbmltcG9ydCBDb3JuSW5Cb2F0IGZyb20gJy4vY29tcG9uZW50cy9jb3JuSW5Cb2F0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbYm9hdCwgc2V0Qm9hdF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2JvYXRJdGVtLCBzZXRCb2F0SXRlbV0gPSB1c2VTdGF0ZSh7fSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBQb3BvdmVyKCk7XG4gIH0pXG5cbmNvbnN0IG1vdmVJdGVtID0gKGl0ZW0pID0+IHtcbiAgc2V0Qm9hdChpdGVtKVxuICBjb25zdCBjdXJyZW50SXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW0pO1xuICBjdXJyZW50SXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuXG4gIGl0ZW1zLmZvckVhY2goY3VycmVudEl0ZW0gPT57XG4gICAgaWYoaXRlbSA9PSBjdXJyZW50SXRlbS5zcmMpIHtcbiAgICAgIHNldEJvYXRJdGVtKGN1cnJlbnRJdGVtKVxuICAgIH1cbiAgfSlcbiAgY29uc29sZS5sb2coYm9hdEl0ZW0pXG59XG5cbmNvbnN0IG1vdmVCb2F0ID0gKCkgPT4ge1xuICBjb25zdCBib2F0SW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXQnKVxuICBib2F0SW1nLmNsYXNzTGlzdC50b2dnbGUoJ2JvYXQtYW5pbWF0aW9uJylcbn1cblxuICBpZihib2F0ID09PSAnJykge1xuICAgIHJldHVybiAoXG4gICAgICA8bWFpbiBjbGFzc05hbWU9eydkLWZsZXggbWFpbi1oZWlnaHQganVzdGlmeS1jb250ZW50LXN0YXJ0IGFsaWduLWl0ZW1zLWVuZCBsYW5kc2NhcGUnfT5cbiAgICAgICAgPGRpdiBpZD17J2ZveCd9IGFyaWEtZGVzY3JpYmVkYnk9XCJ0b29sdGlwXCIgb25DbGljaz17KCkgPT4gbW92ZUl0ZW0oJ2ZveCcpfT5cbiAgICAgICAgICA8Rm94IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPXsnY2hpY2tlbid9IGFyaWEtZGVzY3JpYmVkYnk9XCJ0b29sdGlwXCIgb25DbGljaz17KCkgPT4gbW92ZUl0ZW0oJ2NoaWNrZW4nKX0+XG4gICAgICAgICAgPENoaWNrZW4gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9eydjb3JuJ30gYXJpYS1kZXNjcmliZWRieT1cInRvb2x0aXBcIiBvbkNsaWNrPXsoKSA9PiBtb3ZlSXRlbSgnY29ybicpfT5cbiAgICAgICAgPGRpdiBpZD17J3Rvb2x0aXAnfSByb2xlPVwidG9vbHRpcFwiIGNsYXNzTmFtZT17J2JnLXdoaXRlIHAtMid9PkkgZG9uJ3Qgd2FudCB0byBkaWUhPC9kaXY+XG4gICAgICAgICAgPENvcm4gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxFbXB0eUJvYXQgLz5cbiAgICAgICAgey8qIDxJbWFnZSBzcmM9e2ZhclNob3JlfSBhbHQ9XCJUaGUgZmFyIHNob3JlXCIgLz4gKi99XG4gICAgICA8L21haW4+XG4gICAgKSBcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPG1haW4gY2xhc3NOYW1lPXsnZC1mbGV4IG1haW4taGVpZ2h0IGp1c3RpZnktY29udGVudC1zdGFydCBhbGlnbi1pdGVtcy1lbmQgbGFuZHNjYXBlJ30+XG4gICAgICAgIDxkaXYgaWQ9eydmb3gnfSBhcmlhLWRlc2NyaWJlZGJ5PVwidG9vbHRpcFwiIG9uQ2xpY2s9eygpID0+IHNldEJvYXQoJ2ZveCcpfT5cbiAgICAgICAgICA8Rm94IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPXsnY2hpY2tlbid9IGFyaWEtZGVzY3JpYmVkYnk9XCJ0b29sdGlwXCIgb25DbGljaz17KCkgPT4gc2V0Qm9hdCgnY2hpY2tlbicpfT5cbiAgICAgICAgICA8Q2hpY2tlbiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD17J2Nvcm4nfSBhcmlhLWRlc2NyaWJlZGJ5PVwidG9vbHRpcFwiIG9uQ2xpY2s9eygpID0+IG1vdmVJdGVtKCdjb3JuJyl9PlxuICAgICAgICA8ZGl2IGlkPXsndG9vbHRpcCd9IHJvbGU9XCJ0b29sdGlwXCIgY2xhc3NOYW1lPXsnYmctd2hpdGUgcC0yJ30+SSBkb24ndCB3YW50IHRvIGRpZSE8L2Rpdj5cbiAgICAgICAgICA8Q29ybiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD17J2JvYXQnfSBjbGFzc05hbWU9eydkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWVuZCd9IG9uQ2xpY2s9e21vdmVCb2F0fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydwb3NpdGlvbi1yZWxhdGl2ZSd9PlxuICAgICAgICAgIDxGYXJtZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncG9zaXRpb24tYWJzb2x1dGUnfT5cbiAgICAgICAgICB7aXRlbXMubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgPEltYWdlIFxuICAgICAgICAgICAgICBzcmM9e2l0ZW0uc3JjfSBcbiAgICAgICAgICAgICAgYWx0PXtpdGVtLmFsdH0gXG4gICAgICAgICAgICAgIHdpZHRoPXtpdGVtLndpZHRofVxuICAgICAgICAgICAgICBoZWlnaHQ9e2l0ZW0uaGVpZ2h0fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3Bvc2l0aW9uLWFic29sdXRlJ30+XG4gICAgICAgICAgPEJvYXQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgICAgey8qIDxJbWFnZSBzcmM9e2ZhclNob3JlfSBhbHQ9XCJUaGUgZmFyIHNob3JlXCIgLz4gKi99XG4gICAgICA8L21haW4+XG4gICAgKSBcbiAgfVxufVxuXG4vLyAgIGZ1bmN0aW9uIEJvYXQoaXRlbSkge1xuLy8gICAgIGNvbnNvbGUubG9nKGl0ZW0pXG4vLyAgICAgc3dpdGNoKGl0ZW0pIHtcbi8vICAgICAgIGNhc2UgJ2ZveCc6XG4vLyAgICAgICAgIHJldHVybiA8Rm94SW5Cb2F0IC8+O1xuLy8gICAgICAgY2FzZSAnY2hpY2tlbic6XG4vLyAgICAgICAgIHJldHVybiA8Q2hpY2tlbkluQm9hdCAvPjtcbi8vICAgICAgIGNhc2UgJ2Nvcm4nOiBcbi8vICAgICAgICAgcmV0dXJuIDxDb3JuSW5Cb2F0IC8+O1xuLy8gICAgICAgZGVmYXVsdDpcbi8vICAgICAgICAgcmV0dXJuIDxFbXB0eUJvYXQgLz47XG4vLyAgIH1cbi8vIH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});