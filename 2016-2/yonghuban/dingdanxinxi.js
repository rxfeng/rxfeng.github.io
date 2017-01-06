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

	;__weex_define__("@weex-component/3f6bf22209cdd6671caedea118216a96", [], function(__weex_require__, __weex_exports__, __weex_module__){
	__webpack_require__(1);
	__webpack_require__(15);
	__webpack_require__(16);
	__webpack_require__(17);
	__webpack_require__(18);
	__webpack_require__(19);
	__webpack_require__(20);
	__webpack_require__(21);

	;
	    var api = __webpack_require__(14);
	    __webpack_require__(2);
	    __weex_module__.exports = {
	        data: function () {return {
	            dir:api.dir,
	            orid:"",
	            youhui: 0,
	            zje:0,
	            wtms:"",
	            totaljine: 0,
	            zhifubox:false,
	            weixiubox:true,
	            qusongchebox:true,
	            clxx: [
	                {
	                    bycx: "",
	                    cphm: "",
	                    xslc: "0",
	                    lxr: "",
	                    tel: "",
	                },
	            ],
	            sjxx: [
	                {
	                    sjmc: "",
	                    dizhi: "",
	                    sjlx: "",
	                }
	            ],
	            dingdxx: [
	                {
	                    ddje: "0",
	                    ddzt: "",
	                    ddlx: "",
	                    ddh: "0",
	                    ddsj: "",
	                },
	            ],
	            weixiuby:[],
	            list:[],
	            qian:"",
	            daijia: [
	                {
	                    quche: "",
	                    songche: "",
	                }
	            ],
	            zhifu: [
	                {
	                    zfje: "",
	                    zffs: "",
	                    hbdk: "",
	                    jfdk: "",
	                    time: "",
	                }
	            ],
	            zhifusj:"",
	            fanhui:"",
	            tiaojian:"",
	        }},
	        created: function () {
	            var _this = this;
	            _this.orid = api.getData(_this).id;
	            _this.fanhui = api.getData(_this).fanhui;
	//            -----------------------选中订单详情-----------------------------------
	            api.call("factory/queryAll", {id: _this.orid}, function (ret) {
	//                api.log(ret.data.orderItmeInfo);
	//                    车辆信息
	//                api.log(ret.data);
	                _this.tiaojian = ret.data.orderMessInfo.num;
	                _this.clxx[0].bycx = ret.data.userCarInfo.carType;
	                _this.clxx[0].cphm = ret.data.userCarInfo.carLicence;
	                _this.clxx[0].xslc = ret.data.userCarInfo.carMileage;
	                _this.clxx[0].lxr = ret.data.userCarInfo.realName;
	                _this.clxx[0].tel = ret.data.userCarInfo.cellphone;
	//                    商家信息
	                _this.sjxx[0].sjmc = ret.data.factoryInfo.factoryName;
	                _this.sjxx[0].dizhi = ret.data.factoryInfo.location;
	                _this.sjxx[0].sjlx = ret.data.factoryInfo.type;
	//                    订单信息
	                _this.dingdxx[0].ddje = ret.data.orderMessInfo.totalCost;
	                if(ret.data.orderMessInfo.factoryState==0){
	                    _this.dingdxx[0].ddzt = "未接单";
	                }else if(ret.data.orderMessInfo.factoryState==1 || ret.data.orderMessInfo.factoryState==5){
	                    _this.dingdxx[0].ddzt = "服务中";
	                }else if(ret.data.orderMessInfo.factoryState==2){
	                    _this.dingdxx[0].ddzt = "已完成";
	                }else if(ret.data.orderMessInfo.factoryState==3){
	                    _this.dingdxx[0].ddzt = "未验证";
	                }
	                if(ret.data.orderMessInfo.orderType==1){
	                    _this.dingdxx[0].ddlx = "维修保养"
	                }else if(ret.data.orderMessInfo.orderType==3){
	                    _this.dingdxx[0].ddlx = "现场救援"
	                }else if(ret.data.orderMessInfo.orderType==4){
	                    _this.dingdxx[0].ddlx = "洗车美容"
	                }else if(ret.data.orderMessInfo.orderType==2){
	                    _this.dingdxx[0].ddlx = "拖车服务"
	                }else if(ret.data.orderMessInfo.orderType==5){
	                    _this.dingdxx[0].ddlx = "送车服务"
	                }
	//                _this.dingdxx[0].ddlx = ret.data.orderMessInfo.orderType;
	                _this.dingdxx[0].ddh = ret.data.orderMessInfo.orderNumber;
	                _this.dingdxx[0].ddsj = ret.data.orderMessInfo.startTime;
	//                    代驾信息
	//                api.log(ret.data);
	                if(ret.data.driverInfo.money==0){
	                    _this.qusongchebox = false;
	                }else{
	                    _this.qusongchebox = true;
	                    _this.daijia[0].quche = ret.data.driverInfo.start;
	                    _this.daijia[0].songche = ret.data.driverInfo.end||false;
	                    _this.qian = ret.data.driverInfo.money;
	                }

	//                    维修保养项目
	                _this.weixiuby = ret.data.orderItmeInfo.list;
	                _this.youhui=ret.data.orderItmeInfo.cost;
	                _this.zje=ret.data.orderItmeInfo.sumCost;
	                _this.wtms=ret.data.orderItmeInfo.describe;
	                if(ret.data.orderItmeInfo.list.length==0){
	                    _this.weixiubox = false;
	                }else{
	                    _this.weixiubox = true;
	                }
	//                订单支付
	//                api.log(ret.data.payInfo)
	                if(ret.data.payInfo=="" ||ret.data.payInfo==null){
	                    _this.zhifubox = false;
	                }else{
	                    _this.zhifubox = true;
	                    _this.zhifu.zfje = ret.data.payInfo.payCost;
	                    if(ret.data.payInfo.payType==1){
	                        _this.zhifu.zffs = "微信";
	                    }else if(ret.data.payInfo.payType==2){
	                        _this.zhifu.zffs = "支付宝";
	                    }else if(ret.data.payInfo.payType==0){
	                        _this.zhifu.zffs = "未支付";
	                    }
	                    _this.zhifu.hbdk = ret.data.payInfo.redCost;
	                    _this.zhifu.jfdk = ret.data.payInfo.pointCost;
	//                    _this.zhifu.zhifusj = ret.data.payInfo.timestamp;
	                    _this.zhifusj =ret.data.payInfo.timestamp;
	                }
	            });
	//            -----------------------选中订单详情-----------------------------------
	        },
	        methods:{
	            qxdd: function (e) {
	                var _this = this;
	                if(_this.tiaojian ==1){
	                    api.dialog(_this.dir + "zi-queren.js", {}, function (e) {
	                        if (e.ok) {
	                            api.call("factory/cancelOrder",{id:_this.orid}, function (ret) {
	                                api.pop({a:1});
	                            })
	                        }
	                    });
	                }else{
	                    api.tost("无法取消订单");
	                }
	            }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "xx-navpage",
	  "attr": {
	    "navtitle": "订单信息",
	    "navlefturl": function () {return this.fanhui},
	    "navleftsrc": function () {return (this.dir) + 'images/fanhui.png'},
	    "bg": "#F5F3F8"
	  },
	  "children": [
	    {
	      "type": "scroller",
	      "attr": {
	        "stle": "flex:1"
	      },
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "span"
	          ]
	        },
	        {
	          "type": "cheliangxinxi",
	          "attr": {
	            "clxx": function () {return this.clxx},
	            "title": "车辆信息"
	          }
	        },
	        {
	          "type": "sjxx",
	          "attr": {
	            "sjxx": function () {return this.sjxx},
	            "title": "商家信息"
	          }
	        },
	        {
	          "type": "daijiaxinxi",
	          "attr": {
	            "daijia": function () {return this.daijia},
	            "qian": function () {return this.qian},
	            "title": "代驾信息"
	          },
	          "shown": function () {return this.qusongchebox}
	        },
	        {
	          "type": "dingdxx",
	          "attr": {
	            "dingdxx": function () {return this.dingdxx},
	            "title": "订单信息"
	          }
	        },
	        {
	          "type": "weixiuby",
	          "attr": {
	            "weixiuby": function () {return this.weixiuby},
	            "title": "维修保养项目",
	            "youhui": function () {return this.youhui},
	            "zje": function () {return this.zje},
	            "wtms": function () {return this.wtms}
	          },
	          "shown": function () {return this.weixiubox}
	        },
	        {
	          "type": "zhifuxinxi",
	          "attr": {
	            "zhifu": function () {return this.zhifu},
	            "sj": function () {return this.zhifusj},
	            "title": "支付信息"
	          },
	          "shown": function () {return this.zhifubox}
	        },
	        {
	          "type": "text",
	          "classList": [
	            "fapiao",
	            "red"
	          ],
	          "attr": {
	            "value": "如需发票请向商家索要"
	          }
	        },
	        {
	          "type": "btn",
	          "attr": {
	            "title": "取消订单"
	          },
	          "shown": function () {return this.fanhui=='jindugenzong2.js'},
	          "events": {
	            "click": "qxdd"
	          },
	          "style": {
	            "marginTop": 30,
	            "marginBottom": 100
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "backcolor": {
	    "backgroundColor": "#F5F3F8"
	  },
	  "fapiao": {
	    "paddingTop": 20,
	    "paddingBottom": 20,
	    "paddingLeft": 20,
	    "fontSize": 30
	  },
	  "red": {
	    "color": "#E95412"
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/3f6bf22209cdd6671caedea118216a96", {
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

	;__weex_define__("@weex-component/cheliangxinxi", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __weex_module__.exports ={
	        data: function () {return {
	            title:"",
	            clxx:[
	                {
	                    bycx: "",
	                    cphm: "",
	                    xslc: "",
	                    lxr: "",
	                    tel: "",
	                },
	            ],
	        }},
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
	        "title",
	        "pr20",
	        "pl20"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "title-txt"
	          ],
	          "attr": {
	            "value": function () {return this.title}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "dingdaninfo"
	      ],
	      "repeat": {
	        "expression": function () {return this.clxx},
	        "value": "data"
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
	                "value": "保养车型："
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "info-txt2"
	              ],
	              "attr": {
	                "value": function () {return this.data.bycx}
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
	                "value": function () {return this.data.cphm}
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
	                "value": "行驶里程："
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "info-txt2"
	              ],
	              "attr": {
	                "value": function () {return this.data.xslc}
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
	                "value": "联系人："
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "info-txt2"
	              ],
	              "attr": {
	                "value": function () {return this.data.lxr}
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
	                "value": "手机号："
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "info-txt2"
	              ],
	              "attr": {
	                "value": function () {return this.data.tel}
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
	    "backgroundColor": "#ffffff",
	    "borderWidth": 1,
	    "borderColor": "#e6e6e6"
	  },
	  "pr20": {
	    "paddingRight": 20
	  },
	  "pl20": {
	    "paddingLeft": 10
	  },
	  "title": {
	    "paddingTop": 20,
	    "paddingBottom": 10,
	    "borderBottomWidth": 1,
	    "borderColor": "#e6e6e6",
	    "marginLeft": 10,
	    "marginRight": 10
	  },
	  "title-txt": {
	    "fontSize": 32,
	    "color": "#373634"
	  },
	  "dingdaninfo": {
	    "padding": 20,
	    "borderWidth": 1,
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
	    "width": 550,
	    "color": "#A0A0A0",
	    "fontSize": 28
	  },
	  "jiantou": {
	    "width": 47,
	    "height": 47,
	    "position": "absolute",
	    "top": 130,
	    "right": 20
	  }
	})
	})

/***/ },
/* 16 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/sjxx", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __weex_module__.exports ={
	        data: function () {return {
	            title:"",
	            sjxx:[
	                {
	                    sjmc:"",
	                    dizhi:"",
	                    sjlx:"",
	                }
	            ],
	        }},
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
	        "title",
	        "pr20",
	        "pl20"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "title-txt"
	          ],
	          "attr": {
	            "value": function () {return this.title}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "dingdaninfo"
	      ],
	      "repeat": {
	        "expression": function () {return this.sjxx},
	        "value": "data"
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
	                "value": "商家名称："
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "info-txt2"
	              ],
	              "attr": {
	                "value": function () {return this.data.sjmc}
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
	                "value": "地址："
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "info-txt2"
	              ],
	              "attr": {
	                "value": function () {return this.data.dizhi}
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
	                "value": "商家类型："
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "info-txt2"
	              ],
	              "attr": {
	                "value": function () {return this.data.sjlx}
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
	    "backgroundColor": "#ffffff",
	    "marginTop": 20,
	    "borderWidth": 1,
	    "borderColor": "#e6e6e6"
	  },
	  "pr20": {
	    "paddingRight": 20
	  },
	  "pl20": {
	    "paddingLeft": 10
	  },
	  "title": {
	    "paddingTop": 20,
	    "paddingBottom": 10,
	    "borderBottomWidth": 1,
	    "borderColor": "#e6e6e6",
	    "marginLeft": 10,
	    "marginRight": 10
	  },
	  "title-txt": {
	    "fontSize": 32,
	    "color": "#373634"
	  },
	  "dingdaninfo": {
	    "padding": 20,
	    "borderWidth": 1,
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
	  "jiantou": {
	    "width": 47,
	    "height": 47,
	    "position": "absolute",
	    "top": 130,
	    "right": 20
	  }
	})
	})

/***/ },
/* 17 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/daijiaxinxi", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __weex_module__.exports = {
	        data: function () {return {
	            title: "",
	            qian: "",
	            daijia: [
	                {
	                    quche: "",
	                    songche: "",
	                }
	            ],
	        }},
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
	        "title",
	        "pr20",
	        "pl20"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "title-txt"
	          ],
	          "attr": {
	            "value": function () {return this.title}
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "title-txt",
	            "right",
	            "red"
	          ],
	          "attr": {
	            "value": function () {return '￥' + (this.qian)}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "dingdaninfo"
	      ],
	      "repeat": {
	        "expression": function () {return this.daijia},
	        "value": "data"
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
	                "value": "取车地址："
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "info-txt2"
	              ],
	              "attr": {
	                "value": function () {return this.data.quche}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "info"
	          ],
	          "shown": function () {return this.data.songche},
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "info-txt1"
	              ],
	              "attr": {
	                "value": "送车地址："
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "info-txt2"
	              ],
	              "attr": {
	                "value": function () {return this.data.songche}
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
	    "backgroundColor": "#ffffff",
	    "marginTop": 20,
	    "borderWidth": 1,
	    "borderColor": "#e6e6e6"
	  },
	  "pr20": {
	    "paddingRight": 20
	  },
	  "pl20": {
	    "paddingLeft": 10
	  },
	  "title": {
	    "paddingTop": 20,
	    "paddingBottom": 10,
	    "borderBottomWidth": 1,
	    "borderColor": "#e6e6e6",
	    "marginLeft": 10,
	    "marginRight": 10,
	    "flexDirection": "row",
	    "justifyContent": "space-between"
	  },
	  "title-txt": {
	    "fontSize": 32,
	    "color": "#373634"
	  },
	  "right": {
	    "fontSize": 28
	  },
	  "dingdaninfo": {
	    "padding": 20,
	    "borderWidth": 1,
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
	    "fontSize": 28,
	    "width": 556
	  },
	  "jiantou": {
	    "width": 47,
	    "height": 47,
	    "position": "absolute",
	    "top": 130,
	    "right": 20
	  },
	  "red": {
	    "color": "#E95412"
	  }
	})
	})

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/dingdxx", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    var api = __webpack_require__(14);
	    __weex_module__.exports ={
	        data: function () {return {
	            title:"",
	            clxx:[
	                {
	                    ddje: "",
	                    ddzt: "",
	                    ddlx: "",
	                    ddh: "",
	                    ddsj: "",
	                },
	            ],
	        }},
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
	        "title",
	        "pr20",
	        "pl20"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "title-txt"
	          ],
	          "attr": {
	            "value": function () {return this.title}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "dingdaninfo"
	      ],
	      "repeat": {
	        "expression": function () {return this.dingdxx},
	        "value": "data"
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
	                "value": "订单金额："
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "info-txt2",
	                "red"
	              ],
	              "attr": {
	                "value": function () {return '￥' + (this.data.ddje)}
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
	                "value": "订单状态："
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "info-txt2"
	              ],
	              "attr": {
	                "value": function () {return this.data.ddzt}
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
	                "value": "订单类型："
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "info-txt2"
	              ],
	              "attr": {
	                "value": function () {return this.data.ddlx}
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
	                "value": function () {return this.data.ddh}
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
	                "value": "订单时间："
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "info-txt2"
	              ],
	              "attr": {
	                "value": function () {return this.data.ddsj.slice(0,16)}
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
	    "backgroundColor": "#ffffff",
	    "marginTop": 20,
	    "borderWidth": 1,
	    "borderColor": "#e6e6e6"
	  },
	  "pr20": {
	    "paddingRight": 20
	  },
	  "pl20": {
	    "paddingLeft": 10
	  },
	  "title": {
	    "paddingTop": 20,
	    "paddingBottom": 10,
	    "borderBottomWidth": 1,
	    "borderColor": "#e6e6e6",
	    "marginLeft": 10,
	    "marginRight": 10
	  },
	  "title-txt": {
	    "fontSize": 32,
	    "color": "#373634"
	  },
	  "dingdaninfo": {
	    "padding": 20,
	    "borderWidth": 1,
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
	  "jiantou": {
	    "width": 47,
	    "height": 47,
	    "position": "absolute",
	    "top": 130,
	    "right": 20
	  },
	  "red": {
	    "color": "#E95412"
	  }
	})
	})

/***/ },
/* 19 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/weixiuby", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __weex_module__.exports = {
	        data: function () {return {
	            title: "",
	            youhui:"",
	            zje:"",
	            wtms:"",
	            weixiuby: [],
	        }},
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
	        "title",
	        "pr20",
	        "pl20"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "title-txt"
	          ],
	          "attr": {
	            "value": function () {return this.title}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "dingdaninfo"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "info"
	          ],
	          "repeat": function () {return this.weixiuby},
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "info-txt1"
	              ],
	              "attr": {
	                "value": function () {return this.programName}
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
	                    "info-txt2",
	                    "hui"
	                  ],
	                  "style": {
	                    "textDecoration": "line-through"
	                  },
	                  "attr": {
	                    "value": function () {return '￥' + (this.cost)}
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "info-txt2",
	                    "red"
	                  ],
	                  "style": {
	                    "marginLeft": 10
	                  },
	                  "attr": {
	                    "value": function () {return '￥' + (this.bargain)}
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "style": {
	            "height": 1,
	            "width": 750,
	            "backgroundColor": "#e6e6e6",
	            "marginLeft": -20,
	            "marginTop": -1
	          }
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
	                "value": "优惠金额："
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "info-txt2",
	                "red"
	              ],
	              "attr": {
	                "value": function () {return '–￥' + (this.youhui)}
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
	                "value": "总金额："
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "info-txt2",
	                "red"
	              ],
	              "attr": {
	                "value": function () {return '￥' + (this.zje)}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "style": {
	            "flexDirection": "row",
	            "width": 750,
	            "paddingBottom": 15,
	            "paddingTop": 15
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "info-txt2"
	              ],
	              "style": {
	                "fontSize": 30,
	                "color": "#737373"
	              },
	              "attr": {
	                "value": "维修问题描述："
	              }
	            },
	            {
	              "type": "div",
	              "style": {
	                "justifyContent": "flex-end"
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "info-txt2"
	                  ],
	                  "style": {
	                    "width": 500,
	                    "marginTop": 3,
	                    "textAlign": "right"
	                  },
	                  "attr": {
	                    "value": function () {return this.wtms||'没有写维修问题描述哦~'}
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
	  "main": {
	    "backgroundColor": "#ffffff",
	    "marginTop": 20,
	    "borderWidth": 1,
	    "borderColor": "#e6e6e6"
	  },
	  "pr20": {
	    "paddingRight": 20
	  },
	  "pl20": {
	    "paddingLeft": 10
	  },
	  "title": {
	    "paddingTop": 20,
	    "paddingBottom": 10,
	    "borderBottomWidth": 1,
	    "borderColor": "#e6e6e6",
	    "marginLeft": 10,
	    "marginRight": 10
	  },
	  "title-txt": {
	    "fontSize": 32,
	    "color": "#373634"
	  },
	  "dingdaninfo": {
	    "paddingLeft": 20,
	    "paddingRight": 20,
	    "borderWidth": 1,
	    "borderColor": "#e6e6e6"
	  },
	  "info": {
	    "paddingBottom": 15,
	    "paddingTop": 15,
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "borderBottomWidth": 1,
	    "borderColor": "#e6e6e6"
	  },
	  "info-txt1": {
	    "color": "#737373",
	    "fontSize": 30,
	    "width": 480,
	    "lines": 1,
	    "textOverflow": "ellipsis"
	  },
	  "info-txt2": {
	    "color": "#A0A0A0",
	    "fontSize": 28
	  },
	  "red": {
	    "color": "#E95412"
	  },
	  "hui": {
	    "color": "#a0a0a0"
	  }
	})
	})

/***/ },
/* 20 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/zhifuxinxi", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __weex_module__.exports = {
	        data: function () {return {
	            title: "",
	            sj:"",
	            zhifu: [
	                {
	                    zfje: "",
	                    zffs: "",
	                    hbdk: "",
	                    jfdk: "",
	                    time: "",
	                },
	            ],
	        }},
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
	        "title",
	        "pr20",
	        "pl20"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "title-txt"
	          ],
	          "attr": {
	            "value": function () {return this.title}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
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
	                "value": "支付金额："
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "info-txt2",
	                "red"
	              ],
	              "attr": {
	                "value": function () {return '￥' + (this.zhifu.zfje)}
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
	                "value": "支付方式："
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "info-txt2"
	              ],
	              "attr": {
	                "value": function () {return this.zhifu.zffs}
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
	                "value": "红包抵扣："
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "info-txt2",
	                "red"
	              ],
	              "attr": {
	                "value": function () {return '￥' + (this.zhifu.hbdk)}
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
	                "value": "积分抵扣："
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "info-txt2",
	                "red"
	              ],
	              "attr": {
	                "value": function () {return '￥' + (this.zhifu.jfdk||0)}
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
	                "value": "支付时间："
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "info-txt2"
	              ],
	              "attr": {
	                "value": function () {return this.sj.slice(0,16)}
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
	    "backgroundColor": "#ffffff",
	    "marginTop": 20,
	    "borderWidth": 1,
	    "borderColor": "#e6e6e6"
	  },
	  "pr20": {
	    "paddingRight": 20
	  },
	  "pl20": {
	    "paddingLeft": 10
	  },
	  "title": {
	    "paddingTop": 20,
	    "paddingBottom": 10,
	    "borderBottomWidth": 1,
	    "borderColor": "#e6e6e6",
	    "marginLeft": 10,
	    "marginRight": 10
	  },
	  "title-txt": {
	    "fontSize": 32,
	    "color": "#373634"
	  },
	  "dingdaninfo": {
	    "padding": 20,
	    "borderWidth": 1,
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
	  "jiantou": {
	    "width": 47,
	    "height": 47,
	    "position": "absolute",
	    "top": 130,
	    "right": 20
	  },
	  "red": {
	    "color": "#E95412"
	  }
	})
	})

/***/ },
/* 21 */
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