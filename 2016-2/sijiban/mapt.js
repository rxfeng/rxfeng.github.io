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
/***/ function(module, exports) {

	;__weex_define__("@weex-component/91d7e0f0bd9d24b812a0a5ddec3f1699", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    var list = [];
	    __weex_module__.exports = {
	        data: function () {return {
	            ll: 123,
	            ll1: 11,
	            lines: [
	                [
	                    [31.411049, 120.639186,time,sudu,jiaodu],
	                    [31.410756, 120.641761],
	                    [31.409951, 120.645194],
	                    [31.407643, 120.652318],
	                    [31.404421, 120.660429],
	                    [31.400757, 120.678110],
	                    [31.395262, 120.688581],
	                    [31.387423, 120.703602],
	                    [31.376358, 120.740466],
	                    [31.373281, 120.754886],
	                    [31.367564, 120.760207],
	                    [31.358476, 120.762782],
	                    [31.347921, 120.765014],
	                    [31.347042, 120.745959],
	                    [31.342352, 120.725361],
	                    [31.342937, 120.717978],
	                    [31.346602, 120.718322],
	                    [31.352466, 120.717807],
	                    [31.356277, 120.716948],
	                    [31.359942, 120.709224],
	                    [31.356571, 120.688453],
	                    [31.354519, 120.679355],
	                    [31.348948, 120.681415]
	                ]
	            ],
	            ll2: 11,
	            ll3: 11,
	            position: [39.885826, 116.4106],
	            zoom: 12,
	            markers: [{
	                position: [39.906901, 116.397972],
	                title: "天安门",
	                icon: "http://www.yixiucar.com/app/user/images/sya.png",
	                info: {url: "http://192.168.0.137:8080/dist/info.js", data: {}}
	            }, {position: [39.885826, 116.4106], title: "天坛", info: {url: "", data: {a: 123, b: 1223}}}]
	        }},
	        methods: {
	            search: function (e) {
	                var _this = this;
	                var amap = __weex_require__('@weex-module/amap');
	                amap.poiSearch({
	                    key: "中石化",
	                    city: "苏州",
	                    pageSize: 2,
	                    postion: {lat: 31.410477, lon: 120.63879, radius: 1000}
	                }, function (e) {
	                    _this.ll1 = e.data;
	                });
	            },
	            start: function (e) {
	                var geolocation = __weex_require__('@weex-module/geolocation');
	                geolocation.watchPosition({}, "geolocation");
	            },
	            onCameraChange: function (e) {
	                this.ll = e.data;
	            },
	            oncamerachangefinish: function (e) {
	                this.ll1 = e.data;
	                this.markers = [{
	                    position: [e.data.target.latitude, e.data.target.longitude],
	                    title: "天安门",
	                    icon: "http://www.yixiucar.com/app/user/images/sya.png",
	                    info: {url: "http://192.168.0.137:8080/dist/info.js", id: "ccc"}
	                }, {position: [39.885826, 116.4106], title: "天坛", info: {url: "", data: {a: 123, b: 1223}}}];
	            },
	            oninfoclick: function (e) {
	                this.ll2 = e.data;
	            },
	            zoomclick: function (e) {
	                this.zoom--;
	            },
	            positionClick: function (e) {
	                this.position = [39.885826, 116.4106];
	            },
	            l3click: function (e) {
	                var _this = this;
	                var storage = __weex_require__('@weex-module/storage');
	                storage.getItem("list", function (e) {
	                    _this.ll2 = e.data;
	                });
	            }
	        },
	        ready: function (e) {
	            //alert(e);
	            var _this = this;
	            var a = 0;

	            var globalEvent = __weex_require__('@weex-module/globalEvent');
	            globalEvent.addEventListener("geolocation", function (e) {
	                //console.log("get geolocation")
	                _this.ll3 = e.data;
	                _this.position = [e.data.latitude, e.data.longitude];
	                list[a++] = e.data;
	                var storage = __weex_require__('@weex-module/storage');
	                storage.setItem('list', list, function (e) {
	                });
	            });
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "children": [
	    {
	      "type": "text",
	      "events": {
	        "click": "start"
	      },
	      "attr": {
	        "value": "123456"
	      }
	    },
	    {
	      "type": "amap",
	      "classList": [
	        "bg"
	      ],
	      "attr": {
	        "zoom": function () {return this.zoom},
	        "lines": function () {return this.lines},
	        "position": function () {return this.position},
	        "markers": function () {return this.markers}
	      },
	      "events": {
	        "infoclick": "oninfoclick",
	        "camerachangefinish": "oncamerachangefinish",
	        "camerachange": "onCameraChange"
	      }
	    },
	    {
	      "type": "text",
	      "style": {
	        "height": 80
	      },
	      "events": {
	        "click": "search"
	      },
	      "attr": {
	        "value": "搜索"
	      }
	    },
	    {
	      "type": "scroller",
	      "children": [
	        {
	          "type": "div",
	          "id": "ccc",
	          "events": {
	            "click": "zoomclick"
	          },
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.ll}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "id": "ccc",
	          "events": {
	            "click": "positionClick"
	          },
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.ll1}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "id": "ccc",
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.ll2}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "id": "ccc",
	          "events": {
	            "click": "l3click"
	          },
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.ll3}
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
	  "bg": {
	    "width": 750,
	    "height": 450,
	    "borderWidth": 1,
	    "borderColor": "#FF0000"
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/91d7e0f0bd9d24b812a0a5ddec3f1699", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);