/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/particles.js":
/*!***************************************!*\
  !*** ./pages/components/particles.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Particles\": function() { return /* binding */ Particles; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar Particles = function Particles() {\n  /************* SHIM ************************/\n  window.requestAnimFrame = function () {\n    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {\n      window.setTimeout(callback, 1000 / 60);\n    };\n  }();\n  /********************************************/\n\n\n  var canvas = document.getElementById('cvs'),\n      ctx = canvas.getContext('2d'),\n      height = canvas.height = document.body.offsetHeight,\n      width = canvas.width = document.body.offsetWidth,\n      collection = [],\n      num_drops = 1024,\n      // number of drops\n  gravity = 1,\n      // gravity multiplier \n  windforce = 0,\n      // yea i'd just leave this\n  windmultiplier = 0.007,\n      // this freaks out on large numbers\n  maxspeed = 5,\n      // this is so you never run too fast (it is a multiplier not raw)\n  gutter = 0.001; // the percentage distance to travel off screen before wrapping\n\n  function Drop() {\n    this.x;\n    this.y;\n    this.radius;\n    this.distance;\n    this.color;\n    this.speed;\n    this.vx;\n    this.vy;\n  }\n\n  Drop.prototype = {\n    constructor: Drop,\n    random_x: function random_x() {\n      var n = width * (1 + gutter);\n      return 1 - (1 + gutter) + Math.random() * n;\n    },\n    draw: function draw(ctx) {\n      ctx.fillStyle = this.color;\n      ctx.beginPath();\n      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);\n      ctx.closePath();\n      ctx.fill();\n    }\n  };\n\n  function draw_frame() {\n    // this was recommended (see comments)\n    // check it out, just comment out the \n    // ctx.clearRect(0, 0, width, height);\n    // line and uncomment the three below:\n    //ctx.globalCompositeOperation=\"darker\";\n    //ctx.fillStyle=\"rgba(0,0,0,0.5)\";\n    //ctx.fillRect(0,0,width,height);  \n    ctx.clearRect(0, 0, width, height); // in a previous attempt I even go as far\n    // as to ensure i'm drawing the furthest particles \n    // first for the z-index overlay.\n    // in this run I felt it was unneeded\n\n    collection.forEach(function (drop) {\n      // costly but ultimatly I think it's worth it for now\n      // I muck with the opacity to help with the illusion of depth\n      ctx.globalAlpha = (drop.distance + 1) / 10;\n      drop.draw(ctx);\n      ctx.globalAlpha = 1;\n      drop.x += drop.vx;\n      drop.y += drop.vy;\n      var lx = drop.vx + windforce;\n      lx < maxspeed && lx > 1 - maxspeed && (drop.vx = lx);\n\n      if (drop.y > (drop.distance + 1) / 10 * height) {\n        drop.y = Math.random() * -drop.radius * (num_drops / 10);\n        drop.x = drop.random_x();\n      }\n\n      if (drop.x > width * (1 + gutter)) {\n        drop.x = 1 - width * gutter;\n      }\n\n      if (drop.x < 1 - width * gutter) {\n        drop.x = width * (1 + gutter);\n      }\n    });\n  }\n\n  function animate() {\n    requestAnimFrame(animate);\n    draw_frame();\n  }\n\n  function windtimer() {\n    // this is a super cheap way to do this,\n    // i will need to look into how to properly \n    // emulate wind\n    windforce = Math.random() > 0.5 ? windmultiplier : -windmultiplier;\n    setTimeout(windtimer, Math.random() * (1000 * 30));\n  }\n\n  function init() {\n    collection = [];\n\n    while (num_drops--) {\n      var drop = new Drop(); // todo: make constructor do this shit\n\n      drop.color = \"blue\";\n      drop.distance = Math.random() * 10 | 0;\n      drop.speed = Math.random() * (drop.distance / 10) + gravity;\n      drop.vx = 0;\n      drop.vy = Math.random() * drop.speed + drop.speed / 2;\n      drop.radius = (drop.distance + 1) / 16 * 3;\n      drop.x = drop.random_x();\n      drop.y = Math.random() * height;\n      collection.push(drop);\n    }\n\n    windtimer();\n    animate();\n\n    window.onresize = function () {\n      height = canvas.height = document.body.offsetHeight;\n      width = canvas.width = document.body.offsetWidth;\n    };\n  }\n\n  init();\n};\n_c = Particles;\n\nvar _c;\n\n$RefreshReg$(_c, \"Particles\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9wYXJ0aWNsZXMuanM/MjdjNSJdLCJuYW1lcyI6WyJQYXJ0aWNsZXMiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbUZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib1JlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FsbGJhY2siLCJzZXRUaW1lb3V0IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJoZWlnaHQiLCJib2R5Iiwib2Zmc2V0SGVpZ2h0Iiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImNvbGxlY3Rpb24iLCJudW1fZHJvcHMiLCJncmF2aXR5Iiwid2luZGZvcmNlIiwid2luZG11bHRpcGxpZXIiLCJtYXhzcGVlZCIsImd1dHRlciIsIkRyb3AiLCJ4IiwieSIsInJhZGl1cyIsImRpc3RhbmNlIiwiY29sb3IiLCJzcGVlZCIsInZ4IiwidnkiLCJwcm90b3R5cGUiLCJjb25zdHJ1Y3RvciIsInJhbmRvbV94IiwibiIsIk1hdGgiLCJyYW5kb20iLCJkcmF3IiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJjbG9zZVBhdGgiLCJmaWxsIiwiZHJhd19mcmFtZSIsImNsZWFyUmVjdCIsImZvckVhY2giLCJkcm9wIiwiZ2xvYmFsQWxwaGEiLCJseCIsImFuaW1hdGUiLCJ3aW5kdGltZXIiLCJpbml0IiwicHVzaCIsIm9ucmVzaXplIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFPLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDM0I7QUFDSkMsUUFBTSxDQUFDQyxnQkFBUCxHQUEyQixZQUFVO0FBQ2pDLFdBQVFELE1BQU0sQ0FBQ0UscUJBQVAsSUFDQUYsTUFBTSxD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S0FBUCxHQUFlUCxRQUFRLENBQUNLLElBQVQsQ0FBY0csV0FBckM7QUFDRCxLQUhEO0FBSUQ7O0FBQ0RzQyxNQUFJO0FBQ0wsQ0E1SE07S0FBTXpELFMiLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL3BhcnRpY2xlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBQYXJ0aWNsZXMgPSAoKSA9PiB7XG4gICAgLyoqKioqKioqKioqKiogU0hJTSAqKioqKioqKioqKioqKioqKioqKioqKiovXG53aW5kb3cucmVxdWVzdEFuaW1GcmFtZSA9IChmdW5jdGlvbigpe1xuICAgIHJldHVybiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSAgICAgICB8fFxuICAgICAgICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSAgICB8fFxuICAgICAgICAgICAgd2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgICB8fFxuICAgICAgICAgICAgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICB8fFxuICAgICAgICAgICAgZnVuY3Rpb24oIGNhbGxiYWNrICl7XG4gICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xuICAgICAgICAgICAgfTtcbiAgfSkoKTtcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N2cycpLFxuICAgIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLFxuICAgIGhlaWdodCA9IGNhbnZhcy5oZWlnaHQgPSBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCxcbiAgICB3aWR0aCA9IGNhbnZhcy53aWR0aCA9IGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGgsXG4gICAgY29sbGVjdGlvbiA9IFtdLFxuICAgIG51bV9kcm9wcyA9IDEwMjQsIC8vIG51bWJlciBvZiBkcm9wc1xuICAgIGdyYXZpdHkgPSAxLCAvLyBncmF2aXR5IG11bHRpcGxpZXIgXG4gICAgd2luZGZvcmNlID0gMCwgLy8geWVhIGknZCBqdXN0IGxlYXZlIHRoaXNcbiAgICB3aW5kbXVsdGlwbGllciA9IDAuMDA3LCAvLyB0aGlzIGZyZWFrcyBvdXQgb24gbGFyZ2UgbnVtYmVyc1xuICAgIG1heHNwZWVkID0gNSwgLy8gdGhpcyBpcyBzbyB5b3UgbmV2ZXIgcnVuIHRvbyBmYXN0IChpdCBpcyBhIG11bHRpcGxpZXIgbm90IHJhdylcbiAgICBndXR0ZXIgPSAwLjAwMTsgLy8gdGhlIHBlcmNlbnRhZ2UgZGlzdGFuY2UgdG8gdHJhdmVsIG9mZiBzY3JlZW4gYmVmb3JlIHdyYXBwaW5nXG4gIFxuICBmdW5jdGlvbiBEcm9wKCkge1xuICAgIHRoaXMueDtcbiAgICB0aGlzLnk7XG4gICAgdGhpcy5yYWRpdXM7XG4gICAgdGhpcy5kaXN0YW5jZTtcbiAgICB0aGlzLmNvbG9yO1xuICAgIHRoaXMuc3BlZWQ7XG4gICAgdGhpcy52eDtcbiAgICB0aGlzLnZ5O1xuICB9XG4gIERyb3AucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBEcm9wLFxuICAgIFxuICAgIHJhbmRvbV94OiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBuID0gd2lkdGggKiAoMSArIGd1dHRlcik7XG4gICAgICByZXR1cm4gKDEgLSAoMSArIGd1dHRlcikpICsgKE1hdGgucmFuZG9tKCkgKiBuKTtcbiAgICB9LFxuICAgIGRyYXc6IGZ1bmN0aW9uKGN0eCkge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgIGN0eC5maWxsKCk7XG4gICAgfVxuICB9O1xuICBcbiAgZnVuY3Rpb24gZHJhd19mcmFtZSgpIHtcbiAgICAvLyB0aGlzIHdhcyByZWNvbW1lbmRlZCAoc2VlIGNvbW1lbnRzKVxuICAgIC8vIGNoZWNrIGl0IG91dCwganVzdCBjb21tZW50IG91dCB0aGUgXG4gICAgLy8gY3R4LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAvLyBsaW5lIGFuZCB1bmNvbW1lbnQgdGhlIHRocmVlIGJlbG93OlxuICBcbiAgICAvL2N0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb249XCJkYXJrZXJcIjtcbiAgICAvL2N0eC5maWxsU3R5bGU9XCJyZ2JhKDAsMCwwLDAuNSlcIjtcbiAgICAvL2N0eC5maWxsUmVjdCgwLDAsd2lkdGgsaGVpZ2h0KTsgIFxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgXG4gICAgLy8gaW4gYSBwcmV2aW91cyBhdHRlbXB0IEkgZXZlbiBnbyBhcyBmYXJcbiAgICAvLyBhcyB0byBlbnN1cmUgaSdtIGRyYXdpbmcgdGhlIGZ1cnRoZXN0IHBhcnRpY2xlcyBcbiAgICAvLyBmaXJzdCBmb3IgdGhlIHotaW5kZXggb3ZlcmxheS5cbiAgICAvLyBpbiB0aGlzIHJ1biBJIGZlbHQgaXQgd2FzIHVubmVlZGVkXG4gICAgY29sbGVjdGlvbi5mb3JFYWNoKGZ1bmN0aW9uIChkcm9wKSB7XG4gICAgICAvLyBjb3N0bHkgYnV0IHVsdGltYXRseSBJIHRoaW5rIGl0J3Mgd29ydGggaXQgZm9yIG5vd1xuICAgICAgLy8gSSBtdWNrIHdpdGggdGhlIG9wYWNpdHkgdG8gaGVscCB3aXRoIHRoZSBpbGx1c2lvbiBvZiBkZXB0aFxuICAgICAgY3R4Lmdsb2JhbEFscGhhID0gKGRyb3AuZGlzdGFuY2UgKyAxKSAvIDEwOyBcbiAgICAgIGRyb3AuZHJhdyhjdHgpO1xuICAgICAgY3R4Lmdsb2JhbEFscGhhID0gMTtcbiAgICAgIGRyb3AueCArPSBkcm9wLnZ4O1xuICAgICAgZHJvcC55ICs9IGRyb3Audnk7XG4gICAgICB2YXIgbHggPSBkcm9wLnZ4ICsgd2luZGZvcmNlO1xuICAgICAgbHggPCBtYXhzcGVlZCAmJiBseCA+IDEgLSBtYXhzcGVlZCAmJiAoZHJvcC52eCA9IGx4KTtcbiAgICAgIGlmIChkcm9wLnkgPiAoZHJvcC5kaXN0YW5jZSArIDEpIC8gMTAgKiBoZWlnaHQpIHtcbiAgICAgICAgZHJvcC55ID0gTWF0aC5yYW5kb20oKSAqIC1kcm9wLnJhZGl1cyAqIChudW1fZHJvcHMgLyAxMCk7XG4gICAgICAgIGRyb3AueCA9IGRyb3AucmFuZG9tX3goKTtcbiAgICAgIH1cbiAgICAgIGlmIChkcm9wLnggPiB3aWR0aCAqICgxICsgZ3V0dGVyKSkge1xuICAgICAgICBkcm9wLnggPSAxIC0gKHdpZHRoICogZ3V0dGVyKTtcbiAgICAgIH1cbiAgICAgIGlmIChkcm9wLnggPCAxIC0gKHdpZHRoICogZ3V0dGVyKSkge1xuICAgICAgICBkcm9wLnggPSB3aWR0aCAqICgxICsgZ3V0dGVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICByZXF1ZXN0QW5pbUZyYW1lKGFuaW1hdGUpO1xuICAgIGRyYXdfZnJhbWUoKTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gd2luZHRpbWVyKCkge1xuICAgIC8vIHRoaXMgaXMgYSBzdXBlciBjaGVhcCB3YXkgdG8gZG8gdGhpcyxcbiAgICAvLyBpIHdpbGwgbmVlZCB0byBsb29rIGludG8gaG93IHRvIHByb3Blcmx5IFxuICAgIC8vIGVtdWxhdGUgd2luZFxuICAgIHdpbmRmb3JjZSA9IE1hdGgucmFuZG9tKCkgPiAwLjUgPyB3aW5kbXVsdGlwbGllciA6IC13aW5kbXVsdGlwbGllcjtcbiAgICBzZXRUaW1lb3V0KHdpbmR0aW1lciwgTWF0aC5yYW5kb20oKSAqICgxMDAwICogMzApKTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBjb2xsZWN0aW9uID0gW107XG4gICAgd2hpbGUgKG51bV9kcm9wcy0tKSB7XG4gICAgICB2YXIgZHJvcCA9IG5ldyBEcm9wKCk7IC8vIHRvZG86IG1ha2UgY29uc3RydWN0b3IgZG8gdGhpcyBzaGl0XG4gICAgICBkcm9wLmNvbG9yID0gXCJibHVlXCI7XG4gICAgICBkcm9wLmRpc3RhbmNlID0gTWF0aC5yYW5kb20oKSAqIDEwIHwgMDtcbiAgICAgIGRyb3Auc3BlZWQgPSBNYXRoLnJhbmRvbSgpICogKGRyb3AuZGlzdGFuY2UgLyAxMCkgKyBncmF2aXR5O1xuICAgICAgZHJvcC52eCA9IDA7XG4gICAgICBkcm9wLnZ5ID0gTWF0aC5yYW5kb20oKSAqIGRyb3Auc3BlZWQgKyAoZHJvcC5zcGVlZCAvIDIpO1xuICAgICAgZHJvcC5yYWRpdXMgPSAoZHJvcC5kaXN0YW5jZSArIDEpIC8gMTYgKiAzO1xuICAgICAgZHJvcC54ID0gZHJvcC5yYW5kb21feCgpO1xuICAgICAgZHJvcC55ID0gTWF0aC5yYW5kb20oKSAqIGhlaWdodDtcbiAgICAgIGNvbGxlY3Rpb24ucHVzaChkcm9wKTtcbiAgICB9XG4gICAgd2luZHRpbWVyKCk7XG4gICAgYW5pbWF0ZSgpO1xuICAgIHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaGVpZ2h0ID0gY2FudmFzLmhlaWdodCA9IGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0O1xuICAgICAgd2lkdGggPSBjYW52YXMud2lkdGggPSBkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoO1xuICAgIH07XG4gIH1cbiAgaW5pdCgpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/particles.js\n");

/***/ })

});