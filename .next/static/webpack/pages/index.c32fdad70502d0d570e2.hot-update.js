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
        style: isOpen ? {
          height: parentRef.current.scrollHeight + "px"
        } : {
          height: ""
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzMyZmRhZDcwNTAyZDBkNTcwZTIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNSyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLE9BQW1CO0FBQUE7O0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjs7QUFDN0Msa0JBQTRCTiwrQ0FBUSxDQUFDLEtBQUQsQ0FBcEM7QUFBQSxNQUFPTyxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxNQUFNQyxTQUFTLEdBQUdSLDZDQUFNLEVBQXhCO0FBRUEsc0JBQ0U7QUFBUyxhQUFTLEVBQUVHLDZGQUFwQjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFQSxrRkFBaEI7QUFBQSw4QkFDRSw4REFBQyw2REFBRDtBQUNFLGVBQU8sRUFBRSx5Q0FEWDtBQUVFLGlCQUFTLEVBQUVJLFNBRmI7QUFHRSxjQUFNLEVBQUVELE1BSFY7QUFJRSxzQkFBYyxFQUFFO0FBSmxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQU9FO0FBQUssYUFBSyxFQUFFQSxNQUFNLEdBQUc7QUFBQ0ssVUFBQUEsTUFBTSxFQUFFSCxTQUFTLENBQUNJLE9BQVYsQ0FBa0JDLFlBQWxCLEdBQWlDO0FBQTFDLFNBQUgsR0FBcUQ7QUFBQ0YsVUFBQUEsTUFBTSxFQUFFO0FBQVQsU0FBdkU7QUFBc0YsV0FBRyxFQUFFSCxTQUEzRjtBQUFzRyxpQkFBUyxhQUFNRixNQUFNLGFBQU1ILHVGQUFOLGNBQTZCQSw4RUFBN0IsY0FBK0NBLHVGQUEvQyxDQUFaLENBQS9HO0FBQUEsK0JBQ0E7QUFBSyxtQkFBUyxZQUFLQSwrRkFBTCxjQUFvQ0EsaUZBQXBDLENBQWQ7QUFBQSxvQkFDR0UsU0FBUyxDQUFDYSxHQUFWLENBQWMsVUFBQ0MsUUFBRDtBQUFBLGdDQUNiLDhEQUFDLDZEQUFEO0FBQWMsc0JBQVEsRUFBRUE7QUFBeEIsZUFBdUNBLFFBQVEsQ0FBQ0MsRUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEYTtBQUFBLFdBQWQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9CRCxDQXhCRDs7R0FBTWhCOztLQUFBQTtBQTBCTiwrREFBZUEsbUJBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3VudGFpbkNhcmRTZWN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVG9nZ2xlQnV0dG9uIGZyb20gXCJAL2NvbXBvbmVudHMvVG9nZ2xlQnV0dG9uXCI7XHJcbmltcG9ydCBNb3VudGFpbkNhcmQgZnJvbSBcIkAvY29tcG9uZW50cy9Nb3VudGFpbkNhcmRcIjtcclxuaW1wb3J0IHN0eWxlIGZyb20gXCJAL3N0eWxlcy9tb3VudGFpbmNhcmQubW9kdWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IE1vdW50YWluQ2FyZFNlY3Rpb24gPSAoeyBtb3VudGFpbnMgfSkgPT4ge1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgcGFyZW50UmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlLm1vdW50YWluQ2FyZFNlY3Rpb259PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29sbGFwc2V9PlxyXG4gICAgICAgIDxUb2dnbGVCdXR0b25cclxuICAgICAgICAgIGJ0blRleHQ9e1wiRk9VUlRFRU4gSElHSEVTVCBNT1VOVEFJTlMgSU4gVEhFIFdPUkxEXCJ9XHJcbiAgICAgICAgICBzZXRJc09wZW49e3NldElzT3Blbn1cclxuICAgICAgICAgIGlzT3Blbj17aXNPcGVufVxyXG4gICAgICAgICAgdG9nZ2xlQnRuQ2xhc3M9e1widG9nZ2xlQnRuQ2xhc3NcIn1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e2lzT3BlbiA/IHtoZWlnaHQ6IHBhcmVudFJlZi5jdXJyZW50LnNjcm9sbEhlaWdodCArIFwicHhcIn0gOiB7aGVpZ2h0OiBcIlwifSB9IHJlZj17cGFyZW50UmVmfSBjbGFzc05hbWU9e2AgJHtpc09wZW4gPyBgJHtzdHlsZS5jb250ZW50UGFyZW50fSAke3N0eWxlLnNob3d9YCA6IGAke3N0eWxlLmNvbnRlbnRQYXJlbnR9YCB9YH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlLm1vdW50YWluQ2FyZENvbnRhaW5lcn0gJHtzdHlsZS5jb250ZW50fWB9PlxyXG4gICAgICAgICAge21vdW50YWlucy5tYXAoKG1vdW50YWluKSA9PiAoXHJcbiAgICAgICAgICAgIDxNb3VudGFpbkNhcmQgbW91bnRhaW49e21vdW50YWlufSBrZXk9e21vdW50YWluLmlkfSAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdW50YWluQ2FyZFNlY3Rpb247XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJlZiIsIlRvZ2dsZUJ1dHRvbiIsIk1vdW50YWluQ2FyZCIsInN0eWxlIiwiTW91bnRhaW5DYXJkU2VjdGlvbiIsIm1vdW50YWlucyIsImlzT3BlbiIsInNldElzT3BlbiIsInBhcmVudFJlZiIsIm1vdW50YWluQ2FyZFNlY3Rpb24iLCJjb2xsYXBzZSIsImhlaWdodCIsImN1cnJlbnQiLCJzY3JvbGxIZWlnaHQiLCJjb250ZW50UGFyZW50Iiwic2hvdyIsIm1vdW50YWluQ2FyZENvbnRhaW5lciIsImNvbnRlbnQiLCJtYXAiLCJtb3VudGFpbiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==