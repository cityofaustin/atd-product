self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


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


/***/ }),

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Page; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Administrator_Documents_Coding_Austin_atd_product_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _NavComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavComponent */ "./components/NavComponent.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Footer__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\Administrator\\Documents\\Coding\\Austin\\atd-product\\components\\Page.js",
    _s = $RefreshSig$();









function Title(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__.default, {
    className: "m-0 p-0",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__.default, {
      className: "text-primary",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: props.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

_c = Title;
function Page(props) {
  _s();

  var children = props.children,
      fluid = props.fluid,
      footer = props.footer,
      hideSeparator = props.hideSeparator,
      nav = props.nav,
      title = props.title;
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useLocation)();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default().useState(location.pathname),
      _React$useState2 = (0,C_Users_Administrator_Documents_Coding_Austin_atd_product_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 1),
      currentPageRoute = _React$useState2[0];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [nav && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavComponent__WEBPACK_IMPORTED_MODULE_3__.default, {
      hideSeparator: hideSeparator,
      currentPageRoute: currentPageRoute
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_8__.default, {
      fluid: fluid,
      children: [title && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {
        title: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 19
      }, this), children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), footer && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_Footer__WEBPACK_IMPORTED_MODULE_4___default()), {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 18
    }, this)]
  }, void 0, true);
}

_s(Page, "GIHQztnR9pk+NAzNnsCCb5bIYRo=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useLocation];
});

_c2 = Page;

var _c, _c2;

$RefreshReg$(_c, "Title");
$RefreshReg$(_c2, "Page");

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
/* harmony import */ var _src_shared_IssuesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/shared/IssuesContext */ "./src/shared/IssuesContext.js");
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

  var context = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(_src_shared_IssuesContext__WEBPACK_IMPORTED_MODULE_2__.default);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUGFnZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiUEFHRVMiLCJsYWJlbCIsInJvdXRlIiwiSWNvblNlcGFyYXRvciIsInByb3BzIiwiTmF2Q29tcG9uZW50IiwiY3VycmVudFBhZ2VSb3V0ZSIsImhpZGVTZXBhcmF0b3IiLCJtYXAiLCJwYWdlIiwiaWR4IiwiZm9udFdlaWdodENsYXNzIiwiYm9yZGVyQ2xhc3MiLCJvdmVyZmxvd1giLCJUaXRsZSIsInRpdGxlIiwiUGFnZSIsImNoaWxkcmVuIiwiZmx1aWQiLCJmb290ZXIiLCJuYXYiLCJsb2NhdGlvbiIsInVzZUxvY2F0aW9uIiwiUmVhY3QiLCJwYXRobmFtZSIsIlNlcnZpY2VJdGVtIiwiaWNvbiIsImNvbnRlbnQiLCJjb2xvciIsIkhvbWVWaWV3IiwiY29udGV4dCIsIklzc3Vlc0NvbnRleHQiLCJwcm9qZWN0cyIsInByb2plY3RJc3N1ZXMiLCJ2ZXJ0aWNhbEFsaWduIiwicHJvamVjdCIsImlzRmVhdHVyZWQiLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBVUEsSUFBTUEsS0FBSyxHQUFHLENBQ1o7QUFBRUMsT0FBSyxFQUFFLFVBQVQ7QUFBcUJDLE9BQUssRUFBRTtBQUE1QixDQURZLEVBRVo7QUFBRUQsT0FBSyxFQUFFLGlCQUFUO0FBQTRCQyxPQUFLLEVBQUU7QUFBbkMsQ0FGWSxFQUdaO0FBQUVELE9BQUssRUFBRSxVQUFUO0FBQXFCQyxPQUFLLEVBQUU7QUFBNUIsQ0FIWSxDQUFkOztBQU1BLFNBQVNDLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThC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QUFBLG1CQURLLEdBSUgsSUFKSjtBQUtELFNBTkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaEVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBOEVEOztHQWxGdUJSLFE7O01BQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmNhMzgwMmIzNDkzMDU5NjkwNGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBDb250YWluZXIsXHJcbiAgUm93LFxyXG4gIENvbCxcclxuICBCdXR0b24sXHJcbiAgSW1hZ2UsXHJcbiAgTmF2LFxyXG4gIE5hdmJhcixcclxufSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcblxyXG5jb25zdCBQQUdFUyA9IFtcclxuICB7IGxhYmVsOiBcIk91ciB3b3JrXCIsIHJvdXRlOiBcIi9wcm9qZWN0c1wiIH0sXHJcbiAgeyBsYWJlbDogXCJXaGF0IHdlIGRlbGl2ZXJcIiwgcm91dGU6IFwiL3Byb2R1Y3RzXCIgfSxcclxuICB7IGxhYmVsOiBcIkFib3V0IHVzXCIsIHJvdXRlOiBcIi9hYm91dFwiIH0sXHJcbl07XHJcblxyXG5mdW5jdGlvbiBJY29uU2VwYXJhdG9yKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxSb3c+XHJcbiAgICAgIDxDb2wgY2xhc3NOYW1lPVwiZmxleC1ncm93LTEgcGwtMFwiPlxyXG4gICAgICAgIDxociBjbGFzc05hbWU9XCJ3LTEwMFwiIC8+XHJcbiAgICAgIDwvQ29sPlxyXG4gICAgICA8Q29sIHhzPVwiYXV0b1wiIGNsYXNzTmFtZT1cInB0LTIgcHgtc20tMCBteC1zbS0wXCI+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIlxyXG4gICAgICAgICAgaGVpZ2h0PXsxN31cclxuICAgICAgICAgIHNyYz1cIi9hc3NldHMvaWNvcy5qcGdcIlxyXG4gICAgICAgICAgYWx0PVwiR2VuZXJpYyBwbGFjZWhvbGRlclwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Db2w+XHJcbiAgICAgIDxDb2wgc209ezF9IGNsYXNzTmFtZT1cImQtbm9uZSBkLXNtLWJsb2NrIHByLTBcIj5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwidy0xMDBcIiAvPlxyXG4gICAgICA8L0NvbD5cclxuICAgIDwvUm93PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdkNvbXBvbmVudChwcm9wcykge1xyXG4gIGNvbnN0IHsgY3VycmVudFBhZ2VSb3V0ZSwgaGlkZVNlcGFyYXRvciB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGtleT1cIm5hdi1jb250YWluZXJcIiBjbGFzc05hbWU9XCJweC0wXCIgZmx1aWQ+XHJcbiAgICAgIDxOYXZiYXIgZXhwYW5kPVwibWRcIiBjbGFzc05hbWU9XCJweS0xXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1ub3dyYXBcIj5cclxuICAgICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJwbC0wXCIga2V5PVwibG9nby1pbWdcIj5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgd2lkdGg9ezQwMH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLW5vbmUgZC1tZC1pbmxpbmVcIlxyXG4gICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvbmV3XzEwXzE2MDAuanBnXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJHZW5lcmljIHBsYWNlaG9sZGVyXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWlubGluZSBkLW1kLW5vbmVcIlxyXG4gICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvbmV3XzEwXzE2MDAuanBnXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJHZW5lcmljIHBsYWNlaG9sZGVyXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICAgICAgPE5hdmJhci5Ub2dnbGVcclxuICAgICAgICAgICAgYXJpYS1jb250cm9scz1cImJhc2ljLW5hdmJhci1uYXZcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIj5cclxuICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibWwtYXV0b1wiPlxyXG4gICAgICAgICAgICB7UEFHRVMubWFwKChwYWdlLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBmb250V2VpZ2h0Q2xhc3MgPVxyXG4gICAgICAgICAgICAgICAgY3VycmVudFBhZ2VSb3V0ZSA9PT0gcGFnZS5yb3V0ZSA/IFwiZm9udC13ZWlnaHQtYm9sZFwiIDogXCJcIjtcclxuICAgICAgICAgICAgICBjb25zdCBib3JkZXJDbGFzcyA9IGlkeCA9PT0gMCA/IFwiXCIgOiBcIm5hdmJhci1tZW51LWJvcmRlcnNcIjtcclxuXHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAga2V5PXtwYWdlLnJvdXRlfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4LWdyb3ctMSBteC0wIG15LWF1dG8gJHtib3JkZXJDbGFzc31gfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TmF2LkxpbmtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LXByaW1hcnkgdGV4dC1jZW50ZXIgcHgtMyBuYXZiYXItbWVudS1saW5rICR7Zm9udFdlaWdodENsYXNzfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17cGFnZS5yb3V0ZX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwYWdlLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vYXRkLmtuYWNrLmNvbS9kdHMjbmV3LXNlcnZpY2UtcmVxdWVzdFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LWNlbnRlciBkLWlubGluZSBkLW1kLW5vbmUgbXQtMlwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbVwiPkdldCBoZWxwPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9hdGQua25hY2suY29tL2R0cyNuZXctc2VydmljZS1yZXF1ZXN0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtY2VudGVyIGQtbm9uZSBkLW1kLWlubGluZSBtci0wIHBsLTMgbXktYXV0b1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbVwiPkdldCBoZWxwPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxyXG4gICAgICA8L05hdmJhcj5cclxuICAgICAgeyFoaWRlU2VwYXJhdG9yICYmIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG92ZXJmbG93WDogXCJoaWRkZW5cIiB9fT5cclxuICAgICAgICAgIDxJY29uU2VwYXJhdG9yIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgUm93IGZyb20gXCJyZWFjdC1ib290c3RyYXAvUm93XCI7XHJcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db2xcIjtcclxuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgTmF2Q29tcG9uZW50IGZyb20gXCIuL05hdkNvbXBvbmVudFwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xyXG5cclxuZnVuY3Rpb24gVGl0bGUocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFJvdyBjbGFzc05hbWU9XCJtLTAgcC0wXCI+XHJcbiAgICAgIDxDb2wgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5XCI+XHJcbiAgICAgICAgPGgxPntwcm9wcy50aXRsZX08L2gxPlxyXG4gICAgICA8L0NvbD5cclxuICAgIDwvUm93PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UocHJvcHMpIHtcclxuICBjb25zdCB7IGNoaWxkcmVuLCBmbHVpZCwgZm9vdGVyLCBoaWRlU2VwYXJhdG9yLCBuYXYsIHRpdGxlIH0gPSBwcm9wcztcclxuICBsZXQgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xyXG4gIGNvbnN0IFtjdXJyZW50UGFnZVJvdXRlXSA9IFJlYWN0LnVzZVN0YXRlKGxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge25hdiAmJiAoXHJcbiAgICAgICAgPE5hdkNvbXBvbmVudFxyXG4gICAgICAgICAgaGlkZVNlcGFyYXRvcj17aGlkZVNlcGFyYXRvcn1cclxuICAgICAgICAgIGN1cnJlbnRQYWdlUm91dGU9e2N1cnJlbnRQYWdlUm91dGV9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAgPENvbnRhaW5lciBmbHVpZD17Zmx1aWR9PlxyXG4gICAgICAgIHt0aXRsZSAmJiA8VGl0bGUgdGl0bGU9e3RpdGxlfSAvPn1cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICB7Zm9vdGVyICYmIDxGb290ZXIgLz59XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdyBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1Jvd1wiO1xyXG5pbXBvcnQgQ29sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29sXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0ltYWdlXCI7XHJcbmltcG9ydCB7IEZhR2xvYmUsIEZhVXNlcnNDb2csIEZhQnVzaW5lc3NUaW1lIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCB7IE1kV2ViIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XHJcblxyXG5pbXBvcnQgSXNzdWVzQ29udGV4dCBmcm9tIFwiLi4vc3JjL3NoYXJlZC9Jc3N1ZXNDb250ZXh0XCI7XHJcbmltcG9ydCBQYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL1BhZ2VcIjtcclxuaW1wb3J0IEluZGV4SXNzc3VlTGlzdEl0ZW0gZnJvbSBcIi4uL3NyYy9zaGFyZWQvSW5kZXhJc3N1ZUxpc3RJdGVtXCI7XHJcblxyXG5mdW5jdGlvbiBTZXJ2aWNlSXRlbShwcm9wcykge1xyXG4gIGNvbnN0IHsgaWNvbiwgY29udGVudCB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb2wgbWQ9ezN9IGNsYXNzTmFtZT1cInBiLTRcIj5cclxuICAgICAgPFJvdz5cclxuICAgICAgICA8Q29sIHhzPVwiYXV0b1wiIGNsYXNzTmFtZT1cInByLTBcIj5cclxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiMwMGJmYTVcIiB9fT5cclxuICAgICAgICAgICAgPGgxPntpY29ufTwvaDE+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbD5cclxuICAgICAgICAgIDxoNT57Y29udGVudH08L2g1PlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvQ29sPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVWaWV3KHByb3BzKSB7XHJcbiAgY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoSXNzdWVzQ29udGV4dCk7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBjb250ZXh0LnByb2plY3RJc3N1ZXM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8UGFnZSBmbHVpZCBuYXYgaGlkZVNlcGFyYXRvciBmb290ZXI+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxDb2wgeHM9ezF9IG1kPXsyfT48L0NvbD5cclxuICAgICAgICAgIDxDb2wgc209ezEyfSBtZD17OX0gbGc9ezR9IGNsYXNzTmFtZT1cInB5LTUgcHgtNCB0ZXh0LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhvbWVwYWdlLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+VGVjaCBzdXBwb3J0IGZvciBBVFggbW9iaWxpdHk8L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgIFdlIGJ1aWxkIGFuZCBidXkgdGVjaG5vbG9neSB0byBoZWxwIGNpdHkgc3RhZmYgdGFja2xlIEF1c3RpbidzXHJcbiAgICAgICAgICAgICAgbW9iaWxpdHkgY2hhbGxlbmdlcy4gV2UncmUgb2JzZXNzZWQgd2l0aCBlZmZpY2llbmNpZXMsIG9wZW4gZGF0YSxcclxuICAgICAgICAgICAgICBhbmQgZGVsaXZlcmluZyBodW1hbi1jZW50ZXJlZCB0ZWNoIHRvIGdvdmVybm1lbnQgc2VydmljZXMuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbCBsZz17NH0gY2xhc3NOYW1lPVwibXktYXV0byBkLW5vbmUgZC1sZy1ibG9ja1wiPlxyXG4gICAgICAgICAgICB7LyogaGlkZGVuIG9uIHhzIGFuZCBzbSAqL31cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL3Nwb3J0cy5qcGdcIlxyXG4gICAgICAgICAgICAgIGFsdD1cIklsbHVzdHJhdGlvbiBvZiBhIGdyZWVuIGJpY3ljbGVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJweS0zIHRleHQtcHJpbWFyeSBiZy1saWdodFwiPlxyXG4gICAgICAgICAgPENvbCBtZD17Mn0+PC9Db2w+XHJcbiAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5XZSdyZSBoZXJlIHRvIGhlbHA8L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGJnLWxpZ2h0XCI+XHJcbiAgICAgICAgICA8Q29sIG1kPXsyfT48L0NvbD5cclxuICAgICAgICAgIDxTZXJ2aWNlSXRlbVxyXG4gICAgICAgICAgICBjb250ZW50PVwiTW9kZXJuaXplIHNvZnR3YXJlIGRldmVsb3BtZW50IHByb2Nlc3NlcyB3aGlsZSBpbnRyb2R1Y2luZyBnb29kIGFnaWxlIGFuZCBodW1hbi1jZW50ZXJlZCBkZXNpZ24gcHJhY3RpY2VzXCJcclxuICAgICAgICAgICAgaWNvbj17PEZhVXNlcnNDb2cgc3R5bGU9e3sgdmVydGljYWxBbGlnbjogXCJ0b3BcIiB9fSAvPn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Q29sIG1kPXsyfT48L0NvbD5cclxuICAgICAgICAgIDxTZXJ2aWNlSXRlbVxyXG4gICAgICAgICAgICBjb250ZW50PVwiRGlnaXRpemUgYW5kIHN0cmVhbWxpbmUgaW50ZXJuYWwgc3lzdGVtcyB0byBzYXZlIHRpbWUgYW5kIHVubG9jayBpbnNpZ2h0cyBmcm9tIGRhdGFcIlxyXG4gICAgICAgICAgICBpY29uPXs8RmFCdXNpbmVzc1RpbWUgc3R5bGU9e3sgdmVydGljYWxBbGlnbjogXCJ0b3BcIiB9fSAvPn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Q29sIG1kPXsyfT48L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8Um93IGNsYXNzTmFtZT1cInBiLTQgdGV4dC1wcmltYXJ5IGJnLWxpZ2h0XCI+XHJcbiAgICAgICAgICA8Q29sIG1kPXsyfT48L0NvbD5cclxuICAgICAgICAgIDxTZXJ2aWNlSXRlbVxyXG4gICAgICAgICAgICBjb250ZW50PVwiSW1wcm92ZSBwdWJsaWMtZmFjaW5nIHNlcnZpY2VzIGxpa2Ugd2Vic2l0ZXMgb3IgYXBwbGljYXRpb25zXCJcclxuICAgICAgICAgICAgaWNvbj17PE1kV2ViIHN0eWxlPXt7IHZlcnRpY2FsQWxpZ246IFwidG9wXCIgfX0gLz59XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPENvbCBtZD17Mn0+PC9Db2w+XHJcbiAgICAgICAgICA8U2VydmljZUl0ZW1cclxuICAgICAgICAgICAgY29udGVudD1cIk1hbmFnZSBnZW9zcGF0aWFsIGRhdGEgYW5kIHB1Ymxpc2ggaXQgb24gdGhlIHdlYlwiXHJcbiAgICAgICAgICAgIGljb249ezxGYUdsb2JlIHN0eWxlPXt7IHZlcnRpY2FsQWxpZ246IFwidG9wXCIgfX0gLz59XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPENvbCBtZD17Mn0+PC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJwdC0zIHBiLTQgdGV4dC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICA8Q29sIG1kPXsyfT48L0NvbD5cclxuICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICA8c3Ryb25nPkZlYXR1cmVkIHByb2plY3RzPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdC5pc0ZlYXR1cmVkID8gKFxyXG4gICAgICAgICAgICAgIDxDb2wga2V5PXtwcm9qZWN0Lm51bWJlcn0gbWQ9ezN9IGNsYXNzTmFtZT1cIm0tMCBwLTJcIj5cclxuICAgICAgICAgICAgICAgIDxJbmRleElzc3N1ZUxpc3RJdGVtIHR5cGU9XCJwcm9qZWN0XCIgaXNzdWU9e3Byb2plY3R9IC8+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICkgOiBudWxsO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvUGFnZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==