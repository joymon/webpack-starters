/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	//document.write("Simple JS module worked with webpack" + "<br/>");

	//var content = require("./content")
	//document.write("Loaded another JS component &" +content);
	var loggerModule = __webpack_require__(1);
	var logger = new loggerModule.logger();
	logger.log("TypeScript Worked !!! - module loaded <br/>");

	var tscomponent = __webpack_require__(2);
	var provider = new tscomponent.provider();
	document.write("TS component which has dependency on JS component worked. Data - " + provider.getContent());


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	var logger = (function () {
	    function logger() {
	    }
	    logger.prototype.log = function (msg) {
	        console.log(msg);
	        document.write(msg);
	    };
	    return logger;
	}());
	exports.logger = logger;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var content = __webpack_require__(3);
	var provider = (function () {
	    function provider() {
	    }
	    provider.prototype.getContent = function () {
	        console.log(content);
	        return content;
	    };
	    return provider;
	}());
	exports.provider = provider;


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "This is my first JavaSript module"

/***/ }
/******/ ]);