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
    show: true,
    infiniteLoop: true,
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
            lineNumber: 24,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTA1MmU2NzA5NGE4MDBiMmJjMDkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixPQUFtQjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDMUMsc0JBQ0UsOERBQUMsK0RBQUQ7QUFDQSxRQUFJLE1BREo7QUFFRSxnQkFBWSxFQUFFLElBRmhCO0FBR0UsYUFBUyxFQUFFSCxrRkFIYjtBQUlFLFlBQVEsRUFBRSxJQUpaO0FBS0UsY0FBVSxFQUFFLEtBTGQ7QUFNRSxjQUFVLEVBQUUsS0FOZDtBQU9FLGNBQVUsRUFBRSxLQVBkO0FBQUEsY0FTR0csU0FBUyxDQUFDRSxHQUFWLENBQWMsVUFBQ0MsUUFBRDtBQUFBLDBCQUNiO0FBQ0UsaUJBQVMsRUFBRU4sd0ZBRGI7QUFFRSxhQUFLLEVBQUU7QUFDTFEsVUFBQUEsZUFBZSxnQkFBU0YsUUFBUSxDQUFDRyxlQUFsQjtBQURWLFNBRlQ7QUFBQSwrQkFNRTtBQUFLLG1CQUFTLEVBQUVULGlGQUFoQjtBQUFBLGlDQUNFO0FBQUEsc0JBQUtNLFFBQVEsQ0FBQ0s7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYTtBQUFBLEtBQWQ7QUFUSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF3QkQsQ0F6QkQ7O0tBQU1UO0FBMkJOLCtEQUFlQSxnQkFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01vdW50YWluQ2Fyb3VzZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdW50YWluQ2Fyb3VzZWxDYXJkIGZyb20gXCJAL2NvbXBvbmVudHMvTW91bnRhaW5DYXJvdXNlbENhcmRcIjtcclxuaW1wb3J0IHN0eWxlIGZyb20gXCJAL3N0eWxlcy9tb3VudGFpbmNhcmQubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tIFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbFwiO1xyXG5cclxuY29uc3QgTW91bnRhaW5DYXJvdXNlbCA9ICh7IG1vdW50YWlucyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJvdXNlbFxyXG4gICAgc2hvd1xyXG4gICAgICBpbmZpbml0ZUxvb3A9e3RydWV9XHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGUuY2Fyb3VzZWx9XHJcbiAgICAgIGF1dG9QbGF5PXt0cnVlfVxyXG4gICAgICBzaG93VGh1bWJzPXtmYWxzZX1cclxuICAgICAgc2hvd1N0YXR1cz17ZmFsc2V9XHJcbiAgICAgIHNob3dBcnJvd3M9e2ZhbHNlfVxyXG4gICAgPlxyXG4gICAgICB7bW91bnRhaW5zLm1hcCgobW91bnRhaW4pID0+IChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmltYWdlQ29udGFpbmVyfVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7bW91bnRhaW4udGh1bWJuYWlsX3Bob3RvfSlgXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5vdmVybGF5fT5cclxuICAgICAgICAgICAgPGgzPnttb3VudGFpbi5uYW1lfTwvaDM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L0Nhcm91c2VsPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3VudGFpbkNhcm91c2VsO1xyXG4iXSwibmFtZXMiOlsiTW91bnRhaW5DYXJvdXNlbENhcmQiLCJzdHlsZSIsIkNhcm91c2VsIiwiTW91bnRhaW5DYXJvdXNlbCIsIm1vdW50YWlucyIsImNhcm91c2VsIiwibWFwIiwibW91bnRhaW4iLCJpbWFnZUNvbnRhaW5lciIsImJhY2tncm91bmRJbWFnZSIsInRodW1ibmFpbF9waG90byIsIm92ZXJsYXkiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==