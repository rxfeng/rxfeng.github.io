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

	;__weex_define__("@weex-component/f90967d6af22678755f82896da8fd437", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __weex_module__.exports ={
	        data: function () {return {
	            dir:api.dir,
	        }},
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "events": {
	    "click": "gofuzdd"
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
	            "value": "订单类型："
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "info-txt2"
	          ],
	          "attr": {
	            "value": function () {return (this.orderType) + '12143'}
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
	            "value": "车辆型号："
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "info-txt2"
	          ],
	          "attr": {
	            "value": function () {return this.carFullTypeName}
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
	            "value": function () {return this.carLicence}
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
	            "value": "客户姓名："
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "info-txt2"
	          ],
	          "attr": {
	            "value": function () {return this.senderName}
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
	            "value": "客户手机："
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "info-txt2"
	          ],
	          "attr": {
	            "value": function () {return this.senderCell}
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
	            "value": "订单号："
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "info-txt2"
	          ],
	          "attr": {
	            "value": function () {return this.orderNumber}
	          }
	        }
	      ]
	    },
	    {
	      "type": "image",
	      "classList": [
	        "jiantou"
	      ],
	      "attr": {
	        "src": function () {return (this.dir) + 'images/right-jiao.fw.png'}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "dingdaninfo": {
	    "padding": 20,
	    "borderBottomWidth": 1,
	    "borderColor": "#e6e6e6",
	    "backgroundColor": "#FF0000",
	    "flex": 1
	  },
	  "info": {
	    "flexDirection": "row",
	    "paddingBottom": 3,
	    "paddingTop": 3
	  },
	  "info-txt1": {
	    "color": "#737172",
	    "fontSize": 30
	  },
	  "info-txt2": {
	    "color": "#A0A0A0",
	    "fontSize": 28
	  },
	  "jiantou": {
	    "width": 37,
	    "height": 37,
	    "position": "absolute",
	    "top": 130,
	    "right": 20
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/f90967d6af22678755f82896da8fd437", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);