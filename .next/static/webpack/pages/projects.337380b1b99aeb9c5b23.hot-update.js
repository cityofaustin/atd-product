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
      pathname: history.location.pathname,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0c1ZpZXcvUHJvamVjdEZpbHRlcnMuanMiXSwibmFtZXMiOlsiU1RBVFVTX0ZJTFRFUlMiLCJsYWJlbCIsImtleSIsIldPUktHUk9VUF9OQU1FUyIsIkFNRCIsIlZaIiwiU01CIiwiQ1BPIiwiRFRTIiwiRmluYW5jZSIsIkhSIiwiT09EIiwiT1NFIiwiUEUiLCJQSU8iLCJQV0QiLCJST1ciLCJTREQiLCJTTSIsIlREU0QiLCJURUQiLCJBVFNEIiwiaGFuZGxlQ2hhbmdlIiwidmFsdWUiLCJjdXJyZW50RmlsdGVycyIsInNldEN1cnJlbnRGaWx0ZXJzIiwiZmlsdGVyS2V5IiwibXV0YWJsZUZpbHRlcnMiLCJmb3JtYXRTZWFyY2hQYXRoIiwic2VhcmNoS3dhcmdzIiwiT2JqZWN0Iiwia2V5cyIsImZpbHRlciIsIm1hcCIsImpvaW4iLCJQcm9qZWN0RmlsdGVycyIsInByb3BzIiwiaXNUYWJsZXRPck1vYmlsZSIsInVzZU1lZGlhUXVlcnkiLCJxdWVyeSIsImhpc3RvcnkiLCJ1c2VSb3V0ZXIiLCJzaG93Q2hhcnRWaWV3Iiwic2V0U2hvd0NoYXJ0VmlldyIsIndvcmtncm91cHMiLCJSZWFjdCIsInJlcGxhY2UiLCJwYXRobmFtZSIsImxvY2F0aW9uIiwic2VhcmNoIiwic3RhdHVzIiwiZSIsInRhcmdldCIsInByb2plY3RTdGF0dXMiLCJ3b3JrZ3JvdXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGNBQWMsR0FBRyxDQUNyQjtBQUFFQyxPQUFLLEVBQUUsZUFBVDtBQUEwQkMsS0FBRyxFQUFFO0FBQS9CLENBRHFCLEVBRXJCO0FBQUVELE9BQUssRUFBRSxTQUFUO0FBQW9CQyxLQUFHLEVBQUU7QUFBekIsQ0FGcUIsRUFHckI7QUFBRUQsT0FBSyxFQUFFLGFB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QUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixPQUFTLG1CQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE2RkQ7O0dBL0d1QlIsYztVQUNHRywyRCxFQUNURyxrRDs7O0tBRk1OLGMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvamVjdHMuMzM3MzgwYjFiOTlhZWI5YzViMjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSb3cgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Sb3dcIjtcclxuaW1wb3J0IENvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIjtcclxuaW1wb3J0IHsgdXNlTWVkaWFRdWVyeSB9IGZyb20gXCJyZWFjdC1yZXNwb25zaXZlXCI7XHJcbmltcG9ydCBQcm9qZWN0TGlzdFRvZ2dsZSBmcm9tIFwiLi9Qcm9qZWN0TGlzdFRvZ2dsZVwiO1xyXG5pbXBvcnQgRmlsdGVyc0xpc3QgZnJvbSBcIi4vRmlsdGVyc0xpc3RcIjtcclxuXHJcbmNvbnN0IFNUQVRVU19GSUxURVJTID0gW1xyXG4gIHsgbGFiZWw6IFwiTmVlZHMgU2NvcGluZ1wiLCBrZXk6IFwiTmVlZHMgU2NvcGluZ1wiIH0sXHJcbiAgeyBsYWJlbDogXCJCYWNrbG9nXCIsIGtleTogXCJCYWNrbG9nXCIgfSxcclxuICB7IGxhYmVsOiBcIkluIFByb2dyZXNzXCIsIGtleTogXCJJbiBQcm9ncmVzc1wiIH0sXHJcbiAgeyBsYWJlbDogXCJDb21wbGV0ZWRcIiwga2V5OiBcIkNvbXBsZXRlZFwiIH0sXHJcbl07XHJcblxyXG5jb25zdCBXT1JLR1JPVVBfTkFNRVMgPSB7XHJcbiAgQU1EOiBcIkFydGVyaWFsIE1hbmFnZW1lbnRcIixcclxuICBWWjogXCJWaXNpb24gWmVyb1wiLFxyXG4gIFNNQjogXCJTaWducyAmIE1hcmtpbmdzXCIsXHJcbiAgQ1BPOiBcIkNhcGl0YWwgUGxhbm5pbmdcIixcclxuICBEVFM6IFwiRGF0YSAmIFRlY2ggU2VydmljZXNcIixcclxuICBGaW5hbmNlOiBcIkZpbmFuY2VcIixcclxuICBIUjogXCJIdW1hbiBSZXNvdXJjZXNcIixcclxuICBPT0Q6IFwiT2ZmaWNlIG9mIHRoZSBEaXJlY3RvclwiLFxyXG4gIE9TRTogXCJPZmZpY2Ugb2YgU3BlY2lhbCBFdmVudHNcIixcclxuICBQRTogXCJQYXJraW5nIEVudGVycHJpc2VcIixcclxuICBQSU86IFwiUGFya2luZyBJbmZvcm1hdGlvbiBPZmZpY2VcIixcclxuICBQV0Q6IFwiUHVibGljIFdvcmtzIERlcHRcIixcclxuICBST1c6IFwiUmlnaHQgb2YgV2F5XCIsXHJcbiAgU0REOiBcIlN5c3RlbXMgRGV2ZWxvcG1lbnRcIixcclxuICBTTTogXCJTbWFydCBNb2JpbGl0eVwiLFxyXG4gIFREU0Q6IFwiVHJhbnNwb3J0YXRpb24gRGV2ZWxvcG1lbnQgU2VydmljZXNcIixcclxuICBURUQ6IFwiVHJhbnNwb3J0YXRpb24gRW5naW5lZXJpbmdcIixcclxuICBBVFNEOiBcIkFjdGl2ZSBUcmFuc3BvcnRhdGlvbiAmIFN0cmVldCBEZXNpZ25cIixcclxufTtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNoYW5nZSh2YWx1ZSwgY3VycmVudEZpbHRlcnMsIHNldEN1cnJlbnRGaWx0ZXJzLCBmaWx0ZXJLZXkpIHtcclxuICBsZXQgbXV0YWJsZUZpbHRlcnMgPSB7IC4uLmN1cnJlbnRGaWx0ZXJzIH07XHJcbiAgbXV0YWJsZUZpbHRlcnNbZmlsdGVyS2V5XSA9IHZhbHVlIHx8IG51bGw7XHJcbiAgc2V0Q3VycmVudEZpbHRlcnMobXV0YWJsZUZpbHRlcnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRTZWFyY2hQYXRoKGN1cnJlbnRGaWx0ZXJzKSB7XHJcbiAgLy8gZm9ybWF0IHRoZSBzZWFyY2ggcGF0aCB0byBtYXRjaCBjdXJyZW50bHkgc2VsZWN0ZWQgZmlsdGVyc1xyXG4gIGNvbnN0IHNlYXJjaEt3YXJncyA9IE9iamVjdC5rZXlzKGN1cnJlbnRGaWx0ZXJzKVxyXG4gICAgLmZpbHRlcigoa2V5KSA9PiBjdXJyZW50RmlsdGVyc1trZXldKVxyXG4gICAgLm1hcCgoa2V5KSA9PiB7XHJcbiAgICAgIHJldHVybiBgJHtrZXl9PSR7Y3VycmVudEZpbHRlcnNba2V5XX1gO1xyXG4gICAgfSlcclxuICAgIC5qb2luKFwiJlwiKTtcclxuICByZXR1cm4gYD8ke3NlYXJjaEt3YXJnc31gO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0RmlsdGVycyhwcm9wcykge1xyXG4gIGNvbnN0IGlzVGFibGV0T3JNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHsgcXVlcnk6IFwiKG1heC13aWR0aDogOTk2cHgpXCIgfSk7XHJcbiAgY29uc3QgaGlzdG9yeSA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHtcclxuICAgIGN1cnJlbnRGaWx0ZXJzLFxyXG4gICAgc2V0Q3VycmVudEZpbHRlcnMsXHJcbiAgICBzaG93Q2hhcnRWaWV3LFxyXG4gICAgc2V0U2hvd0NoYXJ0VmlldyxcclxuICAgIHdvcmtncm91cHMsXHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaGlzdG9yeS5yZXBsYWNlKHtcclxuICAgICAgcGF0aG5hbWU6IGhpc3RvcnkubG9jYXRpb24ucGF0aG5hbWUsXHJcbiAgICAgIHNlYXJjaDogZm9ybWF0U2VhcmNoUGF0aChjdXJyZW50RmlsdGVycyksXHJcbiAgICB9KTtcclxuICB9LCBbY3VycmVudEZpbHRlcnMsIGhpc3RvcnldKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSb3cgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAge2lzVGFibGV0T3JNb2JpbGUgPyAoXHJcbiAgICAgICAgPENvbCBrZXk9XCJwcm9qZWN0U3RhdHVzRmlsdGVyXCI+XHJcbiAgICAgICAgICA8Um93IGNsYXNzTmFtZT17YGJnLWxpZ2h0IGgtMTAwIGB9PlxyXG4gICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRGaWx0ZXJzLnN0YXR1c1xyXG4gICAgICAgICAgICAgICAgICAgID8gXCJ3b3JrZ3JvdXAtc2VsZWN0LWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIndvcmtncm91cC1zZWxlY3QtaW5hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAga2V5PVwic3RhdHVzXCJcclxuICAgICAgICAgICAgICAgIGFzPVwic2VsZWN0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtjdXJyZW50RmlsdGVycy5zdGF0dXMgfHwgXCJJbiBQcm9ncmVzc1wifVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UoXHJcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEZpbHRlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudEZpbHRlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlByb2plY3QgU3RhdHVzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICB7U1RBVFVTX0ZJTFRFUlMubWFwKChwcm9qZWN0U3RhdHVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3Byb2plY3RTdGF0dXMua2V5fSB2YWx1ZT17cHJvamVjdFN0YXR1cy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdFN0YXR1cy5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxGaWx0ZXJzTGlzdFxyXG4gICAgICAgICAgY3VycmVudEZpbHRlcnM9e2N1cnJlbnRGaWx0ZXJzfVxyXG4gICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICBzZXRDdXJyZW50RmlsdGVycz17c2V0Q3VycmVudEZpbHRlcnN9XHJcbiAgICAgICAgICBzdGF0dXNGaWx0ZXJzPXtTVEFUVVNfRklMVEVSU31cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICA8Q29sIGtleT1cIndvcmtncm91cEZpbHRlclwiIG1kPXs2fSBsZz1cImF1dG9cIj5cclxuICAgICAgICA8Um93XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BiZy1saWdodCBoLTEwMCAgJHtcclxuICAgICAgICAgICAgY3VycmVudEZpbHRlcnMud29ya2dyb3VwXHJcbiAgICAgICAgICAgICAgPyBcIndvcmtncm91cC1zZWxlY3Qtcm93LWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgOiBcIndvcmtncm91cC1zZWxlY3Qtcm93LWluYWN0aXZlXCJcclxuICAgICAgICAgIH0gYH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRGaWx0ZXJzLndvcmtncm91cFxyXG4gICAgICAgICAgICAgICAgICA/IFwid29ya2dyb3VwLXNlbGVjdC1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICA6IFwid29ya2dyb3VwLXNlbGVjdC1pbmFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGtleT1cInN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgYXM9XCJzZWxlY3RcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjdXJyZW50RmlsdGVycy53b3JrZ3JvdXAgfHwgXCJBbnkgd29ya2dyb3VwXCJ9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlKFxyXG4gICAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgY3VycmVudEZpbHRlcnMsXHJcbiAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRGaWx0ZXJzLFxyXG4gICAgICAgICAgICAgICAgICBcIndvcmtncm91cFwiXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkFueSB3b3JrZ3JvdXA8L29wdGlvbj5cclxuICAgICAgICAgICAgICB7d29ya2dyb3Vwcy5tYXAoKHdvcmtncm91cCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3dvcmtncm91cH0gdmFsdWU9e3dvcmtncm91cH0+XHJcbiAgICAgICAgICAgICAgICAgICAge1dPUktHUk9VUF9OQU1FU1t3b3JrZ3JvdXBdIHx8IHdvcmtncm91cH1cclxuICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L0Zvcm0uQ29udHJvbD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L0NvbD5cclxuICAgICAgPENvbCBrZXk9XCJwcm9qZWN0TGlzdFRvZ2dsZVwiIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCIgbWQ9XCJhdXRvXCI+XHJcbiAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJoLTEwMFwiPlxyXG4gICAgICAgICAgPFByb2plY3RMaXN0VG9nZ2xlXHJcbiAgICAgICAgICAgIHNob3dDaGFydFZpZXc9e3Nob3dDaGFydFZpZXd9XHJcbiAgICAgICAgICAgIHNldFNob3dDaGFydFZpZXc9e3NldFNob3dDaGFydFZpZXd9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L0NvbD5cclxuICAgIDwvUm93PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==