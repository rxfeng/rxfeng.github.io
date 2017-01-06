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

	;__weex_define__("@weex-component/533c262c3f9ede38cca8a9c7d13eb412", [], function(__weex_require__, __weex_exports__, __weex_module__){

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
	        "value": "问题一：我怎么在一修车管家APP上做汽车保养？"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "ol"
	      ],
	      "attr": {
	        "value": "1.添加您的爱车基础信息，进入“一键预约”输入当前行驶里程，预约日期时间；"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "ol"
	      ],
	      "attr": {
	        "value": "2.选择您想要保养的4S店或品牌维修店；"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "ol"
	      ],
	      "attr": {
	        "value": "3.一修车管家根据您的车型、当前行驶里程、厂家保养手册结合历史维修档案智能推荐保养方案；"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "ol"
	      ],
	      "attr": {
	        "value": "4.选择是否需要上门取送车；"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "ol"
	      ],
	      "attr": {
	        "value": "5.确认预约信息并到4S店或品牌维修店进行维修保养。"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "ol"
	      ],
	      "attr": {
	        "value": "6.到店维修可以手机实时查看维修状态及视频。"
	      }
	    },
	    {
	      "type": "div",
	      "style": {
	        "height": 30
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "title"
	      ],
	      "attr": {
	        "value": "问题二：一修车管家提供到店保养还是上门保养？"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "shsj"
	      ],
	      "attr": {
	        "value": "一修车管家推荐“人车分离”保养方式，即免费或者有偿叫代驾上门接车、送车服务。您也可以自主驾车去门店保养。"
	      }
	    },
	    {
	      "type": "div",
	      "style": {
	        "height": 30
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "title"
	      ],
	      "attr": {
	        "value": "问题三：没有我的车辆品牌，怎么办？"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "shsj"
	      ],
	      "attr": {
	        "value": "很遗憾，当前可能会存在部分品牌没有合作4S店或品牌维修店而无法提供保养服务的情况，一修车管家会加快4S或品牌维修店的合作推广，争取早日为您提供服务。"
	      }
	    },
	    {
	      "type": "div",
	      "style": {
	        "height": 30
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "title"
	      ],
	      "attr": {
	        "value": "问题四：我不太清楚车辆的具体型号及配置，如何能快速找到车型？"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "shsj"
	      ],
	      "attr": {
	        "value": "使用扫描行驶证车辆识别代码(VIN)自动识别车型的功能。只要您身边带有行驶证，通过此功能，可以快速增加您的车型。"
	      }
	    },
	    {
	      "type": "div",
	      "style": {
	        "height": 30
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "title"
	      ],
	      "attr": {
	        "value": "问题五：保养的项目是如何确定的，4S店或品牌维修店都认可吗？"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "shsj"
	      ],
	      "attr": {
	        "value": "智能保养方案是根据您的车型、当前行驶里程、厂家保养手册结合历史维修档案智能推荐保养方案，完全符合厂家4S店的规范要求"
	      }
	    },
	    {
	      "type": "div",
	      "style": {
	        "height": 30
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "title"
	      ],
	      "attr": {
	        "value": "问题六：给我推荐的保养项目不合适，我能自己调整吗？"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "shsj"
	      ],
	      "attr": {
	        "value": "您可以通过在智能保养方案页面选择或者取消推荐保养项目。但需要注意的是，自行选择的保养套餐项目可能违背厂家维修索赔政策，建议谨慎选择。"
	      }
	    },
	    {
	      "type": "div",
	      "style": {
	        "height": 30
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "title"
	      ],
	      "attr": {
	        "value": "问题七：我能预约当天的保养吗？"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "shsj"
	      ],
	      "attr": {
	        "value": "可以，您需要选择该店营业时间范围内进行预约。"
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
	  },
	  "shsj": {
	    "marginLeft": 10
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/533c262c3f9ede38cca8a9c7d13eb412", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);