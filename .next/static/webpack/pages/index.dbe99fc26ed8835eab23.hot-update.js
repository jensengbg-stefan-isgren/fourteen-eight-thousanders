"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MountainCard.js":
/*!************************************!*\
  !*** ./components/MountainCard.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/mountaincard.module.scss */ "./styles/mountaincard.module.scss");
/* harmony import */ var _styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Stefa\\Documents\\Projects\\fourteen-eight-thousanders\\components\\MountainCard.js",
    _this = undefined;





var MountainCard = function MountainCard(_ref) {
  var mountain = _ref.mountain;
  var name = mountain.name,
      height = mountain.height,
      summits = mountain.summits,
      deaths = mountain.deaths,
      death_rate = mountain.death_rate;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
    href: "/".concat(name),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("article", {
      className: (_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_2___default().cardC),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_2___default().imageC),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
          src: mountain.thumbnail_photo,
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_2___default().contentC),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
          children: ["Name: ", name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          children: ["Height: ", height]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          children: ["Summits: ", summits]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          children: ["Deaths: ", deaths]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          children: ["Deathrate: ", death_rate]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, _this);
};

_c = MountainCard;
/* harmony default export */ __webpack_exports__["default"] = (MountainCard);

var _c;

$RefreshReg$(_c, "MountainCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGJlOTlmYzI2ZWQ4ODM1ZWFiMjMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUdBLElBQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQ3JDLE1BQVFDLElBQVIsR0FBc0RELFFBQXRELENBQVFDLElBQVI7QUFBQSxNQUFjQyxNQUFkLEdBQXNERixRQUF0RCxDQUFjRSxNQUFkO0FBQUEsTUFBc0JDLE9BQXRCLEdBQXNESCxRQUF0RCxDQUFzQkcsT0FBdEI7QUFBQSxNQUErQkMsTUFBL0IsR0FBc0RKLFFBQXRELENBQStCSSxNQUEvQjtBQUFBLE1BQXVDQyxVQUF2QyxHQUFzREwsUUFBdEQsQ0FBdUNLLFVBQXZDO0FBRUEsc0JBQ0UsOERBQUMsa0RBQUQ7QUFBTSxRQUFJLGFBQU1KLElBQU4sQ0FBVjtBQUFBLDJCQUNFO0FBQVMsZUFBUyxFQUFFSCwrRUFBcEI7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUVBLGdGQUFoQjtBQUFBLCtCQUNFO0FBQUssYUFBRyxFQUFFRSxRQUFRLENBQUNRLGVBQW5CO0FBQW9DLGFBQUcsRUFBQztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUU7QUFBSyxpQkFBUyxFQUFFVixrRkFBaEI7QUFBQSxnQ0FDRTtBQUFBLCtCQUFXRyxJQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUEsaUNBQVlDLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBR0U7QUFBQSxrQ0FBYUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFJRTtBQUFBLGlDQUFZQyxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRixlQUtFO0FBQUEsb0NBQWVDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdCRCxDQW5CRDs7S0FBTU47QUFxQk4sK0RBQWVBLFlBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3VudGFpbkNhcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgc3R5bGUgZnJvbSBcIkAvc3R5bGVzL21vdW50YWluY2FyZC5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuXHJcbmNvbnN0IE1vdW50YWluQ2FyZCA9ICh7IG1vdW50YWluIH0pID0+IHtcclxuICBjb25zdCB7IG5hbWUsIGhlaWdodCwgc3VtbWl0cywgZGVhdGhzLCBkZWF0aF9yYXRlIH0gPSBtb3VudGFpbjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9e2AvJHtuYW1lfWAgfT5cclxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZS5jYXJkQ30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmltYWdlQ30+XHJcbiAgICAgICAgICA8aW1nIHNyYz17bW91bnRhaW4udGh1bWJuYWlsX3Bob3RvfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250ZW50Q30+XHJcbiAgICAgICAgICA8aDM+TmFtZToge25hbWV9PC9oMz5cclxuICAgICAgICAgIDxwPkhlaWdodDoge2hlaWdodH08L3A+XHJcbiAgICAgICAgICA8cD5TdW1taXRzOiB7c3VtbWl0c308L3A+XHJcbiAgICAgICAgICA8cD5EZWF0aHM6IHtkZWF0aHN9PC9wPlxyXG4gICAgICAgICAgPHA+RGVhdGhyYXRlOiB7ZGVhdGhfcmF0ZX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvYXJ0aWNsZT5cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW91bnRhaW5DYXJkO1xyXG5cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJzdHlsZSIsIk1vdW50YWluQ2FyZCIsIm1vdW50YWluIiwibmFtZSIsImhlaWdodCIsInN1bW1pdHMiLCJkZWF0aHMiLCJkZWF0aF9yYXRlIiwiY2FyZEMiLCJpbWFnZUMiLCJ0aHVtYm5haWxfcGhvdG8iLCJjb250ZW50QyJdLCJzb3VyY2VSb290IjoiIn0=