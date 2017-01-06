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
/***/ function(module, exports) {

	;__weex_define__("@weex-component/5eb11fed79d9033d61c44409139a6b50", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "wt"
	  ],
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "title"
	      ],
	      "attr": {
	        "value": "问题一：目前系统支持中石油加油卡在线支付加油费用吗？"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "shsj"
	      ],
	      "attr": {
	        "value": "目前系统暂不支持中石油或中石化加油卡在线支付加油费用。"
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "wt": {
	    "marginLeft": 40,
	    "marginRight": 40
	  },
	  "title": {
	    "fontSize": 30,
	    "fontWeight": "bold"
	  },
	  "txt": {
	    "fontSize": 29,
	    "color": "#a0a0a0",
	    "marginTop": 3,
	    "marginBottom": 3
	  },
	  "ol": {
	    "marginLeft": 25
	  },
	  "shsj": {
	    "marginLeft": 10
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/5eb11fed79d9033d61c44409139a6b50", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);