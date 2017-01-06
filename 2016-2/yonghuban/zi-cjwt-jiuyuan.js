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

	;__weex_define__("@weex-component/f0485dde94645627f59bddbd0e727bfe", [], function(__weex_require__, __weex_exports__, __weex_module__){

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
	        "value": "问题一：我提交拖车救援信息后，发现附近暂时没有拖车，如何处理？"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "shsj"
	      ],
	      "attr": {
	        "value": "您可以拨打紧急救援电话，平台会立即安排附近拖车人员立即开往救援地点。"
	      }
	    },
	    {
	      "type": "div",
	      "style": {
	        "height": 20
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "title"
	      ],
	      "attr": {
	        "value": "问题二：我提交维修救援信息后怎么办？"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "shsj"
	      ],
	      "attr": {
	        "value": "商家接到你的救援信息后会马上派单到维修人员，维修人员接单后你即可看到救援车辆出发行驶轨迹和维修人员电话信息。"
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
	;__weex_bootstrap__("@weex-component/f0485dde94645627f59bddbd0e727bfe", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);