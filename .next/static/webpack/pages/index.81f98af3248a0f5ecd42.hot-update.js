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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Particles\": function() { return /* binding */ Particles; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar Particles = function Particles() {\n  /************* SHIM ************************/\n  window.requestAnimFrame = function () {\n    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {\n      window.setTimeout(callback, 1000 / 60);\n    };\n  }();\n\n  function Scene() {\n    this.animation = undefined;\n    this.canvas = undefined;\n    this.height = 0;\n    this.width = 0;\n    this.context = undefined;\n    this.paused = false;\n    this.stats = undefined;\n    this.istats = undefined;\n  }\n\n  Scene.prototype = {\n    constructor: Scene,\n    setup: function setup(canvas, animation, width, height, stats) {\n      this.canvas = canvas;\n      this.animation = animation;\n      this.height = this.canvas.height = height;\n      this.width = this.canvas.width = width;\n      this.context = this.canvas.getContext('2d');\n      this.stats = stats && window.Stats;\n\n      if (this.stats) {\n        this.istats = new Stats();\n        this.istats.setMode(0);\n        this.istats.domElement.style.position = 'absolute';\n        this.istats.domElement.style.left = '0px';\n        this.istats.domElement.style.top = '0px';\n        this.istats.domElement.style.zIndex = '99999';\n        document.body.appendChild(this.istats.domElement);\n      }\n    },\n    animate: function animate() {\n      if (!this.paused) {\n        requestAnimFrame(this.animate.bind(this));\n      }\n\n      this.stats && this.istats.begin();\n      this.animation(this);\n      this.stats && this.istats.end();\n    }\n  };\n  var scene = new Scene(),\n      particles = [],\n      len = 40000,\n      height = document.body.offsetHeight,\n      width = document.body.offsetWidth;\n\n  function Particle() {\n    this.x = 0;\n    this.y = 0;\n    this.size = 0;\n    this.depth = 0;\n    this.vy = 0;\n  }\n\n  Particle.prototype = {\n    constructor: Particle,\n    update: function update(width, height) {\n      if (this.y > height) {\n        this.y = 1 - this.size;\n      }\n\n      this.y += this.vy;\n    }\n  };\n\n  for (var i = 0; i < len; i++) {\n    var particle = new Particle();\n    particle.x = Math.random() * width;\n    particle.y = Math.random() * height;\n    particle.depth = Math.random() * 10 | 0;\n    particle.size = (particle.depth + 1) / 8;\n    particle.vy = particle.depth * .25 + 1 / Math.random();\n    particles.push(particle);\n  }\n\n  function falling_particles() {\n    var idata = this.context.createImageData(this.width, this.height);\n\n    for (var i = 0, l = particles.length; i < l; i++) {\n      // thanks Loktar ;)\n      var particle = particles[i];\n\n      for (var w = 0; w < particle.size; w++) {\n        for (var h = 0; h < particle.size; h++) {\n          var pData = (~~(particle.x + w) + ~~(particle.y + h) * this.width) * 4;\n          idata.data[pData] = 255;\n          idata.data[pData + 1] = 255;\n          idata.data[pData + 2] = 255;\n          idata.data[pData + 3] = 255;\n        }\n      }\n\n      particle.update(this.width, this.height);\n    }\n\n    this.context.putImageData(idata, 0, 0);\n  }\n\n  scene.setup(document.getElementById('canvas'), falling_particles, width, height, !0);\n  scene.animate();\n\n  window.onresize = function () {\n    height = scene.height = scene.canvas.height = document.body.offsetHeight;\n    width = scene.width = scene.canvas.width = document.body.offsetWidth;\n  };\n};\n_c = Particles;\n\nvar _c;\n\n$RefreshReg$(_c, \"Particles\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9wYXJ0aWNsZXMuanM/MjdjNSJdLCJuYW1lcyI6WyJQYXJ0aWNsZXMiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbUZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib1JlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FsbGJhY2siLCJzZXRUaW1lb3V0IiwiU2NlbmUiLCJhbmltYXRpb24iLCJ1bmRlZmluZWQiLCJjYW52YXMiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbnRleHQiLCJwYXVzZWQiLCJzdGF0cyIsImlzdGF0cyIsInByb3RvdHlwZSIsImNvbnN0cnVjdG9yIiwic2V0dXAiLCJnZXRDb250ZXh0IiwiU3RhdHMiLCJzZXRNb2RlIiwiZG9tRWxlbWVudCIsInN0eWxlIiwicG9zaXRpb24iLCJsZWZ0IiwidG9wIiwiekluZGV4IiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJhbmltYXRlIiwiYmluZCIsImJlZ2luIiwiZW5kIiwic2NlbmUiLCJwYXJ0aWNsZXMiLCJsZW4iLCJvZmZzZXRIZWlnaHQiLCJvZmZzZXRXaWR0aCIsIlBhcnRpY2xlIiwieCIsInkiLCJzaXplIiwiZGVwdGgiLCJ2eSIsInVwZGF0ZSIsImkiLCJwYXJ0aWNsZSIsIk1hdGgiLCJyYW5kb20iLCJwdXNoIiwiZmFsbGluZ19wYXJ0aWNsZXMiLCJpZGF0YSIsImNyZWF0ZUltYWdlRGF0YSIsImwiLCJsZW5ndGgiLCJ3IiwiaCIsInBEYXRhIiwiZGF0YSIsInB1dEltYWdlRGF0YSIsImdldEVsZW1lbnRCeUlkIiwib25yZXNpemUiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUMzQjtBQUNBQyxRQUFNLENB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S25DLEtBQXJCLEVBQTRCLEtBQUtELE1BQWpDO0FBQ0Q7O0FBQ0QsU0FBS0UsT0FBTCxDQUFhaUQsWUFBYixDQUEwQlIsS0FBMUIsRUFBaUMsQ0FBakMsRUFBb0MsQ0FBcEM7QUFDRDs7QUFDRGxCLE9BQUssQ0FBQ2pCLEtBQU4sQ0FBWVUsUUFBUSxDQUFDa0MsY0FBVCxDQUF3QixRQUF4QixDQUFaLEVBQStDVixpQkFBL0MsRUFBa0V6QyxLQUFsRSxFQUF5RUQsTUFBekUsRUFBaUYsQ0FBQyxDQUFsRjtBQUNBeUIsT0FBSyxDQUFDSixPQUFOOztBQUNBbEMsUUFBTSxDQUFDa0UsUUFBUCxHQUFrQixZQUFZO0FBQzVCckQsVUFBTSxHQUFHeUIsS0FBSyxDQUFDekIsTUFBTixHQUFleUIsS0FBSyxDQUFDMUIsTUFBTixDQUFhQyxNQUFiLEdBQXNCa0IsUUFBUSxDQUFDQyxJQUFULENBQWNTLFlBQTVEO0FBQ0EzQixTQUFLLEdBQUd3QixLQUFLLENBQUN4QixLQUFOLEdBQWN3QixLQUFLLENBQUMxQixNQUFOLENBQWFFLEtBQWIsR0FBcUJpQixRQUFRLENBQUNDLElBQVQsQ0FBY1UsV0FBekQ7QUFDRCxHQUhEO0FBS0wsQ0F4R007S0FBTTNDLFMiLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL3BhcnRpY2xlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBQYXJ0aWNsZXMgPSAoKSA9PiB7XG4gICAgLyoqKioqKioqKioqKiogU0hJTSAqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgd2luZG93LnJlcXVlc3RBbmltRnJhbWUgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xuICAgICAgICB9O1xuICAgICAgfSkoKTtcbiAgICAgIFxuICAgICAgZnVuY3Rpb24gU2NlbmUoKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAwO1xuICAgICAgICB0aGlzLndpZHRoID0gMDtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0YXRzID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmlzdGF0cyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIFNjZW5lLnByb3RvdHlwZSA9IHtcbiAgICAgICAgY29uc3RydWN0b3I6IFNjZW5lLFxuICAgICAgICBzZXR1cDogZnVuY3Rpb24gKGNhbnZhcywgYW5pbWF0aW9uLCB3aWR0aCwgaGVpZ2h0LCBzdGF0cykge1xuICAgICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gYW5pbWF0aW9uO1xuICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgdGhpcy5zdGF0cyA9IHN0YXRzICYmIHdpbmRvdy5TdGF0cztcbiAgICAgICAgICBpZiAodGhpcy5zdGF0cykge1xuICAgICAgICAgICAgdGhpcy5pc3RhdHMgPSBuZXcgU3RhdHMoKTtcbiAgICAgICAgICAgIHRoaXMuaXN0YXRzLnNldE1vZGUoMCk7XG4gICAgICAgICAgICB0aGlzLmlzdGF0cy5kb21FbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgIHRoaXMuaXN0YXRzLmRvbUVsZW1lbnQuc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgICAgICAgICAgdGhpcy5pc3RhdHMuZG9tRWxlbWVudC5zdHlsZS50b3AgPSAnMHB4JztcbiAgICAgICAgICAgIHRoaXMuaXN0YXRzLmRvbUVsZW1lbnQuc3R5bGUuekluZGV4ID0gJzk5OTk5JztcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5pc3RhdHMuZG9tRWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhbmltYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLnBhdXNlZCkge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuc3RhdHMgJiYgKHRoaXMuaXN0YXRzLmJlZ2luKCkpO1xuICAgICAgICAgIHRoaXMuYW5pbWF0aW9uKHRoaXMpOyBcbiAgICAgICAgICB0aGlzLnN0YXRzICYmICh0aGlzLmlzdGF0cy5lbmQoKSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBcbiAgICAgIHZhciBzY2VuZSA9IG5ldyBTY2VuZSgpLFxuICAgICAgICBwYXJ0aWNsZXMgPSBbXSxcbiAgICAgICAgbGVuID0gNDAwMDAsXG4gICAgICAgIGhlaWdodCA9IGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0LFxuICAgICAgICB3aWR0aCA9IGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGg7XG4gICAgICBcbiAgICAgIGZ1bmN0aW9uIFBhcnRpY2xlKCkge1xuICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB0aGlzLnNpemUgPSAwO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy52eSA9IDA7XG4gICAgICB9XG4gICAgICBQYXJ0aWNsZS5wcm90b3R5cGUgPSB7XG4gICAgICAgIGNvbnN0cnVjdG9yOiBQYXJ0aWNsZSxcbiAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCkge1xuICAgICAgICAgIGlmICh0aGlzLnkgPiBoZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMueSA9IDEgLSB0aGlzLnNpemU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMueSArPSB0aGlzLnZ5O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgcGFydGljbGUgPSBuZXcgUGFydGljbGUoKTtcbiAgICAgICAgcGFydGljbGUueCA9IE1hdGgucmFuZG9tKCkgKiB3aWR0aDtcbiAgICAgICAgcGFydGljbGUueSA9IE1hdGgucmFuZG9tKCkgKiBoZWlnaHQ7XG4gICAgICAgIHBhcnRpY2xlLmRlcHRoID0gTWF0aC5yYW5kb20oKSAqIDEwIHwgMDtcbiAgICAgICAgcGFydGljbGUuc2l6ZSA9IChwYXJ0aWNsZS5kZXB0aCArIDEpIC8gODtcbiAgICAgICAgcGFydGljbGUudnkgPSAocGFydGljbGUuZGVwdGggKiAuMjUpICsgMSAvIE1hdGgucmFuZG9tKCk7XG4gICAgICAgIHBhcnRpY2xlcy5wdXNoKHBhcnRpY2xlKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgZnVuY3Rpb24gZmFsbGluZ19wYXJ0aWNsZXMoKSB7XG4gICAgICAgIHZhciBpZGF0YSA9IHRoaXMuY29udGV4dC5jcmVhdGVJbWFnZURhdGEodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHBhcnRpY2xlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAvLyB0aGFua3MgTG9rdGFyIDspXG4gICAgICAgICAgdmFyIHBhcnRpY2xlID0gcGFydGljbGVzW2ldO1xuICAgICAgICAgIGZvciAodmFyIHcgPSAwOyB3IDwgcGFydGljbGUuc2l6ZTsgdysrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBoID0gMDsgaCA8IHBhcnRpY2xlLnNpemU7IGgrKykge1xuICAgICAgICAgICAgICB2YXIgcERhdGEgPSAofn4ocGFydGljbGUueCArIHcpICsgKH5+KHBhcnRpY2xlLnkgKyBoKSAqIHRoaXMud2lkdGgpKSAqIDQ7XG4gICAgICAgICAgICAgIGlkYXRhLmRhdGFbcERhdGFdID0gMjU1O1xuICAgICAgICAgICAgICBpZGF0YS5kYXRhW3BEYXRhICsgMV0gPSAyNTU7XG4gICAgICAgICAgICAgIGlkYXRhLmRhdGFbcERhdGEgKyAyXSA9IDI1NTtcbiAgICAgICAgICAgICAgaWRhdGEuZGF0YVtwRGF0YSArIDNdID0gMjU1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBwYXJ0aWNsZS51cGRhdGUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29udGV4dC5wdXRJbWFnZURhdGEoaWRhdGEsIDAsIDApO1xuICAgICAgfVxuICAgICAgc2NlbmUuc2V0dXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpLCBmYWxsaW5nX3BhcnRpY2xlcywgd2lkdGgsIGhlaWdodCwgITApO1xuICAgICAgc2NlbmUuYW5pbWF0ZSgpO1xuICAgICAgd2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBoZWlnaHQgPSBzY2VuZS5oZWlnaHQgPSBzY2VuZS5jYW52YXMuaGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIHdpZHRoID0gc2NlbmUud2lkdGggPSBzY2VuZS5jYW52YXMud2lkdGggPSBkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoO1xuICAgICAgfTtcbiAgICAgIFxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/particles.js\n");

/***/ })

});