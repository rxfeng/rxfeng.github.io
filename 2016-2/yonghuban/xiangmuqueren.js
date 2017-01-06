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

	;__weex_define__("@weex-component/c81829559795ba62a4a6f3068e2a6df2", [], function(__weex_require__, __weex_exports__, __weex_module__){
	__webpack_require__(1);
	__webpack_require__(15);
	__webpack_require__(17);
	__webpack_require__(18);

	;
	    __webpack_require__(2);
	    var wee = __weex_require__('@weex-module/modal');
	    var api = __webpack_require__(14);
	    var item2 = [];
	    var item3 = [];
	    __weex_module__.exports = {
	        data: function () {return {
	            dir: api.dir,
	            carid:"",
	            flag1: true,
	            flag2: false,
	            sdata: {unlist: [], nelist: []},
	            fanhuiurl: "",
	            val: "",
	//            bor1: "border-red",
	//            bor2: "",
	            info: [],
	            num1: "",
	            num2: "",
	            huiqian: 0,
	            redqian: 0,
	            chajia: 0,
	            zhuyi:{},
	            zhuyitxt:"",
	            isC:false,
	        }},
	        methods: {
	            suanjia: function () {
	                var _this = this;
	//                价格的重新计算
	                var zj1 = 0, zj2 = 0;
	                for (var i = 0; i < _this.sdata.nelist.length; i++) {
	                    var item = _this.sdata.nelist[i];
	                    if (item.IsNecessary) {
	                        var subitem = item.itemList[item.selectIndex];
	                        zj1 += subitem.cost;
	                        zj2 += subitem.memberCost;
	                    }
	                }
	                for (var i = 0; i < _this.sdata.unlist.length; i++) {
	                    var item = _this.sdata.unlist[i];
	                    if (item.IsNecessary) {
	                        var subitem = item.itemList[item.selectIndex];
	                        zj1 += subitem.cost;
	                        zj2 += subitem.memberCost;
	                    }
	                }
	                _this.redqian = zj2;
	                _this.huiqian = zj1;
	                _this.chajia = zj1 - zj2;
	//                    选中的保养项目
	                item2 = [];
	                item3 = [];
	                var a = 0;
	                var b = 0;
	                for(var k = 0;k < _this.sdata.nelist.length;k++){
	                    if(_this.sdata.nelist[k].IsNecessary){
	//                        item2[k] = _this.sdata.nelist[k];
	                        item2[a++] = _this.sdata.nelist[k];
	                    }
	                }
	                for(var j = 0;j < _this.sdata.unlist.length ;j++){
	                    if(_this.sdata.unlist[j].IsNecessary){
	                        item3[b++] = _this.sdata.unlist[j];
	                    }
	                }
	            },
	            click1: function (e) {
	                this.flag1 =!this.flag1;
	            },
	            click2: function (e) {
	                this.flag2 =!this.flag2;
	            },
	            textareaclick: function (e) {
	                this.$el('pla').setClassStyle({visibility: 'hidden'});
	            },
	            textareablur: function (e) {
	                this.$el('pla').setClassStyle({visibility: 'visible'});
	            },
	            textArea: function (e) {
	                this.val = e.value;
	            },
	//            zhuyiclick: function (e) {
	//                var _this = this;
	//                api.log(this);
	//                api.call("factory/fetchSuggest", {id: _this.id}, function (ret) {
	////                    api.log(ret.data);
	//                    _this.zhuyi= ret.data.mpInfo;
	//                    _this.zhuyitxt = ret.data.mpInfo.describeMess;
	//                    _this.isC = !_this.isC;
	////                    ret.data.mpInfo.isChecked=!ret.data.mpInfo.isChecked;
	//                });
	//            }
	        },
	        created: function () {
	            var _this = this;
	            _this.fanhuiurl = api.getData(_this).fanhuiurl;
	            this.$on('jisuan', function (e) {
	                _this.suanjia();
	            });
	            _this.$on('cunchu', function (e) {
	                var _this = this;
	                api.get("orderinfo", function (e) {
	                    var orderinfo=JSON.parse(e.data);
	                    orderinfo.wentiTxt = _this.val.replace(/(^\s*)|(\s*$)/g, "");
	                    orderinfo.huiqian = _this.huiqian;
	                    orderinfo.redqian = _this.redqian;
	                    orderinfo.chajia = _this.chajia;
	                    orderinfo.nelist = item2;
	                    orderinfo.unlist = item3;
	                    api.save("orderinfo",orderinfo);
	                    var bb = 0;
	                    var aa = 0;
	                    var nlist = item2.concat(item3);
	                    if (nlist.length == 0) {
	                        api.push("yuyuequeren.js", {shangjiaid: this.factoryId, dd: this.dd}, function (e) {
	                            orderinfo.isSendCar = false;
	                            orderinfo.quche = "";
	                            orderinfo.songche = "";
	                            orderinfo.quchelng1 = "";
	                            orderinfo.quchelat1 = "";
	                            orderinfo.songchelng1 = "";
	                            orderinfo.songchelat1 = "";
	                            orderinfo.songchejine = "";
	                            orderinfo.quchejine = "";
	                            orderinfo.jinqian = "";
	                            api.save("orderinfo",orderinfo);
	                        });
	                    } else {
	                        for (var a = 0; a < nlist.length; a++) {
	                            if(nlist[a].MaintainName=="机油"){
	                                aa=1;
	                            }
	                            if(nlist[a].MaintainName=="机油滤清"){
	                                bb=1;
	                            }
	                        }
	                        if(aa==1 && bb==1){
	                            api.log("都有");
	                            api.push("yuyuequeren.js",{redqian:this.redqian}, function (e) {
	                                orderinfo.isSendCar = false;
	                                orderinfo.quche = "";
	                                orderinfo.songche = "";
	                                orderinfo.quchelng1 = "";
	                                orderinfo.quchelat1 = "";
	                                orderinfo.songchelng1 = "";
	                                orderinfo.songchelat1 = "";
	                                orderinfo.songchejine = "";
	                                orderinfo.quchejine = "";
	                                orderinfo.jinqian = "";
	                                api.save("orderinfo",orderinfo);
	                            });
	                        }else if(aa!=1 && bb!=1){
	                            api.log("都没有");
	                            api.push("yuyuequeren.js",{redqian:this.redqian}, function (e) {
	                                orderinfo.isSendCar = false;
	                                orderinfo.quche = "";
	                                orderinfo.songche = "";
	                                orderinfo.quchelng1 = "";
	                                orderinfo.quchelat1 = "";
	                                orderinfo.songchelng1 = "";
	                                orderinfo.songchelat1 = "";
	                                orderinfo.songchejine = "";
	                                orderinfo.quchejine = "";
	                                orderinfo.jinqian = "";
	                                api.save("orderinfo",orderinfo);
	                            });
	                        }else if(aa==1 && bb!=1){
	                            api.tost("机油和机油滤清更配哦，请添加机油滤清");
	                        }else if(aa!=1 && bb==1){
	                            api.tost("机油和机油滤清更配哦，请添加机油");
	                        }
	                    }
	                });
	            });
	            api.get("orderinfo", function (e) {
	                _this.carid = JSON.parse(e.data).carId;
	//            -----------------------商家信息-----------------------------------
	                api.call("user/repairFactory", {factoryId: JSON.parse(e.data).shangjiaid}, function (ret) {
	                    api.log(ret.data);
	                    _this.info = ret.data.factoryInfo;
	                });
	//            -----------------------商家信息-----------------------------------
	                api.call("car/maintain", {
	                    factoryId: JSON.parse(e.data).shangjiaid,
	                    carId: JSON.parse(e.data).carId,
	                    mileage: JSON.parse(e.data).mileage
	                }, function (ret) {
	                    _this.sdata = ret.data;
	                    for (var i = 0; i < ret.data.nelist.length; i++) {
	                        ret.data.nelist[i].selectIndex = 0;
	                    }
	                    for (var i = 0; i < ret.data.unlist.length; i++) {
	                        ret.data.unlist[i].selectIndex = 0;
	                    }
	                    _this.sdata.nelist = ret.data.nelist;
	                    _this.sdata.unlist = ret.data.unlist;
	//                    选中的保养项目
	                    item2 = [];
	                    item3 = [];
	                    var a = 0;
	                    for(var k = 0;k<_this.sdata.nelist.length;k++){
	                        if(_this.sdata.nelist[k].IsNecessary){
	                            item2[a++] = _this.sdata.nelist[k];
	                        }
	                    }
	//                    页面刚加载出来，金额就上来
	                    _this.suanjia();
	                });
	            });
	            _this.$on('naviBar.rightItem.click',function(e){
	                api.call("car/carInfo", {carId: _this.carid}, function (ret) {
	                    api.push("zi-webpage.js", {
	                        title: "保养手册",
	                        url: "http://www.yixiucar.com/yxapi/cycle/car?cid="+ret.data.car.carBrand,
	                        fanhui: "xiangmuqueren.js"
	                    });
	                });
	            });
	        },
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "xx-navpage",
	  "attr": {
	    "navtitle": "智能保养",
	    "navrighttitle": "保养手册",
	    "navrighturl": "",
	    "navrightsrc": "",
	    "navlefturl": function () {return this.fanhuiurl},
	    "navleftsrc": function () {return (this.dir) + 'images/fanhui.png'}
	  },
	  "children": [
	    {
	      "type": "scroller",
	      "style": {
	        "flex": 1
	      },
	      "children": [
	        {
	          "type": "zi-jiuyuan2",
	          "repeat": function () {return this.info}
	        },
	        {
	          "type": "div",
	          "classList": [
	            "spean"
	          ]
	        },
	        {
	          "type": "div",
	          "style": {
	            "marginBottom": 100
	          },
	          "children": [
	            {
	              "type": "div",
	              "style": {
	                "backgroundColor": "#ffffff"
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "info",
	                    "info2"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "title-left",
	                        "small"
	                      ],
	                      "attr": {
	                        "value": "智能保养方案"
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "info",
	                    "info2"
	                  ],
	                  "events": {
	                    "click": "click1"
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "title-left",
	                        "small2"
	                      ],
	                      "attr": {
	                        "value": function () {return (this.sdata.nelist.length) + '项零件建议保养（均含工时费）'}
	                      }
	                    },
	                    {
	                      "type": "image",
	                      "shown": function () {return this.flag1},
	                      "classList": [
	                        "jiantou"
	                      ],
	                      "attr": {
	                        "src": function () {return (this.dir) + 'images/xiajiaobiao.png'}
	                      }
	                    },
	                    {
	                      "type": "image",
	                      "shown": function () {return !this.flag1},
	                      "classList": [
	                        "jiantou"
	                      ],
	                      "attr": {
	                        "src": function () {return (this.dir) + 'images/right-jiao.fw.png'}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "zi-fangan",
	                  "shown": function () {return this.flag1},
	                  "attr": {
	                    "datas": function () {return this.sdata.nelist},
	                    "zyimg": "1"
	                  }
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "info",
	                    "info2"
	                  ],
	                  "events": {
	                    "click": "click2"
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "title-left",
	                        "small2"
	                      ],
	                      "attr": {
	                        "value": function () {return (this.sdata.unlist.length) + '项零件可选保养'}
	                      }
	                    },
	                    {
	                      "type": "image",
	                      "shown": function () {return this.flag2},
	                      "classList": [
	                        "jiantou"
	                      ],
	                      "attr": {
	                        "src": function () {return (this.dir) + 'images/xiajiaobiao.png'}
	                      }
	                    },
	                    {
	                      "type": "image",
	                      "shown": function () {return !this.flag2},
	                      "classList": [
	                        "jiantou"
	                      ],
	                      "attr": {
	                        "src": function () {return (this.dir) + 'images/right-jiao.fw.png'}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "zi-fangan",
	                  "shown": function () {return this.flag2},
	                  "attr": {
	                    "datas": function () {return this.sdata.unlist}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "info",
	                "info2"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "title-left",
	                    "small"
	                  ],
	                  "attr": {
	                    "value": "维修问题描述"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "style": {
	                "position": "relative"
	              },
	              "children": [
	                {
	                  "type": "textarea",
	                  "attr": {
	                    "name": "",
	                    "cols": "30",
	                    "rows": "5",
	                    "value": function () {return this.val}
	                  },
	                  "events": {
	                    "input": "textArea",
	                    "focus": "textareaclick",
	                    "blur": "textareablur"
	                  },
	                  "style": {
	                    "color": "#373634",
	                    "borderWidth": 1,
	                    "borderColor": "#cccccc",
	                    "margin": 20,
	                    "padding": 10
	                  }
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "pla"
	                  ],
	                  "id": "pla",
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "txt",
	                        "xiao"
	                      ],
	                      "attr": {
	                        "value": "请输入文字内容..."
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "zi-zongji2",
	          "attr": {
	            "title": "下一步",
	            "huiqian": function () {return this.huiqian},
	            "redqian": function () {return this.redqian},
	            "chajia": function () {return this.chajia},
	            "url": "yuyuequeren.js"
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "info": {
	    "paddingTop": 20,
	    "paddingBottom": 20,
	    "borderBottomWidth": 2,
	    "borderColor": "#e6e6e6",
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "paddingLeft": 20,
	    "paddingRight": 20
	  },
	  "info2": {
	    "marginLeft": 20,
	    "marginRight": 20,
	    "paddingLeft": 0
	  },
	  "title-left": {
	    "fontSize": 32,
	    "color": "#373634"
	  },
	  "small": {
	    "fontSize": 33
	  },
	  "jiantou": {
	    "width": 37,
	    "height": 37,
	    "marginLeft": 10
	  },
	  "spean": {
	    "height": 20,
	    "backgroundColor": "#F5F3F8"
	  },
	  "pla": {
	    "position": "absolute",
	    "top": 30,
	    "left": 30
	  },
	  "txt": {
	    "fontSize": 28,
	    "color": "#a0a0a0"
	  },
	  "xiao": {
	    "fontSize": 26
	  },
	  "img2": {
	    "width": 47,
	    "height": 47,
	    "marginTop": -5
	  },
	  "small2": {
	    "fontSize": 30,
	    "color": "#a0a0a0"
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/c81829559795ba62a4a6f3068e2a6df2", {
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

	;__weex_define__("@weex-component/zi-jiuyuan2", [], function(__weex_require__, __weex_exports__, __weex_module__){
	__webpack_require__(16);

	;
	    var api=__webpack_require__(14);
	    __weex_module__.exports ={
	        data:function () {return {
	            dir:api.dir,
	        }},
	        methods:{
	            bodadianhua: function (e) {
	                __weex_require__('@weex-module/dialanumber').boHao(this.telPhone);
	            },
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "pthb"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "title"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "rxfrow"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "title-txt"
	              ],
	              "attr": {
	                "value": function () {return this.factoryName||''}
	              }
	            },
	            {
	              "type": "xingxing",
	              "attr": {
	                "star": function () {return this.star}
	              },
	              "style": {
	                "marginTop": -3
	              }
	            }
	          ]
	        },
	        {
	          "type": "text",
	          "classList": [
	            "title-right-txt"
	          ],
	          "attr": {
	            "value": function () {return this.repairFactory||''}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "title"
	      ],
	      "style": {
	        "paddingBottom": 20
	      },
	      "children": [
	        {
	          "type": "div",
	          "style": {
	            "flexDirection": "row",
	            "flex": 1,
	            "borderRightWidth": 1,
	            "borderColor": "#e6e6e6"
	          },
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "left-pic"
	              ],
	              "attr": {
	                "src": function () {return (this.dir) + 'images/yytime.png'}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "title-right-txt"
	              ],
	              "attr": {
	                "value": function () {return '营业时间:' + (this.startTime||'') + '--' + (this.endTime||'')}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "style": {
	            "flexDirection": "row",
	            "flex": 1,
	            "justifyContent": "flex-end"
	          },
	          "events": {
	            "click": "bodadianhua"
	          },
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "left-pic"
	              ],
	              "attr": {
	                "src": function () {return (this.dir) + 'images/phone.png'}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "title-right-txt"
	              ],
	              "attr": {
	                "value": function () {return '电话:' + (this.telPhone||'')}
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
	        "justifyContent": "space-between",
	        "paddingRight": 20,
	        "paddingLeft": 20,
	        "paddingTop": 10
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "title-right-txt"
	          ],
	          "style": {
	            "width": 520,
	            "lines": 1,
	            "textOverflow": "ellipsis"
	          },
	          "attr": {
	            "value": function () {return this.location||''}
	          }
	        },
	        {
	          "type": "div",
	          "style": {
	            "flexDirection": "row"
	          },
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "dw"
	              ],
	              "attr": {
	                "src": function () {return (this.dir) + 'images/dw.png'}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "title-right-txt"
	              ],
	              "attr": {
	                "value": function () {return (this.distance||0) + 'Km'}
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
	  "pthb": {
	    "paddingTop": 20,
	    "paddingBottom": 20,
	    "backgroundColor": "#ffffff",
	    "borderWidth": 1,
	    "borderColor": "#e6e6e6"
	  },
	  "title": {
	    "borderBottomWidth": 2,
	    "borderColor": "#e6e6e6",
	    "marginBottom": 10,
	    "padding": 10,
	    "marginLeft": 10,
	    "marginRight": 10,
	    "flexDirection": "row",
	    "justifyContent": "space-between"
	  },
	  "rxfrow": {
	    "flexDirection": "row",
	    "paddingTop": 15,
	    "marginTop": -15
	  },
	  "title-txt": {
	    "marginTop": -5,
	    "fontSize": 33
	  },
	  "title-right-txt": {
	    "fontSize": 27,
	    "color": "#a0a0a0"
	  },
	  "left-pic": {
	    "width": 37,
	    "height": 37,
	    "marginRight": 10
	  },
	  "ksjy": {
	    "color": "#ffffff",
	    "background": "#E95412",
	    "padding": 10,
	    "borderRadius": 10,
	    "fontSize": 28
	  },
	  "dw": {
	    "width": 40,
	    "height": 40
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

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/zi-fangan", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __webpack_require__(2);
	    var api = __webpack_require__(14);
	    var currentCost = 0;
	    var currentMember = 0;
	    __weex_module__.exports = {
	        data: function () {return {
	            dir: api.dir,
	            huiqian: 0,
	            redqian: 0,
	            chajia: 0,
	            num1: 0,
	            datas: [],
	            t: 0,
	            zhuyi: {},
	            zhuyitxt: "",
	            isC: false,
	            zyimg: false,
	        }},
	        created: function () {
	//            api.log("zyimg:"+this.zyimg)
	//            for (var i = 0; i < this.datas.length; i++) {
	//                this.datas[i].selectItemId = this.datas[i].itemList[0].id;
	//            }
	            //this.$dispatch('jisuan', {});
	        },
	        ready: function () {
	//            this.$dispatch('yangshi')
	//            项目明细中的默认样式
	            if (this.$el("aalist")) {
	                api.log(111);
	                var bnode = this.$el("aalist").pureChildren[0].pureChildren[0];
	                bnode.setStyle("borderColor", "#E95412");
	                bnode.setStyle("borderStyle", "dashed");
	            }
	        },
	        methods: {
	            selectJiage: function (index) {
	                if(!this.datas[index]){
	                    return {cost:0,memberCost:0};
	                }
	                return this.datas[index].itemList[this.datas[index].selectIndex];
	            },
	            xuanzeSrc: function (index) {
	                if(!this.datas[index]){
	                    return {cost:0,memberCost:0};
	                }
	                if (this.datas[index].IsNecessary) {
	                    return api.dir + "images/danxuan2.png";
	                } else {
	                    return api.dir + "images/danxuan3.png";
	                }
	            },
	            clickSelect: function (e) {
	                this.datas[e.target.attr.index].IsNecessary = !this.datas[e.target.attr.index].IsNecessary;
	                this.$dispatch('jisuan', {})
	            },
	            subSelectClick: function (e) {
	                for (var i = 0; i < e.target.parentNode.pureChildren.length; i++) {
	                    var node = e.target.parentNode.pureChildren[i].pureChildren[0];
	                    node.setStyle("borderColor", "#aaa");
	                    node.setStyle("borderStyle", "dashed");

	                }
	                var anode = e.target.pureChildren[0];
	                anode.setStyle("borderColor", "#E95412");
	                anode.setStyle("borderStyle", "dashed");
	                this.datas[e.target.parentNode.attr.itemindex].selectIndex = e.target.attr.index;
	                this.datas[e.target.parentNode.attr.itemindex].selectId = e.target.attr.valueid;
	                this.$dispatch('jisuan', {});
	            },
	            zhuyiclick: function (e) {
	                var _this = this;
	                var i = e.target.attr.index;
	//                api.tost(this.datas[i].MaintainName);
	                api.dialog(this.dir + "zi-tishi1.js",{title:this.datas[i].MaintainName+"保养套餐",cont:this.datas[i].valueName,bot:this.datas[i].valueNotice});
	//                api.call("factory/fetchI", {id: _this.id}, function (ret) {
	//                    api.log(ret.data);
	//                    api.dialog(_this.dir + "zi-tishi.js",{zhuyitxt:ret.data.mpInfo1.valueName});
	//                });
	            }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "style": {
	    "backgroundColor": "#ffffff"
	  },
	  "repeat": function () {return this.datas},
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "main"
	      ],
	      "events": {
	        "click": "clickSelect"
	      },
	      "attr": {
	        "index": function () {return this.$index}
	      },
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "one"
	          ],
	          "events": {
	            "click": "clickSelect"
	          },
	          "attr": {
	            "index": function () {return this.$index}
	          },
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "left"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "style": {
	                    "flexDirection": "row",
	                    "marginTop": 15,
	                    "marginLeft": 10
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
	                        "xiangmu-txt"
	                      ],
	                      "attr": {
	                        "value": function () {return this.MaintainName}
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "xiangmu-txt"
	                      ],
	                      "style": {
	                        "marginLeft": 10
	                      },
	                      "shown": function () {return this.itemList.length==1},
	                      "attr": {
	                        "value": function () {return this.itemList[0].partsName}
	                      }
	                    },
	                    {
	                      "type": "image",
	                      "shown": function () {return this.zyimg==1},
	                      "events": {
	                        "click": "zhuyiclick"
	                      },
	                      "attr": {
	                        "index": function () {return this.$index},
	                        "src": function () {return (this.dir) + 'images/zhuyi.png'}
	                      },
	                      "classList": [
	                        "img2"
	                      ]
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "right"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "yuanjia"
	                  ],
	                  "attr": {
	                    "value": function () {return '￥' + (this.selectJiage(this.$index).cost)}
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "tejia",
	                    "red"
	                  ],
	                  "attr": {
	                    "value": function () {return '￥' + (this.selectJiage(this.$index).memberCost)}
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "hlist",
	          "classList": [
	            "slice"
	          ],
	          "id": "aalist",
	          "shown": function () {return this.itemList.length>1},
	          "attr": {
	            "itemindex": function () {return this.$index}
	          },
	          "children": [
	            {
	              "type": "cell",
	              "append": "tree",
	              "classList": [
	                "row"
	              ],
	              "repeat": function () {return this.itemList},
	              "events": {
	                "click": "subSelectClick"
	              },
	              "attr": {
	                "index": function () {return this.$index},
	                "valueid": function () {return this.id}
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "two"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "zi-txt"
	                      ],
	                      "attr": {
	                        "value": function () {return this.partsName}
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "zi-txt"
	                      ],
	                      "attr": {
	                        "value": function () {return this.tag}
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
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "row": {
	    "width": 340
	  },
	  "danxuan": {
	    "width": 47,
	    "height": 47
	  },
	  "one": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "paddingTop": 10,
	    "paddingBottom": 10,
	    "marginLeft": 20,
	    "marginRight": 20
	  },
	  "line": {
	    "marginRight": 20,
	    "marginLeft": 70,
	    "height": 2,
	    "backgroundColor": "#e6e6e6"
	  },
	  "left": {
	    "flexDirection": "row"
	  },
	  "img1": {
	    "width": 50,
	    "height": 50,
	    "marginTop": 7
	  },
	  "img2": {
	    "width": 47,
	    "height": 47,
	    "marginTop": -5
	  },
	  "xiangmu-txt": {
	    "fontSize": 30,
	    "color": "#a0a0a0"
	  },
	  "right": {
	    "flexDirection": "row",
	    "marginTop": 10
	  },
	  "yuanjia": {
	    "fontSize": 30,
	    "color": "#a0a0a0",
	    "textDecoration": "line-through"
	  },
	  "tejia": {
	    "fontSize": 30,
	    "marginLeft": 20
	  },
	  "red": {
	    "color": "#E95412"
	  },
	  "slice": {
	    "marginLeft": 80,
	    "marginBottom": 20,
	    "height": 150
	  },
	  "two": {
	    "flex": 1,
	    "borderStyle": "dashed",
	    "borderWidth": 2,
	    "borderColor": "#aaaaaa",
	    "justifyContent": "center",
	    "overflow": "hidden",
	    "marginRight": 50,
	    "padding": 10
	  },
	  "border-red": {
	    "borderColor": "#E95412"
	  },
	  "zi-txt": {
	    "textAlign": "center",
	    "color": "#a0a0a0",
	    "fontSize": 28,
	    "lineHeight": 36
	  },
	  "zhuyiTxt": {
	    "backgroundColor": "#E95412",
	    "paddingRight": 10,
	    "paddingLeft": 10,
	    "fontSize": 26,
	    "color": "#ffffff",
	    "marginTop": 40,
	    "borderRadius": 5,
	    "transform": "translateX(-50%)"
	  }
	})
	})

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/zi-zongji2", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    var api = __webpack_require__(14);
	    __weex_module__.exports = {
	        data: function () {return {
	            redqian: 0,
	            huiqian: 0,
	            chajia: 0,
	            dir: api.dir,
	            title: "下一步",
	            url: "",
	            nextinfo: "",
	            washId:"",
	        }},
	        methods: {
	            yuyuequeren: function (e) {
	                this.$dispatch('cunchu', {});
	//                api.push("yuyuequeren.js",{redqian:this.redqian});
	            },
	        },
	        ready: function () {

	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "bottom"
	  ],
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "yuanjia",
	        "jine-yuanjia"
	      ],
	      "attr": {
	        "value": function () {return '￥' + (this.huiqian)}
	      }
	    },
	    {
	      "type": "div",
	      "style": {
	        "flexDirection": "row"
	      },
	      "children": [
	        {
	          "type": "div",
	          "style": {
	            "marginRight": 10
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
	                    "zongji-txt"
	                  ],
	                  "attr": {
	                    "value": "总计:"
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "zongjijine-txt",
	                    "red"
	                  ],
	                  "attr": {
	                    "value": function () {return '￥' + (this.redqian)}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "text",
	              "classList": [
	                "youhuijine-txt"
	              ],
	              "attr": {
	                "value": function () {return '（已优惠￥' + (this.chajia) + '）'}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "quedingbtn"
	          ],
	          "events": {
	            "click": "yuyuequeren"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "queding-txt"
	              ],
	              "attr": {
	                "value": function () {return this.title}
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
	  "yuanjia": {
	    "fontSize": 30,
	    "color": "#a0a0a0",
	    "textDecoration": "line-through"
	  },
	  "red": {
	    "color": "#E95412"
	  },
	  "bottom": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "width": 750,
	    "height": 100,
	    "paddingLeft": 20,
	    "backgroundColor": "#ffffff",
	    "borderTopWidth": 1,
	    "borderColor": "#e6e6e6",
	    "position": "fixed",
	    "bottom": 0
	  },
	  "jine-yuanjia": {
	    "marginTop": 20
	  },
	  "zongji-txt": {
	    "fontSize": 34,
	    "color": "#373634",
	    "marginTop": 10
	  },
	  "zongjijine-txt": {
	    "fontSize": 34,
	    "marginLeft": 10,
	    "marginTop": 10
	  },
	  "youhuijine-txt": {
	    "fontSize": 26,
	    "color": "#a0a0a0",
	    "marginTop": 5
	  },
	  "quedingbtn": {
	    "width": 180,
	    "backgroundColor": "#E95412",
	    "justifyContent": "center"
	  },
	  "queding-txt": {
	    "fontSize": 34,
	    "textAlign": "center",
	    "color": "#ffffff"
	  }
	})
	})

/***/ }
/******/ ]);