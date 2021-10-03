self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MountainCardSection.js":
/*!*******************************************!*\
  !*** ./components/MountainCardSection.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ToggleButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ToggleButton */ "./components/ToggleButton.js");
/* harmony import */ var _components_MountainCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/MountainCard */ "./components/MountainCard.js");
/* harmony import */ var _styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/mountaincard.module.scss */ "./styles/mountaincard.module.scss");
/* harmony import */ var _styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_MountainCarousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/MountainCarousel */ "./components/MountainCarousel.js");
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ "./node_modules/react-responsive-carousel/lib/styles/carousel.min.css");
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("section", {
    className: (_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().mountainCardSection),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: (_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().collapse),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_ToggleButton__WEBPACK_IMPORTED_MODULE_1__.default, {
        btnText: "FOURTEEN HIGHEST MOUNTAINS IN THE WORLD",
        setIsOpen: setIsOpen,
        isOpen: isOpen,
        toggleBtnClass: "toggleBtnClass"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_MountainCarousel__WEBPACK_IMPORTED_MODULE_3__.default, {
        mountains: mountains
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        style: isOpen ? {
          height: parentRef.current.scrollHeight + "px"
        } : {
          height: "0px"
        },
        ref: parentRef,
        className: " ".concat(isOpen ? "".concat((_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().contentParent), " ").concat((_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().show)) : "".concat((_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().contentParent))),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "".concat((_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().mountainCardContainer), " ").concat((_styles_mountaincard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().content)),
          children: mountains.map(function (mountain) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_MountainCard__WEBPACK_IMPORTED_MODULE_2__.default, {
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
      lineNumber: 14,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
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


/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/styles/carousel.min.css":
/*!****************************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/styles/carousel.min.css ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../../next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[1]!../../../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[2]!./carousel.min.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[2]!./node_modules/react-responsive-carousel/lib/styles/carousel.min.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element) {
                // These elements should always exist. If they do not,
                // this code should fail.
                var anchorElement = document.querySelector('#__next_css__DO_NOT_USE__');
                var parentNode = anchorElement.parentNode// Normally <head>
                ;
                // Each style tag should be placed right before our
                // anchor. By inserting before and not after, we do not
                // need to track the last inserted element.
                parentNode.insertBefore(element, anchorElement);
            };
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
    if (!a && b || a && !b) {
        return false;
    }
    let p;
    for(p in a){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (a[p] !== b[p]) {
            return false;
        }
    }
    for(p in b){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (!a[p]) {
            return false;
        }
    }
    return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[1]!../../../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[2]!./carousel.min.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[2]!./node_modules/react-responsive-carousel/lib/styles/carousel.min.css",
      function () {
        content = __webpack_require__(/*! !!../../../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[1]!../../../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[2]!./carousel.min.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[2]!./node_modules/react-responsive-carousel/lib/styles/carousel.min.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[2]!./node_modules/react-responsive-carousel/lib/styles/carousel.min.css":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[2]!./node_modules/react-responsive-carousel/lib/styles/carousel.min.css ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".carousel .control-arrow,.carousel.carousel-slider .control-arrow{-webkit-transition:all .25s ease-in;transition:all .25s ease-in;opacity:.4;filter:alpha(opacity=40);position:absolute;z-index:2;top:20px;background:none;border:0;font-size:32px;cursor:pointer}.carousel .control-arrow:focus,.carousel .control-arrow:hover{opacity:1;filter:alpha(opacity=100)}.carousel .control-arrow:before,.carousel.carousel-slider .control-arrow:before{margin:0 5px;display:inline-block;border-top:8px solid transparent;border-bottom:8px solid transparent;content:''}.carousel .control-disabled.control-arrow{opacity:0;filter:alpha(opacity=0);cursor:inherit;display:none}.carousel .control-prev.control-arrow{left:0}.carousel .control-prev.control-arrow:before{border-right:8px solid #fff}.carousel .control-next.control-arrow{right:0}.carousel .control-next.control-arrow:before{border-left:8px solid #fff}.carousel-root{outline:none}.carousel{position:relative;width:100%}.carousel *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.carousel img{width:100%;display:inline-block;pointer-events:none}.carousel .carousel{position:relative}.carousel .control-arrow{outline:0;border:0;background:none;top:50%;margin-top:-13px;font-size:18px}.carousel .thumbs-wrapper{margin:20px;overflow:hidden}.carousel .thumbs{-webkit-transition:all .15s ease-in;transition:all .15s ease-in;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);position:relative;list-style:none;white-space:nowrap}.carousel .thumb{-webkit-transition:border .15s ease-in;transition:border .15s ease-in;display:inline-block;margin-right:6px;white-space:nowrap;overflow:hidden;border:3px solid #fff;padding:2px}.carousel .thumb:focus{border:3px solid #ccc;outline:none}.carousel .thumb.selected,.carousel .thumb:hover{border:3px solid #333}.carousel .thumb img{vertical-align:top}.carousel.carousel-slider{position:relative;margin:0;overflow:hidden}.carousel.carousel-slider .control-arrow{top:0;color:#fff;font-size:26px;bottom:0;margin-top:0;padding:5px}.carousel.carousel-slider .control-arrow:hover{background:rgba(0,0,0,0.2)}.carousel .slider-wrapper{overflow:hidden;margin:auto;width:100%;-webkit-transition:height .15s ease-in;transition:height .15s ease-in}.carousel .slider-wrapper.axis-horizontal .slider{-ms-box-orient:horizontal;display:-moz-box;display:-moz-flex;display:flex}.carousel .slider-wrapper.axis-horizontal .slider .slide{-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column;flex-flow:column}.carousel .slider-wrapper.axis-vertical{-ms-box-orient:horizontal;display:-moz-box;display:-moz-flex;display:flex}.carousel .slider-wrapper.axis-vertical .slider{-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column}.carousel .slider{margin:0;padding:0;position:relative;list-style:none;width:100%}.carousel .slider.animated{-webkit-transition:all .35s ease-in-out;transition:all .35s ease-in-out}.carousel .slide{min-width:100%;margin:0;position:relative;text-align:center}.carousel .slide img{width:100%;vertical-align:top;border:0}.carousel .slide iframe{display:inline-block;width:-webkit-calc(100% - 80px);width:calc(100% - 80px);margin:0 40px 40px;border:0}.carousel .slide .legend{-webkit-transition:all .5s ease-in-out;transition:all .5s ease-in-out;position:absolute;bottom:40px;left:50%;margin-left:-45%;width:90%;border-radius:10px;background:#000;color:#fff;padding:10px;font-size:12px;text-align:center;opacity:0.25;-webkit-transition:opacity .35s ease-in-out;transition:opacity .35s ease-in-out}.carousel .control-dots{position:absolute;bottom:0;margin:10px 0;padding:0;text-align:center;width:100%;z-index:1}@media (min-width: 960px){.carousel .control-dots{bottom:0}}.carousel .control-dots .dot{-webkit-transition:opacity .25s ease-in;transition:opacity .25s ease-in;opacity:.3;filter:alpha(opacity=30);-webkit-box-shadow:1px 1px 2px rgba(0,0,0,0.9);box-shadow:1px 1px 2px rgba(0,0,0,0.9);background:#fff;border-radius:50%;width:8px;height:8px;cursor:pointer;display:inline-block;margin:0 8px}.carousel .control-dots .dot.selected,.carousel .control-dots .dot:hover{opacity:1;filter:alpha(opacity=100)}.carousel .carousel-status{position:absolute;top:0;right:0;padding:5px;font-size:10px;text-shadow:1px 1px 1px rgba(0,0,0,0.9);color:#fff}.carousel:hover .slide .legend{opacity:1}\n", "",{"version":3,"sources":["webpack://node_modules/react-responsive-carousel/lib/styles/carousel.min.css"],"names":[],"mappings":"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","sourcesContent":[".carousel .control-arrow,.carousel.carousel-slider .control-arrow{-webkit-transition:all .25s ease-in;-moz-transition:all .25s ease-in;-ms-transition:all .25s ease-in;-o-transition:all .25s ease-in;transition:all .25s ease-in;opacity:.4;filter:alpha(opacity=40);position:absolute;z-index:2;top:20px;background:none;border:0;font-size:32px;cursor:pointer}.carousel .control-arrow:focus,.carousel .control-arrow:hover{opacity:1;filter:alpha(opacity=100)}.carousel .control-arrow:before,.carousel.carousel-slider .control-arrow:before{margin:0 5px;display:inline-block;border-top:8px solid transparent;border-bottom:8px solid transparent;content:''}.carousel .control-disabled.control-arrow{opacity:0;filter:alpha(opacity=0);cursor:inherit;display:none}.carousel .control-prev.control-arrow{left:0}.carousel .control-prev.control-arrow:before{border-right:8px solid #fff}.carousel .control-next.control-arrow{right:0}.carousel .control-next.control-arrow:before{border-left:8px solid #fff}.carousel-root{outline:none}.carousel{position:relative;width:100%}.carousel *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.carousel img{width:100%;display:inline-block;pointer-events:none}.carousel .carousel{position:relative}.carousel .control-arrow{outline:0;border:0;background:none;top:50%;margin-top:-13px;font-size:18px}.carousel .thumbs-wrapper{margin:20px;overflow:hidden}.carousel .thumbs{-webkit-transition:all .15s ease-in;-moz-transition:all .15s ease-in;-ms-transition:all .15s ease-in;-o-transition:all .15s ease-in;transition:all .15s ease-in;-webkit-transform:translate3d(0, 0, 0);-moz-transform:translate3d(0, 0, 0);-ms-transform:translate3d(0, 0, 0);-o-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);position:relative;list-style:none;white-space:nowrap}.carousel .thumb{-webkit-transition:border .15s ease-in;-moz-transition:border .15s ease-in;-ms-transition:border .15s ease-in;-o-transition:border .15s ease-in;transition:border .15s ease-in;display:inline-block;margin-right:6px;white-space:nowrap;overflow:hidden;border:3px solid #fff;padding:2px}.carousel .thumb:focus{border:3px solid #ccc;outline:none}.carousel .thumb.selected,.carousel .thumb:hover{border:3px solid #333}.carousel .thumb img{vertical-align:top}.carousel.carousel-slider{position:relative;margin:0;overflow:hidden}.carousel.carousel-slider .control-arrow{top:0;color:#fff;font-size:26px;bottom:0;margin-top:0;padding:5px}.carousel.carousel-slider .control-arrow:hover{background:rgba(0,0,0,0.2)}.carousel .slider-wrapper{overflow:hidden;margin:auto;width:100%;-webkit-transition:height .15s ease-in;-moz-transition:height .15s ease-in;-ms-transition:height .15s ease-in;-o-transition:height .15s ease-in;transition:height .15s ease-in}.carousel .slider-wrapper.axis-horizontal .slider{-ms-box-orient:horizontal;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-moz-flex;display:-webkit-flex;display:flex}.carousel .slider-wrapper.axis-horizontal .slider .slide{flex-direction:column;flex-flow:column}.carousel .slider-wrapper.axis-vertical{-ms-box-orient:horizontal;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-moz-flex;display:-webkit-flex;display:flex}.carousel .slider-wrapper.axis-vertical .slider{-webkit-flex-direction:column;flex-direction:column}.carousel .slider{margin:0;padding:0;position:relative;list-style:none;width:100%}.carousel .slider.animated{-webkit-transition:all .35s ease-in-out;-moz-transition:all .35s ease-in-out;-ms-transition:all .35s ease-in-out;-o-transition:all .35s ease-in-out;transition:all .35s ease-in-out}.carousel .slide{min-width:100%;margin:0;position:relative;text-align:center}.carousel .slide img{width:100%;vertical-align:top;border:0}.carousel .slide iframe{display:inline-block;width:calc(100% - 80px);margin:0 40px 40px;border:0}.carousel .slide .legend{-webkit-transition:all .5s ease-in-out;-moz-transition:all .5s ease-in-out;-ms-transition:all .5s ease-in-out;-o-transition:all .5s ease-in-out;transition:all .5s ease-in-out;position:absolute;bottom:40px;left:50%;margin-left:-45%;width:90%;border-radius:10px;background:#000;color:#fff;padding:10px;font-size:12px;text-align:center;opacity:0.25;-webkit-transition:opacity .35s ease-in-out;-moz-transition:opacity .35s ease-in-out;-ms-transition:opacity .35s ease-in-out;-o-transition:opacity .35s ease-in-out;transition:opacity .35s ease-in-out}.carousel .control-dots{position:absolute;bottom:0;margin:10px 0;padding:0;text-align:center;width:100%;z-index:1}@media (min-width: 960px){.carousel .control-dots{bottom:0}}.carousel .control-dots .dot{-webkit-transition:opacity .25s ease-in;-moz-transition:opacity .25s ease-in;-ms-transition:opacity .25s ease-in;-o-transition:opacity .25s ease-in;transition:opacity .25s ease-in;opacity:.3;filter:alpha(opacity=30);box-shadow:1px 1px 2px rgba(0,0,0,0.9);background:#fff;border-radius:50%;width:8px;height:8px;cursor:pointer;display:inline-block;margin:0 8px}.carousel .control-dots .dot.selected,.carousel .control-dots .dot:hover{opacity:1;filter:alpha(opacity=100)}.carousel .carousel-status{position:absolute;top:0;right:0;padding:5px;font-size:10px;text-shadow:1px 1px 1px rgba(0,0,0,0.9);color:#fff}.carousel:hover .slide .legend{opacity:1}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmI3MzQ2ZGI2ZDA2NmNiNDBkYjEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTU0sbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixPQUFtQjtBQUFBOztBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7O0FBQzdDLGtCQUE0QlAsK0NBQVEsQ0FBQyxLQUFELENBQXBDO0FBQUEsTUFBT1EsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsTUFBTUMsU0FBUyxHQUFHVCw2Q0FBTSxFQUF4QjtBQUVBLHNCQUNFO0FBQVMsYUFBUyxFQUFFRyw2RkFBcEI7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBRUEsa0ZBQWhCO0FBQUEsOEJBQ0UsOERBQUMsNkRBQUQ7QUFDRSxlQUFPLEVBQUUseUNBRFg7QUFFRSxpQkFBUyxFQUFFSyxTQUZiO0FBR0UsY0FBTSxFQUFFRCxNQUhWO0FBSUUsc0JBQWMsRUFBRTtBQUpsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFPRSw4REFBQyxpRUFBRDtBQUFrQixpQkFBUyxFQUFFRDtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEYsZUFRRTtBQUNFLGFBQUssRUFDSEMsTUFBTSxHQUNGO0FBQUVLLFVBQUFBLE1BQU0sRUFBRUgsU0FBUyxDQUFDSSxPQUFWLENBQWtCQyxZQUFsQixHQUFpQztBQUEzQyxTQURFLEdBRUY7QUFBRUYsVUFBQUEsTUFBTSxFQUFFO0FBQVYsU0FKUjtBQU1FLFdBQUcsRUFBRUgsU0FOUDtBQU9FLGlCQUFTLGFBQ1BGLE1BQU0sYUFDQ0osdUZBREQsY0FDd0JBLDhFQUR4QixjQUVDQSx1RkFGRCxDQURDLENBUFg7QUFBQSwrQkFhRTtBQUFLLG1CQUFTLFlBQUtBLCtGQUFMLGNBQW9DQSxpRkFBcEMsQ0FBZDtBQUFBLG9CQUNHRyxT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QUFNLFFBQVEsWUFBWSxlQUFlLHdDQUF3QyxXQUFXLCtCQUErQixVQUFVLHFCQUFxQjtBQUM5bVg7QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01vdW50YWluQ2FyZFNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9zdHlsZXMvY2Fyb3VzZWwubWluLmNzcz85ZTBjIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvc3R5bGVzL2Nhcm91c2VsLm1pbi5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVG9nZ2xlQnV0dG9uIGZyb20gXCJAL2NvbXBvbmVudHMvVG9nZ2xlQnV0dG9uXCI7XHJcbmltcG9ydCBNb3VudGFpbkNhcmQgZnJvbSBcIkAvY29tcG9uZW50cy9Nb3VudGFpbkNhcmRcIjtcclxuaW1wb3J0IHN0eWxlIGZyb20gXCJAL3N0eWxlcy9tb3VudGFpbmNhcmQubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IE1vdW50YWluQ2Fyb3VzZWwgZnJvbSBcIkAvY29tcG9uZW50cy9Nb3VudGFpbkNhcm91c2VsXCI7XHJcbmltcG9ydCBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL3N0eWxlcy9jYXJvdXNlbC5taW4uY3NzXCI7XHJcblxyXG5jb25zdCBNb3VudGFpbkNhcmRTZWN0aW9uID0gKHsgbW91bnRhaW5zIH0pID0+IHtcclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHBhcmVudFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZS5tb3VudGFpbkNhcmRTZWN0aW9ufT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbGxhcHNlfT5cclxuICAgICAgICA8VG9nZ2xlQnV0dG9uXHJcbiAgICAgICAgICBidG5UZXh0PXtcIkZPVVJURUVOIEhJR0hFU1QgTU9VTlRBSU5TIElOIFRIRSBXT1JMRFwifVxyXG4gICAgICAgICAgc2V0SXNPcGVuPXtzZXRJc09wZW59XHJcbiAgICAgICAgICBpc09wZW49e2lzT3Blbn1cclxuICAgICAgICAgIHRvZ2dsZUJ0bkNsYXNzPXtcInRvZ2dsZUJ0bkNsYXNzXCJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8TW91bnRhaW5DYXJvdXNlbCBtb3VudGFpbnM9e21vdW50YWluc30vPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgaXNPcGVuXHJcbiAgICAgICAgICAgICAgPyB7IGhlaWdodDogcGFyZW50UmVmLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiIH1cclxuICAgICAgICAgICAgICA6IHsgaGVpZ2h0OiBcIjBweFwiIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJlZj17cGFyZW50UmVmfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgICR7XHJcbiAgICAgICAgICAgIGlzT3BlblxyXG4gICAgICAgICAgICAgID8gYCR7c3R5bGUuY29udGVudFBhcmVudH0gJHtzdHlsZS5zaG93fWBcclxuICAgICAgICAgICAgICA6IGAke3N0eWxlLmNvbnRlbnRQYXJlbnR9YFxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlLm1vdW50YWluQ2FyZENvbnRhaW5lcn0gJHtzdHlsZS5jb250ZW50fWB9PlxyXG4gICAgICAgICAgICB7bW91bnRhaW5zLm1hcCgobW91bnRhaW4pID0+IChcclxuICAgICAgICAgICAgICA8TW91bnRhaW5DYXJkIG1vdW50YWluPXttb3VudGFpbn0ga2V5PXttb3VudGFpbi5pZH0gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdW50YWluQ2FyZFNlY3Rpb247XHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls1XS51c2VbMV0hLi4vLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls1XS51c2VbMl0hLi9jYXJvdXNlbC5taW4uY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIC8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuICAgICAgICAgICAgICAgIC8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbiAgICAgICAgICAgICAgICB2YXIgYW5jaG9yRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50Tm9kZSA9IGFuY2hvckVsZW1lbnQucGFyZW50Tm9kZS8vIE5vcm1hbGx5IDxoZWFkPlxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAvLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbiAgICAgICAgICAgICAgICAvLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4gICAgICAgICAgICAgICAgLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIGFuY2hvckVsZW1lbnQpO1xuICAgICAgICAgICAgfTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICAgIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgcDtcbiAgICBmb3IocCBpbiBhKXtcbiAgICAgICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvcihwIGluIGIpe1xuICAgICAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYVtwXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNV0udXNlWzFdIS4uLy4uLy4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNV0udXNlWzJdIS4vY2Fyb3VzZWwubWluLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzVdLnVzZVsxXSEuLi8uLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzVdLnVzZVsyXSEuL2Nhcm91c2VsLm1pbi5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuY2Fyb3VzZWwgLmNvbnRyb2wtYXJyb3csLmNhcm91c2VsLmNhcm91c2VsLXNsaWRlciAuY29udHJvbC1hcnJvd3std2Via2l0LXRyYW5zaXRpb246YWxsIC4yNXMgZWFzZS1pbjt0cmFuc2l0aW9uOmFsbCAuMjVzIGVhc2UtaW47b3BhY2l0eTouNDtmaWx0ZXI6YWxwaGEob3BhY2l0eT00MCk7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoyO3RvcDoyMHB4O2JhY2tncm91bmQ6bm9uZTtib3JkZXI6MDtmb250LXNpemU6MzJweDtjdXJzb3I6cG9pbnRlcn0uY2Fyb3VzZWwgLmNvbnRyb2wtYXJyb3c6Zm9jdXMsLmNhcm91c2VsIC5jb250cm9sLWFycm93OmhvdmVye29wYWNpdHk6MTtmaWx0ZXI6YWxwaGEob3BhY2l0eT0xMDApfS5jYXJvdXNlbCAuY29udHJvbC1hcnJvdzpiZWZvcmUsLmNhcm91c2VsLmNhcm91c2VsLXNsaWRlciAuY29udHJvbC1hcnJvdzpiZWZvcmV7bWFyZ2luOjAgNXB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO2JvcmRlci10b3A6OHB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1ib3R0b206OHB4IHNvbGlkIHRyYW5zcGFyZW50O2NvbnRlbnQ6Jyd9LmNhcm91c2VsIC5jb250cm9sLWRpc2FibGVkLmNvbnRyb2wtYXJyb3d7b3BhY2l0eTowO2ZpbHRlcjphbHBoYShvcGFjaXR5PTApO2N1cnNvcjppbmhlcml0O2Rpc3BsYXk6bm9uZX0uY2Fyb3VzZWwgLmNvbnRyb2wtcHJldi5jb250cm9sLWFycm93e2xlZnQ6MH0uY2Fyb3VzZWwgLmNvbnRyb2wtcHJldi5jb250cm9sLWFycm93OmJlZm9yZXtib3JkZXItcmlnaHQ6OHB4IHNvbGlkICNmZmZ9LmNhcm91c2VsIC5jb250cm9sLW5leHQuY29udHJvbC1hcnJvd3tyaWdodDowfS5jYXJvdXNlbCAuY29udHJvbC1uZXh0LmNvbnRyb2wtYXJyb3c6YmVmb3Jle2JvcmRlci1sZWZ0OjhweCBzb2xpZCAjZmZmfS5jYXJvdXNlbC1yb290e291dGxpbmU6bm9uZX0uY2Fyb3VzZWx7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJX0uY2Fyb3VzZWwgKnstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDstbW96LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmNhcm91c2VsIGltZ3t3aWR0aDoxMDAlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BvaW50ZXItZXZlbnRzOm5vbmV9LmNhcm91c2VsIC5jYXJvdXNlbHtwb3NpdGlvbjpyZWxhdGl2ZX0uY2Fyb3VzZWwgLmNvbnRyb2wtYXJyb3d7b3V0bGluZTowO2JvcmRlcjowO2JhY2tncm91bmQ6bm9uZTt0b3A6NTAlO21hcmdpbi10b3A6LTEzcHg7Zm9udC1zaXplOjE4cHh9LmNhcm91c2VsIC50aHVtYnMtd3JhcHBlcnttYXJnaW46MjBweDtvdmVyZmxvdzpoaWRkZW59LmNhcm91c2VsIC50aHVtYnN7LXdlYmtpdC10cmFuc2l0aW9uOmFsbCAuMTVzIGVhc2UtaW47dHJhbnNpdGlvbjphbGwgLjE1cyBlYXNlLWluOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsIDAsIDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAwLCAwKTtwb3NpdGlvbjpyZWxhdGl2ZTtsaXN0LXN0eWxlOm5vbmU7d2hpdGUtc3BhY2U6bm93cmFwfS5jYXJvdXNlbCAudGh1bWJ7LXdlYmtpdC10cmFuc2l0aW9uOmJvcmRlciAuMTVzIGVhc2UtaW47dHJhbnNpdGlvbjpib3JkZXIgLjE1cyBlYXNlLWluO2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbi1yaWdodDo2cHg7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjtib3JkZXI6M3B4IHNvbGlkICNmZmY7cGFkZGluZzoycHh9LmNhcm91c2VsIC50aHVtYjpmb2N1c3tib3JkZXI6M3B4IHNvbGlkICNjY2M7b3V0bGluZTpub25lfS5jYXJvdXNlbCAudGh1bWIuc2VsZWN0ZWQsLmNhcm91c2VsIC50aHVtYjpob3Zlcntib3JkZXI6M3B4IHNvbGlkICMzMzN9LmNhcm91c2VsIC50aHVtYiBpbWd7dmVydGljYWwtYWxpZ246dG9wfS5jYXJvdXNlbC5jYXJvdXNlbC1zbGlkZXJ7cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luOjA7b3ZlcmZsb3c6aGlkZGVufS5jYXJvdXNlbC5jYXJvdXNlbC1zbGlkZXIgLmNvbnRyb2wtYXJyb3d7dG9wOjA7Y29sb3I6I2ZmZjtmb250LXNpemU6MjZweDtib3R0b206MDttYXJnaW4tdG9wOjA7cGFkZGluZzo1cHh9LmNhcm91c2VsLmNhcm91c2VsLXNsaWRlciAuY29udHJvbC1hcnJvdzpob3ZlcntiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC4yKX0uY2Fyb3VzZWwgLnNsaWRlci13cmFwcGVye292ZXJmbG93OmhpZGRlbjttYXJnaW46YXV0bzt3aWR0aDoxMDAlOy13ZWJraXQtdHJhbnNpdGlvbjpoZWlnaHQgLjE1cyBlYXNlLWluO3RyYW5zaXRpb246aGVpZ2h0IC4xNXMgZWFzZS1pbn0uY2Fyb3VzZWwgLnNsaWRlci13cmFwcGVyLmF4aXMtaG9yaXpvbnRhbCAuc2xpZGVyey1tcy1ib3gtb3JpZW50Omhvcml6b250YWw7ZGlzcGxheTotbW96LWJveDtkaXNwbGF5Oi1tb3otZmxleDtkaXNwbGF5OmZsZXh9LmNhcm91c2VsIC5zbGlkZXItd3JhcHBlci5heGlzLWhvcml6b250YWwgLnNsaWRlciAuc2xpZGV7LW1vei1ib3gtb3JpZW50OnZlcnRpY2FsOy1tb3otYm94LWRpcmVjdGlvbjpub3JtYWw7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZmxvdzpjb2x1bW59LmNhcm91c2VsIC5zbGlkZXItd3JhcHBlci5heGlzLXZlcnRpY2Fsey1tcy1ib3gtb3JpZW50Omhvcml6b250YWw7ZGlzcGxheTotbW96LWJveDtkaXNwbGF5Oi1tb3otZmxleDtkaXNwbGF5OmZsZXh9LmNhcm91c2VsIC5zbGlkZXItd3JhcHBlci5heGlzLXZlcnRpY2FsIC5zbGlkZXJ7LW1vei1ib3gtb3JpZW50OnZlcnRpY2FsOy1tb3otYm94LWRpcmVjdGlvbjpub3JtYWw7ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5jYXJvdXNlbCAuc2xpZGVye21hcmdpbjowO3BhZGRpbmc6MDtwb3NpdGlvbjpyZWxhdGl2ZTtsaXN0LXN0eWxlOm5vbmU7d2lkdGg6MTAwJX0uY2Fyb3VzZWwgLnNsaWRlci5hbmltYXRlZHstd2Via2l0LXRyYW5zaXRpb246YWxsIC4zNXMgZWFzZS1pbi1vdXQ7dHJhbnNpdGlvbjphbGwgLjM1cyBlYXNlLWluLW91dH0uY2Fyb3VzZWwgLnNsaWRle21pbi13aWR0aDoxMDAlO21hcmdpbjowO3Bvc2l0aW9uOnJlbGF0aXZlO3RleHQtYWxpZ246Y2VudGVyfS5jYXJvdXNlbCAuc2xpZGUgaW1ne3dpZHRoOjEwMCU7dmVydGljYWwtYWxpZ246dG9wO2JvcmRlcjowfS5jYXJvdXNlbCAuc2xpZGUgaWZyYW1le2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOi13ZWJraXQtY2FsYygxMDAlIC0gODBweCk7d2lkdGg6Y2FsYygxMDAlIC0gODBweCk7bWFyZ2luOjAgNDBweCA0MHB4O2JvcmRlcjowfS5jYXJvdXNlbCAuc2xpZGUgLmxlZ2VuZHstd2Via2l0LXRyYW5zaXRpb246YWxsIC41cyBlYXNlLWluLW91dDt0cmFuc2l0aW9uOmFsbCAuNXMgZWFzZS1pbi1vdXQ7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjQwcHg7bGVmdDo1MCU7bWFyZ2luLWxlZnQ6LTQ1JTt3aWR0aDo5MCU7Ym9yZGVyLXJhZGl1czoxMHB4O2JhY2tncm91bmQ6IzAwMDtjb2xvcjojZmZmO3BhZGRpbmc6MTBweDtmb250LXNpemU6MTJweDt0ZXh0LWFsaWduOmNlbnRlcjtvcGFjaXR5OjAuMjU7LXdlYmtpdC10cmFuc2l0aW9uOm9wYWNpdHkgLjM1cyBlYXNlLWluLW91dDt0cmFuc2l0aW9uOm9wYWNpdHkgLjM1cyBlYXNlLWluLW91dH0uY2Fyb3VzZWwgLmNvbnRyb2wtZG90c3twb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MDttYXJnaW46MTBweCAwO3BhZGRpbmc6MDt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDoxMDAlO3otaW5kZXg6MX1AbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpey5jYXJvdXNlbCAuY29udHJvbC1kb3Rze2JvdHRvbTowfX0uY2Fyb3VzZWwgLmNvbnRyb2wtZG90cyAuZG90ey13ZWJraXQtdHJhbnNpdGlvbjpvcGFjaXR5IC4yNXMgZWFzZS1pbjt0cmFuc2l0aW9uOm9wYWNpdHkgLjI1cyBlYXNlLWluO29wYWNpdHk6LjM7ZmlsdGVyOmFscGhhKG9wYWNpdHk9MzApOy13ZWJraXQtYm94LXNoYWRvdzoxcHggMXB4IDJweCByZ2JhKDAsMCwwLDAuOSk7Ym94LXNoYWRvdzoxcHggMXB4IDJweCByZ2JhKDAsMCwwLDAuOSk7YmFja2dyb3VuZDojZmZmO2JvcmRlci1yYWRpdXM6NTAlO3dpZHRoOjhweDtoZWlnaHQ6OHB4O2N1cnNvcjpwb2ludGVyO2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbjowIDhweH0uY2Fyb3VzZWwgLmNvbnRyb2wtZG90cyAuZG90LnNlbGVjdGVkLC5jYXJvdXNlbCAuY29udHJvbC1kb3RzIC5kb3Q6aG92ZXJ7b3BhY2l0eToxO2ZpbHRlcjphbHBoYShvcGFjaXR5PTEwMCl9LmNhcm91c2VsIC5jYXJvdXNlbC1zdGF0dXN7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtwYWRkaW5nOjVweDtmb250LXNpemU6MTBweDt0ZXh0LXNoYWRvdzoxcHggMXB4IDFweCByZ2JhKDAsMCwwLDAuOSk7Y29sb3I6I2ZmZn0uY2Fyb3VzZWw6aG92ZXIgLnNsaWRlIC5sZWdlbmR7b3BhY2l0eToxfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9ub2RlX21vZHVsZXMvcmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvc3R5bGVzL2Nhcm91c2VsLm1pbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsa0VBQWtFLG1DQUFtQyxDQUFpRywyQkFBMkIsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsOERBQThELFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQyxnRkFBZ0YsWUFBWSxDQUFDLG9CQUFvQixDQUFDLGdDQUFnQyxDQUFDLG1DQUFtQyxDQUFDLFVBQVUsQ0FBQywwQ0FBMEMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsc0NBQXNDLE1BQU0sQ0FBQyw2Q0FBNkMs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cm9sLWFycm93LC5jYXJvdXNlbC5jYXJvdXNlbC1zbGlkZXIgLmNvbnRyb2wtYXJyb3d7LXdlYmtpdC10cmFuc2l0aW9uOmFsbCAuMjVzIGVhc2UtaW47LW1vei10cmFuc2l0aW9uOmFsbCAuMjVzIGVhc2UtaW47LW1zLXRyYW5zaXRpb246YWxsIC4yNXMgZWFzZS1pbjstby10cmFuc2l0aW9uOmFsbCAuMjVzIGVhc2UtaW47dHJhbnNpdGlvbjphbGwgLjI1cyBlYXNlLWluO29wYWNpdHk6LjQ7ZmlsdGVyOmFscGhhKG9wYWNpdHk9NDApO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6Mjt0b3A6MjBweDtiYWNrZ3JvdW5kOm5vbmU7Ym9yZGVyOjA7Zm9udC1zaXplOjMycHg7Y3Vyc29yOnBvaW50ZXJ9LmNhcm91c2VsIC5jb250cm9sLWFycm93OmZvY3VzLC5jYXJvdXNlbCAuY29udHJvbC1hcnJvdzpob3ZlcntvcGFjaXR5OjE7ZmlsdGVyOmFscGhhKG9wYWNpdHk9MTAwKX0uY2Fyb3VzZWwgLmNvbnRyb2wtYXJyb3c6YmVmb3JlLC5jYXJvdXNlbC5jYXJvdXNlbC1zbGlkZXIgLmNvbnRyb2wtYXJyb3c6YmVmb3Jle21hcmdpbjowIDVweDtkaXNwbGF5OmlubGluZS1ibG9jaztib3JkZXItdG9wOjhweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItYm90dG9tOjhweCBzb2xpZCB0cmFuc3BhcmVudDtjb250ZW50OicnfS5jYXJvdXNlbCAuY29udHJvbC1kaXNhYmxlZC5jb250cm9sLWFycm93e29wYWNpdHk6MDtmaWx0ZXI6YWxwaGEob3BhY2l0eT0wKTtjdXJzb3I6aW5oZXJpdDtkaXNwbGF5Om5vbmV9LmNhcm91c2VsIC5jb250cm9sLXByZXYuY29udHJvbC1hcnJvd3tsZWZ0OjB9LmNhcm91c2VsIC5jb250cm9sLXByZXYuY29udHJvbC1hcnJvdzpiZWZvcmV7Ym9yZGVyLXJpZ2h0OjhweCBzb2xpZCAjZmZmfS5jYXJvdXNlbCAuY29udHJvbC1uZXh0LmNvbnRyb2wtYXJyb3d7cmlnaHQ6MH0uY2Fyb3VzZWwgLmNvbnRyb2wtbmV4dC5jb250cm9sLWFycm93OmJlZm9yZXtib3JkZXItbGVmdDo4cHggc29saWQgI2ZmZn0uY2Fyb3VzZWwtcm9vdHtvdXRsaW5lOm5vbmV9LmNhcm91c2Vse3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCV9LmNhcm91c2VsICp7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fS5jYXJvdXNlbCBpbWd7d2lkdGg6MTAwJTtkaXNwbGF5OmlubGluZS1ibG9jaztwb2ludGVyLWV2ZW50czpub25lfS5jYXJvdXNlbCAuY2Fyb3VzZWx7cG9zaXRpb246cmVsYXRpdmV9LmNhcm91c2VsIC5jb250cm9sLWFycm93e291dGxpbmU6MDtib3JkZXI6MDtiYWNrZ3JvdW5kOm5vbmU7dG9wOjUwJTttYXJnaW4tdG9wOi0xM3B4O2ZvbnQtc2l6ZToxOHB4fS5jYXJvdXNlbCAudGh1bWJzLXdyYXBwZXJ7bWFyZ2luOjIwcHg7b3ZlcmZsb3c6aGlkZGVufS5jYXJvdXNlbCAudGh1bWJzey13ZWJraXQtdHJhbnNpdGlvbjphbGwgLjE1cyBlYXNlLWluOy1tb3otdHJhbnNpdGlvbjphbGwgLjE1cyBlYXNlLWluOy1tcy10cmFuc2l0aW9uOmFsbCAuMTVzIGVhc2UtaW47LW8tdHJhbnNpdGlvbjphbGwgLjE1cyBlYXNlLWluO3RyYW5zaXRpb246YWxsIC4xNXMgZWFzZS1pbjstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAwLCAwKTstbW96LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAwLCAwKTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsIDAsIDApOy1vLXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAwLCAwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgMCwgMCk7cG9zaXRpb246cmVsYXRpdmU7bGlzdC1zdHlsZTpub25lO3doaXRlLXNwYWNlOm5vd3JhcH0uY2Fyb3VzZWwgLnRodW1iey13ZWJraXQtdHJhbnNpdGlvbjpib3JkZXIgLjE1cyBlYXNlLWluOy1tb3otdHJhbnNpdGlvbjpib3JkZXIgLjE1cyBlYXNlLWluOy1tcy10cmFuc2l0aW9uOmJvcmRlciAuMTVzIGVhc2UtaW47LW8tdHJhbnNpdGlvbjpib3JkZXIgLjE1cyBlYXNlLWluO3RyYW5zaXRpb246Ym9yZGVyIC4xNXMgZWFzZS1pbjtkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tcmlnaHQ6NnB4O3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47Ym9yZGVyOjNweCBzb2xpZCAjZmZmO3BhZGRpbmc6MnB4fS5jYXJvdXNlbCAudGh1bWI6Zm9jdXN7Ym9yZGVyOjNweCBzb2xpZCAjY2NjO291dGxpbmU6bm9uZX0uY2Fyb3VzZWwgLnRodW1iLnNlbGVjdGVkLC5jYXJvdXNlbCAudGh1bWI6aG92ZXJ7Ym9yZGVyOjNweCBzb2xpZCAjMzMzfS5jYXJvdXNlbCAudGh1bWIgaW1ne3ZlcnRpY2FsLWFsaWduOnRvcH0uY2Fyb3VzZWwuY2Fyb3VzZWwtc2xpZGVye3Bvc2l0aW9uOnJlbGF0aXZlO21hcmdpbjowO292ZXJmbG93OmhpZGRlbn0uY2Fyb3VzZWwuY2Fyb3VzZWwtc2xpZGVyIC5jb250cm9sLWFycm93e3RvcDowO2NvbG9yOiNmZmY7Zm9udC1zaXplOjI2cHg7Ym90dG9tOjA7bWFyZ2luLXRvcDowO3BhZGRpbmc6NXB4fS5jYXJvdXNlbC5jYXJvdXNlbC1zbGlkZXIgLmNvbnRyb2wtYXJyb3c6aG92ZXJ7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuMil9LmNhcm91c2VsIC5zbGlkZXItd3JhcHBlcntvdmVyZmxvdzpoaWRkZW47bWFyZ2luOmF1dG87d2lkdGg6MTAwJTstd2Via2l0LXRyYW5zaXRpb246aGVpZ2h0IC4xNXMgZWFzZS1pbjstbW96LXRyYW5zaXRpb246aGVpZ2h0IC4xNXMgZWFzZS1pbjstbXMtdHJhbnNpdGlvbjpoZWlnaHQgLjE1cyBlYXNlLWluOy1vLXRyYW5zaXRpb246aGVpZ2h0IC4xNXMgZWFzZS1pbjt0cmFuc2l0aW9uOmhlaWdodCAuMTVzIGVhc2UtaW59LmNhcm91c2VsIC5zbGlkZXItd3JhcHBlci5heGlzLWhvcml6b250YWwgLnNsaWRlcnstbXMtYm94LW9yaWVudDpob3Jpem9udGFsO2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbW96LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6LW1vei1mbGV4O2Rpc3BsYXk6LXdlYmtpdC1mbGV4O2Rpc3BsYXk6ZmxleH0uY2Fyb3VzZWwgLnNsaWRlci13cmFwcGVyLmF4aXMtaG9yaXpvbnRhbCAuc2xpZGVyIC5zbGlkZXtmbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1mbG93OmNvbHVtbn0uY2Fyb3VzZWwgLnNsaWRlci13cmFwcGVyLmF4aXMtdmVydGljYWx7LW1zLWJveC1vcmllbnQ6aG9yaXpvbnRhbDtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LW1vei1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5Oi1tb3otZmxleDtkaXNwbGF5Oi13ZWJraXQtZmxleDtkaXNwbGF5OmZsZXh9LmNhcm91c2VsIC5zbGlkZXItd3JhcHBlci5heGlzLXZlcnRpY2FsIC5zbGlkZXJ7LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5jYXJvdXNlbCAuc2xpZGVye21hcmdpbjowO3BhZGRpbmc6MDtwb3NpdGlvbjpyZWxhdGl2ZTtsaXN0LXN0eWxlOm5vbmU7d2lkdGg6MTAwJX0uY2Fyb3VzZWwgLnNsaWRlci5hbmltYXRlZHstd2Via2l0LXRyYW5zaXRpb246YWxsIC4zNXMgZWFzZS1pbi1vdXQ7LW1vei10cmFuc2l0aW9uOmFsbCAuMzVzIGVhc2UtaW4tb3V0Oy1tcy10cmFuc2l0aW9uOmFsbCAuMzVzIGVhc2UtaW4tb3V0Oy1vLXRyYW5zaXRpb246YWxsIC4zNXMgZWFzZS1pbi1vdXQ7dHJhbnNpdGlvbjphbGwgLjM1cyBlYXNlLWluLW91dH0uY2Fyb3VzZWwgLnNsaWRle21pbi13aWR0aDoxMDAlO21hcmdpbjowO3Bvc2l0aW9uOnJlbGF0aXZlO3RleHQtYWxpZ246Y2VudGVyfS5jYXJvdXNlbCAuc2xpZGUgaW1ne3dpZHRoOjEwMCU7dmVydGljYWwtYWxpZ246dG9wO2JvcmRlcjowfS5jYXJvdXNlbCAuc2xpZGUgaWZyYW1le2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOmNhbGMoMTAwJSAtIDgwcHgpO21hcmdpbjowIDQwcHggNDBweDtib3JkZXI6MH0uY2Fyb3VzZWwgLnNsaWRlIC5sZWdlbmR7LXdlYmtpdC10cmFuc2l0aW9uOmFsbCAuNXMgZWFzZS1pbi1vdXQ7LW1vei10cmFuc2l0aW9uOmFsbCAuNXMgZWFzZS1pbi1vdXQ7LW1zLXRyYW5zaXRpb246YWxsIC41cyBlYXNlLWluLW91dDstby10cmFuc2l0aW9uOmFsbCAuNXMgZWFzZS1pbi1vdXQ7dHJhbnNpdGlvbjphbGwgLjVzIGVhc2UtaW4tb3V0O3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTo0MHB4O2xlZnQ6NTAlO21hcmdpbi1sZWZ0Oi00NSU7d2lkdGg6OTAlO2JvcmRlci1yYWRpdXM6MTBweDtiYWNrZ3JvdW5kOiMwMDA7Y29sb3I6I2ZmZjtwYWRkaW5nOjEwcHg7Zm9udC1zaXplOjEycHg7dGV4dC1hbGlnbjpjZW50ZXI7b3BhY2l0eTowLjI1Oy13ZWJraXQtdHJhbnNpdGlvbjpvcGFjaXR5IC4zNXMgZWFzZS1pbi1vdXQ7LW1vei10cmFuc2l0aW9uOm9wYWNpdHkgLjM1cyBlYXNlLWluLW91dDstbXMtdHJhbnNpdGlvbjpvcGFjaXR5IC4zNXMgZWFzZS1pbi1vdXQ7LW8tdHJhbnNpdGlvbjpvcGFjaXR5IC4zNXMgZWFzZS1pbi1vdXQ7dHJhbnNpdGlvbjpvcGFjaXR5IC4zNXMgZWFzZS1pbi1vdXR9LmNhcm91c2VsIC5jb250cm9sLWRvdHN7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjA7bWFyZ2luOjEwcHggMDtwYWRkaW5nOjA7dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6MTAwJTt6LWluZGV4OjF9QG1lZGlhIChtaW4td2lkdGg6IDk2MHB4KXsuY2Fyb3VzZWwgLmNvbnRyb2wtZG90c3tib3R0b206MH19LmNhcm91c2VsIC5jb250cm9sLWRvdHMgLmRvdHstd2Via2l0LXRyYW5zaXRpb246b3BhY2l0eSAuMjVzIGVhc2UtaW47LW1vei10cmFuc2l0aW9uOm9wYWNpdHkgLjI1cyBlYXNlLWluOy1tcy10cmFuc2l0aW9uOm9wYWNpdHkgLjI1cyBlYXNlLWluOy1vLXRyYW5zaXRpb246b3BhY2l0eSAuMjVzIGVhc2UtaW47dHJhbnNpdGlvbjpvcGFjaXR5IC4yNXMgZWFzZS1pbjtvcGFjaXR5Oi4zO2ZpbHRlcjphbHBoYShvcGFjaXR5PTMwKTtib3gtc2hhZG93OjFweCAxcHggMnB4IHJnYmEoMCwwLDAsMC45KTtiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyLXJhZGl1czo1MCU7d2lkdGg6OHB4O2hlaWdodDo4cHg7Y3Vyc29yOnBvaW50ZXI7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luOjAgOHB4fS5jYXJvdXNlbCAuY29udHJvbC1kb3RzIC5kb3Quc2VsZWN0ZWQsLmNhcm91c2VsIC5jb250cm9sLWRvdHMgLmRvdDpob3ZlcntvcGFjaXR5OjE7ZmlsdGVyOmFscGhhKG9wYWNpdHk9MTAwKX0uY2Fyb3VzZWwgLmNhcm91c2VsLXN0YXR1c3twb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO3BhZGRpbmc6NXB4O2ZvbnQtc2l6ZToxMHB4O3RleHQtc2hhZG93OjFweCAxcHggMXB4IHJnYmEoMCwwLDAsMC45KTtjb2xvcjojZmZmfS5jYXJvdXNlbDpob3ZlciAuc2xpZGUgLmxlZ2VuZHtvcGFjaXR5OjF9XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJlZiIsIlRvZ2dsZUJ1dHRvbiIsIk1vdW50YWluQ2FyZCIsInN0eWxlIiwiTW91bnRhaW5DYXJvdXNlbCIsIk1vdW50YWluQ2FyZFNlY3Rpb24iLCJtb3VudGFpbnMiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJwYXJlbnRSZWYiLCJtb3VudGFpbkNhcmRTZWN0aW9uIiwiY29sbGFwc2UiLCJoZWlnaHQiLCJjdXJyZW50Iiwic2Nyb2xsSGVpZ2h0IiwiY29udGVudFBhcmVudCIsInNob3ciLCJtb3VudGFpbkNhcmRDb250YWluZXIiLCJjb250ZW50IiwibWFwIiwibW91bnRhaW4iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=