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
/* harmony import */ var _styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/mountaincard.module.scss */ "./styles/mountaincard.module.scss");
/* harmony import */ var _styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_backgrounds_img_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/images/backgrounds/img.jpg */ "./public/images/backgrounds/img.jpg");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("section", {
    className: (_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().mountainCardSection),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().collapse),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
        src: _images_backgrounds_img_jpg__WEBPACK_IMPORTED_MODULE_3__.default,
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_ToggleButton__WEBPACK_IMPORTED_MODULE_1__.default, {
        btnText: "FOURTEEN HIGHEST MOUNTAINS IN THE WORLD",
        setIsOpen: setIsOpen,
        isOpen: isOpen,
        toggleBtnClass: "toggleBtnClass"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        style: isOpen ? {
          height: parentRef.current.scrollHeight + "px"
        } : {
          height: "0px"
        },
        ref: parentRef,
        className: " ".concat(isOpen ? "".concat((_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().contentParent), " ").concat((_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().show)) : "".concat((_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().contentParent))),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "".concat((_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().mountainCardContainer), " ").concat((_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().content)),
          children: mountains.map(function (mountain) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_MountainCard__WEBPACK_IMPORTED_MODULE_2__.default, {
              mountain: mountain
            }, mountain.id, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjNkZTdhOTZmZTFkZTkzODFmZmEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNTSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLE9BQW1CO0FBQUE7O0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjs7QUFDN0Msa0JBQTRCUCwrQ0FBUSxDQUFDLEtBQUQsQ0FBcEM7QUFBQSxNQUFPUSxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxNQUFNQyxTQUFTLEdBQUdULDZDQUFNLEVBQXhCO0FBRUEsc0JBQ0U7QUFBUyxhQUFTLEVBQUVHLDZGQUFwQjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFQSxrRkFBaEI7QUFBQSw4QkFDQTtBQUFLLFdBQUcsRUFBRUMsZ0VBQVY7QUFBbUIsV0FBRyxFQUFDO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQSxlQUVFLDhEQUFDLDZEQUFEO0FBQ0UsZUFBTyxFQUFFLHlDQURYO0FBRUUsaUJBQVMsRUFBRUksU0FGYjtBQUdFLGNBQU0sRUFBRUQsTUFIVjtBQUlFLHNCQUFjLEVBQUU7QUFKbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBU0U7QUFDRSxhQUFLLEVBQ0hBLE1BQU0sR0FDRjtBQUFFSyxVQUFBQSxNQUFNLEVBQUVILFNBQVMsQ0FBQ0ksT0FBVixDQUFrQkMsWUFBbEIsR0FBaUM7QUFBM0MsU0FERSxHQUVGO0FBQUVGLFVBQUFBLE1BQU0sRUFBRTtBQUFWLFNBSlI7QUFNRSxXQUFHLEVBQUVILFNBTlA7QUFPRSxpQkFBUyxhQUNQRixNQUFNLGFBQ0NKLHVGQURELGNBQ3dCQSw4RUFEeEIsY0FFQ0EsdUZBRkQsQ0FEQyxDQVBYO0FBQUEsK0JBYUU7QUFBSyxtQkFBUyxZQUFLQSwrRkFBTCxjQUFvQ0EsaUZBQXBDLENBQWQ7QUFBQSxvQkFDR0csU0FBUyxDQUFDYSxHQUFWLENBQWMsVUFBQ0MsUUFBRDtBQUFBLGdDQUNiLDhEQUFDLDZEQUFEO0FBQWMsc0JBQVEsRUFBRUE7QUFBeEIsZUFBdUNBLFFBQVEsQ0FBQ0MsRUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEYTtBQUFBLFdBQWQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlDRCxDQXJDRDs7R0FBTWhCOztLQUFBQTtBQXVDTiwrREFBZUEsbUJBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3VudGFpbkNhcmRTZWN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFRvZ2dsZUJ1dHRvbiBmcm9tIFwiQC9jb21wb25lbnRzL1RvZ2dsZUJ1dHRvblwiO1xyXG5pbXBvcnQgTW91bnRhaW5DYXJkIGZyb20gXCJAL2NvbXBvbmVudHMvTW91bnRhaW5DYXJkXCI7XHJcbmltcG9ydCBzdHlsZSBmcm9tIFwiQC9zdHlsZXMvbW91bnRhaW5jYXJkLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBCZ0ltYWdlIGZyb20gJ0AvaW1hZ2VzL2JhY2tncm91bmRzL2ltZy5qcGcnXHJcblxyXG5jb25zdCBNb3VudGFpbkNhcmRTZWN0aW9uID0gKHsgbW91bnRhaW5zIH0pID0+IHtcclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHBhcmVudFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZS5tb3VudGFpbkNhcmRTZWN0aW9ufT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbGxhcHNlfT5cclxuICAgICAgPGltZyBzcmM9e0JnSW1hZ2V9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgPFRvZ2dsZUJ1dHRvblxyXG4gICAgICAgICAgYnRuVGV4dD17XCJGT1VSVEVFTiBISUdIRVNUIE1PVU5UQUlOUyBJTiBUSEUgV09STERcIn1cclxuICAgICAgICAgIHNldElzT3Blbj17c2V0SXNPcGVufVxyXG4gICAgICAgICAgaXNPcGVuPXtpc09wZW59XHJcbiAgICAgICAgICB0b2dnbGVCdG5DbGFzcz17XCJ0b2dnbGVCdG5DbGFzc1wifVxyXG4gICAgICAgIC8+XHJcbiAgICAgIFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgaXNPcGVuXHJcbiAgICAgICAgICAgICAgPyB7IGhlaWdodDogcGFyZW50UmVmLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiIH1cclxuICAgICAgICAgICAgICA6IHsgaGVpZ2h0OiBcIjBweFwiIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJlZj17cGFyZW50UmVmfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgICR7XHJcbiAgICAgICAgICAgIGlzT3BlblxyXG4gICAgICAgICAgICAgID8gYCR7c3R5bGUuY29udGVudFBhcmVudH0gJHtzdHlsZS5zaG93fWBcclxuICAgICAgICAgICAgICA6IGAke3N0eWxlLmNvbnRlbnRQYXJlbnR9YFxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlLm1vdW50YWluQ2FyZENvbnRhaW5lcn0gJHtzdHlsZS5jb250ZW50fWB9PlxyXG4gICAgICAgICAgICB7bW91bnRhaW5zLm1hcCgobW91bnRhaW4pID0+IChcclxuICAgICAgICAgICAgICA8TW91bnRhaW5DYXJkIG1vdW50YWluPXttb3VudGFpbn0ga2V5PXttb3VudGFpbi5pZH0gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdW50YWluQ2FyZFNlY3Rpb247XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJlZiIsIlRvZ2dsZUJ1dHRvbiIsIk1vdW50YWluQ2FyZCIsInN0eWxlIiwiQmdJbWFnZSIsIk1vdW50YWluQ2FyZFNlY3Rpb24iLCJtb3VudGFpbnMiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJwYXJlbnRSZWYiLCJtb3VudGFpbkNhcmRTZWN0aW9uIiwiY29sbGFwc2UiLCJoZWlnaHQiLCJjdXJyZW50Iiwic2Nyb2xsSGVpZ2h0IiwiY29udGVudFBhcmVudCIsInNob3ciLCJtb3VudGFpbkNhcmRDb250YWluZXIiLCJjb250ZW50IiwibWFwIiwibW91bnRhaW4iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=