"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/insurance",{

/***/ "./src/pages/insurance.tsx":
/*!*********************************!*\
  !*** ./src/pages/insurance.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Reports; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/shared */ \"./src/components/shared/index.ts\");\n/* harmony import */ var fin_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fin-ui */ \"./node_modules/fin-ui/dist/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Reports() {\n    _s();\n    const [selectedValue, setSelectedValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleDropDownChange = (selectedValue)=>{\n        setSelectedValue(selectedValue.value);\n        console.log(selectedValue);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared__WEBPACK_IMPORTED_MODULE_2__.Page, {\n        title: \"Dashboard\",\n        description: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-5/12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(fin_ui__WEBPACK_IMPORTED_MODULE_3__.DropDown, {\n                    options: [\n                        {\n                            label: \"Funeral Policy\",\n                            value: \"funeral\"\n                        },\n                        {\n                            label: \"Indlu Loan Data\",\n                            value: \"indlu\"\n                        },\n                        {\n                            label: \"Smart Advance Credit\",\n                            value: \"smart\"\n                        }\n                    ],\n                    onChange: handleDropDownChange,\n                    name: \"Policy\",\n                    value: selectedValue\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Projects\\\\Fin-Projects\\\\CSVFilesProject\\\\csvproject\\\\insurance-app\\\\src\\\\pages\\\\insurance.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Projects\\\\Fin-Projects\\\\CSVFilesProject\\\\csvproject\\\\insurance-app\\\\src\\\\pages\\\\insurance.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Projects\\\\Fin-Projects\\\\CSVFilesProject\\\\csvproject\\\\insurance-app\\\\src\\\\pages\\\\insurance.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"file\",\n                        name: \"\",\n                        id: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Projects\\\\Fin-Projects\\\\CSVFilesProject\\\\csvproject\\\\insurance-app\\\\src\\\\pages\\\\insurance.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Projects\\\\Fin-Projects\\\\CSVFilesProject\\\\csvproject\\\\insurance-app\\\\src\\\\pages\\\\insurance.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Projects\\\\Fin-Projects\\\\CSVFilesProject\\\\csvproject\\\\insurance-app\\\\src\\\\pages\\\\insurance.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(fin_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        color: \"warning\",\n                        loadingText: \"Uploading file\",\n                        size: \"md\",\n                        variant: \"outline\",\n                        children: \"Submit file\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Projects\\\\Fin-Projects\\\\CSVFilesProject\\\\csvproject\\\\insurance-app\\\\src\\\\pages\\\\insurance.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Projects\\\\Fin-Projects\\\\CSVFilesProject\\\\csvproject\\\\insurance-app\\\\src\\\\pages\\\\insurance.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Projects\\\\Fin-Projects\\\\CSVFilesProject\\\\csvproject\\\\insurance-app\\\\src\\\\pages\\\\insurance.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_s(Reports, \"jGy9vz42uNA8vwm/uxQ7PTRqf3s=\");\n_c = Reports;\nvar _c;\n$RefreshReg$(_c, \"Reports\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5zdXJhbmNlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0M7QUFDRztBQUNEO0FBRTNCLFNBQVNLOztJQUN0QixNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHTiwrQ0FBUUEsQ0FBQztJQUVuRCxNQUFNTyx1QkFBdUIsQ0FBQ0Y7UUFDNUJDLGlCQUFpQkQsY0FBY0csS0FBSztRQUNwQ0MsUUFBUUMsR0FBRyxDQUFDTDtJQUNkO0lBRUEscUJBQ0UsOERBQUNKLG9EQUFJQTtRQUFDVSxPQUFNO1FBQVlDLGFBQVk7OzBCQUNsQyw4REFBQ0M7Z0JBQUlDLFdBQVU7MEJBQ2YsNEVBQUNYLDRDQUFRQTtvQkFDUFksU0FBUzt3QkFDUDs0QkFDRUMsT0FBTzs0QkFDUFIsT0FBTzt3QkFDVDt3QkFDQTs0QkFDRVEsT0FBTzs0QkFDUFIsT0FBTzt3QkFDVDt3QkFDQTs0QkFDRVEsT0FBTzs0QkFDUFIsT0FBTzt3QkFDVDtxQkFDRDtvQkFDRFMsVUFBVVY7b0JBQ1ZXLE1BQUs7b0JBQ0xWLE9BQU9IOzs7Ozs7Ozs7OzswQkFJVCw4REFBQ2M7Ozs7OzBCQUVELDhEQUFDQzs7a0NBQ0MsOERBQUNDO3dCQUFNQyxNQUFLO3dCQUFPSixNQUFLO3dCQUFHSyxJQUFHOzs7Ozs7a0NBQzlCLDhEQUFDSjs7Ozs7a0NBQ0QsOERBQUNBOzs7OztrQ0FDRCw4REFBQ2pCLDBDQUFNQTt3QkFDTHNCLE9BQU07d0JBQ05DLGFBQVk7d0JBQ1pDLE1BQUs7d0JBQ0xDLFNBQVE7a0NBQ1Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1UO0dBakR3QnZCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbnN1cmFuY2UudHN4Pzc4YTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ0AvY29tcG9uZW50cy9zaGFyZWQnO1xuaW1wb3J0IHsgQnV0dG9uLCBEcm9wRG93biB9IGZyb20gJ2Zpbi11aSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlcG9ydHMoKSB7XG4gIGNvbnN0IFtzZWxlY3RlZFZhbHVlLCBzZXRTZWxlY3RlZFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBoYW5kbGVEcm9wRG93bkNoYW5nZSA9IChzZWxlY3RlZFZhbHVlKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRWYWx1ZShzZWxlY3RlZFZhbHVlLnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFZhbHVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlIHRpdGxlPVwiRGFzaGJvYXJkXCIgZGVzY3JpcHRpb249XCJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTUvMTInPlxuICAgICAgPERyb3BEb3duXG4gICAgICAgIG9wdGlvbnM9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ0Z1bmVyYWwgUG9saWN5JyxcbiAgICAgICAgICAgIHZhbHVlOiAnZnVuZXJhbCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ0luZGx1IExvYW4gRGF0YScsXG4gICAgICAgICAgICB2YWx1ZTogJ2luZGx1JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnU21hcnQgQWR2YW5jZSBDcmVkaXQnLFxuICAgICAgICAgICAgdmFsdWU6ICdzbWFydCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZURyb3BEb3duQ2hhbmdlfVxuICAgICAgICBuYW1lPVwiUG9saWN5XCJcbiAgICAgICAgdmFsdWU9e3NlbGVjdGVkVmFsdWV9XG4gICAgICAgIFxuICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJyIC8+XG4gICAgICBcbiAgICAgIDxmb3JtPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiXCIgaWQ9XCJcIiAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBjb2xvcj1cIndhcm5pbmdcIlxuICAgICAgICAgIGxvYWRpbmdUZXh0PVwiVXBsb2FkaW5nIGZpbGVcIlxuICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICA+XG4gICAgICAgICAgU3VibWl0IGZpbGVcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9QYWdlPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJQYWdlIiwiQnV0dG9uIiwiRHJvcERvd24iLCJSZXBvcnRzIiwic2VsZWN0ZWRWYWx1ZSIsInNldFNlbGVjdGVkVmFsdWUiLCJoYW5kbGVEcm9wRG93bkNoYW5nZSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJvcHRpb25zIiwibGFiZWwiLCJvbkNoYW5nZSIsIm5hbWUiLCJiciIsImZvcm0iLCJpbnB1dCIsInR5cGUiLCJpZCIsImNvbG9yIiwibG9hZGluZ1RleHQiLCJzaXplIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/insurance.tsx\n"));

/***/ })

});