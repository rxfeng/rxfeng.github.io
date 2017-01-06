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

	;__weex_define__("@weex-component/1fab05a01143038bf7c88bfff8c4fd22", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "bottom"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "style": {
	        "flexDirection": "row"
	      },
	      "children": [
	        {
	          "type": "div",
	          "style": {
	            "flexDirection": "row",
	            "marginRight": 10,
	            "marginTop": 20
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "zongji-txt"
	              ],
	              "attr": {
	                "value": "总计:"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "zongjijine-txt",
	                "red"
	              ],
	              "attr": {
	                "value": "￥1250"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "quedingbtn"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "queding-txt"
	              ],
	              "attr": {
	                "value": "确 定"
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "red": {
	    "color": "#E95412"
	  },
	  "bottom": {
	    "flexDirection": "row",
	    "justifyContent": "flex-end",
	    "width": 750,
	    "height": 100,
	    "paddingLeft": 20,
	    "backgroundColor": "#ffffff",
	    "borderTopWidth": 1,
	    "borderColor": "#e6e6e6",
	    "position": "fixed",
	    "bottom": 0
	  },
	  "zongji-txt": {
	    "fontSize": 36,
	    "color": "#373634",
	    "marginTop": 10
	  },
	  "zongjijine-txt": {
	    "fontSize": 36,
	    "marginLeft": 10,
	    "marginTop": 10
	  },
	  "quedingbtn": {
	    "width": 180,
	    "backgroundColor": "#E95412",
	    "justifyContent": "center"
	  },
	  "queding-txt": {
	    "fontSize": 32,
	    "textAlign": "center",
	    "color": "#ffffff"
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/1fab05a01143038bf7c88bfff8c4fd22", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);