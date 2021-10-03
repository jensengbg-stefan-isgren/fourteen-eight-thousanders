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
/* harmony import */ var _components_ToggleButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ToggleButton */ "./components/ToggleButton.js");
/* harmony import */ var _components_MountainCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/MountainCard */ "./components/MountainCard.js");
/* harmony import */ var _styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/mountaincard.module.scss */ "./styles/mountaincard.module.scss");
/* harmony import */ var _styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_4__);
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

  var parentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("section", {
    className: (_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().mountainCardSection),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().collapse),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_ToggleButton__WEBPACK_IMPORTED_MODULE_1__.default, {
        btnText: "FOURTEEN HIGHEST MOUNTAINS IN THE WORLD",
        setIsOpen: setIsOpen,
        isOpen: isOpen,
        toggleBtnClass: "toggleBtnClass"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        style: {
          height: '500px'
        },
        ref: parentRef,
        className: " ".concat(isOpen ? "".concat((_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contentParent), " ").concat((_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().show)) : "".concat((_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contentParent))),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "".concat((_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().mountainCardContainer), " ").concat((_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content)),
          children: mountains.map(function (mountain) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_MountainCard__WEBPACK_IMPORTED_MODULE_2__.default, {
              mountain: mountain
            }, mountain.id, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 13
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, _this);
};

_s(MountainCardSection, "1L7T2OY4lnnzxvVgoayIfJPAi6U=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDJjM2M2ZjNkZTcxMTU0MzU3ZGQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNSyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLE9BQW1CO0FBQUE7O0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjs7QUFDN0Msa0JBQTRCTiwrQ0FBUSxDQUFDLEtBQUQsQ0FBcEM7QUFBQSxNQUFPTyxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxNQUFNQyxTQUFTLEdBQUdSLDZDQUFNLEVBQXhCO0FBRUEsc0JBQ0U7QUFBUyxhQUFTLEVBQUVHLDZGQUFwQjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFQSxrRkFBaEI7QUFBQSw4QkFDRSw4REFBQyw2REFBRDtBQUNFLGVBQU8sRUFBRSx5Q0FEWDtBQUVFLGlCQUFTLEVBQUVJLFNBRmI7QUFHRSxjQUFNLEVBQUVELE1BSFY7QUFJRSxzQkFBYyxFQUFFO0FBSmxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQU9FO0FBQUssYUFBSyxFQUFFO0FBQUNLLFVBQUFBLE1BQU0sRUFBRTtBQUFULFNBQVo7QUFBK0IsV0FBRyxFQUFFSCxTQUFwQztBQUErQyxpQkFBUyxhQUFNRixNQUFNLGFBQU1ILHVGQUFOLGNBQTZCQSw4RUFBN0IsY0FBK0NBLHVGQUEvQyxDQUFaLENBQXhEO0FBQUEsK0JBQ0E7QUFBSyxtQkFBUyxZQUFLQSwrRkFBTCxjQUFvQ0EsaUZBQXBDLENBQWQ7QUFBQSxvQkFDR0UsU0FBUyxDQUFDVyxHQUFWLENBQWMsVUFBQ0MsUUFBRDtBQUFBLGdDQUNiLDhEQUFDLDZEQUFEO0FBQWMsc0JBQVEsRUFBRUE7QUFBeEIsZUFBdUNBLFFBQVEsQ0FBQ0MsRUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEYTtBQUFBLFdBQWQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9CRCxDQXhCRDs7R0FBTWQ7O0tBQUFBO0FBMEJOLCtEQUFlQSxtQkFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01vdW50YWluQ2FyZFNlY3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUb2dnbGVCdXR0b24gZnJvbSBcIkAvY29tcG9uZW50cy9Ub2dnbGVCdXR0b25cIjtcclxuaW1wb3J0IE1vdW50YWluQ2FyZCBmcm9tIFwiQC9jb21wb25lbnRzL01vdW50YWluQ2FyZFwiO1xyXG5pbXBvcnQgc3R5bGUgZnJvbSBcIkAvc3R5bGVzL21vdW50YWluY2FyZC5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuY29uc3QgTW91bnRhaW5DYXJkU2VjdGlvbiA9ICh7IG1vdW50YWlucyB9KSA9PiB7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBwYXJlbnRSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGUubW91bnRhaW5DYXJkU2VjdGlvbn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb2xsYXBzZX0+XHJcbiAgICAgICAgPFRvZ2dsZUJ1dHRvblxyXG4gICAgICAgICAgYnRuVGV4dD17XCJGT1VSVEVFTiBISUdIRVNUIE1PVU5UQUlOUyBJTiBUSEUgV09STERcIn1cclxuICAgICAgICAgIHNldElzT3Blbj17c2V0SXNPcGVufVxyXG4gICAgICAgICAgaXNPcGVuPXtpc09wZW59XHJcbiAgICAgICAgICB0b2dnbGVCdG5DbGFzcz17XCJ0b2dnbGVCdG5DbGFzc1wifVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogJzUwMHB4J319IHJlZj17cGFyZW50UmVmfSBjbGFzc05hbWU9e2AgJHtpc09wZW4gPyBgJHtzdHlsZS5jb250ZW50UGFyZW50fSAke3N0eWxlLnNob3d9YCA6IGAke3N0eWxlLmNvbnRlbnRQYXJlbnR9YCB9YH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlLm1vdW50YWluQ2FyZENvbnRhaW5lcn0gJHtzdHlsZS5jb250ZW50fWB9PlxyXG4gICAgICAgICAge21vdW50YWlucy5tYXAoKG1vdW50YWluKSA9PiAoXHJcbiAgICAgICAgICAgIDxNb3VudGFpbkNhcmQgbW91bnRhaW49e21vdW50YWlufSBrZXk9e21vdW50YWluLmlkfSAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdW50YWluQ2FyZFNlY3Rpb247XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJlZiIsIlRvZ2dsZUJ1dHRvbiIsIk1vdW50YWluQ2FyZCIsInN0eWxlIiwiTW91bnRhaW5DYXJkU2VjdGlvbiIsIm1vdW50YWlucyIsImlzT3BlbiIsInNldElzT3BlbiIsInBhcmVudFJlZiIsIm1vdW50YWluQ2FyZFNlY3Rpb24iLCJjb2xsYXBzZSIsImhlaWdodCIsImNvbnRlbnRQYXJlbnQiLCJzaG93IiwibW91bnRhaW5DYXJkQ29udGFpbmVyIiwiY29udGVudCIsIm1hcCIsIm1vdW50YWluIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9