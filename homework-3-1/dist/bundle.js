/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/data/avg-by-column.js":
/*!***********************************!*\
  !*** ./src/data/avg-by-column.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return avgByColumn; });\nfunction avgByColumn(table, groupIdx, avgIdx) {\n  let result = {};\n\n  for (let rowIdx = 0; rowIdx < table.length; rowIdx++) {\n    let row = table[rowIdx];\n    let key = (groupIdx !== null) ? row[groupIdx] : 'Total';\n    let value = new Number(row[avgIdx]);\n\n    if (!(key in result)) {\n      result[key] = [value, 1];\n    }\n    else {\n      result[key] = [result[key][0] + value, result[key][1] + 1];\n    }\n  }\n\n  for (let key in result) {\n    let value = result[key];\n    value = value[0] / value[1];\n    result[key] = value;\n  }\n  return result;\n}\n\n\n//# sourceURL=webpack:///./src/data/avg-by-column.js?");

/***/ }),

/***/ "./src/data/decode-raw-data.js":
/*!*************************************!*\
  !*** ./src/data/decode-raw-data.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return decodeRawData; });\nfunction decodeRawData(rawData) {\n  let table = [];\n  let rows = rawData.split('\\n');\n\n  for (let rowIdx = 1; rowIdx < rows.length; rowIdx++) {\n    let cells = rows[rowIdx].trim().split(',');\n\n    if (cells.length < 4) {\n      continue;\n    }\n    table.push(cells);\n  }\n  return table;\n}\n\n\n//# sourceURL=webpack:///./src/data/decode-raw-data.js?");

/***/ }),

/***/ "./src/data/raw-data.js":
/*!******************************!*\
  !*** ./src/data/raw-data.js ***!
  \******************************/
/*! exports provided: RAW_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RAW_DATA\", function() { return RAW_DATA; });\nconst RAW_DATA =\n`MONTH,DEPARTMENT,EMPLOYEE,AMOUNT\n2018-01,Legals,Smith A.,14289.66\n2018-01,Legals,Jonson B.,7408.05\n2018-01,Legals,Lee C.,10102.98\n2018-01,Legals,Janaro R.,8127.94\n2018-01,Legals,Conor J.,10341.33\n2018-01,Legals,Conor S.,7010.52\n2018-02,Legals,Smith A.,9927.47\n2018-02,Legals,Jonson B.,7053.96\n2018-02,Legals,Lee C.,7057.36\n2018-02,Legals,Janaro R.,13043.93\n2018-02,Legals,Conor J.,12613.82\n2018-02,Legals,Conor S.,10310.33\n2018-02,Legals,Travolta J.,10857.58\n2018-03,Legals,Smith A.,11043.21\n2018-03,Legals,Jonson B.,5144.06\n2018-03,Legals,Conor J.,11022.75\n2018-03,Legals,Conor S.,11651.08\n2018-03,Legals,Clark A.,7889.03\n2018-03,Legals,Doyle C.,6490.54\n2018-01,Compliance,Smith A.,14980.55\n2018-01,Compliance,Johnson B.,8132.88\n2018-01,Compliance,Williams C.,5635.36\n2018-01,Compliance,Jones D.,12454.79\n2018-01,Compliance,Brown F.,5787.25\n2018-01,Compliance,Davis G.,8618.50\n2018-02,Compliance,Smith A.,5093.56\n2018-02,Compliance,Johnson B.,11625.41\n2018-02,Compliance,Williams C.,11875.55\n2018-02,Compliance,Jones D.,10008.70\n2018-02,Compliance,Brown F.,6291.20\n2018-02,Compliance,Davis G.,12524.68\n2018-02,Compliance,Miller H.,11630.42\n2018-03,Compliance,Johnson B.,5681.83\n2018-03,Compliance,Williams C.,10941.43\n2018-03,Compliance,Jones D.,8859.54\n2018-03,Compliance,Brown F.,6663.98\n2018-03,Compliance,Davis G.,6988.17\n2018-03,Compliance,Miller H.,14138.79\n2018-01,Marketing & Sales,Wilson A.,13200.80\n2018-01,Marketing & Sales,Moore B.,6145.94\n2018-01,Marketing & Sales,Taylor C.,8459.98\n2018-01,Marketing & Sales,Anderson D.,8639.86\n2018-01,Marketing & Sales,Thomas E.,9384.85\n2018-01,Marketing & Sales,Jackson F.,7018.11\n2018-02,Marketing & Sales,White G.,13853.19\n2018-02,Marketing & Sales,Moore B.,5292.43\n2018-02,Marketing & Sales,Taylor C.,10465.98\n2018-02,Marketing & Sales,Anderson D.,5907.43\n2018-02,Marketing & Sales,Thomas E.,8700.87\n2018-02,Marketing & Sales,Jackson F.,7444.12\n2018-02,Marketing & Sales,Miller I.,12142.15\n2018-03,Marketing & Sales,Moore B.,8600.83\n2018-03,Marketing & Sales,Taylor C.,5185.76\n2018-03,Marketing & Sales,Anderson D.,5491.73\n2018-03,Marketing & Sales,Thomas E.,11236.40\n2018-03,Marketing & Sales,Jackson F.,12056.60\n2018-03,Marketing & Sales,Miller I.,6828.36\n2018-01,Production,Harris A.,10125.18\n2018-01,Production,Martin B.,5035.75\n2018-01,Production,Thompson C.,12100.76\n2018-01,Production,Garcia D.,13739.30\n2018-01,Production,Martinez E.,9274.72\n2018-01,Production,Robinson F.,10073.36\n2018-02,Production,Clark H.,7193.33\n2018-02,Production,Martin B.,13999.01\n2018-02,Production,Thompson C.,14287.98\n2018-02,Production,Garcia D.,8285.04\n2018-02,Production,Martinez E.,14948.03\n2018-02,Production,Robinson F.,13104.71\n2018-02,Production,Driller R.,5443.28\n2018-03,Production,Martin B.,14379.60\n2018-03,Production,Thompson C.,13450.47\n2018-03,Production,Garcia D.,11364.05\n2018-03,Production,Martinez E.,5548.34\n2018-03,Production,Robinson F.,10733.07\n2018-03,Production,Driller R.,13843.69\n2018-01,Service,King A.,8617.04\n2018-01,Service,Wright B.,13078.48\n2018-01,Service,Lopez C.,5150.28\n2018-01,Service,Hill D.,14136.06\n2018-01,Service,Scott E.,6731.88\n2018-01,Service,Green F.,13076.14\n2018-02,Service,Adams G.,12432.64\n2018-02,Service,Wright B.,6735.59\n2018-02,Service,Lopez C.,12947.72\n2018-02,Service,Hill D.,14863.50\n2018-02,Service,Scott E.,12849.35\n2018-02,Service,Green F.,13825.99\n2018-02,Service,Driller R.,11326.42\n2018-03,Service,Wright B.,10512.58\n2018-03,Service,Lopez C.,9330.24\n2018-03,Service,Hill D.,5373.41\n2018-03,Service,Scott E.,5327.75\n2018-03,Service,Green F.,6972.30\n2018-03,Service,Driller R.,10481.02\n`;\n\n\n//# sourceURL=webpack:///./src/data/raw-data.js?");

/***/ }),

/***/ "./src/data/sum-by-column.js":
/*!***********************************!*\
  !*** ./src/data/sum-by-column.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return sumByColumn; });\nfunction sumByColumn(table, groupIdx, sumIdx) {\n  let result = {};\n\n  for (let rowIdx = 0; rowIdx < table.length; rowIdx++) {\n    let row = table[rowIdx];\n    let key = (groupIdx !== null) ? row[groupIdx] : 'Total';\n    let value = new Number(row[sumIdx]);\n\n    if (!(key in result)) {\n      result[key] = value;\n    }\n    else {\n      result[key] += value;\n    }\n  }\n  return result;\n}\n\n\n//# sourceURL=webpack:///./src/data/sum-by-column.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_raw_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/raw-data */ \"./src/data/raw-data.js\");\n/* harmony import */ var _data_decode_raw_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/decode-raw-data */ \"./src/data/decode-raw-data.js\");\n/* harmony import */ var _data_sum_by_column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/sum-by-column */ \"./src/data/sum-by-column.js\");\n/* harmony import */ var _data_avg_by_column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/avg-by-column */ \"./src/data/avg-by-column.js\");\n/* harmony import */ var _views_show_total__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/show-total */ \"./src/views/show-total.js\");\n/* harmony import */ var _views_show_by_departments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/show-by-departments */ \"./src/views/show-by-departments.js\");\n/* harmony import */ var _views_show_by_monthes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/show-by-monthes */ \"./src/views/show-by-monthes.js\");\n\n\n\n\n\n\n\n\nlet dataTable = Object(_data_decode_raw_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_data_raw_data__WEBPACK_IMPORTED_MODULE_0__[\"RAW_DATA\"]);\nlet sum = Object(_data_sum_by_column__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dataTable, null, 3);\nlet avgByDepartment = Object(_data_avg_by_column__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(dataTable, 1, 3);\nlet avgByMonth = Object(_data_avg_by_column__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(dataTable, 0, 3);\n\nlet container = document.getElementById(\"container\");\nObject(_views_show_total__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(sum, container);\nObject(_views_show_by_departments__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(avgByDepartment, container);\nObject(_views_show_by_monthes__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(avgByMonth, container);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/views/create-table.js":
/*!***********************************!*\
  !*** ./src/views/create-table.js ***!
  \***********************************/
/*! exports provided: createTable, createRow, createCell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTable\", function() { return createTable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createRow\", function() { return createRow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createCell\", function() { return createCell; });\nfunction createTable(rows) {\n  let table = document.createElement('table');\n\n  for (let rowIdx = 0; rowIdx < rows.length; rowIdx++) {\n    table.appendChild(rows[rowIdx]);\n  }\n  return table;\n}\n\nfunction createRow(cells) {\n  let row = document.createElement('tr');\n\n  for (let cellIdx = 0; cellIdx < cells.length; cellIdx++) {\n    row.appendChild(cells[cellIdx]);\n  }\n  return row;\n}\n\nfunction createCell(type, text) {\n  let cell = document.createElement(type);\n  let content = document.createTextNode(text);\n  cell.appendChild(content);\n  return cell;\n}\n\n\n//# sourceURL=webpack:///./src/views/create-table.js?");

/***/ }),

/***/ "./src/views/show-by-departments.js":
/*!******************************************!*\
  !*** ./src/views/show-by-departments.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return showByDepartments; });\n/* harmony import */ var _create_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-table */ \"./src/views/create-table.js\");\n\n\nfunction showByDepartments(data, parent) {\n  let th1 = Object(_create_table__WEBPACK_IMPORTED_MODULE_0__[\"createCell\"])('th', 'Department');\n  let th2 = Object(_create_table__WEBPACK_IMPORTED_MODULE_0__[\"createCell\"])('th', 'Avg. Payment');\n  let rows = [Object(_create_table__WEBPACK_IMPORTED_MODULE_0__[\"createRow\"])([th1, th2])];\n\n  for (let key in data) {\n    let value = data[key];\n    let td1 = Object(_create_table__WEBPACK_IMPORTED_MODULE_0__[\"createCell\"])('td', key);\n    let td2 = Object(_create_table__WEBPACK_IMPORTED_MODULE_0__[\"createCell\"])('td', (value).toFixed(2));\n    rows.push(Object(_create_table__WEBPACK_IMPORTED_MODULE_0__[\"createRow\"])([td1, td2]));\n  }\n  parent.appendChild(Object(_create_table__WEBPACK_IMPORTED_MODULE_0__[\"createTable\"])(rows));\n  parent.appendChild(document.createElement('br'));\n}\n\n\n//# sourceURL=webpack:///./src/views/show-by-departments.js?");

/***/ }),

/***/ "./src/views/show-by-monthes.js":
/*!**************************************!*\
  !*** ./src/views/show-by-monthes.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return showByMonthes; });\n/* harmony import */ var _create_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-table */ \"./src/views/create-table.js\");\n\n\nfunction showByMonthes(data, parent) {\n  let th1 = Object(_create_table__WEBPACK_IMPORTED_MODULE_0__[\"createCell\"])('th', 'Month');\n  let th2 = Object(_create_table__WEBPACK_IMPORTED_MODULE_0__[\"createCell\"])('th', 'Avg. Payment');\n  let rows = [Object(_create_table__WEBPACK_IMPORTED_MODULE_0__[\"createRow\"])([th1, th2])];\n\n  for (let key in data) {\n    let value = data[key];\n    let td1 = Object(_create_table__WEBPACK_IMPORTED_MODULE_0__[\"createCell\"])('td', key);\n    let td2 = Object(_create_table__WEBPACK_IMPORTED_MODULE_0__[\"createCell\"])('td', (value).toFixed(2));\n    rows.push(Object(_create_table__WEBPACK_IMPORTED_MODULE_0__[\"createRow\"])([td1, td2]));\n  }\n  parent.appendChild(Object(_create_table__WEBPACK_IMPORTED_MODULE_0__[\"createTable\"])(rows));\n  parent.appendChild(document.createElement('br'));\n}\n\n\n//# sourceURL=webpack:///./src/views/show-by-monthes.js?");

/***/ }),

/***/ "./src/views/show-total.js":
/*!*********************************!*\
  !*** ./src/views/show-total.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return showTotal; });\n/* harmony import */ var _create_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-table */ \"./src/views/create-table.js\");\n\n\nfunction showTotal(data, parent) {\n  let th = Object(_create_table__WEBPACK_IMPORTED_MODULE_0__[\"createCell\"])('th', 'Total');\n  let rows = [Object(_create_table__WEBPACK_IMPORTED_MODULE_0__[\"createRow\"])([th])];\n  let total = (('Total' in data) ? data['Total'] : 0).toFixed(2);\n  let td = Object(_create_table__WEBPACK_IMPORTED_MODULE_0__[\"createCell\"])('td', total);\n  rows.push(Object(_create_table__WEBPACK_IMPORTED_MODULE_0__[\"createRow\"])([td]));\n  parent.appendChild(Object(_create_table__WEBPACK_IMPORTED_MODULE_0__[\"createTable\"])(rows));\n  parent.appendChild(document.createElement('br'));\n}\n\n\n//# sourceURL=webpack:///./src/views/show-total.js?");

/***/ })

/******/ });