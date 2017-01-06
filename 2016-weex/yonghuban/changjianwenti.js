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

	;__weex_define__("@weex-component/0d0c946ec92ddd675394696fc1058631", [], function(__weex_require__, __weex_exports__, __weex_module__){
	__webpack_require__(1);
	__webpack_require__(15);
	__webpack_require__(16);
	__webpack_require__(17);
	__webpack_require__(18);
	__webpack_require__(19);
	__webpack_require__(20);
	__webpack_require__(21);
	__webpack_require__(22);
	__webpack_require__(23);

	;
	    var api = __webpack_require__(14);
	    __weex_module__.exports = {
	        data: function () {return {
	            dir: api.dir,
	            yudingflag: false,
	            daijiaflag: false,
	            zixunflag: false,
	            xicheflag: false,
	            jiayouflag: false,
	            jiuyuanflag: false,
	            zhifuflag: false,
	            dingdanflag: false,
	            jifenhongbaoflag:false,
	            youhuiflag: false,
	            weizhangflag: false,
	            qitaflag: false,
	            telPhone: "4006-655-679",
	        }},
	        methods: {
	            bohao: function (e) {
	                __weex_require__('@weex-module/dialanumber').boHao(this.telPhone);
	            },
	            lianxikefu: function (e) {
	              api.tost("敬请稍后");
	            },
	            ydwt: function (e) {
	                this.yudingflag = this.yudingflag?false:true;
	                if(this.yudingflag){
	                    this.daijiaflag=false;
	                    this.zixunflag=false;
	                    this.xicheflag=false;
	                    this.jiayouflag=false;
	                    this.jiuyuanflag=false;
	                    this.zhifuflag=false;
	                    this.dingdanflag=false;
	                    this.jifenhongbaoflag=false;
	                    this.youhuiflag=false;
	                    this.weizhangflag=false;
	                    this.qitaflag=false;
	                }
	            },
	            djwt: function (e) {
	                this.daijiaflag = this.daijiaflag?false:true;
	                if(this.daijiaflag){
	                    this.yudingflag=false;
	                    this.zixunflag=false;
	                    this.xicheflag=false;
	                    this.jiayouflag=false;
	                    this.jiuyuanflag=false;
	                    this.zhifuflag=false;
	                    this.dingdanflag=false;
	                    this.jifenhongbaoflag=false;
	                    this.youhuiflag=false;
	                    this.weizhangflag=false;
	                    this.qitaflag=false;
	                }
	            },
	            zxwt: function (e) {
	                this.zixunflag = this.zixunflag?false:true;
	                if(this.zixunflag){
	                    this.yudingflag=false;
	                    this.daijiaflag=false;
	                    this.xicheflag=false;
	                    this.jiayouflag=false;
	                    this.jiuyuanflag=false;
	                    this.zhifuflag=false;
	                    this.dingdanflag=false;
	                    this.jifenhongbaoflag=false;
	                    this.youhuiflag=false;
	                    this.weizhangflag=false;
	                    this.qitaflag=false;
	                }
	            },
	            xcwt: function (e) {
	                this.xicheflag = this.xicheflag?false:true;
	                if(this.xicheflag){
	                    this.yudingflag=false;
	                    this.daijiaflag=false;
	                    this.zixunflag=false;
	                    this.jiayouflag=false;
	                    this.jiuyuanflag=false;
	                    this.zhifuflag=false;
	                    this.dingdanflag=false;
	                    this.jifenhongbaoflag=false;
	                    this.youhuiflag=false;
	                    this.weizhangflag=false;
	                    this.qitaflag=false;
	                }
	            },
	            jywt: function (e) {
	                this.jiayouflag = this.jiayouflag?false:true;
	                if(this.jiayouflag){
	                    this.yudingflag=false;
	                    this.daijiaflag=false;
	                    this.zixunflag=false;
	                    this.xicheflag=false;
	                    this.jiuyuanflag=false;
	                    this.zhifuflag=false;
	                    this.dingdanflag=false;
	                    this.jifenhongbaoflag=false;
	                    this.youhuiflag=false;
	                    this.weizhangflag=false;
	                    this.qitaflag=false;
	                }
	            },
	            jy1wt: function (e) {
	                this.jiuyuanflag = this.jiuyuanflag?false:true;
	                if(this.jiuyuanflag){
	                    this.yudingflag=false;
	                    this.daijiaflag=false;
	                    this.zixunflag=false;
	                    this.xicheflag=false;
	                    this.jiayouflag=false;
	                    this.zhifuflag=false;
	                    this.dingdanflag=false;
	                    this.jifenhongbaoflag=false;
	                    this.youhuiflag=false;
	                    this.weizhangflag=false;
	                    this.qitaflag=false;
	                }
	            },
	            zfwt: function (e) {
	                this.zhifuflag = this.zhifuflag?false:true;
	                if(this.zhifuflag){
	                    this.yudingflag=false;
	                    this.daijiaflag=false;
	                    this.zixunflag=false;
	                    this.xicheflag=false;
	                    this.jiayouflag=false;
	                    this.jiuyuanflag=false;
	                    this.dingdanflag=false;
	                    this.jifenhongbaoflag=false;
	                    this.youhuiflag=false;
	                    this.weizhangflag=false;
	                    this.qitaflag=false;
	                }
	            },
	            ddwt: function (e) {
	                this.dingdanflag = this.dingdanflag?false:true;
	                if(this.dingdanflag){
	                    this.yudingflag=false;
	                    this.daijiaflag=false;
	                    this.zixunflag=false;
	                    this.xicheflag=false;
	                    this.jiayouflag=false;
	                    this.jiuyuanflag=false;
	                    this.zhifuflag=false;
	                    this.jifenhongbaoflag=false;
	                    this.youhuiflag=false;
	                    this.weizhangflag=false;
	                    this.qitaflag=false;
	                }
	            },
	            jfhbwt: function (e) {
	                this.jifenhongbaoflag = this.jifenhongbaoflag?false:true;
	                if(this.jifenhongbaoflag){
	                    this.yudingflag=false;
	                    this.daijiaflag=false;
	                    this.zixunflag=false;
	                    this.xicheflag=false;
	                    this.jiayouflag=false;
	                    this.jiuyuanflag=false;
	                    this.zhifuflag=false;
	                    this.dingdanflag=false;
	                    this.youhuiflag=false;
	                    this.weizhangflag=false;
	                    this.qitaflag=false;
	                }
	            },
	            yhwt: function (e) {
	                this.youhuiflag = this.youhuiflag?false:true;
	                if(this.youhuiflag){
	                    this.yudingflag=false;
	                    this.daijiaflag=false;
	                    this.zixunflag=false;
	                    this.xicheflag=false;
	                    this.jiayouflag=false;
	                    this.jiuyuanflag=false;
	                    this.zhifuflag=false;
	                    this.dingdanflag=false;
	                    this.jifenhongbaoflag=false;
	                    this.weizhangflag=false;
	                    this.qitaflag=false;
	                }
	            },
	            wzwt: function (e) {
	                this.weizhangflag = this.weizhangflag?false:true;
	                if(this.weizhangflag){
	                    this.yudingflag=false;
	                    this.daijiaflag=false;
	                    this.zixunflag=false;
	                    this.xicheflag=false;
	                    this.jiayouflag=false;
	                    this.jiuyuanflag=false;
	                    this.zhifuflag=false;
	                    this.dingdanflag=false;
	                    this.jifenhongbaoflag=false;
	                    this.youhuiflag=false;
	                    this.qitaflag=false;
	                }
	            },
	            qtwt: function (e) {
	                this.qitaflag = this.qitaflag?false:true;
	                if(this.qitaflag){
	                    this.yudingflag=false;
	                    this.daijiaflag=false;
	                    this.zixunflag=false;
	                    this.xicheflag=false;
	                    this.jiayouflag=false;
	                    this.jiuyuanflag=false;
	                    this.zhifuflag=false;
	                    this.dingdanflag=false;
	                    this.jifenhongbaoflag=false;
	                    this.youhuiflag=false;
	                    this.weizhangflag=false;
	                }
	            },
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "xx-navpage",
	  "attr": {
	    "navtitle": "常见问题",
	    "navrighttitle": "",
	    "navrighturl": "",
	    "navrightsrc": "",
	    "navlefturl": "wode.js",
	    "navleftsrc": function () {return (this.dir) + 'images/fanhui.png'},
	    "bg": "#F5F3F8"
	  },
	  "children": [
	    {
	      "type": "scroller",
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "box"
	          ],
	          "events": {
	            "click": "ydwt"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "box-txt"
	              ],
	              "attr": {
	                "value": "预约问题"
	              }
	            },
	            {
	              "type": "image",
	              "classList": [
	                "jiao"
	              ],
	              "shown": function () {return this.yudingflag},
	              "attr": {
	                "src": function () {return (this.dir) + 'images/xiajiaobiao.png'}
	              }
	            },
	            {
	              "type": "image",
	              "classList": [
	                "jiao"
	              ],
	              "shown": function () {return !this.yudingflag},
	              "attr": {
	                "src": function () {return (this.dir) + 'images/right-jiao.fw.png'}
	              }
	            }
	          ]
	        },
	        {
	          "type": "zi-cjwt-yuding",
	          "shown": function () {return this.yudingflag}
	        },
	        {
	          "type": "div",
	          "classList": [
	            "box"
	          ],
	          "events": {
	            "click": "djwt"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "box-txt"
	              ],
	              "attr": {
	                "value": "代驾问题"
	              }
	            },
	            {
	              "type": "image",
	              "classList": [
	                "jiao"
	              ],
	              "shown": function () {return this.daijiaflag},
	              "attr": {
	                "src": function () {return (this.dir) + 'images/xiajiaobiao.png'}
	              }
	            },
	            {
	              "type": "image",
	              "classList": [
	                "jiao"
	              ],
	              "shown": function () {return !this.daijiaflag},
	              "attr": {
	                "src": function () {return (this.dir) + 'images/right-jiao.fw.png'}
	              }
	            }
	          ]
	        },
	        {
	          "type": "zi-cjwt-daijia",
	          "shown": function () {return this.daijiaflag}
	        },
	        {
	          "type": "div",
	          "classList": [
	            "box"
	          ],
	          "events": {
	            "click": "zxwt"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "box-txt"
	              ],
	              "attr": {
	                "value": "咨询问题"
	              }
	            },
	            {
	              "type": "image",
	              "classList": [
	                "jiao"
	              ],
	              "shown": function () {return this.zixunflag},
	              "attr": {
	                "src": function () {return (this.dir) + 'images/xiajiaobiao.png'}
	              }
	            },
	            {
	              "type": "image",
	              "classList": [
	                "jiao"
	              ],
	              "shown": function () {return !this.zixunflag},
	              "attr": {
	                "src": function () {return (this.dir) + 'images/right-jiao.fw.png'}
	              }
	            }
	          ]
	        },
	        {
	          "type": "zi-cjwt-zixun",
	          "shown": function () {return this.zixunflag}
	        },
	        {
	          "type": "div",
	          "classList": [
	            "box"
	          ],
	          "events": {
	            "click": "xcwt"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "box-txt"
	              ],
	              "attr": {
	                "value": "洗车问题"
	              }
	            },
	            {
	              "type": "image",
	              "classList": [
	                "jiao"
	              ],
	              "shown": function () {return this.xicheflag},
	              "attr": {
	                "src": function () {return (this.dir) + 'images/xiajiaobiao.png'}
	              }
	            },
	            {
	              "type": "image",
	              "classList": [
	                "jiao"
	              ],
	              "shown": function () {return !this.xicheflag},
	              "attr": {
	                "src": function () {return (this.dir) + 'images/right-jiao.fw.png'}
	              }
	            }
	          ]
	        },
	        {
	          "type": "zi-cjwt-xiche",
	          "shown": function () {return this.xicheflag}
	        },
	        {
	          "type": "div",
	          "classList": [
	            "box"
	          ],
	          "events": {
	            "click": "jywt"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "box-txt"
	              ],
	              "attr": {
	                "value": "加油问题"
	              }
	            },
	            {
	              "type": "image",
	              "classList": [
	                "jiao"
	              ],
	              "shown": function () {return this.jiayouflag},
	              "attr": {
	                "src": function () {return (this.dir) + 'images/xiajiaobiao.png'}
	              }
	            },
	            {
	              "type": "image",
	              "classList": [
	                "jiao"
	              ],
	              "shown": function () {return !this.jiayouflag},
	              "attr": {
	                "src": function () {return (this.dir) + 'images/right-jiao.fw.png'}
	              }
	            }
	          ]
	        },
	        {
	          "type": "zi-cjwt-jiayou",
	          "shown": function () {return this.jiayouflag}
	        },
	        {
	          "type": "div",
	          "classList": [
	            "box"
	          ],
	          "events": {
	            "click": "jy1wt"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "box-txt"
	              ],
	              "attr": {
	                "value": "救援问题"
	              }
	            },
	            {
	              "type": "image",
	              "classList": [
	                "jiao"
	              ],
	              "shown": function () {return this.jiuyuanflag},
	              "attr": {
	                "src": function () {return (this.dir) + 'images/xiajiaobiao.png'}
	              }
	            },
	            {
	              "type": "image",
	              "classList": [
	                "jiao"
	              ],
	              "shown": function () {return !this.jiuyuanflag},
	              "attr": {
	                "src": function () {return (this.dir) + 'images/right-jiao.fw.png'}
	              }
	            }
	          ]
	        },
	        {
	          "type": "zi-cjwt-jiuyuan",
	          "shown": function () {return this.jiuyuanflag}
	        },
	        {
	          "type": "div",
	          "classList": [
	            "box"
	          ],
	          "events": {
	            "click": "zfwt"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "box-txt"
	              ],
	              "attr": {
	                "value": "支付问题"
	              }
	            },
	            {
	              "type": "image",
	              "classList": [
	                "jiao"
	              ],
	              "shown": function () {return this.zhifuflag},
	              "attr": {
	                "src": function () {return (this.dir) + 'images/xiajiaobiao.png'}
	              }
	            },
	            {
	              "type": "image",
	              "classList": [
	                "jiao"
	              ],
	              "shown": function () {return !this.zhifuflag},
	              "attr": {
	                "src": function () {return (this.dir) + 'images/right-jiao.fw.png'}
	              }
	            }
	          ]
	        },
	        {
	          "type": "zi-cjwt-zhifu",
	          "shown": function () {return this.zhifuflag}
	        },
	        {
	          "type": "div",
	          "classList": [
	            "box"
	          ],
	          "events": {
	            "click": "ddwt"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "box-txt"
	              ],
	              "attr": {
	                "value": "订单问题"
	              }
	            },
	            {
	              "type": "image",
	              "classList": [
	                "jiao"
	              ],
	              "shown": function () {return this.dingdanflag},
	              "attr": {
	                "src": function () {return (this.dir) + 'images/xiajiaobiao.png'}
	              }
	            },
	            {
	              "type": "image",
	              "classList": [
	                "jiao"
	              ],
	              "shown": function () {return !this.dingdanflag},
	              "attr": {
	                "src": function () {return (this.dir) + 'images/right-jiao.fw.png'}
	              }
	            }
	          ]
	        },
	        {
	          "type": "zi-cjwt-dingdan",
	          "shown": function () {return this.dingdanflag}
	        },
	        {
	          "type": "div",
	          "classList": [
	            "box"
	          ],
	          "events": {
	            "click": "jfhbwt"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "box-txt"
	              ],
	              "attr": {
	                "value": "积分红包问题"
	              }
	            },
	            {
	              "type": "image",
	              "classList": [
	                "jiao"
	              ],
	              "shown": function () {return this.jifenhongbaoflag},
	              "attr": {
	                "src": function () {return (this.dir) + 'images/xiajiaobiao.png'}
	              }
	            },
	            {
	              "type": "image",
	              "classList": [
	                "jiao"
	              ],
	              "shown": function () {return !this.jifenhongbaoflag},
	              "attr": {
	                "src": function () {return (this.dir) + 'images/right-jiao.fw.png'}
	              }
	            }
	          ]
	        },
	        {
	          "type": "zi-cjwt-jifenhongbao",
	          "shown": function () {return this.jifenhongbaoflag}
	        },
	        {
	          "type": "div",
	          "style": {
	            "height": 100
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "bottom"
	      ],
	      "events": {
	        "click": "lianxikefu"
	      },
	      "children": [
	        {
	          "type": "text",
	          "style": {
	            "fontSize": 30
	          },
	          "attr": {
	            "value": "咨询客服"
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "box": {
	    "width": 690,
	    "borderWidth": 1,
	    "borderColor": "#cccccc",
	    "backgroundColor": "#ffffff",
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "padding": 20,
	    "marginLeft": 30,
	    "marginRight": 30,
	    "borderRadius": 10,
	    "marginTop": 20
	  },
	  "box-txt": {
	    "fontSize": 32,
	    "color": "#373634"
	  },
	  "jiao": {
	    "width": 37,
	    "height": 37
	  },
	  "bottom": {
	    "width": 750,
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "position": "fixed",
	    "bottom": 0,
	    "backgroundColor": "#ffffff",
	    "paddingBottom": 20,
	    "paddingTop": 20,
	    "borderTopWidth": 1,
	    "borderColor": "#e6e6e6"
	  },
	  "dianhua": {
	    "width": 50,
	    "height": 50,
	    "marginRight": 5
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/0d0c946ec92ddd675394696fc1058631", {
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

	;__weex_define__("@weex-component/zi-cjwt-yuding", [], function(__weex_require__, __weex_exports__, __weex_module__){

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

/***/ },
/* 16 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/zi-cjwt-daijia", [], function(__weex_require__, __weex_exports__, __weex_module__){

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
	        "value": "问题一：上门取送车服务是谁来提供？"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "shsj"
	      ],
	      "attr": {
	        "value": "上门取送车是由一修车管家代驾人员或与一修签订服务协议的代驾公司人员提供。"
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
	        "value": "问题二：上门取送车服务包含哪些内容"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "shsj"
	      ],
	      "attr": {
	        "value": "上门取送车服务是指代驾人员按指定地址上门取车，代驾至商家进行保养，保养完成后代驾人员送回指定地点。"
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
	        "value": "问题三：如果代驾过程中出了问题怎么办？"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "shsj"
	      ],
	      "attr": {
	        "value": "所有的代驾服务均进行了保险投保，整个代驾过程可以查看行车轨迹和行车记录仪。若上门取送车有任何问题，您还可直接联系一修车管家客服出面协助解决，具体详情查看一修车管家用户代驾协议。"
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

/***/ },
/* 17 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/zi-cjwt-zixun", [], function(__weex_require__, __weex_exports__, __weex_module__){

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
	        "value": "问题一：平台上的专家是怎么认证的？"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "shsj"
	      ],
	      "attr": {
	        "value": "全国4S店的技术人员在得到品牌厂家的技术认证书后向一修车管家申请并审核通过的。"
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
	        "value": "问题二：平台专家可以提供什么咨询服务？"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "shsj"
	      ],
	      "attr": {
	        "value": "平台专家可以为您提供您需要的合理维修保养方案，并解答您所遇见的问题，帮您节省不必要的费用。"
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
	        "value": "问题三：我对4S店或者维修店的方案和价格有疑问，如何选择合适的版块提问？"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "shsj"
	      ],
	      "attr": {
	        "value": "您可以选择专家在线咨询，通过在线聊天的方式便捷快速的帮您解决问题。"
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
	        "value": "问题四：我如何选择合适的专家咨询，系统可以推荐专家吗？"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "shsj"
	      ],
	      "attr": {
	        "value": "选择相应品牌，进入权威专家在线咨询，系统可以给您推荐相应厂家认证专家。"
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
	        "value": "问题五：专家咨询需要费用吗？"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "shsj"
	      ],
	      "attr": {
	        "value": "只需要您支付一定的积分来咨询专家，同时也可以分享你的咨询答案赚取积分。"
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

/***/ },
/* 18 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/zi-cjwt-xiche", [], function(__weex_require__, __weex_exports__, __weex_module__){

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
	        "value": "问题一：洗车可以使用积分吗？积分洗车是否不限商家？"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "shsj"
	      ],
	      "attr": {
	        "value": "您可以使用积分洗车，但仅限于与平台合作的洗车商家。"
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
	        "value": "问题二：洗车订单支付后是否可以取消订单？"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "shsj"
	      ],
	      "attr": {
	        "value": "可以，支付的积分或者现金会返还您的账号。"
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

/***/ },
/* 19 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/zi-cjwt-jiayou", [], function(__weex_require__, __weex_exports__, __weex_module__){

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
	        "value": "问题一：目前系统支持中石油加油卡在线支付加油费用吗？"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "shsj"
	      ],
	      "attr": {
	        "value": "目前系统暂不支持中石油或中石化加油卡在线支付加油费用。"
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

/***/ },
/* 20 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/zi-cjwt-jiuyuan", [], function(__weex_require__, __weex_exports__, __weex_module__){

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
	        "value": "问题一：我提交拖车救援信息后，发现附近暂时没有拖车，如何处理？"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "shsj"
	      ],
	      "attr": {
	        "value": "您可以拨打紧急救援电话，平台会立即安排附近拖车人员立即开往救援地点。"
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
	        "value": "问题二：我提交维修救援信息后怎么办？"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "shsj"
	      ],
	      "attr": {
	        "value": "商家接到你的救援信息后会马上派单到维修人员，维修人员接单后你即可看到救援车辆出发行驶轨迹和维修人员电话信息。"
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

/***/ },
/* 21 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/zi-cjwt-zhifu", [], function(__weex_require__, __weex_exports__, __weex_module__){

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
	        "value": "问题一：一修车管家支持的支付方式有哪些？"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "shsj"
	      ],
	      "attr": {
	        "value": "目前支持微信、支付宝。支付时可根据当前消费业务使用您的积分或红包去抵扣部分费用。"
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
	        "value": "问题一：我支付的维修保养费用直接到商家吗？"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "shsj"
	      ],
	      "attr": {
	        "value": "不是，你的支付暂且到一修车管家平台账户，等你评价满意后才会支付到商家。"
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

/***/ },
/* 22 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/zi-cjwt-dingdan", [], function(__weex_require__, __weex_exports__, __weex_module__){

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

/***/ },
/* 23 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/zi-cjwt-jifenhongbao", [], function(__weex_require__, __weex_exports__, __weex_module__){

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
	        "value": "问题一：我怎样获得积分或者维修红包？"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "shsj"
	      ],
	      "attr": {
	        "value": "积分获得的方式为首次注册、用户充值、分享好友，商家消费返点，专家咨询答案分享等，红包获得的方式为商家消费增送，平台活动增送等。"
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
	        "value": "问题二：积分或者维修红包有什么区别？"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt",
	        "shsj"
	      ],
	      "attr": {
	        "value": "积分使用范围为洗车，专家咨询，救援等非维修保养业务。维修红包分商家红包和平台红包，商家红包使用只限本商家维修金额抵扣，平台维修红包适合全场商家维修金额抵扣。"
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

/***/ }
/******/ ]);