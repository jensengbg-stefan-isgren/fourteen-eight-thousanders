"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MountainCarousel.js":
/*!****************************************!*\
  !*** ./components/MountainCarousel.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_MountainCarouselCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/MountainCarouselCard */ "./components/MountainCarouselCard.js");
/* harmony import */ var _styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/mountaincard.module.scss */ "./styles/mountaincard.module.scss");
/* harmony import */ var _styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive-carousel */ "./node_modules/react-responsive-carousel/lib/js/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Stefa\\fourteen-eight-thousanders\\components\\MountainCarousel.js",
    _this = undefined;






var MountainCarousel = function MountainCarousel(_ref) {
  var mountains = _ref.mountains;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__.Carousel, {
    showIndicators: true,
    infiniteLoop: true,
    className: (_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().carousel),
    autoPlay: true,
    showThumbs: false,
    showStatus: false,
    showArrows: true,
    children: mountains.map(function (mountain) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: (_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().imageContainer),
        style: {
          backgroundImage: "url(".concat(mountain.thumbnail_photo, ")")
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: (_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().overlay),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
            children: mountain.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
            children: "[ ".concat(mountain.height, "m]")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, _this);
};

_c = MountainCarousel;
/* harmony default export */ __webpack_exports__["default"] = (MountainCarousel);

var _c;

$RefreshReg$(_c, "MountainCarousel");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWFiNTA0MzZlYTBlZDNjOGIyMzYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixPQUFtQjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDMUMsc0JBQ0UsOERBQUMsK0RBQUQ7QUFDQSxrQkFBYyxFQUFFLElBRGhCO0FBRUUsZ0JBQVksRUFBRSxJQUZoQjtBQUdFLGFBQVMsRUFBRUgsa0ZBSGI7QUFJRSxZQUFRLEVBQUUsSUFKWjtBQUtFLGNBQVUsRUFBRSxLQUxkO0FBTUUsY0FBVSxFQUFFLEtBTmQ7QUFPRSxjQUFVLEVBQUUsSUFQZDtBQUFBLGNBU0dHLFNBQVMsQ0FBQ0UsR0FBVixDQUFjLFVBQUNDLFFBQUQ7QUFBQSwwQkFDYjtBQUNFLGlCQUFTLEVBQUVOLHdGQURiO0FBRUUsYUFBSyxFQUFFO0FBQ0xRLFVBQUFBLGVBQWUsZ0JBQVNGLFFBQVEsQ0FBQ0csZUFBbEI7QUFEVixTQUZUO0FBQUEsK0JBTUU7QUFBSyxtQkFBUyxFQUFFVCxpRkFBaEI7QUFBQSxrQ0FDRTtBQUFBLHNCQUFLTSxRQUFRLENBQUNLO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUEsa0NBQVNMLFFBQVEsQ0FBQ00sTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYTtBQUFBLEtBQWQ7QUFUSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5QkQsQ0ExQkQ7O0tBQU1WO0FBNEJOLCtEQUFlQSxnQkFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01vdW50YWluQ2Fyb3VzZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdW50YWluQ2Fyb3VzZWxDYXJkIGZyb20gXCJAL2NvbXBvbmVudHMvTW91bnRhaW5DYXJvdXNlbENhcmRcIjtcclxuaW1wb3J0IHN0eWxlIGZyb20gXCJAL3N0eWxlcy9tb3VudGFpbmNhcmQubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tIFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbFwiO1xyXG5cclxuY29uc3QgTW91bnRhaW5DYXJvdXNlbCA9ICh7IG1vdW50YWlucyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJvdXNlbFxyXG4gICAgc2hvd0luZGljYXRvcnM9e3RydWV9XHJcbiAgICAgIGluZmluaXRlTG9vcD17dHJ1ZX1cclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZS5jYXJvdXNlbH1cclxuICAgICAgYXV0b1BsYXk9e3RydWV9XHJcbiAgICAgIHNob3dUaHVtYnM9e2ZhbHNlfVxyXG4gICAgICBzaG93U3RhdHVzPXtmYWxzZX1cclxuICAgICAgc2hvd0Fycm93cz17dHJ1ZX1cclxuICAgID5cclxuICAgICAge21vdW50YWlucy5tYXAoKG1vdW50YWluKSA9PiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5pbWFnZUNvbnRhaW5lcn1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke21vdW50YWluLnRodW1ibmFpbF9waG90b30pYFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUub3ZlcmxheX0+XHJcbiAgICAgICAgICAgIDxoMz57bW91bnRhaW4ubmFtZX08L2gzPlxyXG4gICAgICAgICAgICA8cD57YFsgJHttb3VudGFpbi5oZWlnaHR9bV1gfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvQ2Fyb3VzZWw+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdW50YWluQ2Fyb3VzZWw7XHJcbiJdLCJuYW1lcyI6WyJNb3VudGFpbkNhcm91c2VsQ2FyZCIsInN0eWxlIiwiQ2Fyb3VzZWwiLCJNb3VudGFpbkNhcm91c2VsIiwibW91bnRhaW5zIiwiY2Fyb3VzZWwiLCJtYXAiLCJtb3VudGFpbiIsImltYWdlQ29udGFpbmVyIiwiYmFja2dyb3VuZEltYWdlIiwidGh1bWJuYWlsX3Bob3RvIiwib3ZlcmxheSIsIm5hbWUiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9