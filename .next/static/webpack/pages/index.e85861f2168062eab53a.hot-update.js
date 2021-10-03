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
    className: (_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().carousel),
    autoPlay: true,
    showThumbs: false,
    showStatus: false,
    showArrows: false,
    children: mountains.map(function (mountain) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: (_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().imageContainer),
        style: {
          backgroundImage: "url(".concat(mountain.thumbnail_photo, ")")
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: (_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().overlay),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
            children: mountain.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 11
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 7
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTg1ODYxZjIxNjgwNjJlYWI1M2EuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixPQUFpQjtBQUFBLE1BQWZDLFNBQWUsUUFBZkEsU0FBZTtBQUN4QyxzQkFDSSw4REFBQywrREFBRDtBQUFVLGFBQVMsRUFBRUgsa0ZBQXJCO0FBQXFDLFlBQVEsRUFBRSxJQUEvQztBQUFxRCxjQUFVLEVBQUUsS0FBakU7QUFBd0UsY0FBVSxFQUFFLEtBQXBGO0FBQTJGLGNBQVUsRUFBRSxLQUF2RztBQUFBLGNBQ0dHLFNBQVMsQ0FBQ0UsR0FBVixDQUFjLFVBQUFDLFFBQVE7QUFBQSwwQkFDckI7QUFBSyxpQkFBUyxFQUFFTix3RkFBaEI7QUFBc0MsYUFBSyxFQUFFO0FBQzNDUSxVQUFBQSxlQUFlLGdCQUFTRixRQUFRLENBQUNHLGVBQWxCO0FBRDRCLFNBQTdDO0FBQUEsK0JBR0U7QUFBSyxtQkFBUyxFQUFFVCxpRkFBaEI7QUFBQSxpQ0FDRTtBQUFBLHNCQUFLTSxRQUFRLENBQUNLO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRHFCO0FBQUEsS0FBdEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFjRCxDQWZEOztLQUFNVDtBQWlCTiwrREFBZUEsZ0JBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3VudGFpbkNhcm91c2VsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3VudGFpbkNhcm91c2VsQ2FyZCBmcm9tIFwiQC9jb21wb25lbnRzL01vdW50YWluQ2Fyb3VzZWxDYXJkXCJcclxuaW1wb3J0IHN0eWxlIGZyb20gJ0Avc3R5bGVzL21vdW50YWluY2FyZC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICdyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsJztcclxuXHJcbmNvbnN0IE1vdW50YWluQ2Fyb3VzZWwgPSAoe21vdW50YWluc30pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgICA8Q2Fyb3VzZWwgY2xhc3NOYW1lPXtzdHlsZS5jYXJvdXNlbH0gYXV0b1BsYXk9e3RydWV9IHNob3dUaHVtYnM9e2ZhbHNlfSBzaG93U3RhdHVzPXtmYWxzZX0gc2hvd0Fycm93cz17ZmFsc2V9PlxyXG4gICAgICAgIHttb3VudGFpbnMubWFwKG1vdW50YWluID0+IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pbWFnZUNvbnRhaW5lcn0gc3R5bGU9e3sgXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke21vdW50YWluLnRodW1ibmFpbF9waG90b30pYCBcclxuICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUub3ZlcmxheX0+XHJcbiAgICAgICAgICAgICAgPGgzPnttb3VudGFpbi5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgPC9DYXJvdXNlbD5cclxuIFxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW91bnRhaW5DYXJvdXNlbFxyXG4iXSwibmFtZXMiOlsiTW91bnRhaW5DYXJvdXNlbENhcmQiLCJzdHlsZSIsIkNhcm91c2VsIiwiTW91bnRhaW5DYXJvdXNlbCIsIm1vdW50YWlucyIsImNhcm91c2VsIiwibWFwIiwibW91bnRhaW4iLCJpbWFnZUNvbnRhaW5lciIsImJhY2tncm91bmRJbWFnZSIsInRodW1ibmFpbF9waG90byIsIm92ZXJsYXkiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==