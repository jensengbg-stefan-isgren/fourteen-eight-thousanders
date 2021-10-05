"use strict";
(() => {
var exports = {};
exports.id = "pages/[name]";
exports.ids = ["pages/[name]"];
exports.modules = {

/***/ "./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
// lib/prisma.ts

let prisma;

if (false) {} else {
  if (!global.prisma) {
    global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
  }

  prisma = global.prisma;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);

/***/ }),

/***/ "./pages/[name].js":
/*!*************************!*\
  !*** ./pages/[name].js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-plugin-superjson-next/tools */ "babel-plugin-superjson-next/tools");
/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib/prisma */ "./lib/prisma.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\Stefa\\Documents\\Projects\\fourteen-eight-thousanders\\pages\\[name].js";


const getStaticPaths = async () => {
  const data = await lib_prisma__WEBPACK_IMPORTED_MODULE_1__.default.mountain.findMany({});
  const paths = data.map(mountain => {
    return {
      params: {
        name: mountain.name
      }
    };
  });
  return {
    paths,
    fallback: false
  };
};
const getStaticProps = (0,babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_0__.withSuperJSONProps)(async ({
  params
}) => {
  const res = await lib_prisma__WEBPACK_IMPORTED_MODULE_1__.default.mountain.findMany({
    where: {
      name: params.name
    }
  });
  return {
    props: {
      mountain: res[0]
    }
  };
}, []);

const MountainDetails = ({
  mountain
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    children: mountain.name
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_0__.withSuperJSONPage)(MountainDetails));

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "babel-plugin-superjson-next/tools":
/*!****************************************************!*\
  !*** external "babel-plugin-superjson-next/tools" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = require("babel-plugin-superjson-next/tools");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[name].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvW25hbWVdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBSUMsTUFBSjs7QUFFQSxJQUFJLE9BQXVDLEVBQTNDLE1BRU87QUFDTCxNQUFJLENBQUNDLE1BQU0sQ0FBQ0QsTUFBWixFQUFvQjtBQUNsQkMsSUFBQUEsTUFBTSxDQUFDRCxNQUFQLEdBQWdCLElBQUlELHdEQUFKLEVBQWhCO0FBQ0Q7O0FBQ0RDLEVBQUFBLE1BQU0sR0FBR0MsTUFBTSxDQUFDRCxNQUFoQjtBQUNEOztBQUVELGlFQUFlQSxNQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTs7QUFFTyxNQUFNRSxjQUFjLEdBQUcsWUFBWTtBQUN4QyxRQUFNQyxJQUFJLEdBQUcsTUFBTUgsaUVBQUEsQ0FBeUIsRUFBekIsQ0FBbkI7QUFHQSxRQUFNTSxLQUFLLEdBQUdILElBQUksQ0FBQ0ksR0FBTCxDQUFVSCxRQUFELElBQWM7QUFDbkMsV0FBTztBQUNMSSxNQUFBQSxNQUFNLEVBQUU7QUFBRUMsUUFBQUEsSUFBSSxFQUFFTCxRQUFRLENBQUNLO0FBQWpCO0FBREgsS0FBUDtBQUdELEdBSmEsQ0FBZDtBQUtBLFNBQU87QUFDTEgsSUFBQUEsS0FESztBQUVMSSxJQUFBQSxRQUFRLEVBQUU7QUFGTCxHQUFQO0FBSUQsQ0FiTTtBQWVBLE1BQU1DLGNBQWMsR0FBRyw2RkFBTztBQUFDSCxFQUFBQTtBQUFELENBQVAsS0FBb0I7QUFDaEQsUUFBTUksR0FBRyxHQUFHLE1BQU1aLGlFQUFBLENBQXlCO0FBQ3pDYSxJQUFBQSxLQUFLLEVBQUU7QUFDTEosTUFBQUEsSUFBSSxFQUFFRCxNQUFNLENBQUNDO0FBRFI7QUFEa0MsR0FBekIsQ0FBbEI7QUFLQSxTQUFPO0FBQ0xLLElBQUFBLEtBQUssRUFBRTtBQUFDVixNQUFBQSxRQUFRLEVBQUVRLEdBQUcsQ0FBQyxDQUFEO0FBQWQ7QUFERixHQUFQO0FBR0QsQ0FUMEIsS0FBcEI7O0FBWVAsTUFBTUcsZUFBZSxHQUFHLENBQUM7QUFBQ1gsRUFBQUE7QUFBRCxDQUFELEtBQWdCO0FBQ3RDLHNCQUFPO0FBQUEsY0FBTUEsUUFBUSxDQUFDSztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELENBRkQ7O0FBSUEsaUVBQWUscUZBQUFNLGVBQWY7Ozs7Ozs7Ozs7QUNqQ0E7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm91cnRlZW4tZWlnaHQtdGhvdXNhbmRlcnMvLi9saWIvcHJpc21hLmpzIiwid2VicGFjazovL2ZvdXJ0ZWVuLWVpZ2h0LXRob3VzYW5kZXJzLy4vcGFnZXMvW25hbWVdLmpzIiwid2VicGFjazovL2ZvdXJ0ZWVuLWVpZ2h0LXRob3VzYW5kZXJzL2V4dGVybmFsIFwiQHByaXNtYS9jbGllbnRcIiIsIndlYnBhY2s6Ly9mb3VydGVlbi1laWdodC10aG91c2FuZGVycy9leHRlcm5hbCBcImJhYmVsLXBsdWdpbi1zdXBlcmpzb24tbmV4dC90b29sc1wiIiwid2VicGFjazovL2ZvdXJ0ZWVuLWVpZ2h0LXRob3VzYW5kZXJzL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbGliL3ByaXNtYS50c1xyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcbmxldCBwcmlzbWE7XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG59IGVsc2Uge1xyXG4gIGlmICghZ2xvYmFsLnByaXNtYSkge1xyXG4gICAgZ2xvYmFsLnByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuICB9XHJcbiAgcHJpc21hID0gZ2xvYmFsLnByaXNtYTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJpc21hO1xyXG4iLCJpbXBvcnQgcHJpc21hIGZyb20gXCJsaWIvcHJpc21hXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHByaXNtYS5tb3VudGFpbi5maW5kTWFueSh7fSk7XHJcbiBcclxuXHJcbiAgY29uc3QgcGF0aHMgPSBkYXRhLm1hcCgobW91bnRhaW4pID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBhcmFtczogeyBuYW1lOiBtb3VudGFpbi5uYW1lIH0sXHJcbiAgICB9O1xyXG4gIH0pO1xyXG4gIHJldHVybiB7XHJcbiAgICBwYXRocyxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHtwYXJhbXN9KSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgcHJpc21hLm1vdW50YWluLmZpbmRNYW55KHtcclxuICAgIHdoZXJlOiB7XHJcbiAgICAgIG5hbWU6IHBhcmFtcy5uYW1lXHJcbiAgICB9XHJcbiAgfSlcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHttb3VudGFpbjogcmVzWzBdfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IE1vdW50YWluRGV0YWlscyA9ICh7bW91bnRhaW59KSA9PiB7XHJcbiAgcmV0dXJuIDxkaXY+e21vdW50YWluLm5hbWV9PC9kaXY+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW91bnRhaW5EZXRhaWxzO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1wbHVnaW4tc3VwZXJqc29uLW5leHQvdG9vbHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJnbG9iYWwiLCJnZXRTdGF0aWNQYXRocyIsImRhdGEiLCJtb3VudGFpbiIsImZpbmRNYW55IiwicGF0aHMiLCJtYXAiLCJwYXJhbXMiLCJuYW1lIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsInJlcyIsIndoZXJlIiwicHJvcHMiLCJNb3VudGFpbkRldGFpbHMiXSwic291cmNlUm9vdCI6IiJ9