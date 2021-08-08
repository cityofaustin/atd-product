self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/NavComponent.js":
/*!************************************!*\
  !*** ./components/NavComponent.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NavComponent; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\Administrator\\Documents\\Coding\\Austin\\atd-product\\components\\NavComponent.js";


var PAGES = [{
  label: "Our work",
  route: "/projects"
}, {
  label: "What we deliver",
  route: "/products"
}, {
  label: "About us",
  route: "/about"
}];

function IconSeparator(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
      className: "flex-grow-1 pl-0",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
        className: "w-100"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
      xs: "auto",
      className: "pt-2 px-sm-0 mx-sm-0",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        className: "float-right",
        height: 17,
        src: "/assets/icos.jpg",
        alt: "Generic placeholder"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
      sm: 1,
      className: "d-none d-sm-block pr-0",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
        className: "w-100"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

_c = IconSeparator;
function NavComponent(props) {
  var _this = this;

  var currentPageRoute = props.currentPageRoute,
      hideSeparator = props.hideSeparator;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
    className: "px-0",
    fluid: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar, {
      expand: "md",
      className: "py-1",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "d-flex flex-nowrap",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar.Brand, {
          href: "/",
          className: "pl-0",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Image, {
            width: 400,
            className: "d-none d-md-inline",
            src: "/assets/new_10_1600.jpg",
            alt: "Generic placeholder"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Image, {
            fluid: true,
            className: "d-inline d-md-none",
            src: "/assets/new_10_1600.jpg",
            alt: "Generic placeholder"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this)]
        }, "logo-img", true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar.Toggle, {
          "aria-controls": "basic-navbar-nav",
          className: "navbar-toggle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar.Collapse, {
        id: "basic-navbar-nav",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav, {
          className: "ml-auto",
          children: [PAGES.map(function (page, idx) {
            var fontWeightClass = currentPageRoute === page.route ? "font-weight-bold" : "";
            var borderClass = idx === 0 ? "" : "navbar-menu-borders";
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex-grow-1 mx-0 my-auto ".concat(borderClass),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav.Link, {
                className: "text-primary text-center px-3 navbar-menu-link ".concat(fontWeightClass),
                href: page.route,
                children: page.label
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 19
              }, _this)
            }, page.route, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 17
            }, _this);
          }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "https://atd.knack.com/dts#new-service-request",
            className: "text-white text-center d-inline d-md-none mt-2",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
              size: "sm",
              children: "Get help"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "https://atd.knack.com/dts#new-service-request",
            className: "text-white text-center d-none d-md-inline mr-0 pl-3 my-auto",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
              size: "sm",
              children: "Get help"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this), !hideSeparator && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        overflowX: "hidden"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IconSeparator, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }, this)]
  }, "nav-container", true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, this);
}
_c2 = NavComponent;

var _c, _c2;

$RefreshReg$(_c, "IconSeparator");
$RefreshReg$(_c2, "NavComponent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZDb21wb25lbnQuanMiXSwibmFtZXMiOlsiUEFHRVMiLCJsYWJlbCIsInJvdXRlIiwiSWNvblNlcGFyYXRvciIsInByb3BzIiwiTmF2Q29tcG9uZW50IiwiY3VycmVudFBhZ2VSb3V0ZSIsImhpZGVTZXBhcmF0b3IiLCJtYXAiLCJwYWdlIiwiaWR4IiwiZm9udFdlaWdodENsYXNzIiwiYm9yZGVyQ2xhc3MiLCJvdmVyZmxvd1giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFVQSxJQUFNQSxLQUFLLEdBQUcsQ0FDWjtBQUFFQyxPQUFLLEVBQUUsVUFBVDtBQUFxQkMsT0FBSyxFQUFFO0FBQTVCLENBRFksRUFFWjtBQUFFRCxPQUFLLEVBQUUsaUJBQVQ7QUFBNEJDLE9BQUssRUFBRTtBQUFuQyxDQUZZLEVBR1o7QUFBRUQsT0FBSyxFQUFFLFVBQVQ7QUFBcUJDLE9BQUssRUFBRTtBQUE1QixDQUhZLENBQWQ7O0FBTUEsU0FBU0MsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDNUIsc0JBQ0UsOERBQUMsZ0RBQUQ7QUFBQSw0QkFDRSw4REFBQyxnREFBRDtBQUFLLGVBQVMsRUFBQyxrQkFBZjtBQUFBLDZCQUNFO0FBQUksaUJBQVMsRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRSw4REFBQyxnREFBRDtBQUFLLFFBQUUsRUFBQyxNQUFSO0FBQWUsZUFBUyxFQUFDLHNCQUF6QjtBQUFBLDZCQUNFO0FBQ0UsaUJBQVMsRUFBQyxhQURaO0FBRUUsY0FBTSxFQUFFLEVBRlY7QUFHRSxXQUFHLEVBQUMsa0JBSE47QUFJRSxXQUFHLEVBQUM7QUFKTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBWUUsOERBQUMsZ0RBQUQ7QUFBSyxRQUFFLEVBQUUsQ0FBVDtB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QTtBQUFBLGNBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBMERHLENBQUNLLGFBQUQsaUJBQ0M7QUFBSyxXQUFLLEVBQUU7QUFBRU0saUJBQVMsRUFBRTtBQUFiLE9BQVo7QUFBQSw2QkFDRSw4REFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBM0RKO0FBQUEsS0FBZSxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtFRDtNQXJFdUJSLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDNjN2MzMGE1ZjQxMjI4MjEyMDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBDb250YWluZXIsXHJcbiAgUm93LFxyXG4gIENvbCxcclxuICBCdXR0b24sXHJcbiAgSW1hZ2UsXHJcbiAgTmF2LFxyXG4gIE5hdmJhcixcclxufSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcblxyXG5jb25zdCBQQUdFUyA9IFtcclxuICB7IGxhYmVsOiBcIk91ciB3b3JrXCIsIHJvdXRlOiBcIi9wcm9qZWN0c1wiIH0sXHJcbiAgeyBsYWJlbDogXCJXaGF0IHdlIGRlbGl2ZXJcIiwgcm91dGU6IFwiL3Byb2R1Y3RzXCIgfSxcclxuICB7IGxhYmVsOiBcIkFib3V0IHVzXCIsIHJvdXRlOiBcIi9hYm91dFwiIH0sXHJcbl07XHJcblxyXG5mdW5jdGlvbiBJY29uU2VwYXJhdG9yKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxSb3c+XHJcbiAgICAgIDxDb2wgY2xhc3NOYW1lPVwiZmxleC1ncm93LTEgcGwtMFwiPlxyXG4gICAgICAgIDxociBjbGFzc05hbWU9XCJ3LTEwMFwiIC8+XHJcbiAgICAgIDwvQ29sPlxyXG4gICAgICA8Q29sIHhzPVwiYXV0b1wiIGNsYXNzTmFtZT1cInB0LTIgcHgtc20tMCBteC1zbS0wXCI+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIlxyXG4gICAgICAgICAgaGVpZ2h0PXsxN31cclxuICAgICAgICAgIHNyYz1cIi9hc3NldHMvaWNvcy5qcGdcIlxyXG4gICAgICAgICAgYWx0PVwiR2VuZXJpYyBwbGFjZWhvbGRlclwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Db2w+XHJcbiAgICAgIDxDb2wgc209ezF9IGNsYXNzTmFtZT1cImQtbm9uZSBkLXNtLWJsb2NrIHByLTBcIj5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwidy0xMDBcIiAvPlxyXG4gICAgICA8L0NvbD5cclxuICAgIDwvUm93PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdkNvbXBvbmVudChwcm9wcykge1xyXG4gIGNvbnN0IHsgY3VycmVudFBhZ2VSb3V0ZSwgaGlkZVNlcGFyYXRvciB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGtleT1cIm5hdi1jb250YWluZXJcIiBjbGFzc05hbWU9XCJweC0wXCIgZmx1aWQ+XHJcbiAgICAgIDxOYXZiYXIgZXhwYW5kPVwibWRcIiBjbGFzc05hbWU9XCJweS0xXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1ub3dyYXBcIj5cclxuICAgICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJwbC0wXCIga2V5PVwibG9nby1pbWdcIj5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgd2lkdGg9ezQwMH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLW5vbmUgZC1tZC1pbmxpbmVcIlxyXG4gICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvbmV3XzEwXzE2MDAuanBnXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJHZW5lcmljIHBsYWNlaG9sZGVyXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWlubGluZSBkLW1kLW5vbmVcIlxyXG4gICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvbmV3XzEwXzE2MDAuanBnXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJHZW5lcmljIHBsYWNlaG9sZGVyXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICAgICAgPE5hdmJhci5Ub2dnbGVcclxuICAgICAgICAgICAgYXJpYS1jb250cm9scz1cImJhc2ljLW5hdmJhci1uYXZcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIj5cclxuICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibWwtYXV0b1wiPlxyXG4gICAgICAgICAgICB7UEFHRVMubWFwKChwYWdlLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBmb250V2VpZ2h0Q2xhc3MgPVxyXG4gICAgICAgICAgICAgICAgY3VycmVudFBhZ2VSb3V0ZSA9PT0gcGFnZS5yb3V0ZSA/IFwiZm9udC13ZWlnaHQtYm9sZFwiIDogXCJcIjtcclxuICAgICAgICAgICAgICBjb25zdCBib3JkZXJDbGFzcyA9IGlkeCA9PT0gMCA/IFwiXCIgOiBcIm5hdmJhci1tZW51LWJvcmRlcnNcIjtcclxuXHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAga2V5PXtwYWdlLnJvdXRlfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4LWdyb3ctMSBteC0wIG15LWF1dG8gJHtib3JkZXJDbGFzc31gfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TmF2LkxpbmtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LXByaW1hcnkgdGV4dC1jZW50ZXIgcHgtMyBuYXZiYXItbWVudS1saW5rICR7Zm9udFdlaWdodENsYXNzfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17cGFnZS5yb3V0ZX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwYWdlLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vYXRkLmtuYWNrLmNvbS9kdHMjbmV3LXNlcnZpY2UtcmVxdWVzdFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LWNlbnRlciBkLWlubGluZSBkLW1kLW5vbmUgbXQtMlwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbVwiPkdldCBoZWxwPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9hdGQua25hY2suY29tL2R0cyNuZXctc2VydmljZS1yZXF1ZXN0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtY2VudGVyIGQtbm9uZSBkLW1kLWlubGluZSBtci0wIHBsLTMgbXktYXV0b1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbVwiPkdldCBoZWxwPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxyXG4gICAgICA8L05hdmJhcj5cclxuICAgICAgeyFoaWRlU2VwYXJhdG9yICYmIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG92ZXJmbG93WDogXCJoaWRkZW5cIiB9fT5cclxuICAgICAgICAgIDxJY29uU2VwYXJhdG9yIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=