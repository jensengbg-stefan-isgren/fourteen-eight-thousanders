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
        children: "Deaths: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
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


/***/ }),

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
var _jsxFileName = "C:\\Users\\Stefa\\Documents\\Projects\\fourteen-eight-thousanders\\components\\MountainCardSection.js",
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
    className: "".concat((_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().mountainCardSection), " ", "darkSection"),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().collapse),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_ToggleButton__WEBPACK_IMPORTED_MODULE_1__.default, {
        btnText: "MEET THE GIANTS OF THE WORLD",
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
          height: "0px"
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
              lineNumber: 34,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWNiMmIyOTliNGEzMmY3N2RhYmMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQ0EsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBa0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDckMsTUFBUUMsSUFBUixHQUEwQ0QsUUFBMUMsQ0FBUUMsSUFBUjtBQUFBLE1BQWNDLE1BQWQsR0FBMENGLFFBQTFDLENBQWNFLE1BQWQ7QUFBQSxNQUFzQkMsT0FBdEIsR0FBMENILFFBQTFDLENBQXNCRyxPQUF0QjtBQUFBLE1BQStCQyxNQUEvQixHQUEwQ0osUUFBMUMsQ0FBK0JJLE1BQS9CO0FBRUEsc0JBQ0U7QUFBUyxhQUFTLEVBQUVOLCtFQUFwQjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFQSxnRkFBaEI7QUFBQSw2QkFDRTtBQUFLLFdBQUcsRUFBRUUsUUFBUSxDQUFDTyxlQUFuQjtBQUFvQyxXQUFHLEVBQUM7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFO0FBQUssZUFBUyxFQUFFVCxrRkFBaEI7QUFBQSw4QkFDRTtBQUFBLDZCQUFXRyxJQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBQSwrQkFBWUMsTUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFZRCxDQWZEOztLQUFNSDtBQWlCTiwrREFBZUEsWUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNYSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLE9BQW1CO0FBQUE7O0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjs7QUFDN0Msa0JBQTRCSiwrQ0FBUSxDQUFDLEtBQUQsQ0FBcEM7QUFBQSxNQUFPSyxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxNQUFNQyxTQUFTLEdBQUdOLDZDQUFNLEVBQXhCO0FBRUEsc0JBQ0U7QUFBUyxhQUFTLFlBQUtaLDZGQUFMLE9BQWtDLGFBQWxDLENBQWxCO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUVBLGtGQUFoQjtBQUFBLDhCQUNFLDhEQUFDLDZEQUFEO0FBQ0UsZUFBTyxFQUFFLDhCQURYO0FBRUUsaUJBQVMsRUFBRWlCLFNBRmI7QUFHRSxjQUFNLEVBQUVELE1BSFY7QUFJRSxzQkFBYyxFQUFFO0FBSmxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQU9FO0FBQ0UsYUFBSyxFQUNIQSxNQUFNLEdBQ0Y7QUFBRVosVUFBQUEsTUFBTSxFQUFFYyxTQUFTLENBQUNHLE9BQVYsQ0FBa0JDLFlBQWxCLEdBQWlDO0FBQTNDLFNBREUsR0FFRjtBQUFFbEIsVUFBQUEsTUFBTSxFQUFFO0FBQVYsU0FKUjtBQU1FLFdBQUcsRUFBRWMsU0FOUDtBQU9FLGlCQUFTLGFBQ1BGLE1BQU0sYUFDQ2hCLHVGQURELGNBQ3dCQSw4RUFEeEIsY0FFQ0EsdUZBRkQsQ0FEQyxDQVBYO0FBQUEsK0JBYUU7QUFBSyxtQkFBUyxZQUFLQSwrRkFBTCxjQUFvQ0EsaUZBQXBDLENBQWQ7QUFBQSxvQkFDR2UsU0FBUyxDQUFDWSxHQUFWLENBQWMsVUFBQ3pCLFFBQUQ7QUFBQSxnQ0FDYiw4REFBQyw2REFBRDtBQUFjLHNCQUFRLEVBQUVBO0FBQXhCLGVBQXVDQSxRQUFRLENBQUMwQixFQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURhO0FBQUEsV0FBZDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK0JELENBbkNEOztHQUFNZDs7S0FBQUE7QUFxQ04sK0RBQWVBLG1CQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTW91bnRhaW5DYXJkLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01vdW50YWluQ2FyZFNlY3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlIGZyb20gXCJAL3N0eWxlcy9tb3VudGFpbmNhcmQubW9kdWxlLnNjc3NcIjtcclxuY29uc3QgTW91bnRhaW5DYXJkID0gKHsgbW91bnRhaW4gfSkgPT4ge1xyXG4gIGNvbnN0IHsgbmFtZSwgaGVpZ2h0LCBzdW1taXRzLCBkZWF0aHMgfSA9IG1vdW50YWluO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZS5jYXJkQ30+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pbWFnZUN9PlxyXG4gICAgICAgIDxpbWcgc3JjPXttb3VudGFpbi50aHVtYm5haWxfcGhvdG99IGFsdD1cIlwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGVudEN9PlxyXG4gICAgICAgIDxoMz5OYW1lOiB7bmFtZX08L2gzPlxyXG4gICAgICAgIDxwPkhlaWdodDoge2hlaWdodH08L3A+XHJcbiAgICAgICAgPHA+RGVhdGhzOiB7fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2FydGljbGU+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdW50YWluQ2FyZDtcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVG9nZ2xlQnV0dG9uIGZyb20gXCJAL2NvbXBvbmVudHMvVG9nZ2xlQnV0dG9uXCI7XHJcbmltcG9ydCBNb3VudGFpbkNhcmQgZnJvbSBcIkAvY29tcG9uZW50cy9Nb3VudGFpbkNhcmRcIjtcclxuaW1wb3J0IHN0eWxlIGZyb20gXCJAL3N0eWxlcy9tb3VudGFpbmNhcmQubW9kdWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IE1vdW50YWluQ2FyZFNlY3Rpb24gPSAoeyBtb3VudGFpbnMgfSkgPT4ge1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgcGFyZW50UmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Ake3N0eWxlLm1vdW50YWluQ2FyZFNlY3Rpb259ICR7XCJkYXJrU2VjdGlvblwifWB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29sbGFwc2V9PlxyXG4gICAgICAgIDxUb2dnbGVCdXR0b25cclxuICAgICAgICAgIGJ0blRleHQ9e1wiTUVFVCBUSEUgR0lBTlRTIE9GIFRIRSBXT1JMRFwifVxyXG4gICAgICAgICAgc2V0SXNPcGVuPXtzZXRJc09wZW59XHJcbiAgICAgICAgICBpc09wZW49e2lzT3Blbn1cclxuICAgICAgICAgIHRvZ2dsZUJ0bkNsYXNzPXtcInRvZ2dsZUJ0bkNsYXNzXCJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgIGlzT3BlblxyXG4gICAgICAgICAgICAgID8geyBoZWlnaHQ6IHBhcmVudFJlZi5jdXJyZW50LnNjcm9sbEhlaWdodCArIFwicHhcIiB9XHJcbiAgICAgICAgICAgICAgOiB7IGhlaWdodDogXCIwcHhcIiB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZWY9e3BhcmVudFJlZn1cclxuICAgICAgICAgIGNsYXNzTmFtZT17YCAke1xyXG4gICAgICAgICAgICBpc09wZW5cclxuICAgICAgICAgICAgICA/IGAke3N0eWxlLmNvbnRlbnRQYXJlbnR9ICR7c3R5bGUuc2hvd31gXHJcbiAgICAgICAgICAgICAgOiBgJHtzdHlsZS5jb250ZW50UGFyZW50fWBcclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZS5tb3VudGFpbkNhcmRDb250YWluZXJ9ICR7c3R5bGUuY29udGVudH1gfT5cclxuICAgICAgICAgICAge21vdW50YWlucy5tYXAoKG1vdW50YWluKSA9PiAoXHJcbiAgICAgICAgICAgICAgPE1vdW50YWluQ2FyZCBtb3VudGFpbj17bW91bnRhaW59IGtleT17bW91bnRhaW4uaWR9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3VudGFpbkNhcmRTZWN0aW9uO1xyXG4iXSwibmFtZXMiOlsic3R5bGUiLCJNb3VudGFpbkNhcmQiLCJtb3VudGFpbiIsIm5hbWUiLCJoZWlnaHQiLCJzdW1taXRzIiwiZGVhdGhzIiwiY2FyZEMiLCJpbWFnZUMiLCJ0aHVtYm5haWxfcGhvdG8iLCJjb250ZW50QyIsInVzZVN0YXRlIiwidXNlUmVmIiwiVG9nZ2xlQnV0dG9uIiwiTW91bnRhaW5DYXJkU2VjdGlvbiIsIm1vdW50YWlucyIsImlzT3BlbiIsInNldElzT3BlbiIsInBhcmVudFJlZiIsIm1vdW50YWluQ2FyZFNlY3Rpb24iLCJjb2xsYXBzZSIsImN1cnJlbnQiLCJzY3JvbGxIZWlnaHQiLCJjb250ZW50UGFyZW50Iiwic2hvdyIsIm1vdW50YWluQ2FyZENvbnRhaW5lciIsImNvbnRlbnQiLCJtYXAiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=