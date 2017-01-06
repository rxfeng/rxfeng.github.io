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

	;__weex_define__("@weex-component/990cda0cdc58f857276153e20dfa42a2", [], function(__weex_require__, __weex_exports__, __weex_module__){
	__webpack_require__(1);

	;
	    var wee = __weex_require__('@weex-module/modal');
	    __weex_module__.exports = {
	        data: function () {return {
	            inp1: "",
	            inp2: "",
	        }},
	        created: function () {

	        },
	        methods: {
	            oninput1: function (e) {
	                this.inp1 = e.value;
	            },
	            oninput2: function (e) {
	                this.inp2 = e.value;
	            },
	            aa: function (e) {
	//                wee.toast({
	//                    message: "输入的内容为:" + inputa.inp1 + " " + inputa.inp2,
	//                    duration: 2
	//                });
	//                调用时间控件
	//                var eventModule = __weex_require__('@weex-module/shijianxuanzeqi');
	//                eventModule.getVCNum(this.num, function (e) {
	//                    wee.toast({
	//                        message: "2:",
	//                        duration: 2
	//                    });
	//                });
	                var self = this;
	                var inputa = {inp1: self.inp1, inp2: self.inp2};
	                var vm = self;
	                var params = {
	                    'url': "http://192.168.1.105:63344/2016/yonghuban/11mahao.js",
	                    'data': JSON.stringify(inputa),
	                    'animated': 'true',
	                }
	                vm.$call('navigator', 'push', params, function () {});
	            }
	        }
	    }


	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "style": {
	    "padding": 50
	  },
	  "children": [
	    {
	      "type": "input",
	      "attr": {
	        "type": "text",
	        "value": function () {return this.inp1}
	      },
	      "classList": [
	        "inp"
	      ],
	      "events": {
	        "input": "oninput1"
	      }
	    },
	    {
	      "type": "input",
	      "attr": {
	        "type": "text",
	        "value": function () {return this.inp2}
	      },
	      "classList": [
	        "inp"
	      ],
	      "events": {
	        "input": "oninput2"
	      }
	    },
	    {
	      "type": "btn",
	      "attr": {
	        "title": "跳转"
	      },
	      "events": {
	        "click": "aa"
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "inp": {
	    "height": 80,
	    "marginBottom": 30,
	    "borderWidth": 2,
	    "borderColor": "#cccccc"
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/990cda0cdc58f857276153e20dfa42a2", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/btn", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __weex_module__.exports = {
	        data: function () {return {
	            title: ""
	        }}
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "container",
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "btn"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "btn-txt"
	          ],
	          "attr": {
	            "value": function () {return this.title}
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "btn": {
	    "paddingTop": 20,
	    "paddingBottom": 20,
	    "backgroundColor": "#E95412",
	    "borderRadius": 10,
	    "marginLeft": 30,
	    "marginRight": 30
	  },
	  "btn-txt": {
	    "textAlign": "center",
	    "color": "#ffffff",
	    "fontSize": 36
	  }
	})
	})

/***/ }
/******/ ]);