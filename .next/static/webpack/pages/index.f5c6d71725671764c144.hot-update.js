"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MountainCarousel.js":
/*!****************************************!*\
  !*** ./components/MountainCarousel.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-responsive-carousel */ "./node_modules/react-responsive-carousel/lib/js/index.js");
/* harmony import */ var _styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/mountaincard.module.scss */ "./styles/mountaincard.module.scss");
/* harmony import */ var _styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_MountainCarouselCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/MountainCarouselCard */ "./components/MountainCarouselCard.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Stefa\\Documents\\Projects\\fourteen-eight-thousanders\\components\\MountainCarousel.js",
    _this = undefined;






var MountainCarousel = function MountainCarousel(_ref) {
  var mountains = _ref.mountains;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().carouselContainer),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
      children: "OVERVIEW OF ALL THE BEAUTIFUL MOUNTAINS"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_0__.Carousel, {
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
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: (_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().overlay)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: (_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().contentContainer),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
              children: mountain.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
              children: " [ ".concat(mountain.height, "m ]")
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, _this)]
        }, mountain.id, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjVjNmQ3MTcyNTY3MTc2NGMxNDQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixPQUFtQjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDMUMsc0JBQ0U7QUFBSyxhQUFTLEVBQUVILDJGQUFoQjtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSw4REFBQywrREFBRDtBQUNFLG9CQUFjLEVBQUUsSUFEbEI7QUFFRSxrQkFBWSxFQUFFLElBRmhCO0FBR0UsY0FBUSxFQUFFLElBSFo7QUFJRSxnQkFBVSxFQUFFLEtBSmQ7QUFLRSxnQkFBVSxFQUFFLEtBTGQ7QUFNRSxnQkFBVSxFQUFFLElBTmQ7QUFBQSxnQkFRR0csU0FBUyxDQUFDRSxHQUFWLENBQWMsVUFBQ0MsUUFBRDtBQUFBLDRCQUNiO0FBQXVCLG1CQUFTLEVBQUVOLGdGQUFsQztBQUFBLGtDQUNFO0FBQ0UscUJBQVMsWUFBS0Esd0ZBQUwsY0FBNkJBLDJGQUE3QixDQURYO0FBRUUsaUJBQUssRUFBRTtBQUNMUyxjQUFBQSxlQUFlLGdCQUFTSCxRQUFRLENBQUNJLGVBQWxCO0FBRFYsYUFGVDtBQUFBLG1DQU1FO0FBQUssdUJBQVMsRUFBRVYsaUZBQWFXO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBU0U7QUFBSyxxQkFBUyxFQUFFWCwwRkFBaEI7QUFBQSxvQ0FDRTtBQUFBLHdCQUFLTSxRQUFRLENBQUNPO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUEscUNBQVVQLFFBQVEsQ0FBQ1EsTUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFURjtBQUFBLFdBQVVSLFFBQVEsQ0FBQ1MsRUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYTtBQUFBLE9BQWQ7QUFSSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE4QkQsQ0EvQkQ7O0tBQU1iO0FBaUNOLCtEQUFlQSxnQkFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01vdW50YWluQ2Fyb3VzZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tIFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbFwiO1xyXG5pbXBvcnQgc3R5bGUgZnJvbSBcIkAvc3R5bGVzL21vdW50YWluY2FyZC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgTW91bnRhaW5DYXJvdXNlbENhcmQgZnJvbSBcIkAvY29tcG9uZW50cy9Nb3VudGFpbkNhcm91c2VsQ2FyZFwiO1xyXG5cclxuY29uc3QgTW91bnRhaW5DYXJvdXNlbCA9ICh7IG1vdW50YWlucyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jYXJvdXNlbENvbnRhaW5lcn0+XHJcbiAgICAgIDxoMj5PVkVSVklFVyBPRiBBTEwgVEhFIEJFQVVUSUZVTCBNT1VOVEFJTlM8L2gyPlxyXG4gICAgICA8Q2Fyb3VzZWxcclxuICAgICAgICBzaG93SW5kaWNhdG9ycz17dHJ1ZX1cclxuICAgICAgICBpbmZpbml0ZUxvb3A9e3RydWV9XHJcbiAgICAgICAgYXV0b1BsYXk9e3RydWV9XHJcbiAgICAgICAgc2hvd1RodW1icz17ZmFsc2V9XHJcbiAgICAgICAgc2hvd1N0YXR1cz17ZmFsc2V9XHJcbiAgICAgICAgc2hvd0Fycm93cz17dHJ1ZX1cclxuICAgICAgPlxyXG4gICAgICAgIHttb3VudGFpbnMubWFwKChtb3VudGFpbikgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e21vdW50YWluLmlkfSBjbGFzc05hbWU9e3N0eWxlLm5vamphbn0+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlLmltYWdlQ29udGFpbmVyfSAke3N0eWxlLmNhcm91c2VsQ29udGFpbmVyfWB9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke21vdW50YWluLnRodW1ibmFpbF9waG90b30pYCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm92ZXJsYXl9PjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRlbnRDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIDxoMz57bW91bnRhaW4ubmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgIDxwPntgIFsgJHttb3VudGFpbi5oZWlnaHR9bSBdYH08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW91bnRhaW5DYXJvdXNlbDtcclxuIl0sIm5hbWVzIjpbIkNhcm91c2VsIiwic3R5bGUiLCJNb3VudGFpbkNhcm91c2VsQ2FyZCIsIk1vdW50YWluQ2Fyb3VzZWwiLCJtb3VudGFpbnMiLCJjYXJvdXNlbENvbnRhaW5lciIsIm1hcCIsIm1vdW50YWluIiwibm9qamFuIiwiaW1hZ2VDb250YWluZXIiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ0aHVtYm5haWxfcGhvdG8iLCJvdmVybGF5IiwiY29udGVudENvbnRhaW5lciIsIm5hbWUiLCJoZWlnaHQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=