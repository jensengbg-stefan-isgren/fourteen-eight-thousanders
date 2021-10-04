"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MountainCard.js":
/*!************************************!*\
  !*** ./components/MountainCard.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/mountaincard.module.scss */ "./styles/mountaincard.module.scss");
/* harmony import */ var _styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Stefa\\Documents\\Projects\\fourteen-eight-thousanders\\components\\MountainCard.js",
    _this = undefined;




var MountainCard = function MountainCard(_ref) {
  var mountain = _ref.mountain;
  var name = mountain.name,
      height = mountain.height,
      summits = mountain.summits,
      deaths = mountain.deaths;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("article", {
    className: (_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_1___default().cardC),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_1___default().imageC),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: mountain.thumbnail_photo,
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_1___default().contentC),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: ["Name: ", name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Height: ", height]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Height: ", summits]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Deaths: ", deaths]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODA2NTE3NWI1ZDViOWQ0NWE0Y2YuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQ0EsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBa0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDckMsTUFBUUMsSUFBUixHQUEwQ0QsUUFBMUMsQ0FBUUMsSUFBUjtBQUFBLE1BQWNDLE1BQWQsR0FBMENGLFFBQTFDLENBQWNFLE1BQWQ7QUFBQSxNQUFzQkMsT0FBdEIsR0FBMENILFFBQTFDLENBQXNCRyxPQUF0QjtBQUFBLE1BQStCQyxNQUEvQixHQUEwQ0osUUFBMUMsQ0FBK0JJLE1BQS9CO0FBRUEsc0JBQ0U7QUFBUyxhQUFTLEVBQUVOLCtFQUFwQjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFQSxnRkFBaEI7QUFBQSw2QkFDRTtBQUFLLFdBQUcsRUFBRUUsUUFBUSxDQUFDTyxlQUFuQjtBQUFvQyxXQUFHLEVBQUM7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFO0FBQUssZUFBUyxFQUFFVCxrRkFBaEI7QUFBQSw4QkFDRTtBQUFBLDZCQUFXRyxJQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBQSwrQkFBWUMsTUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUdFO0FBQUEsK0JBQVlDLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsZUFJRTtBQUFBLCtCQUFZQyxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBYUQsQ0FoQkQ7O0tBQU1MO0FBa0JOLCtEQUFlQSxZQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTW91bnRhaW5DYXJkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZSBmcm9tIFwiQC9zdHlsZXMvbW91bnRhaW5jYXJkLm1vZHVsZS5zY3NzXCI7XHJcbmNvbnN0IE1vdW50YWluQ2FyZCA9ICh7IG1vdW50YWluIH0pID0+IHtcclxuICBjb25zdCB7IG5hbWUsIGhlaWdodCwgc3VtbWl0cywgZGVhdGhzIH0gPSBtb3VudGFpbjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17c3R5bGUuY2FyZEN9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaW1hZ2VDfT5cclxuICAgICAgICA8aW1nIHNyYz17bW91bnRhaW4udGh1bWJuYWlsX3Bob3RvfSBhbHQ9XCJcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRlbnRDfT5cclxuICAgICAgICA8aDM+TmFtZToge25hbWV9PC9oMz5cclxuICAgICAgICA8cD5IZWlnaHQ6IHtoZWlnaHR9PC9wPlxyXG4gICAgICAgIDxwPkhlaWdodDoge3N1bW1pdHN9PC9wPlxyXG4gICAgICAgIDxwPkRlYXRoczoge2RlYXRoc308L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3VudGFpbkNhcmQ7XHJcbiJdLCJuYW1lcyI6WyJzdHlsZSIsIk1vdW50YWluQ2FyZCIsIm1vdW50YWluIiwibmFtZSIsImhlaWdodCIsInN1bW1pdHMiLCJkZWF0aHMiLCJjYXJkQyIsImltYWdlQyIsInRodW1ibmFpbF9waG90byIsImNvbnRlbnRDIl0sInNvdXJjZVJvb3QiOiIifQ==