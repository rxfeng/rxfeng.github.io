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

	;__weex_define__("@weex-component/f4de794d7e4534f6053532d489af9126", [], function(__weex_require__, __weex_exports__, __weex_module__){
	__webpack_require__(1);
	__webpack_require__(15);
	__webpack_require__(16);

	;
	    __webpack_require__(2);
	    var api = __webpack_require__(14);
	    var wee = __weex_require__('@weex-module/modal');
	    __weex_module__.exports = {
	        data: function () {return {
	            dir: api.dir,
	            title: "登录",
	            f: false,
	            xiche:false,
	            leixing:"快速报价",
	            h: "",
	            leftdata: "",
	            num1: "1",
	            num2: "0",
	            zw: "relative",
	            dd: [
	                {
	                    id: "",
	                    ddlx: "",
	                    clxh: "",
	                    cphm: "",
	                    kkxx: "",
	                    kksj: "",
	                    ddh: "",
	                    xinghao:"",
	                    flag: true,
	                },
	            ],
	            jiedan1: [],
	            id: "",
	            kehudangan: "",
	            ddflag: false,
	            jiedanflag: false,
	            state: "",
	        }},
	        created: function () {
	            var _this = this;
	            _this.jiedan1=[]
	            _this.dd=[];

	            api.call("factory/loginMess", {}, function (ret) {
	                if(ret.data.message=="失败"){
	                    api.push("denglu.js");
	                }else{
	                    _this.factoryId = ret.data.adviserInfo.factoryId;
	                    _this.state = ret.data.adviserInfo.state;
	//                    api.log("state" + _this.state)
	//            -----------------------打开这个页面就得知道上班下班的状态,不用接口，从登陆页面传来的值-----------------------------------
	                    if (_this.state == 1) {
	//                        api.log("上班中");
	                        _this.f = true;
	                        api.call("factory/queryOrder", {factoryId: _this.factoryId}, function (ret) {
	//                            api.log(ret.data);
	                            if (ret.data.OrderInfo.length != 0) {
	                                _this.jiedanflag = true;
	                            }
	                            _this.h = ret.data.OrderInfo.length * 300;
	                            _this.jiedan1 = [];
	                            if (ret.data.OrderInfo.length >= 1) {
	                                if (ret.data.OrderInfo.length > 3) {
	                                    _this.zw = "absolute";
	                                    _this.num1 = 0;
	                                    _this.num2 = 1;
	                                } else {
	                                    _this.zw = "relative";
	                                    _this.num1 = 1;
	                                    _this.num2 = 0;
	                                }

	                                for (var i = 0; i < ret.data.OrderInfo.length; i++) {
	                                    _this.jiedan1.$set(i,
	                                            {
	                                                id: ret.data.OrderInfo[i].id,
	                                                xinghao: ret.data.OrderInfo[i].carFullTypeName,
	                                                cphm: ret.data.OrderInfo[i].carLicence,
	                                                kkxx: ret.data.OrderInfo[i].senderName,
	                                                kksj: ret.data.OrderInfo[i].senderCell,
	                                                ddh: ret.data.OrderInfo[i].orderNumber,
	                                                flag: true,
	                                            });
	                                    if (ret.data.OrderInfo[i].orderType == 1) {
	                                        _this.jiedan1[i].ddlx = "维修保养";
	                                    } else if (ret.data.OrderInfo[i].orderType == 3) {
	                                        _this.jiedan1[i].ddlx = "现场救援";
	                                    }
	                                }
	                            }
	                            if (ret.data.OrderInfo.length == 0) {
	                                _this.jiedan1 = [];
	                                _this.h = 0;
	                                _this.zw = "relative";
	                                _this.num1 = 1;
	                                _this.num2 = 0;
	                            }
	                        });
	                    } else if (_this.state == 0) {
	                        api.log("下班中");
	                        _this.f = false;
	                    }
	                    api.call("factory/queryService", {factoryId: _this.factoryId}, function (ret) {
	                        if (ret.data.ServiceOrderInfo.length != 0) {
	                            _this.ddflag = true;
	                        }
	                        for (var i = 0; i < ret.data.ServiceOrderInfo.length; i++) {
	                            _this.dd.$set(i,
	                                    {
	                                        id: ret.data.ServiceOrderInfo[i].id,
	                                        xinghao:ret.data.ServiceOrderInfo[i].carFullTypeName,
	                                        cphm: ret.data.ServiceOrderInfo[i].carLicence,
	                                        kkxx: ret.data.ServiceOrderInfo[i].senderName,
	                                        kksj: ret.data.ServiceOrderInfo[i].senderCell,
	                                        ddh: ret.data.ServiceOrderInfo[i].orderNumber,
	                                    });
	                            if (ret.data.ServiceOrderInfo[i].orderType == 1) {
	                                _this.dd[i].ddlx = "维修保养";
	                            } else if (ret.data.ServiceOrderInfo[i].orderType == 3) {
	                                _this.dd[i].ddlx = "现场救援";
	                            }
	                        }
	                    });
	                    _this.$on('naviBar.leftItem.click', function (e) {
	                        api.push("wode.js", {factoryId: _this.factoryId});
	                    });


	//            点击完订单之后，再次请求
	                    _this.$on('notify', function (e) {
	//            -----------------------服务中订单-----------------------------------
	                        api.call("factory/queryService", {factoryId: _this.factoryId}, function (ret) {
	                            _this.dd = [];
	                            if (ret.data.ServiceOrderInfo.length != 0) {
	                                _this.ddflag = true;
	                            }
	                            for (var i = 0; i < ret.data.ServiceOrderInfo.length; i++) {
	                                _this.dd.$set(i,
	                                        {
	                                            id: ret.data.ServiceOrderInfo[i].id,
	                                            xinghao:ret.data.ServiceOrderInfo[i].carFullTypeName,
	                                            cphm: ret.data.ServiceOrderInfo[i].carLicence,
	                                            kkxx: ret.data.ServiceOrderInfo[i].senderName,
	                                            kksj: ret.data.ServiceOrderInfo[i].senderCell,
	                                            ddh: ret.data.ServiceOrderInfo[i].orderNumber,
	                                        });
	                                if (ret.data.ServiceOrderInfo[i].orderType == 1) {
	                                    _this.dd[i].ddlx = "维修保养";
	                                } else if (ret.data.ServiceOrderInfo[i].orderType == 3) {
	                                    _this.dd[i].ddlx = "现场救援";
	                                }
	                            }
	                        });
	                        api.call("factory/queryOrder", {factoryId: _this.factoryId}, function (ret) {
	                            if (ret.data.OrderInfo.length != 0) {
	                                _this.jiedanflag = true;
	                            }
	                            _this.h = ret.data.OrderInfo.length * 300;
	                            _this.jiedan1 = [];
	                            if (ret.data.OrderInfo.length >= 1) {
	                                if (ret.data.OrderInfo.length > 3) {
	                                    _this.zw = "absolute";
	                                    _this.num1 = 0;
	                                    _this.num2 = 1;
	                                } else {
	                                    _this.zw = "relative";
	                                    _this.num1 = 1;
	                                    _this.num2 = 0;
	                                }
	                                for (var i = 0; i < ret.data.OrderInfo.length; i++) {
	                                    _this.jiedan1.$set(i,
	                                            {
	                                                id: ret.data.OrderInfo[i].id,
	                                                xinghao:ret.data.OrderInfo[i].carFullTypeName,
	                                                cphm: ret.data.OrderInfo[i].carLicence,
	                                                kkxx: ret.data.OrderInfo[i].senderName,
	                                                kksj: ret.data.OrderInfo[i].senderCell,
	                                                ddh: ret.data.OrderInfo[i].orderNumber,
	                                                flag: true,
	                                            });
	                                    if (ret.data.OrderInfo[i].orderType == 1) {
	                                        _this.jiedan1[i].ddlx = "维修保养";
	                                    } else if (ret.data.OrderInfo[i].orderType == 3) {
	                                        _this.jiedan1[i].ddlx = "现场救援";
	                                    }
	                                }
	                            }
	                            if (ret.data.OrderInfo.length == 0) {
	                                _this.jiedan1 = [];
	                                _this.h = 0;
	                                _this.zw = "relative";
	                                _this.num1 = 1;
	                                _this.num2 = 0;
	                            }
	                        });
	                    })
	                }
	            });
	            _this.title = api.getData(_this).title || _this.title;
	//            -----------------------拿到上页面传来的值-----------------------------------
	//            点击客户档案，传到下个页面的值
	            _this.leftdata = {"factoryId": _this.factoryId}
	            _this.kehudangan = {"factoryId": _this.factoryId, "state": _this.state}
	//            -----------------------服务中订单-----------------------------------
	            __weex_require__('@weex-module/geolocation').getCurrentPosition({},function (e) {
	                __weex_require__('@weex-module/mytoast').upStr(e);
	                var lnglat = {};
	                lnglat.lon = e.longitde;
	                lnglat.lat = e.latitude;
	                lnglat.city = e.city;
	                lnglat.province = e.province;
	                api.save("lnglat", lnglat);
	            });
	        },
	        methods: {
	            xicheclick: function (e) {
	                this.xiche = !this.xiche;
	            },
	            xichebox: function (e) {
	                this.leixing = e.target.children[0].attr.value;
	                this.xiche = false;
	                if (e.target.children[0].attr.value == "快速报价") {
	                    api.tost("暂无")
	                } else if (e.target.children[0].attr.value == "历史订单") {
	                    api.push("lishidingdan2.js", {factoryId: this.factoryId});
	                }
	            },
	            title1url: function (e) {
	                var _this = this;
	                api.push("kehudangan.js", {
	                    factoryId: _this.factoryId,
	                });
	            },
	            toggle: function (e) {
	                var _this = this;
	                if(_this.f){
	                    api.dialog(_this.dir + "zi-queren.js",{}, function (e) {
	                        if(e.ok){
	                            api.call("factory/updateAdviser",{}, function (ret) {
	                                _this.f = false;
	                                _this.jiedan1 = [];
	                                _this.h = 0;
	                                _this.zw = "relative";
	                                _this.num1 = 1;
	                                _this.num2 = 0;
	                            });
	                        }
	                    });
	                }else{
	                    api.call("factory/updateAdviser",{}, function (ret) {
	                        _this.f = true;
	                        api.call("factory/queryOrder", {factoryId: _this.factoryId}, function (ret) {
	//                        api.log(ret.data);
	                            if (ret.data.OrderInfo.length != 0) {
	                                _this.jiedanflag = true;
	                            }
	                            for (var i = 0; i < ret.data.OrderInfo.length; i++) {
	                                _this.jiedan1.$set(i,
	                                        {
	                                            id: ret.data.OrderInfo[i].id,
	                                            xinghao:ret.data.OrderInfo[i].carFullTypeName,
	                                            cphm: ret.data.OrderInfo[i].carLicence,
	                                            kkxx: ret.data.OrderInfo[i].senderName,
	                                            kksj: ret.data.OrderInfo[i].senderCell,
	                                            ddh: ret.data.OrderInfo[i].orderNumber,
	                                            flag: true,
	                                        });
	                                if (ret.data.OrderInfo[i].orderType == 1) {
	                                    _this.jiedan1[i].ddlx = "维修保养";
	                                } else if (ret.data.OrderInfo[i].orderType == 3) {
	                                    _this.jiedan1[i].ddlx = "现场救援";
	                                }
	                            }
	                            _this.h = ret.data.OrderInfo.length * 300;
	                            if (ret.data.OrderInfo.length > 3) {
	                                _this.zw = "absolute";
	                                _this.num1 = 0;
	                                _this.num2 = 1;
	                            }
	                        });
	                    });
	                }
	//            -----------------------上班下班状态-----------------------------------
	//                api.call("factory/updateAdviser", {}, function (ret) {
	//                    if (ret.data.state == 1) {
	//                        _this.f = true;
	//                        api.call("factory/queryOrder", {factoryId: _this.factoryId}, function (ret) {
	////                        api.log(ret.data);
	//                            if (ret.data.OrderInfo.length != 0) {
	//                                _this.jiedanflag = true;
	//                            }
	//                            for (var i = 0; i < ret.data.OrderInfo.length; i++) {
	//                                _this.jiedan1.$set(i,
	//                                        {
	//                                            id: ret.data.OrderInfo[i].id,
	//                                            xinghao:ret.data.OrderInfo[i].carFullTypeName,
	//                                            cphm: ret.data.OrderInfo[i].carLicence,
	//                                            kkxx: ret.data.OrderInfo[i].senderName,
	//                                            kksj: ret.data.OrderInfo[i].senderCell,
	//                                            ddh: ret.data.OrderInfo[i].orderNumber,
	//                                            flag: true,
	//                                        });
	//                                if (ret.data.OrderInfo[i].orderType == 1) {
	//                                    _this.jiedan1[i].ddlx = "维修保养";
	//                                } else if (ret.data.OrderInfo[i].orderType == 3) {
	//                                    _this.jiedan1[i].ddlx = "现场救援";
	//                                }
	//                            }
	//                            _this.h = ret.data.OrderInfo.length * 300;
	//                            if (ret.data.OrderInfo.length > 3) {
	//                                _this.zw = "absolute";
	//                                _this.num1 = 0;
	//                                _this.num2 = 1;
	//                            }
	//                        });
	//                    } else if (ret.data.state == 0) {
	//                        api.dialog(_this.dir + "zi-queren.js",{}, function (e) {
	//                            api.log("结束听单");
	//                            _this.f = false;
	//                            _this.jiedan1 = [];
	//                            _this.h = 0;
	//                            _this.zw = "relative";
	//                            _this.num1 = 1;
	//                            _this.num2 = 0;
	//                        });
	////                        好像没用
	////                        api.call("factory/queryService", {factoryId: _this.factoryId}, function (ret) {
	////                        api.log(ret.data);
	////                            if (ret.data.ServiceOrderInfo.length != 0) {
	////                                _this.ddflag = true;
	////                            }
	////                            for (var i = 0; i < ret.data.ServiceOrderInfo.length; i++) {
	////                                _this.dd.$set(i,
	////                                        {
	////                                            id: ret.data.ServiceOrderInfo[i].id,
	////                                            xinghao:ret.data.ServiceOrderInfo[i].carFullTypeName,
	////                                            cphm: ret.data.ServiceOrderInfo[i].carLicence,
	////                                            kkxx: ret.data.ServiceOrderInfo[i].senderName,
	////                                            kksj: ret.data.ServiceOrderInfo[i].senderCell,
	////                                            ddh: ret.data.ServiceOrderInfo[i].orderNumber,
	////                                        });
	////                                if (ret.data.ServiceOrderInfo[i].orderType == 1) {
	////                                    _this.dd[i].ddlx = "维修保养";
	////                                } else if (ret.data.ServiceOrderInfo[i].orderType == 3) {
	////                                    _this.dd[i].ddlx = "现场救援";
	////                                }
	////                            }
	////                        });
	//                    }
	//                });
	//            -----------------------上班下班状态-----------------------------------
	            }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "xx-navpage",
	  "attr": {
	    "navtitle": "订单",
	    "navrighttitle": "",
	    "navlefttitle": "我的",
	    "navleftsrc": "",
	    "bg": "#ffffff"
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "title",
	        "pr20",
	        "pl20"
	      ],
	      "style": {
	        "position": function () {return this.zw}
	      },
	      "events": {
	        "click": "ffff"
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "title-txt"
	          ],
	          "attr": {
	            "value": "服务中订单"
	          }
	        }
	      ]
	    },
	    {
	      "type": "dd-info",
	      "attr": {
	        "dd": function () {return this.dd}
	      },
	      "shown": function () {return this.ddflag},
	      "style": {
	        "flex": function () {return this.num1}
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "box1"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "events": {
	            "click": "xicheclick"
	          },
	          "children": [
	            {
	              "type": "text",
	              "style": {
	                "fontSize": 32,
	                "color": "#ffffff",
	                "textAlign": "right",
	                "marginRight": 10
	              },
	              "attr": {
	                "value": function () {return this.leixing}
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "box"
	      ],
	      "shown": function () {return this.xiche},
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "title1"
	          ],
	          "events": {
	            "click": "xichebox"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "title1-txt",
	                "left"
	              ],
	              "attr": {
	                "value": "快速报价"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "title1"
	          ],
	          "events": {
	            "click": "xichebox"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "title1-txt",
	                "left"
	              ],
	              "attr": {
	                "value": "历史订单"
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "scroller",
	      "style": {
	        "flex": function () {return this.num2},
	        "height": function () {return this.h},
	        "marginBottom": 100
	      },
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "jiedan"
	          ],
	          "style": {
	            "height": function () {return this.h},
	            "borderTopWidth": 2,
	            "borderColor": "#cccccc"
	          },
	          "children": [
	            {
	              "type": "dd-info2",
	              "attr": {
	                "jiedan1": function () {return this.jiedan1}
	              },
	              "shown": function () {return this.jiedanflag},
	              "id": function () {return this.id},
	              "classList": [
	                "jiedaninfo"
	              ],
	              "style": {
	                "height": function () {return this.h}
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "dd"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "two"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "d"
	              ],
	              "events": {
	                "click": "title1url"
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "txt"
	                  ],
	                  "attr": {
	                    "value": "车辆档案"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "d",
	                "current"
	              ],
	              "events": {
	                "click": "toggle"
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "txt",
	                    "current-txt"
	                  ],
	                  "shown": function () {return !this.f},
	                  "attr": {
	                    "value": "开始听单"
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "txt",
	                    "current-txt"
	                  ],
	                  "shown": function () {return this.f},
	                  "attr": {
	                    "value": "结束听单"
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
	  "box1": {
	    "width": 180,
	    "position": "fixed",
	    "right": 10,
	    "top": 15
	  },
	  "box": {
	    "width": 180,
	    "position": "fixed",
	    "right": 0,
	    "top": 88,
	    "backgroundColor": "#E95412"
	  },
	  "title1": {
	    "paddingTop": 20,
	    "paddingBottom": 15,
	    "paddingRight": 20
	  },
	  "left": {
	    "textAlign": "right"
	  },
	  "title1-txt": {
	    "fontSize": 32,
	    "color": "#ffffff"
	  },
	  "pr20": {
	    "paddingRight": 10
	  },
	  "pl20": {
	    "paddingLeft": 10
	  },
	  "title": {
	    "paddingTop": 20,
	    "paddingBottom": 20,
	    "borderBottomWidth": 1,
	    "borderColor": "#e6e6e6",
	    "marginLeft": 10,
	    "marginRight": 10,
	    "position": "relative"
	  },
	  "title-txt": {
	    "fontSize": 32
	  },
	  "jiedan": {
	    "width": 750
	  },
	  "jiedaninfo": {
	    "width": 750,
	    "backgroundColor": "#eeeeee"
	  },
	  "dd": {
	    "position": "fixed",
	    "bottom": 0
	  },
	  "two": {
	    "flexDirection": "row",
	    "width": 750,
	    "borderTopWidth": 1,
	    "borderColor": "#cccccc",
	    "backgroundColor": "#ffffff"
	  },
	  "d": {
	    "flex": 1
	  },
	  "txt": {
	    "textAlign": "center",
	    "paddingTop": 32,
	    "paddingBottom": 32,
	    "color": "#E95412",
	    "fontSize": 34
	  },
	  "current": {
	    "backgroundColor": "#E95412"
	  },
	  "current-txt": {
	    "color": "#ffffff"
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/f4de794d7e4534f6053532d489af9126", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/xx-navpage", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __webpack_require__(2);
	    var api = __webpack_require__(14);
	    __weex_module__.exports ={
	        data:function () {return {
	            navBarHeight:88,
	            navtitle:"",
	            navrighttitle:"",
	            navlefttitle:"",
	            navrightsrc:"",
	            navleftsrc:"",
	            navlefturl:"",
	            navrighturl:"",
	            bg:"",
	            leftdata:"",
	        }},
	        created: function() {
	            this.$getConfig(function (config) {
	                var env = config.env;
	                if(env.platform == 'iOS'){
	                    var scale = env.scale;
	                    var deviceWidth = env.deviceWidth / scale;
	                    this.navBarHeight = 64.0 * 750.0 / deviceWidth;
	                }
	            }.bind(this));

	            this.$on('naviBar.rightItem.click',function(e){
	                var vm = this;
	                if(!vm.navrighturl)return;
	                var params = {
	                    'url':api.dir+this.navrighturl,
	                    'data':JSON.stringify(vm.leftdata),
	                    'animated': 'true',
	                }
	                //data.isFirst = first || 0;
	                api.push(vm.navrighturl,vm.leftdata);
	                //vm.$call('navigator', 'push', params, function () {});

	            });

	            this.$on('naviBar.leftItem.click',function(e){
	                var vm = this;
	                if(!vm.navlefturl)return;
	                var params = {
	                    'url':api.dir +vm.navlefturl,
	                    'animated': 'true',
	                }
	                vm.$call('navigator', 'pop', params, function () {});
	            });
	        },
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "wxc-navpage",
	  "attr": {
	    "dataRole": "none",
	    "backgroundColor": "#E95412",
	    "titleColor": "white",
	    "rightItemColor": "white",
	    "leftItemColor": "white",
	    "height": function () {return this.navBarHeight},
	    "title": function () {return this.navtitle},
	    "rightItemTitle": function () {return this.navrighttitle},
	    "leftItemTitle": function () {return this.navlefttitle},
	    "rightItemSrc": function () {return this.navrightsrc},
	    "leftdata": function () {return this.leftdata},
	    "leftItemSrc": function () {return this.navleftsrc}
	  },
	  "style": {
	    "backgroundColor": function () {return this.bg}
	  },
	  "children": [
	    {
	      "type": "content"
	    }
	  ]
	})
	})

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(13);


/***/ },
/* 3 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-button", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __weex_module__.exports = {
	    data: function () {return {
	      type: 'default',
	      size: 'large',
	      value: ''
	    }},
	    methods: {
	    }
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": function () {return ['btn', 'btn-' + (this.type), 'btn-sz-' + (this.size)]},
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['btn-txt', 'btn-txt-' + (this.type), 'btn-txt-sz-' + (this.size)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "btn": {
	    "marginBottom": 0,
	    "alignItems": "center",
	    "justifyContent": "center",
	    "borderWidth": 1,
	    "borderStyle": "solid",
	    "borderColor": "#333333"
	  },
	  "btn-default": {
	    "color": "rgb(51,51,51)"
	  },
	  "btn-primary": {
	    "backgroundColor": "rgb(40,96,144)",
	    "borderColor": "rgb(40,96,144)"
	  },
	  "btn-success": {
	    "backgroundColor": "rgb(92,184,92)",
	    "borderColor": "rgb(76,174,76)"
	  },
	  "btn-info": {
	    "backgroundColor": "rgb(91,192,222)",
	    "borderColor": "rgb(70,184,218)"
	  },
	  "btn-warning": {
	    "backgroundColor": "rgb(240,173,78)",
	    "borderColor": "rgb(238,162,54)"
	  },
	  "btn-danger": {
	    "backgroundColor": "rgb(217,83,79)",
	    "borderColor": "rgb(212,63,58)"
	  },
	  "btn-link": {
	    "borderColor": "rgba(0,0,0,0)",
	    "borderRadius": 0
	  },
	  "btn-txt-default": {
	    "color": "rgb(51,51,51)"
	  },
	  "btn-txt-primary": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-success": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-info": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-warning": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-danger": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-link": {
	    "color": "rgb(51,122,183)"
	  },
	  "btn-sz-large": {
	    "width": 300,
	    "height": 100,
	    "paddingTop": 25,
	    "paddingBottom": 25,
	    "paddingLeft": 40,
	    "paddingRight": 40,
	    "borderRadius": 15
	  },
	  "btn-sz-middle": {
	    "width": 240,
	    "height": 80,
	    "paddingTop": 15,
	    "paddingBottom": 15,
	    "paddingLeft": 30,
	    "paddingRight": 30,
	    "borderRadius": 10
	  },
	  "btn-sz-small": {
	    "width": 170,
	    "height": 60,
	    "paddingTop": 12,
	    "paddingBottom": 12,
	    "paddingLeft": 25,
	    "paddingRight": 25,
	    "borderRadius": 7
	  },
	  "btn-txt-sz-large": {
	    "fontSize": 45
	  },
	  "btn-txt-sz-middle": {
	    "fontSize": 35
	  },
	  "btn-txt-sz-small": {
	    "fontSize": 30
	  }
	})
	})

/***/ },
/* 4 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-hn", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __weex_module__.exports = {
	    data: function () {return {
	      level: 1,
	      value: ''
	    }},
	    methods: {}
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": function () {return ['h' + (this.level)]},
	  "style": {
	    "justifyContent": "center"
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['txt-h' + (this.level)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "h1": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "h2": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "h3": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "txt-h1": {
	    "fontSize": 70
	  },
	  "txt-h2": {
	    "fontSize": 52
	  },
	  "txt-h3": {
	    "fontSize": 42
	  }
	})
	})

/***/ },
/* 5 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-list-item", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __weex_module__.exports = {
	    data: function () {return {
	      bgColor: '#ffffff'
	    }},
	    methods: {
	      touchstart: function() {
	        // FIXME android touch
	        // TODO adaptive opposite bgColor
	//        this.bgColor = '#e6e6e6';
	      },
	      touchend: function() {
	        // FIXME android touchend not triggered
	//        this.bgColor = '#ffffff';
	      }
	    }
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "item"
	  ],
	  "events": {
	    "touchstart": "touchstart",
	    "touchend": "touchend"
	  },
	  "style": {
	    "backgroundColor": function () {return this.bgColor}
	  },
	  "children": [
	    {
	      "type": "content"
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "item": {
	    "paddingTop": 25,
	    "paddingBottom": 25,
	    "paddingLeft": 35,
	    "paddingRight": 35,
	    "height": 160,
	    "justifyContent": "center",
	    "borderBottomWidth": 1,
	    "borderColor": "#dddddd"
	  }
	})
	})

/***/ },
/* 6 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-panel", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __weex_module__.exports = {
	    data: function () {return {
	      type: 'default',
	      title: '',
	      paddingBody: 20,
	      paddingHead: 20,
	      dataClass: '', // FIXME transfer class
	      border: 0
	    }},
	    ready: function() {
	    }
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": function () {return ['panel', 'panel-' + (this.type)]},
	  "style": {
	    "borderWidth": function () {return this.border}
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['panel-header', 'panel-header-' + (this.type)]},
	      "style": {
	        "paddingTop": function () {return this.paddingHead},
	        "paddingBottom": function () {return this.paddingHead},
	        "paddingLeft": function () {return this.paddingHead*1.5},
	        "paddingRight": function () {return this.paddingHead*1.5}
	      },
	      "attr": {
	        "value": function () {return this.title}
	      }
	    },
	    {
	      "type": "div",
	      "classList": function () {return ['panel-body', 'panel-body-' + (this.type)]},
	      "style": {
	        "paddingTop": function () {return this.paddingBody},
	        "paddingBottom": function () {return this.paddingBody},
	        "paddingLeft": function () {return this.paddingBody*1.5},
	        "paddingRight": function () {return this.paddingBody*1.5}
	      },
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "panel": {
	    "marginBottom": 20,
	    "backgroundColor": "#ffffff",
	    "borderColor": "#dddddd",
	    "borderWidth": 1
	  },
	  "panel-primary": {
	    "borderColor": "rgb(40,96,144)"
	  },
	  "panel-success": {
	    "borderColor": "rgb(76,174,76)"
	  },
	  "panel-info": {
	    "borderColor": "rgb(70,184,218)"
	  },
	  "panel-warning": {
	    "borderColor": "rgb(238,162,54)"
	  },
	  "panel-danger": {
	    "borderColor": "rgb(212,63,58)"
	  },
	  "panel-header": {
	    "backgroundColor": "#f5f5f5",
	    "fontSize": 40,
	    "color": "#333333"
	  },
	  "panel-header-primary": {
	    "backgroundColor": "rgb(40,96,144)",
	    "color": "#ffffff"
	  },
	  "panel-header-success": {
	    "backgroundColor": "rgb(92,184,92)",
	    "color": "#ffffff"
	  },
	  "panel-header-info": {
	    "backgroundColor": "rgb(91,192,222)",
	    "color": "#ffffff"
	  },
	  "panel-header-warning": {
	    "backgroundColor": "rgb(240,173,78)",
	    "color": "#ffffff"
	  },
	  "panel-header-danger": {
	    "backgroundColor": "rgb(217,83,79)",
	    "color": "#ffffff"
	  },
	  "panel-body": {}
	})
	})

/***/ },
/* 7 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-tip", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __weex_module__.exports = {
	    data: function () {return {
	      type: 'success',
	      value: ''
	    }}
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": function () {return ['tip', 'tip-' + (this.type)]},
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['tip-txt', 'tip-txt-' + (this.type)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "tip": {
	    "paddingLeft": 36,
	    "paddingRight": 36,
	    "paddingTop": 36,
	    "paddingBottom": 36,
	    "borderRadius": 10
	  },
	  "tip-txt": {
	    "fontSize": 28
	  },
	  "tip-success": {
	    "backgroundColor": "#dff0d8",
	    "borderColor": "#d6e9c6"
	  },
	  "tip-txt-success": {
	    "color": "#3c763d"
	  },
	  "tip-info": {
	    "backgroundColor": "#d9edf7",
	    "borderColor": "#bce8f1"
	  },
	  "tip-txt-info": {
	    "color": "#31708f"
	  },
	  "tip-warning": {
	    "backgroundColor": "#fcf8e3",
	    "borderColor": "#faebcc"
	  },
	  "tip-txt-warning": {
	    "color": "#8a6d3b"
	  },
	  "tip-danger": {
	    "backgroundColor": "#f2dede",
	    "borderColor": "#ebccd1"
	  },
	  "tip-txt-danger": {
	    "color": "#a94442"
	  }
	})
	})

/***/ },
/* 8 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-countdown", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	__weex_module__.exports = {
	    data: function () {return {
	        now: 0,
	        remain: 0,
	        time: {
	            elapse: 0,
	            D: '0',
	            DD: '0',
	            h: '0',
	            hh: '00',
	            H: '0',
	            HH: '0',
	            m: '0',
	            mm: '00',
	            M: '0',
	            MM: '0',
	            s: '0',
	            ss: '00',
	            S: '0',
	            SS: '0'
	        },
	        outofview: false
	    }},
	    ready: function() {
	        if (this.remain <= 0) {
	            return;
	        }
	        // this.isWeb = this.$getConfig().env.platform === 'Web';
	        this.now = Date.now();
	        this.nextTick();
	    },
	    methods: {
	        nextTick: function() {
	            if (this.outofview) {
	                setTimeout(this.nextTick.bind(this), 1000);
	            } else {
	                this.time.elapse = parseInt((Date.now() - this.now) / 1000);

	                if (this.calc()) {
	                    this.$emit('tick', Object.assign({}, this.time));
	                    setTimeout(this.nextTick.bind(this), 1000);
	                } else {
	                    this.$emit('alarm', Object.assign({}, this.time));
	                }
	                this._app.updateActions(); 
	            }
	        },
	        format: function(str) {
	            if (str.length >= 2) {
	                return str;
	            } else {
	                return '0' + str;
	            }
	        },
	        calc: function() {
	            var remain = this.remain - this.time.elapse;
	            if (remain < 0) {
	                remain = 0;
	            }
	            this.time.D = String(parseInt(remain / 86400));
	            this.time.DD = this.format(this.time.D);
	            this.time.h = String(parseInt((remain - parseInt(this.time.D) * 86400) / 3600));
	            this.time.hh = this.format(this.time.h);
	            this.time.H = String(parseInt(remain / 3600));
	            this.time.HH = this.format(this.time.H);
	            this.time.m = String(parseInt((remain - parseInt(this.time.H) * 3600) / 60));
	            this.time.mm = this.format(this.time.m);
	            this.time.M = String(parseInt(remain / 60));
	            this.time.MM = this.format(this.time.M);
	            this.time.s = String(remain - parseInt(this.time.M) * 60);
	            this.time.ss = this.format(this.time.s);
	            this.time.S = String(remain);
	            this.time.SS = this.format(this.time.S);
	            // console.log(remain, this.D, this.h, this.hh, this.H, this.HH, this.m, this.MM, this.s, this.ss, this.S, this.SS);
	            return remain > 0;
	        },
	        appeared: function() {
	            this.outofview = false;
	        },
	        disappeared: function() {
	            this.outofview = true;
	        }
	    }
	}

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "style": {
	    "overflow": "hidden",
	    "flexDirection": "row"
	  },
	  "events": {
	    "appear": "appeared",
	    "disappear": "disappeared"
	  },
	  "children": [
	    {
	      "type": "content"
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "wrap": {
	    "overflow": "hidden"
	  }
	})
	})

/***/ },
/* 9 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-marquee", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	__weex_module__.exports = {
	    data: function () {return {
	        step: 0,
	        count: 0,
	        index: 1,
	        duration: 0,
	        interval: 0,
	        outofview: false
	    }},
	    ready: function () {
	        if (this.interval > 0
	                && this.step > 0
	                && this.duration > 0) {
	            this.nextTick();    
	        }
	    },
	    methods: {
	        nextTick: function() {
	            var self = this;
	            if (this.outofview) {
	                setTimeout(self.nextTick.bind(self), self.interval);
	            } else {
	                setTimeout(function() {
	                    self.animation(self.nextTick.bind(self));
	                }, self.interval);
	            }
	        },
	        animation: function(cb) {
	            var self = this;
	            var offset = -self.step * self.index;
	            var $animation = __weex_require__('@weex-module/animation');
	            $animation.transition(this.$el('anim'), {
	              styles: {
	                transform: 'translateY(' + String(offset) + 'px) translateZ(0)'
	              },
	              timingFunction: 'ease',
	              duration: self.duration
	            }, function() {
	                self.index = (self.index + 1) % (self.count);
	                self.$emit('change', {
	                    index: self.index,
	                    count: self.count
	                });
	                cb && cb();
	            });
	        },
	        appeared: function() {
	            this.outofview = false;
	        },
	        disappeared: function() {
	            this.outofview = true;
	        }
	    }
	}

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "wrap"
	  ],
	  "events": {
	    "appear": "appeared",
	    "disappear": "disappeared"
	  },
	  "children": [
	    {
	      "type": "div",
	      "id": "anim",
	      "classList": [
	        "anim"
	      ],
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "wrap": {
	    "overflow": "hidden",
	    "position": "relative"
	  },
	  "anim": {
	    "flexDirection": "column",
	    "position": "absolute",
	    "transform": "translateY(0) translateZ(0)"
	  }
	})
	})

/***/ },
/* 10 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-navbar", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __weex_module__.exports = {
	        data: function () {return {
	          dataRole: 'navbar',

	          //导航条背景色
	          backgroundColor: 'black',

	          //导航条高度
	          height: 88,

	          //导航条标题 
	          title: "",

	          //导航条标题颜色
	          titleColor: 'black',

	          //右侧按钮图片
	          rightItemSrc: '',

	          //右侧按钮标题
	          rightItemTitle: '',

	          //右侧按钮标题颜色
	          rightItemColor: 'black',

	          //左侧按钮图片
	          leftItemSrc: '',

	          //左侧按钮标题
	          leftItemTitle: '',

	          //左侧按钮颜色
	          leftItemColor: 'black',
	        }},
	        methods: {
	          onclickrightitem: function (e) {
	            this.$dispatch('naviBar.rightItem.click', {});
	          },
	          onclickleftitem: function (e) {
	            this.$dispatch('naviBar.leftItem.click', {});
	          }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "style": {
	    "height": function () {return this.height},
	    "backgroundColor": function () {return this.backgroundColor}
	  },
	  "attr": {
	    "dataRole": function () {return this.dataRole}
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "right-text"
	      ],
	      "style": {
	        "color": function () {return this.rightItemColor}
	      },
	      "attr": {
	        "naviItemPosition": "right",
	        "value": function () {return this.rightItemTitle}
	      },
	      "shown": function () {return !this.rightItemSrc},
	      "events": {
	        "click": "onclickrightitem"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "right-image"
	      ],
	      "attr": {
	        "naviItemPosition": "right",
	        "src": function () {return this.rightItemSrc}
	      },
	      "shown": function () {return this.rightItemSrc},
	      "events": {
	        "click": "onclickrightitem"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "left-text"
	      ],
	      "style": {
	        "color": function () {return this.leftItemColor}
	      },
	      "attr": {
	        "naviItemPosition": "left",
	        "value": function () {return this.leftItemTitle}
	      },
	      "shown": function () {return !this.leftItemSrc},
	      "events": {
	        "click": "onclickleftitem"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "left-image"
	      ],
	      "attr": {
	        "naviItemPosition": "left",
	        "src": function () {return this.leftItemSrc}
	      },
	      "shown": function () {return this.leftItemSrc},
	      "events": {
	        "click": "onclickleftitem"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "center-text"
	      ],
	      "style": {
	        "color": function () {return this.titleColor}
	      },
	      "attr": {
	        "naviItemPosition": "center",
	        "value": function () {return this.title}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "container": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "width": 750
	  },
	  "right-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "right": 32,
	    "textAlign": "right",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "left-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "left": 32,
	    "textAlign": "left",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "center-text": {
	    "position": "absolute",
	    "bottom": 25,
	    "left": 172,
	    "right": 172,
	    "textAlign": "center",
	    "fontSize": 36,
	    "fontWeight": "bold"
	  },
	  "left-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "left": 28,
	    "width": 50,
	    "height": 50
	  },
	  "right-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "right": 28,
	    "width": 50,
	    "height": 50
	  }
	})
	})

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/wxc-navpage", [], function(__weex_require__, __weex_exports__, __weex_module__){
	__webpack_require__(10);

	;
	    __weex_module__.exports = {
	        data: function () {return {
	          dataRole: 'navbar',
	          backgroundColor: 'black',
	          height: 88,
	          title: "",
	          titleColor: 'black',
	          rightItemSrc: '',
	          rightItemTitle: '',
	          rightItemColor: 'black',
	          leftItemSrc: '',
	          leftItemTitle: '',
	          leftItemColor: 'black',
	        }}
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "wxc-navbar",
	      "attr": {
	        "dataRole": function () {return this.dataRole},
	        "height": function () {return this.height},
	        "backgroundColor": function () {return this.backgroundColor},
	        "title": function () {return this.title},
	        "titleColor": function () {return this.titleColor},
	        "leftItemSrc": function () {return this.leftItemSrc},
	        "leftItemTitle": function () {return this.leftItemTitle},
	        "leftItemColor": function () {return this.leftItemColor},
	        "rightItemSrc": function () {return this.rightItemSrc},
	        "rightItemTitle": function () {return this.rightItemTitle},
	        "rightItemColor": function () {return this.rightItemColor}
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "wrapper"
	      ],
	      "style": {
	        "marginTop": function () {return this.height}
	      },
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "wrapper": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "width": 750
	  }
	})
	})

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/wxc-tabbar", [], function(__weex_require__, __weex_exports__, __weex_module__){
	__webpack_require__(13);

	;
	    __weex_module__.exports = {
	        data: function () {return {
	          tabItems: [ ],
	          selectedIndex: 0,
	          selectedColor: '#ff0000',
	          unselectedColor: '#000000',
	        }},
	        created: function () {
	          this.selected(this.selectedIndex);

	          this.$on('tabItem.onClick',function(e){
	            var detail= e.detail;
	            this.selectedIndex = detail.index;
	            this.selected(detail.index);

	            var params = {
	              index: detail.index
	            };
	            this.$dispatch('tabBar.onClick', params);
	          });
	        },
	        methods: {
	            selected: function(index) {
	              for(var i = 0; i < this.tabItems.length; i++) {
	                var tabItem = this.tabItems[i];
	                if(i == index){
	                  tabItem.icon = tabItem.selectedImage;
	                  tabItem.titleColor = this.selectedColor;
	                  tabItem.visibility = 'visible';
	                }
	                else {
	                  tabItem.icon = tabItem.image;
	                  tabItem.titleColor = this.unselectedColor;
	                  tabItem.visibility = 'hidden';
	                }
	              }
	            },  
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "embed",
	      "classList": [
	        "content"
	      ],
	      "style": {
	        "visibility": function () {return this.visibility}
	      },
	      "repeat": function () {return this.tabItems},
	      "attr": {
	        "src": function () {return this.src},
	        "type": "weex"
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "tabbar"
	      ],
	      "append": "tree",
	      "children": [
	        {
	          "type": "wxc-tabitem",
	          "repeat": function () {return this.tabItems},
	          "attr": {
	            "index": function () {return this.index},
	            "icon": function () {return this.icon},
	            "title": function () {return this.title},
	            "titleColor": function () {return this.titleColor}
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "wrapper": {
	    "width": 750,
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0
	  },
	  "content": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "marginTop": 0,
	    "marginBottom": 88
	  },
	  "tabbar": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "bottom": 0,
	    "left": 0,
	    "right": 0,
	    "height": 88
	  }
	})
	})

/***/ },
/* 13 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-tabitem", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __weex_module__.exports = {
	        data: function () {return {
	          index: 0,
	          title: '',
	          titleColor: '#000000',
	          icon: '',
	          backgroundColor: '#ffffff',
	        }},
	        methods: {
	          onclickitem: function (e) {
	            var vm = this;
	            var params = {
	              index: vm.index
	            };
	            vm.$dispatch('tabItem.onClick', params);
	          }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "style": {
	    "backgroundColor": function () {return this.backgroundColor}
	  },
	  "events": {
	    "click": "onclickitem"
	  },
	  "children": [
	    {
	      "type": "image",
	      "classList": [
	        "top-line"
	      ],
	      "attr": {
	        "src": "http://gtms03.alicdn.com/tps/i3/TB1mdsiMpXXXXXpXXXXNw4JIXXX-640-4.png"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "tab-icon"
	      ],
	      "attr": {
	        "src": function () {return this.icon}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "tab-text"
	      ],
	      "style": {
	        "color": function () {return this.titleColor}
	      },
	      "attr": {
	        "value": function () {return this.title}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "container": {
	    "flex": 1,
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": 88
	  },
	  "top-line": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "height": 2
	  },
	  "tab-icon": {
	    "marginTop": 5,
	    "width": 40,
	    "height": 40
	  },
	  "tab-text": {
	    "marginTop": 5,
	    "textAlign": "center",
	    "fontSize": 20
	  }
	})
	})

/***/ },
/* 14 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/api", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    //     var API_URL = "http://192.168.0.155:8080/IkkyuChegj/";    //小安
	//         var API_URL = "http://192.168.0.160:8080/IkkyuChegj/";    //冯浩
	    var API_URL = "http://192.168.0.172:8080/IkkyuChegj/";   //小黄
	//        var API_URL = "http://www.yixiucar.com/yxapi/";       //郭总
	//    var SERVER_URL = "http://192.168.0.221:63344/2016-2/yonghuban/";
	        var SERVER_URL = "http://192.168.0.221:63344/2016-2/shangjiaban/";
	//        	var SERVER_URL = "http://192.168.0.221:63344/2016-2/sijiban/";
	//        var SERVER_URL = "http://www.yixiucar.com/app/user/";      //郭总
	//        var SERVER_URL = "http://www.yixiucar.com/app/fac/";      //郭总
	//        var SERVER_URL = "http://www.yixiucar.com/app/dirver/";      //郭总
	//       	var SERVER_URL = "http://192.168.1.111:8000/";

	    var isdug = false;
	//        var isdug = true;
	    var isweb = isweb || false;
	    exports.dir = SERVER_URL;
	    exports.dir2 = API_URL;


	    function post(method, parms, callback) {
	        console.log("POST_DATA:" + API_URL + method, JSON.stringify(parms));
	        __weex_require__('@weex-module/stream').fetch({
	            method: 'POST',
	            url: API_URL + method,
	            type: 'json',
	            body: "req=" + JSON.stringify(parms)
	        }, function (e) {
	//            console.log("POSt_CALLBACK:", e.data);
	            callback(e);
	        }, function (e) {
	           // console.log("POSt_ERROR:", e);
	        });
	    }

	    function pushUrl(url) {
	        __weex_require__('@weex-module/navigator').push({
	            'url': url,
	            'animated': 'true',
	        }, function (e) {
	            //callback
	        });
	    }

	    exports.gotoLogin = function () {
	        this.push("denglu.js");
	    }

	    exports.call = function (method, parms, callback, errorCallback) {
	        var self = this;
	        parms = parms || {};
	        self.get("token", function (e) {
	            parms.token = e.data;
	            self.get("lnglat", function (e) {
	                if (e.data && e.data != "undefined") {
	//                    parms.longitude = JSON.parse(e.data).lon || "120.636143";
	//                    parms.latitude = JSON.parse(e.data).lat || "31.320623";
	//                    parms.city = JSON.parse(e.data).city || "苏州市";
	//                    parms.province = JSON.parse(e.data).province || "江苏省";
	                    parms.longitude = JSON.parse(e.data).lon || "120.636143";
	                    parms.latitude = JSON.parse(e.data).lat || "31.320623";
	                    parms.city = "苏州市";
	                    parms.province = "江苏省";
	                }

	                post(method, parms, function (r) {
	                    if (!r || !r.data) {
	//                        self.tost(method+"网络错误");
	                        if (errorCallback)
	                            errorCallback(r);
	                    } else {
	                        if (r.data.requestCode == 5) {
	                            self.del("token");
	                            self.push("denglu.js");
	                            self.tost(r.data.message);
	                        } else if (r.data.requestCode == 0) {
	                            callback(r);
	                        } else {
	                            self.tost(r.data.message);
	                        }
	                    }
	                });
	            });
	        });
	    }

	    exports.save = function (key, value) {
	        //        this.log(key + "," + value);\
	        if (isweb) {
	            value = JSON.stringify(value);
	        }
	        __weex_require__('@weex-module/storage').setItem(key, value, function (e) {
	        });
	    }

	    exports.get = function (key, callback) {
	        __weex_require__('@weex-module/storage').getItem(key, function (e) {
	            callback(e);
	        });
	    }

	    exports.del = function (key, callback) {
	        __weex_require__('@weex-module/storage').removeItem(key, function (e) {

	        });
	    }

	    exports.log = function (log) {
	        if (isdug) {
	            __weex_require__('@weex-module/modal').toast({
	                message: log,
	                duration: 12
	            });
	        }
	    }
	    exports.alert = function (options, callback) {
	        __weex_require__('@weex-module/modal').alert(options, callback);
	    }

	    exports.tost = function (log) {
	        __weex_require__('@weex-module/modal').toast({
	            message: log,
	            duration: 12
	        });
	    }

	    exports.getData = function (page, key) {
	        key = key || "data";
	        var value = page.$getConfig()[key];
	        if (isweb) {
	            value = getQueryString("data");
	        }
	        if (value)
	            return JSON.parse(value);
	        else
	            return {};
	    }

	    exports.push = function (url, data, callback) {
	        if (!url) {
	            //            this.log("URL NULL ERROR");
	            return;
	        }
	        var tmp = {};
	        tmp.url = url.indexOf("http://") != -1 ? url : SERVER_URL + url;
	        if (isweb) {
	            tmp.url = url.indexOf("http://") != -1 ? url : SERVER_URL + '?page=' + url;
	        }
	        tmp.animated = "true";
	        if (data) {
	            tmp.data = JSON.stringify(data);
	            if (isweb) {
	                tmp.url += "&data=" + encodeURI(JSON.stringify(data));
	            }
	            if (data.finish) {
	                tmp.finish = true;
	            }
	            if (data.page) {
	                tmp.page = data.page;
	            }
	        }

	        __weex_require__('@weex-module/navigator').push(tmp, function (e) {
	            if (callback)
	                callback(e);
	        });
	    }
	    exports.pop = function (data) {
	        __weex_require__('@weex-module/navigator').pop(data||{}, function (e) {});
	    }
	    exports.refresh = function () {
	        __weex_require__('@weex-module/navigator').refresh();
	    }
	    exports.loading = function () {
	        __weex_require__('@weex-module/dialog').progress();
	    }
	    exports.hidden = function (data) {
	        __weex_require__('@weex-module/dialog').hide(data||{});
	    }
	    exports.dialog = function (url,data,callback) {
	        __weex_require__('@weex-module/dialog').show(url,data||{},callback);
	    }
	    exports.hxlogin = function (username) {     /* YX_id*/
	        var chat=__weex_require__('@weex-module/chat');
	        if(chat)
	            chat.login(username,"123456");
	    }
	    exports.hxlogout = function () {
	        var chat=__weex_require__('@weex-module/chat');
	        if(chat)
	            chat.logout();
	    }
	    exports.hxchat = function (user) {
	        var chat=__weex_require__('@weex-module/chat');
	        if(chat)
	            chat.chat(user);
	    }
	    exports.bing = function (str,callback) {
	        __weex_require__('@weex-module/alipush').bind("",callback);
	    }
	    exports.bing = function (callback) {
	        __weex_require__('@weex-module/alipush').unbind(callback);
	    }

	})

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/dd-info", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    var api = __webpack_require__(14);
	    __weex_module__.exports ={
	        data: function () {return {
	            dir:api.dir,
	            refresh_display: 'hide',
	            loading_display: 'hide',
	            height:0,
	            dd:{
	                id:"",
	                ddlx: "",
	                xinghao: "",
	                cphm: "",
	                kkxx: "",
	                kksj: "",
	                ddh: "",
	                flag:false,
	            }
	        }},
	        methods: {
	            onloading: function (e) {
	                this.loading_display = true
	                setTimeout(function () {
	                    this.loading_display = 'hide'
	                }.bind(this), 500)
	            },
	            gofuzdd: function (e) {
	                var _this = this;
	                api.push("dingdan3.js", {id: _this.id});
	            }
	        },
	        ready: function (e) {
	            this.dd[0].flag=true;
	//            for(var i= 0;i<this.dd.length;i++){
	//                if(i==0){
	//                    this.dd[i].flag=true;
	//                }
	//            }
	        },
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "container",
	  "children": [
	    {
	      "type": "list",
	      "style": {
	        "position": "absolute",
	        "top": 0,
	        "left": 0,
	        "right": 0,
	        "bottom": 0
	      },
	      "children": [
	        {
	          "type": "cell",
	          "append": "tree",
	          "classList": [
	            "dingdaninfo"
	          ],
	          "repeat": function () {return this.dd},
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
	                    "value": function () {return this.ddlx}
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
	                    "value": function () {return this.xinghao}
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
	                    "value": function () {return this.cphm}
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
	                    "value": function () {return this.kkxx}
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
	                    "value": function () {return this.kksj}
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
	                    "value": function () {return this.ddh}
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
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "dingdaninfo": {
	    "padding": 20,
	    "position": "relative",
	    "marginBottom": 20,
	    "borderBottomWidth": 1,
	    "borderColor": "#e6e6e6"
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
	  },
	  "refresh-view": {
	    "height": 120,
	    "width": 750,
	    "display": "flex",
	    "MsFlexAlign": "center",
	    "WebkitAlignItems": "center",
	    "WebkitBoxAlign": "center",
	    "alignItems": "center"
	  }
	})
	})

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/dd-info2", [], function(__weex_require__, __weex_exports__, __weex_module__){
	__webpack_require__(17);

	;
	    var api = __webpack_require__(14);
	    var wee = __weex_require__('@weex-module/modal');
	    __weex_module__.exports = {
	        data: function () {return {
	            token: "",
	            id: "",
	            jiedan1: {
	                id:"",
	                ddlx: "",
	                xinghao: "",
	                cphm: "",
	                kkxx: "",
	                kksj: "",
	                ddh: "",
	                orderType:"",
	            }
	        }},
	        methods: {
	            jiedanclick: function (e) {
	                var self = this;

	//            -----------------------点击接单-----------------------------------
	                api.call("factory/updateOrder", {id:self.id}, function (ret) {
	//                        点击完接单之后，未接单的数据重新请求，在父模块中从新加载
	                    self.$dispatch('notify', {"a": this.title})
	                });
	//            -----------------------点击接单-----------------------------------
	            }
	        },
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "container",
	  "children": [
	    {
	      "type": "list",
	      "style": {
	        "flex": 1
	      },
	      "repeat": function () {return this.jiedan1},
	      "children": [
	        {
	          "type": "cell",
	          "append": "tree",
	          "classList": [
	            "dingdaninfo"
	          ],
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
	                    "value": function () {return this.ddlx}
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
	                    "value": function () {return this.xinghao}
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
	                    "value": function () {return this.cphm}
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
	                    "value": function () {return this.kkxx}
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
	                    "value": function () {return this.kksj}
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
	                    "value": function () {return this.ddh}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "jiedan",
	              "attr": {
	                "txt": "接单"
	              },
	              "classList": [
	                "jiedanbtn"
	              ],
	              "events": {
	                "click": "jiedanclick"
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
	  "dingdaninfo": {
	    "width": 750,
	    "height": 300,
	    "paddingLeft": 20,
	    "paddingRight": 20,
	    "borderWidth": 1,
	    "borderColor": "#e6e6e6",
	    "justifyContent": "center"
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
	  "jiedanbtn": {
	    "position": "absolute",
	    "top": 130,
	    "right": 30
	  },
	  "refresh-view": {
	    "height": 120,
	    "width": 750,
	    "display": "flex",
	    "MsFlexAlign": "center",
	    "WebkitAlignItems": "center",
	    "WebkitBoxAlign": "center",
	    "alignItems": "center"
	  }
	})
	})

/***/ },
/* 17 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/jiedan", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __weex_module__.exports ={
	        data:function () {return {
	            txt:"",
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
	            "value": function () {return this.txt}
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "btn": {
	    "width": 120,
	    "height": 120,
	    "backgroundColor": "#E95412",
	    "borderRadius": 60,
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "btn-txt": {
	    "fontSize": 36,
	    "color": "#ffffff"
	  }
	})
	})

/***/ }
/******/ ]);