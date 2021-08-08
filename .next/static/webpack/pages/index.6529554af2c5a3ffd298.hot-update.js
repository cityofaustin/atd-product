self["webpackHotUpdate_N_E"]("pages/index",{

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HomeView; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Image */ "./node_modules/react-bootstrap/esm/Image.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var _components_contexts_IssuesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/contexts/IssuesContext */ "./components/contexts/IssuesContext.js");
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Page */ "./components/Page.js");
/* harmony import */ var _src_shared_IndexIssueListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/shared/IndexIssueListItem */ "./src/shared/IndexIssueListItem.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Administrator\\Documents\\Coding\\Austin\\atd-product\\pages\\index.js",
    _s = $RefreshSig$();











function ServiceItem(props) {
  var icon = props.icon,
      content = props.content;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__.default, {
    md: 3,
    className: "pb-4",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__.default, {
        xs: "auto",
        className: "pr-0",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          style: {
            color: "#00bfa5"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            children: icon
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
          children: content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
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

_c = ServiceItem;
function HomeView(props) {
  _s();

  var _this = this;

  var context = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(_components_contexts_IssuesContext__WEBPACK_IMPORTED_MODULE_2__.default);
  var projects = context.projectIssues;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Page__WEBPACK_IMPORTED_MODULE_3__.default, {
      fluid: true,
      nav: true,
      hideSeparator: true,
      footer: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__.default, {
          xs: 1,
          md: 2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__.default, {
          sm: 12,
          md: 9,
          lg: 4,
          className: "py-5 px-4 text-primary",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            className: "homepage-header",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
              children: "Tech support for ATX mobility"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "text-muted",
            children: "We build and buy technology to help city staff tackle Austin's mobility challenges. We're obsessed with efficiencies, open data, and delivering human-centered tech to government services."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__.default, {
          lg: 4,
          className: "my-auto d-none d-lg-block",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_7__.default, {
            fluid: true,
            src: "/assets/sports.jpg",
            alt: "Illustration of a green bicycle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__.default, {
        className: "py-3 text-primary bg-light",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__.default, {
          md: 2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__.default, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
              children: "We're here to help"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__.default, {
        className: "text-primary bg-light",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__.default, {
          md: 2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ServiceItem, {
          content: "Modernize software development processes while introducing good agile and human-centered design practices",
          icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaUsersCog, {
            style: {
              verticalAlign: "top"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__.default, {
          md: 2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ServiceItem, {
          content: "Digitize and streamline internal systems to save time and unlock insights from data",
          icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaBusinessTime, {
            style: {
              verticalAlign: "top"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__.default, {
          md: 2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__.default, {
        className: "pb-4 text-primary bg-light",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__.default, {
          md: 2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ServiceItem, {
          content: "Improve public-facing services like websites or applications",
          icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdWeb, {
            style: {
              verticalAlign: "top"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__.default, {
          md: 2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ServiceItem, {
          content: "Manage geospatial data and publish it on the web",
          icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaGlobe, {
            style: {
              verticalAlign: "top"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__.default, {
          md: 2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__.default, {
        className: "pt-3 pb-4 text-primary",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__.default, {
          md: 2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__.default, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
              children: "Featured projects"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__.default, {
        children: projects.map(function (project) {
          return project.isFeatured ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__.default, {
            md: 3,
            className: "m-0 p-2",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_shared_IndexIssueListItem__WEBPACK_IMPORTED_MODULE_4__.default, {
              type: "project",
              issue: project
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 17
            }, _this)
          }, project.number, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 15
          }, _this) : null;
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_s(HomeView, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");

_c2 = HomeView;

var _c, _c2;

$RefreshReg$(_c, "ServiceItem");
$RefreshReg$(_c2, "HomeView");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZXh0cy9Jc3N1ZXNDb250ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJc3N1ZXNDb250ZXh0IiwiUmVhY3QiLCJTZXJ2aWNlSXRlbSIsInByb3BzIiwiaWNvbiIsImNvbnRlbnQiLCJjb2xvciIsIkhvbWVWaWV3IiwiY29udGV4dCIsInByb2plY3RzIiwicHJvamVjdElzc3VlcyIsInZlcnRpY2FsQWxpZ24iLCJtYXAiLCJwcm9qZWN0IiwiaXNGZWF0dXJlZCIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsSUFBTUEsYUFBYSxnQkFBR0MsMERBQUEsRUFBdEI7QUFDQSwrREFBZUQsYUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVNFLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQUEsTUFDbEJDLElBRGtCLEdBQ0FELEtBREEsQ0FDbEJDLElBRGtCO0FBQUEsTUFDWkMsT0FEWSxHQUNBRixLQURBLENBQ1pFLE9BRFk7QUFFMUIsc0JBQ0UsOERBQUMsd0RBQUQ7QUFBSyxNQUFFLEVBQUUsQ0FBVDtBQUFZLGFBQVMsRUFBQyxNQUF0QjtBQUFBLDJCQUNFLDhEQUFDLHdEQUFEO0FBQUEsOEJBQ0UsOERBQUMsd0RBQUQ7QUFBSyxVQUFFLEVBQUMsTUFBUjtBQUFlLGlCQUFTLEVBQUMsTUFBekI7QUFBQSwrQkFDRTtBQUFNLGVBQUssRUFBRTtBQUFFQyxpQkFBSyxFQUFFO0FBQVQsV0FBYjtBQUFBLGlDQUNFO0FBQUEsc0JBQUtGO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFNRSw4REFBQyx3REFBRDtBQUFBLCtCQUNFO0FBQUEsb0JBQUtDO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFjRDs7S0FoQlFILFc7QUFrQk0sU0FBU0ssUUFBVCxDQUFrQkosS0FBbEIsRUFBeUI7QUFBQTs7QUFBQTs7QUFDdEMsTUFBTUssT0FBTyxHQUFHUCx1REFBQSxDQUFpQkQsdUVBQWpCLENBQWhCO0FBQ0EsTUFBTVMsUUFBUSxHQUFHRCxPQUFPLENBQUNFLGFBQXpCO0FBRUEsc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyxxREFBRDtBQUFNLFdBQUssTUFBWDtBQUFZLFNBQUcsTUFBZjtBQUFnQixtQkFBYSxNQUE3QjtBQUE4QixZQUFNLE1BQXBDO0FBQUEsOEJBQ0UsOERBQUMsd0RBQUQ7QUFBQSxnQ0FDRSw4REFBQyx3REFBRDtBQUFLLFlBQUUsRUFBRSxDQUFUO0FBQVksWUFBRSxFQUFFO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRSw4REFBQyx3REFBRDtBQUFLLFlBQUUsRUFBRSxFQUFUO0FBQWEsWUFBRSxFQUFFLENBQWpCO0FBQW9CLFlBQUUsRUFBRSxDQUF4QjtBQUEyQixtQkFBUyxFQUFDLHdCQUFyQztBQUFBLGtDQUNFO0FBQUkscUJBQVMsRUFBQyxpQkFBZDtBQUFBLG1DQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUlFO0FBQUcscUJBQVMsRUFBQyxZQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQVlFLDhEQUFDLHdEQUFEO0FBQUssWUFBRSxFQUFFLENBQVQ7QUFBWSxtQkFBUyxFQUFDLDJCQUF0QjtBQUFBLGlDQUVFLDhEQUFDLDBEQUFEO0FBQ0UsaUJBQUssTUFEUDtBQUVFLGVBQUcsRUFBQyxvQkFGTjtBQUdFLGVBQUcsRUFBQztBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBc0JFLDhEQUFDLHdEQUFEO0FBQUssaUJBQVMsRUFBQyw0QkFBZjtBQUFBLGdDQUNFLDhEQUFDLHdEQUFEO0FBQUssWUFBRSxFQUFFO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLDhEQUFDLHdEQUFEO0FBQUEsaUNBQ0U7QUFBQSxtQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXRCRixlQThCRSw4REFBQyx3REFBRDtBQUFLLGlCQUFTLEVBQUMsdUJBQWY7QUFBQSxnQ0FDRSw4REFBQyx3REFBRDtBQUFLLFlBQUUsRUFBRTtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRSw4REFBQyxXQUFEO0FBQ0UsaUJBQU8sRUFBQywyR0FEVjtBQUVFLGNBQUksZUFBRSw4REFBQyxzREFBRDtBQUFZLGlCQUFLLEVBQUU7QUFBRUMsMkJBQWEsRUFBRTtBQUFqQjtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQU1FLDhEQUFDLHdEQUFEO0FBQUssWUFBRSxFQUFFO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORixlQU9FLDhEQUFDLFdBQUQ7QUFDRSxpQkFBTyxFQUFDLHFGQURWO0FBRUUsY0FBSSxlQUFFLDhEQUFDLDBEQUFEO0FBQWdCLGlCQUFLLEVBQUU7QUFBRUEsMkJBQWEsRUFBRTtBQUFqQjtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRixlQVdFLDhEQUFDLHdEQUFEO0FBQUssWUFBRSxFQUFFO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E5QkYsZUEyQ0UsOERBQUMsd0RBQUQ7QUFBSyxpQkFBUyxFQUFDLDRCQUFmO0FBQUEsZ0NBQ0UsOERBQUMsd0RBQUQ7QUFBSyxZQUFFLEVBQUU7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUsOERBQUMsV0FBRDtBQUNFLGlCQUFPLEVBQUMsOERBRFY7QUFFRSxjQUFJLGVBQUUsOERBQUMsaURBQUQ7QUFBTyxpQkFBSyxFQUFFO0FBQUVBLDJCQUFhLEVBQUU7QUFBakI7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQU1FLDhEQUFDLHdEQUFEO0FBQUssWUFBRSxFQUFFO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORixlQU9FLDhEQUFDLFdBQUQ7QUFDRSxpQkFBTyxFQUFDLGtEQURWO0FBRUUsY0FBSSxlQUFFLDhEQUFDLG1EQUFEO0FBQVMsaUJBQUssRUFBRTtBQUFFQSwyQkFBYSxFQUFFO0FBQWpCO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBGLGVBV0UsOERBQUMsd0RBQUQ7QUFBSyxZQUFFLEVBQUU7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNDRixlQXdERSw4REFBQyx3REFBRDtBQUFLLGlCQUFTLEVBQUMsd0JBQWY7QUFBQSxnQ0FDRSw4REFBQyx3REFBRDtBQUFLLFlBQUUsRUFBRTtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRSw4REFBQyx3REFBRDtBQUFBLGlDQUNFO0FBQUEsbUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4REYsZUFnRUUsOERBQUMsd0RBQUQ7QUFBQSxrQkFDR0YsUUFBUSxDQUFDRyxHQUFULENBQWEsVUFBQ0MsT0FBRCxFQUFhO0FBQ3pCLGlCQUFPQSxPQUFPLENBQUNDLFVBQVIsZ0JBQ0wsOERBQUMsd0RBQUQ7QUFBMEIsY0FBRSxFQUFFLENBQTlCO0FBQWlDLHFCQUFTLEVBQUMsU0FBM0M7QUFBQSxtQ0FDRSw4REFBQyxtRUFBRDtBQUFxQixrQkFBSSxFQUFDLFNBQTFCO0FBQW9DLG1CQUFLLEVBQUVEO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixhQUFVQSxPQUFPLENBQUNFLE1BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREssR0FJSCxJQUpKO0FBS0QsU0FOQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUE4RUQ7O0dBbEZ1QlIsUTs7TUFBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42NTI5NTU0YWYyYzVhM2ZmZDI5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5jb25zdCBJc3N1ZXNDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5leHBvcnQgZGVmYXVsdCBJc3N1ZXNDb250ZXh0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSb3cgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Sb3dcIjtcclxuaW1wb3J0IENvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9JbWFnZVwiO1xyXG5pbXBvcnQgeyBGYUdsb2JlLCBGYVVzZXJzQ29nLCBGYUJ1c2luZXNzVGltZSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgeyBNZFdlYiB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5cclxuaW1wb3J0IElzc3Vlc0NvbnRleHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGV4dHMvSXNzdWVzQ29udGV4dFwiO1xyXG5pbXBvcnQgUGFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9QYWdlXCI7XHJcbmltcG9ydCBJbmRleElzc3N1ZUxpc3RJdGVtIGZyb20gXCIuLi9zcmMvc2hhcmVkL0luZGV4SXNzdWVMaXN0SXRlbVwiO1xyXG5cclxuZnVuY3Rpb24gU2VydmljZUl0ZW0ocHJvcHMpIHtcclxuICBjb25zdCB7IGljb24sIGNvbnRlbnQgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29sIG1kPXszfSBjbGFzc05hbWU9XCJwYi00XCI+XHJcbiAgICAgIDxSb3c+XHJcbiAgICAgICAgPENvbCB4cz1cImF1dG9cIiBjbGFzc05hbWU9XCJwci0wXCI+XHJcbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjMDBiZmE1XCIgfX0+XHJcbiAgICAgICAgICAgIDxoMT57aWNvbn08L2gxPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2w+XHJcbiAgICAgICAgICA8aDU+e2NvbnRlbnR9PC9oNT5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8L0NvbD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lVmlldyhwcm9wcykge1xyXG4gIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KElzc3Vlc0NvbnRleHQpO1xyXG4gIGNvbnN0IHByb2plY3RzID0gY29udGV4dC5wcm9qZWN0SXNzdWVzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFBhZ2UgZmx1aWQgbmF2IGhpZGVTZXBhcmF0b3IgZm9vdGVyPlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICA8Q29sIHhzPXsxfSBtZD17Mn0+PC9Db2w+XHJcbiAgICAgICAgICA8Q29sIHNtPXsxMn0gbWQ9ezl9IGxnPXs0fSBjbGFzc05hbWU9XCJweS01IHB4LTQgdGV4dC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJob21lcGFnZS1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICA8c3Ryb25nPlRlY2ggc3VwcG9ydCBmb3IgQVRYIG1vYmlsaXR5PC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICBXZSBidWlsZCBhbmQgYnV5IHRlY2hub2xvZ3kgdG8gaGVscCBjaXR5IHN0YWZmIHRhY2tsZSBBdXN0aW4nc1xyXG4gICAgICAgICAgICAgIG1vYmlsaXR5IGNoYWxsZW5nZXMuIFdlJ3JlIG9ic2Vzc2VkIHdpdGggZWZmaWNpZW5jaWVzLCBvcGVuIGRhdGEsXHJcbiAgICAgICAgICAgICAgYW5kIGRlbGl2ZXJpbmcgaHVtYW4tY2VudGVyZWQgdGVjaCB0byBnb3Zlcm5tZW50IHNlcnZpY2VzLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgbGc9ezR9IGNsYXNzTmFtZT1cIm15LWF1dG8gZC1ub25lIGQtbGctYmxvY2tcIj5cclxuICAgICAgICAgICAgey8qIGhpZGRlbiBvbiB4cyBhbmQgc20gKi99XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9zcG9ydHMuanBnXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJJbGx1c3RyYXRpb24gb2YgYSBncmVlbiBiaWN5Y2xlXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPVwicHktMyB0ZXh0LXByaW1hcnkgYmctbGlnaHRcIj5cclxuICAgICAgICAgIDxDb2wgbWQ9ezJ9PjwvQ29sPlxyXG4gICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+V2UncmUgaGVyZSB0byBoZWxwPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8Um93IGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBiZy1saWdodFwiPlxyXG4gICAgICAgICAgPENvbCBtZD17Mn0+PC9Db2w+XHJcbiAgICAgICAgICA8U2VydmljZUl0ZW1cclxuICAgICAgICAgICAgY29udGVudD1cIk1vZGVybml6ZSBzb2Z0d2FyZSBkZXZlbG9wbWVudCBwcm9jZXNzZXMgd2hpbGUgaW50cm9kdWNpbmcgZ29vZCBhZ2lsZSBhbmQgaHVtYW4tY2VudGVyZWQgZGVzaWduIHByYWN0aWNlc1wiXHJcbiAgICAgICAgICAgIGljb249ezxGYVVzZXJzQ29nIHN0eWxlPXt7IHZlcnRpY2FsQWxpZ246IFwidG9wXCIgfX0gLz59XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPENvbCBtZD17Mn0+PC9Db2w+XHJcbiAgICAgICAgICA8U2VydmljZUl0ZW1cclxuICAgICAgICAgICAgY29udGVudD1cIkRpZ2l0aXplIGFuZCBzdHJlYW1saW5lIGludGVybmFsIHN5c3RlbXMgdG8gc2F2ZSB0aW1lIGFuZCB1bmxvY2sgaW5zaWdodHMgZnJvbSBkYXRhXCJcclxuICAgICAgICAgICAgaWNvbj17PEZhQnVzaW5lc3NUaW1lIHN0eWxlPXt7IHZlcnRpY2FsQWxpZ246IFwidG9wXCIgfX0gLz59XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPENvbCBtZD17Mn0+PC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJwYi00IHRleHQtcHJpbWFyeSBiZy1saWdodFwiPlxyXG4gICAgICAgICAgPENvbCBtZD17Mn0+PC9Db2w+XHJcbiAgICAgICAgICA8U2VydmljZUl0ZW1cclxuICAgICAgICAgICAgY29udGVudD1cIkltcHJvdmUgcHVibGljLWZhY2luZyBzZXJ2aWNlcyBsaWtlIHdlYnNpdGVzIG9yIGFwcGxpY2F0aW9uc1wiXHJcbiAgICAgICAgICAgIGljb249ezxNZFdlYiBzdHlsZT17eyB2ZXJ0aWNhbEFsaWduOiBcInRvcFwiIH19IC8+fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxDb2wgbWQ9ezJ9PjwvQ29sPlxyXG4gICAgICAgICAgPFNlcnZpY2VJdGVtXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJNYW5hZ2UgZ2Vvc3BhdGlhbCBkYXRhIGFuZCBwdWJsaXNoIGl0IG9uIHRoZSB3ZWJcIlxyXG4gICAgICAgICAgICBpY29uPXs8RmFHbG9iZSBzdHlsZT17eyB2ZXJ0aWNhbEFsaWduOiBcInRvcFwiIH19IC8+fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxDb2wgbWQ9ezJ9PjwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPVwicHQtMyBwYi00IHRleHQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgPENvbCBtZD17Mn0+PC9Db2w+XHJcbiAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5GZWF0dXJlZCBwcm9qZWN0czwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIHtwcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb2plY3QuaXNGZWF0dXJlZCA/IChcclxuICAgICAgICAgICAgICA8Q29sIGtleT17cHJvamVjdC5udW1iZXJ9IG1kPXszfSBjbGFzc05hbWU9XCJtLTAgcC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5kZXhJc3NzdWVMaXN0SXRlbSB0eXBlPVwicHJvamVjdFwiIGlzc3VlPXtwcm9qZWN0fSAvPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICApIDogbnVsbDtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L1BhZ2U+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=