self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[4]!./styles/mountaincard.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[4]!./styles/mountaincard.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".mountaincard_toggleBtnClass__2BfOF {\n  padding: 1rem;\n  margin-bottom: 2rem;\n}\n\n.mountaincard_mountainCardSection__21MFA {\n  width: 60vw;\n  margin: auto;\n  display: -moz-box;\n  display: flex;\n  -moz-box-pack: center;\n       justify-content: center;\n}\n\n.mountaincard_collapse__1ZgON {\n  width: 100%;\n  display: -moz-box;\n  display: flex;\n  -moz-box-pack: center;\n       justify-content: center;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n       flex-direction: column;\n}\n.mountaincard_collapse__1ZgON button {\n  width: 100%;\n  display: block;\n}\n\n.mountaincard_mountainCardContainer__3Pi9F {\n  width: 100%;\n  display: grid;\n  grid-gap: 3rem;\n  gap: 3rem;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n.mountaincard_cardContainer__YtKKT {\n  padding: 1rem;\n  border-radius: 0.2rem;\n  background-color: white;\n}\n.mountaincard_cardContainer__YtKKT img {\n  width: 100%;\n}\n\n.mountaincard_collapse__1ZgON .mountaincard_contentParent__2lBU8 {\n  height: 0px;\n  overflow: hidden;\n  -webkit-transition: height ease 0.3s;\n  transition: height ease 0.3s;\n}\n\n.mountaincard_carousel__V_9JG img {\n  height: 400px;\n  width: auto;\n  object-fit: cover;\n  object-position: top;\n}\n\n.mountaincard_imageContainer__1obZ6::before {\n  background: -webkit-gradient(linear, left top, left bottom, from(#e66465), to(#9198e5));\n  background: -webkit-linear-gradient(#e66465, #9198e5);\n  background: linear-gradient(#e66465, #9198e5);\n}", "",{"version":3,"sources":["webpack://buttons.scss","webpack://variables.scss","webpack://mountaincard.module.scss"],"names":[],"mappings":"AAAA;EACE,aCIG;EDHH,mBCUG;ACTL;;AAFA;EACE,WAAA;EACA,YAAA;EACA,iBAAA;EAAA,aAAA;EACA,qBAAA;OAAA,uBAAA;AAKF;;AADA;EACE,WAAA;EACA,iBAAA;EAAA,aAAA;EACA,qBAAA;OAAA,uBAAA;EACA,yBAAA;EAAA,0BAAA;OAAA,sBAAA;AAIF;AAFE;EACE,WAAA;EACA,cAAA;AAIJ;;AACA;EACE,WAAA;EACA,aAAA;EACA,cAAA;EAAA,SAAA;EACA,qCAAA;AAEF;;AACA;EACE,aDzBG;EC0BH,qBDdI;ECeJ,uBAAA;AAEF;AADE;EACE,WAAA;AAGJ;;AAMA;EACE,WAAA;EACA,gBAAA;EACA,oCAAA;EAAA,4BAAA;AAHF;;AAMA;EACE,aAAA;EACA,WAAA;EACA,iBAAA;EACA,oBAAA;AAHF;;AAMA;EACE,uFAAA;EAAA,qDAAA;EAAA,6CAAA;AAHF","sourcesContent":[".toggleBtnClass {\r\n  padding: $PS;\r\n  margin-bottom: $MM;\r\n}","//Colors\r\n$bgcolor: #110a3c;\r\n$cardBg: white;\r\n\r\n//Paddings\r\n$PS: 1rem;\r\n$PM: 2rem;\r\n$PL: 4rem;\r\n$PXL: 8rem;\r\n\r\n//Margins\r\n$MS: 1rem;\r\n$MM: 2rem;\r\n$ML: 4rem;\r\n$MXL: 8rem;\r\n\r\n//Border radius\r\n$BRS: 0.2rem;\r\n$BRM: 0.4rem;\r\n",".toggleBtnClass {\n  padding: 1rem;\n  margin-bottom: 2rem;\n}\n\n.mountainCardSection {\n  width: 60vw;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n}\n\n.collapse {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n.collapse button {\n  width: 100%;\n  display: block;\n}\n\n.mountainCardContainer {\n  width: 100%;\n  display: grid;\n  gap: 3rem;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n.cardContainer {\n  padding: 1rem;\n  border-radius: 0.2rem;\n  background-color: white;\n}\n.cardContainer img {\n  width: 100%;\n}\n\n.collapse .contentParent {\n  height: 0px;\n  overflow: hidden;\n  transition: height ease 0.3s;\n}\n\n.carousel img {\n  height: 400px;\n  width: auto;\n  object-fit: cover;\n  object-position: top;\n}\n\n.imageContainer::before {\n  background: linear-gradient(#e66465, #9198e5);\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"toggleBtnClass": "mountaincard_toggleBtnClass__2BfOF",
	"mountainCardSection": "mountaincard_mountainCardSection__21MFA",
	"collapse": "mountaincard_collapse__1ZgON",
	"mountainCardContainer": "mountaincard_mountainCardContainer__3Pi9F",
	"cardContainer": "mountaincard_cardContainer__YtKKT",
	"contentParent": "mountaincard_contentParent__2lBU8",
	"carousel": "mountaincard_carousel__V_9JG",
	"imageContainer": "mountaincard_imageContainer__1obZ6"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTI5YTFhNTQyMjI1Y2Y1NWM3MTQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsaUhBQXNEO0FBQ2hHO0FBQ0E7QUFDQSwrRUFBK0Usa0JBQWtCLHdCQUF3QixHQUFHLDhDQUE4QyxnQkFBZ0IsaUJBQWlCLHNCQUFzQixrQkFBa0IsMEJBQTBCLGlDQUFpQyxHQUFHLG1DQUFtQyxnQkFBZ0Isc0JBQXNCLGtCQUFrQiwwQkFBMEIsaUNBQWlDLDhCQUE4QiwrQkFBK0IsZ0NBQWdDLEdBQUcsd0NBQXdDLGdCQUFnQixtQkFBbUIsR0FBRyxnREFBZ0QsZ0JBQWdCLGtCQUFrQixtQkFBbUIsY0FBYywwQ0FBMEMsR0FBRyx3Q0FBd0Msa0JBQWtCLDBCQUEwQiw0QkFBNEIsR0FBRywwQ0FBMEMsZ0JBQWdCLEdBQUcsc0VBQXNFLGdCQUFnQixxQkFBcUIseUNBQXlDLGlDQUFpQyxHQUFHLHVDQUF1QyxrQkFBa0IsZ0JBQWdCLHNCQUFzQix5QkFBeUIsR0FBRyxpREFBaUQsNEZBQTRGLDBEQUEwRCxrREFBa0QsR0FBRyxPQUFPLDZJQUE2SSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsMENBQTBDLG1CQUFtQix5QkFBeUIsS0FBSyxpQ0FBaUMsbUJBQW1CLGdDQUFnQyxjQUFjLGNBQWMsZUFBZSwrQkFBK0IsY0FBYyxjQUFjLGVBQWUsd0NBQXdDLGlCQUFpQix3QkFBd0Isa0JBQWtCLHdCQUF3QixHQUFHLDBCQUEwQixnQkFBZ0IsaUJBQWlCLGtCQUFrQiw0QkFBNEIsR0FBRyxlQUFlLGdCQUFnQixrQkFBa0IsNEJBQTRCLDJCQUEyQixHQUFHLG9CQUFvQixnQkFBZ0IsbUJBQW1CLEdBQUcsNEJBQTRCLGdCQUFnQixrQkFBa0IsY0FBYywwQ0FBMEMsR0FBRyxvQkFBb0Isa0JBQWtCLDBCQUEwQiw0QkFBNEIsR0FBRyxzQkFBc0IsZ0JBQWdCLEdBQUcsOEJBQThCLGdCQUFnQixxQkFBcUIsaUNBQWlDLEdBQUcsbUJBQW1CLGtCQUFrQixnQkFBZ0Isc0JBQXNCLHlCQUF5QixHQUFHLDZCQUE2QixrREFBa0QsR0FBRyxtQkFBbUI7QUFDbjJHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvbW91bnRhaW5jYXJkLm1vZHVsZS5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5tb3VudGFpbmNhcmRfdG9nZ2xlQnRuQ2xhc3NfXzJCZk9GIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4ubW91bnRhaW5jYXJkX21vdW50YWluQ2FyZFNlY3Rpb25fXzIxTUZBIHtcXG4gIHdpZHRoOiA2MHZ3O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1vei1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1vdW50YWluY2FyZF9jb2xsYXBzZV9fMVpnT04ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbW96LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubW91bnRhaW5jYXJkX2NvbGxhcHNlX18xWmdPTiBidXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLm1vdW50YWluY2FyZF9tb3VudGFpbkNhcmRDb250YWluZXJfXzNQaTlGIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtZ2FwOiAzcmVtO1xcbiAgZ2FwOiAzcmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG59XFxuXFxuLm1vdW50YWluY2FyZF9jYXJkQ29udGFpbmVyX19ZdEtLVCB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5tb3VudGFpbmNhcmRfY2FyZENvbnRhaW5lcl9fWXRLS1QgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubW91bnRhaW5jYXJkX2NvbGxhcHNlX18xWmdPTiAubW91bnRhaW5jYXJkX2NvbnRlbnRQYXJlbnRfXzJsQlU4IHtcXG4gIGhlaWdodDogMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogaGVpZ2h0IGVhc2UgMC4zcztcXG4gIHRyYW5zaXRpb246IGhlaWdodCBlYXNlIDAuM3M7XFxufVxcblxcbi5tb3VudGFpbmNhcmRfY2Fyb3VzZWxfX1ZfOUpHIGltZyB7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgd2lkdGg6IGF1dG87XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIG9iamVjdC1wb3NpdGlvbjogdG9wO1xcbn1cXG5cXG4ubW91bnRhaW5jYXJkX2ltYWdlQ29udGFpbmVyX18xb2JaNjo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oI2U2NjQ2NSksIHRvKCM5MTk4ZTUpKTtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCNlNjY0NjUsICM5MTk4ZTUpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNlNjY0NjUsICM5MTk4ZTUpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vYnV0dG9ucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly9tb3VudGFpbmNhcmQubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQ0lHO0VESEgsbUJDVUc7QUNUTDs7QUFGQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7T0FBQSx1QkFBQTtBQUtGOztBQURBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO09BQUEsdUJBQUE7RUFDQSx5QkFBQTtFQUFBLDBCQUFBO09BQUEsc0JBQUE7QUFJRjtBQUZFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUFJSjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7RUFDQSxxQ0FBQTtBQUVGOztBQUNBO0VBQ0UsYUR6Qkc7RUMwQkgscUJEZEk7RUNlSix1QkFBQTtBQUVGO0FBREU7RUFDRSxXQUFBO0FBR0o7O0FBTUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUFBLDRCQUFBO0FBSEY7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFIRjs7QUFNQTtFQUNFLHVGQUFBO0VBQUEscURBQUE7RUFBQSw2Q0FBQTtBQUhGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50b2dnbGVCdG5DbGFzcyB7XFxyXFxuICBwYWRkaW5nOiAkUFM7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAkTU07XFxyXFxufVwiLFwiLy9Db2xvcnNcXHJcXG4kYmdjb2xvcjogIzExMGEzYztcXHJcXG4kY2FyZEJnOiB3aGl0ZTtcXHJcXG5cXHJcXG4vL1BhZGRpbmdzXFxyXFxuJFBTOiAxcmVtO1xcclxcbiRQTTogMnJlbTtcXHJcXG4kUEw6IDRyZW07XFxyXFxuJFBYTDogOHJlbTtcXHJcXG5cXHJcXG4vL01hcmdpbnNcXHJcXG4kTVM6IDFyZW07XFxyXFxuJE1NOiAycmVtO1xcclxcbiRNTDogNHJlbTtcXHJcXG4kTVhMOiA4cmVtO1xcclxcblxcclxcbi8vQm9yZGVyIHJhZGl1c1xcclxcbiRCUlM6IDAuMnJlbTtcXHJcXG4kQlJNOiAwLjRyZW07XFxyXFxuXCIsXCIudG9nZ2xlQnRuQ2xhc3Mge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5tb3VudGFpbkNhcmRTZWN0aW9uIHtcXG4gIHdpZHRoOiA2MHZ3O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29sbGFwc2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uY29sbGFwc2UgYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5tb3VudGFpbkNhcmRDb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAzcmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG59XFxuXFxuLmNhcmRDb250YWluZXIge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4uY2FyZENvbnRhaW5lciBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb2xsYXBzZSAuY29udGVudFBhcmVudCB7XFxuICBoZWlnaHQ6IDBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiBoZWlnaHQgZWFzZSAwLjNzO1xcbn1cXG5cXG4uY2Fyb3VzZWwgaW1nIHtcXG4gIGhlaWdodDogNDAwcHg7XFxuICB3aWR0aDogYXV0bztcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgb2JqZWN0LXBvc2l0aW9uOiB0b3A7XFxufVxcblxcbi5pbWFnZUNvbnRhaW5lcjo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZTY2NDY1LCAjOTE5OGU1KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwidG9nZ2xlQnRuQ2xhc3NcIjogXCJtb3VudGFpbmNhcmRfdG9nZ2xlQnRuQ2xhc3NfXzJCZk9GXCIsXG5cdFwibW91bnRhaW5DYXJkU2VjdGlvblwiOiBcIm1vdW50YWluY2FyZF9tb3VudGFpbkNhcmRTZWN0aW9uX18yMU1GQVwiLFxuXHRcImNvbGxhcHNlXCI6IFwibW91bnRhaW5jYXJkX2NvbGxhcHNlX18xWmdPTlwiLFxuXHRcIm1vdW50YWluQ2FyZENvbnRhaW5lclwiOiBcIm1vdW50YWluY2FyZF9tb3VudGFpbkNhcmRDb250YWluZXJfXzNQaTlGXCIsXG5cdFwiY2FyZENvbnRhaW5lclwiOiBcIm1vdW50YWluY2FyZF9jYXJkQ29udGFpbmVyX19ZdEtLVFwiLFxuXHRcImNvbnRlbnRQYXJlbnRcIjogXCJtb3VudGFpbmNhcmRfY29udGVudFBhcmVudF9fMmxCVThcIixcblx0XCJjYXJvdXNlbFwiOiBcIm1vdW50YWluY2FyZF9jYXJvdXNlbF9fVl85SkdcIixcblx0XCJpbWFnZUNvbnRhaW5lclwiOiBcIm1vdW50YWluY2FyZF9pbWFnZUNvbnRhaW5lcl9fMW9iWjZcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=