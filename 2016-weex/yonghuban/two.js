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

	;__weex_define__("@weex-component/e3415897f49f77eb0793da01a5ba9855", [], function(__weex_require__, __weex_exports__, __weex_module__){
	__webpack_require__(1);

	;
	    __weex_module__.exports = {
	        data: function () {return {
	            title1: "",
	            title2: "",
	            leftred: "red",
	            rightred: "",
	        }},
	        methods:{
	            left: function (e) {
	                if(this.leftred !="red"){
	                    this.leftred = "red";
	                    this.rightred ="";
	                }
	            },
	            right: function (e) {
	                if(this.rightred !="red"){
	                    this.rightred = "red";
	                    this.leftred ="";
	                }
	            }
	        },
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "zhuangtai"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "zt"
	      ],
	      "events": {
	        "click": "left"
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": function () {return ['zt-txt', this.leftred]},
	          "attr": {
	            "value": function () {return this.title1}
	          }
	        },
	        {
	          "type": "xx",
	          "attr": {
	            "title": "1"
	          },
	          "classList": [
	            "xx"
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "line"
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "zt"
	      ],
	      "events": {
	        "click": "right"
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": function () {return ['zt-txt', this.rightred]},
	          "attr": {
	            "value": function () {return this.title2}
	          }
	        },
	        {
	          "type": "xx",
	          "attr": {
	            "title": "2"
	          },
	          "classList": [
	            "xx"
	          ]
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "zhuangtai": {
	    "flexDirection": "row",
	    "borderBottomWidth": 1,
	    "borderColor": "#e6e6e6",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "line": {
	    "width": 1,
	    "height": 50,
	    "backgroundColor": "#cccccc"
	  },
	  "zt": {
	    "flex": 1,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "zt-txt": {
	    "fontSize": 34,
	    "color": "#373634",
	    "position": "relative",
	    "textAlign": "center"
	  },
	  "red": {
	    "color": "#E95412"
	  },
	  "xx": {
	    "position": "absolute",
	    "left": 240,
	    "top": 10
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/e3415897f49f77eb0793da01a5ba9855", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/xx", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __weex_module__.exports = {
	        data: function () {return {
	            title: 0,
	        }},
	        created: function (e) {
	            if(this.title > 99){
	//                超过99条，显示99+
	                this.title = 99;
	            }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "xxdiv"
	  ],
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "xx"
	      ],
	      "attr": {
	        "value": function () {return this.title}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "xxdiv": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "width": 30,
	    "height": 30,
	    "borderRadius": 15,
	    "backgroundColor": "#FF0000"
	  },
	  "xx": {
	    "fontSize": 22,
	    "color": "#ffffff"
	  }
	})
	})

/***/ }
/******/ ]);