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
  var location = useLocation();

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

_s(ProjectsList, "Q5wGG/dTKwck421Q61mQ7pXP4Lw=", true);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0c1ZpZXcvUHJvamVjdHNMaXN0LmpzIl0sIm5hbWVzIjpbImluY2x1ZGVkSW5BcnJheSIsImlzc3VlIiwiZmllbGQiLCJhcnIiLCJpbmNsdWRlcyIsImFycmF5SW5jbHVkZXNWYWx1ZSIsInZhbHVlIiwiRklMVEVSX0RFRlMiLCJrZXkiLCJuYW1lIiwibWF0Y2hGdW5jIiwiZGVmYXVsdCIsImFwcGx5Q3VycmVudEZpbHRlcnMiLCJpc3N1ZXMiLCJjdXJyZW50RmlsdGVycyIsImZpbHRlckRlZnMiLCJhY3RpdmVGaWx0ZXJEZWZzIiwiZmlsdGVyIiwiZmlsdGVyRGVmIiwiZXZlcnkiLCJQcm9qZWN0c0xpc3QiLCJwcm9wcyIsInByb2plY3RJc3N1ZXMiLCJlcnJvciIsImlzTG9hZGVkIiwiY29udGV4dCIsIlJlYWN0IiwiRXZhbHVhdGlvbnNDb250ZXh0IiwibG9jYXRpb24iLCJ1c2VMb2NhdGlvbiIsIlVSTFNlYXJjaFBhcmFtcyIsInNlYXJjaCIsInNldEN1cnJlbnRGaWx0ZXJzIiwiZGlzcGxheUlzc3VlcyIsInNldERpc3BsYXlJc3N1ZXMiLCJkaXNwbGF5U2NvcmVzIiwic2V0RGlzcGxheVNjb3JlcyIsInNob3dDaGFydFZpZXciLCJzZXRTaG93Q2hhcnRWaWV3IiwicGFyYW1GaWx0ZXJzIiwiZm9yRWFjaCIsImdldCIsImRpc3BsYXlJc3N1ZXNDdXJyZW50IiwiZGlzcGxheVNjb3Jlc0N1cnJlbnQiLCJzY29yZXMiLCJzY29yZSIsIm51bWJlciIsIm1hdGNoZXNJc3N1ZXMiLCJwYXJzZUludCIsImxlbmd0aCIsInN0YXR1c2VzIiwid29ya2dyb3VwcyIsIm1hcCIsInByb2plY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQWdDQyxLQUFoQyxFQUF1Q0MsR0FBdkMsRUFBNEM7QUFDMUMsU0FBT0YsS0FBSyxDQUFDQyxLQUFELENBQUwsR0FBZUMsR0FBRyxDQUFDQyxRQUFKLENBQWFILEtBQUssQ0FBQ0MsS0FBRCxDQUFsQixDQUFmLEdBQTRDLEtBQW5EO0FBQ0Q7O0FBRUQsU0FBU0csa0JBQVQsQ0FBNEJKLEtBQTVCLEVBQW1DQyxLQUFuQyxFQUEwQ0ksS0FBMUMsRUFBaUQ7QUFDL0MsU0FBT0wsS0FBSyxDQUFDQyxLQUFELENBQUwsR0FBZUQsS0FBSyxDQUFDQyxLQUFELENBQUwsQ0FBYUUsUUFBYixDQUFzQkUsS0FBdEIsQ0FBZixHQUE4QyxLQUFyRDtBQUNEOztBQUVELElBQU1DLFdBQVcsR0FBRyxDQUNsQjtBQUNFQyxLQUFHLEVBQUUsUUFEUDtBQUVFQyxNQUFJLEVBQUUsUUFGUjtBQUdFUCxPQUFLLEVBQUUsUUFIVDtBQUlFUSxXQUFTLEVBQUVWLGVBSmI7QUFLRVcsU0FBTyxFQUFFO0FBTFgsQ0FEa0IsRUFRbEI7QUFDRUgsS0FBRyxFQUFFLFdBRFA7QUFFRUMsTUFBSSxFQUFFLFdBRlI7QUFHRVAsT0FBSyxFQUFFLFlBSFQ7QUFJRVEsV0FBUyxFQUFFTCxrQkFKYjtBQUtFTSxTQUFPLEVBQUU7QUFMWCxDQVJrQixDQUFwQjs7QUFpQkEsU0FBU0MsbUJBQVQsQ0FBNkJDLE1BQTdCLEVBQXFDQyxjQUFyQyxFQUFxREMsVUFBckQsRUFBaUU7QUFDL0QsTUFBTUMsZ0JBQWdCLEdBQUdELFVBQVUsQ0FBQ0UsTUFBWCxDQUN2QixVQUFDQyxTQUFEO0FBQUEsV0FBZUosY0FBYyxDQUFDSSxTQUFTLENBQUNWLEdBQVgsQ0FBN0I7QUFBQSxHQUR1QixDQUF6QjtBQUlBLFNBQU9LLE1BQU0sQ0FBQ0ksTUFBUCxDQUFjLFVBQUNoQixLQUFELEVBQVc7QUFDOUI7QUFDQSxXQUFPZSxnQkFBZ0IsQ0FBQ0csS0FBakIsQ0FBdUIsVUFBQ0QsU0FBRCxFQUFlO0FBQzNDLGFBQU9BLFNBQVMsQ0FBQ1IsU0FBVixDQUNMVCxLQURLLEVBRUxpQixTQUFTLENBQUNoQixLQUZMLEVBR0xZLGNBQWMsQ0FBQ0ksU0FBUyxDQUFDVixHQUFYLENBSFQsQ0FBUDtBQUtELEtBTk0sQ0FBUDtBQU9ELEdBVE0sQ0FBUDtBQVVEOztBQUVjLFNBQVNZLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQUE7O0FBQUE7O0FBQzFDLE1BQU1SLE1BQU0sR0FBR1EsS0FBSyxDQUFDUixNQUFyQjtBQUNBLE1BQU1TLGFBQWEsR0FBR0QsS0FBSyxDQUFDQyxhQUE1QjtBQUNBLE1BQU1DLEtBQUssR0FBR0YsS0FBSyxDQUFDRSxLQUFwQjtBQUNBLE1BQU1DLFFBQVEsR0FBR0gsS0FBSyxDQUFDRyxRQUF2QjtBQUNBLE1BQU1DLE9BQU8sR0FBR0MsdURBQUEsQ0FBaUJDLGlFQUFqQixDQUFoQjtBQUNBLE1BQU1DLFFBQVEsR0FBR0MsV0FBVyxFQUE1Qjs7QUFOMEMsd0JBT3pCSCxxREFBQSxDQUFlLElBQUlJLGVBQUosQ0FBb0JGLFFBQVEsQ0FBQ0csTUFBN0IsQ0FBZixDQVB5QjtBQUFBO0FBQUEsTUFPbkNBLE1BUG1DOztBQUFBLHlCQVFFTCxxREFBQSxDQUFlLEVBQWYsQ0FSRjtBQUFBO0FBQUEsTUFRbkNaLGNBUm1DO0FBQUEsTUFRbkJrQixpQkFSbUI7O0FBQUEseUJBU0FOLHFEQUFBLENBQWUsRUFBZixDQVRBO0FBQUE7QUFBQSxNQVNuQ08sYUFUbUM7QUFBQSxNQVNwQkMsZ0JBVG9COztBQUFBLHlCQVVBUixxREFBQSxDQUFlLEVBQWYsQ0FWQTtBQUFBO0FBQUEsTUFVbkNTLGFBVm1DO0FBQUEsTUFVcEJDLGdCQVZvQjs7QUFBQSx5QkFXQVYscURBQUEsQ0FBZSxLQUFmLENBWEE7QUFBQTtBQUFBLE1BV25DVyxhQVhtQztBQUFBLE1BV3BCQyxnQkFYb0I7O0FBYTFDWix3REFBQSxDQUFnQixZQUFNO0FBQ3BCO0FBQ0o7QUFDQTtBQUNBO0FBQ0ksUUFBSWEsWUFBWSxHQUFHLEVBQW5CO0FBQ0FoQyxlQUFXLENBQUNpQyxPQUFaLENBQW9CLFVBQUN0QixTQUFELEVBQWU7QUFDakMsVUFBTVosS0FBSyxHQUFHeUIsTUFBTSxDQUFDVSxHQUFQLENBQVd2QixTQUFTLENBQUNWLEdBQXJCLENBQWQ7QUFDQStCLGtCQUFZLENBQUNyQixTQUFTLENBQUNWLEdBQVgsQ0FBWixHQUE4QkYsS0FBSyxHQUFHQSxLQUFILEdBQVdZLFNBQVMsQ0FBQ1AsT0FBeEQ7QUFDRCxLQUhEO0FBSUFxQixxQkFBaUIsQ0FBQ08sWUFBRCxDQUFqQjtBQUNELEdBWEQsRUFXRyxDQUFDMUIsTUFBRCxFQUFTa0IsTUFBVCxDQVhIO0FBYUFMLHdEQUFBLENBQWdCLFlBQU07QUFDcEIsUUFBTWdCLG9CQUFvQixHQUFHOUIsbUJBQW1CLENBQzlDVSxhQUQ4QyxFQUU5Q1IsY0FGOEMsRUFHOUNQLFdBSDhDLENBQWhEO0FBS0EyQixvQkFBZ0IsQ0FBQ1Esb0JBQUQsQ0FBaEI7QUFDRCxHQVBELEVBT0csQ0FBQzVCLGNBQUQsRUFBaUJRLGFBQWpCLENBUEg7QUFTQUksd0RBQUEsQ0FBZ0IsWUFBTTtBQUNwQixRQUFNaUIsb0JBQW9CLEdBQUdsQixPQUFPLENBQUNtQixNQUFSLENBQWUzQixNQUFmLENBQXNCLFVBQUM0QixLQUFELEVBQVc7QUFDNUQsVUFBTUMsTUFBTSxHQUFHRCxLQUFLLENBQUNDLE1BQXJCLENBRDRELENBRTVEOztBQUNBLFVBQU1DLGFBQWEsR0FBR2QsYUFBYSxDQUFDaEIsTUFBZCxDQUNwQixVQUFDaEIsS0FBRDtBQUFBLGVBQVcrQyxRQUFRLENBQUMvQyxLQUFLLENBQUM2QyxNQUFQLENBQVIsS0FBMkJBLE1BQXRDO0FBQUEsT0FEb0IsQ0FBdEI7QUFHQSxhQUFPQyxhQUFhLENBQUNFLE1BQWQsR0FBdUIsQ0FBOUI7QUFDRCxLQVA0QixDQUE3QjtBQVFBYixvQkFBZ0IsQ0FBQ08sb0JBQUQsQ0FBaEI7QUFDRCxHQVZELEVBVUcsQ0FBQ1YsYUFBRCxFQUFnQlIsT0FBTyxDQUFDbUIsTUFBeEIsQ0FWSDs7QUFZQSxNQUFJckIsS0FBSixFQUFXO0FBQ1Qsd0JBQU87QUFBQSxnQkFBSUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRCxHQUZELE1BRU8sSUFBSSxDQUFDQyxRQUFELElBQWEsQ0FBQ0QsS0FBbEIsRUFBeUI7QUFDOUIsd0JBQU8sOERBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlELGFBQWEsQ0FBQzJCLE1BQWQsS0FBeUIsQ0FBN0IsRUFBZ0M7QUFDckMsd0JBQU8sOERBQUMsMERBQUQ7QUFBTyxhQUFPLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyx5REFBRDtBQUFBLDZCQUNFLDhEQUFDLHlEQUFEO0FBQUEsK0JBQ0UsOERBQUMsb0RBQUQ7QUFDRSxvQkFBVSxFQUFFMUMsV0FEZDtBQUVFLHdCQUFjLEVBQUVPLGNBRmxCO0FBR0UsMkJBQWlCLEVBQUVrQixpQkFIckI7QUFJRSx1QkFBYSxFQUFFSyxhQUpqQjtBQUtFLDBCQUFnQixFQUFFQyxnQkFMcEI7QUFNRSxrQkFBUSxFQUFFakIsS0FBSyxDQUFDNkIsUUFObEI7QUFPRSxvQkFBVSxFQUFFN0IsS0FBSyxDQUFDOEI7QUFQcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixPQUFTLFlBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBY0csQ0FBQ2QsYUFBRCxpQkFDQyw4REFBQyx5REFBRDtBQUFBLDZCQUNFLDhEQUFDLHlEQUFEO0FBQUssaUJBQVMsRUFBQyx1QkFBZjtBQUFBLCtCQUNFO0FBQUEsaUNBQWdCSixhQUFhLENBQUNnQixNQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZKLEVBcUJHLENBQUNaLGFBQUQsaUJBQ0MsOERBQUMseURBQUQ7QUFBQSxnQkFDR0osYUFBYSxDQUFDbUIsR0FBZCxDQUFrQixVQUFDQyxPQUFEO0FBQUEsNEJBQ2pCLDhEQUFDLHlEQUFEO0FBQTBCLFlBQUUsRUFBRSxFQUE5QjtBQUFrQyxZQUFFLEVBQUUsQ0FBdEM7QUFBeUMsWUFBRSxFQUFFLENBQTdDO0FBQWdELG1CQUFTLEVBQUMsU0FBMUQ7QUFBQSxpQ0FDRSw4REFBQywrREFBRDtBQUFvQixnQkFBSSxFQUFDLFNBQXpCO0FBQW1DLGlCQUFLLEVBQUVBO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUFVQSxPQUFPLENBQUNQLE1BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGlCO0FBQUEsT0FBbEI7QUFESCxPQUFTLFlBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRCSixFQThCR1QsYUFBYSxpQkFBSSw4REFBQyw4REFBRDtBQUFtQixZQUFNLEVBQUVGO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE5QnBCLEVBK0JHRixhQUFhLElBQUlBLGFBQWEsQ0FBQ2dCLE1BQWQsS0FBeUIsQ0FBMUMsaUJBQ0MsOERBQUMseURBQUQ7QUFBQSw2QkFDRSw4REFBQyx5REFBRDtBQUFBLCtCQUNFLDhEQUFDLDBEQUFEO0FBQU8saUJBQU8sRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQ0o7QUFBQSxrQkFERjtBQXlDRDs7R0FoR3VCN0IsWTs7S0FBQUEsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9qZWN0cy4yZjllMDM2NGJiNjU4ZTQwMjEwMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJvdyBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1Jvd1wiO1xyXG5pbXBvcnQgQ29sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29sXCI7XHJcbmltcG9ydCBBbGVydCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0FsZXJ0XCI7XHJcblxyXG5pbXBvcnQgU3Bpbm5lcldyYXBwZXIgZnJvbSBcIi4uL3dyYXBwZXJzL1NwaW5uZXJXcmFwcGVyXCI7XHJcbmltcG9ydCBFdmFsdWF0aW9uc0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHRzL0V2YWx1YXRpb25zQ29udGV4dFwiO1xyXG5pbXBvcnQgSW5kZXhJc3N1ZUxpc3RJdGVtIGZyb20gXCIuLi9zaGFyZWQvSW5kZXhJc3N1ZUxpc3RJdGVtXCI7XHJcbmltcG9ydCBQcm9qZWN0RmlsdGVycyBmcm9tIFwiLi9Qcm9qZWN0RmlsdGVyc1wiO1xyXG5pbXBvcnQgUHJvamVjdFNjb3JlQ2hhcnQgZnJvbSBcIi4uL3NoYXJlZC9Qcm9qZWN0U2NvcmVDaGFydFwiO1xyXG5cclxuZnVuY3Rpb24gaW5jbHVkZWRJbkFycmF5KGlzc3VlLCBmaWVsZCwgYXJyKSB7XHJcbiAgcmV0dXJuIGlzc3VlW2ZpZWxkXSA/IGFyci5pbmNsdWRlcyhpc3N1ZVtmaWVsZF0pIDogZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFycmF5SW5jbHVkZXNWYWx1ZShpc3N1ZSwgZmllbGQsIHZhbHVlKSB7XHJcbiAgcmV0dXJuIGlzc3VlW2ZpZWxkXSA/IGlzc3VlW2ZpZWxkXS5pbmNsdWRlcyh2YWx1ZSkgOiBmYWxzZTtcclxufVxyXG5cclxuY29uc3QgRklMVEVSX0RFRlMgPSBbXHJcbiAge1xyXG4gICAga2V5OiBcInN0YXR1c1wiLFxyXG4gICAgbmFtZTogXCJTdGF0dXNcIixcclxuICAgIGZpZWxkOiBcInN0YXR1c1wiLFxyXG4gICAgbWF0Y2hGdW5jOiBpbmNsdWRlZEluQXJyYXksXHJcbiAgICBkZWZhdWx0OiBcIkluIFByb2dyZXNzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6IFwid29ya2dyb3VwXCIsXHJcbiAgICBuYW1lOiBcIldvcmtncm91cFwiLFxyXG4gICAgZmllbGQ6IFwid29ya2dyb3Vwc1wiLFxyXG4gICAgbWF0Y2hGdW5jOiBhcnJheUluY2x1ZGVzVmFsdWUsXHJcbiAgICBkZWZhdWx0OiBcIlwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5mdW5jdGlvbiBhcHBseUN1cnJlbnRGaWx0ZXJzKGlzc3VlcywgY3VycmVudEZpbHRlcnMsIGZpbHRlckRlZnMpIHtcclxuICBjb25zdCBhY3RpdmVGaWx0ZXJEZWZzID0gZmlsdGVyRGVmcy5maWx0ZXIoXHJcbiAgICAoZmlsdGVyRGVmKSA9PiBjdXJyZW50RmlsdGVyc1tmaWx0ZXJEZWYua2V5XVxyXG4gICk7XHJcblxyXG4gIHJldHVybiBpc3N1ZXMuZmlsdGVyKChpc3N1ZSkgPT4ge1xyXG4gICAgLy8gdGVzdCBlYWNoIGlzc3VlIGFnYWluc3QgYWxsIGFjdGl2ZSBmaWx0ZXJzXHJcbiAgICByZXR1cm4gYWN0aXZlRmlsdGVyRGVmcy5ldmVyeSgoZmlsdGVyRGVmKSA9PiB7XHJcbiAgICAgIHJldHVybiBmaWx0ZXJEZWYubWF0Y2hGdW5jKFxyXG4gICAgICAgIGlzc3VlLFxyXG4gICAgICAgIGZpbHRlckRlZi5maWVsZCxcclxuICAgICAgICBjdXJyZW50RmlsdGVyc1tmaWx0ZXJEZWYua2V5XVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RzTGlzdChwcm9wcykge1xyXG4gIGNvbnN0IGlzc3VlcyA9IHByb3BzLmlzc3VlcztcclxuICBjb25zdCBwcm9qZWN0SXNzdWVzID0gcHJvcHMucHJvamVjdElzc3VlcztcclxuICBjb25zdCBlcnJvciA9IHByb3BzLmVycm9yO1xyXG4gIGNvbnN0IGlzTG9hZGVkID0gcHJvcHMuaXNMb2FkZWQ7XHJcbiAgY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoRXZhbHVhdGlvbnNDb250ZXh0KTtcclxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XHJcbiAgY29uc3QgW3NlYXJjaF0gPSBSZWFjdC51c2VTdGF0ZShuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLnNlYXJjaCkpO1xyXG4gIGNvbnN0IFtjdXJyZW50RmlsdGVycywgc2V0Q3VycmVudEZpbHRlcnNdID0gUmVhY3QudXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtkaXNwbGF5SXNzdWVzLCBzZXREaXNwbGF5SXNzdWVzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZGlzcGxheVNjb3Jlcywgc2V0RGlzcGxheVNjb3Jlc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Nob3dDaGFydFZpZXcsIHNldFNob3dDaGFydFZpZXddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLypcclxuICAgIGNoZWNrIGN1cnJlbnQgdXJsIGZvciBmaWx0ZXIgcGFyYW1zIGFmdGVyIGlzc3VlcyBhcmUgbG9hZGVkLiBzZXQgdGhlbSBpZiBwcmVzZW50LCBcclxuICAgIG90aGVyd2lzZSBzZXQgZGVmYXVsdCBmaWx0ZXIgdmFsdWVzXHJcbiAgICAqL1xyXG4gICAgbGV0IHBhcmFtRmlsdGVycyA9IHt9O1xyXG4gICAgRklMVEVSX0RFRlMuZm9yRWFjaCgoZmlsdGVyRGVmKSA9PiB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gc2VhcmNoLmdldChmaWx0ZXJEZWYua2V5KTtcclxuICAgICAgcGFyYW1GaWx0ZXJzW2ZpbHRlckRlZi5rZXldID0gdmFsdWUgPyB2YWx1ZSA6IGZpbHRlckRlZi5kZWZhdWx0O1xyXG4gICAgfSk7XHJcbiAgICBzZXRDdXJyZW50RmlsdGVycyhwYXJhbUZpbHRlcnMpO1xyXG4gIH0sIFtpc3N1ZXMsIHNlYXJjaF0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGxheUlzc3Vlc0N1cnJlbnQgPSBhcHBseUN1cnJlbnRGaWx0ZXJzKFxyXG4gICAgICBwcm9qZWN0SXNzdWVzLFxyXG4gICAgICBjdXJyZW50RmlsdGVycyxcclxuICAgICAgRklMVEVSX0RFRlNcclxuICAgICk7XHJcbiAgICBzZXREaXNwbGF5SXNzdWVzKGRpc3BsYXlJc3N1ZXNDdXJyZW50KTtcclxuICB9LCBbY3VycmVudEZpbHRlcnMsIHByb2plY3RJc3N1ZXNdKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGRpc3BsYXlTY29yZXNDdXJyZW50ID0gY29udGV4dC5zY29yZXMuZmlsdGVyKChzY29yZSkgPT4ge1xyXG4gICAgICBjb25zdCBudW1iZXIgPSBzY29yZS5udW1iZXI7XHJcbiAgICAgIC8vIGV4Y2x1ZGUgaXNzdWVzIHRoYXQgZG8gbm90IGhhdmUgYSBzY29yZVxyXG4gICAgICBjb25zdCBtYXRjaGVzSXNzdWVzID0gZGlzcGxheUlzc3Vlcy5maWx0ZXIoXHJcbiAgICAgICAgKGlzc3VlKSA9PiBwYXJzZUludChpc3N1ZS5udW1iZXIpID09PSBudW1iZXJcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuIG1hdGNoZXNJc3N1ZXMubGVuZ3RoID4gMDtcclxuICAgIH0pO1xyXG4gICAgc2V0RGlzcGxheVNjb3JlcyhkaXNwbGF5U2NvcmVzQ3VycmVudCk7XHJcbiAgfSwgW2Rpc3BsYXlJc3N1ZXMsIGNvbnRleHQuc2NvcmVzXSk7XHJcblxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgcmV0dXJuIDxwPntlcnJvcn08L3A+O1xyXG4gIH0gZWxzZSBpZiAoIWlzTG9hZGVkICYmICFlcnJvcikge1xyXG4gICAgcmV0dXJuIDxTcGlubmVyV3JhcHBlciAvPjtcclxuICB9IGVsc2UgaWYgKHByb2plY3RJc3N1ZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gPEFsZXJ0IHZhcmlhbnQ9XCJkYXJrXCI+Tm8gcHJvamVjdCBkYXRhIGZvdW5kLjwvQWxlcnQ+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxSb3cga2V5PVwiZmlsdGVyLXJvd1wiPlxyXG4gICAgICAgIDxDb2w+XHJcbiAgICAgICAgICA8UHJvamVjdEZpbHRlcnNcclxuICAgICAgICAgICAgZmlsdGVyRGVmcz17RklMVEVSX0RFRlN9XHJcbiAgICAgICAgICAgIGN1cnJlbnRGaWx0ZXJzPXtjdXJyZW50RmlsdGVyc31cclxuICAgICAgICAgICAgc2V0Q3VycmVudEZpbHRlcnM9e3NldEN1cnJlbnRGaWx0ZXJzfVxyXG4gICAgICAgICAgICBzaG93Q2hhcnRWaWV3PXtzaG93Q2hhcnRWaWV3fVxyXG4gICAgICAgICAgICBzZXRTaG93Q2hhcnRWaWV3PXtzZXRTaG93Q2hhcnRWaWV3fVxyXG4gICAgICAgICAgICBzdGF0dXNlcz17cHJvcHMuc3RhdHVzZXN9XHJcbiAgICAgICAgICAgIHdvcmtncm91cHM9e3Byb3BzLndvcmtncm91cHN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgICAgeyFzaG93Q2hhcnRWaWV3ICYmIChcclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgPHNtYWxsPlNob3dpbmcge2Rpc3BsYXlJc3N1ZXMubGVuZ3RofSBwcm9qZWN0czwvc21hbGw+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgKX1cclxuICAgICAgeyFzaG93Q2hhcnRWaWV3ICYmIChcclxuICAgICAgICA8Um93IGtleT1cImlzc3Vlcy1yb3dcIj5cclxuICAgICAgICAgIHtkaXNwbGF5SXNzdWVzLm1hcCgocHJvamVjdCkgPT4gKFxyXG4gICAgICAgICAgICA8Q29sIGtleT17cHJvamVjdC5udW1iZXJ9IHNtPXsxMn0gbWQ9ezZ9IGxnPXs0fSBjbGFzc05hbWU9XCJtLTAgcC0yXCI+XHJcbiAgICAgICAgICAgICAgPEluZGV4SXNzdWVMaXN0SXRlbSB0eXBlPVwicHJvamVjdFwiIGlzc3VlPXtwcm9qZWN0fSAvPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICApfVxyXG4gICAgICB7c2hvd0NoYXJ0VmlldyAmJiA8UHJvamVjdFNjb3JlQ2hhcnQgc2NvcmVzPXtkaXNwbGF5U2NvcmVzfSAvPn1cclxuICAgICAge2Rpc3BsYXlJc3N1ZXMgJiYgZGlzcGxheUlzc3Vlcy5sZW5ndGggPT09IDAgJiYgKFxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICA8QWxlcnQgdmFyaWFudD1cImRhcmtcIj5ObyBwcm9qZWN0cyBmb3VuZC48L0FsZXJ0PlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=