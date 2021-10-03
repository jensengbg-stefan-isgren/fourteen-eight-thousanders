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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().carouselContainer),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__.Carousel, {
      showIndicators: true,
      infiniteLoop: true,
      autoPlay: true,
      showThumbs: false,
      showStatus: false,
      showArrows: true,
      children: mountains.map(function (mountain) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: (_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().nojjan),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "".concat((_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().imageContainer), " ").concat((_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().carouselContainer)),
            style: {
              backgroundImage: "url(".concat(mountain.thumbnail_photo, ")")
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: (_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().contentContainer),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
              children: "tjo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, _this)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDlkNzBmMmM5Njk4Nzg1NzQ5NmQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixPQUFtQjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDMUMsc0JBQ0U7QUFBSyxhQUFTLEVBQUVILDJGQUFoQjtBQUFBLDJCQUNFLDhEQUFDLCtEQUFEO0FBQ0Usb0JBQWMsRUFBRSxJQURsQjtBQUVFLGtCQUFZLEVBQUUsSUFGaEI7QUFHRSxjQUFRLEVBQUUsSUFIWjtBQUlFLGdCQUFVLEVBQUUsS0FKZDtBQUtFLGdCQUFVLEVBQUUsS0FMZDtBQU1FLGdCQUFVLEVBQUUsSUFOZDtBQUFBLGdCQVFHRyxTQUFTLENBQUNFLEdBQVYsQ0FBYyxVQUFDQyxRQUFEO0FBQUEsNEJBQ2I7QUFBSyxtQkFBUyxFQUFFTixnRkFBaEI7QUFBQSxrQ0FDRTtBQUNFLHFCQUFTLFlBQUtBLHdGQUFMLGNBQTZCQSwyRkFBN0IsQ0FEWDtBQUVFLGlCQUFLLEVBQUU7QUFDTFMsY0FBQUEsZUFBZSxnQkFBU0gsUUFBUSxDQUFDSSxlQUFsQjtBQURWO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQU9FO0FBQUsscUJBQVMsRUFBRVYsMEZBQWhCO0FBQUEsbUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYTtBQUFBLE9BQWQ7QUFSSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0RELENBbkREOztLQUFNRTtBQXFETiwrREFBZUEsZ0JBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3VudGFpbkNhcm91c2VsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3VudGFpbkNhcm91c2VsQ2FyZCBmcm9tIFwiQC9jb21wb25lbnRzL01vdW50YWluQ2Fyb3VzZWxDYXJkXCI7XHJcbmltcG9ydCBzdHlsZSBmcm9tIFwiQC9zdHlsZXMvbW91bnRhaW5jYXJkLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWxcIjtcclxuXHJcbmNvbnN0IE1vdW50YWluQ2Fyb3VzZWwgPSAoeyBtb3VudGFpbnMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2Fyb3VzZWxDb250YWluZXJ9PlxyXG4gICAgICA8Q2Fyb3VzZWxcclxuICAgICAgICBzaG93SW5kaWNhdG9ycz17dHJ1ZX1cclxuICAgICAgICBpbmZpbml0ZUxvb3A9e3RydWV9XHJcbiAgICAgICAgYXV0b1BsYXk9e3RydWV9XHJcbiAgICAgICAgc2hvd1RodW1icz17ZmFsc2V9XHJcbiAgICAgICAgc2hvd1N0YXR1cz17ZmFsc2V9XHJcbiAgICAgICAgc2hvd0Fycm93cz17dHJ1ZX1cclxuICAgICAgPlxyXG4gICAgICAgIHttb3VudGFpbnMubWFwKChtb3VudGFpbikgPT4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm5vamphbn0+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlLmltYWdlQ29udGFpbmVyfSAke3N0eWxlLmNhcm91c2VsQ29udGFpbmVyfWB9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke21vdW50YWluLnRodW1ibmFpbF9waG90b30pYCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250ZW50Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICA8cD50am88L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvQ2Fyb3VzZWw+XHJcblxyXG4gICAgICB7LyogPENhcm91c2VsXHJcbiAgICAgICAgc2hvd0luZGljYXRvcnM9e3RydWV9XHJcbiAgICAgICAgaW5maW5pdGVMb29wPXt0cnVlfVxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGUuY2Fyb3VzZWx9XHJcbiAgICAgICAgYXV0b1BsYXk9e3RydWV9XHJcbiAgICAgICAgc2hvd1RodW1icz17ZmFsc2V9XHJcbiAgICAgICAgc2hvd1N0YXR1cz17ZmFsc2V9XHJcbiAgICAgICAgc2hvd0Fycm93cz17dHJ1ZX1cclxuICAgICAgPlxyXG4gICAgICAgIHttb3VudGFpbnMubWFwKChtb3VudGFpbikgPT4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmltYWdlQ29udGFpbmVyfVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke21vdW50YWluLnRodW1ibmFpbF9waG90b30pYCxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm92ZXJsYXl9PlxyXG4gICAgICAgICAgICAgIDxoMz57bW91bnRhaW4ubmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgIDxwPntgWyAke21vdW50YWluLmhlaWdodH1tIF1gfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9DYXJvdXNlbD4gKi99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW91bnRhaW5DYXJvdXNlbDtcclxuIl0sIm5hbWVzIjpbIk1vdW50YWluQ2Fyb3VzZWxDYXJkIiwic3R5bGUiLCJDYXJvdXNlbCIsIk1vdW50YWluQ2Fyb3VzZWwiLCJtb3VudGFpbnMiLCJjYXJvdXNlbENvbnRhaW5lciIsIm1hcCIsIm1vdW50YWluIiwibm9qamFuIiwiaW1hZ2VDb250YWluZXIiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ0aHVtYm5haWxfcGhvdG8iLCJjb250ZW50Q29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==