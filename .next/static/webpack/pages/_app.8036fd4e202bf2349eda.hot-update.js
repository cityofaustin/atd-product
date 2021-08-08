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
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
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


/***/ }),

/***/ "./src/shared/EvaluationsContext.js":
/*!******************************************!*\
  !*** ./src/shared/EvaluationsContext.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);

var EvaluationsContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext();
/* harmony default export */ __webpack_exports__["default"] = (EvaluationsContext);

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

/***/ "./src/shared/EvaluationsContextWrapper.jsx":
/*!**************************************************!*\
  !*** ./src/shared/EvaluationsContextWrapper.jsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EvaluationsContextWrapper": function() { return /* binding */ EvaluationsContextWrapper; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Administrator_Documents_Coding_Austin_atd_product_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _EvaluationsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EvaluationsContext */ "./src/shared/EvaluationsContext.js");
/* harmony import */ var _IssuesContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IssuesContext */ "./src/shared/IssuesContext.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Administrator\\Documents\\Coding\\Austin\\atd-product\\src\\shared\\EvaluationsContextWrapper.jsx",
    _s = $RefreshSig$();





function getKnackHeaders(appId) {
  return {
    "X-Knack-Application-Id": appId,
    "X-Knack-REST-API-KEY": "knack"
  };
}

function handleScores(scores) {
  return scores.map(function (score) {
    return {
      name: score.field_538,
      number: score.field_492,
      effort: score.field_536,
      value: score.field_537,
      dts_builder_hours: score.field_493,
      dts_product_hours: score.field_494,
      customer_effort_to_implement: score.field_495,
      monetary_costs: score.field_496,
      solves_multiple_workgroups_needs: score.field_497,
      of_users_impacted: score.field_498,
      efficiency_gains: score.field_499,
      sd_23_alignment: score.field_500,
      asmp_alignment: score.field_501,
      confidence: score.field_512
    };
  });
}

function EvaluationsContextWrapper(props) {
  _s();

  var context = react__WEBPACK_IMPORTED_MODULE_2___default().useContext(_IssuesContext__WEBPACK_IMPORTED_MODULE_4__.default);
  var issues = context.issues;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]),
      _React$useState2 = (0,C_Users_Administrator_Documents_Coding_Austin_atd_product_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),
      data = _React$useState2[0],
      setData = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]),
      _React$useState4 = (0,C_Users_Administrator_Documents_Coding_Austin_atd_product_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState3, 2),
      scores = _React$useState4[0],
      setScores = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default().useState(null),
      _React$useState6 = (0,C_Users_Administrator_Documents_Coding_Austin_atd_product_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState5, 2),
      error = _React$useState6[0],
      setError = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false),
      _React$useState8 = (0,C_Users_Administrator_Documents_Coding_Austin_atd_product_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState7, 2),
      isLoaded = _React$useState8[0],
      setIsLoaded = _React$useState8[1];

  var url = props.url,
      appId = props.appId,
      children = props.children;
  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(function () {
    fetch(url, {
      headers: getKnackHeaders(appId)
    }).then(function (res) {
      return res.json();
    }).then(function (result) {
      setIsLoaded(true);
      setData(result.records);
    }, function (error) {
      setIsLoaded(true);
      setError(error.toString());
    });
  }, [url, appId]);
  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(function () {
    var allScores = handleScores(data);
    var scoresWithIssues = allScores.filter(function (score) {
      var number = score.number; // exclude issues that do not have a score

      var matchesIssues = issues.filter(function (issue) {
        return parseInt(issue.number) === number;
      });
      return matchesIssues.length > 0;
    });
    setScores(scoresWithIssues);
  }, [issues, data]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EvaluationsContext__WEBPACK_IMPORTED_MODULE_3__.default.Provider, {
    value: {
      scores: scores,
      error: error,
      isLoaded: isLoaded
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 5
  }, this);
}

_s(EvaluationsContextWrapper, "3TfTG4L2tMs7AYLaIpZ3qrjPpzo=");

_c = EvaluationsContextWrapper;

var _c;

$RefreshReg$(_c, "EvaluationsContextWrapper");

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

/***/ "./src/shared/IssuesContext.js":
/*!*************************************!*\
  !*** ./src/shared/IssuesContext.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);

var IssuesContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext();
/* harmony default export */ __webpack_exports__["default"] = (IssuesContext);

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

/***/ "./src/shared/IssuesContextWrapper.jsx":
/*!*********************************************!*\
  !*** ./src/shared/IssuesContextWrapper.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IssuesContextWrapper": function() { return /* binding */ IssuesContextWrapper; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Administrator_Documents_Coding_Austin_atd_product_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_Administrator_Documents_Coding_Austin_atd_product_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _IssuesContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IssuesContext */ "./src/shared/IssuesContext.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\Administrator\\Documents\\Coding\\Austin\\atd-product\\src\\shared\\IssuesContextWrapper.jsx",
    _s = $RefreshSig$();



var STATUSES = ["Needs Scoping", "Backlog", "In Progress", "Completed"];

function sortByUpdatedDate(a, b) {
  return new Date(b.updated_at) - new Date(a.updated_at);
}

function getProjectIssues(data) {
  return data.filter(function (issue) {
    return issue.labels.includes("Project Index");
  });
}

function getProductIssues(data) {
  return data.filter(function (issue) {
    return issue.labels.includes("Product Index");
  });
}

function getUniqueWorkgroups(data) {
  var allWorkgroupsLabels = data.map(function (issue) {
    return issue.workgroups;
  }) // in addition to concatening sub-arrays of workgroups, flattening drops any empty
  // arrays from issues with no workgroup(s)
  .flat();
  return (0,C_Users_Administrator_Documents_Coding_Austin_atd_product_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(new Set(allWorkgroupsLabels)).sort();
}

function getType(labels) {
  // if an issue has more than one `type: ` label, all but one are ignored
  var types = labels.filter(function (label) {
    return label.startsWith("Type");
  });
  var typesParsed = types.map(function (type) {
    return type.split("Type: ")[1];
  });
  return typesParsed[0];
}

function getStatus(pipeline) {
  switch (pipeline) {
    case "New":
      return "Backlog";

    case "Needs Scoping":
      return "Needs Scoping";

    case "Icebox":
      return "Backlog";

    case "Backlog":
      return "Backlog";

    case "on deck":
      return "Backlog";

    case "In Progress":
      return "In Progress";

    case "Blocked":
      return "In Progress";

    case "Ongoing":
      return "In Progress";

    case "Review/QA":
      return "In Progress";

    case "Ready to Deploy":
      return "In Progress";

    case "Closed":
      return "Completed";

    default:
      return null;
  }
}

function dropTitlePrefix(title) {
  return title.replace("Project: ", "").replace("Product: ", "");
}

function handleData(data, setData) {
  // do some global tidying of the data.
  var dataHandled = data.map(function (issue) {
    var _issue$body;

    // remove html comments, which contain content we don't want to share
    issue.body = (_issue$body = issue.body) === null || _issue$body === void 0 ? void 0 : _issue$body.replace(/(<!-- .+? -->)/g, "");
    issue.labels = issue.labels ? issue.labels.split(", ") : [];
    issue.workgroups = issue.workgroups ? issue.workgroups.split(", ") : [];
    issue.type = getType(issue.labels); // assign a generalized "status" based on the issue pipeline

    issue.status = getStatus(issue.pipeline);
    issue.title = dropTitlePrefix(issue.title);
    issue.isFeatured = issue.labels.includes("Featured Project");
    return issue;
  });
  setData(dataHandled.sort(sortByUpdatedDate));
}

function IssuesContextWrapper(props) {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default().useState([]),
      _React$useState2 = (0,C_Users_Administrator_Documents_Coding_Austin_atd_product_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),
      data = _React$useState2[0],
      setData = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default().useState(null),
      _React$useState4 = (0,C_Users_Administrator_Documents_Coding_Austin_atd_product_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState3, 2),
      error = _React$useState4[0],
      setError = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_3___default().useState(false),
      _React$useState6 = (0,C_Users_Administrator_Documents_Coding_Austin_atd_product_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState5, 2),
      isLoaded = _React$useState6[0],
      setIsLoaded = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_3___default().useState([]),
      _React$useState8 = (0,C_Users_Administrator_Documents_Coding_Austin_atd_product_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState7, 2),
      workgroups = _React$useState8[0],
      setWorkgroups = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_3___default().useState([]),
      _React$useState10 = (0,C_Users_Administrator_Documents_Coding_Austin_atd_product_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState9, 2),
      projectIssues = _React$useState10[0],
      setProjectIssues = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_3___default().useState([]),
      _React$useState12 = (0,C_Users_Administrator_Documents_Coding_Austin_atd_product_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState11, 2),
      productIssues = _React$useState12[0],
      setProductIssues = _React$useState12[1];

  var url = props.url,
      children = props.children;
  react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(function () {
    fetch(url).then(function (res) {
      return res.json();
    }).then(function (result) {
      setIsLoaded(true);

      if (result.error) {
        // on query error, socrata returns status 200 with {"error": true, "message": <message>} in body
        setError(result.message.toString());
      } else {
        handleData(result, setData);
      }
    }, function (error) {
      setIsLoaded(true);
      setError(error.toString());
    });
  }, [url]);
  react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(function () {
    var currentProjectIssues = getProjectIssues(data);
    var currentProductissues = getProductIssues(data);
    var uniqueWorkgroup = getUniqueWorkgroups(data);
    setProjectIssues(currentProjectIssues);
    setProductIssues(currentProductissues);
    setWorkgroups(uniqueWorkgroup);
  }, [data]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_IssuesContext__WEBPACK_IMPORTED_MODULE_4__.default.Provider, {
    value: {
      issues: data,
      error: error,
      isLoaded: isLoaded,
      projectIssues: projectIssues,
      productIssues: productIssues,
      workgroups: workgroups,
      statuses: STATUSES
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 126,
    columnNumber: 5
  }, this);
}

_s(IssuesContextWrapper, "aVucm4BodDksIT5IbOFCbqMEpC0=");

_c = IssuesContextWrapper;

var _c;

$RefreshReg$(_c, "IssuesContextWrapper");

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

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithHoles; }
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithoutHoles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.default)(arr);
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArray; }
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArrayLimit; }
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableRest; }
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableSpread; }
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _slicedToArray; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithHoles */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArrayLimit */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableRest */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__.default)(arr, i) || (0,_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__.default)(arr, i) || (0,_babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toConsumableArray; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithoutHoles */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableSpread */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__.default)(arr) || (0,_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__.default)(arr) || (0,_babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NoYXJlZC9FdmFsdWF0aW9uc0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zaGFyZWQvRXZhbHVhdGlvbnNDb250ZXh0V3JhcHBlci5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zaGFyZWQvSXNzdWVzQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NoYXJlZC9Jc3N1ZXNDb250ZXh0V3JhcHBlci5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIklTU1VFU19FTkRQT0lOVCIsIkVWQUxTX0FQUF9JRCIsIkVWQUxVQVRJT05TX0VORFBPSU5UIiwiRXZhbHVhdGlvbnNDb250ZXh0IiwiUmVhY3QiLCJnZXRLbmFja0hlYWRlcnMiLCJhcHBJZCIsImhhbmRsZVNjb3JlcyIsInNjb3JlcyIsIm1hcCIsInNjb3JlIiwibmFtZSIsImZpZWxkXzUzOCIsIm51bWJlciIsImZpZWxkXzQ5MiIsImVmZm9ydCIsImZpZWxkXzUzNiIsInZhbHVlIiwiZmllbGRfNTM3IiwiZHRzX2J1aWxkZXJfaG91cnMiLCJmaWVsZF80OTMiLCJkdHNfcHJvZHVjdF9ob3VycyIsImZpZWxkXzQ5NCIsImN1c3RvbWVyX2VmZm9ydF90b19pbXBsZW1lbnQiLCJmaWVsZF80OTUiLCJtb25ldGFyeV9jb3N0cyIsImZpZWxkXzQ5NiIsInNvbHZlc19tdWx0aXBsZV93b3JrZ3JvdXBzX25lZWRzIiwiZmllbGRfNDk3Iiwib2ZfdXNlcnNfaW1wYWN0ZWQiLCJmaWVsZF80OTgiLCJlZmZpY2llbmN5X2dhaW5zIiwiZmllbGRfNDk5Iiwic2RfMjNfYWxpZ25tZW50IiwiZmllbGRfNTAwIiwiYXNtcF9hbGlnbm1lbnQiLCJmaWVsZF81MDEiLCJjb25maWRlbmNlIiwiZmllbGRfNTEyIiwiRXZhbHVhdGlvbnNDb250ZXh0V3JhcHBlciIsInByb3BzIiwiY29udGV4dCIsIklzc3Vlc0NvbnRleHQiLCJpc3N1ZXMiLCJkYXRhIiwic2V0RGF0YSIsInNldFNjb3JlcyIsImVycm9yIiwic2V0RXJyb3IiLCJpc0xvYWRlZCIsInNldElzTG9hZGVkIiwidXJsIiwiY2hpbGRyZW4iLCJmZXRjaCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwianNvbiIsInJlc3VsdCIsInJlY29yZHMiLCJ0b1N0cmluZyIsImFsbFNjb3JlcyIsInNjb3Jlc1dpdGhJc3N1ZXMiLCJmaWx0ZXIiLCJtYXRjaGVzSXNzdWVzIiwiaXNzdWUiLCJwYXJzZUludCIsImxlbmd0aCIsIlNUQVRVU0VTIiwic29ydEJ5VXBkYXRlZERhdGUiLCJhIiwiYiIsIkRhdGUiLCJ1cGRhdGVkX2F0IiwiZ2V0UHJvamVjdElzc3VlcyIsImxhYmVscyIsImluY2x1ZGVzIiwiZ2V0UHJvZHVjdElzc3VlcyIsImdldFVuaXF1ZVdvcmtncm91cHMiLCJhbGxXb3JrZ3JvdXBzTGFiZWxzIiwid29ya2dyb3VwcyIsImZsYXQiLCJTZXQiLCJzb3J0IiwiZ2V0VHlwZSIsInR5cGVzIiwibGFiZWwiLCJzdGFydHNXaXRoIiwidHlwZXNQYXJzZWQiLCJ0eXBlIiwic3BsaXQiLCJnZXRTdGF0dXMiLCJwaXBlbGluZSIsImRyb3BUaXRsZVByZWZpeCIsInRpdGxlIiwicmVwbGFjZSIsImhhbmRsZURhdGEiLCJkYXRhSGFuZGxlZCIsImJvZHkiLCJzdGF0dXMiLCJpc0ZlYXR1cmVkIiwiSXNzdWVzQ29udGV4dFdyYXBwZXIiLCJzZXRXb3JrZ3JvdXBzIiwicHJvamVjdElzc3VlcyIsInNldFByb2plY3RJc3N1ZXMiLCJwcm9kdWN0SXNzdWVzIiwic2V0UHJvZHVjdElzc3VlcyIsIm1lc3NhZ2UiLCJjdXJyZW50UHJvamVjdElzc3VlcyIsImN1cnJlbnRQcm9kdWN0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QUFDQSxvQ0FBb0Msb0ZBQWdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRixvRkFBZ0I7QUFDdEcsQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjgwMzZmZDRlMjAyYmYyMzQ5ZWRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJc3N1ZXNDb250ZXh0V3JhcHBlciB9IGZyb20gXCIuLi9zcmMvc2hhcmVkL0lzc3Vlc0NvbnRleHRXcmFwcGVyXCI7XHJcbmltcG9ydCB7IEV2YWx1YXRpb25zQ29udGV4dFdyYXBwZXIgfSBmcm9tIFwiLi4vc3JjL3NoYXJlZC9FdmFsdWF0aW9uc0NvbnRleHRXcmFwcGVyXCI7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPElzc3Vlc0NvbnRleHRXcmFwcGVyIHVybD17SVNTVUVTX0VORFBPSU5UfT5cclxuICAgICAgPEV2YWx1YXRpb25zQ29udGV4dFdyYXBwZXJcclxuICAgICAgICBhcHBJZD17RVZBTFNfQVBQX0lEfVxyXG4gICAgICAgIHVybD17RVZBTFVBVElPTlNfRU5EUE9JTlR9XHJcbiAgICAgID5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvRXZhbHVhdGlvbnNDb250ZXh0V3JhcHBlcj5cclxuICAgIDwvSXNzdWVzQ29udGV4dFdyYXBwZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuY29uc3QgRXZhbHVhdGlvbnNDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5leHBvcnQgZGVmYXVsdCBFdmFsdWF0aW9uc0NvbnRleHQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRXZhbHVhdGlvbnNDb250ZXh0IGZyb20gXCIuL0V2YWx1YXRpb25zQ29udGV4dFwiO1xyXG5pbXBvcnQgSXNzdWVzQ29udGV4dCBmcm9tIFwiLi9Jc3N1ZXNDb250ZXh0XCI7XHJcblxyXG5mdW5jdGlvbiBnZXRLbmFja0hlYWRlcnMoYXBwSWQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgXCJYLUtuYWNrLUFwcGxpY2F0aW9uLUlkXCI6IGFwcElkLFxyXG4gICAgXCJYLUtuYWNrLVJFU1QtQVBJLUtFWVwiOiBcImtuYWNrXCIsXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlU2NvcmVzKHNjb3Jlcykge1xyXG4gIHJldHVybiBzY29yZXMubWFwKChzY29yZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmFtZTogc2NvcmUuZmllbGRfNTM4LFxyXG4gICAgICBudW1iZXI6IHNjb3JlLmZpZWxkXzQ5MixcclxuICAgICAgZWZmb3J0OiBzY29yZS5maWVsZF81MzYsXHJcbiAgICAgIHZhbHVlOiBzY29yZS5maWVsZF81MzcsXHJcbiAgICAgIGR0c19idWlsZGVyX2hvdXJzOiBzY29yZS5maWVsZF80OTMsXHJcbiAgICAgIGR0c19wcm9kdWN0X2hvdXJzOiBzY29yZS5maWVsZF80OTQsXHJcbiAgICAgIGN1c3RvbWVyX2VmZm9ydF90b19pbXBsZW1lbnQ6IHNjb3JlLmZpZWxkXzQ5NSxcclxuICAgICAgbW9uZXRhcnlfY29zdHM6IHNjb3JlLmZpZWxkXzQ5NixcclxuICAgICAgc29sdmVzX211bHRpcGxlX3dvcmtncm91cHNfbmVlZHM6IHNjb3JlLmZpZWxkXzQ5NyxcclxuICAgICAgb2ZfdXNlcnNfaW1wYWN0ZWQ6IHNjb3JlLmZpZWxkXzQ5OCxcclxuICAgICAgZWZmaWNpZW5jeV9nYWluczogc2NvcmUuZmllbGRfNDk5LFxyXG4gICAgICBzZF8yM19hbGlnbm1lbnQ6IHNjb3JlLmZpZWxkXzUwMCxcclxuICAgICAgYXNtcF9hbGlnbm1lbnQ6IHNjb3JlLmZpZWxkXzUwMSxcclxuICAgICAgY29uZmlkZW5jZTogc2NvcmUuZmllbGRfNTEyLFxyXG4gICAgfTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEV2YWx1YXRpb25zQ29udGV4dFdyYXBwZXIocHJvcHMpIHtcclxuICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChJc3N1ZXNDb250ZXh0KTtcclxuICBjb25zdCBpc3N1ZXMgPSBjb250ZXh0Lmlzc3VlcztcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Njb3Jlcywgc2V0U2NvcmVzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHsgdXJsLCBhcHBJZCwgY2hpbGRyZW4gfSA9IHByb3BzO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2godXJsLCB7IGhlYWRlcnM6IGdldEtuYWNrSGVhZGVycyhhcHBJZCkgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oXHJcbiAgICAgICAgKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgc2V0SXNMb2FkZWQodHJ1ZSk7XHJcbiAgICAgICAgICBzZXREYXRhKHJlc3VsdC5yZWNvcmRzKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgc2V0SXNMb2FkZWQodHJ1ZSk7XHJcbiAgICAgICAgICBzZXRFcnJvcihlcnJvci50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgfSwgW3VybCwgYXBwSWRdKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGFsbFNjb3JlcyA9IGhhbmRsZVNjb3JlcyhkYXRhKTtcclxuICAgIGNvbnN0IHNjb3Jlc1dpdGhJc3N1ZXMgPSBhbGxTY29yZXMuZmlsdGVyKChzY29yZSkgPT4ge1xyXG4gICAgICBjb25zdCBudW1iZXIgPSBzY29yZS5udW1iZXI7XHJcbiAgICAgIC8vIGV4Y2x1ZGUgaXNzdWVzIHRoYXQgZG8gbm90IGhhdmUgYSBzY29yZVxyXG4gICAgICBjb25zdCBtYXRjaGVzSXNzdWVzID0gaXNzdWVzLmZpbHRlcihcclxuICAgICAgICAoaXNzdWUpID0+IHBhcnNlSW50KGlzc3VlLm51bWJlcikgPT09IG51bWJlclxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm4gbWF0Y2hlc0lzc3Vlcy5sZW5ndGggPiAwO1xyXG4gICAgfSk7XHJcbiAgICBzZXRTY29yZXMoc2NvcmVzV2l0aElzc3Vlcyk7XHJcbiAgfSwgW2lzc3VlcywgZGF0YV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEV2YWx1YXRpb25zQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17eyBzY29yZXM6IHNjb3JlcywgZXJyb3I6IGVycm9yLCBpc0xvYWRlZDogaXNMb2FkZWQgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9FdmFsdWF0aW9uc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IElzc3Vlc0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBkZWZhdWx0IElzc3Vlc0NvbnRleHQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSXNzdWVzQ29udGV4dCBmcm9tIFwiLi9Jc3N1ZXNDb250ZXh0XCI7XHJcblxyXG5jb25zdCBTVEFUVVNFUyA9IFtcIk5lZWRzIFNjb3BpbmdcIiwgXCJCYWNrbG9nXCIsIFwiSW4gUHJvZ3Jlc3NcIiwgXCJDb21wbGV0ZWRcIl07XHJcblxyXG5mdW5jdGlvbiBzb3J0QnlVcGRhdGVkRGF0ZShhLCBiKSB7XHJcbiAgcmV0dXJuIG5ldyBEYXRlKGIudXBkYXRlZF9hdCkgLSBuZXcgRGF0ZShhLnVwZGF0ZWRfYXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQcm9qZWN0SXNzdWVzKGRhdGEpIHtcclxuICByZXR1cm4gZGF0YS5maWx0ZXIoKGlzc3VlKSA9PiBpc3N1ZS5sYWJlbHMuaW5jbHVkZXMoXCJQcm9qZWN0IEluZGV4XCIpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UHJvZHVjdElzc3VlcyhkYXRhKSB7XHJcbiAgcmV0dXJuIGRhdGEuZmlsdGVyKChpc3N1ZSkgPT4gaXNzdWUubGFiZWxzLmluY2x1ZGVzKFwiUHJvZHVjdCBJbmRleFwiKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFVuaXF1ZVdvcmtncm91cHMoZGF0YSkge1xyXG4gIGNvbnN0IGFsbFdvcmtncm91cHNMYWJlbHMgPSBkYXRhXHJcbiAgICAubWFwKChpc3N1ZSkgPT4ge1xyXG4gICAgICByZXR1cm4gaXNzdWUud29ya2dyb3VwcztcclxuICAgIH0pXHJcbiAgICAvLyBpbiBhZGRpdGlvbiB0byBjb25jYXRlbmluZyBzdWItYXJyYXlzIG9mIHdvcmtncm91cHMsIGZsYXR0ZW5pbmcgZHJvcHMgYW55IGVtcHR5XHJcbiAgICAvLyBhcnJheXMgZnJvbSBpc3N1ZXMgd2l0aCBubyB3b3JrZ3JvdXAocylcclxuICAgIC5mbGF0KCk7XHJcblxyXG4gIHJldHVybiBbLi4ubmV3IFNldChhbGxXb3JrZ3JvdXBzTGFiZWxzKV0uc29ydCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUeXBlKGxhYmVscykge1xyXG4gIC8vIGlmIGFuIGlzc3VlIGhhcyBtb3JlIHRoYW4gb25lIGB0eXBlOiBgIGxhYmVsLCBhbGwgYnV0IG9uZSBhcmUgaWdub3JlZFxyXG4gIGNvbnN0IHR5cGVzID0gbGFiZWxzLmZpbHRlcigobGFiZWwpID0+IGxhYmVsLnN0YXJ0c1dpdGgoXCJUeXBlXCIpKTtcclxuICBjb25zdCB0eXBlc1BhcnNlZCA9IHR5cGVzLm1hcCgodHlwZSkgPT4gdHlwZS5zcGxpdChcIlR5cGU6IFwiKVsxXSk7XHJcbiAgcmV0dXJuIHR5cGVzUGFyc2VkWzBdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTdGF0dXMocGlwZWxpbmUpIHtcclxuICBzd2l0Y2ggKHBpcGVsaW5lKSB7XHJcbiAgICBjYXNlIFwiTmV3XCI6XHJcbiAgICAgIHJldHVybiBcIkJhY2tsb2dcIjtcclxuICAgIGNhc2UgXCJOZWVkcyBTY29waW5nXCI6XHJcbiAgICAgIHJldHVybiBcIk5lZWRzIFNjb3BpbmdcIjtcclxuICAgIGNhc2UgXCJJY2Vib3hcIjpcclxuICAgICAgcmV0dXJuIFwiQmFja2xvZ1wiO1xyXG4gICAgY2FzZSBcIkJhY2tsb2dcIjpcclxuICAgICAgcmV0dXJuIFwiQmFja2xvZ1wiO1xyXG4gICAgY2FzZSBcIm9uIGRlY2tcIjpcclxuICAgICAgcmV0dXJuIFwiQmFja2xvZ1wiO1xyXG4gICAgY2FzZSBcIkluIFByb2dyZXNzXCI6XHJcbiAgICAgIHJldHVybiBcIkluIFByb2dyZXNzXCI7XHJcbiAgICBjYXNlIFwiQmxvY2tlZFwiOlxyXG4gICAgICByZXR1cm4gXCJJbiBQcm9ncmVzc1wiO1xyXG4gICAgY2FzZSBcIk9uZ29pbmdcIjpcclxuICAgICAgcmV0dXJuIFwiSW4gUHJvZ3Jlc3NcIjtcclxuICAgIGNhc2UgXCJSZXZpZXcvUUFcIjpcclxuICAgICAgcmV0dXJuIFwiSW4gUHJvZ3Jlc3NcIjtcclxuICAgIGNhc2UgXCJSZWFkeSB0byBEZXBsb3lcIjpcclxuICAgICAgcmV0dXJuIFwiSW4gUHJvZ3Jlc3NcIjtcclxuICAgIGNhc2UgXCJDbG9zZWRcIjpcclxuICAgICAgcmV0dXJuIFwiQ29tcGxldGVkXCI7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyb3BUaXRsZVByZWZpeCh0aXRsZSkge1xyXG4gIHJldHVybiB0aXRsZS5yZXBsYWNlKFwiUHJvamVjdDogXCIsIFwiXCIpLnJlcGxhY2UoXCJQcm9kdWN0OiBcIiwgXCJcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZURhdGEoZGF0YSwgc2V0RGF0YSkge1xyXG4gIC8vIGRvIHNvbWUgZ2xvYmFsIHRpZHlpbmcgb2YgdGhlIGRhdGEuXHJcbiAgbGV0IGRhdGFIYW5kbGVkID0gZGF0YS5tYXAoKGlzc3VlKSA9PiB7XHJcbiAgICAvLyByZW1vdmUgaHRtbCBjb21tZW50cywgd2hpY2ggY29udGFpbiBjb250ZW50IHdlIGRvbid0IHdhbnQgdG8gc2hhcmVcclxuICAgIGlzc3VlLmJvZHkgPSBpc3N1ZS5ib2R5Py5yZXBsYWNlKC8oPCEtLSAuKz8gLS0+KS9nLCBcIlwiKTtcclxuICAgIGlzc3VlLmxhYmVscyA9IGlzc3VlLmxhYmVscyA/IGlzc3VlLmxhYmVscy5zcGxpdChcIiwgXCIpIDogW107XHJcbiAgICBpc3N1ZS53b3JrZ3JvdXBzID0gaXNzdWUud29ya2dyb3VwcyA/IGlzc3VlLndvcmtncm91cHMuc3BsaXQoXCIsIFwiKSA6IFtdO1xyXG4gICAgaXNzdWUudHlwZSA9IGdldFR5cGUoaXNzdWUubGFiZWxzKTtcclxuICAgIC8vIGFzc2lnbiBhIGdlbmVyYWxpemVkIFwic3RhdHVzXCIgYmFzZWQgb24gdGhlIGlzc3VlIHBpcGVsaW5lXHJcbiAgICBpc3N1ZS5zdGF0dXMgPSBnZXRTdGF0dXMoaXNzdWUucGlwZWxpbmUpO1xyXG4gICAgaXNzdWUudGl0bGUgPSBkcm9wVGl0bGVQcmVmaXgoaXNzdWUudGl0bGUpO1xyXG4gICAgaXNzdWUuaXNGZWF0dXJlZCA9IGlzc3VlLmxhYmVscy5pbmNsdWRlcyhcIkZlYXR1cmVkIFByb2plY3RcIik7XHJcbiAgICByZXR1cm4gaXNzdWU7XHJcbiAgfSk7XHJcbiAgc2V0RGF0YShkYXRhSGFuZGxlZC5zb3J0KHNvcnRCeVVwZGF0ZWREYXRlKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBJc3N1ZXNDb250ZXh0V3JhcHBlcihwcm9wcykge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt3b3JrZ3JvdXBzLCBzZXRXb3JrZ3JvdXBzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcHJvamVjdElzc3Vlcywgc2V0UHJvamVjdElzc3Vlc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Byb2R1Y3RJc3N1ZXMsIHNldFByb2R1Y3RJc3N1ZXNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IHsgdXJsLCBjaGlsZHJlbiB9ID0gcHJvcHM7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaCh1cmwpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKFxyXG4gICAgICAgIChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIHNldElzTG9hZGVkKHRydWUpO1xyXG4gICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcikge1xyXG4gICAgICAgICAgICAvLyBvbiBxdWVyeSBlcnJvciwgc29jcmF0YSByZXR1cm5zIHN0YXR1cyAyMDAgd2l0aCB7XCJlcnJvclwiOiB0cnVlLCBcIm1lc3NhZ2VcIjogPG1lc3NhZ2U+fSBpbiBib2R5XHJcbiAgICAgICAgICAgIHNldEVycm9yKHJlc3VsdC5tZXNzYWdlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaGFuZGxlRGF0YShyZXN1bHQsIHNldERhdGEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBzZXRJc0xvYWRlZCh0cnVlKTtcclxuICAgICAgICAgIHNldEVycm9yKGVycm9yLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICB9LCBbdXJsXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdElzc3VlcyA9IGdldFByb2plY3RJc3N1ZXMoZGF0YSk7XHJcbiAgICBjb25zdCBjdXJyZW50UHJvZHVjdGlzc3VlcyA9IGdldFByb2R1Y3RJc3N1ZXMoZGF0YSk7XHJcbiAgICBjb25zdCB1bmlxdWVXb3JrZ3JvdXAgPSBnZXRVbmlxdWVXb3JrZ3JvdXBzKGRhdGEpO1xyXG4gICAgc2V0UHJvamVjdElzc3VlcyhjdXJyZW50UHJvamVjdElzc3Vlcyk7XHJcbiAgICBzZXRQcm9kdWN0SXNzdWVzKGN1cnJlbnRQcm9kdWN0aXNzdWVzKTtcclxuICAgIHNldFdvcmtncm91cHModW5pcXVlV29ya2dyb3VwKTtcclxuICB9LCBbZGF0YV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPElzc3Vlc0NvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBpc3N1ZXM6IGRhdGEsXHJcbiAgICAgICAgZXJyb3I6IGVycm9yLFxyXG4gICAgICAgIGlzTG9hZGVkOiBpc0xvYWRlZCxcclxuICAgICAgICBwcm9qZWN0SXNzdWVzOiBwcm9qZWN0SXNzdWVzLFxyXG4gICAgICAgIHByb2R1Y3RJc3N1ZXM6IHByb2R1Y3RJc3N1ZXMsXHJcbiAgICAgICAgd29ya2dyb3Vwczogd29ya2dyb3VwcyxcclxuICAgICAgICBzdGF0dXNlczogU1RBVFVTRVMsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvSXNzdWVzQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiaW1wb3J0IGFycmF5V2l0aEhvbGVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhIb2xlc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheUxpbWl0IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlUmVzdCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufSIsImltcG9ydCBhcnJheVdpdGhvdXRIb2xlcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRob3V0SG9sZXNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlU3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVNwcmVhZFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXlcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==