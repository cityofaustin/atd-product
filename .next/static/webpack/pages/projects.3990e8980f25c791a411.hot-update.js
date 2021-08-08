self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./components/projectsView/ProjectFilters.js":
/*!***************************************************!*\
  !*** ./components/projectsView/ProjectFilters.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ProjectFilters; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Administrator_Documents_Coding_Austin_atd_product_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive */ "./node_modules/react-responsive/dist/react-responsive.js");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ProjectListToggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProjectListToggle */ "./components/projectsView/ProjectListToggle.js");
/* harmony import */ var _FiltersList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FiltersList */ "./components/projectsView/FiltersList.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Administrator\\Documents\\Coding\\Austin\\atd-product\\components\\projectsView\\ProjectFilters.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Administrator_Documents_Coding_Austin_atd_product_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var STATUS_FILTERS = [{
  label: "Needs Scoping",
  key: "Needs Scoping"
}, {
  label: "Backlog",
  key: "Backlog"
}, {
  label: "In Progress",
  key: "In Progress"
}, {
  label: "Completed",
  key: "Completed"
}];
var WORKGROUP_NAMES = {
  AMD: "Arterial Management",
  VZ: "Vision Zero",
  SMB: "Signs & Markings",
  CPO: "Capital Planning",
  DTS: "Data & Tech Services",
  Finance: "Finance",
  HR: "Human Resources",
  OOD: "Office of the Director",
  OSE: "Office of Special Events",
  PE: "Parking Enterprise",
  PIO: "Parking Information Office",
  PWD: "Public Works Dept",
  ROW: "Right of Way",
  SDD: "Systems Development",
  SM: "Smart Mobility",
  TDSD: "Transportation Development Services",
  TED: "Transportation Engineering",
  ATSD: "Active Transportation & Street Design"
};

function handleChange(value, currentFilters, setCurrentFilters, filterKey) {
  var mutableFilters = _objectSpread({}, currentFilters);

  mutableFilters[filterKey] = value || null;
  setCurrentFilters(mutableFilters);
}

function formatSearchPath(currentFilters) {
  // format the search path to match currently selected filters
  var searchKwargs = Object.keys(currentFilters).filter(function (key) {
    return currentFilters[key];
  }).map(function (key) {
    return "".concat(key, "=").concat(currentFilters[key]);
  }).join("&");
  return "?".concat(searchKwargs);
}

function ProjectFilters(props) {
  _s();

  var _this = this;

  var isTabletOrMobile = (0,react_responsive__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)({
    query: "(max-width: 996px)"
  });
  var history = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  var currentFilters = props.currentFilters,
      setCurrentFilters = props.setCurrentFilters,
      showChartView = props.showChartView,
      setShowChartView = props.setShowChartView,
      workgroups = props.workgroups;
  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(function () {
    history.replace({
      pathname: history.pathname,
      search: formatSearchPath(currentFilters)
    });
  }, [currentFilters, history]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__.default, {
    className: "text-center",
    children: [isTabletOrMobile ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__.default, {
        className: "bg-light h-100 ",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__.default, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Control, {
            className: currentFilters.status ? "workgroup-select-active" : "workgroup-select-inactive",
            as: "select",
            value: currentFilters.status || "In Progress",
            onChange: function onChange(e) {
              return handleChange(e.target.value, currentFilters, setCurrentFilters, "status");
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
              value: "",
              children: "Project Status"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 17
            }, this), STATUS_FILTERS.map(function (projectStatus) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: projectStatus.label,
                children: projectStatus.label
              }, projectStatus.key, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 21
              }, _this);
            })]
          }, "status", true, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }, this)
    }, "projectStatusFilter", false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FiltersList__WEBPACK_IMPORTED_MODULE_6__.default, {
      currentFilters: currentFilters,
      handleChange: handleChange,
      setCurrentFilters: setCurrentFilters,
      statusFilters: STATUS_FILTERS
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__.default, {
      md: 6,
      lg: "auto",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__.default, {
        className: "bg-light h-100  ".concat(currentFilters.workgroup ? "workgroup-select-row-active" : "workgroup-select-row-inactive", " "),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__.default, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__.default.Control, {
            className: currentFilters.workgroup ? "workgroup-select-active" : "workgroup-select-inactive",
            as: "select",
            value: currentFilters.workgroup || "Any workgroup",
            onChange: function onChange(e) {
              return handleChange(e.target.value, currentFilters, setCurrentFilters, "workgroup");
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
              value: "",
              children: "Any workgroup"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 15
            }, this), workgroups.map(function (workgroup) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: workgroup,
                children: WORKGROUP_NAMES[workgroup] || workgroup
              }, workgroup, false, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 19
              }, _this);
            })]
          }, "status", true, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, this)
    }, "workgroupFilter", false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__.default, {
      className: "bg-light",
      md: "auto",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__.default, {
        className: "h-100",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectListToggle__WEBPACK_IMPORTED_MODULE_5__.default, {
          showChartView: showChartView,
          setShowChartView: setShowChartView
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 9
      }, this)
    }, "projectListToggle", false, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 5
  }, this);
}

_s(ProjectFilters, "EwvtOqXC0ghIhaIZi6t5DLCu164=", false, function () {
  return [react_responsive__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery, next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c = ProjectFilters;

var _c;

$RefreshReg$(_c, "ProjectFilters");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0c1ZpZXcvUHJvamVjdEZpbHRlcnMuanMiXSwibmFtZXMiOlsiU1RBVFVTX0ZJTFRFUlMiLCJsYWJlbCIsImtleSIsIldPUktHUk9VUF9OQU1FUyIsIkFNRCIsIlZaIiwiU01CIiwiQ1BPIiwiRFRTIiwiRmluYW5jZSIsIkhSIiwiT09EIiwiT1NFIiwiUEUiLCJQSU8iLCJQV0QiLCJST1ciLCJTREQiLCJTTSIsIlREU0QiLCJURUQiLCJBVFNEIiwiaGFuZGxlQ2hhbmdlIiwidmFsdWUiLCJjdXJyZW50RmlsdGVycyIsInNldEN1cnJlbnRGaWx0ZXJzIiwiZmlsdGVyS2V5IiwibXV0YWJsZUZpbHRlcnMiLCJmb3JtYXRTZWFyY2hQYXRoIiwic2VhcmNoS3dhcmdzIiwiT2JqZWN0Iiwia2V5cyIsImZpbHRlciIsIm1hcCIsImpvaW4iLCJQcm9qZWN0RmlsdGVycyIsInByb3BzIiwiaXNUYWJsZXRPck1vYmlsZSIsInVzZU1lZGlhUXVlcnkiLCJxdWVyeSIsImhpc3RvcnkiLCJ1c2VSb3V0ZXIiLCJzaG93Q2hhcnRWaWV3Iiwic2V0U2hvd0NoYXJ0VmlldyIsIndvcmtncm91cHMiLCJSZWFjdCIsInJlcGxhY2UiLCJwYXRobmFtZSIsInNlYXJjaCIsInN0YXR1cyIsImUiLCJ0YXJnZXQiLCJwcm9qZWN0U3RhdHVzIiwid29ya2dyb3VwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxjQUFjLEdBQUcsQ0FDckI7QUFBRUMsT0FBSyxFQUFFLGVBQVQ7QUFBMEJDLEtBQUcsRUFBRTtBQUEvQixDQURxQixFQUVyQjtBQUFFRCxPQUFLLEVBQUUsU0FBVDtBQUFvQkMsS0FBRyxFQUFFO0FBQXpCLENBRnFCLEVBR3JCO0FBQUVELE9BQUssRUFBRSxhQUFUO0FBQXdCQyxLQUFHLEVBQUU7QUFBN0IsQ0FIcUIsRUFJckI7QUFBRUQsT0FBSyxFQUFFLFdBQVQ7QUFBc0JDLEtBQUcsRUFBRTtBQUEzQixDQUpxQixDQUF2QjtBQU9BLElBQU1DLGVBQWUsR0FBRztBQUN0QkMsS0FBRyxFQUFFLHFCQURpQjtBQUV0QkMsSUFBRSxFQUFFLGFBRmtCO0FBR3RCQyxLQUFHLEVBQUUsa0JBSGlCO0FBSXRCQyxLQUFHLEVBQUUsa0JBSmlCO0FBS3RCQyxLQUFHLEVBQUUsc0JBTGlCO0FBTXRCQyxTQUFPLEVBQUUsU0FOYTtBQU90QkMsSUFBRSxFQUFFLGlCQVBrQjtBQVF0QkMsS0FBRyxFQUFFLHdCQVJpQjtBQVN0QkMsS0FBRyxFQUFFLDBCQVRpQjtBQVV0QkMsSUFBRSxFQUFFLG9CQVZrQjtBQVd0QkMsS0FBRyxFQUFFLDRCQVhpQjtBQVl0QkMsS0FBRyxFQUFFLG1CQVppQjtBQWF0QkMsS0FBRyxFQUFFLGNBYmlCO0FBY3RCQyxLQUFHLEVBQUUscUJBZGlCO0FBZXRCQyxJQUFFLEVBQUUsZ0JBZmtCO0FBZ0J0QkMsTUFBSSxFQUFFLHFDQWhCZ0I7QUFpQnRCQyxLQUFHLEVBQUUsNEJBakJpQjtBQWtCdEJDLE1BQUksRUFBRTtBQWxCZ0IsQ0FBeEI7O0FBcUJBLFNBQVNDLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCQyxjQUE3QixFQUE2Q0MsaUJBQTdDLEVBQWdFQyxTQUFoRSxFQUEyRTtBQUN6RSxNQUFJQyxjQUFjLHFCQUFRSCxjQUFSLENBQWxCOztBQUNBRyxnQkFBYyxDQUFDRCxTQUFELENBQWQsR0FBNEJILEtBQUssSUFBSSxJQUFyQztBQUNBRSxtQkFBaUIsQ0FBQ0UsY0FBRCxDQUFqQjtBQUNEOztBQUVELFNBQVNDLGdCQUFULENBQTBCSixjQUExQixFQUEwQztBQUN4QztBQUNBLE1BQU1LLFlBQVksR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlQLGNBQVosRUFDbEJRLE1BRGtCLENBQ1gsVUFBQzlCLEdBQUQ7QUFBQSxXQUFTc0IsY0FBYyxDQUFDdEIsR0FBRCxDQUF2QjtBQUFBLEdBRFcsRUFFbEIrQixHQUZrQixDQUVkLFVBQUMvQixHQUFELEVBQVM7QUFDWixxQkFBVUEsR0FBVixjQUFpQnNCLGNBQWMsQ0FBQ3RCLEdBQUQsQ0FBL0I7QUFDRCxHQUprQixFQUtsQmdDLElBTGtCLENBS2IsR0FMYSxDQUFyQjtBQU1BLG9CQUFXTCxZQUFYO0FBQ0Q7O0FBRWMsU0FBU00sY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0I7QUFBQTs7QUFBQTs7QUFDNUMsTUFBTUMsZ0JBQWdCLEdBQUdDLCtEQUFhLENBQUM7QUFBRUMsU0FBSyxFQUFFO0FBQVQsR0FBRCxDQUF0QztBQUNBLE1BQU1DLE9BQU8sR0FBR0Msc0RBQVMsRUFBekI7QUFGNEMsTUFJMUNqQixjQUowQyxHQVN4Q1ksS0FUd0MsQ0FJMUNaLGNBSjBDO0FBQUEsTUFLMUNDLGlCQUwwQyxHQVN4Q1csS0FUd0MsQ0FLMUNYLGlCQUwwQztBQUFBLE1BTTFDaUIsYUFOMEMsR0FTeENOLEtBVHdDLENBTTFDTSxhQU4wQztBQUFBLE1BTzFDQyxnQkFQMEMsR0FTeENQLEtBVHdDLENBTzFDTyxnQkFQMEM7QUFBQSxNQVExQ0MsVUFSMEMsR0FTeENSLEtBVHdDLENBUTFDUSxVQVIwQztBQVc1Q0Msd0RBQUEsQ0FBZ0IsWUFBTTtBQUNwQkwsV0FBTyxDQUFDTSxPQUFSLENBQWdCO0FBQ2RDLGNBQVEsRUFBRVAsT0FBTyxDQUFDTyxRQURKO0FBRWRDLFlBQU0sRUFBRXBCLGdCQUFnQixDQUFDSixjQUFEO0FBRlYsS0FBaEI7QUFJRCxHQUxELEVBS0csQ0FBQ0EsY0FBRCxFQUFpQmdCLE9BQWpCLENBTEg7QUFPQSxzQkFDRSw4REFBQyx3REFBRDtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUEsZUFDR0gsZ0JBQWdCLGdCQUNmLDhEQUFDLHdEQUFEO0FBQUEsNkJBQ0UsOERBQUMsd0RBQUQ7QUFBSyxpQkFBUyxtQkFBZDtBQUFBLCtCQUNFLDhEQUFDLHdEQUFEO0FBQUEsaUNBQ0UsOERBQUMsaUVBQUQ7QUFDRSxxQkFBUyxFQUNQYixjQUFjLENBQUN5QixNQUFmLEdBQ0kseUJBREosR0FFSSwyQkFKUjtBQU9FLGNBQUUsRUFBQyxRQVBMO0FBUUUsaUJBQUssRUFBRXpCLGNBQWMsQ0FBQ3lCLE1BQWYsSUFBeUIsYUFSbEM7QUFTRSxvQkFBUSxFQUFFLGtCQUFDQyxDQUFEO0FBQUEscUJBQ1I1QixZQUFZLENBQ1Y0QixDQUFDLENBQUNDLE1BQUYsQ0FBUzVCLEtBREMsRUFFVkMsY0FGVSxFQUdWQyxpQkFIVSxFQUlWLFFBSlUsQ0FESjtBQUFBLGFBVFo7QUFBQSxvQ0FrQkU7QUFBUSxtQkFBSyxFQUFDLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBbEJGLEVBbUJHekIsY0FBYyxDQUFDaUMsR0FBZixDQUFtQixVQUFDbUIsYUFBRCxFQUFtQjtBQUNyQyxrQ0FDRTtBQUFnQyxxQkFBSyxFQUFFQSxhQUFhLENBQUNuRCxLQUFyRDtBQUFBLDBCQUNHbUQsYUFBYSxDQUFDbkQ7QUFEakIsaUJBQWFtRCxhQUFhLENBQUNsRCxHQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGO0FBS0QsYUFOQSxDQW5CSDtBQUFBLGFBTU0sUUFOTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixPQUFTLHFCQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEZSxnQkFtQ2YsOERBQUMsaURBQUQ7QUFDRSxvQkFBYyxFQUFFc0IsY0FEbEI7QUFFRSxrQkFBWSxFQUFFRixZQUZoQjtBQUdFLHVCQUFpQixFQUFFRyxpQkFIckI7QUFJRSxtQkFBYSxFQUFFekI7QUFKakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBDSixlQTJDRSw4REFBQyx3REFBRDtBQUEyQixRQUFFLEVBQUUsQ0FBL0I7QUFBa0MsUUFBRSxFQUFDLE1BQXJDO0FBQUEsNkJBQ0UsOERBQUMsd0RBQUQ7QUFDRSxpQkFBUyw0QkFDUHdCLGNBQWMsQ0FBQzZCLFNBQWYsR0FDSSw2QkFESixHQUVJLCtCQUhHLE1BRFg7QUFBQSwrQkFPRSw4REFBQyx3REFBRDtBQUFBLGlDQUNFLDhEQUFDLGlFQUFEO0FBQ0UscUJBQVMsRUFDUDdCLGNBQWMsQ0FBQzZCLFNBQWYsR0FDSSx5QkFESixHQUVJLDJCQUpSO0FBT0UsY0FBRSxFQUFDLFFBUEw7QUFRRSxpQkFBSyxFQUFFN0IsY0FBYyxDQUFDNkIsU0FBZixJQUE0QixlQVJyQztBQVNFLG9CQUFRLEVBQUUsa0JBQUNILENBQUQ7QUFBQSxxQkFDUjVCLFlBQVksQ0FDVjRCLENBQUMsQ0FBQ0MsTUFBRixDQUFTNUIsS0FEQyxFQUVWQyxjQUZVLEVBR1ZDLGlCQUhVLEVBSVYsV0FKVSxDQURKO0FBQUEsYUFUWjtBQUFBLG9DQWtCRTtBQUFRLG1CQUFLLEVBQUMsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFsQkYsRUFtQkdtQixVQUFVLENBQUNYLEdBQVgsQ0FBZSxVQUFDb0IsU0FBRCxFQUFlO0FBQzdCLGtDQUNFO0FBQXdCLHFCQUFLLEVBQUVBLFNBQS9CO0FBQUEsMEJBQ0dsRCxlQUFlLENBQUNrRCxTQUFELENBQWYsSUFBOEJBO0FBRGpDLGlCQUFhQSxTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREY7QUFLRCxhQU5BLENBbkJIO0FBQUEsYUFNTSxRQU5OO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLE9BQVMsaUJBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTNDRixlQWtGRSw4REFBQyx3REFBRDtBQUE2QixlQUFTLEVBQUMsVUFBdkM7QUFBa0QsUUFBRSxFQUFDLE1BQXJEO0FBQUEsNkJBQ0UsOERBQUMsd0RBQUQ7QUFBSyxpQkFBUyxFQUFDLE9BQWY7QUFBQSwrQkFDRSw4REFBQyx1REFBRDtBQUNFLHVCQUFhLEVBQUVYLGFBRGpCO0FBRUUsMEJBQWdCLEVBQUVDO0FBRnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsT0FBUyxtQkFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbEZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNkZEOztHQS9HdUJSLGM7VUFDR0csMkQsRUFDVEcsa0Q7OztLQUZNTixjIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3RzLjM5OTBlODk4MGYyNWM3OTFhNDExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUm93IGZyb20gXCJyZWFjdC1ib290c3RyYXAvUm93XCI7XHJcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db2xcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtXCI7XHJcbmltcG9ydCB7IHVzZU1lZGlhUXVlcnkgfSBmcm9tIFwicmVhY3QtcmVzcG9uc2l2ZVwiO1xyXG5pbXBvcnQgUHJvamVjdExpc3RUb2dnbGUgZnJvbSBcIi4vUHJvamVjdExpc3RUb2dnbGVcIjtcclxuaW1wb3J0IEZpbHRlcnNMaXN0IGZyb20gXCIuL0ZpbHRlcnNMaXN0XCI7XHJcblxyXG5jb25zdCBTVEFUVVNfRklMVEVSUyA9IFtcclxuICB7IGxhYmVsOiBcIk5lZWRzIFNjb3BpbmdcIiwga2V5OiBcIk5lZWRzIFNjb3BpbmdcIiB9LFxyXG4gIHsgbGFiZWw6IFwiQmFja2xvZ1wiLCBrZXk6IFwiQmFja2xvZ1wiIH0sXHJcbiAgeyBsYWJlbDogXCJJbiBQcm9ncmVzc1wiLCBrZXk6IFwiSW4gUHJvZ3Jlc3NcIiB9LFxyXG4gIHsgbGFiZWw6IFwiQ29tcGxldGVkXCIsIGtleTogXCJDb21wbGV0ZWRcIiB9LFxyXG5dO1xyXG5cclxuY29uc3QgV09SS0dST1VQX05BTUVTID0ge1xyXG4gIEFNRDogXCJBcnRlcmlhbCBNYW5hZ2VtZW50XCIsXHJcbiAgVlo6IFwiVmlzaW9uIFplcm9cIixcclxuICBTTUI6IFwiU2lnbnMgJiBNYXJraW5nc1wiLFxyXG4gIENQTzogXCJDYXBpdGFsIFBsYW5uaW5nXCIsXHJcbiAgRFRTOiBcIkRhdGEgJiBUZWNoIFNlcnZpY2VzXCIsXHJcbiAgRmluYW5jZTogXCJGaW5hbmNlXCIsXHJcbiAgSFI6IFwiSHVtYW4gUmVzb3VyY2VzXCIsXHJcbiAgT09EOiBcIk9mZmljZSBvZiB0aGUgRGlyZWN0b3JcIixcclxuICBPU0U6IFwiT2ZmaWNlIG9mIFNwZWNpYWwgRXZlbnRzXCIsXHJcbiAgUEU6IFwiUGFya2luZyBFbnRlcnByaXNlXCIsXHJcbiAgUElPOiBcIlBhcmtpbmcgSW5mb3JtYXRpb24gT2ZmaWNlXCIsXHJcbiAgUFdEOiBcIlB1YmxpYyBXb3JrcyBEZXB0XCIsXHJcbiAgUk9XOiBcIlJpZ2h0IG9mIFdheVwiLFxyXG4gIFNERDogXCJTeXN0ZW1zIERldmVsb3BtZW50XCIsXHJcbiAgU006IFwiU21hcnQgTW9iaWxpdHlcIixcclxuICBURFNEOiBcIlRyYW5zcG9ydGF0aW9uIERldmVsb3BtZW50IFNlcnZpY2VzXCIsXHJcbiAgVEVEOiBcIlRyYW5zcG9ydGF0aW9uIEVuZ2luZWVyaW5nXCIsXHJcbiAgQVRTRDogXCJBY3RpdmUgVHJhbnNwb3J0YXRpb24gJiBTdHJlZXQgRGVzaWduXCIsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVDaGFuZ2UodmFsdWUsIGN1cnJlbnRGaWx0ZXJzLCBzZXRDdXJyZW50RmlsdGVycywgZmlsdGVyS2V5KSB7XHJcbiAgbGV0IG11dGFibGVGaWx0ZXJzID0geyAuLi5jdXJyZW50RmlsdGVycyB9O1xyXG4gIG11dGFibGVGaWx0ZXJzW2ZpbHRlcktleV0gPSB2YWx1ZSB8fCBudWxsO1xyXG4gIHNldEN1cnJlbnRGaWx0ZXJzKG11dGFibGVGaWx0ZXJzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0U2VhcmNoUGF0aChjdXJyZW50RmlsdGVycykge1xyXG4gIC8vIGZvcm1hdCB0aGUgc2VhcmNoIHBhdGggdG8gbWF0Y2ggY3VycmVudGx5IHNlbGVjdGVkIGZpbHRlcnNcclxuICBjb25zdCBzZWFyY2hLd2FyZ3MgPSBPYmplY3Qua2V5cyhjdXJyZW50RmlsdGVycylcclxuICAgIC5maWx0ZXIoKGtleSkgPT4gY3VycmVudEZpbHRlcnNba2V5XSlcclxuICAgIC5tYXAoKGtleSkgPT4ge1xyXG4gICAgICByZXR1cm4gYCR7a2V5fT0ke2N1cnJlbnRGaWx0ZXJzW2tleV19YDtcclxuICAgIH0pXHJcbiAgICAuam9pbihcIiZcIik7XHJcbiAgcmV0dXJuIGA/JHtzZWFyY2hLd2FyZ3N9YDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdEZpbHRlcnMocHJvcHMpIHtcclxuICBjb25zdCBpc1RhYmxldE9yTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh7IHF1ZXJ5OiBcIihtYXgtd2lkdGg6IDk5NnB4KVwiIH0pO1xyXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7XHJcbiAgICBjdXJyZW50RmlsdGVycyxcclxuICAgIHNldEN1cnJlbnRGaWx0ZXJzLFxyXG4gICAgc2hvd0NoYXJ0VmlldyxcclxuICAgIHNldFNob3dDaGFydFZpZXcsXHJcbiAgICB3b3JrZ3JvdXBzLFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGhpc3RvcnkucmVwbGFjZSh7XHJcbiAgICAgIHBhdGhuYW1lOiBoaXN0b3J5LnBhdGhuYW1lLFxyXG4gICAgICBzZWFyY2g6IGZvcm1hdFNlYXJjaFBhdGgoY3VycmVudEZpbHRlcnMpLFxyXG4gICAgfSk7XHJcbiAgfSwgW2N1cnJlbnRGaWx0ZXJzLCBoaXN0b3J5XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Um93IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgIHtpc1RhYmxldE9yTW9iaWxlID8gKFxyXG4gICAgICAgIDxDb2wga2V5PVwicHJvamVjdFN0YXR1c0ZpbHRlclwiPlxyXG4gICAgICAgICAgPFJvdyBjbGFzc05hbWU9e2BiZy1saWdodCBoLTEwMCBgfT5cclxuICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICBjdXJyZW50RmlsdGVycy5zdGF0dXNcclxuICAgICAgICAgICAgICAgICAgICA/IFwid29ya2dyb3VwLXNlbGVjdC1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJ3b3JrZ3JvdXAtc2VsZWN0LWluYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGtleT1cInN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICBhcz1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y3VycmVudEZpbHRlcnMuc3RhdHVzIHx8IFwiSW4gUHJvZ3Jlc3NcIn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlKFxyXG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRGaWx0ZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRGaWx0ZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3RhdHVzXCJcclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5Qcm9qZWN0IFN0YXR1czwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAge1NUQVRVU19GSUxURVJTLm1hcCgocHJvamVjdFN0YXR1cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtwcm9qZWN0U3RhdHVzLmtleX0gdmFsdWU9e3Byb2plY3RTdGF0dXMubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge3Byb2plY3RTdGF0dXMubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbD5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8RmlsdGVyc0xpc3RcclxuICAgICAgICAgIGN1cnJlbnRGaWx0ZXJzPXtjdXJyZW50RmlsdGVyc31cclxuICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgc2V0Q3VycmVudEZpbHRlcnM9e3NldEN1cnJlbnRGaWx0ZXJzfVxyXG4gICAgICAgICAgc3RhdHVzRmlsdGVycz17U1RBVFVTX0ZJTFRFUlN9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAgPENvbCBrZXk9XCJ3b3JrZ3JvdXBGaWx0ZXJcIiBtZD17Nn0gbGc9XCJhdXRvXCI+XHJcbiAgICAgICAgPFJvd1xyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgYmctbGlnaHQgaC0xMDAgICR7XHJcbiAgICAgICAgICAgIGN1cnJlbnRGaWx0ZXJzLndvcmtncm91cFxyXG4gICAgICAgICAgICAgID8gXCJ3b3JrZ3JvdXAtc2VsZWN0LXJvdy1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgIDogXCJ3b3JrZ3JvdXAtc2VsZWN0LXJvdy1pbmFjdGl2ZVwiXHJcbiAgICAgICAgICB9IGB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50RmlsdGVycy53b3JrZ3JvdXBcclxuICAgICAgICAgICAgICAgICAgPyBcIndvcmtncm91cC1zZWxlY3QtYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgOiBcIndvcmtncm91cC1zZWxlY3QtaW5hY3RpdmVcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBrZXk9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgIGFzPVwic2VsZWN0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17Y3VycmVudEZpbHRlcnMud29ya2dyb3VwIHx8IFwiQW55IHdvcmtncm91cFwifVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZShcclxuICAgICAgICAgICAgICAgICAgZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRGaWx0ZXJzLFxyXG4gICAgICAgICAgICAgICAgICBzZXRDdXJyZW50RmlsdGVycyxcclxuICAgICAgICAgICAgICAgICAgXCJ3b3JrZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5Bbnkgd29ya2dyb3VwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAge3dvcmtncm91cHMubWFwKCh3b3JrZ3JvdXApID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXt3b3JrZ3JvdXB9IHZhbHVlPXt3b3JrZ3JvdXB9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtXT1JLR1JPVVBfTkFNRVNbd29ya2dyb3VwXSB8fCB3b3JrZ3JvdXB9XHJcbiAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2w+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgPC9Db2w+XHJcbiAgICAgIDxDb2wga2V5PVwicHJvamVjdExpc3RUb2dnbGVcIiBjbGFzc05hbWU9XCJiZy1saWdodFwiIG1kPVwiYXV0b1wiPlxyXG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiaC0xMDBcIj5cclxuICAgICAgICAgIDxQcm9qZWN0TGlzdFRvZ2dsZVxyXG4gICAgICAgICAgICBzaG93Q2hhcnRWaWV3PXtzaG93Q2hhcnRWaWV3fVxyXG4gICAgICAgICAgICBzZXRTaG93Q2hhcnRWaWV3PXtzZXRTaG93Q2hhcnRWaWV3fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgPC9Db2w+XHJcbiAgICA8L1Jvdz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=