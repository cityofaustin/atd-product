self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Administrator_Documents_Coding_Austin_atd_product_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_shared_IssuesContextWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/shared/IssuesContextWrapper */ "./src/shared/IssuesContextWrapper.jsx");
/* harmony import */ var _src_shared_EvaluationsContextWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/shared/EvaluationsContextWrapper */ "./src/shared/EvaluationsContextWrapper.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Administrator\\Documents\\Coding\\Austin\\atd-product\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Administrator_Documents_Coding_Austin_atd_product_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var ISSUES_ENDPOINT = "https://data.austintexas.gov/resource/rzwg-fyv8.json?$limit=10000";
var EVALUATIONS_ENDPOINT = "https://api.knack.com/v1/pages/scene_162/views/view_311/records";
var EVALS_APP_ID = "595d00ebd315cc4cb98daff4";

function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_shared_IssuesContextWrapper__WEBPACK_IMPORTED_MODULE_2__.IssuesContextWrapper, {
    url: ISSUES_ENDPOINT,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_shared_EvaluationsContextWrapper__WEBPACK_IMPORTED_MODULE_3__.EvaluationsContextWrapper, {
      appId: EVALS_APP_ID,
      url: EVALUATIONS_ENDPOINT,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJJU1NVRVNfRU5EUE9JTlQiLCJFVkFMVUFUSU9OU19FTkRQT0lOVCIsIkVWQUxTX0FQUF9JRCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsZUFBZSxHQUNuQixtRUFERjtBQUdBLElBQU1DLG9CQUFvQixHQUN4QixpRUFERjtBQUdBLElBQU1DLFlBQVksR0FBRywwQkFBckI7O0FBRUEsU0FBU0MsS0FBVCxPQUF5QztBQUFBLE1BQXhCQyxTQUF3QixRQUF4QkEsU0FBd0I7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFDdkMsc0JBQ0UsOERBQUMsa0ZBQUQ7QUFBc0IsT0FBRyxFQUFFTCxlQUEzQjtBQUFBLDJCQUNFLDhEQUFDLDRGQUFEO0FBQ0UsV0FBSyxFQUFFRSxZQURUO0FBRUUsU0FBRyxFQUFFRCxvQkFGUDtBQUFBLDZCQUlFLDhEQUFDLFNBQUQsb0JBQWVJLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFVRDs7S0FYUUYsSztBQWFULCtEQUFlQSxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMzVkMGIxZTljOTFhMmE0ZTE2NDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElzc3Vlc0NvbnRleHRXcmFwcGVyIH0gZnJvbSBcIi4uL3NyYy9zaGFyZWQvSXNzdWVzQ29udGV4dFdyYXBwZXJcIjtcclxuaW1wb3J0IHsgRXZhbHVhdGlvbnNDb250ZXh0V3JhcHBlciB9IGZyb20gXCIuLi9zcmMvc2hhcmVkL0V2YWx1YXRpb25zQ29udGV4dFdyYXBwZXJcIjtcclxuXHJcbmNvbnN0IElTU1VFU19FTkRQT0lOVCA9XHJcbiAgXCJodHRwczovL2RhdGEuYXVzdGludGV4YXMuZ292L3Jlc291cmNlL3J6d2ctZnl2OC5qc29uPyRsaW1pdD0xMDAwMFwiO1xyXG5cclxuY29uc3QgRVZBTFVBVElPTlNfRU5EUE9JTlQgPVxyXG4gIFwiaHR0cHM6Ly9hcGkua25hY2suY29tL3YxL3BhZ2VzL3NjZW5lXzE2Mi92aWV3cy92aWV3XzMxMS9yZWNvcmRzXCI7XHJcblxyXG5jb25zdCBFVkFMU19BUFBfSUQgPSBcIjU5NWQwMGViZDMxNWNjNGNiOThkYWZmNFwiO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxJc3N1ZXNDb250ZXh0V3JhcHBlciB1cmw9e0lTU1VFU19FTkRQT0lOVH0+XHJcbiAgICAgIDxFdmFsdWF0aW9uc0NvbnRleHRXcmFwcGVyXHJcbiAgICAgICAgYXBwSWQ9e0VWQUxTX0FQUF9JRH1cclxuICAgICAgICB1cmw9e0VWQUxVQVRJT05TX0VORFBPSU5UfVxyXG4gICAgICA+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L0V2YWx1YXRpb25zQ29udGV4dFdyYXBwZXI+XHJcbiAgICA8L0lzc3Vlc0NvbnRleHRXcmFwcGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9