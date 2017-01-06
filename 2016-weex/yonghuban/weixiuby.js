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

	;__weex_define__("@weex-component/0742df5cfa250bca9258d28929376de5", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __weex_module__.exports = {
	        data: function () {return {
	            title: "",
	            youhui:"",
	            zje:"",
	            wtms:"",
	            weixiuby: [],
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
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "info"
	          ],
	          "repeat": function () {return this.weixiuby},
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "info-txt1"
	              ],
	              "attr": {
	                "value": function () {return this.programName}
	              }
	            },
	            {
	              "type": "div",
	              "style": {
	                "flexDirection": "row"
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "info-txt2",
	                    "hui"
	                  ],
	                  "style": {
	                    "textDecoration": "line-through"
	                  },
	                  "attr": {
	                    "value": function () {return '￥' + (this.cost)}
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "info-txt2",
	                    "red"
	                  ],
	                  "style": {
	                    "marginLeft": 10
	                  },
	                  "attr": {
	                    "value": function () {return '￥' + (this.bargain)}
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "style": {
	            "height": 1,
	            "width": 750,
	            "backgroundColor": "#e6e6e6",
	            "marginLeft": -20,
	            "marginTop": -1
	          }
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
	                "value": "优惠金额："
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "info-txt2",
	                "red"
	              ],
	              "attr": {
	                "value": function () {return '–￥' + (this.youhui)}
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
	                "value": "总金额："
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "info-txt2",
	                "red"
	              ],
	              "attr": {
	                "value": function () {return '￥' + (this.zje)}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "style": {
	            "flexDirection": "row",
	            "width": 750,
	            "paddingBottom": 15,
	            "paddingTop": 15
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "info-txt2"
	              ],
	              "style": {
	                "fontSize": 30,
	                "color": "#737373"
	              },
	              "attr": {
	                "value": "维修问题描述："
	              }
	            },
	            {
	              "type": "div",
	              "style": {
	                "justifyContent": "flex-end"
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "info-txt2"
	                  ],
	                  "style": {
	                    "width": 500,
	                    "marginTop": 3,
	                    "textAlign": "right"
	                  },
	                  "attr": {
	                    "value": function () {return this.wtms||'没有写维修问题描述哦~'}
	                  }
	                }
	              ]
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
	    "paddingLeft": 20,
	    "paddingRight": 20,
	    "borderWidth": 1,
	    "borderColor": "#e6e6e6"
	  },
	  "info": {
	    "paddingBottom": 15,
	    "paddingTop": 15,
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "borderBottomWidth": 1,
	    "borderColor": "#e6e6e6"
	  },
	  "info-txt1": {
	    "color": "#737373",
	    "fontSize": 30,
	    "width": 480,
	    "lines": 1,
	    "textOverflow": "ellipsis"
	  },
	  "info-txt2": {
	    "color": "#A0A0A0",
	    "fontSize": 28
	  },
	  "red": {
	    "color": "#E95412"
	  },
	  "hui": {
	    "color": "#a0a0a0"
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/0742df5cfa250bca9258d28929376de5", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);