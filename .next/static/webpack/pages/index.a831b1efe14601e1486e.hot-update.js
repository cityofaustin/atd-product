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
              className: "flex-grow-1 mx-0 my-auto ".concat(borderClass)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZDb21wb25lbnQuanMiXSwibmFtZXMiOlsiUEFHRVMiLCJsYWJlbCIsInJvdXRlIiwiSWNvblNlcGFyYXRvciIsInByb3BzIiwiTmF2Q29tcG9uZW50IiwiY3VycmVudFBhZ2VSb3V0ZSIsImhpZGVTZXBhcmF0b3IiLCJtYXAiLCJwYWdlIiwiaWR4IiwiZm9udFdlaWdodENsYXNzIiwiYm9yZGVyQ2xhc3MiLCJvdmVyZmxvd1giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFVQSxJQUFNQSxLQUFLLEdBQUcsQ0FDWjtBQUFFQyxPQUFLLEVBQUUsVUFBVDtBQUFxQkMsT0FBSyxFQUFFO0FBQTVCLENBRFksRUFFWjtBQUFFRCxPQUFLLEVBQUUsaUJBQVQ7QUFBNEJDLE9BQUssRUFBRTtBQUFuQyxDQUZZLEVBR1o7QUFBRUQsT0FBSyxFQUFFLFVBQVQ7QUFBcUJDLE9BQUssRUFBRTtBQUE1QixDQUhZLENBQWQ7O0FBTUEsU0FBU0MsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDNUIsc0JBQ0UsOERBQUMsZ0RBQUQ7QUFBQSw0QkFDRSw4REFBQyxnREFBRDtBQUFLLGVBQVMsRUFBQyxrQkFBZjtBQUFBLDZCQUNFO0FBQUksaUJBQVMsRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRSw4REFBQyxnREFBRDtBQUFLLFFBQUUsRUFBQyxNQUFSO0FBQWUsZUFBUyxFQUFDLHNCQUF6QjtBQUFBLDZCQUNFO0FBQ0UsaUJBQVMsRUFBQyxhQURaO0FBRUUsY0FBTSxFQUFFLEVBRlY7QUFHRSxXQUFHLEVBQUMsa0JBSE47QUFJRSxXQUFHLEVBQUM7QUFKTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBWUUsOERBQUMsZ0RBQUQ7QUFBSyxRQUFFLEVBQUUsQ0FBVDtB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O0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEzREo7QUFBQSxLQUFlLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0VEO01BckV1QlIsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hODMxYjFlZmUxNDYwMWUxNDg2ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIENvbnRhaW5lcixcclxuICBSb3csXHJcbiAgQ29sLFxyXG4gIEJ1dHRvbixcclxuICBJbWFnZSxcclxuICBOYXYsXHJcbiAgTmF2YmFyLFxyXG59IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuXHJcbmNvbnN0IFBBR0VTID0gW1xyXG4gIHsgbGFiZWw6IFwiT3VyIHdvcmtcIiwgcm91dGU6IFwiL3Byb2plY3RzXCIgfSxcclxuICB7IGxhYmVsOiBcIldoYXQgd2UgZGVsaXZlclwiLCByb3V0ZTogXCIvcHJvZHVjdHNcIiB9LFxyXG4gIHsgbGFiZWw6IFwiQWJvdXQgdXNcIiwgcm91dGU6IFwiL2Fib3V0XCIgfSxcclxuXTtcclxuXHJcbmZ1bmN0aW9uIEljb25TZXBhcmF0b3IocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFJvdz5cclxuICAgICAgPENvbCBjbGFzc05hbWU9XCJmbGV4LWdyb3ctMSBwbC0wXCI+XHJcbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cInctMTAwXCIgLz5cclxuICAgICAgPC9Db2w+XHJcbiAgICAgIDxDb2wgeHM9XCJhdXRvXCIgY2xhc3NOYW1lPVwicHQtMiBweC1zbS0wIG14LXNtLTBcIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiXHJcbiAgICAgICAgICBoZWlnaHQ9ezE3fVxyXG4gICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pY29zLmpwZ1wiXHJcbiAgICAgICAgICBhbHQ9XCJHZW5lcmljIHBsYWNlaG9sZGVyXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0NvbD5cclxuICAgICAgPENvbCBzbT17MX0gY2xhc3NOYW1lPVwiZC1ub25lIGQtc20tYmxvY2sgcHItMFwiPlxyXG4gICAgICAgIDxociBjbGFzc05hbWU9XCJ3LTEwMFwiIC8+XHJcbiAgICAgIDwvQ29sPlxyXG4gICAgPC9Sb3c+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2Q29tcG9uZW50KHByb3BzKSB7XHJcbiAgY29uc3QgeyBjdXJyZW50UGFnZVJvdXRlLCBoaWRlU2VwYXJhdG9yIH0gPSBwcm9wcztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIga2V5PVwibmF2LWNvbnRhaW5lclwiIGNsYXNzTmFtZT1cInB4LTBcIiBmbHVpZD5cclxuICAgICAgPE5hdmJhciBleHBhbmQ9XCJtZFwiIGNsYXNzTmFtZT1cInB5LTFcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LW5vd3JhcFwiPlxyXG4gICAgICAgICAgPE5hdmJhci5CcmFuZCBocmVmPVwiL1wiIGNsYXNzTmFtZT1cInBsLTBcIiBrZXk9XCJsb2dvLWltZ1wiPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICB3aWR0aD17NDAwfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtbm9uZSBkLW1kLWlubGluZVwiXHJcbiAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9uZXdfMTBfMTYwMC5qcGdcIlxyXG4gICAgICAgICAgICAgIGFsdD1cIkdlbmVyaWMgcGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtaW5saW5lIGQtbWQtbm9uZVwiXHJcbiAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9uZXdfMTBfMTYwMC5qcGdcIlxyXG4gICAgICAgICAgICAgIGFsdD1cIkdlbmVyaWMgcGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgICAgICA8TmF2YmFyLlRvZ2dsZVxyXG4gICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TmF2YmFyLkNvbGxhcHNlIGlkPVwiYmFzaWMtbmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtbC1hdXRvXCI+XHJcbiAgICAgICAgICAgIHtQQUdFUy5tYXAoKHBhZ2UsIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGZvbnRXZWlnaHRDbGFzcyA9XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UGFnZVJvdXRlID09PSBwYWdlLnJvdXRlID8gXCJmb250LXdlaWdodC1ib2xkXCIgOiBcIlwiO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGJvcmRlckNsYXNzID0gaWR4ID09PSAwID8gXCJcIiA6IFwibmF2YmFyLW1lbnUtYm9yZGVyc1wiO1xyXG5cclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBrZXk9e3BhZ2Uucm91dGV9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXgtZ3Jvdy0xIG14LTAgbXktYXV0byAke2JvcmRlckNsYXNzfWB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8TmF2LkxpbmtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LXByaW1hcnkgdGV4dC1jZW50ZXIgcHgtMyBuYXZiYXItbWVudS1saW5rICR7Zm9udFdlaWdodENsYXNzfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17cGFnZS5yb3V0ZX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwYWdlLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPiAqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2F0ZC5rbmFjay5jb20vZHRzI25ldy1zZXJ2aWNlLXJlcXVlc3RcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1jZW50ZXIgZC1pbmxpbmUgZC1tZC1ub25lIG10LTJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21cIj5HZXQgaGVscDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vYXRkLmtuYWNrLmNvbS9kdHMjbmV3LXNlcnZpY2UtcmVxdWVzdFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LWNlbnRlciBkLW5vbmUgZC1tZC1pbmxpbmUgbXItMCBwbC0zIG15LWF1dG9cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21cIj5HZXQgaGVscDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L05hdj5cclxuICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cclxuICAgICAgPC9OYXZiYXI+XHJcbiAgICAgIHshaGlkZVNlcGFyYXRvciAmJiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBvdmVyZmxvd1g6IFwiaGlkZGVuXCIgfX0+XHJcbiAgICAgICAgICA8SWNvblNlcGFyYXRvciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9