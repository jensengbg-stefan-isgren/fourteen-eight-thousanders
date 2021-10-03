"use strict";
(() => {
var exports = {};
exports.id = "pages/api/mountains";
exports.ids = ["pages/api/mountains"];
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

/***/ "./pages/api/mountains.js":
/*!********************************!*\
  !*** ./pages/api/mountains.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ "./lib/prisma.js");

async function handler(req, res) {
  if (req.method == "POST") {
    const mountainData = JSON.parse(req.body);
    const savedMountains = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.mountain.create({
      data: mountainData
    });
    res.json(savedMountains);
  }
}

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/mountains.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL21vdW50YWlucy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQUlDLE1BQUo7O0FBRUEsSUFBSSxPQUF1QyxFQUEzQyxNQUVPO0FBQ0wsTUFBSSxDQUFDQyxNQUFNLENBQUNELE1BQVosRUFBb0I7QUFDbEJDLElBQUFBLE1BQU0sQ0FBQ0QsTUFBUCxHQUFnQixJQUFJRCx3REFBSixFQUFoQjtBQUNEOztBQUNEQyxFQUFBQSxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0QsTUFBaEI7QUFDRDs7QUFFRCxpRUFBZUEsTUFBZjs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFFZSxlQUFnQkUsT0FBaEIsQ0FBeUJDLEdBQXpCLEVBQThCQyxHQUE5QixFQUFtQztBQUNoRCxNQUFJRCxHQUFHLENBQUNFLE1BQUosSUFBYyxNQUFsQixFQUEwQjtBQUl4QixVQUFNQyxZQUFZLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxHQUFHLENBQUNNLElBQWYsQ0FBckI7QUFFQSxVQUFNQyxjQUFjLEdBQUcsTUFBTVYsZ0VBQUEsQ0FBdUI7QUFDbERhLE1BQUFBLElBQUksRUFBRVA7QUFENEMsS0FBdkIsQ0FBN0I7QUFHQUYsSUFBQUEsR0FBRyxDQUFDVSxJQUFKLENBQVNKLGNBQVQ7QUFDRDtBQUNGOzs7Ozs7Ozs7O0FDZEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3VydGVlbi1laWdodC10aG91c2FuZGVycy8uL2xpYi9wcmlzbWEuanMiLCJ3ZWJwYWNrOi8vZm91cnRlZW4tZWlnaHQtdGhvdXNhbmRlcnMvLi9wYWdlcy9hcGkvbW91bnRhaW5zLmpzIiwid2VicGFjazovL2ZvdXJ0ZWVuLWVpZ2h0LXRob3VzYW5kZXJzL2V4dGVybmFsIFwiQHByaXNtYS9jbGllbnRcIiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaWIvcHJpc21hLnRzXHJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xyXG5cclxubGV0IHByaXNtYTtcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcbn0gZWxzZSB7XHJcbiAgaWYgKCFnbG9iYWwucHJpc21hKSB7XHJcbiAgICBnbG9iYWwucHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG4gIH1cclxuICBwcmlzbWEgPSBnbG9iYWwucHJpc21hO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7XHJcbiIsImltcG9ydCBwcmlzbWEgZnJvbSBcIi4uLy4uL2xpYi9wcmlzbWFcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gIGhhbmRsZXIgKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT0gXCJQT1NUXCIpIHtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IG1vdW50YWluRGF0YSA9IEpTT04ucGFyc2UocmVxLmJvZHkpO1xyXG4gICAgXHJcbiAgICBjb25zdCBzYXZlZE1vdW50YWlucyA9IGF3YWl0IHByaXNtYS5tb3VudGFpbi5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiBtb3VudGFpbkRhdGEsXHJcbiAgICB9KTtcclxuICAgIHJlcy5qc29uKHNhdmVkTW91bnRhaW5zKSAgXHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBwcmlzbWEvY2xpZW50XCIpOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJnbG9iYWwiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwibW91bnRhaW5EYXRhIiwiSlNPTiIsInBhcnNlIiwiYm9keSIsInNhdmVkTW91bnRhaW5zIiwibW91bnRhaW4iLCJjcmVhdGUiLCJkYXRhIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=