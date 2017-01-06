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

	;__weex_define__("@weex-component/bf9536b146378e2aa87d31169b38b2b6", [], function(__weex_require__, __weex_exports__, __weex_module__){
	__webpack_require__(1);

	;
	    __weex_module__.exports = {
	        methods: {
	            submit: function () {
	                console.log(this.sdata);
	            }
	        },
	        data: function () {return {
	            sdata: {
	                "nelist": [{
	                    "itemList": [{
	                        "id": 1,
	                        "partsName": "原厂专用5W-10M SM级合成",
	                        "cost": 1000,
	                        "memberCost": 801,
	                        "isRecommend": true,
	                        "tag": "1",
	                        "mpId": 1,
	                        "factoryId": 7
	                    }, {
	                        "id": 2,
	                        "partsName": "圆场嘉实多0W-30SN级全合成",
	                        "cost": 1000,
	                        "memberCost": 800,
	                        "isRecommend": false,
	                        "tag": "2",
	                        "mpId": 1,
	                        "factoryId": 7
	                    }],
	                    "MaintainName": "机油",
	                    "IsNecessary": true
	                }, {
	                    "itemList": [{
	                        "id": 3,
	                        "partsName": "原厂件",
	                        "cost": 1000,
	                        "memberCost": 800,
	                        "isRecommend": true,
	                        "mpId": 2,
	                        "factoryId": 7
	                    }],
	                    "MaintainName": "机油滤清",
	                    "IsNecessary": true
	                }, {
	                    "itemList": [{
	                        "id": 4,
	                        "partsName": "原厂件",
	                        "cost": 1000,
	                        "memberCost": 800,
	                        "isRecommend": true,
	                        "mpId": 3,
	                        "factoryId": 7
	                    }],
	                    "MaintainName": "空气滤清",
	                    "IsNecessary": true
	                }, {
	                    "itemList": [{
	                        "id": 5,
	                        "partsName": "原厂件",
	                        "cost": 1000,
	                        "memberCost": 800,
	                        "isRecommend": true,
	                        "mpId": 4,
	                        "factoryId": 7
	                    }],
	                    "MaintainName": "燃油滤清",
	                    "IsNecessary": true
	                }, {
	                    "itemList": [{
	                        "id": 6,
	                        "partsName": "原厂件",
	                        "cost": 1000,
	                        "memberCost": 800,
	                        "isRecommend": true,
	                        "mpId": 5,
	                        "factoryId": 7
	                    }],
	                    "MaintainName": "火花塞",
	                    "IsNecessary": true
	                }, {
	                    "itemList": [{
	                        "id": 9,
	                        "partsName": "原厂件",
	                        "cost": 1000,
	                        "memberCost": 800,
	                        "isRecommend": true,
	                        "mpId": 8,
	                        "factoryId": 7
	                    }],
	                    "MaintainName": "自动变速箱油",
	                    "IsNecessary": true
	                }],
	                "unlist": [{
	                    "itemList": [{
	                        "id": 8,
	                        "partsName": "原厂件",
	                        "cost": 1000,
	                        "memberCost": 800,
	                        "isRecommend": true,
	                        "mpId": 7,
	                        "factoryId": 7
	                    }],
	                    "MaintainName": "整车制动液",
	                    "IsNecessary": false
	                }, {
	                    "itemList": [{
	                        "id": 11,
	                        "partsName": "原厂件",
	                        "cost": 1000,
	                        "memberCost": 800,
	                        "isRecommend": true,
	                        "mpId": 10,
	                        "factoryId": 7
	                    }],
	                    "MaintainName": "发动机正时皮带",
	                    "IsNecessary": false
	                }],
	                "requestCode": 0
	            }

	        }}
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "scroller",
	  "children": [
	    {
	      "type": "div",
	      "children": [
	        {
	          "type": "text",
	          "style": {
	            "height": 100
	          },
	          "events": {
	            "click": "submit"
	          },
	          "attr": {
	            "value": "tttttttttt"
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return '推荐项目' + (this.sdata.nelist.length)}
	          }
	        },
	        {
	          "type": "a2",
	          "attr": {
	            "datas": function () {return this.sdata.nelist}
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return '推荐项目' + (this.sdata.unlist.length)}
	          }
	        },
	        {
	          "type": "a2",
	          "attr": {
	            "datas": function () {return this.sdata.unlist}
	          }
	        }
	      ]
	    }
	  ]
	})
	})
	;__weex_bootstrap__("@weex-component/bf9536b146378e2aa87d31169b38b2b6", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/a2", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __weex_module__.exports = {
	        data: function () {return {
	            t: 0,
	            datas: []
	        }},
	        created: function () {
	            for (var i = 0; i < this.datas.length; i++) {
	                this.datas[i].selectItemId = this.datas[i].itemList[0].id;
	            }
	        },
	        methods: {
	            xuanzeSrc: function (index) {
	                if (this.datas[index].IsNecessary) {
	                    return "http://192.168.1.101:8000/images/danxuan2.png";
	                } else {
	                    return "http://192.168.1.101:8000/images/danxuan3.png";
	                }
	            },
	            clickSelect: function (e) {
	                this.datas[e.target.attr.index].IsNecessary = !this.datas[e.target.attr.index].IsNecessary;
	            },
	            subSelectClick: function (e) {
	                for (var i = 0; i < e.target.parentNode.pureChildren.length; i++) {
	                    e.target.parentNode.pureChildren[i].pureChildren[0]
	                            .setStyle("color", "");
	                }
	                e.target.pureChildren[0].setStyle("color", "red");
	                this.datas[e.target.parentNode.attr.itemindex].selectItem = e.target.attr.valueid;
	            }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "children": [
	    {
	      "type": "div",
	      "repeat": function () {return this.datas},
	      "children": [
	        {
	          "type": "div",
	          "events": {
	            "click": "clickSelect"
	          },
	          "attr": {
	            "index": function () {return this.$index}
	          },
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "danxuan"
	              ],
	              "attr": {
	                "src": function () {return this.xuanzeSrc(this.$index)},
	                "checked": function () {return this.IsNecessary}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "title"
	              ],
	              "attr": {
	                "value": function () {return this.MaintainName}
	              }
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return (this.itemList[0].cost) + ' ' + (this.itemList[0].memberCost)}
	              }
	            }
	          ]
	        },
	        {
	          "type": "hlist",
	          "shown": function () {return this.itemList.length>1},
	          "attr": {
	            "itemindex": function () {return this.$index}
	          },
	          "children": [
	            {
	              "type": "cell",
	              "append": "tree",
	              "repeat": function () {return this.itemList},
	              "events": {
	                "click": "subSelectClick"
	              },
	              "style": {
	                "width": 375
	              },
	              "attr": {
	                "index": function () {return this.$index},
	                "valueid": function () {return this.id}
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return (this.$index) + '=' + (this.partsName)}
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
	  "danxuan": {
	    "width": 80,
	    "height": 80
	  }
	})
	})

/***/ }
/******/ ]);