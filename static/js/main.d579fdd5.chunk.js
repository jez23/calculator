(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_jezblackmore_Desktop_northcoders_fe_tiny_react_apps_fe_tiny_react_apps_calculatorProject_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_components_Screen__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),_components_Buttons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__),App=function App(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(buttonValues),_useState2=Object(_Users_jezblackmore_Desktop_northcoders_fe_tiny_react_apps_fe_tiny_react_apps_calculatorProject_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),buttons=_useState2[0],setButtons=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)("0"),_useState4=Object(_Users_jezblackmore_Desktop_northcoders_fe_tiny_react_apps_fe_tiny_react_apps_calculatorProject_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),result=_useState4[0],setResult=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(methods),_useState6=Object(_Users_jezblackmore_Desktop_northcoders_fe_tiny_react_apps_fe_tiny_react_apps_calculatorProject_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState5,2),calMethods=_useState6[0],setCalMethods=_useState6[1],workoutResult=function workoutResult(value){if("0"===result&&setResult(""),"number"===typeof value){var regEx=/[^0-9]$/gim;if(result.match(regEx)&&"0"==value&&"."!==result.charAt(result.length-1))console.log("no");else{var num=value.toString();setResult((function(_){return _+num}))}}else if("C"===value)setResult("0");else if("."===value){var _regEx=/\d*\.\d*$/gim,onlyOneDecimalPoint=result;onlyOneDecimalPoint.match(_regEx)||setResult((function(_){return _+value}))}else if("="===value){for(var _regEx2=/[^0-9]$/gim,removeLastIfNan=result;removeLastIfNan.match(_regEx2);)removeLastIfNan=removeLastIfNan.substring(0,removeLastIfNan.length-1);var solution=eval(removeLastIfNan);setResult("".concat(solution))}else{var _regEx3=/[^0-9]$/gim;result.match(_regEx3)||setResult("".concat(result).concat(value))}};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"table",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"calBody",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Screen__WEBPACK_IMPORTED_MODULE_1__.a,{result:result}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Buttons__WEBPACK_IMPORTED_MODULE_2__.a,{buttons:buttons,workoutResult:workoutResult,setResult:setResult,calMethods:calMethods})]})})};__webpack_exports__.a=App;var buttonValues=[9,8,7,6,5,4,3,2,1,0,".","C"],methods=["+","-","/","*","="]},function(_,e,t){"use strict";var s=t(0);e.a=function(_){var e=_.result;return Object(s.jsx)("div",{className:"screen",children:Object(s.jsx)("p",{children:e})})}},function(_,e,t){"use strict";var s=t(0);e.a=function(_){var e=_.buttons,t=_.workoutResult,r=_.calMethods;return Object(s.jsxs)("div",{className:"buttons",children:[Object(s.jsx)("div",{className:"numbers",children:e.map((function(_,e){return Object(s.jsx)("div",{onClick:function(){return t(_)},children:_},"".concat(_,"-").concat(e))}))}),Object(s.jsx)("div",{className:"methods",children:r.map((function(_,e){return Object(s.jsx)("div",{onClick:function(){return t(_)},children:_},"".concat(_,"-").concat(e))}))})]})}},function(_,e,t){"use strict";t.r(e);var s=t(1),r=t.n(s),a=t(4),c=t.n(a),u=(t(13),t(5)),n=t(0);c.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(u.a,{})}),document.getElementById("root"))},,,,,function(_,e,t){}],[[8,1,2]]]);
//# sourceMappingURL=main.d579fdd5.chunk.js.map