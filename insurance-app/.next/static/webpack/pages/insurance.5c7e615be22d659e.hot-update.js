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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Reports; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/shared */ \"./src/components/shared/index.ts\");\n/* harmony import */ var fin_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fin-ui */ \"./node_modules/fin-ui/dist/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Reports() {\n    _s();\n    const [selectedValue, setSelectedValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleDropDownChange = (selectedValue)=>{\n        setSelectedValue(selectedValue.value);\n    };\n    const handleFileChange = (event)=>{\n        setFile(event.target.files[0]);\n    };\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        if (!file) {\n            console.error(\"No file selected\");\n            return;\n        }\n        const formData = new FormData();\n        formData.append(\"csv_file\", file);\n        const apiRoute = getApiRoute(selectedValue);\n        try {\n            const response = await fetch(\"http://127.0.0.1:8000/csvapp/api/\".concat(apiRoute, \"/\"), {\n                method: \"POST\",\n                body: formData\n            });\n            if (response.ok) {\n                console.log(\"File uploaded successfully\");\n            } else {\n                console.error(\"Failed to upload file\");\n            }\n        } catch (error) {\n            console.error(\"Error uploading file\", error);\n        }\n    };\n    const getApiRoute = (selectedValue)=>{\n        switch(selectedValue){\n            case \"funeral\":\n                return \"funeral_policies\";\n            case \"indlu\":\n                return \"indlu_loan_data_list\";\n            case \"smart\":\n                return \"smart_credit_info_list\";\n            default:\n                return \"\";\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared__WEBPACK_IMPORTED_MODULE_2__.Page, {\n        title: \"Dashboard\",\n        description: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-3/12 h-16\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(fin_ui__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                            children: \"Upload required files below\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Projects\\\\Fin-Projects\\\\CSVFilesProject\\\\csvproject\\\\insurance-app\\\\src\\\\pages\\\\insurance.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Projects\\\\Fin-Projects\\\\CSVFilesProject\\\\csvproject\\\\insurance-app\\\\src\\\\pages\\\\insurance.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(fin_ui__WEBPACK_IMPORTED_MODULE_3__.DropDown, {\n                            options: [\n                                {\n                                    label: \"Funeral Policy\",\n                                    value: \"funeral\"\n                                },\n                                {\n                                    label: \"Indlu Loan Data\",\n                                    value: \"indlu\"\n                                },\n                                {\n                                    label: \"Smart Advance Credit\",\n                                    value: \"smart\"\n                                }\n                            ],\n                            onChange: handleDropDownChange,\n                            name: \"Policy\",\n                            value: selectedValue\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Projects\\\\Fin-Projects\\\\CSVFilesProject\\\\csvproject\\\\insurance-app\\\\src\\\\pages\\\\insurance.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Projects\\\\Fin-Projects\\\\CSVFilesProject\\\\csvproject\\\\insurance-app\\\\src\\\\pages\\\\insurance.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Projects\\\\Fin-Projects\\\\CSVFilesProject\\\\csvproject\\\\insurance-app\\\\src\\\\pages\\\\insurance.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Projects\\\\Fin-Projects\\\\CSVFilesProject\\\\csvproject\\\\insurance-app\\\\src\\\\pages\\\\insurance.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"mt-3\",\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"file\",\n                        name: \"csv_file\",\n                        id: \"file\",\n                        onChange: handleFileChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Projects\\\\Fin-Projects\\\\CSVFilesProject\\\\csvproject\\\\insurance-app\\\\src\\\\pages\\\\insurance.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Projects\\\\Fin-Projects\\\\CSVFilesProject\\\\csvproject\\\\insurance-app\\\\src\\\\pages\\\\insurance.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Projects\\\\Fin-Projects\\\\CSVFilesProject\\\\csvproject\\\\insurance-app\\\\src\\\\pages\\\\insurance.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(fin_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        type: \"submit\",\n                        color: \"warning\",\n                        loadingText: \"Uploading file\",\n                        size: \"md\",\n                        variant: \"outline\",\n                        children: \"Submit file\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Projects\\\\Fin-Projects\\\\CSVFilesProject\\\\csvproject\\\\insurance-app\\\\src\\\\pages\\\\insurance.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Projects\\\\Fin-Projects\\\\CSVFilesProject\\\\csvproject\\\\insurance-app\\\\src\\\\pages\\\\insurance.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Projects\\\\Fin-Projects\\\\CSVFilesProject\\\\csvproject\\\\insurance-app\\\\src\\\\pages\\\\insurance.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n}\n_s(Reports, \"jhXBHPGeZSvL9zufAu+g5mH30eU=\");\n_c = Reports;\nvar _c;\n$RefreshReg$(_c, \"Reports\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5zdXJhbmNlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0M7QUFDRztBQUNLO0FBRWpDLFNBQVNNOztJQUN0QixNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHUCwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUNRLE1BQU1DLFFBQVEsR0FBR1QsK0NBQVFBLENBQUM7SUFFakMsTUFBTVUsdUJBQXVCLENBQUNKO1FBQzVCQyxpQkFBaUJELGNBQWNLLEtBQUs7SUFDdEM7SUFFQSxNQUFNQyxtQkFBbUIsQ0FBQ0M7UUFDeEJKLFFBQVFJLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLEVBQUU7SUFDL0I7SUFFQSxNQUFNQyxlQUFlLE9BQU9IO1FBQzFCQSxNQUFNSSxjQUFjO1FBRXBCLElBQUksQ0FBQ1QsTUFBTTtZQUNUVSxRQUFRQyxLQUFLLENBQUM7WUFDZDtRQUNGO1FBRUEsTUFBTUMsV0FBVyxJQUFJQztRQUNyQkQsU0FBU0UsTUFBTSxDQUFDLFlBQVlkO1FBRTVCLE1BQU1lLFdBQVdDLFlBQVlsQjtRQUU3QixJQUFJO1lBQ0YsTUFBTW1CLFdBQVcsTUFBTUMsTUFBTSxvQ0FBNkMsT0FBVEgsVUFBUyxNQUFJO2dCQUM1RUksUUFBUTtnQkFDUkMsTUFBTVI7WUFDUjtZQUVBLElBQUlLLFNBQVNJLEVBQUUsRUFBRTtnQkFDZlgsUUFBUVksR0FBRyxDQUFDO1lBQ2QsT0FBTztnQkFDTFosUUFBUUMsS0FBSyxDQUFDO1lBQ2hCO1FBQ0YsRUFBRSxPQUFPQSxPQUFPO1lBQ2RELFFBQVFDLEtBQUssQ0FBQyx3QkFBd0JBO1FBQ3hDO0lBQ0Y7SUFFQSxNQUFNSyxjQUFjLENBQUNsQjtRQUNuQixPQUFRQTtZQUNOLEtBQUs7Z0JBQ0gsT0FBTztZQUNULEtBQUs7Z0JBQ0gsT0FBTztZQUNULEtBQUs7Z0JBQ0gsT0FBTztZQUNUO2dCQUNFLE9BQU87UUFDWDtJQUNGO0lBRUEscUJBQ0UsOERBQUNMLG9EQUFJQTtRQUFDOEIsT0FBTTtRQUFZQyxhQUFZOzswQkFDbEMsOERBQUNDO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUM5Qix3Q0FBSUE7c0NBQUM7Ozs7Ozs7Ozs7O2tDQUVSLDhEQUFDNkI7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUMvQiw0Q0FBUUE7NEJBQ1BnQyxTQUFTO2dDQUNQO29DQUNFQyxPQUFPO29DQUNQekIsT0FBTztnQ0FDVDtnQ0FDQTtvQ0FDRXlCLE9BQU87b0NBQ1B6QixPQUFPO2dDQUNUO2dDQUNBO29DQUNFeUIsT0FBTztvQ0FDUHpCLE9BQU87Z0NBQ1Q7NkJBQ0Q7NEJBQ0QwQixVQUFVM0I7NEJBQ1Y0QixNQUFLOzRCQUNMM0IsT0FBT0w7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUliLDhEQUFDaUM7Ozs7OzBCQUVELDhEQUFDQztnQkFBS04sV0FBVTtnQkFBT08sVUFBVXpCOztrQ0FDL0IsOERBQUMwQjt3QkFBTUMsTUFBSzt3QkFBT0wsTUFBSzt3QkFBV00sSUFBRzt3QkFBT1AsVUFBVXpCOzs7Ozs7a0NBQ3ZELDhEQUFDMkI7Ozs7O2tDQUNELDhEQUFDQTs7Ozs7a0NBQ0QsOERBQUNyQywwQ0FBTUE7d0JBQ0x5QyxNQUFLO3dCQUNMRSxPQUFNO3dCQUNOQyxhQUFZO3dCQUNaQyxNQUFLO3dCQUNMQyxTQUFRO2tDQUNUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVDtHQXBHd0IzQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5zdXJhbmNlLnRzeD83OGEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICdAL2NvbXBvbmVudHMvc2hhcmVkJztcbmltcG9ydCB7IEJ1dHRvbiwgRHJvcERvd24sIFRleHQgfSBmcm9tICdmaW4tdWknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXBvcnRzKCkge1xuICBjb25zdCBbc2VsZWN0ZWRWYWx1ZSwgc2V0U2VsZWN0ZWRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZURyb3BEb3duQ2hhbmdlID0gKHNlbGVjdGVkVmFsdWUpID0+IHtcbiAgICBzZXRTZWxlY3RlZFZhbHVlKHNlbGVjdGVkVmFsdWUudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUZpbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRGaWxlKGV2ZW50LnRhcmdldC5maWxlc1swXSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICghZmlsZSkge1xuICAgICAgY29uc29sZS5lcnJvcignTm8gZmlsZSBzZWxlY3RlZCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdjc3ZfZmlsZScsIGZpbGUpO1xuXG4gICAgY29uc3QgYXBpUm91dGUgPSBnZXRBcGlSb3V0ZShzZWxlY3RlZFZhbHVlKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vMTI3LjAuMC4xOjgwMDAvY3N2YXBwL2FwaS8ke2FwaVJvdXRlfS9gLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBmb3JtRGF0YSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0ZpbGUgdXBsb2FkZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gdXBsb2FkIGZpbGUnKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBsb2FkaW5nIGZpbGUnLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldEFwaVJvdXRlID0gKHNlbGVjdGVkVmFsdWUpID0+IHtcbiAgICBzd2l0Y2ggKHNlbGVjdGVkVmFsdWUpIHtcbiAgICAgIGNhc2UgJ2Z1bmVyYWwnOlxuICAgICAgICByZXR1cm4gJ2Z1bmVyYWxfcG9saWNpZXMnO1xuICAgICAgY2FzZSAnaW5kbHUnOlxuICAgICAgICByZXR1cm4gJ2luZGx1X2xvYW5fZGF0YV9saXN0JztcbiAgICAgIGNhc2UgJ3NtYXJ0JzpcbiAgICAgICAgcmV0dXJuICdzbWFydF9jcmVkaXRfaW5mb19saXN0JztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZSB0aXRsZT1cIkRhc2hib2FyZFwiIGRlc2NyaXB0aW9uPVwiXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMy8xMiBoLTE2XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMlwiPlxuICAgICAgICAgIDxUZXh0PlVwbG9hZCByZXF1aXJlZCBmaWxlcyBiZWxvdzwvVGV4dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMlwiPlxuICAgICAgICAgIDxEcm9wRG93blxuICAgICAgICAgICAgb3B0aW9ucz17W1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdGdW5lcmFsIFBvbGljeScsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdmdW5lcmFsJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnSW5kbHUgTG9hbiBEYXRhJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ2luZGx1JyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnU21hcnQgQWR2YW5jZSBDcmVkaXQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnc21hcnQnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVEcm9wRG93bkNoYW5nZX1cbiAgICAgICAgICAgIG5hbWU9XCJQb2xpY3lcIlxuICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkVmFsdWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxiciAvPlxuXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9J210LTMnIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiY3N2X2ZpbGVcIiBpZD1cImZpbGVcIiBvbkNoYW5nZT17aGFuZGxlRmlsZUNoYW5nZX0gLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgY29sb3I9XCJ3YXJuaW5nXCJcbiAgICAgICAgICBsb2FkaW5nVGV4dD1cIlVwbG9hZGluZyBmaWxlXCJcbiAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgICAgPlxuICAgICAgICAgIFN1Ym1pdCBmaWxlXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvUGFnZT5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUGFnZSIsIkJ1dHRvbiIsIkRyb3BEb3duIiwiVGV4dCIsIlJlcG9ydHMiLCJzZWxlY3RlZFZhbHVlIiwic2V0U2VsZWN0ZWRWYWx1ZSIsImZpbGUiLCJzZXRGaWxlIiwiaGFuZGxlRHJvcERvd25DaGFuZ2UiLCJ2YWx1ZSIsImhhbmRsZUZpbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsImZpbGVzIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwiZXJyb3IiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiYXBpUm91dGUiLCJnZXRBcGlSb3V0ZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5Iiwib2siLCJsb2ciLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwib3B0aW9ucyIsImxhYmVsIiwib25DaGFuZ2UiLCJuYW1lIiwiYnIiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJpZCIsImNvbG9yIiwibG9hZGluZ1RleHQiLCJzaXplIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/insurance.tsx\n"));

/***/ })

});