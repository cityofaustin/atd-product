self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/contexts/EvaluationsContext.js":
/*!***************************************************!*\
  !*** ./components/contexts/EvaluationsContext.js ***!
  \***************************************************/
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

/***/ "./components/contexts/IssuesContext.js":
/*!**********************************************!*\
  !*** ./components/contexts/IssuesContext.js ***!
  \**********************************************/
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

/***/ "./components/wrappers/EvaluationsContextWrapper.js":
/*!**********************************************************!*\
  !*** ./components/wrappers/EvaluationsContextWrapper.js ***!
  \**********************************************************/
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
/* harmony import */ var _contexts_EvaluationsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/EvaluationsContext */ "./components/contexts/EvaluationsContext.js");
/* harmony import */ var _contexts_IssuesContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/IssuesContext */ "./components/contexts/IssuesContext.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Administrator\\Documents\\Coding\\Austin\\atd-product\\components\\wrappers\\EvaluationsContextWrapper.js",
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

  var context = react__WEBPACK_IMPORTED_MODULE_2___default().useContext(_contexts_IssuesContext__WEBPACK_IMPORTED_MODULE_4__.default);
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_EvaluationsContext__WEBPACK_IMPORTED_MODULE_3__.default.Provider, {
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

/***/ "./components/wrappers/IssuesContextWrapper.js":
/*!*****************************************************!*\
  !*** ./components/wrappers/IssuesContextWrapper.js ***!
  \*****************************************************/
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
/* harmony import */ var _contexts_IssuesContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/IssuesContext */ "./components/contexts/IssuesContext.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\Administrator\\Documents\\Coding\\Austin\\atd-product\\components\\wrappers\\IssuesContextWrapper.js",
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_IssuesContext__WEBPACK_IMPORTED_MODULE_4__.default.Provider, {
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
/* harmony import */ var _components_wrappers_IssuesContextWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/wrappers/IssuesContextWrapper */ "./components/wrappers/IssuesContextWrapper.js");
/* harmony import */ var _components_wrappers_EvaluationsContextWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/wrappers/EvaluationsContextWrapper */ "./components/wrappers/EvaluationsContextWrapper.js");
/* harmony import */ var _styles_custom_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/custom.scss */ "./styles/custom.scss");
/* harmony import */ var _styles_custom_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_custom_scss__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Administrator\\Documents\\Coding\\Austin\\atd-product\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Administrator_Documents_Coding_Austin_atd_product_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var ISSUES_ENDPOINT = "https://data.austintexas.gov/resource/rzwg-fyv8.json?$limit=10000";
var EVALUATIONS_ENDPOINT = "https://api.knack.com/v1/pages/scene_162/views/view_311/records";
var EVALS_APP_ID = "595d00ebd315cc4cb98daff4";

function App(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_wrappers_IssuesContextWrapper__WEBPACK_IMPORTED_MODULE_2__.IssuesContextWrapper, {
    url: ISSUES_ENDPOINT,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_wrappers_EvaluationsContextWrapper__WEBPACK_IMPORTED_MODULE_3__.EvaluationsContextWrapper, {
      appId: EVALS_APP_ID,
      url: EVALUATIONS_ENDPOINT,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZXh0cy9FdmFsdWF0aW9uc0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29udGV4dHMvSXNzdWVzQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy93cmFwcGVycy9FdmFsdWF0aW9uc0NvbnRleHRXcmFwcGVyLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3dyYXBwZXJzL0lzc3Vlc0NvbnRleHRXcmFwcGVyLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbIkV2YWx1YXRpb25zQ29udGV4dCIsIlJlYWN0IiwiSXNzdWVzQ29udGV4dCIsImdldEtuYWNrSGVhZGVycyIsImFwcElkIiwiaGFuZGxlU2NvcmVzIiwic2NvcmVzIiwibWFwIiwic2NvcmUiLCJuYW1lIiwiZmllbGRfNTM4IiwibnVtYmVyIiwiZmllbGRfNDkyIiwiZWZmb3J0IiwiZmllbGRfNTM2IiwidmFsdWUiLCJmaWVsZF81MzciLCJkdHNfYnVpbGRlcl9ob3VycyIsImZpZWxkXzQ5MyIsImR0c19wcm9kdWN0X2hvdXJzIiwiZmllbGRfNDk0IiwiY3VzdG9tZXJfZWZmb3J0X3RvX2ltcGxlbWVudCIsImZpZWxkXzQ5NSIsIm1vbmV0YXJ5X2Nvc3RzIiwiZmllbGRfNDk2Iiwic29sdmVzX211bHRpcGxlX3dvcmtncm91cHNfbmVlZHMiLCJmaWVsZF80OTciLCJvZl91c2Vyc19pbXBhY3RlZCIsImZpZWxkXzQ5OCIsImVmZmljaWVuY3lfZ2FpbnMiLCJmaWVsZF80OTkiLCJzZF8yM19hbGlnbm1lbnQiLCJmaWVsZF81MDAiLCJhc21wX2FsaWdubWVudCIsImZpZWxkXzUwMSIsImNvbmZpZGVuY2UiLCJmaWVsZF81MTIiLCJFdmFsdWF0aW9uc0NvbnRleHRXcmFwcGVyIiwicHJvcHMiLCJjb250ZXh0IiwiaXNzdWVzIiwiZGF0YSIsInNldERhdGEiLCJzZXRTY29yZXMiLCJlcnJvciIsInNldEVycm9yIiwiaXNMb2FkZWQiLCJzZXRJc0xvYWRlZCIsInVybCIsImNoaWxkcmVuIiwiZmV0Y2giLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXN1bHQiLCJyZWNvcmRzIiwidG9TdHJpbmciLCJhbGxTY29yZXMiLCJzY29yZXNXaXRoSXNzdWVzIiwiZmlsdGVyIiwibWF0Y2hlc0lzc3VlcyIsImlzc3VlIiwicGFyc2VJbnQiLCJsZW5ndGgiLCJTVEFUVVNFUyIsInNvcnRCeVVwZGF0ZWREYXRlIiwiYSIsImIiLCJEYXRlIiwidXBkYXRlZF9hdCIsImdldFByb2plY3RJc3N1ZXMiLCJsYWJlbHMiLCJpbmNsdWRlcyIsImdldFByb2R1Y3RJc3N1ZXMiLCJnZXRVbmlxdWVXb3JrZ3JvdXBzIiwiYWxsV29ya2dyb3Vwc0xhYmVscyIsIndvcmtncm91cHMiLCJmbGF0IiwiU2V0Iiwic29ydCIsImdldFR5cGUiLCJ0eXBlcyIsImxhYmVsIiwic3RhcnRzV2l0aCIsInR5cGVzUGFyc2VkIiwidHlwZSIsInNwbGl0IiwiZ2V0U3RhdHVzIiwicGlwZWxpbmUiLCJkcm9wVGl0bGVQcmVmaXgiLCJ0aXRsZSIsInJlcGxhY2UiLCJoYW5kbGVEYXRhIiwiZGF0YUhhbmRsZWQiLCJib2R5Iiwic3RhdHVzIiwiaXNGZWF0dXJlZCIsIklzc3Vlc0NvbnRleHRXcmFwcGVyIiwic2V0V29ya2dyb3VwcyIsInByb2plY3RJc3N1ZXMiLCJzZXRQcm9qZWN0SXNzdWVzIiwicHJvZHVjdElzc3VlcyIsInNldFByb2R1Y3RJc3N1ZXMiLCJtZXNzYWdlIiwiY3VycmVudFByb2plY3RJc3N1ZXMiLCJjdXJyZW50UHJvZHVjdGlzc3VlcyIsInVuaXF1ZVdvcmtncm91cCIsInN0YXR1c2VzIiwiSVNTVUVTX0VORFBPSU5UIiwiRVZBTFVBVElPTlNfRU5EUE9JTlQiLCJFVkFMU19BUFBfSUQiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3Mi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O0FBQXNCLE9BQUcsRUFBRUwsZUFBM0I7QUFBQSwyQkFDRSw4REFBQyxxR0FBRDtBQUNFLFdBQUssRUFBRUUsWUFEVDtBQUVFLFNBQUcsRUFBRUQsb0JBRlA7QUFBQSw2QkFJRSw4REFBQyxTQUFELG9CQUFlSSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBVUQ7O0tBWFFGLEc7QUFhVCwrREFBZUEsR0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmVjZmIxNjhkM2ExNjUwNTdmNDc4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IEV2YWx1YXRpb25zQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuZXhwb3J0IGRlZmF1bHQgRXZhbHVhdGlvbnNDb250ZXh0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IElzc3Vlc0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBkZWZhdWx0IElzc3Vlc0NvbnRleHQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEV2YWx1YXRpb25zQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dHMvRXZhbHVhdGlvbnNDb250ZXh0XCI7XHJcbmltcG9ydCBJc3N1ZXNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0cy9Jc3N1ZXNDb250ZXh0XCI7XHJcblxyXG5mdW5jdGlvbiBnZXRLbmFja0hlYWRlcnMoYXBwSWQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgXCJYLUtuYWNrLUFwcGxpY2F0aW9uLUlkXCI6IGFwcElkLFxyXG4gICAgXCJYLUtuYWNrLVJFU1QtQVBJLUtFWVwiOiBcImtuYWNrXCIsXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlU2NvcmVzKHNjb3Jlcykge1xyXG4gIHJldHVybiBzY29yZXMubWFwKChzY29yZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmFtZTogc2NvcmUuZmllbGRfNTM4LFxyXG4gICAgICBudW1iZXI6IHNjb3JlLmZpZWxkXzQ5MixcclxuICAgICAgZWZmb3J0OiBzY29yZS5maWVsZF81MzYsXHJcbiAgICAgIHZhbHVlOiBzY29yZS5maWVsZF81MzcsXHJcbiAgICAgIGR0c19idWlsZGVyX2hvdXJzOiBzY29yZS5maWVsZF80OTMsXHJcbiAgICAgIGR0c19wcm9kdWN0X2hvdXJzOiBzY29yZS5maWVsZF80OTQsXHJcbiAgICAgIGN1c3RvbWVyX2VmZm9ydF90b19pbXBsZW1lbnQ6IHNjb3JlLmZpZWxkXzQ5NSxcclxuICAgICAgbW9uZXRhcnlfY29zdHM6IHNjb3JlLmZpZWxkXzQ5NixcclxuICAgICAgc29sdmVzX211bHRpcGxlX3dvcmtncm91cHNfbmVlZHM6IHNjb3JlLmZpZWxkXzQ5NyxcclxuICAgICAgb2ZfdXNlcnNfaW1wYWN0ZWQ6IHNjb3JlLmZpZWxkXzQ5OCxcclxuICAgICAgZWZmaWNpZW5jeV9nYWluczogc2NvcmUuZmllbGRfNDk5LFxyXG4gICAgICBzZF8yM19hbGlnbm1lbnQ6IHNjb3JlLmZpZWxkXzUwMCxcclxuICAgICAgYXNtcF9hbGlnbm1lbnQ6IHNjb3JlLmZpZWxkXzUwMSxcclxuICAgICAgY29uZmlkZW5jZTogc2NvcmUuZmllbGRfNTEyLFxyXG4gICAgfTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEV2YWx1YXRpb25zQ29udGV4dFdyYXBwZXIocHJvcHMpIHtcclxuICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChJc3N1ZXNDb250ZXh0KTtcclxuICBjb25zdCBpc3N1ZXMgPSBjb250ZXh0Lmlzc3VlcztcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Njb3Jlcywgc2V0U2NvcmVzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHsgdXJsLCBhcHBJZCwgY2hpbGRyZW4gfSA9IHByb3BzO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2godXJsLCB7IGhlYWRlcnM6IGdldEtuYWNrSGVhZGVycyhhcHBJZCkgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oXHJcbiAgICAgICAgKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgc2V0SXNMb2FkZWQodHJ1ZSk7XHJcbiAgICAgICAgICBzZXREYXRhKHJlc3VsdC5yZWNvcmRzKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgc2V0SXNMb2FkZWQodHJ1ZSk7XHJcbiAgICAgICAgICBzZXRFcnJvcihlcnJvci50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgfSwgW3VybCwgYXBwSWRdKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGFsbFNjb3JlcyA9IGhhbmRsZVNjb3JlcyhkYXRhKTtcclxuICAgIGNvbnN0IHNjb3Jlc1dpdGhJc3N1ZXMgPSBhbGxTY29yZXMuZmlsdGVyKChzY29yZSkgPT4ge1xyXG4gICAgICBjb25zdCBudW1iZXIgPSBzY29yZS5udW1iZXI7XHJcbiAgICAgIC8vIGV4Y2x1ZGUgaXNzdWVzIHRoYXQgZG8gbm90IGhhdmUgYSBzY29yZVxyXG4gICAgICBjb25zdCBtYXRjaGVzSXNzdWVzID0gaXNzdWVzLmZpbHRlcihcclxuICAgICAgICAoaXNzdWUpID0+IHBhcnNlSW50KGlzc3VlLm51bWJlcikgPT09IG51bWJlclxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm4gbWF0Y2hlc0lzc3Vlcy5sZW5ndGggPiAwO1xyXG4gICAgfSk7XHJcbiAgICBzZXRTY29yZXMoc2NvcmVzV2l0aElzc3Vlcyk7XHJcbiAgfSwgW2lzc3VlcywgZGF0YV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEV2YWx1YXRpb25zQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17eyBzY29yZXM6IHNjb3JlcywgZXJyb3I6IGVycm9yLCBpc0xvYWRlZDogaXNMb2FkZWQgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9FdmFsdWF0aW9uc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJc3N1ZXNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0cy9Jc3N1ZXNDb250ZXh0XCI7XHJcblxyXG5jb25zdCBTVEFUVVNFUyA9IFtcIk5lZWRzIFNjb3BpbmdcIiwgXCJCYWNrbG9nXCIsIFwiSW4gUHJvZ3Jlc3NcIiwgXCJDb21wbGV0ZWRcIl07XHJcblxyXG5mdW5jdGlvbiBzb3J0QnlVcGRhdGVkRGF0ZShhLCBiKSB7XHJcbiAgcmV0dXJuIG5ldyBEYXRlKGIudXBkYXRlZF9hdCkgLSBuZXcgRGF0ZShhLnVwZGF0ZWRfYXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQcm9qZWN0SXNzdWVzKGRhdGEpIHtcclxuICByZXR1cm4gZGF0YS5maWx0ZXIoKGlzc3VlKSA9PiBpc3N1ZS5sYWJlbHMuaW5jbHVkZXMoXCJQcm9qZWN0IEluZGV4XCIpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UHJvZHVjdElzc3VlcyhkYXRhKSB7XHJcbiAgcmV0dXJuIGRhdGEuZmlsdGVyKChpc3N1ZSkgPT4gaXNzdWUubGFiZWxzLmluY2x1ZGVzKFwiUHJvZHVjdCBJbmRleFwiKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFVuaXF1ZVdvcmtncm91cHMoZGF0YSkge1xyXG4gIGNvbnN0IGFsbFdvcmtncm91cHNMYWJlbHMgPSBkYXRhXHJcbiAgICAubWFwKChpc3N1ZSkgPT4ge1xyXG4gICAgICByZXR1cm4gaXNzdWUud29ya2dyb3VwcztcclxuICAgIH0pXHJcbiAgICAvLyBpbiBhZGRpdGlvbiB0byBjb25jYXRlbmluZyBzdWItYXJyYXlzIG9mIHdvcmtncm91cHMsIGZsYXR0ZW5pbmcgZHJvcHMgYW55IGVtcHR5XHJcbiAgICAvLyBhcnJheXMgZnJvbSBpc3N1ZXMgd2l0aCBubyB3b3JrZ3JvdXAocylcclxuICAgIC5mbGF0KCk7XHJcblxyXG4gIHJldHVybiBbLi4ubmV3IFNldChhbGxXb3JrZ3JvdXBzTGFiZWxzKV0uc29ydCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUeXBlKGxhYmVscykge1xyXG4gIC8vIGlmIGFuIGlzc3VlIGhhcyBtb3JlIHRoYW4gb25lIGB0eXBlOiBgIGxhYmVsLCBhbGwgYnV0IG9uZSBhcmUgaWdub3JlZFxyXG4gIGNvbnN0IHR5cGVzID0gbGFiZWxzLmZpbHRlcigobGFiZWwpID0+IGxhYmVsLnN0YXJ0c1dpdGgoXCJUeXBlXCIpKTtcclxuICBjb25zdCB0eXBlc1BhcnNlZCA9IHR5cGVzLm1hcCgodHlwZSkgPT4gdHlwZS5zcGxpdChcIlR5cGU6IFwiKVsxXSk7XHJcbiAgcmV0dXJuIHR5cGVzUGFyc2VkWzBdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTdGF0dXMocGlwZWxpbmUpIHtcclxuICBzd2l0Y2ggKHBpcGVsaW5lKSB7XHJcbiAgICBjYXNlIFwiTmV3XCI6XHJcbiAgICAgIHJldHVybiBcIkJhY2tsb2dcIjtcclxuICAgIGNhc2UgXCJOZWVkcyBTY29waW5nXCI6XHJcbiAgICAgIHJldHVybiBcIk5lZWRzIFNjb3BpbmdcIjtcclxuICAgIGNhc2UgXCJJY2Vib3hcIjpcclxuICAgICAgcmV0dXJuIFwiQmFja2xvZ1wiO1xyXG4gICAgY2FzZSBcIkJhY2tsb2dcIjpcclxuICAgICAgcmV0dXJuIFwiQmFja2xvZ1wiO1xyXG4gICAgY2FzZSBcIm9uIGRlY2tcIjpcclxuICAgICAgcmV0dXJuIFwiQmFja2xvZ1wiO1xyXG4gICAgY2FzZSBcIkluIFByb2dyZXNzXCI6XHJcbiAgICAgIHJldHVybiBcIkluIFByb2dyZXNzXCI7XHJcbiAgICBjYXNlIFwiQmxvY2tlZFwiOlxyXG4gICAgICByZXR1cm4gXCJJbiBQcm9ncmVzc1wiO1xyXG4gICAgY2FzZSBcIk9uZ29pbmdcIjpcclxuICAgICAgcmV0dXJuIFwiSW4gUHJvZ3Jlc3NcIjtcclxuICAgIGNhc2UgXCJSZXZpZXcvUUFcIjpcclxuICAgICAgcmV0dXJuIFwiSW4gUHJvZ3Jlc3NcIjtcclxuICAgIGNhc2UgXCJSZWFkeSB0byBEZXBsb3lcIjpcclxuICAgICAgcmV0dXJuIFwiSW4gUHJvZ3Jlc3NcIjtcclxuICAgIGNhc2UgXCJDbG9zZWRcIjpcclxuICAgICAgcmV0dXJuIFwiQ29tcGxldGVkXCI7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyb3BUaXRsZVByZWZpeCh0aXRsZSkge1xyXG4gIHJldHVybiB0aXRsZS5yZXBsYWNlKFwiUHJvamVjdDogXCIsIFwiXCIpLnJlcGxhY2UoXCJQcm9kdWN0OiBcIiwgXCJcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZURhdGEoZGF0YSwgc2V0RGF0YSkge1xyXG4gIC8vIGRvIHNvbWUgZ2xvYmFsIHRpZHlpbmcgb2YgdGhlIGRhdGEuXHJcbiAgbGV0IGRhdGFIYW5kbGVkID0gZGF0YS5tYXAoKGlzc3VlKSA9PiB7XHJcbiAgICAvLyByZW1vdmUgaHRtbCBjb21tZW50cywgd2hpY2ggY29udGFpbiBjb250ZW50IHdlIGRvbid0IHdhbnQgdG8gc2hhcmVcclxuICAgIGlzc3VlLmJvZHkgPSBpc3N1ZS5ib2R5Py5yZXBsYWNlKC8oPCEtLSAuKz8gLS0+KS9nLCBcIlwiKTtcclxuICAgIGlzc3VlLmxhYmVscyA9IGlzc3VlLmxhYmVscyA/IGlzc3VlLmxhYmVscy5zcGxpdChcIiwgXCIpIDogW107XHJcbiAgICBpc3N1ZS53b3JrZ3JvdXBzID0gaXNzdWUud29ya2dyb3VwcyA/IGlzc3VlLndvcmtncm91cHMuc3BsaXQoXCIsIFwiKSA6IFtdO1xyXG4gICAgaXNzdWUudHlwZSA9IGdldFR5cGUoaXNzdWUubGFiZWxzKTtcclxuICAgIC8vIGFzc2lnbiBhIGdlbmVyYWxpemVkIFwic3RhdHVzXCIgYmFzZWQgb24gdGhlIGlzc3VlIHBpcGVsaW5lXHJcbiAgICBpc3N1ZS5zdGF0dXMgPSBnZXRTdGF0dXMoaXNzdWUucGlwZWxpbmUpO1xyXG4gICAgaXNzdWUudGl0bGUgPSBkcm9wVGl0bGVQcmVmaXgoaXNzdWUudGl0bGUpO1xyXG4gICAgaXNzdWUuaXNGZWF0dXJlZCA9IGlzc3VlLmxhYmVscy5pbmNsdWRlcyhcIkZlYXR1cmVkIFByb2plY3RcIik7XHJcbiAgICByZXR1cm4gaXNzdWU7XHJcbiAgfSk7XHJcbiAgc2V0RGF0YShkYXRhSGFuZGxlZC5zb3J0KHNvcnRCeVVwZGF0ZWREYXRlKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBJc3N1ZXNDb250ZXh0V3JhcHBlcihwcm9wcykge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt3b3JrZ3JvdXBzLCBzZXRXb3JrZ3JvdXBzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcHJvamVjdElzc3Vlcywgc2V0UHJvamVjdElzc3Vlc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Byb2R1Y3RJc3N1ZXMsIHNldFByb2R1Y3RJc3N1ZXNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IHsgdXJsLCBjaGlsZHJlbiB9ID0gcHJvcHM7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaCh1cmwpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKFxyXG4gICAgICAgIChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIHNldElzTG9hZGVkKHRydWUpO1xyXG4gICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcikge1xyXG4gICAgICAgICAgICAvLyBvbiBxdWVyeSBlcnJvciwgc29jcmF0YSByZXR1cm5zIHN0YXR1cyAyMDAgd2l0aCB7XCJlcnJvclwiOiB0cnVlLCBcIm1lc3NhZ2VcIjogPG1lc3NhZ2U+fSBpbiBib2R5XHJcbiAgICAgICAgICAgIHNldEVycm9yKHJlc3VsdC5tZXNzYWdlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaGFuZGxlRGF0YShyZXN1bHQsIHNldERhdGEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBzZXRJc0xvYWRlZCh0cnVlKTtcclxuICAgICAgICAgIHNldEVycm9yKGVycm9yLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICB9LCBbdXJsXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdElzc3VlcyA9IGdldFByb2plY3RJc3N1ZXMoZGF0YSk7XHJcbiAgICBjb25zdCBjdXJyZW50UHJvZHVjdGlzc3VlcyA9IGdldFByb2R1Y3RJc3N1ZXMoZGF0YSk7XHJcbiAgICBjb25zdCB1bmlxdWVXb3JrZ3JvdXAgPSBnZXRVbmlxdWVXb3JrZ3JvdXBzKGRhdGEpO1xyXG4gICAgc2V0UHJvamVjdElzc3VlcyhjdXJyZW50UHJvamVjdElzc3Vlcyk7XHJcbiAgICBzZXRQcm9kdWN0SXNzdWVzKGN1cnJlbnRQcm9kdWN0aXNzdWVzKTtcclxuICAgIHNldFdvcmtncm91cHModW5pcXVlV29ya2dyb3VwKTtcclxuICB9LCBbZGF0YV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPElzc3Vlc0NvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBpc3N1ZXM6IGRhdGEsXHJcbiAgICAgICAgZXJyb3I6IGVycm9yLFxyXG4gICAgICAgIGlzTG9hZGVkOiBpc0xvYWRlZCxcclxuICAgICAgICBwcm9qZWN0SXNzdWVzOiBwcm9qZWN0SXNzdWVzLFxyXG4gICAgICAgIHByb2R1Y3RJc3N1ZXM6IHByb2R1Y3RJc3N1ZXMsXHJcbiAgICAgICAgd29ya2dyb3Vwczogd29ya2dyb3VwcyxcclxuICAgICAgICBzdGF0dXNlczogU1RBVFVTRVMsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvSXNzdWVzQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IElzc3Vlc0NvbnRleHRXcmFwcGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvd3JhcHBlcnMvSXNzdWVzQ29udGV4dFdyYXBwZXJcIjtcclxuaW1wb3J0IHsgRXZhbHVhdGlvbnNDb250ZXh0V3JhcHBlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL3dyYXBwZXJzL0V2YWx1YXRpb25zQ29udGV4dFdyYXBwZXJcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2N1c3RvbS5zY3NzXCI7XHJcblxyXG5jb25zdCBJU1NVRVNfRU5EUE9JTlQgPVxyXG4gIFwiaHR0cHM6Ly9kYXRhLmF1c3RpbnRleGFzLmdvdi9yZXNvdXJjZS9yendnLWZ5djguanNvbj8kbGltaXQ9MTAwMDBcIjtcclxuXHJcbmNvbnN0IEVWQUxVQVRJT05TX0VORFBPSU5UID1cclxuICBcImh0dHBzOi8vYXBpLmtuYWNrLmNvbS92MS9wYWdlcy9zY2VuZV8xNjIvdmlld3Mvdmlld18zMTEvcmVjb3Jkc1wiO1xyXG5cclxuY29uc3QgRVZBTFNfQVBQX0lEID0gXCI1OTVkMDBlYmQzMTVjYzRjYjk4ZGFmZjRcIjtcclxuXHJcbmZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPElzc3Vlc0NvbnRleHRXcmFwcGVyIHVybD17SVNTVUVTX0VORFBPSU5UfT5cclxuICAgICAgPEV2YWx1YXRpb25zQ29udGV4dFdyYXBwZXJcclxuICAgICAgICBhcHBJZD17RVZBTFNfQVBQX0lEfVxyXG4gICAgICAgIHVybD17RVZBTFVBVElPTlNfRU5EUE9JTlR9XHJcbiAgICAgID5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvRXZhbHVhdGlvbnNDb250ZXh0V3JhcHBlcj5cclxuICAgIDwvSXNzdWVzQ29udGV4dFdyYXBwZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9