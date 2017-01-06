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

	;__weex_define__("@weex-component/6bf46221cc52f475d4ab346f9525eb02", [], function(__weex_require__, __weex_exports__, __weex_module__){
	__webpack_require__(1);
	__webpack_require__(15);

	;
	    __webpack_require__(2);
	    var api = __webpack_require__(14);
	    var count;
	    __weex_module__.exports = {
	        data: function () {return {
	            dir: api.dir,
	            boxcolor: "",
	            txtcolor: "",
	            refresh_display: "hide",
	            orderInfo: {},
	            progress: 5,
	            progressList: [],
	            cont2: [],
	            orderId: "",
	            wenben: "确 认",
	            xiangqing: "",
	            leixing: "",
	            title2: "拍照接车",
	            refresh_display: "hide",
	            wanjie: true,
	            bottom: 100,
	        }},
	        created: function (e) {
	            var _this = this;
	            _this.orderId = api.getData(_this).id;
	            api.call("factory/queryOrderOne", {id: _this.orderId}, function (ret) {
	                _this.orderInfo = ret.data.orderInfo;
	                if (ret.data.orderInfo.orderType == 1) {
	                    _this.leixing = "维修保养";
	                } else if (ret.data.orderInfo.orderType == 3) {
	                    _this.leixing = "现场救援";
	                }
	            });
	//            请求
	            _this.qingqiu();
	            _this.$on('dianji', function (e) {
	                if (_this.title2 == "拍照接车") {
	                    var a = 0;
	                    for (var i = 0; i < _this.progressList.length; i++) {
	                        if (_this.progressList[i].title == "车辆正在前往目的地") {
	                            a = 1;
	                            if (_this.progressList[i].ctime) {
	                                a = 2;
	                            }
	                        }
	                    }
	                    if (a == 0 || a == 2) {
	//                        _this.boxcolor="";
	//                        _this.txtcolor="";
	                        api.push("paizhaojieche2.js", {orderId: _this.orderId}, function (e) {
	                            api.refresh();
	                        });
	                    } else {
	//                        _this.boxcolor="boxcolor";
	//                        _this.txtcolor="txtcolor";
	                        api.tost("请等待车辆到达目的地");
	                    }
	                } else if (_this.title2 == "添加项目") {
	                    api.push("addxiangmu.js", {orderId: _this.orderId}, function (e) {
	                        api.refresh();
	                    })
	                } else if (_this.title2 == "旧件拍照") {
	//                    判断是否确定了，如果确定就可以点击，如果是待确定就不能点击
	//                    for (var i = 0; i < _this.progressList.length; i++) {
	//                        if (_this.progressList[i].wenben == "待确认" && _this.progressList[i].title == "项目确认") {
	//                            api.tost("请等待用户确认");
	//                        } else {
	//                            api.push("paizhaojieche2.js",{orderId:_this.orderId},function (e) {
	//                                api.refresh();
	//                            });
	//                            break;
	//                        }
	//                    }
	                    var isgo = 0;
	                    for (var i = 0; i < _this.progressList.length; i++) {
	                        if (_this.progressList[i].wenben == "查 看" && _this.progressList[i].title == "二次项目确认") {
	                            isgo = 1;
	                            api.push("paizhaojieche3.js", {orderId: _this.orderId}, function (e) {
	                                api.refresh();
	                            });
	                            break;
	                        } else if (_this.progressList[i].title == "维修中" && _this.progressList[i + 1].title == "车辆维修完毕") {
	                            isgo = 1;
	                            api.push("paizhaojieche3.js", {orderId: _this.orderId}, function (e) {
	                                api.refresh();
	                            });
	                            break;
	                        }
	                    }
	                    if (isgo == 0) {
	                        api.tost("请等待用户确认");
	                    }
	                } else if (_this.title2 == "安排送车") {
	                    var songche = 0;
	                    for (var i = 0; i < _this.progressList.length; i++) {
	                        if (_this.progressList[i].wenben == "已支付" && _this.progressList[i].title == "订单支付") {
	                            songche = 1;
	                            break;
	                        }
	                    }
	                    if (songche == 1) {
	                        api.tost("订单已支付，无法再安排送车");
	                    } else {
	                        if (count == 0) {
	                            api.push("songcheshangmen.js", {orderId: _this.orderId}, function (e) {
	                                api.refresh();
	                            });
	                        } else if (count == 1) {
	                            api.tost("已安排过送车");
	                        }
	                    }
	                }
	            });
	            _this.$on('dianji2', function (e) {
	                api.log("id:" + this.orderId);
	                api.push("hbzs.js", {orderId: _this.orderId});
	            });
	        },
	        methods: {
	            sendmsg: function (e) {
	                __weex_require__('@weex-module/utils').sendSMS(this.orderInfo.senderCell,"");    //短信
	//                api.push("paizhaojieche3.js");
	//                api.push("addxiangmu.js", {orderId: this.orderId});
	//                api.push("cheliangxingshiluxian.js", {orderId: this.orderId});

	//                api.hxchat({
	//                    username: "YX_" + 22,
	//                    nick: "haha",
	//                    icon: "http://www.yixiucar.com/app/user/images/sya.png"
	//                });
	            },
	            onseclled: function (e) {
	                var sx = e.data.rangeHeight - e.data.height - e.data.offsetY;
	                if (sx < 50) {
	                    this.loadMore();
	                }
	            },
	            datarefresh: function (e) {
	                this.refresh_display = "show";
	                this.page = 1;
	                this.loaddata();
	            },
	            loadMore: function (e) {
	                api.log(this.page);
	                var _this = this;
	                this.page++;
	                this.loaddata();
	            },
	            loaddata: function (e) {
	                this.qingqiu();
	                this.refresh_display = "hide";
	            },
	            ftime: function (e) {
	                if (e) {
	                    return e.split(" ")[1].substring(0, 5);
	                }
	                return "";
	            },
	            fday: function (e) {
	                if (e) {
	                    return e.split(" ")[0].substring(5);
	                }
	                return "";
	            },
	            itemClick: function (e) {
	                var _this = this;
	                var index = e.target.attr.item;
	                var p = this.progressList[index];
	                if (p.isInfo) {
	                    if (p.subTitle == "查看 预约项目" && p.ctime) {
	                        api.push("yuyuexiangmu.js", {id: _this.orderId});
	                    } else if (p.subTitle == "查看 服务顾问信息" && p.ctime) {
	                        api.call("factory/queryDriver", {id: _this.orderId}, function (ret) {
	                            __weex_require__('@weex-module/driverdialog').getDriver(ret.data);
	                        });
	                    } else if (p.subTitle == "查看 代驾人员信息" && p.type == 0 && p.ctime) {
	                        api.call("factory/queryDriver", {id: _this.orderId}, function (ret) {
	                            api.dialog(_this.dir + "zi-daijiaxinxi.js", {info: ret.data.driverInfo});
	                        });
	                    } else if (p.subTitle == "查看 代驾人员位置" && p.ctime) {
	                        if (_this.progressList[index + 1].title == "取车完成" && this.progressList[index + 1].ctime) {
	                            api.tost("代驾人员已取车完成")
	                        } else {
	                            api.push("daijiaweizhi.js", {orderId: _this.orderId});
	                        }
	                    } else if (p.subTitle == "查看 车辆当前行驶轨迹" && p.type == 0 && p.ctime) {
	//                        if (_this.progressList[index + 1].title == "车辆到达目的地" && this.progressList[index + 1].ctime) {
	//                            api.tost("车辆已经到达目的地");
	//                        } else {
	//                            api.push("cheliangxingshiluxian.js", {orderId: _this.orderId, type: 1});
	//                        }
	                        api.push("cheliangxingshiluxian.js", {orderId: _this.orderId, type: 1});
	                    } else if (p.subTitle == "拍照接车" && p.ctime) {
	                        api.push("shipin2.js", {orderId: _this.orderId, fanhuiurl: "dingdan3.js"}, function (e) {
	//                            api.refresh();
	                        });
	                    } else if (p.subTitle == "查看 当前车辆的维修视频" && p.ctime) {
	                        api.push("shipin3.js", {orderId: _this.orderId, fanhuiurl: "dingdan3.js"}, function (e) {
	//                            api.refresh();
	                        });
	                    } else if (p.subTitle == "查看 旧件照片" && p.ctime) {
	                        api.get("token", function (e) {
	                            api.push("shipin4.js", {orderId: _this.orderId, fanhuiurl: "dingdan3.js"}, function (e) {
	//                                api.refresh();
	                            });
	                        });
	                    } else if (p.subTitle == "查看 代驾人员信息" && p.type == 2 && p.ctime) {
	                        api.call("factory/sendCarDriver", {id: _this.orderId}, function (ret) {
	                            api.dialog(_this.dir + "zi-daijiaxinxi.js", {info: ret.data.driverInfo});
	                        });
	                    } else if (p.subTitle == "查看 车辆当前行驶轨迹" && p.type == 2 && p.ctime) {
	//                        if (_this.progressList[index + 1].title == "用户确认接收车辆" && this.progressList[index + 1].ctime) {
	//                            api.tost("车辆已经到达目的地");
	//                        } else {
	//                            api.push("cheliangxingshiluxian.js", {orderId: _this.orderId, type: 2});
	//                        }
	                        api.push("cheliangxingshiluxian.js", {orderId: _this.orderId, type: 2});
	                    } else {
	                        api.log("其他");
	                    }
	                }
	                if (p.isButton) {
	                    if (p.title == "二次项目确认" && p.ctime) {
	                        if (_this.wenben == "查 看") {
	                            api.push("yuyuexiangmu2.js", {id: _this.orderId});
	                            api.log("查看");
	                        } else {
	                            if (p.wenben == "待确认") {
	//                                api.push("yuyuexiangmu.js", {id: _this.orderId});
	                                api.push("yuyuexiangmu3.js", {id: _this.orderId});
	//                                api.tost("请等待用户确认");
	                            } else if (p.wenben == "确 认") {
	                                api.push("addxiangmu.js", {orderId: _this.orderId})
	                            }
	                        }
	                    }
	                }
	            },
	            goxiangqing: function (e) {
	                var _this = this;
	                api.push("dingdanxinxi.js", {id: _this.orderId});
	            },
	            callphone: function (e) {
	                __weex_require__('@weex-module/utils').callPhone(this.orderInfo.senderCell);
	            },
	            qingqiu: function (e) {
	                var _this = this;
	                var aa = 0;
	                api.call("factory/queryOrderProgress", {orderId: _this.orderId}, function (ret) {
	//                    api.log(ret.data);
	                    count = ret.data.count;
	                    api.log("count:" + ret.data.count);
	                    _this.progressList = [];

	                    for (var i = 0; i < ret.data.opInfo.length; i++) {
	                        _this.progressList.push({
	                            index: i,
	                            ctime: ret.data.opInfo[i].createTime,
	                            title: ret.data.opInfo[i].title,
	                            subTitle: ret.data.opInfo[i].subTitle == "查看 服务顾问的信息" ? "拍照接车" : ret.data.opInfo[i].subTitle,
	                            isInfo: ret.data.opInfo[i].tetails,
	                            isButton: ret.data.opInfo[i].button,
	                            num: ret.data.opInfo[i].num,
	                            type: ret.data.opInfo[i].type,
	                            wenben: ret.data.opInfo[i].title == "订单支付" ? "待支付" : "待确认",
	                        });
	                        if (_this.progressList[i].ctime) {
	                            _this.progress = i;
	                        }
	                        if (_this.progressList[i].title == "车辆正在前往目的地") {
	                            aa = 1;
	                            if (_this.progressList[i].ctime) {
	                                aa = 2;
	                            }
	                        }
	                        if (_this.progressList[i].title == "订单支付" && _this.progressList[i].ctime) {
	                            if (_this.progressList[i].wenben == "待确认") {
	                                aa = 1;
	                            } else if (_this.progressList[i].wenben == "支 付") {
	                                aa = 2;
	                            } else if (_this.progressList[i].wenben == "已支付") {
	                                aa = 1;
	                            }

	                        }else if (_this.progressList[i].title == "二次项目确认" && _this.progressList[i].ctime) {
	                            if (_this.progressList[i].wenben == "待确认") {
	                                aa = 1;
	                            } else if(_this.progressList[i].wenben=="查 看"){
	                                aa = 2;
	                            }
	                        }
	                        if (count == 1) {
	                            aa = 1;
	                        }
	                        if (aa == 0 || aa == 2) {
	                            _this.boxcolor = "";
	                            _this.txtcolor = "";
	                        } else {
	                            _this.boxcolor = "boxcolor";
	                            _this.txtcolor = "txtcolor";
	                        }
	                    }

	                    for (var j = 0; j < _this.progressList.length; j++) {
	                        var p = _this.progressList[j];

	                        if (p.title == "预约成功" && p.ctime) {
	                            _this.title2 = "拍照接车";
	                        } else if (p.title == "车辆接收检查中" && p.ctime) {
	                            _this.title2 = "添加项目";
	                        } else if (p.title == "二次项目确认" && p.ctime) {
	                            _this.title2 = "旧件拍照";
	                        } else if (p.title == "维修中" && p.ctime && _this.progressList[j + 1].title == "车辆维修完毕") {
	                            _this.title2 = "旧件拍照";
	                        } else if (p.title == "车辆维修完毕" && p.ctime) {
	                            _this.title2 = "安排送车";
	                        } else if (p.title == "完成" && p.ctime) {
	                            _this.wanjie = false;
	                            _this.bottom = 0;
	                        }
	                        if (_this.progressList[j].title == "二次项目确认" && _this.progressList[j].ctime && _this.progressList[j].num == 1) {
	                            _this.progressList[j].wenben = "查 看";
	                            if(count==1){
	                                aa=1;
	                            }else{
	                                aa = 2;
	                            }
	                        }
	                        if (_this.progressList[j].title == "订单支付" && _this.progressList[j].ctime && _this.progressList[j].num == 2) {
	                            _this.progressList[j].wenben = "已支付";
	                            aa = 1;
	                        }
	                        if (_this.progressList[j].title == "用户确认接收车辆" && _this.progressList[j].ctime && _this.progressList[j].num == 3) {
	                            _this.progressList[j].wenben = "已确认";
	                        }
	                    }
	                    if (aa == 0 || aa == 2) {
	                        _this.boxcolor = "";
	                        _this.txtcolor = "";
	                    } else {
	                        _this.boxcolor = "boxcolor";
	                        _this.txtcolor = "txtcolor";
	                    }
	                });
	            }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "xx-navpage",
	  "attr": {
	    "navtitle": "订单",
	    "navlefturl": "fuwudd.js",
	    "navrighturl": "",
	    "navleftsrc": function () {return (this.dir) + 'images/fanhui.png'},
	    "bg": "#F5F3F8"
	  },
	  "children": [
	    {
	      "type": "scroller",
	      "style": {
	        "flex": 1
	      },
	      "append": "node",
	      "children": [
	        {
	          "type": "list",
	          "classList": [
	            "flow"
	          ],
	          "style": {
	            "marginBottom": function () {return this.bottom}
	          },
	          "children": [
	            {
	              "type": "cell",
	              "append": "tree",
	              "classList": [
	                "dingdaninfo"
	              ],
	              "style": {
	                "backgroundColor": "#FFFAF4"
	              },
	              "events": {
	                "click": "goxiangqing"
	              },
	              "children": [
	                {
	                  "type": "container",
	                  "children": [
	                    {
	                      "type": "container",
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
	                            "value": function () {return this.leixing}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "container",
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
	                          "style": {
	                            "width": 500,
	                            "lines": 1,
	                            "textOverflow": "ellipsis"
	                          },
	                          "attr": {
	                            "value": function () {return this.orderInfo.carFullTypeName}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "container",
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
	                            "value": function () {return this.orderInfo.carLicence}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "container",
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
	                            "value": function () {return this.orderInfo.senderName}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "container",
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
	                            "value": function () {return this.orderInfo.senderCell}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "container",
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
	                            "value": function () {return this.orderInfo.orderNumber}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "image",
	                      "classList": [
	                        "jiantou-right"
	                      ],
	                      "attr": {
	                        "src": function () {return (this.dir) + 'images/right-jiao.fw.png'}
	                      }
	                    },
	                    {
	                      "type": "image",
	                      "classList": [
	                        "img",
	                        "duanxin"
	                      ],
	                      "attr": {
	                        "src": function () {return (this.dir) + 'images/duanxin.png'}
	                      },
	                      "events": {
	                        "click": "sendmsg"
	                      }
	                    },
	                    {
	                      "type": "image",
	                      "classList": [
	                        "img",
	                        "dianhua"
	                      ],
	                      "attr": {
	                        "src": function () {return (this.dir) + 'images/dianhua.png'}
	                      },
	                      "events": {
	                        "click": "callphone"
	                      }
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "refresh",
	              "style": {
	                "alignItems": "center"
	              },
	              "attr": {
	                "display": function () {return this.refresh_display}
	              },
	              "events": {
	                "refresh": "datarefresh"
	              },
	              "children": [
	                {
	                  "type": "loading-indicator",
	                  "style": {
	                    "height": 60,
	                    "width": 60,
	                    "color": "#FF0000"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "cell",
	              "append": "tree",
	              "style": {
	                "paddingLeft": 50,
	                "paddingTop": 20
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "flowtop"
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "cont"
	                  ],
	                  "repeat": function () {return this.progressList},
	                  "events": {
	                    "click": "itemClick"
	                  },
	                  "attr": {
	                    "item": function () {return this.$index}
	                  },
	                  "children": [
	                    {
	                      "type": "div",
	                      "shown": function () {return this.$index!=this.progressList.length-1&&this.$index>0&&this.progress>=this.$index},
	                      "classList": [
	                        "flow-line",
	                        "flow-linexia"
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "shown": function () {return this.progress<this.$index},
	                      "classList": [
	                        "flow-line",
	                        "flow-line2",
	                        "flow-linexia"
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "classList": [
	                        "time"
	                      ],
	                      "children": [
	                        {
	                          "type": "text",
	                          "classList": [
	                            "time-txt1"
	                          ],
	                          "shown": function () {return this.progress!=this.$index},
	                          "attr": {
	                            "value": function () {return this.ftime(this.ctime)}
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "time-txt1"
	                          ],
	                          "style": {
	                            "color": "#E95412"
	                          },
	                          "shown": function () {return this.progress==this.$index},
	                          "attr": {
	                            "value": function () {return this.ftime(this.ctime)}
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "time-txt2"
	                          ],
	                          "shown": function () {return this.progress!=this.$index},
	                          "attr": {
	                            "value": function () {return this.fday(this.ctime)}
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "time-txt2"
	                          ],
	                          "style": {
	                            "color": "#E95412"
	                          },
	                          "shown": function () {return this.progress==this.$index},
	                          "attr": {
	                            "value": function () {return this.fday(this.ctime)}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "classList": [
	                        "line"
	                      ],
	                      "children": [
	                        {
	                          "type": "image",
	                          "shown": function () {return this.$index==0},
	                          "classList": [
	                            "flow1"
	                          ],
	                          "attr": {
	                            "src": function () {return (this.dir) + 'images/flow1.png'}
	                          }
	                        },
	                        {
	                          "type": "image",
	                          "shown": function () {return !this.$index==0&&this.progress<this.$index},
	                          "classList": [
	                            "flow1"
	                          ],
	                          "attr": {
	                            "src": function () {return (this.dir) + 'images/flow4.png'}
	                          }
	                        },
	                        {
	                          "type": "image",
	                          "shown": function () {return !this.$index==0&&this.progress==this.$index},
	                          "classList": [
	                            "flow1"
	                          ],
	                          "attr": {
	                            "src": function () {return (this.dir) + 'images/flow3.png'}
	                          }
	                        },
	                        {
	                          "type": "image",
	                          "shown": function () {return !this.$index==0&&this.progress>this.$index},
	                          "classList": [
	                            "flow1"
	                          ],
	                          "attr": {
	                            "src": function () {return (this.dir) + 'images/flow2.png'}
	                          }
	                        },
	                        {
	                          "type": "div",
	                          "shown": function () {return this.$index!=this.progressList.length-1&&this.progress>this.$index},
	                          "classList": [
	                            "flow-line"
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "shown": function () {return this.$index!=this.progressList.length-1&&this.progress<=this.$index},
	                          "classList": [
	                            "flow-line",
	                            "flow-line2"
	                          ]
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "classList": [
	                        "font"
	                      ],
	                      "children": [
	                        {
	                          "type": "text",
	                          "classList": [
	                            "time-txt1"
	                          ],
	                          "style": {
	                            "color": "#a0a0a0"
	                          },
	                          "shown": function () {return this.progress<this.$index},
	                          "attr": {
	                            "value": function () {return this.title}
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "time-txt1"
	                          ],
	                          "shown": function () {return this.progress>this.$index},
	                          "attr": {
	                            "value": function () {return this.title}
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "time-txt1"
	                          ],
	                          "style": {
	                            "color": "#E95412"
	                          },
	                          "shown": function () {return this.progress==this.$index},
	                          "attr": {
	                            "value": function () {return this.title}
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "time-txt2"
	                          ],
	                          "shown": function () {return this.progress!=this.$index},
	                          "attr": {
	                            "value": function () {return this.subTitle}
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "time-txt1"
	                          ],
	                          "style": {
	                            "color": "#E95412"
	                          },
	                          "shown": function () {return this.progress==this.$index},
	                          "attr": {
	                            "value": function () {return this.subTitle}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "image",
	                      "shown": function () {return this.isInfo&&this.ctime},
	                      "classList": [
	                        "jiantou",
	                        "jiantou2"
	                      ],
	                      "attr": {
	                        "src": function () {return (this.dir) + 'images/right-jiao.fw.png'}
	                      }
	                    },
	                    {
	                      "type": "div",
	                      "shown": function () {return this.isButton&&this.ctime},
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
	                            "value": function () {return this.wenben}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "shown": function () {return this.$index!=this.progressList.length-1&&this.progress>this.$index},
	                      "classList": [
	                        "flow-line",
	                        "flow-lineshang"
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "shown": function () {return this.$index!=this.progressList.length-1&&this.progress<=this.$index},
	                      "classList": [
	                        "flow-line",
	                        "flow-line2",
	                        "flow-lineshang"
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "style": {
	                    "width": 5,
	                    "height": 30,
	                    "backgroundColor": "#FFFAF4",
	                    "marginLeft": 100,
	                    "marginTop": -91
	                  }
	                },
	                {
	                  "type": "div",
	                  "repeat": function () {return this.progressList},
	                  "children": [
	                    {
	                      "type": "div",
	                      "style": {
	                        "flexDirection": "row",
	                        "justifyContent": "center",
	                        "marginBottom": 10
	                      },
	                      "children": [
	                        {
	                          "type": "div",
	                          "shown": function () {return this.title=='完成'&&this.ctime},
	                          "classList": [
	                            "botLine"
	                          ]
	                        },
	                        {
	                          "type": "image",
	                          "shown": function () {return this.title=='完成'&&this.ctime},
	                          "classList": [
	                            "bottompic"
	                          ],
	                          "attr": {
	                            "src": function () {return (this.dir) + 'images/bottompic.png'}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "shown": function () {return this.title=='完成'&&this.ctime},
	                      "classList": [
	                        "jieshu"
	                      ],
	                      "attr": {
	                        "value": "本次任务已完成"
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "dd3",
	      "attr": {
	        "title1": "赠送红包",
	        "title2": function () {return this.title2},
	        "txtcolor": function () {return this.txtcolor},
	        "boxcolor": function () {return this.boxcolor}
	      },
	      "classList": [
	        "dd"
	      ],
	      "shown": function () {return this.wanjie}
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "refresh-view": {
	    "padding": 30,
	    "alignItems": "center"
	  },
	  "tupian": {
	    "width": 150,
	    "height": 150,
	    "marginLeft": 10,
	    "marginRight": 10
	  },
	  "dingdaninfo": {
	    "padding": 20,
	    "position": "relative",
	    "backgroundColor": "#ffffff",
	    "borderBottomWidth": 1,
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
	    "fontSize": 28
	  },
	  "jiantou-right": {
	    "width": 37,
	    "height": 37,
	    "position": "absolute",
	    "top": 50,
	    "right": 10
	  },
	  "jiantou": {
	    "width": 37,
	    "height": 37,
	    "position": "absolute",
	    "top": 150,
	    "right": 20
	  },
	  "jiantou2": {
	    "top": 30
	  },
	  "cont": {
	    "flexDirection": "row"
	  },
	  "time": {
	    "width": 80
	  },
	  "time-txt1": {
	    "fontSize": 28,
	    "textAlign": "center",
	    "color": "#373634"
	  },
	  "time-txt2": {
	    "fontSize": 24,
	    "color": "#a0a0a0",
	    "textAlign": "center"
	  },
	  "line": {
	    "height": 130,
	    "marginTop": 10
	  },
	  "flow": {
	    "backgroundColor": "#FFFAF4",
	    "borderWidth": 1,
	    "borderColor": "#e6e6e6"
	  },
	  "flow1": {
	    "width": 47,
	    "height": 47
	  },
	  "flow-line": {
	    "width": 5,
	    "height": 80,
	    "backgroundColor": "#E95412",
	    "position": "absolute",
	    "top": 38,
	    "left": 20
	  },
	  "flow-line2": {
	    "backgroundColor": "#ABA9AA"
	  },
	  "flow-lineshang": {
	    "top": 62,
	    "left": 100
	  },
	  "flow-linexia": {
	    "top": 0,
	    "left": 100
	  },
	  "font": {
	    "marginTop": 10,
	    "marginLeft": 20
	  },
	  "red": {
	    "color": "#E95412"
	  },
	  "btn": {
	    "width": 120,
	    "paddingTop": 6,
	    "paddingBottom": 6,
	    "backgroundColor": "#E95412",
	    "borderRadius": 10,
	    "position": "absolute",
	    "top": 10,
	    "right": 30
	  },
	  "btn-txt": {
	    "fontSize": 30,
	    "color": "#ffffff",
	    "textAlign": "center"
	  },
	  "dd": {
	    "position": "absolute",
	    "bottom": 0
	  },
	  "bottompic": {
	    "width": 428,
	    "height": 192
	  },
	  "jieshu": {
	    "background": "#FFFAF4",
	    "textAlign": "center",
	    "fontSize": 30,
	    "color": "#373634",
	    "paddingBottom": 50,
	    "paddingTop": 20
	  },
	  "botLine": {
	    "width": 5,
	    "height": 30,
	    "backgroundColor": "#E95412",
	    "marginTop": -150
	  },
	  "img": {
	    "width": 80,
	    "height": 80,
	    "position": "absolute",
	    "top": 120,
	    "right": 0
	  },
	  "duanxin": {
	    "right": 120
	  },
	  "dianhua": {
	    "right": 15
	  },
	  "flowtop": {
	    "width": 5,
	    "height": 200,
	    "backgroundColor": "#E95412",
	    "position": "absolute",
	    "top": 0,
	    "left": 150
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/6bf46221cc52f475d4ab346f9525eb02", {
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

	;__weex_define__("@weex-component/dd3", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    var api = __webpack_require__(14);
	    __weex_module__.exports = {
	        data: function () {return {
	            orderId: "",
	            boxcolor:"",
	            txtcolor:"",
	            title1: "",
	            title2: "",
	            title1src: "",
	            title2src: "",
	        }},
	        methods: {
	            title1url: function (e) {
	                this.$dispatch('dianji2');
	            },
	            title2url: function (e) {
	                this.$dispatch('dianji');
	            }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
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
	            "value": function () {return this.title1}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": function () {return ['d', 'current', this.boxcolor]},
	      "events": {
	        "click": "title2url"
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": function () {return ['txt', 'current-txt', this.txtcolor]},
	          "attr": {
	            "value": function () {return this.title2}
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "boxcolor": {
	    "backgroundColor": "#dddddd"
	  },
	  "txtcolor": {
	    "color": "#ffffff"
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

/***/ }
/******/ ]);