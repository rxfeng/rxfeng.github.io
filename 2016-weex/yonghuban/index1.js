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

	;__weex_define__("@weex-component/dddfb4cff9142e8f3a94ab211e037725", [], function(__weex_require__, __weex_exports__, __weex_module__){
	__webpack_require__(1);
	__webpack_require__(15);
	__webpack_require__(16);
	__webpack_require__(17);
	__webpack_require__(18);

	;
	    __webpack_require__(2);
	    var wee = __weex_require__('@weex-module/modal');
	    var stream = __weex_require__('@weex-module/stream');
	    var api = __webpack_require__(14);
	    __weex_module__.exports = {
	        data: function () {return {
	            dir: api.dir,
	            xuanze: false,
	            serverData: [],
	            jifen: 0,
	            xiaoxitxt: "0",
	            fanhuiurl: "index.js",
	            weather: {
	                img: "",
	                tianqi: "晴",
	                du: "0",
	                tishi: "",
	                pmlevel: "",
	                levelColor: "",
	                pmzhi: "",
	                jianyi: "",
	            },
	            xuanze: false,
	            dd: "",
	            carMileage: "",
	            len: 0,
	            chengshi: "",
	            xiaoxixianshi: false,
	            xiaoxiurl: "xiaoxi.js",
	            inServiceOrderId: "",
	            fuwuzhong: false,
	        }},
	        methods: {
	            ceshi: function (e) {
	                api.dialog(this.dir + "zi-tishi1.js");
	            },
	            gengduo: function (e) {
	                api.push("xichemeirong2.js");
	            },
	            jifenlclick: function (e) {
	                var time = new Date();
	                api.push("zi-webpage.js", {
	                    title: "积分说明",
	                    url: this.dir + "html/jfgz.html?v=" + time,
	                    fanhui: "index.js"
	                });
	            }
	        },
	        created: function () {
	            var _this = this;
	            api.get("carInfo", function (e) {
	                _this.dd = JSON.parse(e.data).dd;
	                _this.carMileage = JSON.parse(e.data).carMileage;
	            });
	            _this.$on('notify', function (e) {
	                _this.dd = e.detail.a;
	                _this.len = e.detail.len;
	                _this.carMileage = e.detail.carMileage;
	                _this.inServiceOrderId = e.detail.inServiceOrderId;
	                if (_this.inServiceOrderId == 0) {
	//                            显示服务中样式
	                    _this.fuwuzhong = true;
	                } else {
	//                            不显示服务中样式
	                    _this.fuwuzhong = false;
	                }
	                var info = {keyword: "", type: 9, sort: 1, carId: _this.dd, indexp: 1}
	                api.call("factory/list", info, function (ret) {
	                    if (ret.data.requestCode == 109) {
	                        _this.serverData = [];
	                    } else {
	                        _this.serverData = ret.data.datas;
	                    }
	                });
	            });

	//            api.get("orderinfo", function (e) {
	//                var orderinfo = JSON.parse(e.data);
	//                orderinfo = {}; // 清空订单的存储信息
	//                api.save("orderinfo", orderinfo);
	//            });
	            api.save("orderinfo", {});
	////            -----------------------首页基本信息-----------------------------------
	//            api.call("index/homebase", {}, function (ret) {
	//                _this.jifen = ret.data.userInfo.userScore;
	//            });
	////            -----------------------首页基本信息-----------------------------------

	//            -----------------------未读消息-----------------------------------
	            api.call("index/unreadCount", {}, function (ret) {
	                api.log("积分11111111111：" + ret.data.unreadCount);
	                _this.xiaoxixianshi = true;
	                _this.xiaoxitxt = ret.data.unreadCount;
	                _this.jifen = ret.data.jf;
	                if (ret.data.unreadCount >= 1) {
	                    _this.xiaoxixianshi = true;
	                    _this.xiaoxitxt = ret.data.unreadCount;
	                } else {
	                    _this.xiaoxixianshi = false;
	                }
	            });
	//            -----------------------未读消息-----------------------------------

	//            -----------------------天气-----------------------------------不登录也显示
	            api.call("index/weatherInfo", {}, function (ret) {
	                _this.weather.tianqi = ret.data.weatherInfo.text;
	                _this.weather.du = ret.data.weatherInfo.temperature;
	                _this.weather.tishi = ret.data.weatherInfo.tishi;
	                _this.weather.pmlevel = ret.data.weatherInfo.pmlevel;
	                _this.weather.levelColor = ret.data.weatherInfo.levelColor;
	                _this.weather.jianyi = ret.data.weatherInfo.life;  //洗车建议
	                _this.weather.img = _this.dir + "images/tianqi/" + ret.data.weatherInfo.code + ".png";
	            });
	//            -----------------------天气-----------------------------------

	//            -----------------------首页商家列表-----------------------------------
	            var info = {keyword: "", type: 9, sort: 1, carId: _this.dd}
	            api.call("factory/list", info, function (ret) {
	//                api.log(ret.data.datas.length);
	                if (ret.data.requestCode == 109) {
	                    _this.serverData = [];
	                } else {
	                    _this.serverData = ret.data.datas;
	                }
	            });
	//            -----------------------首页商家列表-----------------------------------

	            api.get("lnglat", function (e) {
	                _this.chengshi = JSON.parse(e.data).city;
	            });
	            _this.$on('naviBar.rightItem.click', function (e) {
	                api.get("token", function (e) {
	                    if (e.data == undefined || e.data == " " || e.data == "" || e.data == "undefined") {
	//                        _this.xiaoxiurl = ("denglu.js");
	                        api.push("denglu.js")
	                    } else {
	                        api.push("xiaoxi.js", {}, function (e) {
	                            api.log(e);
	                            api.call("index/unreadCount", {}, function (ret) {
	                                _this.xiaoxixianshi = true;
	                                _this.xiaoxitxt = ret.data.unreadCount;
	                                if (ret.data.unreadCount >= 1) {
	                                    _this.xiaoxixianshi = true;
	                                    _this.xiaoxitxt = ret.data.unreadCount;
	                                } else {
	                                    _this.xiaoxixianshi = false;
	                                }
	                            });
	                        })
	                    }
	                })
	            });
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "xx-navpage",
	  "attr": {
	    "navtitle": "一修车管家",
	    "navlefttitle": function () {return this.chengshi},
	    "navlefturl": "",
	    "navrighturl": "",
	    "navrightsrc": function () {return (this.dir) + 'images/xiaoxi.png'},
	    "navleftsrc": "",
	    "bg": "#F5F3F8"
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "xxdiv"
	      ],
	      "children": [
	        {
	          "type": "xx",
	          "attr": {
	            "title": function () {return this.xiaoxitxt}
	          },
	          "shown": function () {return this.xiaoxixianshi},
	          "classList": [
	            "top-xiaoxi"
	          ]
	        }
	      ]
	    },
	    {
	      "type": "list",
	      "children": [
	        {
	          "type": "cell",
	          "append": "tree",
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "weather"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "sy-img"
	                  ],
	                  "attr": {
	                    "src": function () {return (this.dir) + 'images/sy-img.png'}
	                  }
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "weather-one"
	                  ],
	                  "children": [
	                    {
	                      "type": "div",
	                      "classList": [
	                        "tianqi"
	                      ],
	                      "children": [
	                        {
	                          "type": "div",
	                          "style": {
	                            "flexDirection": "row"
	                          },
	                          "children": [
	                            {
	                              "type": "image",
	                              "classList": [
	                                "sum"
	                              ],
	                              "attr": {
	                                "src": function () {return this.weather.img}
	                              }
	                            },
	                            {
	                              "type": "div",
	                              "style": {
	                                "marginLeft": 15,
	                                "marginTop": 20
	                              },
	                              "children": [
	                                {
	                                  "type": "text",
	                                  "classList": [
	                                    "sum-txt"
	                                  ],
	                                  "attr": {
	                                    "value": function () {return this.weather.tianqi}
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
	                                        "sum-txt"
	                                      ],
	                                      "attr": {
	                                        "value": function () {return (this.weather.du) + '℃'}
	                                      }
	                                    },
	                                    {
	                                      "type": "text",
	                                      "classList": [
	                                        "sum-txt"
	                                      ],
	                                      "style": {
	                                        "marginLeft": 40
	                                      },
	                                      "shown": function () {return this.weather.tishi},
	                                      "attr": {
	                                        "value": "PM2.5浓度:"
	                                      }
	                                    },
	                                    {
	                                      "type": "text",
	                                      "classList": [
	                                        "sum-txt"
	                                      ],
	                                      "shown": function () {return this.weather.tishi},
	                                      "style": {},
	                                      "attr": {
	                                        "value": function () {return this.weather.tishi||''}
	                                      }
	                                    },
	                                    {
	                                      "type": "text",
	                                      "style": {
	                                        "color": function () {return this.weather.levelColor},
	                                        "marginLeft": 20,
	                                        "fontSize": 32
	                                      },
	                                      "shown": function () {return this.weather.tishi},
	                                      "attr": {
	                                        "value": function () {return this.weather.pmlevel||''}
	                                      }
	                                    }
	                                  ]
	                                }
	                              ]
	                            }
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "style": {
	                            "marginLeft": 30,
	                            "width": 543,
	                            "height": 80,
	                            "flexDirection": "row"
	                          },
	                          "children": [
	                            {
	                              "type": "div",
	                              "style": {
	                                "flexDirection": "row"
	                              },
	                              "children": [
	                                {
	                                  "type": "text",
	                                  "classList": [
	                                    "xiche-txt"
	                                  ],
	                                  "events": {
	                                    "click": "ceshi"
	                                  },
	                                  "attr": {
	                                    "value": "宝驰捷建议："
	                                  }
	                                },
	                                {
	                                  "type": "text",
	                                  "classList": [
	                                    "xiche-txt"
	                                  ],
	                                  "style": {
	                                    "width": 370,
	                                    "fontSize": 28
	                                  },
	                                  "attr": {
	                                    "value": function () {return this.weather.jianyi}
	                                  }
	                                }
	                              ]
	                            }
	                          ]
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "classList": [
	                        "jifen"
	                      ],
	                      "events": {
	                        "click": "jifenlclick"
	                      },
	                      "children": [
	                        {
	                          "type": "text",
	                          "classList": [
	                            "danshu-txt"
	                          ],
	                          "attr": {
	                            "value": function () {return this.jifen}
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "jfxc-txt"
	                          ],
	                          "attr": {
	                            "value": "我的积分"
	                          }
	                        }
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "zi-sy-car",
	                  "attr": {
	                    "dd": function () {return this.dd},
	                    "carmileage": function () {return this.carMileage},
	                    "fuwuzhong": function () {return this.fuwuzhong}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "zi-sy-yuyue",
	              "attr": {
	                "dd": function () {return this.dd},
	                "carmileage": function () {return this.carMileage},
	                "len": function () {return this.len}
	              }
	            },
	            {
	              "type": "div",
	              "classList": [
	                "wntj-top"
	              ],
	              "children": [
	                {
	                  "type": "container",
	                  "style": {
	                    "flexDirection": "row",
	                    "justifyContent": "space-between"
	                  },
	                  "children": [
	                    {
	                      "type": "div",
	                      "style": {
	                        "flexDirection": "row"
	                      },
	                      "children": [
	                        {
	                          "type": "image",
	                          "attr": {
	                            "src": function () {return (this.dir) + 'images/tuijian.png'}
	                          },
	                          "style": {
	                            "width": 30,
	                            "height": 30,
	                            "marginTop": 5,
	                            "marginRight": 5
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "txt",
	                            "red"
	                          ],
	                          "style": {
	                            "fontSize": 33
	                          },
	                          "attr": {
	                            "value": "为你推荐"
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "style": {
	                        "flexDirection": "row"
	                      },
	                      "events": {
	                        "click": "gengduo"
	                      },
	                      "children": [
	                        {
	                          "type": "text",
	                          "classList": [
	                            "txt"
	                          ],
	                          "style": {
	                            "fontSize": 30
	                          },
	                          "attr": {
	                            "value": "更多"
	                          }
	                        },
	                        {
	                          "type": "image",
	                          "attr": {
	                            "src": function () {return (this.dir) + 'images/right-jiao.fw.png'}
	                          },
	                          "style": {
	                            "width": 40,
	                            "height": 40,
	                            "marginTop": 3,
	                            "marginLeft": 5
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
	          "type": "cell",
	          "append": "tree",
	          "style": {
	            "position": "relative"
	          },
	          "children": [
	            {
	              "type": "sy-neirong2",
	              "attr": {
	                "dd": function () {return this.dd},
	                "sjurl": "shangjiaxiangqing4.js",
	                "xuanze": function () {return this.xuanze},
	                "fanhuiurl": "index.js"
	              },
	              "repeat": function () {return this.serverData}
	            }
	          ]
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "wntj-top": {
	    "paddingTop": 10,
	    "paddingBottom": 10,
	    "paddingRight": 20,
	    "paddingLeft": 20,
	    "backgroundColor": "#ffffff",
	    "marginTop": 10
	  },
	  "txt": {
	    "color": "#737373",
	    "fontSize": 30
	  },
	  "red": {
	    "color": "#E95412"
	  },
	  "yellow": {
	    "color": "#F39801"
	  },
	  "hong": {
	    "color": "#E7141A"
	  },
	  "spane": {
	    "height": 10,
	    "backgroundColor": "#ffffff"
	  },
	  "weather": {
	    "marginBottom": 10,
	    "borderBottomWidth": 2,
	    "borderColor": "#e6e6e6",
	    "backgroundColor": "#ffffff"
	  },
	  "sy-img": {
	    "width": 750,
	    "height": 289,
	    "position": "absolute"
	  },
	  "weather-one": {
	    "flexDirection": "row",
	    "justifyContent": "space-between"
	  },
	  "jifen": {
	    "width": 150,
	    "height": 150,
	    "borderWidth": 2,
	    "borderColor": "#E95412",
	    "borderRadius": 75,
	    "backgroundColor": "#ffffff",
	    "marginRight": 50,
	    "marginTop": 40
	  },
	  "jfxc-txt": {
	    "textAlign": "center",
	    "fontSize": 26,
	    "color": "#cccccc"
	  },
	  "danshu-txt": {
	    "marginTop": 40,
	    "textAlign": "center",
	    "fontSize": 28,
	    "color": "#E95412"
	  },
	  "tishixinxi": {
	    "fontSize": 24,
	    "color": "#737373",
	    "textDecoration": "underline",
	    "position": "absolute",
	    "bottom": 160,
	    "left": 200
	  },
	  "sum": {
	    "width": 117,
	    "height": 117,
	    "marginLeft": 25,
	    "marginTop": 20
	  },
	  "sum-txt": {
	    "fontSize": 32,
	    "color": "#737373"
	  },
	  "xiche-txt": {
	    "fontSize": 27,
	    "color": "#a0a0a0"
	  },
	  "youhui": {
	    "marginLeft": 130
	  },
	  "xxdiv": {
	    "position": "fixed",
	    "top": 10,
	    "right": 20
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/dddfb4cff9142e8f3a94ab211e037725", {
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
	//                vm.$dispatch('navpage');
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
	         var API_URL = "http://192.168.0.160:8080/IkkyuChegj/";    //冯浩
	//    var API_URL = "http://192.168.0.172:8080/IkkyuChegj/";   //小黄
	//        var API_URL = "http://www.yixiucar.com/yxapi/";       //郭总
	    var SERVER_URL = "http://192.168.0.221:63344/2016-2/yonghuban/";
	//        var SERVER_URL = "http://192.168.0.221:63344/2016-2/shangjiaban/";
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
	    exports.unbind = function (callback) {
	        __weex_require__('@weex-module/alipush').unbind(callback);
	    }

	})

/***/ },
/* 15 */
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

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/zi-sy-car", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __webpack_require__(2);
	    var wee = __weex_require__('@weex-module/modal');
	    var api = __webpack_require__(14);
	    var item = [];
	    __weex_module__.exports = {
	        data: function () {return {
	            dir: api.dir,
	            youjia: "",
	            list1: [],
	            list: [],
	            dd: "",
	            inServiceOrderId: "",
	            fuwuzhong: true,
	//            len:0,
	            carflag: false,
	            carMileage: "",
	            ind: 0,
	        }},
	        methods: {
	            adclick: function () {
	                api.get("token", function (e) {
	                    if (e.data == undefined || e.data == " " || e.data == "" || e.data == "undefined") {
	                        api.push("denglu.js");
	                    } else {
	                        if (this.len == 0) {
	                            api.tost("请先添加车辆")
	                            api.push("denglu.js", {});
	                        } else {
	                            api.push("tianjiacheliang.js");
	                        }
	                    }
	                })
	            },
	            fuwuzhongclick: function (e) {
	                api.push("jindugenzong2.js", {orderId: this.inServiceOrderId}, function (e) {
	                    if(e.a==1){
	                        api.refresh();
	                    }
	                });
	            },
	            carinfo: function (e) {
	                var _this = this;
	                api.push("cheliangxiangqing.js", {carid: this.dd, isFirst: 1, fanhuiurl: "index.js"}, function (e) {
	//                    api.call("car/carInfo", {carId: _this.dd}, function (ret) {
	//                        _this.list1[_this.ind].carNextDate = ret.data.car.carNextDate;
	//                    });
	                    api.refresh();
	                });
	            },
	            aa: function (e) {
	                var _this = this;
	                _this.ind = e.index;
	                if (e.index == 0) {
	                    api.call("user/getMyCar", {}, function (ret) {
	                        _this.list = ret.data.myCarInfo[0].advice;
	                    });
	                } else {
	                    for (var i = 0; i < _this.list.length; i++) {
	                        _this.list[i].remaining = "";
	                    }
	                }
	                _this.bb(e.index);
	            },
	            bb: function (i) {
	                var _this = this;
	                _this.$dispatch('notify', {
	                    a: _this.list1[i].id,
	                    len: _this.list1.length,
	                    carMileage: _this.list1[i].carMileage,
	                    inServiceOrderId: _this.list1[i].inServiceOrderId
	                });
	                api.save("carInfo", {
	                    dd: _this.list1[i].id,
	                    carMileage: _this.list1[i].carMileage
	                });
	                _this.dd = _this.list1[i].id;
	                _this.carMileage = _this.list1[i].carMileage;
	                _this.youjia = _this.list1[i].oilPrice;
	//                提醒
	                api.log(_this.list1[i].advice);
	//                _this.list = _this.list1[i].advice;
	                for (var j = 0; j < _this.list.length; j++) {
	                    _this.list[j].remaining = _this.list1[i].advice[j].remaining;
	                }
	                _this.inServiceOrderId = _this.list1[i].inServiceOrderId;
	                if (_this.inServiceOrderId == 0) {
	                    _this.fuwuzhong = true;   //    显示服务中样式
	                } else {
	                    _this.fuwuzhong = false;    //   不显示服务中样式
	                }
	            }
	        },
	        created: function () {
	            var _this = this;
	//            -----------------------用户车辆-----------------------------------
	            api.get("token", function (e) {
	                if (e.data == undefined || e.data == "" || e.data == "undefined") {
	                    _this.carflag = false;
	                } else {
	                    api.call("user/getMyCar", {}, function (ret) {
	                        if (ret.data.myCarInfo == "") {
	                            _this.carflag = false;
	                            return;
	                        }
	                        _this.carflag = true;
	                        api.save("carInfo", {
	                            dd: ret.data.myCarInfo[0].id,
	                            carMileage: ret.data.myCarInfo[0].carMileage,
	                            inServiceOrderId: ret.data.myCarInfo[0].inServiceOrderId
	                        });
	                        _this.list1 = ret.data.myCarInfo;
	                        _this.$dispatch('notify', {
	                            a: ret.data.myCarInfo[0].id,
	                            len: ret.data.myCarInfo.length,
	                            carMileage: ret.data.myCarInfo[0].carMileage
	                        });
	                        _this.dd = ret.data.myCarInfo[0].id;
	                        _this.carMileage = ret.data.myCarInfo[0].carMileage;
	                        _this.youjia = ret.data.myCarInfo[0].oilPrice;
	//                        提醒
	                        api.log(ret.data.myCarInfo[0].advice);
	                        item = ret.data.myCarInfo[0].advice
	                        _this.list = ret.data.myCarInfo[0].advice;
	                        _this.inServiceOrderId = ret.data.myCarInfo[0].inServiceOrderId;
	                        if (_this.inServiceOrderId == 0) {
	//                            显示服务中样式
	                            _this.fuwuzhong = true;
	                        } else {
	//                            不显示服务中样式
	                            _this.fuwuzhong = false;
	                        }
	//                        _this.len = ret.data.myCarInfo.length;
	//                        如果没有车，显示添加车辆的样式
	                        if (ret.data.myCarInfo.length == 0) {
	                            _this.carflag = false;
	                        }
	                    });
	                }
	            });
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "style": {
	    "height": 210,
	    "overflow": "hidden"
	  },
	  "children": [
	    {
	      "type": "slider",
	      "shown": function () {return this.carflag},
	      "classList": [
	        "slider"
	      ],
	      "attr": {
	        "autoPlay": "false",
	        "interval": "1000000000"
	      },
	      "events": {
	        "change": "aa"
	      },
	      "children": [
	        {
	          "type": "div",
	          "events": {
	            "click": "carinfo"
	          },
	          "style": {
	            "position": "relative"
	          },
	          "repeat": function () {return this.list1},
	          "children": [
	            {
	              "type": "wxc-marquee",
	              "id": "marquee",
	              "attr": {
	                "step": "60",
	                "interval": "2000",
	                "duration": "1500",
	                "count": function () {return this.list.length}
	              },
	              "style": {
	                "width": 750,
	                "height": 45,
	                "marginTop": 20,
	                "position": "absolute"
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "repeat": function () {return this.list},
	                  "style": {
	                    "width": 750,
	                    "height": 60,
	                    "overflow": "hidden"
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "wenzi",
	                        "tishixinxi",
	                        "yellow"
	                      ],
	                      "style": {
	                        "height": 33,
	                        "marginTop": -18,
	                        "color": function () {return this.colorCode}
	                      },
	                      "attr": {
	                        "value": function () {return this.remaining}
	                      }
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "shown": function () {return this.fuwuzhong},
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "line"
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "khlogo"
	                  ],
	                  "children": [
	                    {
	                      "type": "div",
	                      "classList": [
	                        "picdiv"
	                      ],
	                      "children": [
	                        {
	                          "type": "image",
	                          "classList": [
	                            "pic"
	                          ],
	                          "attr": {
	                            "src": function () {return this.carIcon}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "cheph"
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
	                    "weather-two"
	                  ],
	                  "children": [
	                    {
	                      "type": "div",
	                      "classList": [
	                        "qingkuang"
	                      ],
	                      "children": [
	                        {
	                          "type": "div",
	                          "classList": [
	                            "wchuli"
	                          ],
	                          "children": [
	                            {
	                              "type": "text",
	                              "classList": [
	                                "wchuli-txt1"
	                              ],
	                              "attr": {
	                                "value": "0"
	                              }
	                            },
	                            {
	                              "type": "text",
	                              "classList": [
	                                "wchuli-txt2"
	                              ],
	                              "attr": {
	                                "value": "未处理违章"
	                              }
	                            }
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "classList": [
	                            "koufen"
	                          ],
	                          "children": [
	                            {
	                              "type": "text",
	                              "classList": [
	                                "koufen-txt1"
	                              ],
	                              "style": {
	                                "lines": 1,
	                                "textOverflow": "clip"
	                              },
	                              "attr": {
	                                "value": function () {return '￥' + (this.youjia)}
	                              }
	                            },
	                            {
	                              "type": "text",
	                              "classList": [
	                                "koufen-txt2"
	                              ],
	                              "attr": {
	                                "value": "今日油价"
	                              }
	                            }
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "classList": [
	                            "fakuan"
	                          ],
	                          "children": [
	                            {
	                              "type": "text",
	                              "classList": [
	                                "fakuan-txt1"
	                              ],
	                              "style": {
	                                "lines": 1,
	                                "textOverflow": "clip"
	                              },
	                              "attr": {
	                                "value": function () {return (this.carNextDate) + '公里'}
	                              }
	                            },
	                            {
	                              "type": "text",
	                              "classList": [
	                                "fakuan-txt2"
	                              ],
	                              "attr": {
	                                "value": "下次保养"
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
	              "type": "div",
	              "shown": function () {return !this.fuwuzhong},
	              "style": {
	                "position": "relative"
	              },
	              "events": {
	                "click": "fuwuzhongclick"
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "line"
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "khlogo"
	                  ],
	                  "children": [
	                    {
	                      "type": "div",
	                      "classList": [
	                        "picdiv1"
	                      ],
	                      "children": [
	                        {
	                          "type": "image",
	                          "classList": [
	                            "pic1"
	                          ],
	                          "attr": {
	                            "src": function () {return this.carIcon}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "cheph"
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
	                    "weather-two2"
	                  ],
	                  "style": {
	                    "top": -10
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "fuwu-txt"
	                      ],
	                      "style": {
	                        "textAlign": "center"
	                      },
	                      "attr": {
	                        "value": "此车正在服务中..."
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "fuwu-txt2"
	                      ],
	                      "style": {
	                        "textAlign": "center"
	                      },
	                      "attr": {
	                        "value": "点击查询详情"
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
	      "type": "div",
	      "shown": function () {return !this.carflag},
	      "style": {
	        "position": "relative"
	      },
	      "events": {
	        "click": "adclick"
	      },
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "line"
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "khlogo"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "picdiv1"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "pic1"
	                  ],
	                  "attr": {
	                    "src": function () {return (this.dir) + 'images/car.png'}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "text",
	              "classList": [
	                "cheph"
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "style": {
	            "width": 550,
	            "flexDirection": "row",
	            "marginLeft": 200,
	            "marginTop": -50
	          },
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "add"
	              ],
	              "attr": {
	                "src": function () {return (this.dir) + 'images/app.png'}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "add-txt"
	              ],
	              "attr": {
	                "value": "请增加车辆信息"
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
	  "slider": {
	    "height": 210
	  },
	  "wchuli": {
	    "height": 150,
	    "flex": 1
	  },
	  "wchuli-txt1": {
	    "fontSize": 30,
	    "marginTop": 30,
	    "textAlign": "center",
	    "color": "#E95412",
	    "borderRightWidth": 2,
	    "borderColor": "#cccccc"
	  },
	  "wchuli-txt2": {
	    "textAlign": "center",
	    "borderRightWidth": 2,
	    "borderColor": "#cccccc",
	    "fontSize": 26,
	    "color": "#868686",
	    "paddingTop": 10
	  },
	  "koufen": {
	    "height": 150,
	    "flex": 1
	  },
	  "koufen-txt1": {
	    "fontSize": 30,
	    "marginTop": 30,
	    "textAlign": "center",
	    "color": "#E95412",
	    "borderRightWidth": 2,
	    "borderColor": "#cccccc"
	  },
	  "koufen-txt2": {
	    "textAlign": "center",
	    "borderRightWidth": 2,
	    "borderColor": "#cccccc",
	    "fontSize": 26,
	    "color": "#868686",
	    "paddingTop": 10
	  },
	  "fakuan": {
	    "flex": 1,
	    "marginRight": 30
	  },
	  "fakuan-txt1": {
	    "fontSize": 30,
	    "marginTop": 30,
	    "textAlign": "center",
	    "color": "#E95412"
	  },
	  "fakuan-txt2": {
	    "textAlign": "center",
	    "fontSize": 26,
	    "color": "#868686",
	    "paddingTop": 10
	  },
	  "line": {
	    "width": 750,
	    "height": 2,
	    "backgroundColor": "#e6e6e6",
	    "position": "absolute",
	    "top": 70
	  },
	  "yellow": {
	    "color": "#F39801"
	  },
	  "tishixinxi": {
	    "fontSize": 26,
	    "color": "#737373",
	    "textDecoration": "underline"
	  },
	  "picdiv": {
	    "width": 146,
	    "height": 146,
	    "backgroundColor": "#ffffff",
	    "borderRadius": 73,
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "borderWidth": 2,
	    "borderColor": "#cccccc"
	  },
	  "pic": {
	    "width": 140,
	    "height": 140,
	    "borderRadius": 75
	  },
	  "weather-two": {
	    "height": 150,
	    "position": "relative",
	    "marginTop": -120
	  },
	  "weather-two2": {
	    "height": 150,
	    "position": "relative",
	    "marginTop": -80
	  },
	  "qingkuang": {
	    "width": 550,
	    "height": 150,
	    "flexDirection": "row",
	    "marginLeft": 200
	  },
	  "khlogo": {
	    "marginLeft": 20
	  },
	  "cheph": {
	    "fontSize": 28,
	    "color": "#000000",
	    "marginTop": 10,
	    "marginLeft": 14
	  },
	  "wenzi": {
	    "position": "absolute",
	    "left": 180,
	    "top": 20
	  },
	  "add": {
	    "width": 50,
	    "height": 50,
	    "marginLeft": 50,
	    "marginRight": 20
	  },
	  "add-txt": {
	    "fontSize": 36,
	    "color": "#373634"
	  },
	  "pic1": {
	    "width": 140,
	    "height": 140,
	    "borderRadius": 70
	  },
	  "picdiv1": {
	    "width": 146,
	    "height": 146,
	    "backgroundColor": "#ffffff",
	    "borderRadius": 73,
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "borderWidth": 2,
	    "borderColor": "#cccccc"
	  },
	  "fuwu-txt": {
	    "fontSize": 34,
	    "color": "#E95412",
	    "marginLeft": 80
	  },
	  "fuwu-txt2": {
	    "fontSize": 28,
	    "color": "#737373",
	    "marginTop": 10,
	    "marginLeft": 120
	  },
	  "pic2": {
	    "width": 150,
	    "height": 150,
	    "padding": 10,
	    "borderWidth": 2,
	    "borderColor": "#cccccc",
	    "borderRadius": 75,
	    "backgroundColor": "#ffffff"
	  },
	  "fuwu-khlogo": {
	    "height": 200,
	    "width": 150,
	    "position": "absolute",
	    "left": 30,
	    "bottom": 25
	  },
	  "fuwu-cheph": {
	    "fontSize": 28,
	    "textAlign": "center",
	    "color": "#000000",
	    "marginTop": 10
	  }
	})
	})

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/zi-sy-yuyue", [], function(__weex_require__, __weex_exports__, __weex_module__){
	__webpack_require__(15);

	;
	    __webpack_require__(2);
	    var api = __webpack_require__(14);
	    __weex_module__.exports = {
	        data: function () {return {
	            dir: api.dir,
	            dd: "",
	            len: 0,
	            carMileage: "",
	            jiaobiao:false,
	        }},
	        methods: {
	            yjyy: function (e) {
	                var _this = this;
	                api.get("token", function (e) {
	                    if (e.data == undefined || e.data == " " || e.data == "undefined") {
	                        api.push("denglu.js");
	                    } else {
	                        if (_this.len == 0) {
	                            api.tost("请先添加车辆")
	                            api.push("tianjiacheliang.js", {});
	                        } else {
	                            api.push("yijianyuyue.js",{dd:_this.dd});
	                        }
	                    }
	                })
	            },
	            zjzx: function (e) {
	                api.get("token",function(e){
	                    if(e.data == "undefined" || e.data==" "){
	                        api.push("denglu.js", {});
	                    }else{
	                        api.push("zhuanjiazixun.js", {});
	                    }
	                });
	            },
	            xiche: function (e) {
	                api.push("xichemeirong.js", {dd: this.dd});
	            },
	            jiayou: function (e) {
	//                api.push("jiayouzhan.js",{});
	                __weex_require__('@weex-module/togas').toGas();
	            },
	            jiuyuan: function (e) {
	                var _this = this;
	//                api.log("dd:"+this.dd);
	                api.get("token", function (e) {
	                    if (e.data == undefined || e.data == " " || e.data == "undefined") {
	                        api.push("denglu.js");
	                    } else {
	                        if (_this.len == 0) {
	                            api.tost("请先添加车辆");
	                            api.push("tianjiacheliang.js", {});
	                        } else {
	//            ----------------------------------------------------------
	                            api.call("user/rescue", {}, function (ret) {
	//                                api.log(ret.data);
	                                if (ret.data.type == 0 || ret.data.type == 1) {
	                                    api.push("shishiweizhi.js", {rescueType:ret.data.type,rescueOrderId:ret.data.orderId});
	                                } else {
	                                    api.push("jiuyuan.js", {dd:_this.dd}, function (e) {
	                                        api.refresh();
	                                    });
	                                }
	                            });
	//            ----------------------------------------------------------
	                        }
	                    }
	                })

	            },
	            shiguchuli: function (e) {
	                api.push("zi-webpage.js", {
	                    title: "事故处理",
	                    url: "https://wjw.szgaj.cn/szgawx/micro/police?source=szgawx",fanhui:"index.js"
	                });
	            },
	        },
	        created: function () {
	            var _this = this;
	            api.get("token", function (e) {
	                if (e.data == undefined || e.data == " " || e.data == "undefined") {

	                } else {
	//            救援角标
	                    api.call("user/rescue", {}, function (ret) {
	                        api.log(ret.data);
	                        if (ret.data.type == 3) {
	                            _this.jiaobiao = false;
	                        }else{
	                            _this.jiaobiao = true;
	                        }
	                    });
	//            救援角标
	                }
	            })

	        },
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
	        "two"
	      ],
	      "children": [
	        {
	          "type": "container",
	          "style": {
	            "flex": 1,
	            "borderRightWidth": 2,
	            "borderColor": "#e6e6e6"
	          },
	          "children": [
	            {
	              "type": "div",
	              "style": {
	                "flexDirection": "row",
	                "justifyContent": "center",
	                "alignItems": "center"
	              },
	              "events": {
	                "click": "yjyy"
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": function () {return (this.dir) + 'images/yuyue.png'}
	                  },
	                  "classList": [
	                    "two-img"
	                  ]
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "two-txt",
	                    "green"
	                  ],
	                  "attr": {
	                    "value": "一键预约"
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "container",
	          "style": {
	            "flex": 1
	          },
	          "children": [
	            {
	              "type": "div",
	              "style": {
	                "flexDirection": "row",
	                "justifyContent": "center",
	                "alignItems": "center"
	              },
	              "events": {
	                "click": "zjzx"
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": function () {return (this.dir) + 'images/zixun.png'}
	                  },
	                  "classList": [
	                    "two-img"
	                  ]
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "two-txt",
	                    "blue"
	                  ],
	                  "attr": {
	                    "value": "专家咨询"
	                  }
	                }
	              ]
	            }
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
	        "five"
	      ],
	      "children": [
	        {
	          "type": "container",
	          "style": {
	            "flex": 1
	          },
	          "events": {
	            "click": "xiche"
	          },
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": function () {return (this.dir) + 'images/xiche.png'}
	              },
	              "classList": [
	                "five-img"
	              ]
	            },
	            {
	              "type": "text",
	              "classList": [
	                "five-txt"
	              ],
	              "attr": {
	                "value": "洗 车"
	              }
	            }
	          ]
	        },
	        {
	          "type": "container",
	          "style": {
	            "flex": 1
	          },
	          "events": {
	            "click": "jiayou"
	          },
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": function () {return (this.dir) + 'images/jiayou.png'}
	              },
	              "classList": [
	                "five-img"
	              ]
	            },
	            {
	              "type": "text",
	              "classList": [
	                "five-txt"
	              ],
	              "attr": {
	                "value": "加 油"
	              }
	            }
	          ]
	        },
	        {
	          "type": "container",
	          "style": {
	            "flex": 1,
	            "position": "relative"
	          },
	          "events": {
	            "click": "jiuyuan"
	          },
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": function () {return (this.dir) + 'images/jiuyuan.png'}
	              },
	              "classList": [
	                "five-img"
	              ]
	            },
	            {
	              "type": "text",
	              "classList": [
	                "five-txt"
	              ],
	              "attr": {
	                "value": "救 援"
	              }
	            },
	            {
	              "type": "div",
	              "classList": [
	                "xxdiv"
	              ],
	              "shown": function () {return this.jiaobiao},
	              "children": [
	                {
	                  "type": "xx",
	                  "attr": {
	                    "title": "!"
	                  },
	                  "classList": [
	                    "top-xiaoxi"
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "container",
	          "style": {
	            "flex": 1
	          },
	          "events": {
	            "click": "shiguchuli"
	          },
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": function () {return (this.dir) + 'images/sgcl.png'}
	              },
	              "classList": [
	                "five-img"
	              ]
	            },
	            {
	              "type": "text",
	              "classList": [
	                "five-txt"
	              ],
	              "attr": {
	                "value": "事故处理"
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
	  "main": {
	    "borderBottomWidth": 1,
	    "borderTopWidth": 1,
	    "borderColor": "#e6e6e6",
	    "backgroundColor": "#ffffff"
	  },
	  "line": {
	    "width": 650,
	    "height": 1,
	    "backgroundColor": "#e6e6e6",
	    "marginLeft": 50
	  },
	  "two": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "paddingTop": 20,
	    "marginBottom": 20
	  },
	  "two-img": {
	    "width": 120,
	    "height": 120
	  },
	  "two-txt": {
	    "fontSize": 30,
	    "color": "#373634",
	    "justifyContent": "center",
	    "marginLeft": 10
	  },
	  "green": {
	    "color": "#14AE67"
	  },
	  "blue": {
	    "color": "#5C95CF"
	  },
	  "five": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "paddingBottom": 20,
	    "borderBottomWidth": 2,
	    "borderColor": "#e6e6e6"
	  },
	  "five-img": {
	    "width": 110,
	    "height": 110,
	    "marginTop": 10,
	    "marginLeft": 40
	  },
	  "five-txt": {
	    "color": "#373634",
	    "textAlign": "center",
	    "fontSize": 28
	  },
	  "xxdiv": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "width": 30,
	    "height": 30,
	    "borderRadius": 15,
	    "backgroundColor": "#FF0000",
	    "position": "absolute",
	    "top": 20,
	    "right": 40
	  }
	})
	})

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/sy-neirong2", [], function(__weex_require__, __weex_exports__, __weex_module__){
	__webpack_require__(19);

	;
	    __webpack_require__(2);
	    var wee = __weex_require__('@weex-module/modal');
	    var api = __webpack_require__(14);
	    __weex_module__.exports = {
	        data: function () {return {
	            dir: api.dir,
	            eventList: [],
	            xuanze: false,
	            factoryId: "",
	            factory: "",
	            wash: {},
	            repair: {},
	            txt1: 0,
	            falg1: true,
	            falg2: true,
	            dingdanhao: "",
	            dd: "",
	            carMileage: "",
	        }},
	        methods: {
	            shangjiaxiangqing: function (e) {
	                var _this = this;
	                if (_this.repair.id == null) {
	                    api.log("洗车" + _this.fanhuiurl);
	                    api.push("shangjiaxiangqing.js", {factoryId: _this.id, fanhuiurl: _this.fanhuiurl});
	                } else {
	                    api.log("dd:" + _this.dd);
	                    api.push("shangjiaxiangqing4.js", {factoryId: _this.id, dd: _this.dd, fanhuiurl: _this.fanhuiurl});
	                }
	            },
	            xuanzeclick: function (e) {
	                var _this = this;
	                api.get("orderinfo", function (e) {
	                    var orderinfo = JSON.parse(e.data);
	                    orderinfo.shangjiaid = _this.id;
	                    api.save("orderinfo", orderinfo);
	                    api.push("xiangmuqueren.js");
	//                    api.save("orderinfo",e.data);
	                });
	            }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "container",
	  "children": [
	    {
	      "type": "div",
	      "shown": function () {return this.falg1},
	      "children": [
	        {
	          "type": "div",
	          "shown": function () {return this.wash.id==null},
	          "classList": [
	            "cont"
	          ],
	          "events": {
	            "click": "shangjiaxiangqing"
	          },
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "cont-left"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": function () {return this.facIcon}
	                  },
	                  "classList": [
	                    "cont-left-img"
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "cont-right"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "cont-right-one"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "bcj"
	                      ],
	                      "attr": {
	                        "value": function () {return this.factoryName}
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "yuyue-txt"
	                      ],
	                      "attr": {
	                        "value": function () {return this.repair.repairType}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "cont-right-two"
	                  ],
	                  "style": {
	                    "marginTop": -5
	                  },
	                  "children": [
	                    {
	                      "type": "xingxing",
	                      "attr": {
	                        "star": function () {return this.starCount}
	                      },
	                      "style": {
	                        "width": 200,
	                        "marginLeft": -10,
	                        "marginTop": 10
	                      }
	                    },
	                    {
	                      "type": "div",
	                      "classList": [
	                        "yuyue"
	                      ],
	                      "children": [
	                        {
	                          "type": "text",
	                          "classList": [
	                            "yuyue-txt2"
	                          ],
	                          "attr": {
	                            "value": function () {return '已预约:' + (this.saleCount) + ' | 车均消费:￥' + (this.repair.average)}
	                          }
	                        }
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "cont-right-three"
	                  ],
	                  "children": [
	                    {
	                      "type": "div",
	                      "classList": [
	                        "cont-right-three1"
	                      ],
	                      "children": [
	                        {
	                          "type": "div",
	                          "classList": [
	                            "tb"
	                          ],
	                          "children": [
	                            {
	                              "type": "image",
	                              "shown": function () {return this.repair.control},
	                              "attr": {
	                                "src": function () {return (this.dir) + 'images/danxuan2.png'}
	                              },
	                              "classList": [
	                                "sel"
	                              ]
	                            },
	                            {
	                              "type": "image",
	                              "shown": function () {return !this.repair.control},
	                              "attr": {
	                                "src": function () {return (this.dir) + 'images/danxuan3.png'}
	                              },
	                              "classList": [
	                                "sel"
	                              ]
	                            }
	                          ]
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "yuyue-txt"
	                          ],
	                          "attr": {
	                            "value": "修车全程监控"
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "classList": [
	                        "cont-right-three2"
	                      ],
	                      "children": [
	                        {
	                          "type": "div",
	                          "classList": [
	                            "tb"
	                          ],
	                          "children": [
	                            {
	                              "type": "image",
	                              "shown": function () {return this.repair.isDrive},
	                              "attr": {
	                                "src": function () {return (this.dir) + 'images/danxuan2.png'}
	                              },
	                              "classList": [
	                                "sel"
	                              ]
	                            },
	                            {
	                              "type": "image",
	                              "shown": function () {return !this.repair.isDrive},
	                              "attr": {
	                                "src": function () {return (this.dir) + 'images/danxuan3.png'}
	                              },
	                              "classList": [
	                                "sel"
	                              ]
	                            }
	                          ]
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "yuyue-txt"
	                          ],
	                          "attr": {
	                            "value": "免费上门取送车"
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "classList": [
	                        "cont-right-three3"
	                      ],
	                      "children": [
	                        {
	                          "type": "div",
	                          "classList": [
	                            "tb"
	                          ],
	                          "children": [
	                            {
	                              "type": "image",
	                              "attr": {
	                                "src": function () {return (this.dir) + 'images/dw.png'}
	                              },
	                              "classList": [
	                                "sel"
	                              ],
	                              "style": {
	                                "marginLeft": -5,
	                                "marginRight": -5
	                              }
	                            }
	                          ]
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "yuyue-txt"
	                          ],
	                          "attr": {
	                            "value": function () {return (this.distance) + 'Km'}
	                          }
	                        }
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "style": {
	                    "flexDirection": "row",
	                    "flexWrap": "wrap",
	                    "marginLeft": -10
	                  },
	                  "children": [
	                    {
	                      "type": "div",
	                      "style": {
	                        "flexDirection": "row",
	                        "marginTop": -5
	                      },
	                      "repeat": function () {return this.eventList},
	                      "children": [
	                        {
	                          "type": "div",
	                          "shown": function () {return this.sign},
	                          "style": {
	                            "marginBottom": 10,
	                            "marginLeft": 10,
	                            "flexDirection": "row"
	                          },
	                          "children": [
	                            {
	                              "type": "image",
	                              "classList": [
	                                "zhe"
	                              ],
	                              "attr": {
	                                "resize": "stretch",
	                                "src": function () {return (this.dir) + 'images/zhe.png'}
	                              }
	                            }
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "shown": function () {return !this.sign},
	                          "style": {
	                            "marginBottom": 10,
	                            "marginLeft": 10,
	                            "flexDirection": "row",
	                            "marginTop": 5
	                          },
	                          "children": [
	                            {
	                              "type": "image",
	                              "classList": [
	                                "zhe2"
	                              ],
	                              "attr": {
	                                "resize": "stretch",
	                                "src": function () {return (this.dir) + 'images/zhe2-left.png'}
	                              }
	                            },
	                            {
	                              "type": "div",
	                              "classList": [
	                                "zhe2box"
	                              ],
	                              "children": [
	                                {
	                                  "type": "text",
	                                  "classList": [
	                                    "zhe2-txt"
	                                  ],
	                                  "attr": {
	                                    "value": function () {return this.content}
	                                  }
	                                }
	                              ]
	                            },
	                            {
	                              "type": "image",
	                              "classList": [
	                                "zhe2"
	                              ],
	                              "attr": {
	                                "resize": "stretch",
	                                "src": function () {return (this.dir) + 'images/zhe2-right.png'}
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
	              "type": "text",
	              "classList": [
	                "xuanze"
	              ],
	              "shown": function () {return this.xuanze},
	              "events": {
	                "click": "xuanzeclick"
	              },
	              "attr": {
	                "value": "选 择"
	              }
	            },
	            {
	              "type": "div",
	              "classList": [
	                "dianpu"
	              ],
	              "shown": function () {return this.isYuyue},
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "dianpu-txt"
	                  ],
	                  "attr": {
	                    "value": "上次预约店"
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "shown": function () {return this.falg2},
	      "children": [
	        {
	          "type": "div",
	          "shown": function () {return this.repair.id==null},
	          "classList": [
	            "cont"
	          ],
	          "events": {
	            "click": "shangjiaxiangqing"
	          },
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "cont-left"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": function () {return this.facIcon}
	                  },
	                  "classList": [
	                    "cont-left-img"
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "cont-right"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "cont-right-one"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "bcj"
	                      ],
	                      "attr": {
	                        "value": function () {return this.factoryName}
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
	                            "title-txt",
	                            "unline"
	                          ],
	                          "attr": {
	                            "value": function () {return '￥' + (this.wash.price)}
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "title-txt",
	                            "red"
	                          ],
	                          "attr": {
	                            "value": function () {return '￥' + (this.wash.memberPrice)}
	                          }
	                        }
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "cont-right-two"
	                  ],
	                  "style": {
	                    "marginTop": -5
	                  },
	                  "children": [
	                    {
	                      "type": "xingxing",
	                      "attr": {
	                        "star": function () {return this.starCount}
	                      },
	                      "style": {
	                        "marginLeft": -10,
	                        "marginTop": 10
	                      }
	                    },
	                    {
	                      "type": "div",
	                      "classList": [
	                        "yuyue"
	                      ],
	                      "children": [
	                        {
	                          "type": "text",
	                          "classList": [
	                            "title-txt",
	                            "xltxt"
	                          ],
	                          "attr": {
	                            "value": function () {return '销量：' + (this.saleCount) + '次'}
	                          }
	                        }
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "cont-right-three"
	                  ],
	                  "style": {
	                    "marginTop": 10
	                  },
	                  "children": [
	                    {
	                      "type": "div",
	                      "classList": [
	                        "cont-right-three1"
	                      ],
	                      "children": [
	                        {
	                          "type": "div",
	                          "classList": [
	                            "tb"
	                          ],
	                          "children": [
	                            {
	                              "type": "image",
	                              "shown": function () {return this.wash.isCost},
	                              "attr": {
	                                "src": function () {return (this.dir) + 'images/danxuan2.png'}
	                              },
	                              "classList": [
	                                "sel"
	                              ]
	                            },
	                            {
	                              "type": "image",
	                              "shown": function () {return !this.wash.isCost},
	                              "attr": {
	                                "src": function () {return (this.dir) + 'images/danxuan3.png'}
	                              },
	                              "classList": [
	                                "sel"
	                              ]
	                            }
	                          ]
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "title-txt"
	                          ],
	                          "attr": {
	                            "value": "支持积分消费"
	                          }
	                        }
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "style": {
	                    "flexDirection": "row",
	                    "justifyContent": "space-between"
	                  },
	                  "children": [
	                    {
	                      "type": "div",
	                      "classList": [
	                        "cont-right-three3"
	                      ],
	                      "children": [
	                        {
	                          "type": "text",
	                          "classList": [
	                            "title-txt"
	                          ],
	                          "attr": {
	                            "value": function () {return '地址：' + (this.location)}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "classList": [
	                        "cont-right-three3"
	                      ],
	                      "children": [
	                        {
	                          "type": "div",
	                          "classList": [
	                            "tb"
	                          ],
	                          "children": [
	                            {
	                              "type": "image",
	                              "attr": {
	                                "src": function () {return (this.dir) + 'images/dw.png'}
	                              },
	                              "classList": [
	                                "sel"
	                              ]
	                            }
	                          ]
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "title-txt"
	                          ],
	                          "attr": {
	                            "value": function () {return (this.distance) + 'Km'}
	                          }
	                        }
	                      ]
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "dianpu"
	              ],
	              "shown": function () {return this.isYuyue},
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "dianpu-txt"
	                  ],
	                  "attr": {
	                    "value": "上次预约店"
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
	  "dianpu": {
	    "width": 170,
	    "backgroundColor": "rgba(255,255,255,0.4)",
	    "position": "absolute",
	    "top": 165,
	    "left": 30
	  },
	  "red": {
	    "color": "#E95412"
	  },
	  "dianpu-txt": {
	    "color": "#E95412",
	    "fontSize": 26,
	    "textAlign": "center"
	  },
	  "cont": {
	    "flexDirection": "row",
	    "marginBottom": 10,
	    "padding": 30,
	    "paddingBottom": 10,
	    "backgroundColor": "#ffffff"
	  },
	  "cont-left": {
	    "marginRight": 10
	  },
	  "xltxt": {
	    "marginLeft": 30
	  },
	  "cont-right": {
	    "position": "relative",
	    "marginTop": -5,
	    "width": 510
	  },
	  "cont-left-img": {
	    "width": 170,
	    "height": 163,
	    "flexDirection": "row"
	  },
	  "cont-right-one": {
	    "flexDirection": "row",
	    "justifyContent": "space-between"
	  },
	  "bcj": {
	    "fontSize": 33,
	    "color": "#373634"
	  },
	  "cont-right-two": {
	    "height": 45,
	    "flexDirection": "row"
	  },
	  "yuyue": {
	    "marginLeft": 0,
	    "marginTop": 12
	  },
	  "yuyue-txt": {
	    "fontSize": 24,
	    "color": "#a0a0a0",
	    "marginTop": 0,
	    "marginLeft": -5
	  },
	  "yuyue-txt2": {
	    "fontSize": 24,
	    "color": "#a0a0a0"
	  },
	  "cont-right-three": {
	    "flexDirection": "row",
	    "flexWrap": "nowrap",
	    "marginTop": 5,
	    "marginBottom": 5
	  },
	  "tb": {
	    "marginLeft": -5
	  },
	  "cont-right-three1": {
	    "flexDirection": "row",
	    "marginRight": 0
	  },
	  "cont-right-three2": {
	    "flexDirection": "row",
	    "marginLeft": 5
	  },
	  "cont-right-three3": {
	    "flexDirection": "row",
	    "marginLeft": 5
	  },
	  "sel": {
	    "width": 37,
	    "height": 37
	  },
	  "zhe": {
	    "width": 72,
	    "height": 35,
	    "marginTop": 5
	  },
	  "zhe2": {
	    "width": 25,
	    "height": 35
	  },
	  "zhe2box": {
	    "height": 35,
	    "backgroundColor": "#E95412"
	  },
	  "zhe2-txt": {
	    "height": 35,
	    "fontSize": 28,
	    "color": "#ffffff",
	    "textAlign": "center",
	    "marginTop": -1
	  },
	  "xuanze": {
	    "paddingBottom": 2,
	    "paddingTop": 2,
	    "paddingRight": 20,
	    "paddingLeft": 20,
	    "fontSize": 28,
	    "color": "#ffffff",
	    "backgroundColor": "#E95412",
	    "position": "absolute",
	    "bottom": 10,
	    "right": 20
	  },
	  "title-txt": {
	    "fontSize": 28,
	    "color": "#737373"
	  },
	  "unline": {
	    "textDecoration": "line-through",
	    "marginRight": 5
	  }
	})
	})

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/xingxing", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    var api = __webpack_require__(14);
	    __webpack_require__(2);
	    var wee = __weex_require__('@weex-module/modal');
	    __weex_module__.exports = {
	        data: function () {return {
	            dir:api.dir,
	            xx1: false,
	            xx2: false,
	            xx3: false,
	            xx4: false,
	            xx5: false,
	            xx11:false,
	            xx22:false,
	            xx33:false,
	            xx44:false,
	            xx55:false,
	            star: "",
	        }},
	        created: function () {
	            if(this.star>5){
	                this.xx1 = true;
	                this.xx2 = true;
	                this.xx3 = true;
	                this.xx4 = true;
	                this.xx5 = true;
	            } else if ( this.star>4.5 && this.star <= 5) {
	                this.xx1 = true;
	                this.xx2 = true;
	                this.xx3 = true;
	                this.xx4 = true;
	                this.xx5 = true;
	            }else if(this.star>4 && this.star <=4.5){
	                this.xx1 = true;
	                this.xx2 = true;
	                this.xx3 = true;
	                this.xx4 = true;
	                this.xx55 = true;
	            }else if(this.star>3.5 && this.star <=4){
	                this.xx1 = true;
	                this.xx2 = true;
	                this.xx3 = true;
	                this.xx4 = true;
	            }else if(this.star>3 && this.star <=3.5){
	                this.xx1 = true;
	                this.xx2 = true;
	                this.xx3 = true;
	                this.xx44 = true;
	            }else if(this.star>2.5 && this.star <=3){
	                this.xx1 = true;
	                this.xx2 = true;
	                this.xx3 = true;
	            }else if(this.star>2 && this.star <=2.5){
	                this.xx1 = true;
	                this.xx2 = true;
	                this.xx33 = true;
	            }else if(this.star>1.5 && this.star <=2){
	                this.xx1 = true;
	                this.xx2 = true;
	            }else if(this.star>1 && this.star <=1.5){
	                this.xx1 = true;
	                this.xx22 = true;
	            }else if(this.star>0.5 && this.star <=1){
	                this.xx1 = true;
	            }else if(this.star>0 && this.star <=0.5){
	                this.xx11 = true;
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
	      "type": "image",
	      "classList": [
	        "xxpic",
	        "xx1"
	      ],
	      "attr": {
	        "src": function () {return (this.dir) + 'images/xx1.png'}
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "xxpic",
	        "xx2"
	      ],
	      "attr": {
	        "src": function () {return (this.dir) + 'images/xx1.png'}
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "xxpic",
	        "xx3"
	      ],
	      "attr": {
	        "src": function () {return (this.dir) + 'images/xx1.png'}
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "xxpic",
	        "xx4"
	      ],
	      "attr": {
	        "src": function () {return (this.dir) + 'images/xx1.png'}
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "xxpic",
	        "xx5"
	      ],
	      "attr": {
	        "src": function () {return (this.dir) + 'images/xx1.png'}
	      }
	    },
	    {
	      "type": "image",
	      "shown": function () {return this.xx1},
	      "classList": [
	        "xxpic",
	        "xx1"
	      ],
	      "attr": {
	        "src": function () {return (this.dir) + 'images/xx2.png'}
	      }
	    },
	    {
	      "type": "image",
	      "shown": function () {return this.xx11},
	      "classList": [
	        "xxpic",
	        "xxpic3",
	        "xx1"
	      ],
	      "attr": {
	        "src": function () {return (this.dir) + 'images/xx3.png'}
	      }
	    },
	    {
	      "type": "image",
	      "shown": function () {return this.xx2},
	      "classList": [
	        "xxpic",
	        "xx2"
	      ],
	      "attr": {
	        "src": function () {return (this.dir) + 'images/xx2.png'}
	      }
	    },
	    {
	      "type": "image",
	      "shown": function () {return this.xx22},
	      "classList": [
	        "xxpic",
	        "xxpic3",
	        "xx2"
	      ],
	      "attr": {
	        "src": function () {return (this.dir) + 'images/xx3.png'}
	      }
	    },
	    {
	      "type": "image",
	      "shown": function () {return this.xx3},
	      "classList": [
	        "xxpic",
	        "xx3"
	      ],
	      "attr": {
	        "src": function () {return (this.dir) + 'images/xx2.png'}
	      }
	    },
	    {
	      "type": "image",
	      "shown": function () {return this.xx33},
	      "classList": [
	        "xxpic",
	        "xxpic3",
	        "xx3"
	      ],
	      "attr": {
	        "src": function () {return (this.dir) + 'images/xx3.png'}
	      }
	    },
	    {
	      "type": "image",
	      "shown": function () {return this.xx4},
	      "classList": [
	        "xxpic",
	        "xx4"
	      ],
	      "attr": {
	        "src": function () {return (this.dir) + 'images/xx2.png'}
	      }
	    },
	    {
	      "type": "image",
	      "shown": function () {return this.xx44},
	      "classList": [
	        "xxpic",
	        "xxpic3",
	        "xx4"
	      ],
	      "attr": {
	        "src": function () {return (this.dir) + 'images/xx3.png'}
	      }
	    },
	    {
	      "type": "image",
	      "shown": function () {return this.xx5},
	      "classList": [
	        "xxpic",
	        "xx5"
	      ],
	      "attr": {
	        "src": function () {return (this.dir) + 'images/xx2.png'}
	      }
	    },
	    {
	      "type": "image",
	      "shown": function () {return this.xx55},
	      "classList": [
	        "xxpic",
	        "xxpic3",
	        "xx5"
	      ],
	      "attr": {
	        "src": function () {return (this.dir) + 'images/xx3.png'}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "xxdiv": {
	    "position": "relative",
	    "width": 200,
	    "height": 40,
	    "marginTop": 5
	  },
	  "xxpic": {
	    "width": 33,
	    "height": 33,
	    "position": "absolute",
	    "overflow": "hidden"
	  },
	  "xxpic3": {
	    "width": 19
	  },
	  "xx1": {
	    "left": 10
	  },
	  "xx2": {
	    "left": 43
	  },
	  "xx3": {
	    "left": 76
	  },
	  "xx4": {
	    "left": 109
	  },
	  "xx5": {
	    "left": 143
	  }
	})
	})

/***/ }
/******/ ]);