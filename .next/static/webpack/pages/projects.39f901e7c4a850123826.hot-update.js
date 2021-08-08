self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./components/projectsView/ProjectsList.js":
/*!*************************************************!*\
  !*** ./components/projectsView/ProjectsList.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ProjectsList; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Administrator_Documents_Coding_Austin_atd_product_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Alert */ "./node_modules/react-bootstrap/esm/Alert.js");
/* harmony import */ var _wrappers_SpinnerWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../wrappers/SpinnerWrapper */ "./components/wrappers/SpinnerWrapper.js");
/* harmony import */ var _contexts_EvaluationsContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/EvaluationsContext */ "./components/contexts/EvaluationsContext.js");
/* harmony import */ var _shared_IndexIssueListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/IndexIssueListItem */ "./components/shared/IndexIssueListItem.js");
/* harmony import */ var _ProjectFilters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProjectFilters */ "./components/projectsView/ProjectFilters.js");
/* harmony import */ var _shared_ProjectScoreChart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/ProjectScoreChart */ "./components/shared/ProjectScoreChart.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\Administrator\\Documents\\Coding\\Austin\\atd-product\\components\\projectsView\\ProjectsList.js",
    _s = $RefreshSig$();












function includedInArray(issue, field, arr) {
  return issue[field] ? arr.includes(issue[field]) : false;
}

function arrayIncludesValue(issue, field, value) {
  return issue[field] ? issue[field].includes(value) : false;
}

var FILTER_DEFS = [{
  key: "status",
  name: "Status",
  field: "status",
  matchFunc: includedInArray,
  default: "In Progress"
}, {
  key: "workgroup",
  name: "Workgroup",
  field: "workgroups",
  matchFunc: arrayIncludesValue,
  default: ""
}];

function applyCurrentFilters(issues, currentFilters, filterDefs) {
  var activeFilterDefs = filterDefs.filter(function (filterDef) {
    return currentFilters[filterDef.key];
  });
  return issues.filter(function (issue) {
    // test each issue against all active filters
    return activeFilterDefs.every(function (filterDef) {
      return filterDef.matchFunc(issue, filterDef.field, currentFilters[filterDef.key]);
    });
  });
}

function ProjectsList(props) {
  _s();

  var _this = this;

  var issues = props.issues;
  var projectIssues = props.projectIssues;
  var error = props.error;
  var isLoaded = props.isLoaded;
  var context = react__WEBPACK_IMPORTED_MODULE_2___default().useContext(_contexts_EvaluationsContext__WEBPACK_IMPORTED_MODULE_5__.default);
  var location = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default().useState(new URLSearchParams(location.search)),
      _React$useState2 = (0,C_Users_Administrator_Documents_Coding_Austin_atd_product_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 1),
      search = _React$useState2[0];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default().useState({}),
      _React$useState4 = (0,C_Users_Administrator_Documents_Coding_Austin_atd_product_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState3, 2),
      currentFilters = _React$useState4[0],
      setCurrentFilters = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]),
      _React$useState6 = (0,C_Users_Administrator_Documents_Coding_Austin_atd_product_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState5, 2),
      displayIssues = _React$useState6[0],
      setDisplayIssues = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]),
      _React$useState8 = (0,C_Users_Administrator_Documents_Coding_Austin_atd_product_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState7, 2),
      displayScores = _React$useState8[0],
      setDisplayScores = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false),
      _React$useState10 = (0,C_Users_Administrator_Documents_Coding_Austin_atd_product_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState9, 2),
      showChartView = _React$useState10[0],
      setShowChartView = _React$useState10[1];

  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(function () {
    /*
    check current url for filter params after issues are loaded. set them if present, 
    otherwise set default filter values
    */
    var paramFilters = {};
    FILTER_DEFS.forEach(function (filterDef) {
      var value = search.get(filterDef.key);
      paramFilters[filterDef.key] = value ? value : filterDef.default;
    });
    setCurrentFilters(paramFilters);
  }, [issues, search]);
  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(function () {
    var displayIssuesCurrent = applyCurrentFilters(projectIssues, currentFilters, FILTER_DEFS);
    setDisplayIssues(displayIssuesCurrent);
  }, [currentFilters, projectIssues]);
  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(function () {
    var displayScoresCurrent = context.scores.filter(function (score) {
      var number = score.number; // exclude issues that do not have a score

      var matchesIssues = displayIssues.filter(function (issue) {
        return parseInt(issue.number) === number;
      });
      return matchesIssues.length > 0;
    });
    setDisplayScores(displayScoresCurrent);
  }, [displayIssues, context.scores]);

  if (error) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 12
    }, this);
  } else if (!isLoaded && !error) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_wrappers_SpinnerWrapper__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 12
    }, this);
  } else if (projectIssues.length === 0) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_9__.default, {
      variant: "dark",
      children: "No project data found."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectFilters__WEBPACK_IMPORTED_MODULE_7__.default, {
          filterDefs: FILTER_DEFS,
          currentFilters: currentFilters,
          setCurrentFilters: setCurrentFilters,
          showChartView: showChartView,
          setShowChartView: setShowChartView,
          statuses: props.statuses,
          workgroups: props.workgroups
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }, this)
    }, "filter-row", false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }, this), !showChartView && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11__.default, {
        className: "text-right text-muted",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {
          children: ["Showing ", displayIssues.length, " projects"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }, this), !showChartView && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10__.default, {
      children: displayIssues.map(function (project) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11__.default, {
          sm: 12,
          md: 6,
          lg: 4,
          className: "m-0 p-2",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_IndexIssueListItem__WEBPACK_IMPORTED_MODULE_6__.default, {
            type: "project",
            issue: project
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 15
          }, _this)
        }, project.number, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 13
        }, _this);
      })
    }, "issues-row", false, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }, this), showChartView && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_ProjectScoreChart__WEBPACK_IMPORTED_MODULE_8__.default, {
      scores: displayScores
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 25
    }, this), displayIssues && displayIssues.length === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_9__.default, {
          variant: "dark",
          children: "No projects found."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

_s(ProjectsList, "+HOWQqennCmyt26tMD07AJ3LrJU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c = ProjectsList;

var _c;

$RefreshReg$(_c, "ProjectsList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0c1ZpZXcvUHJvamVjdHNMaXN0LmpzIl0sIm5hbWVzIjpbImluY2x1ZGVkSW5BcnJheSIsImlzc3VlIiwiZmllbGQiLCJhcnIiLCJpbmNsdWRlcyIsImFycmF5SW5jbHVkZXNWYWx1ZSIsInZhbHVlIiwiRklMVEVSX0RFRlMiLCJrZXkiLCJuYW1lIiwibWF0Y2hGdW5jIiwiZGVmYXVsdCIsImFwcGx5Q3VycmVudEZpbHRlcnMiLCJpc3N1ZXMiLCJjdXJyZW50RmlsdGVycyIsImZpbHRlckRlZnMiLCJhY3RpdmVGaWx0ZXJEZWZzIiwiZmlsdGVyIiwiZmlsdGVyRGVmIiwiZXZlcnkiLCJQcm9qZWN0c0xpc3QiLCJwcm9wcyIsInByb2plY3RJc3N1ZXMiLCJlcnJvciIsImlzTG9hZGVkIiwiY29udGV4dCIsIlJlYWN0IiwiRXZhbHVhdGlvbnNDb250ZXh0IiwibG9jYXRpb24iLCJ1c2VSb3V0ZXIiLCJVUkxTZWFyY2hQYXJhbXMiLCJzZWFyY2giLCJzZXRDdXJyZW50RmlsdGVycyIsImRpc3BsYXlJc3N1ZXMiLCJzZXREaXNwbGF5SXNzdWVzIiwiZGlzcGxheVNjb3JlcyIsInNldERpc3BsYXlTY29yZXMiLCJzaG93Q2hhcnRWaWV3Iiwic2V0U2hvd0NoYXJ0VmlldyIsInBhcmFtRmlsdGVycyIsImZvckVhY2giLCJnZXQiLCJkaXNwbGF5SXNzdWVzQ3VycmVudCIsImRpc3BsYXlTY29yZXNDdXJyZW50Iiwic2NvcmVzIiwic2NvcmUiLCJudW1iZXIiLCJtYXRjaGVzSXNzdWVzIiwicGFyc2VJbnQiLCJsZW5ndGgiLCJzdGF0dXNlcyIsIndvcmtncm91cHMiLCJtYXAiLCJwcm9qZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxlQUFULENB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LENBQUNtQixHQUFkLENBQWtCLFVBQUNDLE9BQUQ7QUFBQSw0QkFDakIsOERBQUMseURBQUQ7QUFBMEIsWUFBRSxFQUFFLEVBQTlCO0FBQWtDLFlBQUUsRUFBRSxDQUF0QztBQUF5QyxZQUFFLEVBQUUsQ0FBN0M7QUFBZ0QsbUJBQVMsRUFBQyxTQUExRDtBQUFBLGlDQUNFLDhEQUFDLCtEQUFEO0FBQW9CLGdCQUFJLEVBQUMsU0FBekI7QUFBbUMsaUJBQUssRUFBRUE7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFdBQVVBLE9BQU8sQ0FBQ1AsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEaUI7QUFBQSxPQUFsQjtBQURILE9BQVMsWUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdEJKLEVBOEJHVCxhQUFhLGlCQUFJLDhEQUFDLDhEQUFEO0FBQW1CLFlBQU0sRUFBRUY7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTlCcEIsRUErQkdGLGFBQWEsSUFBSUEsYUFBYSxDQUFDZ0IsTUFBZCxLQUF5QixDQUExQyxpQkFDQyw4REFBQyx5REFBRDtBQUFBLDZCQUNFLDhEQUFDLHlEQUFEO0FBQUEsK0JBQ0UsOERBQUMsMERBQUQ7QUFBTyxpQkFBTyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhDSjtBQUFBLGtCQURGO0FBeUNEOztHQWhHdUI3QixZO1VBTUxTLGtEOzs7S0FOS1QsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9qZWN0cy4zOWY5MDFlN2M0YTg1MDEyMzgyNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJvdyBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1Jvd1wiO1xyXG5pbXBvcnQgQ29sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29sXCI7XHJcbmltcG9ydCBBbGVydCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0FsZXJ0XCI7XHJcblxyXG5pbXBvcnQgU3Bpbm5lcldyYXBwZXIgZnJvbSBcIi4uL3dyYXBwZXJzL1NwaW5uZXJXcmFwcGVyXCI7XHJcbmltcG9ydCBFdmFsdWF0aW9uc0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHRzL0V2YWx1YXRpb25zQ29udGV4dFwiO1xyXG5pbXBvcnQgSW5kZXhJc3N1ZUxpc3RJdGVtIGZyb20gXCIuLi9zaGFyZWQvSW5kZXhJc3N1ZUxpc3RJdGVtXCI7XHJcbmltcG9ydCBQcm9qZWN0RmlsdGVycyBmcm9tIFwiLi9Qcm9qZWN0RmlsdGVyc1wiO1xyXG5pbXBvcnQgUHJvamVjdFNjb3JlQ2hhcnQgZnJvbSBcIi4uL3NoYXJlZC9Qcm9qZWN0U2NvcmVDaGFydFwiO1xyXG5cclxuZnVuY3Rpb24gaW5jbHVkZWRJbkFycmF5KGlzc3VlLCBmaWVsZCwgYXJyKSB7XHJcbiAgcmV0dXJuIGlzc3VlW2ZpZWxkXSA/IGFyci5pbmNsdWRlcyhpc3N1ZVtmaWVsZF0pIDogZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFycmF5SW5jbHVkZXNWYWx1ZShpc3N1ZSwgZmllbGQsIHZhbHVlKSB7XHJcbiAgcmV0dXJuIGlzc3VlW2ZpZWxkXSA/IGlzc3VlW2ZpZWxkXS5pbmNsdWRlcyh2YWx1ZSkgOiBmYWxzZTtcclxufVxyXG5cclxuY29uc3QgRklMVEVSX0RFRlMgPSBbXHJcbiAge1xyXG4gICAga2V5OiBcInN0YXR1c1wiLFxyXG4gICAgbmFtZTogXCJTdGF0dXNcIixcclxuICAgIGZpZWxkOiBcInN0YXR1c1wiLFxyXG4gICAgbWF0Y2hGdW5jOiBpbmNsdWRlZEluQXJyYXksXHJcbiAgICBkZWZhdWx0OiBcIkluIFByb2dyZXNzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6IFwid29ya2dyb3VwXCIsXHJcbiAgICBuYW1lOiBcIldvcmtncm91cFwiLFxyXG4gICAgZmllbGQ6IFwid29ya2dyb3Vwc1wiLFxyXG4gICAgbWF0Y2hGdW5jOiBhcnJheUluY2x1ZGVzVmFsdWUsXHJcbiAgICBkZWZhdWx0OiBcIlwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5mdW5jdGlvbiBhcHBseUN1cnJlbnRGaWx0ZXJzKGlzc3VlcywgY3VycmVudEZpbHRlcnMsIGZpbHRlckRlZnMpIHtcclxuICBjb25zdCBhY3RpdmVGaWx0ZXJEZWZzID0gZmlsdGVyRGVmcy5maWx0ZXIoXHJcbiAgICAoZmlsdGVyRGVmKSA9PiBjdXJyZW50RmlsdGVyc1tmaWx0ZXJEZWYua2V5XVxyXG4gICk7XHJcblxyXG4gIHJldHVybiBpc3N1ZXMuZmlsdGVyKChpc3N1ZSkgPT4ge1xyXG4gICAgLy8gdGVzdCBlYWNoIGlzc3VlIGFnYWluc3QgYWxsIGFjdGl2ZSBmaWx0ZXJzXHJcbiAgICByZXR1cm4gYWN0aXZlRmlsdGVyRGVmcy5ldmVyeSgoZmlsdGVyRGVmKSA9PiB7XHJcbiAgICAgIHJldHVybiBmaWx0ZXJEZWYubWF0Y2hGdW5jKFxyXG4gICAgICAgIGlzc3VlLFxyXG4gICAgICAgIGZpbHRlckRlZi5maWVsZCxcclxuICAgICAgICBjdXJyZW50RmlsdGVyc1tmaWx0ZXJEZWYua2V5XVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RzTGlzdChwcm9wcykge1xyXG4gIGNvbnN0IGlzc3VlcyA9IHByb3BzLmlzc3VlcztcclxuICBjb25zdCBwcm9qZWN0SXNzdWVzID0gcHJvcHMucHJvamVjdElzc3VlcztcclxuICBjb25zdCBlcnJvciA9IHByb3BzLmVycm9yO1xyXG4gIGNvbnN0IGlzTG9hZGVkID0gcHJvcHMuaXNMb2FkZWQ7XHJcbiAgY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoRXZhbHVhdGlvbnNDb250ZXh0KTtcclxuICBjb25zdCBsb2NhdGlvbiA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtzZWFyY2hdID0gUmVhY3QudXNlU3RhdGUobmV3IFVSTFNlYXJjaFBhcmFtcyhsb2NhdGlvbi5zZWFyY2gpKTtcclxuICBjb25zdCBbY3VycmVudEZpbHRlcnMsIHNldEN1cnJlbnRGaWx0ZXJzXSA9IFJlYWN0LnVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbZGlzcGxheUlzc3Vlcywgc2V0RGlzcGxheUlzc3Vlc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2Rpc3BsYXlTY29yZXMsIHNldERpc3BsYXlTY29yZXNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzaG93Q2hhcnRWaWV3LCBzZXRTaG93Q2hhcnRWaWV3XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8qXHJcbiAgICBjaGVjayBjdXJyZW50IHVybCBmb3IgZmlsdGVyIHBhcmFtcyBhZnRlciBpc3N1ZXMgYXJlIGxvYWRlZC4gc2V0IHRoZW0gaWYgcHJlc2VudCwgXHJcbiAgICBvdGhlcndpc2Ugc2V0IGRlZmF1bHQgZmlsdGVyIHZhbHVlc1xyXG4gICAgKi9cclxuICAgIGxldCBwYXJhbUZpbHRlcnMgPSB7fTtcclxuICAgIEZJTFRFUl9ERUZTLmZvckVhY2goKGZpbHRlckRlZikgPT4ge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IHNlYXJjaC5nZXQoZmlsdGVyRGVmLmtleSk7XHJcbiAgICAgIHBhcmFtRmlsdGVyc1tmaWx0ZXJEZWYua2V5XSA9IHZhbHVlID8gdmFsdWUgOiBmaWx0ZXJEZWYuZGVmYXVsdDtcclxuICAgIH0pO1xyXG4gICAgc2V0Q3VycmVudEZpbHRlcnMocGFyYW1GaWx0ZXJzKTtcclxuICB9LCBbaXNzdWVzLCBzZWFyY2hdKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGRpc3BsYXlJc3N1ZXNDdXJyZW50ID0gYXBwbHlDdXJyZW50RmlsdGVycyhcclxuICAgICAgcHJvamVjdElzc3VlcyxcclxuICAgICAgY3VycmVudEZpbHRlcnMsXHJcbiAgICAgIEZJTFRFUl9ERUZTXHJcbiAgICApO1xyXG4gICAgc2V0RGlzcGxheUlzc3VlcyhkaXNwbGF5SXNzdWVzQ3VycmVudCk7XHJcbiAgfSwgW2N1cnJlbnRGaWx0ZXJzLCBwcm9qZWN0SXNzdWVzXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwbGF5U2NvcmVzQ3VycmVudCA9IGNvbnRleHQuc2NvcmVzLmZpbHRlcigoc2NvcmUpID0+IHtcclxuICAgICAgY29uc3QgbnVtYmVyID0gc2NvcmUubnVtYmVyO1xyXG4gICAgICAvLyBleGNsdWRlIGlzc3VlcyB0aGF0IGRvIG5vdCBoYXZlIGEgc2NvcmVcclxuICAgICAgY29uc3QgbWF0Y2hlc0lzc3VlcyA9IGRpc3BsYXlJc3N1ZXMuZmlsdGVyKFxyXG4gICAgICAgIChpc3N1ZSkgPT4gcGFyc2VJbnQoaXNzdWUubnVtYmVyKSA9PT0gbnVtYmVyXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiBtYXRjaGVzSXNzdWVzLmxlbmd0aCA+IDA7XHJcbiAgICB9KTtcclxuICAgIHNldERpc3BsYXlTY29yZXMoZGlzcGxheVNjb3Jlc0N1cnJlbnQpO1xyXG4gIH0sIFtkaXNwbGF5SXNzdWVzLCBjb250ZXh0LnNjb3Jlc10pO1xyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHJldHVybiA8cD57ZXJyb3J9PC9wPjtcclxuICB9IGVsc2UgaWYgKCFpc0xvYWRlZCAmJiAhZXJyb3IpIHtcclxuICAgIHJldHVybiA8U3Bpbm5lcldyYXBwZXIgLz47XHJcbiAgfSBlbHNlIGlmIChwcm9qZWN0SXNzdWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIDxBbGVydCB2YXJpYW50PVwiZGFya1wiPk5vIHByb2plY3QgZGF0YSBmb3VuZC48L0FsZXJ0PjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Um93IGtleT1cImZpbHRlci1yb3dcIj5cclxuICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgPFByb2plY3RGaWx0ZXJzXHJcbiAgICAgICAgICAgIGZpbHRlckRlZnM9e0ZJTFRFUl9ERUZTfVxyXG4gICAgICAgICAgICBjdXJyZW50RmlsdGVycz17Y3VycmVudEZpbHRlcnN9XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRGaWx0ZXJzPXtzZXRDdXJyZW50RmlsdGVyc31cclxuICAgICAgICAgICAgc2hvd0NoYXJ0Vmlldz17c2hvd0NoYXJ0Vmlld31cclxuICAgICAgICAgICAgc2V0U2hvd0NoYXJ0Vmlldz17c2V0U2hvd0NoYXJ0Vmlld31cclxuICAgICAgICAgICAgc3RhdHVzZXM9e3Byb3BzLnN0YXR1c2VzfVxyXG4gICAgICAgICAgICB3b3JrZ3JvdXBzPXtwcm9wcy53b3JrZ3JvdXBzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICAgIHshc2hvd0NoYXJ0VmlldyAmJiAoXHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwidGV4dC1yaWdodCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgIDxzbWFsbD5TaG93aW5nIHtkaXNwbGF5SXNzdWVzLmxlbmd0aH0gcHJvamVjdHM8L3NtYWxsPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICl9XHJcbiAgICAgIHshc2hvd0NoYXJ0VmlldyAmJiAoXHJcbiAgICAgICAgPFJvdyBrZXk9XCJpc3N1ZXMtcm93XCI+XHJcbiAgICAgICAgICB7ZGlzcGxheUlzc3Vlcy5tYXAoKHByb2plY3QpID0+IChcclxuICAgICAgICAgICAgPENvbCBrZXk9e3Byb2plY3QubnVtYmVyfSBzbT17MTJ9IG1kPXs2fSBsZz17NH0gY2xhc3NOYW1lPVwibS0wIHAtMlwiPlxyXG4gICAgICAgICAgICAgIDxJbmRleElzc3VlTGlzdEl0ZW0gdHlwZT1cInByb2plY3RcIiBpc3N1ZT17cHJvamVjdH0gLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgKX1cclxuICAgICAge3Nob3dDaGFydFZpZXcgJiYgPFByb2plY3RTY29yZUNoYXJ0IHNjb3Jlcz17ZGlzcGxheVNjb3Jlc30gLz59XHJcbiAgICAgIHtkaXNwbGF5SXNzdWVzICYmIGRpc3BsYXlJc3N1ZXMubGVuZ3RoID09PSAwICYmIChcclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgPEFsZXJ0IHZhcmlhbnQ9XCJkYXJrXCI+Tm8gcHJvamVjdHMgZm91bmQuPC9BbGVydD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9