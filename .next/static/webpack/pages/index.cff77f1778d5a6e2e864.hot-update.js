self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/IndexIssueListItem.js":
/*!******************************************!*\
  !*** ./components/IndexIssueListItem.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ IndexIsssueListItem; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Administrator_Documents_Coding_Austin_atd_product_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Card */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Administrator\\Documents\\Coding\\Austin\\atd-product\\components\\IndexIssueListItem.js";







function parseBody(body) {
  // extract content up to the first linebreak to use as description
  var reDescription = /.*/;
  var description = body.match(reDescription)[0];
  var reImg = /(?:!\[(.*?)\]\((.*?)\))/; // find the first img (if one exists)

  var imgMatch = body.match(reImg);
  var img = null;

  if (imgMatch && imgMatch.length > 0) {
    img = {
      alt: imgMatch[1],
      src: imgMatch[2]
    };
  }

  return [description, img];
}

var markdownRenderers = {
  /*
  This custom renderer suppresses default link handling by returning the plain link 
  text. I believe we're working a round a ReactMarkdown bug here. The link arg should
  include a `text` prop that we can return, but only `href` is available when
  destructring the function args. We cannot render a normal <a> tag here because it will
  result in nested <a> tags because of the wrapping Card <Link/>. To quote the warning
  message: <a> cannot appear as a descendant of <a>.
    Bug issue: https://github.com/remarkjs/react-markdown/issues/539
  */
  link: function link(_ref) {
    var children = _ref.children;
    return children[0].props.value;
  }
};
function IndexIsssueListItem(props) {
  var type = props.type,
      issue = props.issue;

  var _parseBody = parseBody(issue.body),
      _parseBody2 = (0,C_Users_Administrator_Documents_Coding_Austin_atd_product_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_parseBody, 2),
      description = _parseBody2[0],
      img = _parseBody2[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    className: "text-primary text-decoration-none",
    href: {
      pathname: "".concat(type, "s/").concat(issue.number),
      state: {
        showBackLink: true
      }
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__.default, {
      className: "h-100 shadow-sm",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__.default.Body, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__.default.Title, {
          className: "text-primary",
          children: issue.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this), img && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__.default, {
          className: "pb-2",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__.default, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__.default.Img, {
              variant: "top",
              src: img.src,
              alt: img.alt
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__.default, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__.default, {
            className: "text-muted",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_4___default()), {
              renderers: markdownRenderers,
              escapeHtml: false,
              children: description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, this);
}
_c = IndexIsssueListItem;

var _c;

$RefreshReg$(_c, "IndexIsssueListItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbmRleElzc3VlTGlzdEl0ZW0uanMiXSwibmFtZXMiOlsicGFyc2VCb2R5IiwiYm9keSIsInJlRGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsIm1hdGNoIiwicmVJbWciLCJpbWdNYXRjaCIsImltZyIsImxlbmd0aCIsImFsdCIsInNyYyIsIm1hcmtkb3duUmVuZGVyZXJzIiwibGluayIsImNoaWxkcmVuIiwicHJvcHMiLCJ2YWx1ZSIsIkluZGV4SXNzc3VlTGlzdEl0ZW0iLCJ0eXBlIiwiaXNzdWUiLCJwYXRobmFtZSIsIm51bWJlciIsInN0YXRlIiwic2hvd0JhY2tMaW5rIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFNBQVQsQ0FBbUJDLElBQW5CLEVBQXlCO0FBQ3ZCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHLElBQXRCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHRixJQUFJLENBQUNHLEtBQUwsQ0FBV0YsYUFBWCxFQUEwQixDQUExQixDQUFwQjtBQUNBLE1BQU1HLEtBQUssR0FBRyx5QkFBZCxDQUp1QixDQUt2Qjs7QUFDQSxNQUFNQyxRQUFRLEdBQUdMLElBQUksQ0FBQ0csS0FBTCxDQUFXQyxLQUFYLENBQWpCO0FBQ0EsTUFBSUUsR0FBRyxHQUFHLElBQVY7O0FBQ0EsTUFBSUQsUUFBUSxJQUFJQSxRQUFRLENBQUNFLE1BQVQsR0FBa0IsQ0FBbEMsRUFBcUM7QUFDbkNELE9BQUcsR0FBRztBQUFFRSxTQUFHLEVBQUVILFFBQVEsQ0FBQyxDQUFELENBQWY7QUFBb0JJLFNBQUcsRUFBRUosUUFBUSxDQUFDLENBQUQ7QUFBakMsS0FBTjtBQUNEOztBQUNELFNBQU8sQ0FBQ0gsV0FBRCxFQUFjSSxHQUFkLENBQVA7QUFDRDs7QUFFRCxJQUFNSSxpQkFBaUIsR0FBRztBQUN4QjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFRUMsTUFBSSxFQUFFLG9CQUFrQjtBQUFBLFFBQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUN0QixXQUFPQSxRQUFRLENBQUMsQ0FBRCxDQUFSLENBQVlDLEtBQVosQ0FBa0JDLEtBQXpCO0FBQ0Q7QUFidUIsQ0FBMUI7QUFnQmUsU0FBU0MsbUJBQVQsQ0FBNkJGLEtBQTdCLEVBQW9DO0FBQUEsTUFDM0NHLElBRDJDLEdBQzNCSCxLQUQyQixDQUMzQ0csSUFEMkM7QUFBQSxNQUNyQ0MsS0FEcUMsR0FDM0JKLEtBRDJCLENBQ3JDSSxLQURxQzs7QUFBQSxtQkFFdEJsQixTQUFTLENBQUNrQixLQUFLLENBQUNqQixJQUFQLENBRmE7QUFBQTtBQUFBLE1BRTFDRSxXQUYwQztBQUFBLE1BRTdCSSxHQUY2Qjs7QUFHakQsc0JBQ0UsOERBQUMsa0RBQUQ7QUFDRSxhQUFTLEVBQUMsbUNBRFo7QUFFRSxRQUFJLEVBQUU7QUFDSlksY0FBUSxZQUFLRixJQUFMLGVBQWNDLEtBQUssQ0FBQ0UsTUFBcEIsQ0FESjtBQUVKQyxXQUFLLEVBQUU7QUFBRUMsb0JBQVksRUFBRTtBQUFoQjtBQUZILEtBRlI7QUFBQSwyQkFPRSw4REFBQyx5REFBRDtBQUFNLGVBQVMsRUFBQyxpQkFBaEI7QUFBQSw2QkFDRSw4REFBQyw4REFBRDtBQUFBLGdDQUNFLDhEQUFDLCtEQUFEO0FBQVksbUJBQVMsRUFBQyxjQUF0QjtBQUFBLG9CQUFzQ0osS0FBSyxDQUFDSztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUdoQixHQUFHLGlCQUNGLDhEQUFDLHdEQUFEO0FBQUssbUJBQVMsRUFBQyxNQUFmO0FBQUEsaUNBQ0UsOERBQUMsd0RBQUQ7QUFBQSxtQ0FDRSw4REFBQyw2REFBRDtBQUFVLHFCQUFPLEVBQUMsS0FBbEI7QUFBd0IsaUJBQUcsRUFBRUEsR0FBRyxDQUFDRyxHQUFqQztBQUFzQyxpQkFBRyxFQUFFSCxHQUFHLENBQUNFO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISixlQVNFLDhEQUFDLHdEQUFEO0FBQUEsaUNBQ0UsOERBQUMsd0RBQUQ7QUFBSyxxQkFBUyxFQUFDLFlBQWY7QUFBQSxtQ0FDRSw4REFBQyx1REFBRDtBQUNFLHVCQUFTLEVBQUVFLGlCQURiO0FBRUUsd0JBQVUsRUFBRSxLQUZkO0FBR0Usc0JBQVEsRUFBRVI7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQStCRDtLQWxDdUJhLG1CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNmZjc3ZjE3NzhkNWE2ZTJlODY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSb3cgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Sb3dcIjtcclxuaW1wb3J0IENvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbFwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NhcmRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcclxuXHJcbmZ1bmN0aW9uIHBhcnNlQm9keShib2R5KSB7XHJcbiAgLy8gZXh0cmFjdCBjb250ZW50IHVwIHRvIHRoZSBmaXJzdCBsaW5lYnJlYWsgdG8gdXNlIGFzIGRlc2NyaXB0aW9uXHJcbiAgY29uc3QgcmVEZXNjcmlwdGlvbiA9IC8uKi87XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBib2R5Lm1hdGNoKHJlRGVzY3JpcHRpb24pWzBdO1xyXG4gIGNvbnN0IHJlSW1nID0gLyg/OiFcXFsoLio/KVxcXVxcKCguKj8pXFwpKS87XHJcbiAgLy8gZmluZCB0aGUgZmlyc3QgaW1nIChpZiBvbmUgZXhpc3RzKVxyXG4gIGNvbnN0IGltZ01hdGNoID0gYm9keS5tYXRjaChyZUltZyk7XHJcbiAgbGV0IGltZyA9IG51bGw7XHJcbiAgaWYgKGltZ01hdGNoICYmIGltZ01hdGNoLmxlbmd0aCA+IDApIHtcclxuICAgIGltZyA9IHsgYWx0OiBpbWdNYXRjaFsxXSwgc3JjOiBpbWdNYXRjaFsyXSB9O1xyXG4gIH1cclxuICByZXR1cm4gW2Rlc2NyaXB0aW9uLCBpbWddO1xyXG59XHJcblxyXG5jb25zdCBtYXJrZG93blJlbmRlcmVycyA9IHtcclxuICAvKlxyXG4gIFRoaXMgY3VzdG9tIHJlbmRlcmVyIHN1cHByZXNzZXMgZGVmYXVsdCBsaW5rIGhhbmRsaW5nIGJ5IHJldHVybmluZyB0aGUgcGxhaW4gbGluayBcclxuICB0ZXh0LiBJIGJlbGlldmUgd2UncmUgd29ya2luZyBhIHJvdW5kIGEgUmVhY3RNYXJrZG93biBidWcgaGVyZS4gVGhlIGxpbmsgYXJnIHNob3VsZFxyXG4gIGluY2x1ZGUgYSBgdGV4dGAgcHJvcCB0aGF0IHdlIGNhbiByZXR1cm4sIGJ1dCBvbmx5IGBocmVmYCBpcyBhdmFpbGFibGUgd2hlblxyXG4gIGRlc3RydWN0cmluZyB0aGUgZnVuY3Rpb24gYXJncy4gV2UgY2Fubm90IHJlbmRlciBhIG5vcm1hbCA8YT4gdGFnIGhlcmUgYmVjYXVzZSBpdCB3aWxsXHJcbiAgcmVzdWx0IGluIG5lc3RlZCA8YT4gdGFncyBiZWNhdXNlIG9mIHRoZSB3cmFwcGluZyBDYXJkIDxMaW5rLz4uIFRvIHF1b3RlIHRoZSB3YXJuaW5nXHJcbiAgbWVzc2FnZTogPGE+IGNhbm5vdCBhcHBlYXIgYXMgYSBkZXNjZW5kYW50IG9mIDxhPi5cclxuXHJcbiAgQnVnIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vcmVtYXJranMvcmVhY3QtbWFya2Rvd24vaXNzdWVzLzUzOVxyXG4gICovXHJcbiAgbGluazogKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgcmV0dXJuIGNoaWxkcmVuWzBdLnByb3BzLnZhbHVlO1xyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleElzc3N1ZUxpc3RJdGVtKHByb3BzKSB7XHJcbiAgbGV0IHsgdHlwZSwgaXNzdWUgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgaW1nXSA9IHBhcnNlQm9keShpc3N1ZS5ib2R5KTtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmtcclxuICAgICAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IHRleHQtZGVjb3JhdGlvbi1ub25lXCJcclxuICAgICAgaHJlZj17e1xyXG4gICAgICAgIHBhdGhuYW1lOiBgJHt0eXBlfXMvJHtpc3N1ZS5udW1iZXJ9YCxcclxuICAgICAgICBzdGF0ZTogeyBzaG93QmFja0xpbms6IHRydWUgfSxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPENhcmQgY2xhc3NOYW1lPVwiaC0xMDAgc2hhZG93LXNtXCI+XHJcbiAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgIDxDYXJkLlRpdGxlIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeVwiPntpc3N1ZS50aXRsZX08L0NhcmQuVGl0bGU+XHJcbiAgICAgICAgICB7aW1nICYmIChcclxuICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJwYi0yXCI+XHJcbiAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgIDxDYXJkLkltZyB2YXJpYW50PVwidG9wXCIgc3JjPXtpbWcuc3JjfSBhbHQ9e2ltZy5hbHR9IC8+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duXHJcbiAgICAgICAgICAgICAgICByZW5kZXJlcnM9e21hcmtkb3duUmVuZGVyZXJzfVxyXG4gICAgICAgICAgICAgICAgZXNjYXBlSHRtbD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbj17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==