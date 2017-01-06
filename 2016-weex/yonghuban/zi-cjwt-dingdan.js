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

	;__weex_define__("@weex-component/9262e37ad78ab4661665ddb2cfa383d5", [], function(__weex_require__, __weex_exports__, __weex_module__){

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
	        "value": "问题一：订单生成后，我想修改订单预约日期和时间，如何处理？"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "shsj"
	      ],
	      "attr": {
	        "value": "若您需要修改预约项目或时间，您可以在代驾出发之前取消本次预约订单，重新预约即可。"
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
	        "value": "问题二：若在车辆检查时，商家发现其他问题需要维修，可以临时添加维修项目吗？"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "shsj"
	      ],
	      "attr": {
	        "value": "可以，您的维修顾问会检查你的车辆并根据实际情况增加项目和价格，您只需要通过APP确认查看修改即可。"
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
	        "value": "问题三：发票向一修车管家还是4S或品牌维修店索取？"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "shsj"
	      ],
	      "attr": {
	        "value": "发票请向4S店或品牌维修店收银员索取，发票金额按照订单的实际支付金额开具。"
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
	        "value": "问题四：维修保养完毕后，我对个别项目的保养不满意，怎么办？"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "shsj"
	      ],
	      "attr": {
	        "value": "质量质保由4S店或品牌维修店负责，可直接联系4S店或品牌维修店进行问题反馈，一修平台会协助您来解决。"
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
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/9262e37ad78ab4661665ddb2cfa383d5", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);