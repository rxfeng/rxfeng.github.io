/**
 * Created by rxfeng on 2016/5/5.
 */
window.onload = function () {
//    酒店页面中搜索框
    var indexSearch = document.getElementById("indexSearch");
    var indexSearchA = document.getElementById("indexSearchA");
    var borderFocus = document.getElementById("borderFocus");
//var lis = borderFocus>li;
    var one = document.getElementById("one");
    var html = $(".one>a").html();
    indexSearch.onfocus = function () {
        if (html == "酒店") {
            one.style.background = "#fff";
        }
        borderFocus.className += " border-focus";
        //        搜索框的运动
        animated(indexSearch, {"left": -230, "width": 340});
        indexSearch.parentNode.style.opacity = 1;
        //input框改变边框颜色
        indexSearch.className = "index-search-hover";
        //放大镜图片改变颜色
        indexSearchA.className = "index-search-hover-a";
    }
    indexSearch.onblur = function () {
        borderFocus.className = "fl";
        animated(indexSearch, {"left": 0, "width": 110});
        indexSearch.className = "";
        indexSearchA.className = "";
        if (html == "酒店") {
            one.style.background = "#ff9d00";
        }
    }
//动画方法
//    function animated(obj, json, fn) {
//        clearInterval(obj.timer);
//        obj.timer = setInterval(function () {
//            var flag = true;//标记为true的时候表示可以清理
//            for (var k in json) {
//                //{"left": 400}
//                // 属性名 属性的目标值
//                // k json[k]
//                var leader = parseInt(getStyle(obj, k)) || 0;
//                var target = json[k];
//                var step = (target - leader) / 10;
//                step = step > 0 ? Math.ceil(step) : Math.floor(step);
//                obj.style[k] = leader + step + "px";
//                if (leader != target) {
//                    flag = false;//只要有一个属性没有达到目标值就告诉标记不能清理
//                }
//            }
//            if (flag) {
//                clearInterval(obj.timer);
//                if (fn) {
//                    fn();
//                }
//            }
//        }, 15)
//    }

//获取属性值
    function getStyle(obj, attr) {
        if (obj.currentStyle) {
            return obj.currentStyle[attr];
        } else {
            return window.getComputedStyle(obj, null)[attr];
        }
    }
}