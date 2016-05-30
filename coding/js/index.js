window.onload = function () {
    var wrap = document.getElementById("wrap");
    var slide = document.getElementById("slide");
    var ul = slide.children[0];
    var lis = ul.children;
    var arrRight = document.getElementById("arrRight");
    var arrLeft = document.getElementById("arrLeft");

    var arrow = document.getElementById("arrow");
    var $codingUl = $('#codingUl');
    var config = [//config 配置
        {
            width: 400,
            top: 20,
            left: 50,
            opacity: 0.2,
            zIndex: 2
        },//0
        {
            width: 600,
            top: 70,
            left: 0,
            opacity: 0.8,
            zIndex: 3
        },//1
        {
            width: 800,
            top: 100,
            left: 200,
            opacity: 1,
            zIndex: 4
        },//2
        {
            width: 600,
            top: 70,
            left: 600,
            opacity: 0.8,
            zIndex: 3
        },//3
        {
            width: 400,
            top: 20,
            left: 750,
            opacity: 0.2,
            zIndex: 2
        }//4
    ];//其实就是一个配置单 规定了每张图片的大小位置层级透明度

    //1.鼠标经过盒子 渐渐地显示arrow 鼠标离开 渐渐地隐藏arrow
    //左右箭头
    //wrap.onmouseover = function () {
    //    animate(arrow, {"opacity": 1});
    //}
    //wrap.onmouseout = function () {
    //    animate(arrow, {"opacity": 0.7});
    //}
    //2.根据配置单 对每一个li的位置进行分配
    function assign() {
        for (var i = 0; i < lis.length; i++) {
            //让图片渐渐地到达指定位置
            //那个li，对应的那个li的配置，
            animate(lis[i], config[i], function () {
                //执行回调函数的时候说明动画已经执行完了
                flag = true;//打开节流阀
            });
        }
    }

    assign();

    //3.点击箭头让木马转起来
    arrRight.onclick = function () {
        if (flag) {//点击按钮的时候对阀门的状态进行判断 如果是打开的就可以执行
            flag = false;//关闭节流阀
            //点击右侧按钮 配置单 删除第一个元素 追加到结尾
            config.push(config.shift());//修改配置单
            assign();//根据修改完成的配置单对位置进行重新分配
        }
    }
    arrLeft.onclick = function () {
        if (flag) {
            flag = false;
            //点击左侧按钮 配置单 删除最后一个 追加到开头
            config.unshift(config.pop());//修改配置单
            assign();//根据修改完成的配置单对位置进行重新分配
        }
    }

    //4.添加节流阀
    var flag = true;//flag为true的时候表示节流阀打开 箭头可以点击

    $codingUl.on('mouseenter',"li",function(){
        var imgIndex = $(this).index();
        $('#codingUl p').eq(imgIndex).stop().show().animate({
            "font-size": "50px",
            "opacity": 0.8
        });
    })
    $codingUl.on('mouseleave',"li",function(){
        var imgIndex = $(this).index();
        $('#codingUl p').eq(imgIndex).stop().animate({
            "font-size": "20px",
            "opacity": 0.3
        });
    })


}