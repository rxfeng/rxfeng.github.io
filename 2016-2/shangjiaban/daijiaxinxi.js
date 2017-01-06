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

	;__weex_define__("@weex-component/3a4fddcc6a9c791fadb2e118d5aa8eda", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __weex_module__.exports ={
	        data: function () {return {
	            title:"",
	            qian:"",
	            daijia:[
	                {
	                    quche:"",
	                    songche:"",
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
	        },
	        {
	          "type": "text",
	          "classList": [
	            "title-txt",
	            "right",
	            "red"
	          ],
	          "attr": {
	            "value": function () {return '￥' + (this.qian)}
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
	        "expression": function () {return this.daijia},
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
	                "value": "取车地址："
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "info-txt2"
	              ],
	              "attr": {
	                "value": function () {return this.data.quche}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "info"
	          ],
	          "shown": function () {return this.data.songche},
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "info-txt1"
	              ],
	              "attr": {
	                "value": "送车地址："
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "info-txt2"
	              ],
	              "attr": {
	                "value": function () {return this.data.songche}
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
	    "paddingTop": 10,
	    "paddingBottom": 10,
	    "borderBottomWidth": 1,
	    "borderColor": "#e6e6e6",
	    "marginLeft": 10,
	    "marginRight": 10,
	    "flexDirection": "row",
	    "justifyContent": "space-between"
	  },
	  "title-txt": {
	    "fontSize": 32,
	    "color": "#373634"
	  },
	  "right": {
	    "fontSize": 28
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
	    "fontSize": 28,
	    "width": 556
	  },
	  "jiantou": {
	    "width": 47,
	    "height": 47,
	    "position": "absolute",
	    "top": 130,
	    "right": 20
	  },
	  "red": {
	    "color": "#E95412"
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/3a4fddcc6a9c791fadb2e118d5aa8eda", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);