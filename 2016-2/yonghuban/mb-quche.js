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

	;__weex_define__("@weex-component/0d5a3210ed84711c0daf30417ffe4955", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __weex_module__.exports ={
	        data:function () {return {
	            quche:true,
	        }},
	        methods: {
	            wanchengclick: function (e) {
	                this.$dispatch('notify', {"pos": "pos1"})
	            },
	            quanclick: function (e) {
	                this.$dispatch('notify', {"pos": "pos1"})
	            },
	            zhifuclick: function (e) {

	            }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "quan"
	  ],
	  "shown": function () {return this.quche},
	  "events": {
	    "click": "quanclick"
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "box"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "zhifu"
	          ],
	          "events": {
	            "click": "zhifuclick"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "zhifu-txt"
	              ],
	              "attr": {
	                "value": "请检查车辆..."
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "zhifu-txt"
	              ],
	              "attr": {
	                "value": "并确认您已拿到爱车？"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "events": {
	            "click": "wanchengclick"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "btn",
	                "red"
	              ],
	              "attr": {
	                "value": "确 认"
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
	  "quan": {
	    "flex": 1,
	    "backgroundColor": "rgba(0,0,0,0.4)"
	  },
	  "box": {
	    "width": 607,
	    "marginRight": 70,
	    "marginLeft": 70,
	    "backgroundColor": "#ffffff",
	    "borderRadius": 10,
	    "position": "absolute",
	    "bottom": 400
	  },
	  "zhifu": {
	    "paddingTop": 75,
	    "paddingBottom": 75,
	    "borderBottomWidth": 2,
	    "borderColor": "#cccccc"
	  },
	  "zhifu-txt": {
	    "textAlign": "left",
	    "fontSize": 30,
	    "color": "#373634",
	    "marginLeft": 120,
	    "marginTop": 5,
	    "marginBottom": 5
	  },
	  "btn": {
	    "fontSize": 30,
	    "color": "#373634",
	    "textAlign": "center",
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "red": {
	    "color": "#E95412"
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/0d5a3210ed84711c0daf30417ffe4955", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);