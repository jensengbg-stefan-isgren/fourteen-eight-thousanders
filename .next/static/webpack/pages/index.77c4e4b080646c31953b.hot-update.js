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
            lineNumber: 11,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: (_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().contentContainer),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
              children: "tjo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 10,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzdjNGU0YjA4MDY0NmMzMTk1M2IuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixPQUFtQjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDMUMsc0JBQ0U7QUFBSyxhQUFTLEVBQUVILDJGQUFoQjtBQUFBLDJCQUNFLDhEQUFDLCtEQUFEO0FBQUEsZ0JBQ0dHLFNBQVMsQ0FBQ0UsR0FBVixDQUFjLFVBQUNDLFFBQUQ7QUFBQSw0QkFDYjtBQUFLLG1CQUFTLEVBQUVOLGdGQUFoQjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsWUFBS0Esd0ZBQUwsY0FBNkJBLDJGQUE3QixDQUFkO0FBQ0EsaUJBQUssRUFBRTtBQUNMUyxjQUFBQSxlQUFlLGdCQUFTSCxRQUFRLENBQUNJLGVBQWxCO0FBRFY7QUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBS0U7QUFBSyxxQkFBUyxFQUFFViwwRkFBaEI7QUFBQSxtQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURhO0FBQUEsT0FBZDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwQ0QsQ0EzQ0Q7O0tBQU1FO0FBNkNOLCtEQUFlQSxnQkFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01vdW50YWluQ2Fyb3VzZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdW50YWluQ2Fyb3VzZWxDYXJkIGZyb20gXCJAL2NvbXBvbmVudHMvTW91bnRhaW5DYXJvdXNlbENhcmRcIjtcclxuaW1wb3J0IHN0eWxlIGZyb20gXCJAL3N0eWxlcy9tb3VudGFpbmNhcmQubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tIFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbFwiO1xyXG5cclxuY29uc3QgTW91bnRhaW5DYXJvdXNlbCA9ICh7IG1vdW50YWlucyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jYXJvdXNlbENvbnRhaW5lcn0+XHJcbiAgICAgIDxDYXJvdXNlbD5cclxuICAgICAgICB7bW91bnRhaW5zLm1hcCgobW91bnRhaW4pID0+IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ub2pqYW59PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGUuaW1hZ2VDb250YWluZXJ9ICR7c3R5bGUuY2Fyb3VzZWxDb250YWluZXJ9YH1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHttb3VudGFpbi50aHVtYm5haWxfcGhvdG99KWAsXHJcbiAgICAgICAgICAgIH19PjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGVudENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxwPnRqbzwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0Nhcm91c2VsPlxyXG5cclxuICAgICAgey8qIDxDYXJvdXNlbFxyXG4gICAgICAgIHNob3dJbmRpY2F0b3JzPXt0cnVlfVxyXG4gICAgICAgIGluZmluaXRlTG9vcD17dHJ1ZX1cclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmNhcm91c2VsfVxyXG4gICAgICAgIGF1dG9QbGF5PXt0cnVlfVxyXG4gICAgICAgIHNob3dUaHVtYnM9e2ZhbHNlfVxyXG4gICAgICAgIHNob3dTdGF0dXM9e2ZhbHNlfVxyXG4gICAgICAgIHNob3dBcnJvd3M9e3RydWV9XHJcbiAgICAgID5cclxuICAgICAgICB7bW91bnRhaW5zLm1hcCgobW91bnRhaW4pID0+IChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5pbWFnZUNvbnRhaW5lcn1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHttb3VudGFpbi50aHVtYm5haWxfcGhvdG99KWAsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5vdmVybGF5fT5cclxuICAgICAgICAgICAgICA8aDM+e21vdW50YWluLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICA8cD57YFsgJHttb3VudGFpbi5oZWlnaHR9bSBdYH08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvQ2Fyb3VzZWw+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdW50YWluQ2Fyb3VzZWw7XHJcbiJdLCJuYW1lcyI6WyJNb3VudGFpbkNhcm91c2VsQ2FyZCIsInN0eWxlIiwiQ2Fyb3VzZWwiLCJNb3VudGFpbkNhcm91c2VsIiwibW91bnRhaW5zIiwiY2Fyb3VzZWxDb250YWluZXIiLCJtYXAiLCJtb3VudGFpbiIsIm5vamphbiIsImltYWdlQ29udGFpbmVyIiwiYmFja2dyb3VuZEltYWdlIiwidGh1bWJuYWlsX3Bob3RvIiwiY29udGVudENvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=