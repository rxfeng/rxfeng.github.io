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

	;__weex_define__("@weex-component/d0c57f71a9d6139e49532a2634ea32f1", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    var api=__webpack_require__(1);
	    __weex_module__.exports = {
	        data: function () {return {
	            dir:api.dir,
	            mdd: "",
	            lat: "",
	            lon: "",
	        }},
	        methods:{
	            daohangclick: function (e) {
	                api.get("lnglat", function (e) {
	                    __weex_require__('@weex-module/navi').Navi(JSON.parse(e.data).lat, JSON.parse(e.data).lon);
	                });
	            },
	            viewappear: function (e) {
	                var _this = this;
	                api.get("info", function (e) {
	                    var info1 = JSON.parse(e.data);
	                    api.log(e.data)
	                    _this.mdd = info1.address;
	                    _this.lat = info1.lat;
	                    _this.lon = info1.lon;
	                    api.save("info", " ");
	                });
	            },
	            weizhiclick: function (e) {
	                api.push("weizhi.js");
	            },
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "container",
	  "events": {
	    "viewappear": "viewappear"
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "mdd"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "md"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "md-txt1"
	              ],
	              "attr": {
	                "value": "目的地"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "md-txt2"
	              ],
	              "style": {
	                "width": 550
	              },
	              "attr": {
	                "value": function () {return this.mdd}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "xgmd"
	          ],
	          "events": {
	            "click": "weizhiclick"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "xgmd-txt"
	              ],
	              "attr": {
	                "value": "修改目的地"
	              }
	            },
	            {
	              "type": "image",
	              "attr": {
	                "src": function () {return (this.dir) + 'images/right-jiao.fw.png'}
	              },
	              "classList": [
	                "gomdd"
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "mdimg"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "events": {
	                "click": "daohangclick"
	              },
	              "attr": {
	                "src": function () {return (this.dir) + 'images/mdd.png'}
	              },
	              "classList": [
	                "mddmig"
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
	  "mdd": {
	    "flexDirection": "row",
	    "paddingTop": 5,
	    "paddingBottom": 5,
	    "backgroundColor": "#ffffff",
	    "borderBottomWidth": 1,
	    "borderColor": "#e6e6e6"
	  },
	  "md": {
	    "marginLeft": 50,
	    "borderRightWidth": 2,
	    "borderColor": "#e6e6e6"
	  },
	  "md-txt1": {
	    "fontSize": 40,
	    "color": "#373634"
	  },
	  "md-txt2": {
	    "fontSize": 30,
	    "color": "#a0a0a0",
	    "marginTop": 10
	  },
	  "xgmd": {
	    "flexDirection": "row",
	    "position": "absolute",
	    "top": 30,
	    "right": 150,
	    "paddingRight": 15
	  },
	  "xgmd-txt": {
	    "color": "#373634",
	    "fontSize": 30,
	    "marginTop": -5
	  },
	  "gomdd": {
	    "width": 37,
	    "height": 37,
	    "marginTop": -5
	  },
	  "mdimg": {
	    "position": "absolute",
	    "top": 40,
	    "right": 40
	  },
	  "mddmig": {
	    "width": 80,
	    "height": 80
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/d0c57f71a9d6139e49532a2634ea32f1", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/api", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    //     var API_URL = "http://192.168.0.155:8080/IkkyuChegj/";    //小安
	         var API_URL = "http://192.168.0.160:8080/IkkyuChegj/";    //冯浩
	//    var API_URL = "http://192.168.0.172:8080/IkkyuChegj/";   //小黄
	//        var API_URL = "http://www.yixiucar.com/yxapi/";       //郭总
	//    var SERVER_URL = "http://192.168.0.221:63344/2016-2/yonghuban/";
	//        var SERVER_URL = "http://192.168.0.221:63344/2016-2/shangjiaban/";
	        	var SERVER_URL = "http://192.168.0.221:63344/2016-2/sijiban/";
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

/***/ }
/******/ ]);