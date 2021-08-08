(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/contexts/EvaluationsContext.js":
/*!***************************************************!*\
  !*** ./components/contexts/EvaluationsContext.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const EvaluationsContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext();
/* harmony default export */ __webpack_exports__["default"] = (EvaluationsContext);

/***/ }),

/***/ "./components/contexts/IssuesContext.js":
/*!**********************************************!*\
  !*** ./components/contexts/IssuesContext.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const IssuesContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext();
/* harmony default export */ __webpack_exports__["default"] = (IssuesContext);

/***/ }),

/***/ "./components/wrappers/EvaluationsContextWrapper.js":
/*!**********************************************************!*\
  !*** ./components/wrappers/EvaluationsContextWrapper.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EvaluationsContextWrapper": function() { return /* binding */ EvaluationsContextWrapper; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_EvaluationsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/EvaluationsContext */ "./components/contexts/EvaluationsContext.js");
/* harmony import */ var _contexts_IssuesContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/IssuesContext */ "./components/contexts/IssuesContext.js");

var _jsxFileName = "C:\\Users\\Administrator\\Documents\\Coding\\Austin\\atd-product\\components\\wrappers\\EvaluationsContextWrapper.js";




function getKnackHeaders(appId) {
  return {
    "X-Knack-Application-Id": appId,
    "X-Knack-REST-API-KEY": "knack"
  };
}

function handleScores(scores) {
  return scores.map(score => {
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
  const context = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(_contexts_IssuesContext__WEBPACK_IMPORTED_MODULE_3__.default);
  const issues = context.issues;
  const [data, setData] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
  const [scores, setScores] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
  const [error, setError] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);
  const [isLoaded, setIsLoaded] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const {
    url,
    appId,
    children
  } = props;
  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    fetch(url, {
      headers: getKnackHeaders(appId)
    }).then(res => res.json()).then(result => {
      setIsLoaded(true);
      setData(result.records);
    }, error => {
      setIsLoaded(true);
      setError(error.toString());
    });
  }, [url, appId]);
  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    const allScores = handleScores(data);
    const scoresWithIssues = allScores.filter(score => {
      const number = score.number; // exclude issues that do not have a score

      const matchesIssues = issues.filter(issue => parseInt(issue.number) === number);
      return matchesIssues.length > 0;
    });
    setScores(scoresWithIssues);
  }, [issues, data]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_EvaluationsContext__WEBPACK_IMPORTED_MODULE_2__.default.Provider, {
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

/***/ }),

/***/ "./components/wrappers/IssuesContextWrapper.js":
/*!*****************************************************!*\
  !*** ./components/wrappers/IssuesContextWrapper.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IssuesContextWrapper": function() { return /* binding */ IssuesContextWrapper; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_IssuesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/IssuesContext */ "./components/contexts/IssuesContext.js");

var _jsxFileName = "C:\\Users\\Administrator\\Documents\\Coding\\Austin\\atd-product\\components\\wrappers\\IssuesContextWrapper.js";


const STATUSES = ["Needs Scoping", "Backlog", "In Progress", "Completed"];

function sortByUpdatedDate(a, b) {
  return new Date(b.updated_at) - new Date(a.updated_at);
}

function getProjectIssues(data) {
  return data.filter(issue => issue.labels.includes("Project Index"));
}

function getProductIssues(data) {
  return data.filter(issue => issue.labels.includes("Product Index"));
}

function getUniqueWorkgroups(data) {
  const allWorkgroupsLabels = data.map(issue => {
    return issue.workgroups;
  }) // in addition to concatening sub-arrays of workgroups, flattening drops any empty
  // arrays from issues with no workgroup(s)
  .flat();
  return [...new Set(allWorkgroupsLabels)].sort();
}

function getType(labels) {
  // if an issue has more than one `type: ` label, all but one are ignored
  const types = labels.filter(label => label.startsWith("Type"));
  const typesParsed = types.map(type => type.split("Type: ")[1]);
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
  let dataHandled = data.map(issue => {
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
  const [data, setData] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
  const [error, setError] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);
  const [isLoaded, setIsLoaded] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const [workgroups, setWorkgroups] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
  const [projectIssues, setProjectIssues] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
  const [productIssues, setProductIssues] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
  const {
    url,
    children
  } = props;
  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    fetch(url).then(res => res.json()).then(result => {
      setIsLoaded(true);

      if (result.error) {
        // on query error, socrata returns status 200 with {"error": true, "message": <message>} in body
        setError(result.message.toString());
      } else {
        handleData(result, setData);
      }
    }, error => {
      setIsLoaded(true);
      setError(error.toString());
    });
  }, [url]);
  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    const currentProjectIssues = getProjectIssues(data);
    const currentProductissues = getProductIssues(data);
    const uniqueWorkgroup = getUniqueWorkgroups(data);
    setProjectIssues(currentProjectIssues);
    setProductIssues(currentProductissues);
    setWorkgroups(uniqueWorkgroup);
  }, [data]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_IssuesContext__WEBPACK_IMPORTED_MODULE_2__.default.Provider, {
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

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_wrappers_IssuesContextWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/wrappers/IssuesContextWrapper */ "./components/wrappers/IssuesContextWrapper.js");
/* harmony import */ var _components_wrappers_EvaluationsContextWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/wrappers/EvaluationsContextWrapper */ "./components/wrappers/EvaluationsContextWrapper.js");
/* harmony import */ var _styles_custom_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/custom.scss */ "./styles/custom.scss");
/* harmony import */ var _styles_custom_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_custom_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Administrator\\Documents\\Coding\\Austin\\atd-product\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const ISSUES_ENDPOINT = "https://data.austintexas.gov/resource/rzwg-fyv8.json?$limit=10000";
const EVALUATIONS_ENDPOINT = "https://api.knack.com/v1/pages/scene_162/views/view_311/records";
const EVALS_APP_ID = "595d00ebd315cc4cb98daff4";

function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_wrappers_IssuesContextWrapper__WEBPACK_IMPORTED_MODULE_1__.IssuesContextWrapper, {
    url: ISSUES_ENDPOINT,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_wrappers_EvaluationsContextWrapper__WEBPACK_IMPORTED_MODULE_2__.EvaluationsContextWrapper, {
      appId: EVALS_APP_ID,
      url: EVALUATIONS_ENDPOINT,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
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

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./styles/custom.scss":
/*!****************************!*\
  !*** ./styles/custom.scss ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdGQtcHJvZHVjdC8uL2NvbXBvbmVudHMvY29udGV4dHMvRXZhbHVhdGlvbnNDb250ZXh0LmpzIiwid2VicGFjazovL2F0ZC1wcm9kdWN0Ly4vY29tcG9uZW50cy9jb250ZXh0cy9Jc3N1ZXNDb250ZXh0LmpzIiwid2VicGFjazovL2F0ZC1wcm9kdWN0Ly4vY29tcG9uZW50cy93cmFwcGVycy9FdmFsdWF0aW9uc0NvbnRleHRXcmFwcGVyLmpzIiwid2VicGFjazovL2F0ZC1wcm9kdWN0Ly4vY29tcG9uZW50cy93cmFwcGVycy9Jc3N1ZXNDb250ZXh0V3JhcHBlci5qcyIsIndlYnBhY2s6Ly9hdGQtcHJvZHVjdC8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vYXRkLXByb2R1Y3QvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2F0ZC1wcm9kdWN0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiRXZhbHVhdGlvbnNDb250ZXh0IiwiUmVhY3QiLCJJc3N1ZXNDb250ZXh0IiwiZ2V0S25hY2tIZWFkZXJzIiwiYXBwSWQiLCJoYW5kbGVTY29yZXMiLCJzY29yZXMiLCJtYXAiLCJzY29yZSIsIm5hbWUiLCJmaWVsZF81MzgiLCJudW1iZXIiLCJmaWVsZF80OTIiLCJlZmZvcnQiLCJmaWVsZF81MzYiLCJ2YWx1ZSIsImZpZWxkXzUzNyIsImR0c19idWlsZGVyX2hvdXJzIiwiZmllbGRfNDkzIiwiZHRzX3Byb2R1Y3RfaG91cnMiLCJmaWVsZF80OTQiLCJjdXN0b21lcl9lZmZvcnRfdG9faW1wbGVtZW50IiwiZmllbGRfNDk1IiwibW9uZXRhcnlfY29zdHMiLCJmaWVsZF80OTYiLCJzb2x2ZXNfbXVsdGlwbGVfd29ya2dyb3Vwc19uZWVkcyIsImZpZWxkXzQ5NyIsIm9mX3VzZXJzX2ltcGFjdGVkIiwiZmllbGRfNDk4IiwiZWZmaWNpZW5jeV9nYWlucyIsImZpZWxkXzQ5OSIsInNkXzIzX2FsaWdubWVudCIsImZpZWxkXzUwMCIsImFzbXBfYWxpZ25tZW50IiwiZmllbGRfNTAxIiwiY29uZmlkZW5jZSIsImZpZWxkXzUxMiIsIkV2YWx1YXRpb25zQ29udGV4dFdyYXBwZXIiLCJwcm9wcyIsImNvbnRleHQiLCJpc3N1ZXMiLCJkYXRhIiwic2V0RGF0YSIsInNldFNjb3JlcyIsImVycm9yIiwic2V0RXJyb3IiLCJpc0xvYWRlZCIsInNldElzTG9hZGVkIiwidXJsIiwiY2hpbGRyZW4iLCJmZXRjaCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwianNvbiIsInJlc3VsdCIsInJlY29yZHMiLCJ0b1N0cmluZyIsImFsbFNjb3JlcyIsInNjb3Jlc1dpdGhJc3N1ZXMiLCJmaWx0ZXIiLCJtYXRjaGVzSXNzdWVzIiwiaXNzdWUiLCJwYXJzZUludCIsImxlbmd0aCIsIlNUQVRVU0VTIiwic29ydEJ5VXBkYXRlZERhdGUiLCJhIiwiYiIsIkRhdGUiLCJ1cGRhdGVkX2F0IiwiZ2V0UHJvamVjdElzc3VlcyIsImxhYmVscyIsImluY2x1ZGVzIiwiZ2V0UHJvZHVjdElzc3VlcyIsImdldFVuaXF1ZVdvcmtncm91cHMiLCJhbGxXb3JrZ3JvdXBzTGFiZWxzIiwid29ya2dyb3VwcyIsImZsYXQiLCJTZXQiLCJzb3J0IiwiZ2V0VHlwZSIsInR5cGVzIiwibGFiZWwiLCJzdGFydHNXaXRoIiwidHlwZXNQYXJzZWQiLCJ0eXBlIiwic3BsaXQiLCJnZXRTdGF0dXMiLCJwaXBlbGluZSIsImRyb3BUaXRsZVByZWZpeCIsInRpdGxlIiwicmVwbGFjZSIsImhhbmRsZURhdGEiLCJkYXRhSGFuZGxlZCIsImJvZHkiLCJzdGF0dXMiLCJpc0ZlYXR1cmVkIiwiSXNzdWVzQ29udGV4dFdyYXBwZXIiLCJzZXRXb3JrZ3JvdXBzIiwicHJvamVjdElzc3VlcyIsInNldFByb2plY3RJc3N1ZXMiLCJwcm9kdWN0SXNzdWVzIiwic2V0UHJvZHVjdElzc3VlcyIsIm1lc3NhZ2UiLCJjdXJyZW50UHJvamVjdElzc3VlcyIsImN1cnJlbnRQcm9kdWN0aXNzdWVzIiwidW5pcXVlV29ya2dyb3VwIiwic3RhdHVzZXMiLCJJU1NVRVNfRU5EUE9JTlQiLCJFVkFMVUFUSU9OU19FTkRQT0lOVCIsIkVWQUxTX0FQUF9JRCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsTUFBTUEsa0JBQWtCLGdCQUFHQywwREFBQSxFQUEzQjtBQUNBLCtEQUFlRCxrQkFBZixFOzs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0EsTUFBTUUsYUFBYSxnQkFBR0QsMERBQUEsRUFBdEI7QUFDQSwrREFBZUMsYUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQyxlQUFULENBQXlCQyxLQUF6QixFQUFnQztBQUM5QixTQUFPO0FBQ0wsOEJBQTBCQSxLQURyQjtBQUVMLDRCQUF3QjtBQUZuQixHQUFQO0FBSUQ7O0FBRUQsU0FBU0MsWUFBVCxDQUFzQkMsTUFBdEIsRUFBOEI7QUFDNUIsU0FBT0EsTUFBTSxDQUFDQyxHQUFQLENBQVlDLEtBQUQsSUFBVztBQUMzQixXQUFPO0FBQ0xDLFVBQUksRUFBRUQsS0FBSyxDQUFDRSxTQURQO0FBRUxDLFlBQU0sRUFBRUgsS0FBSyxDQUFDSSxTQUZUO0FBR0xDLFlBQU0sRUFBRUwsS0FBSyxDQUFDTSxTQUhUO0FBSUxDLFdBQUssRUFBRVAsS0FBSyxDQUFDUSxTQUpSO0FBS0xDLHVCQUFpQixFQUFFVCxLQUFLLENBQUNVLFNBTHBCO0FBTUxDLHVCQUFpQixFQUFFWCxLQUFLLENBQUNZLFNBTnBCO0FBT0xDLGtDQUE0QixFQUFFYixLQUFLLENBQUNjLFNBUC9CO0FBUUxDLG9CQUFjLEVBQUVmLEtBQUssQ0FBQ2dCLFNBUmpCO0FBU0xDLHNDQUFnQyxFQUFFakIsS0FBSyxDQUFDa0IsU0FUbkM7QUFVTEMsdUJBQWlCLEVBQUVuQixLQUFLLENBQUNvQixTQVZwQjtBQVdMQyxzQkFBZ0IsRUFBRXJCLEtBQUssQ0FBQ3NCLFNBWG5C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TCtCLGNBQVEsRUFBRTNDO0FBUEwsS0FEVDtBQUFBLGNBV0doQjtBQVhIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWVELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNJRDtBQUNBO0FBQ0E7QUFFQSxNQUFNNEQsZUFBZSxHQUNuQixtRUFERjtBQUdBLE1BQU1DLG9CQUFvQixHQUN4QixpRUFERjtBQUdBLE1BQU1DLFlBQVksR0FBRywwQkFBckI7O0FBRUEsU0FBU0MsR0FBVCxDQUFhO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFiLEVBQXVDO0FBQ3JDLHNCQUNFLDhEQUFDLDJGQUFEO0FBQXNCLE9BQUcsRUFBRUwsZUFBM0I7QUFBQSwyQkFDRSw4REFBQyxxR0FBRDtBQUNFLFdBQUssRUFBRUUsWUFEVDtBQUVFLFNBQUcsRUFBRUQsb0JBRlA7QUFBQSw2QkFJRSw4REFBQyxTQUFELG9CQUFlSSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBVUQ7O0FBRUQsK0RBQWVGLEdBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IEV2YWx1YXRpb25zQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuZXhwb3J0IGRlZmF1bHQgRXZhbHVhdGlvbnNDb250ZXh0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IElzc3Vlc0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBkZWZhdWx0IElzc3Vlc0NvbnRleHQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEV2YWx1YXRpb25zQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dHMvRXZhbHVhdGlvbnNDb250ZXh0XCI7XHJcbmltcG9ydCBJc3N1ZXNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0cy9Jc3N1ZXNDb250ZXh0XCI7XHJcblxyXG5mdW5jdGlvbiBnZXRLbmFja0hlYWRlcnMoYXBwSWQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgXCJYLUtuYWNrLUFwcGxpY2F0aW9uLUlkXCI6IGFwcElkLFxyXG4gICAgXCJYLUtuYWNrLVJFU1QtQVBJLUtFWVwiOiBcImtuYWNrXCIsXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlU2NvcmVzKHNjb3Jlcykge1xyXG4gIHJldHVybiBzY29yZXMubWFwKChzY29yZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmFtZTogc2NvcmUuZmllbGRfNTM4LFxyXG4gICAgICBudW1iZXI6IHNjb3JlLmZpZWxkXzQ5MixcclxuICAgICAgZWZmb3J0OiBzY29yZS5maWVsZF81MzYsXHJcbiAgICAgIHZhbHVlOiBzY29yZS5maWVsZF81MzcsXHJcbiAgICAgIGR0c19idWlsZGVyX2hvdXJzOiBzY29yZS5maWVsZF80OTMsXHJcbiAgICAgIGR0c19wcm9kdWN0X2hvdXJzOiBzY29yZS5maWVsZF80OTQsXHJcbiAgICAgIGN1c3RvbWVyX2VmZm9ydF90b19pbXBsZW1lbnQ6IHNjb3JlLmZpZWxkXzQ5NSxcclxuICAgICAgbW9uZXRhcnlfY29zdHM6IHNjb3JlLmZpZWxkXzQ5NixcclxuICAgICAgc29sdmVzX211bHRpcGxlX3dvcmtncm91cHNfbmVlZHM6IHNjb3JlLmZpZWxkXzQ5NyxcclxuICAgICAgb2ZfdXNlcnNfaW1wYWN0ZWQ6IHNjb3JlLmZpZWxkXzQ5OCxcclxuICAgICAgZWZmaWNpZW5jeV9nYWluczogc2NvcmUuZmllbGRfNDk5LFxyXG4gICAgICBzZF8yM19hbGlnbm1lbnQ6IHNjb3JlLmZpZWxkXzUwMCxcclxuICAgICAgYXNtcF9hbGlnbm1lbnQ6IHNjb3JlLmZpZWxkXzUwMSxcclxuICAgICAgY29uZmlkZW5jZTogc2NvcmUuZmllbGRfNTEyLFxyXG4gICAgfTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEV2YWx1YXRpb25zQ29udGV4dFdyYXBwZXIocHJvcHMpIHtcclxuICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChJc3N1ZXNDb250ZXh0KTtcclxuICBjb25zdCBpc3N1ZXMgPSBjb250ZXh0Lmlzc3VlcztcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Njb3Jlcywgc2V0U2NvcmVzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHsgdXJsLCBhcHBJZCwgY2hpbGRyZW4gfSA9IHByb3BzO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2godXJsLCB7IGhlYWRlcnM6IGdldEtuYWNrSGVhZGVycyhhcHBJZCkgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oXHJcbiAgICAgICAgKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgc2V0SXNMb2FkZWQodHJ1ZSk7XHJcbiAgICAgICAgICBzZXREYXRhKHJlc3VsdC5yZWNvcmRzKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgc2V0SXNMb2FkZWQodHJ1ZSk7XHJcbiAgICAgICAgICBzZXRFcnJvcihlcnJvci50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgfSwgW3VybCwgYXBwSWRdKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGFsbFNjb3JlcyA9IGhhbmRsZVNjb3JlcyhkYXRhKTtcclxuICAgIGNvbnN0IHNjb3Jlc1dpdGhJc3N1ZXMgPSBhbGxTY29yZXMuZmlsdGVyKChzY29yZSkgPT4ge1xyXG4gICAgICBjb25zdCBudW1iZXIgPSBzY29yZS5udW1iZXI7XHJcbiAgICAgIC8vIGV4Y2x1ZGUgaXNzdWVzIHRoYXQgZG8gbm90IGhhdmUgYSBzY29yZVxyXG4gICAgICBjb25zdCBtYXRjaGVzSXNzdWVzID0gaXNzdWVzLmZpbHRlcihcclxuICAgICAgICAoaXNzdWUpID0+IHBhcnNlSW50KGlzc3VlLm51bWJlcikgPT09IG51bWJlclxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm4gbWF0Y2hlc0lzc3Vlcy5sZW5ndGggPiAwO1xyXG4gICAgfSk7XHJcbiAgICBzZXRTY29yZXMoc2NvcmVzV2l0aElzc3Vlcyk7XHJcbiAgfSwgW2lzc3VlcywgZGF0YV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEV2YWx1YXRpb25zQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17eyBzY29yZXM6IHNjb3JlcywgZXJyb3I6IGVycm9yLCBpc0xvYWRlZDogaXNMb2FkZWQgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9FdmFsdWF0aW9uc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJc3N1ZXNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0cy9Jc3N1ZXNDb250ZXh0XCI7XHJcblxyXG5jb25zdCBTVEFUVVNFUyA9IFtcIk5lZWRzIFNjb3BpbmdcIiwgXCJCYWNrbG9nXCIsIFwiSW4gUHJvZ3Jlc3NcIiwgXCJDb21wbGV0ZWRcIl07XHJcblxyXG5mdW5jdGlvbiBzb3J0QnlVcGRhdGVkRGF0ZShhLCBiKSB7XHJcbiAgcmV0dXJuIG5ldyBEYXRlKGIudXBkYXRlZF9hdCkgLSBuZXcgRGF0ZShhLnVwZGF0ZWRfYXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQcm9qZWN0SXNzdWVzKGRhdGEpIHtcclxuICByZXR1cm4gZGF0YS5maWx0ZXIoKGlzc3VlKSA9PiBpc3N1ZS5sYWJlbHMuaW5jbHVkZXMoXCJQcm9qZWN0IEluZGV4XCIpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UHJvZHVjdElzc3VlcyhkYXRhKSB7XHJcbiAgcmV0dXJuIGRhdGEuZmlsdGVyKChpc3N1ZSkgPT4gaXNzdWUubGFiZWxzLmluY2x1ZGVzKFwiUHJvZHVjdCBJbmRleFwiKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFVuaXF1ZVdvcmtncm91cHMoZGF0YSkge1xyXG4gIGNvbnN0IGFsbFdvcmtncm91cHNMYWJlbHMgPSBkYXRhXHJcbiAgICAubWFwKChpc3N1ZSkgPT4ge1xyXG4gICAgICByZXR1cm4gaXNzdWUud29ya2dyb3VwcztcclxuICAgIH0pXHJcbiAgICAvLyBpbiBhZGRpdGlvbiB0byBjb25jYXRlbmluZyBzdWItYXJyYXlzIG9mIHdvcmtncm91cHMsIGZsYXR0ZW5pbmcgZHJvcHMgYW55IGVtcHR5XHJcbiAgICAvLyBhcnJheXMgZnJvbSBpc3N1ZXMgd2l0aCBubyB3b3JrZ3JvdXAocylcclxuICAgIC5mbGF0KCk7XHJcblxyXG4gIHJldHVybiBbLi4ubmV3IFNldChhbGxXb3JrZ3JvdXBzTGFiZWxzKV0uc29ydCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUeXBlKGxhYmVscykge1xyXG4gIC8vIGlmIGFuIGlzc3VlIGhhcyBtb3JlIHRoYW4gb25lIGB0eXBlOiBgIGxhYmVsLCBhbGwgYnV0IG9uZSBhcmUgaWdub3JlZFxyXG4gIGNvbnN0IHR5cGVzID0gbGFiZWxzLmZpbHRlcigobGFiZWwpID0+IGxhYmVsLnN0YXJ0c1dpdGgoXCJUeXBlXCIpKTtcclxuICBjb25zdCB0eXBlc1BhcnNlZCA9IHR5cGVzLm1hcCgodHlwZSkgPT4gdHlwZS5zcGxpdChcIlR5cGU6IFwiKVsxXSk7XHJcbiAgcmV0dXJuIHR5cGVzUGFyc2VkWzBdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTdGF0dXMocGlwZWxpbmUpIHtcclxuICBzd2l0Y2ggKHBpcGVsaW5lKSB7XHJcbiAgICBjYXNlIFwiTmV3XCI6XHJcbiAgICAgIHJldHVybiBcIkJhY2tsb2dcIjtcclxuICAgIGNhc2UgXCJOZWVkcyBTY29waW5nXCI6XHJcbiAgICAgIHJldHVybiBcIk5lZWRzIFNjb3BpbmdcIjtcclxuICAgIGNhc2UgXCJJY2Vib3hcIjpcclxuICAgICAgcmV0dXJuIFwiQmFja2xvZ1wiO1xyXG4gICAgY2FzZSBcIkJhY2tsb2dcIjpcclxuICAgICAgcmV0dXJuIFwiQmFja2xvZ1wiO1xyXG4gICAgY2FzZSBcIm9uIGRlY2tcIjpcclxuICAgICAgcmV0dXJuIFwiQmFja2xvZ1wiO1xyXG4gICAgY2FzZSBcIkluIFByb2dyZXNzXCI6XHJcbiAgICAgIHJldHVybiBcIkluIFByb2dyZXNzXCI7XHJcbiAgICBjYXNlIFwiQmxvY2tlZFwiOlxyXG4gICAgICByZXR1cm4gXCJJbiBQcm9ncmVzc1wiO1xyXG4gICAgY2FzZSBcIk9uZ29pbmdcIjpcclxuICAgICAgcmV0dXJuIFwiSW4gUHJvZ3Jlc3NcIjtcclxuICAgIGNhc2UgXCJSZXZpZXcvUUFcIjpcclxuICAgICAgcmV0dXJuIFwiSW4gUHJvZ3Jlc3NcIjtcclxuICAgIGNhc2UgXCJSZWFkeSB0byBEZXBsb3lcIjpcclxuICAgICAgcmV0dXJuIFwiSW4gUHJvZ3Jlc3NcIjtcclxuICAgIGNhc2UgXCJDbG9zZWRcIjpcclxuICAgICAgcmV0dXJuIFwiQ29tcGxldGVkXCI7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyb3BUaXRsZVByZWZpeCh0aXRsZSkge1xyXG4gIHJldHVybiB0aXRsZS5yZXBsYWNlKFwiUHJvamVjdDogXCIsIFwiXCIpLnJlcGxhY2UoXCJQcm9kdWN0OiBcIiwgXCJcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZURhdGEoZGF0YSwgc2V0RGF0YSkge1xyXG4gIC8vIGRvIHNvbWUgZ2xvYmFsIHRpZHlpbmcgb2YgdGhlIGRhdGEuXHJcbiAgbGV0IGRhdGFIYW5kbGVkID0gZGF0YS5tYXAoKGlzc3VlKSA9PiB7XHJcbiAgICAvLyByZW1vdmUgaHRtbCBjb21tZW50cywgd2hpY2ggY29udGFpbiBjb250ZW50IHdlIGRvbid0IHdhbnQgdG8gc2hhcmVcclxuICAgIGlzc3VlLmJvZHkgPSBpc3N1ZS5ib2R5Py5yZXBsYWNlKC8oPCEtLSAuKz8gLS0+KS9nLCBcIlwiKTtcclxuICAgIGlzc3VlLmxhYmVscyA9IGlzc3VlLmxhYmVscyA/IGlzc3VlLmxhYmVscy5zcGxpdChcIiwgXCIpIDogW107XHJcbiAgICBpc3N1ZS53b3JrZ3JvdXBzID0gaXNzdWUud29ya2dyb3VwcyA/IGlzc3VlLndvcmtncm91cHMuc3BsaXQoXCIsIFwiKSA6IFtdO1xyXG4gICAgaXNzdWUudHlwZSA9IGdldFR5cGUoaXNzdWUubGFiZWxzKTtcclxuICAgIC8vIGFzc2lnbiBhIGdlbmVyYWxpemVkIFwic3RhdHVzXCIgYmFzZWQgb24gdGhlIGlzc3VlIHBpcGVsaW5lXHJcbiAgICBpc3N1ZS5zdGF0dXMgPSBnZXRTdGF0dXMoaXNzdWUucGlwZWxpbmUpO1xyXG4gICAgaXNzdWUudGl0bGUgPSBkcm9wVGl0bGVQcmVmaXgoaXNzdWUudGl0bGUpO1xyXG4gICAgaXNzdWUuaXNGZWF0dXJlZCA9IGlzc3VlLmxhYmVscy5pbmNsdWRlcyhcIkZlYXR1cmVkIFByb2plY3RcIik7XHJcbiAgICByZXR1cm4gaXNzdWU7XHJcbiAgfSk7XHJcbiAgc2V0RGF0YShkYXRhSGFuZGxlZC5zb3J0KHNvcnRCeVVwZGF0ZWREYXRlKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBJc3N1ZXNDb250ZXh0V3JhcHBlcihwcm9wcykge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt3b3JrZ3JvdXBzLCBzZXRXb3JrZ3JvdXBzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcHJvamVjdElzc3Vlcywgc2V0UHJvamVjdElzc3Vlc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Byb2R1Y3RJc3N1ZXMsIHNldFByb2R1Y3RJc3N1ZXNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IHsgdXJsLCBjaGlsZHJlbiB9ID0gcHJvcHM7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaCh1cmwpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKFxyXG4gICAgICAgIChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIHNldElzTG9hZGVkKHRydWUpO1xyXG4gICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcikge1xyXG4gICAgICAgICAgICAvLyBvbiBxdWVyeSBlcnJvciwgc29jcmF0YSByZXR1cm5zIHN0YXR1cyAyMDAgd2l0aCB7XCJlcnJvclwiOiB0cnVlLCBcIm1lc3NhZ2VcIjogPG1lc3NhZ2U+fSBpbiBib2R5XHJcbiAgICAgICAgICAgIHNldEVycm9yKHJlc3VsdC5tZXNzYWdlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaGFuZGxlRGF0YShyZXN1bHQsIHNldERhdGEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBzZXRJc0xvYWRlZCh0cnVlKTtcclxuICAgICAgICAgIHNldEVycm9yKGVycm9yLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICB9LCBbdXJsXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdElzc3VlcyA9IGdldFByb2plY3RJc3N1ZXMoZGF0YSk7XHJcbiAgICBjb25zdCBjdXJyZW50UHJvZHVjdGlzc3VlcyA9IGdldFByb2R1Y3RJc3N1ZXMoZGF0YSk7XHJcbiAgICBjb25zdCB1bmlxdWVXb3JrZ3JvdXAgPSBnZXRVbmlxdWVXb3JrZ3JvdXBzKGRhdGEpO1xyXG4gICAgc2V0UHJvamVjdElzc3VlcyhjdXJyZW50UHJvamVjdElzc3Vlcyk7XHJcbiAgICBzZXRQcm9kdWN0SXNzdWVzKGN1cnJlbnRQcm9kdWN0aXNzdWVzKTtcclxuICAgIHNldFdvcmtncm91cHModW5pcXVlV29ya2dyb3VwKTtcclxuICB9LCBbZGF0YV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPElzc3Vlc0NvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBpc3N1ZXM6IGRhdGEsXHJcbiAgICAgICAgZXJyb3I6IGVycm9yLFxyXG4gICAgICAgIGlzTG9hZGVkOiBpc0xvYWRlZCxcclxuICAgICAgICBwcm9qZWN0SXNzdWVzOiBwcm9qZWN0SXNzdWVzLFxyXG4gICAgICAgIHByb2R1Y3RJc3N1ZXM6IHByb2R1Y3RJc3N1ZXMsXHJcbiAgICAgICAgd29ya2dyb3Vwczogd29ya2dyb3VwcyxcclxuICAgICAgICBzdGF0dXNlczogU1RBVFVTRVMsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvSXNzdWVzQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IElzc3Vlc0NvbnRleHRXcmFwcGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvd3JhcHBlcnMvSXNzdWVzQ29udGV4dFdyYXBwZXJcIjtcclxuaW1wb3J0IHsgRXZhbHVhdGlvbnNDb250ZXh0V3JhcHBlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL3dyYXBwZXJzL0V2YWx1YXRpb25zQ29udGV4dFdyYXBwZXJcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2N1c3RvbS5zY3NzXCI7XHJcblxyXG5jb25zdCBJU1NVRVNfRU5EUE9JTlQgPVxyXG4gIFwiaHR0cHM6Ly9kYXRhLmF1c3RpbnRleGFzLmdvdi9yZXNvdXJjZS9yendnLWZ5djguanNvbj8kbGltaXQ9MTAwMDBcIjtcclxuXHJcbmNvbnN0IEVWQUxVQVRJT05TX0VORFBPSU5UID1cclxuICBcImh0dHBzOi8vYXBpLmtuYWNrLmNvbS92MS9wYWdlcy9zY2VuZV8xNjIvdmlld3Mvdmlld18zMTEvcmVjb3Jkc1wiO1xyXG5cclxuY29uc3QgRVZBTFNfQVBQX0lEID0gXCI1OTVkMDBlYmQzMTVjYzRjYjk4ZGFmZjRcIjtcclxuXHJcbmZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPElzc3Vlc0NvbnRleHRXcmFwcGVyIHVybD17SVNTVUVTX0VORFBPSU5UfT5cclxuICAgICAgPEV2YWx1YXRpb25zQ29udGV4dFdyYXBwZXJcclxuICAgICAgICBhcHBJZD17RVZBTFNfQVBQX0lEfVxyXG4gICAgICAgIHVybD17RVZBTFVBVElPTlNfRU5EUE9JTlR9XHJcbiAgICAgID5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvRXZhbHVhdGlvbnNDb250ZXh0V3JhcHBlcj5cclxuICAgIDwvSXNzdWVzQ29udGV4dFdyYXBwZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9