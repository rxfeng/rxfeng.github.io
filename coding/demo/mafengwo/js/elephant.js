/**
 * Created by rxfeng on 2016/5/21.
 */
//小象动画

    var elephant = document.getElementById("elephant");
    var waterLeft = document.getElementById("waterLeft");
    var waterRight = document.getElementById("waterRight");
    elephant.onmouseover = function(){
        elephant.style.bottom="0px"
        elephant.style.backgroundPosition = "-72px 0px";
        waterLeft.style.display = "block";
        waterRight.style.display = "block";
        waterLeft.className+=" lwatercurrent";
        waterRight.className+=" rwatercurrent";
    }

//鼠标离开小象
    elephant.onmouseout = function () {
        elephant.style.backgroundPosition = "0px 0px";
        waterLeft.style.display = "none";
        waterRight.style.display = "none";
        waterLeft.style.top=0;
        waterLeft.style.left=0;
        waterRight.style.top=0;
        waterRight.style.left=0;
        elephant.style.bottom="-4px";
    }

//滚动条下的小象
    window.onscroll = function (){
        //滚动条的top值大于500，让小象显示，小于500，让小象隐藏
        if(scroll().top>10){
            //elephant.style.display="block";
            animated(elephant,{"bottom":-4});
        }else{
            //elephant.style.display="none";
            animated(elephant,{"bottom":-36});
        }
    }
//动画方法

    //function scroll() {
    //    if (window.pageYOffset != null) {
    //        return {
    //            "top": window.pageYOffset,
    //            "left": window.pageXOffset
    //        };
    //    } else if (document.compatMode == "CSS1Compat") {
    //        //说明是标准模式 有DTD
    //        return {
    //            "top": document.documentElement.scrollTop,
    //            "left": document.documentElement.scrollLeft
    //        };
    //    } else {
    //        return {
    //            "top": document.body.scrollTop,
    //            "left": document.body.scrollLeft
    //        };
    //    }
    //}

