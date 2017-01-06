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

	;__weex_define__("@weex-component/82353f2c8f487f23aef882ac7ce6cec9", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __weex_module__.exports ={
	        data: function () {return {
	            title:"",
	            sjxx:[
	                {
	                    sjmc:"",
	                    dizhi:"",
	                    sjlx:"",
	                }
	            ],
	        }},
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "main"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "title",
	        "pr20",
	        "pl20"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "title-txt"
	          ],
	          "attr": {
	            "value": function () {return this.title}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "dingdaninfo"
	      ],
	      "repeat": {
	        "expression": function () {return this.sjxx},
	        "value": "data"
	      },
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "info"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "info-txt1"
	              ],
	              "attr": {
	                "value": "商家名称："
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "info-txt2"
	              ],
	              "attr": {
	                "value": function () {return this.data.sjmc}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "info"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "info-txt1"
	              ],
	              "attr": {
	                "value": "地址："
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "info-txt2"
	              ],
	              "attr": {
	                "value": function () {return this.data.dizhi}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "info"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "info-txt1"
	              ],
	              "attr": {
	                "value": "商家类型："
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "info-txt2"
	              ],
	              "attr": {
	                "value": function () {return this.data.sjlx}
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
	  "main": {
	    "backgroundColor": "#ffffff",
	    "marginTop": 20,
	    "borderWidth": 1,
	    "borderColor": "#e6e6e6"
	  },
	  "pr20": {
	    "paddingRight": 20
	  },
	  "pl20": {
	    "paddingLeft": 10
	  },
	  "title": {
	    "paddingTop": 20,
	    "paddingBottom": 10,
	    "borderBottomWidth": 1,
	    "borderColor": "#e6e6e6",
	    "marginLeft": 10,
	    "marginRight": 10
	  },
	  "title-txt": {
	    "fontSize": 32,
	    "color": "#373634"
	  },
	  "dingdaninfo": {
	    "padding": 20,
	    "borderWidth": 1,
	    "borderColor": "#e6e6e6"
	  },
	  "info": {
	    "flexDirection": "row",
	    "paddingBottom": 3,
	    "paddingTop": 3
	  },
	  "info-txt1": {
	    "color": "#737373",
	    "fontSize": 30
	  },
	  "info-txt2": {
	    "color": "#A0A0A0",
	    "fontSize": 28
	  },
	  "jiantou": {
	    "width": 47,
	    "height": 47,
	    "position": "absolute",
	    "top": 130,
	    "right": 20
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/82353f2c8f487f23aef882ac7ce6cec9", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);