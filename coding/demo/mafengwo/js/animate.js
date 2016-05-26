/**
 * Created by rxfeng on 2016/5/12.
 */

    function animate(obj, target) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var leader = obj.offsetLeft;
            var step = (target - leader) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (Math.abs(target - leader) > Math.abs(step)) {
                obj.style.left = obj.offsetLeft + step + "px";
            } else {
                obj.style.left = target + "px";
                clearInterval(obj.timer);
            }
        }, 30)
    }

//动画方法
    function animated(obj, json, fn) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var flag = true;//标记为true的时候表示可以清理
            for (var k in json) {
                //{"left": 400}
                // 属性名 属性的目标值
                // k json[k]
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                obj.style[k] = leader + step + "px";
                if (leader != target) {
                    flag = false;//只要有一个属性没有达到目标值就告诉标记不能清理
                }
            }
            if (flag) {
                clearInterval(obj.timer);
                if (fn) {
                    fn();
                }
            }
        }, 15)
    }

//获取属性值
    function getStyle(obj, attr) {
        if (obj.currentStyle) {
            return obj.currentStyle[attr];
        } else {
            return window.getComputedStyle(obj, null)[attr];
        }
    }

//获取滚动条的left值和top值
    function scroll() {
        if (window.pageYOffset != null) {
            return {
                "top": window.pageYOffset,
                "left": window.pageXOffset
            };
        } else if (document.compatMode == "CSS1Compat") {
            //说明是标准模式 有DTD
            return {
                "top": document.documentElement.scrollTop,
                "left": document.documentElement.scrollLeft
            };
        } else {
            return {
                "top": document.body.scrollTop,
                "left": document.body.scrollLeft
            };
        }
    }


