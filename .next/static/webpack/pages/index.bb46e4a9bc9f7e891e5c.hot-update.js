self["webpackHotUpdate_N_E"]("pages/index",{

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
/* harmony import */ var _src_shared_IssuesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/shared/IssuesContext */ "./src/shared/IssuesContext.js");
/* harmony import */ var _src_shared_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/shared/Page */ "./src/shared/Page.jsx");
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

  var context = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(_src_shared_IssuesContext__WEBPACK_IMPORTED_MODULE_2__.default);
  var projects = context.projectIssues;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_shared_Page__WEBPACK_IMPORTED_MODULE_3__.default, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiU2VydmljZUl0ZW0iLCJwcm9wcyIsImljb24iLCJjb250ZW50IiwiY29sb3IiLCJIb21lVmlldyIsImNvbnRleHQiLCJSZWFjdCIsIklzc3Vlc0NvbnRleHQiLCJwcm9qZWN0cyIsInByb2plY3RJc3N1ZXMiLCJ2ZXJ0aWNhbEFsaWduIiwibWFwIiwicHJvamVjdCIsImlzRmVhdHVyZWQiLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQUEsTUFDbEJDLElBRGtCLEdBQ0FELEtBREEsQ0FDbEJDLElBRGtCO0FBQUEsTUFDWkMsT0FEWSxHQUNBRixLQURBLENBQ1pFLE9BRFk7QUFFMUIsc0JBQ0UsOERBQUMsd0RBQUQ7QUFBSyxNQUFFLEVBQUUsQ0FBVDtBQUFZLGFBQVMsRUFBQyxNQUF0QjtBQUFBLDJCQUNFLDhEQUFDLHdEQUFEO0FBQUEsOEJBQ0UsOERBQUMsd0RBQUQ7QUFBSyxVQUFFLEVBQUMsTUFBUjtBQUFlLGlCQUFTLEVBQUMsTUFBekI7QUFBQSwrQkFDRTtBQUFNLGVBQUssRUFBRTtBQUFFQyxpQkFBSyxFQUFFO0FBQVQsV0FBYjtBQUFBLGlDQUNFO0FBQUEsc0JBQUtGO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFNRSw4REFBQyx3REFBRDtBQUFBLCtCQUNFO0FBQUEsb0JBQUtDO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFB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OERBQUMsd0RBQUQ7QUFBMEIsY0FBRSxFQUFFLENBQTlCO0FBQWlDLHFCQUFTLEVBQUMsU0FBM0M7QUFBQSxtQ0FDRSw4REFBQyxtRUFBRDtBQUFxQixrQkFBSSxFQUFDLFNBQTFCO0FBQW9DLG1CQUFLLEVBQUVEO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixhQUFVQSxPQUFPLENBQUNFLE1BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREssR0FJSCxJQUpKO0FBS0QsU0FOQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUE4RUQ7O0dBbEZ1QlYsUTs7TUFBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iYjQ2ZTRhOWJjOWY3ZTg5MWU1Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm93IGZyb20gXCJyZWFjdC1ib290c3RyYXAvUm93XCI7XHJcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db2xcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJyZWFjdC1ib290c3RyYXAvSW1hZ2VcIjtcclxuaW1wb3J0IHsgRmFHbG9iZSwgRmFVc2Vyc0NvZywgRmFCdXNpbmVzc1RpbWUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuaW1wb3J0IHsgTWRXZWIgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcclxuXHJcbmltcG9ydCBJc3N1ZXNDb250ZXh0IGZyb20gXCIuLi9zcmMvc2hhcmVkL0lzc3Vlc0NvbnRleHRcIjtcclxuaW1wb3J0IFBhZ2UgZnJvbSBcIi4uL3NyYy9zaGFyZWQvUGFnZVwiO1xyXG5pbXBvcnQgSW5kZXhJc3NzdWVMaXN0SXRlbSBmcm9tIFwiLi4vc3JjL3NoYXJlZC9JbmRleElzc3VlTGlzdEl0ZW1cIjtcclxuXHJcbmZ1bmN0aW9uIFNlcnZpY2VJdGVtKHByb3BzKSB7XHJcbiAgY29uc3QgeyBpY29uLCBjb250ZW50IH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPENvbCBtZD17M30gY2xhc3NOYW1lPVwicGItNFwiPlxyXG4gICAgICA8Um93PlxyXG4gICAgICAgIDxDb2wgeHM9XCJhdXRvXCIgY2xhc3NOYW1lPVwicHItMFwiPlxyXG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiIzAwYmZhNVwiIH19PlxyXG4gICAgICAgICAgICA8aDE+e2ljb259PC9oMT5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgPGg1Pntjb250ZW50fTwvaDU+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC9Db2w+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVZpZXcocHJvcHMpIHtcclxuICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChJc3N1ZXNDb250ZXh0KTtcclxuICBjb25zdCBwcm9qZWN0cyA9IGNvbnRleHQucHJvamVjdElzc3VlcztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxQYWdlIGZsdWlkIG5hdiBoaWRlU2VwYXJhdG9yIGZvb3Rlcj5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgPENvbCB4cz17MX0gbWQ9ezJ9PjwvQ29sPlxyXG4gICAgICAgICAgPENvbCBzbT17MTJ9IG1kPXs5fSBsZz17NH0gY2xhc3NOYW1lPVwicHktNSBweC00IHRleHQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaG9tZXBhZ2UtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5UZWNoIHN1cHBvcnQgZm9yIEFUWCBtb2JpbGl0eTwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgV2UgYnVpbGQgYW5kIGJ1eSB0ZWNobm9sb2d5IHRvIGhlbHAgY2l0eSBzdGFmZiB0YWNrbGUgQXVzdGluJ3NcclxuICAgICAgICAgICAgICBtb2JpbGl0eSBjaGFsbGVuZ2VzLiBXZSdyZSBvYnNlc3NlZCB3aXRoIGVmZmljaWVuY2llcywgb3BlbiBkYXRhLFxyXG4gICAgICAgICAgICAgIGFuZCBkZWxpdmVyaW5nIGh1bWFuLWNlbnRlcmVkIHRlY2ggdG8gZ292ZXJubWVudCBzZXJ2aWNlcy5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIGxnPXs0fSBjbGFzc05hbWU9XCJteS1hdXRvIGQtbm9uZSBkLWxnLWJsb2NrXCI+XHJcbiAgICAgICAgICAgIHsvKiBoaWRkZW4gb24geHMgYW5kIHNtICovfVxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvc3BvcnRzLmpwZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiSWxsdXN0cmF0aW9uIG9mIGEgZ3JlZW4gYmljeWNsZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8Um93IGNsYXNzTmFtZT1cInB5LTMgdGV4dC1wcmltYXJ5IGJnLWxpZ2h0XCI+XHJcbiAgICAgICAgICA8Q29sIG1kPXsyfT48L0NvbD5cclxuICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICA8c3Ryb25nPldlJ3JlIGhlcmUgdG8gaGVscDwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgYmctbGlnaHRcIj5cclxuICAgICAgICAgIDxDb2wgbWQ9ezJ9PjwvQ29sPlxyXG4gICAgICAgICAgPFNlcnZpY2VJdGVtXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJNb2Rlcm5pemUgc29mdHdhcmUgZGV2ZWxvcG1lbnQgcHJvY2Vzc2VzIHdoaWxlIGludHJvZHVjaW5nIGdvb2QgYWdpbGUgYW5kIGh1bWFuLWNlbnRlcmVkIGRlc2lnbiBwcmFjdGljZXNcIlxyXG4gICAgICAgICAgICBpY29uPXs8RmFVc2Vyc0NvZyBzdHlsZT17eyB2ZXJ0aWNhbEFsaWduOiBcInRvcFwiIH19IC8+fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxDb2wgbWQ9ezJ9PjwvQ29sPlxyXG4gICAgICAgICAgPFNlcnZpY2VJdGVtXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJEaWdpdGl6ZSBhbmQgc3RyZWFtbGluZSBpbnRlcm5hbCBzeXN0ZW1zIHRvIHNhdmUgdGltZSBhbmQgdW5sb2NrIGluc2lnaHRzIGZyb20gZGF0YVwiXHJcbiAgICAgICAgICAgIGljb249ezxGYUJ1c2luZXNzVGltZSBzdHlsZT17eyB2ZXJ0aWNhbEFsaWduOiBcInRvcFwiIH19IC8+fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxDb2wgbWQ9ezJ9PjwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPVwicGItNCB0ZXh0LXByaW1hcnkgYmctbGlnaHRcIj5cclxuICAgICAgICAgIDxDb2wgbWQ9ezJ9PjwvQ29sPlxyXG4gICAgICAgICAgPFNlcnZpY2VJdGVtXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJJbXByb3ZlIHB1YmxpYy1mYWNpbmcgc2VydmljZXMgbGlrZSB3ZWJzaXRlcyBvciBhcHBsaWNhdGlvbnNcIlxyXG4gICAgICAgICAgICBpY29uPXs8TWRXZWIgc3R5bGU9e3sgdmVydGljYWxBbGlnbjogXCJ0b3BcIiB9fSAvPn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Q29sIG1kPXsyfT48L0NvbD5cclxuICAgICAgICAgIDxTZXJ2aWNlSXRlbVxyXG4gICAgICAgICAgICBjb250ZW50PVwiTWFuYWdlIGdlb3NwYXRpYWwgZGF0YSBhbmQgcHVibGlzaCBpdCBvbiB0aGUgd2ViXCJcclxuICAgICAgICAgICAgaWNvbj17PEZhR2xvYmUgc3R5bGU9e3sgdmVydGljYWxBbGlnbjogXCJ0b3BcIiB9fSAvPn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Q29sIG1kPXsyfT48L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8Um93IGNsYXNzTmFtZT1cInB0LTMgcGItNCB0ZXh0LXByaW1hcnlcIj5cclxuICAgICAgICAgIDxDb2wgbWQ9ezJ9PjwvQ29sPlxyXG4gICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+RmVhdHVyZWQgcHJvamVjdHM8L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0LmlzRmVhdHVyZWQgPyAoXHJcbiAgICAgICAgICAgICAgPENvbCBrZXk9e3Byb2plY3QubnVtYmVyfSBtZD17M30gY2xhc3NOYW1lPVwibS0wIHAtMlwiPlxyXG4gICAgICAgICAgICAgICAgPEluZGV4SXNzc3VlTGlzdEl0ZW0gdHlwZT1cInByb2plY3RcIiBpc3N1ZT17cHJvamVjdH0gLz5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgKSA6IG51bGw7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgPC9QYWdlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9