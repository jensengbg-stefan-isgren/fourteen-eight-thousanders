"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MountainCardSection.js":
/*!*******************************************!*\
  !*** ./components/MountainCardSection.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MountainCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/MountainCard */ "./components/MountainCard.js");
/* harmony import */ var _styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/mountaincard.module.scss */ "./styles/mountaincard.module.scss");
/* harmony import */ var _styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ToggleButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ToggleButton */ "./components/ToggleButton.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Stefa\\fourteen-eight-thousanders\\components\\MountainCardSection.js",
    _this = undefined,
    _s = $RefreshSig$();







var MountainCardSection = function MountainCardSection(_ref) {
  _s();

  var mountains = _ref.mountains;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("section", {
    className: (_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().mountainCardSection),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().collapse),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_ToggleButton__WEBPACK_IMPORTED_MODULE_2__.default, {
        btnText: "FOURTEEN HIGHEST MOUNTAINS IN THE WORLD",
        setIsOpen: setIsOpen,
        isOpen: isOpen,
        toggleBtnClass: "toggleBtnClass"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "".concat((_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().mountainCardContainer), " ").concat(isOpen ? "".concat((_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content), " ").concat((_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().show)) : "".concat((_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content))),
        children: mountains.map(function (mountain) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_MountainCard__WEBPACK_IMPORTED_MODULE_1__.default, {
            mountain: mountain
          }, mountain.id, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, _this);
};

_s(MountainCardSection, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");

_c = MountainCardSection;
/* harmony default export */ __webpack_exports__["default"] = (MountainCardSection);

var _c;

$RefreshReg$(_c, "MountainCardSection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDlmZTI1NDUzYjgxNzNjMGU5ZDguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNSSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLE9BQW1CO0FBQUE7O0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjs7QUFDN0Msa0JBQTRCTCwrQ0FBUSxDQUFDLEtBQUQsQ0FBcEM7QUFBQSxNQUFPTSxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFFQSxzQkFDRTtBQUFTLGFBQVMsRUFBRUwsNkZBQXBCO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUVBLGtGQUFoQjtBQUFBLDhCQUNFLDhEQUFDLDZEQUFEO0FBQ0UsZUFBTyxFQUFFLHlDQURYO0FBRUUsaUJBQVMsRUFBRUssU0FGYjtBQUdFLGNBQU0sRUFBRUQsTUFIVjtBQUlFLHNCQUFjLEVBQUU7QUFKbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGLGVBVUU7QUFBSyxpQkFBUyxZQUFLSiwrRkFBTCxjQUFvQ0ksTUFBTSxhQUFNSixpRkFBTixjQUF1QkEsOEVBQXZCLGNBQXlDQSxpRkFBekMsQ0FBMUMsQ0FBZDtBQUFBLGtCQUNHRyxTQUFTLENBQUNRLEdBQVYsQ0FBYyxVQUFDQyxRQUFEO0FBQUEsOEJBQ2IsOERBQUMsNkRBQUQ7QUFBYyxvQkFBUSxFQUFFQTtBQUF4QixhQUF1Q0EsUUFBUSxDQUFDQyxFQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURhO0FBQUEsU0FBZDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvQkQsQ0F2QkQ7O0dBQU1YOztLQUFBQTtBQXlCTiwrREFBZUEsbUJBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3VudGFpbkNhcmRTZWN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNb3VudGFpbkNhcmQgZnJvbSBcIkAvY29tcG9uZW50cy9Nb3VudGFpbkNhcmRcIjtcclxuaW1wb3J0IHN0eWxlIGZyb20gXCJAL3N0eWxlcy9tb3VudGFpbmNhcmQubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IFRvZ2dsZUJ1dHRvbiBmcm9tIFwiQC9jb21wb25lbnRzL1RvZ2dsZUJ1dHRvblwiO1xyXG5cclxuY29uc3QgTW91bnRhaW5DYXJkU2VjdGlvbiA9ICh7IG1vdW50YWlucyB9KSA9PiB7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGUubW91bnRhaW5DYXJkU2VjdGlvbn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb2xsYXBzZX0+XHJcbiAgICAgICAgPFRvZ2dsZUJ1dHRvblxyXG4gICAgICAgICAgYnRuVGV4dD17XCJGT1VSVEVFTiBISUdIRVNUIE1PVU5UQUlOUyBJTiBUSEUgV09STERcIn1cclxuICAgICAgICAgIHNldElzT3Blbj17c2V0SXNPcGVufVxyXG4gICAgICAgICAgaXNPcGVuPXtpc09wZW59XHJcbiAgICAgICAgICB0b2dnbGVCdG5DbGFzcz17XCJ0b2dnbGVCdG5DbGFzc1wifVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZS5tb3VudGFpbkNhcmRDb250YWluZXJ9ICR7aXNPcGVuID8gYCR7c3R5bGUuY29udGVudH0gJHtzdHlsZS5zaG93fWAgOiBgJHtzdHlsZS5jb250ZW50fWAgfWB9PlxyXG4gICAgICAgICAge21vdW50YWlucy5tYXAoKG1vdW50YWluKSA9PiAoXHJcbiAgICAgICAgICAgIDxNb3VudGFpbkNhcmQgbW91bnRhaW49e21vdW50YWlufSBrZXk9e21vdW50YWluLmlkfSAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3VudGFpbkNhcmRTZWN0aW9uO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJNb3VudGFpbkNhcmQiLCJzdHlsZSIsIlRvZ2dsZUJ1dHRvbiIsIk1vdW50YWluQ2FyZFNlY3Rpb24iLCJtb3VudGFpbnMiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJtb3VudGFpbkNhcmRTZWN0aW9uIiwiY29sbGFwc2UiLCJtb3VudGFpbkNhcmRDb250YWluZXIiLCJjb250ZW50Iiwic2hvdyIsIm1hcCIsIm1vdW50YWluIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9