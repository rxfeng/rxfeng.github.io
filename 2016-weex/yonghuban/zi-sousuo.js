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

	;__weex_define__("@weex-component/98991944e4f65f0d93df4844c05a3392", [], function(__weex_require__, __weex_exports__, __weex_module__){
	__webpack_require__(1);
	__webpack_require__(15);

	;
	    var api = __webpack_require__(14);
	    __weex_module__.exports = {
	        data: function () {return {
	            dir: api.dir,
	            val: "",
	            lujing: "",
	            leixing: "全 部",
	            quancheng: "全 城",
	            paixuTxt: "智能排序",
	            red1: "red",
	            red2: "",
	            red3: "",
	            xiche: false,
	            chengqu: false,
	            paixu: false,
	            quan: false,
	            fanhuiurl: "xichemeirong.js",
	            serverData: [],
	            cityData: [],
	            txt1: 0,
	            txt2: "",
	            txt3: "",
	            rank: 1,
	            xuanze: false,
	            leftdata: "",
	            carMileage: "",
	            dd: "",
	            page: 1,
	            top: 9,
	            quanbu: false,
	            fh:false,
	        }},
	        methods: {
	            oninput1: function (e) {
	                this.val = e.value;
	            },
	            onseclled: function (e) {
	                var sx = e.data.rangeHeight - e.data.height - e.data.offsetY;
	                if (sx < 50) {
	                    this.loadMore();
	                }
	            },
	            datarefresh: function (e) {
	                this.refresh_display = "show"
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
	                var _this = this;
	                var info = {
	                    keyword: _this.val,
	                    type: _this.txt1,
	                    sort: _this.rank,
	                    page: _this.page
	                }
	                api.call("factory/list", info, function (ret) {
	                    if(ret.data.datas==""){
	                        _this.fh = true;
	                    }else{
	                        _this.fh = false;
	                    }
	                    if (_this.page == 1) {
	                        if (ret.data.requestCode != 0) {
	                            _this.serverData = [];
	                        } else {
	                            _this.serverData = ret.data.datas;
	                        }
	                    } else {
	                        if (ret.data.requestCode == 0) {
	                            _this.serverData = _this.serverData
	                                    .concat(ret.data.datas);
	                        }
	                    }
	                    _this.refresh_display = 'hide';
	                }, function (e) {
	                    _this.refresh_display = 'hide';
	                });
	            },
	            aa: function (e) {
	                api.push("zi-sousuo.js", {lujing: "xichemeirongshangjia.js", isFirst: 1});
	            },
	            //            点击洗车文字
	            xicheclick: function (e) {
	                var self = this;
	                //                文字变红
	                self.red1 = "red";
	                self.red2 = "";
	                self.red3 = "";
	                //                文字变红
	                self.xiche = !self.xiche;
	                self.chengqu = false;
	                self.paixu = false;
	                self.quan = true;
	                if (self.xiche == false && self.chengqu == false
	                        && self.paixu == false) {
	                    self.quan = false;
	                }
	            },
	            //            点击城区文字
	            chengquclick: function (e) {
	                var self = this;
	                //                文字变红
	                self.red1 = "";
	                self.red2 = "red";
	                self.red3 = "";
	                //                文字变红
	                self.chengqu = !self.chengqu;
	                self.xiche = false;
	                self.paixu = false;
	                self.quan = true;
	                if (self.xiche == false && self.chengqu == false
	                        && self.paixu == false) {
	                    self.quan = false;
	                }
	            },
	            //            点击排序文字
	            paixuclick: function (e) {
	                var self = this;
	                //                文字变红
	                self.red1 = "";
	                self.red2 = "";
	                self.red3 = "red";
	                //                文字变红
	                self.paixu = !self.paixu;
	                self.xiche = false;
	                self.chengqu = false;
	                self.quan = true;
	                if (self.xiche == false && self.chengqu == false
	                        && self.paixu == false) {
	                    self.quan = false;
	                }
	            },
	            //            点击洗车，城区，排序里面的文字
	            xichebox: function (e) {
	                //                api.log(e.target.children[0].attr.value);
	                this.leixing = e.target.children[0].attr.value;
	                this.xiche = false;
	                this.quan = false;
	                if (e.target.children[0].attr.value == "全部") {
	                    this.txt1 = 0;
	                } else if (e.target.children[0].attr.value == "洗车美容") {
	                    this.txt1 = 1;
	                } else if (e.target.children[0].attr.value == "维修") {
	                    this.txt1 = 2;
	                } else if (e.target.children[0].attr.value == "4S店") {
	                    this.txt1 = 3;
	                } else if (e.target.children[0].attr.value == "专修店") {
	                    this.txt1 = 4;
	                } else {
	                    this.txt1 = 4;
	                }
	                var _this = this;
	                _this.serverData = [];
	                var info = {
	                    keyword: _this.val,
	                    type: _this.txt1,
	                    area: _this.txt2,
	                    sort: _this.rank
	                }
	                api.call("factory/list", info, function (ret) {
	                    if(ret.data.datas==""){
	                        _this.fh = true;
	                    }else{
	                        _this.fh = false;
	                    }
	                    _this.serverData = ret.data.datas;
	                }, function (e) {
	                });
	            },
	            chequbox: function (e) {
	                api.log(e.target.children[0].attr.value);
	                this.quancheng = e.target.children[0].attr.value;
	                this.txt2 = e.target.children[0].attr.value;
	                this.chengqu = false;
	                this.quan = false;
	                var _this = this;
	                _this.serverData = [];
	                var info = {
	                    keyword: _this.val,
	                    type: _this.txt1,
	                    area: _this.txt2,
	                    sort: _this.rank
	                }
	                api.call("factory/list", info, function (ret) {
	                    if(ret.data.datas==""){
	                        _this.fh = true;
	                    }else{
	                        _this.fh = false;
	                    }
	                    _this.serverData = ret.data.datas;
	                }, function (e) {
	                });
	            },
	            chequbox1: function (e) {
	                api.log(e.target.children[0].attr.value);
	                this.quancheng = e.target.children[0].attr.value;
	                this.txt2 = e.target.children[0].attr.value;
	                this.chengqu = false;
	                this.quan = false;
	                var _this = this;
	                _this.serverData = [];
	                var info = {
	                    keyword: _this.val,
	                    type: _this.txt1,
	                    area: _this.txt2,
	                    sort: _this.rank
	                }
	                api.call("factory/list", info, function (ret) {
	                    if(ret.data.datas==""){
	                        _this.fh = true;
	                    }else{
	                        _this.fh = false;
	                    }
	                    _this.serverData = ret.data.datas;
	                }, function (e) {
	                });
	            },
	            paixubox: function (e) {
	                api.log(e.target.children[0].attr.value);
	                if (e.target.children[0].attr.value == "智能排序") {
	                    this.rank = 1;
	                } else if (e.target.children[0].attr.value == "距离排序") {
	                    this.rank = 2;
	                } else if (e.target.children[0].attr.value == "星级排序") {
	                    this.rank = 3;
	                } else if (e.target.children[0].attr.value == "人气排序") {
	                    this.rank = 4;
	                }
	                this.paixuTxt = e.target.children[0].attr.value;
	                this.txt3 = e.target.children[0].attr.value;
	                this.paixu = false;
	                this.quan = false;
	                var _this = this;
	                _this.serverData = [];
	                var info = {
	                    keyword: _this.val,
	                    type: _this.txt1,
	                    area: _this.txt2,
	                    sort: _this.rank
	                }
	                api.call("factory/list", info, function (ret) {
	                    if(ret.data.datas==""){
	                        _this.fh = true;
	                    }else{
	                        _this.fh = false;
	                    }
	                    _this.serverData = ret.data.datas;
	                }, function (e) {
	                });
	            },
	            mengbanclick: function (e) {
	                this.quan = false;
	                this.xiche = false;
	                this.chengqu = false;
	                this.paixu = false;
	            },
	            sousuoclick: function (e) {
	//                api.pop(this.lujing,{wenben:this.val})
	                var _this = this;
	                _this.quanbu = true;
	                _this.serverData = [];
	                var info = {
	                    keyword: _this.val,
	                    type: _this.txt1,
	                    area: _this.txt2,
	                    sort: _this.rank
	                }
	                api.call("factory/list", info, function (ret) {
	                    if(ret.data.datas==""){
	                        _this.fh = true;
	                    }else{
	                        _this.fh = false;
	                    }
	                    _this.serverData = ret.data.datas;
	                });
	            }
	        },
	        ready: function () {
	            this.loaddata();
	            //            -------------------------------商家列表---------------------------------
	        },
	        created: function () {
	            this.lujing = api.getData(this).lujing;
	            var _this = this;
	//            _this.xuanze = api.getData(_this).xuanze;
	//            api.tost("wenben:"+api.getData(_this).wenben);
	            //            -------------------------------城区信息---------------------------------
	            api.call("user/getCounty", {}, function (ret) {
	                _this.cityData = ret.data.Regionalisms;
	            });
	            //            -------------------------------城区信息---------------------------------
	            _this.$on('naviBar.rightItem.click', function (e) {
	                _this.leftdata = {
	                    city: _this.txt2,
	                    keyword: _this.val,
	                    type: _this.txt1
	                }
	                api.push("weizhi2.js", {
	                    leftdata: _this.leftdata
	                });
	            });
	            _this.$getConfig(function (config) {
	                var env = config.env;
	                if (env.platform == 'iOS') {
	                    _this.top = 70;
	                }
	            }.bind(_this));
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "xx-navpage",
	  "attr": {
	    "navtitle": "",
	    "navrighttitle": "",
	    "navrighturl": "",
	    "navlefturl": function () {return (this.dir) + 'yijianyuyue.js'},
	    "navleftsrc": function () {return (this.dir) + 'images/fanhui.png'},
	    "bg": "#F5F3F8"
	  },
	  "children": [
	    {
	      "type": "div",
	      "style": {
	        "flexDirection": "row",
	        "position": "relative"
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "txt"
	          ],
	          "events": {
	            "click": "sousuoclick"
	          },
	          "attr": {
	            "value": "搜索"
	          }
	        },
	        {
	          "type": "div",
	          "classList": [
	            "sousuo"
	          ],
	          "style": {
	            "top": function () {return this.top}
	          },
	          "children": [
	            {
	              "type": "div",
	              "style": {
	                "justifyContent": "center",
	                "marginLeft": 10
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "sousuo-pic"
	                  ],
	                  "attr": {
	                    "src": function () {return (this.dir) + 'images/sousuo2.png'}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "input",
	              "attr": {
	                "type": "text",
	                "value": function () {return this.val},
	                "autofocus": "true",
	                "placeholder": "请输入您要搜索的商家"
	              },
	              "classList": [
	                "sousuo-inp"
	              ],
	              "events": {
	                "input": "oninput1"
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "shown": function () {return this.quanbu},
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
	            "click": "xicheclick"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": function () {return ['zt-txt', this.red1]},
	              "attr": {
	                "value": function () {return this.leixing}
	              }
	            },
	            {
	              "type": "image",
	              "shown": function () {return !this.xiche},
	              "classList": [
	                "jiantou"
	              ],
	              "attr": {
	                "src": function () {return (this.dir) + 'images/xiajiaobiao.png'}
	              }
	            },
	            {
	              "type": "image",
	              "shown": function () {return this.xiche},
	              "classList": [
	                "jiantou",
	                "jiantoured"
	              ],
	              "attr": {
	                "src": function () {return (this.dir) + 'images/jiao-red.fw.png'}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "zt"
	          ],
	          "events": {
	            "click": "chengquclick"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": function () {return ['zt-txt', this.red2]},
	              "attr": {
	                "value": function () {return this.quancheng}
	              }
	            },
	            {
	              "type": "image",
	              "shown": function () {return !this.chengqu},
	              "classList": [
	                "jiantou"
	              ],
	              "attr": {
	                "src": function () {return (this.dir) + 'images/xiajiaobiao.png'}
	              }
	            },
	            {
	              "type": "image",
	              "shown": function () {return this.chengqu},
	              "classList": [
	                "jiantou",
	                "jiantoured"
	              ],
	              "attr": {
	                "src": function () {return (this.dir) + 'images/jiao-red.fw.png'}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "zt"
	          ],
	          "events": {
	            "click": "paixuclick"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": function () {return ['zt-txt', this.red3]},
	              "attr": {
	                "value": function () {return this.paixuTxt}
	              }
	            },
	            {
	              "type": "image",
	              "shown": function () {return !this.paixu},
	              "classList": [
	                "jiantou"
	              ],
	              "attr": {
	                "src": function () {return (this.dir) + 'images/xiajiaobiao.png'}
	              }
	            },
	            {
	              "type": "image",
	              "shown": function () {return this.paixu},
	              "classList": [
	                "jiantou",
	                "jiantoured"
	              ],
	              "attr": {
	                "src": function () {return (this.dir) + 'images/jiao-red.fw.png'}
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "text",
	      "classList": [
	        "fhh"
	      ],
	      "shown": function () {return this.fh},
	      "attr": {
	        "value": "没有符合条件的商家~"
	      }
	    },
	    {
	      "type": "div",
	      "shown": function () {return this.quanbu},
	      "style": {
	        "width": 750
	      },
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "box"
	          ],
	          "shown": function () {return this.xiche},
	          "id": "xichemeirong",
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "title"
	              ],
	              "events": {
	                "click": "xichebox"
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "title-txt"
	                  ],
	                  "attr": {
	                    "value": "全部"
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
	                "click": "xichebox"
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "title-txt"
	                  ],
	                  "attr": {
	                    "value": "洗车美容"
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
	                "click": "xichebox"
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "title-txt"
	                  ],
	                  "attr": {
	                    "value": "4S店"
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
	                "click": "xichebox"
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "title-txt"
	                  ],
	                  "attr": {
	                    "value": "专修店"
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
	          "shown": function () {return this.chengqu},
	          "children": [
	            {
	              "type": "scroller",
	              "style": {
	                "borderTopWidth": 2,
	                "borderColor": "#e6e6e6"
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "title"
	                  ],
	                  "events": {
	                    "click": "chequbox"
	                  },
	                  "repeat": function () {return this.cityData},
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "title-txt",
	                        "center"
	                      ],
	                      "attr": {
	                        "value": function () {return this.area}
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
	            "box"
	          ],
	          "shown": function () {return this.paixu},
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "title"
	              ],
	              "style": {
	                "borderTopWidth": 2,
	                "borderColor": "#e6e6e6"
	              },
	              "events": {
	                "click": "paixubox"
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "title-txt",
	                    "right"
	                  ],
	                  "attr": {
	                    "value": "智能排序"
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
	                "click": "paixubox"
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "title-txt",
	                    "right"
	                  ],
	                  "attr": {
	                    "value": "距离排序"
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
	                "click": "paixubox"
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "title-txt",
	                    "right"
	                  ],
	                  "attr": {
	                    "value": "星级排序"
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
	                "click": "paixubox"
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "title-txt",
	                    "right"
	                  ],
	                  "attr": {
	                    "value": "人气排序"
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "list",
	          "style": {
	            "flex": 1
	          },
	          "events": {
	            "scrolled": "onseclled"
	          },
	          "children": [
	            {
	              "type": "refresh",
	              "classList": [
	                "refresh-view"
	              ],
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
	                "position": "relative"
	              },
	              "attr": {
	                "index": function () {return this.$index}
	              },
	              "children": [
	                {
	                  "type": "sy-neirong2",
	                  "repeat": function () {return this.serverData},
	                  "attr": {
	                    "xuanze": "true"
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
	        "quan"
	      ],
	      "shown": function () {return this.quan},
	      "events": {
	        "click": "mengbanclick"
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "sousuo": {
	    "width": 550,
	    "height": 70,
	    "backgroundColor": "#F8C09B",
	    "position": "fixed",
	    "top": 9,
	    "left": 100,
	    "borderRadius": 5,
	    "flexDirection": "row"
	  },
	  "sousuo-pic": {
	    "width": 60,
	    "height": 60
	  },
	  "dwimg": {
	    "width": 60,
	    "height": 60,
	    "position": "fixed",
	    "top": 20,
	    "right": 20
	  },
	  "txt": {
	    "fontSize": 30,
	    "marginTop": 10,
	    "padding": 10,
	    "paddingLeft": 15,
	    "paddingRight": 15,
	    "position": "fixed",
	    "top": 0,
	    "right": 0,
	    "color": "#ffffff"
	  },
	  "sousuo-inp": {
	    "width": 450,
	    "height": 70,
	    "placeholderColor": "#fff",
	    "fontSize": 28,
	    "color": "#ffffff"
	  },
	  "box": {
	    "width": 750,
	    "position": "fixed",
	    "top": 169,
	    "backgroundColor": "#ffffff"
	  },
	  "title": {
	    "paddingTop": 20,
	    "paddingBottom": 15,
	    "marginRight": 40,
	    "marginLeft": 40,
	    "borderBottomWidth": 2,
	    "borderColor": "#e6e6e6"
	  },
	  "title-txt": {
	    "fontSize": 30,
	    "color": "#737373"
	  },
	  "zhuangtai": {
	    "flexDirection": "row",
	    "borderBottomWidth": 2,
	    "borderColor": "#e6e6e6",
	    "backgroundColor": "#ffffff"
	  },
	  "zt": {
	    "flexDirection": "row",
	    "flex": 1,
	    "marginTop": 20,
	    "marginBottom": 20,
	    "borderRightWidth": 2,
	    "borderColor": "#cccccc",
	    "justifyContent": "center"
	  },
	  "zt-txt": {
	    "fontSize": 34,
	    "color": "#373634"
	  },
	  "jiantou": {
	    "width": 37,
	    "height": 37,
	    "marginLeft": 10
	  },
	  "spane": {
	    "height": 10,
	    "backgroundColor": "#ffffff"
	  },
	  "jiantoured": {
	    "transform": "rotate(180deg)"
	  },
	  "red": {
	    "color": "#E95412"
	  },
	  "dianpu": {
	    "width": 170,
	    "background": "rgba(255, 255, 255, 0.4)",
	    "position": "absolute",
	    "top": 182,
	    "left": 30
	  },
	  "center": {
	    "textAlign": "center"
	  },
	  "right": {
	    "textAlign": "right"
	  },
	  "dianpu-txt": {
	    "color": "#E95412",
	    "fontSize": 26,
	    "textAlign": "center"
	  },
	  "refresh-view": {
	    "padding": 30,
	    "alignItems": "center"
	  },
	  "loadmore-view": {
	    "padding": 30,
	    "alignItems": "center"
	  },
	  "quan": {
	    "width": 750,
	    "height": 1200,
	    "backgroundColor": "rgba(0,0,0,0.5)"
	  },
	  "fhh": {
	    "fontSize": 30,
	    "color": "#a0a0a0",
	    "textAlign": "center",
	    "position": "relative",
	    "marginTop": 200
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/98991944e4f65f0d93df4844c05a3392", {
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
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/sy-neirong2", [], function(__weex_require__, __weex_exports__, __weex_module__){
	__webpack_require__(16);

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
/* 16 */
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