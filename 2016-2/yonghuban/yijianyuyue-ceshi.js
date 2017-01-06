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

	;__weex_define__("@weex-component/860d1c8a1a730f5dd0d01c946f4075b6", [], function(__weex_require__, __weex_exports__, __weex_module__){
	__webpack_require__(1);
	__webpack_require__(15);

	;
	    __webpack_require__(2);
	    var wee = __weex_require__('@weex-module/modal');
	    var api = __webpack_require__(14);
	    __weex_module__.exports = {
	        data: function () {return {
	            dir: api.dir,
	            redone: "",
	            redtwo: "red",
	            redthree: "",
	            licheng: "",
	            yuyueTime: "",
	            jintian: "",
	            mingtian: "",
	            houtian: "",
	            shijian: [],
	            appearMin: 1,
	            appearMax: 1,
	            scrollvalue: "11",
	            appearIds: [],
	            cheid: "",
	            chesj: "",
	            car: [],
	            selectIndex: "",
	            selctd: function (e) {
	                return e == selectIndex ? "red" : "";
	            },
	            carMileage:"",
	            dd:"",
	            shangjiaid:"",
	            tu: "",
	            cp: "",
	            cx: "",
	            rq: "",
	            isfuwu:"",
	        }},
	        methods: {
	            oninput1: function (event) {
	                this.licheng = event.value;
	            },
	            xiayibu: function (e) {
	                var _this = this;
	//                测试
	                if (this.licheng == "") {
	                    api.tost("请输入公里数")
	                } else if (this.chesj == "") {
	                    api.tost("请选择日期")
	                } else if (this.yuyueTime == "") {
	                    api.tost("请选择时间")
	                } else {
	//                    var orderinfo = orderinfo || {};
	                    api.get("orderinfo", function (e) {
	                        var orderinfo = JSON.parse(e.data);
	                        orderinfo.carId = _this.cheid;
	                        orderinfo.mileage = _this.licheng;
	                        orderinfo.inittime = _this.chesj + " " + _this.yuyueTime;
	                        api.save("orderinfo", orderinfo);
	//                        api.log(orderinfo);
	                        api.push("yuyuequeren.js");
	                    })
	                }
	            },
	            change1: function (e) {
	                this.cheid = this.car[e.index].id;
	//                api.log(this.cheid);
	                this.licheng = this.car[e.index].carMileage;
	            },
	            lichengclick: function (e) {
	                var self = this;
	                wee.prompt({
	                    message: '请输入当前行驶里程',
	                    'okTitle': '确认',
	                    'cancelTitle': '取消'
	                }, function (result) {
	                    if (result.result == '确认') {
	                        if (!isNaN(result.data)) {
	                            self.licheng = result.data;
	                        } else {
	                            api.tost("请输入正确的公里数")
	                        }
	                    }
	                })
	            },
	            gaibiantime: function (e) {
	                var self = this;
	                __weex_require__('@weex-module/shijianxuanzeqi').getVCNum("", function (resp) {
	                    time = resp.date;
	                    self.yuyueTime = resp.h + ":" + resp.m;
	                });
	            },
	            scrolled: function (e) {
	                var c = e.data.width / 3;
	                if (e.data.offsetX % c != 0) {
	                    var d = Math.round(e.data.offsetX / c);
	                    var target = this.$el("alist").pureChildren[d + 1];
	                    var dom = __weex_require__('@weex-module/dom');
	                    dom.scrollToElement(target, {
	                        offset: -250
	                    });
	                    this.scrollvalue = e.data.offsetX + "," + d;
	                    setSelectCode(d + 1);
	                } else {
	                    this.scrollvalue = "";
	                }
	            },
	            itemClick: function (e) {
	                this.chesj = e.target.children[0].attr.value;
	                this.setSelectCode(e.target.attr.index);
	                this.appearMax = e.target;
	                var dom = __weex_require__('@weex-module/dom');
	                dom.scrollToElement(e.target, {
	                    offset: -250
	                });
	            },
	            setSelectCode: function (index) {
	                for (var i = 0; i < this.shijian.length; i++) {
	                    if (i == index) {
	                        this.shijian[i].color = "red";
	                    } else {
	                        this.shijian[i].color = "";
	                    }
	                }
	            }
	        },
	        ready: function () {
	            var weekDay = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
	            var ntime = new Date();
	            var ds = new Array(7);
	            for (var i = 0; i < ds.length; i++) {
	                var m = ntime.getMonth() + 1;
	                var d = ntime.getDate();
	                var week = ntime.getDay();
	                if (i == 0) {
	                    week = "今天";
	                } else if (i == 1) {
	                    week = "明天";
	                } else if (i == 2) {
	                    week = "后天";
	                } else {
	                    week = weekDay[week];
	                }
	                ds[i] = {day: m + "-" + d, week: week, color: ""};
	                ntime.setDate(ntime.getDate() + 1);

	            }
	            this.shijian = ds;
	            this.shijian[0].color = "red";
	            this.chesj = this.shijian[0].day;
	//            api.log(this.shijian);
	            var _this = this;
	            for (var i = 0; i < 4; i++) {
	                _this.car[i].carGotTime = (_this.car[i].carGotTime).slice(0, 10);
	            }
	        },
	        created: function () {
	            var _this = this;
	//            _this.shangjiaid = api.getData(_this).shangjiaid;
	            _this.dd = api.getData(_this).dd;
	            api.log("车id:"+_this.dd);
	            api.call("user/getMyCar", {}, function (ret) {
	                _this.car = ret.data.myCarInfo;
	                for(var i = 0;i<ret.data.myCarInfo.length;i++){
	                    ret.data.myCarInfo[i].carGotTime =ret.data.myCarInfo[i].carGotTime.slice(0,10);
	                }
	                _this.cheid = ret.data.myCarInfo[0].id;
	                _this.licheng = ret.data.myCarInfo[0].carMileage;
	            });
	            _this.yuyueTime = new Date().toLocaleTimeString().slice(0,5);
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "xx-navpage",
	  "attr": {
	    "navtitle": "一键预约",
	    "navrighttitle": "",
	    "navrighturl": "",
	    "navrightsrc": "",
	    "navlefturl": "index.js",
	    "navleftsrc": function () {return (this.dir) + 'images/fanhui.png'},
	    "bg": ""
	  },
	  "children": [
	    {
	      "type": "scroller",
	      "style": {
	        "flex": 1
	      },
	      "children": [
	        {
	          "type": "div",
	          "style": {
	            "position": "relative"
	          },
	          "children": [
	            {
	              "type": "slider",
	              "classList": [
	                "slider"
	              ],
	              "attr": {
	                "interval": "100000000",
	                "autoPlay": "false"
	              },
	              "events": {
	                "change": "change1"
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "row",
	                    "car"
	                  ],
	                  "repeat": function () {return this.car},
	                  "children": [
	                    {
	                      "type": "image",
	                      "classList": [
	                        "img"
	                      ],
	                      "attr": {
	                        "src": function () {return this.carIcon}
	                      }
	                    },
	                    {
	                      "type": "div",
	                      "style": {
	                        "marginLeft": 20
	                      },
	                      "children": [
	                        {
	                          "type": "text",
	                          "classList": [
	                            "chepai-txt"
	                          ],
	                          "attr": {
	                            "value": function () {return this.carLicence}
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "txt"
	                          ],
	                          "style": {
	                            "width": 2000
	                          },
	                          "attr": {
	                            "value": function () {return this.carFullTypeName}
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "txt"
	                          ],
	                          "attr": {
	                            "value": function () {return this.carGotTime}
	                          }
	                        }
	                      ]
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "image",
	              "classList": [
	                "jiantou",
	                "jiao",
	                "left"
	              ],
	              "attr": {
	                "src": function () {return (this.dir) + 'images/left-jiao.fw.png'}
	              }
	            },
	            {
	              "type": "image",
	              "classList": [
	                "jiantou",
	                "jiao",
	                "right"
	              ],
	              "attr": {
	                "src": function () {return (this.dir) + 'images/right-jiao.fw.png'}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "title"
	          ],
	          "events": {
	            "click": "lichengclick"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "lichengtxt"
	              ],
	              "attr": {
	                "value": "行程里程"
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
	                    "gonglitxt"
	                  ],
	                  "attr": {
	                    "value": function () {return (this.licheng) + '公里'}
	                  }
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
	        },
	        {
	          "type": "div",
	          "classList": [
	            "spean"
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "row"
	          ],
	          "style": {
	            "height": 90
	          },
	          "children": [
	            {
	              "type": "hlist",
	              "id": "alist",
	              "events": {
	                "scrolled": "scrolled"
	              },
	              "children": [
	                {
	                  "type": "cell",
	                  "append": "tree",
	                  "classList": [
	                    "rowtime"
	                  ],
	                  "repeat": function () {return this.shijian},
	                  "children": [
	                    {
	                      "type": "div",
	                      "style": {
	                        "width": 250
	                      },
	                      "events": {
	                        "click": "itemClick"
	                      },
	                      "attr": {
	                        "index": function () {return this.$index}
	                      },
	                      "children": [
	                        {
	                          "type": "text",
	                          "classList": function () {return ['txt', 'cen', this.color]},
	                          "attr": {
	                            "value": function () {return this.day}
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": function () {return ['txt', 'cen', this.color]},
	                          "attr": {
	                            "value": function () {return this.week}
	                          }
	                        }
	                      ]
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "image",
	              "classList": [
	                "jiantou",
	                "jiao1",
	                "left"
	              ],
	              "attr": {
	                "src": function () {return (this.dir) + 'images/left-jiao.fw.png'}
	              }
	            },
	            {
	              "type": "image",
	              "classList": [
	                "jiantou",
	                "jiao1",
	                "right"
	              ],
	              "attr": {
	                "src": function () {return (this.dir) + 'images/right-jiao.fw.png'}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "title"
	          ],
	          "events": {
	            "click": "gaibiantime"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "lichengtxt"
	              ],
	              "attr": {
	                "value": "预约时间"
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
	                    "gonglitxt"
	                  ],
	                  "attr": {
	                    "value": function () {return this.yuyueTime}
	                  }
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
	            "cent"
	          ],
	          "attr": {
	            "value": "100万车主在使用一修车管家"
	          }
	        },
	        {
	          "type": "div",
	          "classList": [
	            "row"
	          ],
	          "style": {
	            "justifyContent": "space-between",
	            "marginLeft": 20,
	            "marginRight": 20
	          },
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "fengeline"
	              ],
	              "attr": {
	                "resize": "contain",
	                "src": function () {return (this.dir) + 'images/lineleft.png'}
	              }
	            },
	            {
	              "type": "image",
	              "classList": [
	                "fengeline"
	              ],
	              "attr": {
	                "resize": "contain",
	                "src": function () {return (this.dir) + 'images/lineright.png'}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "style": {
	            "height": 20
	          }
	        },
	        {
	          "type": "div",
	          "classList": [
	            "row",
	            "box"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "style": {
	                "flex": 1
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "style": {
	                    "flexDirection": "row",
	                    "justifyContent": "center"
	                  },
	                  "children": [
	                    {
	                      "type": "image",
	                      "classList": [
	                        "yuyuepic"
	                      ],
	                      "attr": {
	                        "src": function () {return (this.dir) + 'images/1.png'}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "txt",
	                    "cent",
	                    "hei"
	                  ],
	                  "attr": {
	                    "value": "质量保修无忧"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "style": {
	                "flex": 1
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "style": {
	                    "flexDirection": "row",
	                    "justifyContent": "center"
	                  },
	                  "children": [
	                    {
	                      "type": "image",
	                      "classList": [
	                        "yuyuepic"
	                      ],
	                      "attr": {
	                        "src": function () {return (this.dir) + 'images/2.png'}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "txt",
	                    "cent",
	                    "hei"
	                  ],
	                  "attr": {
	                    "value": "质量保修无忧"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "style": {
	                "flex": 1
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "style": {
	                    "flexDirection": "row",
	                    "justifyContent": "center"
	                  },
	                  "children": [
	                    {
	                      "type": "image",
	                      "classList": [
	                        "yuyuepic"
	                      ],
	                      "attr": {
	                        "src": function () {return (this.dir) + 'images/3.png'}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "txt",
	                    "cent",
	                    "hei"
	                  ],
	                  "attr": {
	                    "value": "质量保修无忧"
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "style": {
	            "height": 10
	          }
	        },
	        {
	          "type": "div",
	          "classList": [
	            "row",
	            "box"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "style": {
	                "flex": 1
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "style": {
	                    "flexDirection": "row",
	                    "justifyContent": "center"
	                  },
	                  "children": [
	                    {
	                      "type": "image",
	                      "classList": [
	                        "yuyuepic"
	                      ],
	                      "attr": {
	                        "src": function () {return (this.dir) + 'images/4.png'}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "txt",
	                    "cent",
	                    "hei"
	                  ],
	                  "attr": {
	                    "value": "质量保修无忧"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "style": {
	                "flex": 1
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "style": {
	                    "flexDirection": "row",
	                    "justifyContent": "center"
	                  },
	                  "children": [
	                    {
	                      "type": "image",
	                      "classList": [
	                        "yuyuepic"
	                      ],
	                      "attr": {
	                        "src": function () {return (this.dir) + 'images/5.png'}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "txt",
	                    "cent",
	                    "hei"
	                  ],
	                  "attr": {
	                    "value": "质量保修无忧"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "style": {
	                "flex": 1
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "style": {
	                    "flexDirection": "row",
	                    "justifyContent": "center"
	                  },
	                  "children": [
	                    {
	                      "type": "image",
	                      "classList": [
	                        "yuyuepic"
	                      ],
	                      "attr": {
	                        "src": function () {return (this.dir) + 'images/6.png'}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "txt",
	                    "cent",
	                    "hei"
	                  ],
	                  "attr": {
	                    "value": "质量保修无忧"
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "style": {
	            "height": 30
	          }
	        },
	        {
	          "type": "btn",
	          "attr": {
	            "title": "下一步"
	          },
	          "events": {
	            "click": "xiayibu"
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "red": {
	    "color": "#E95412"
	  },
	  "row": {
	    "flexDirection": "row"
	  },
	  "slider": {
	    "flexDirection": "row",
	    "height": 180
	  },
	  "slider2": {
	    "flexDirection": "row",
	    "width": 750,
	    "height": 90
	  },
	  "rowtime": {
	    "width": 250,
	    "height": 90,
	    "flexDirection": "row"
	  },
	  "car": {
	    "width": 750,
	    "paddingTop": 30,
	    "height": 210
	  },
	  "spean": {
	    "height": 20,
	    "background": "#F5F3F8"
	  },
	  "lichengtxt": {
	    "fontSize": 34,
	    "color": "#373634"
	  },
	  "gonglitxt": {
	    "fontSize": 28,
	    "color": "#737373"
	  },
	  "inp": {
	    "width": 200,
	    "height": 50,
	    "borderWidth": 0,
	    "textAlign": "right",
	    "marginTop": -5
	  },
	  "line": {
	    "height": 50,
	    "width": 2,
	    "backgroundColor": "#e6e6e6",
	    "marginTop": 15
	  },
	  "cen": {
	    "textAlign": "center"
	  },
	  "txt": {
	    "fontSize": 28,
	    "color": "#737373"
	  },
	  "img": {
	    "width": 120,
	    "height": 120,
	    "marginLeft": 50,
	    "marginRight": 20
	  },
	  "chepai-txt": {
	    "fontSize": 34,
	    "color": "#373634"
	  },
	  "jiantou": {
	    "width": 37,
	    "height": 37
	  },
	  "jiaobiao": {
	    "marginTop": 5
	  },
	  "jiao": {
	    "position": "absolute",
	    "top": 90
	  },
	  "jiao1": {
	    "position": "absolute",
	    "top": 20
	  },
	  "left": {
	    "left": 20
	  },
	  "right": {
	    "right": 20
	  },
	  "title": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "padding": 20,
	    "borderWidth": 2,
	    "borderColor": "#e6e6e6"
	  },
	  "center": {
	    "width": 250,
	    "textAlign": "center",
	    "marginTop": 5,
	    "marginBottom": 5,
	    "backgroundColor": "#FF0000"
	  },
	  "cent": {
	    "textAlign": "center",
	    "marginTop": 20,
	    "marginBottom": 20
	  },
	  "fengeline": {
	    "width": 200,
	    "height": 9
	  },
	  "yuyuepic": {
	    "width": 90,
	    "height": 90,
	    "justifyContent": "center"
	  },
	  "box": {
	    "marginRight": 20,
	    "marginLeft": 20
	  },
	  "hei": {
	    "color": "#373634"
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/860d1c8a1a730f5dd0d01c946f4075b6", {
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