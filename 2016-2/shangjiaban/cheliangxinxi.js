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

	;__weex_define__("@weex-component/be79dd314546675d31ae9028db05f19d", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __weex_module__.exports ={
	        data: function () {return {
	            title:"",
	            clxx:[
	                {
	                    bycx: "",
	                    cphm: "",
	                    xslc: "",
	                    lxr: "",
	                    tel: "",
	                },
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
	        "expression": function () {return this.clxx},
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
	                "value": "保养车型："
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "info-txt2"
	              ],
	              "attr": {
	                "value": function () {return this.data.bycx}
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
	                "value": "车牌号码："
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "info-txt2"
	              ],
	              "attr": {
	                "value": function () {return this.data.cphm}
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
	                "value": "行驶里程："
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "info-txt2"
	              ],
	              "attr": {
	                "value": function () {return (this.data.xslc) + '公里'}
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
	                "value": "联系人："
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "info-txt2"
	              ],
	              "attr": {
	                "value": function () {return this.data.lxr}
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
	                "value": "手机号："
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "info-txt2"
	              ],
	              "attr": {
	                "value": function () {return this.data.tel}
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
	    "fontSize": 28,
	    "width": 560
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/be79dd314546675d31ae9028db05f19d", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);