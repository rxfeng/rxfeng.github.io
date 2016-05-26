/**
 * Created by zhousg on 2016/3/20.
 */
$(function(){
    /*轮播图*/
    banner();
    /*初始化tooltips*/
    $('[data-toggle="tooltip"]').tooltip();
    /*初始化 tabs*/
    initTabs();
});
/*轮播图*/
function banner(){
    /*
     * 1.写了一个静态的轮播图
     * 2.在index。html发出的请求  以index。html为相对路径
     * 3.数据缓存
     * 4.模版引擎  语法 和书写规律
     * 5.
     * */
    /**
     * 1.通过ajax获取数据  图片
     * 2.判断屏幕的尺寸  $(window).width();
     * 3.根据屏幕的尺寸 json转化渲染html字符串  (1.js来拼接字符串 2.模版引擎)
     * 4.渲染在页面当中 html('我们解析的html');
     * 5.响应屏幕的尺寸  来渲染当前屏幕尺寸下的图片  resize事件
     * */
    /*
     * 目的：优化目的
     *1.图片加载过多
     *2.在移动端需要做适配
     *
     *总之：图片响应
     * */

    /* 1.通过ajax获取数据  图片 */

    /*数据缓存*/
    var myData = '';

    var getData = function(callback){
        /*如果数据已经存在 咱们就不是做请求*/
        if(myData){
            /*返回已经存在的数据*/
            callback && callback(myData);
            /*不往下执行了*/
            return false;
        }
        $.ajax({
            /*404  未找到资源
             * 当前的目录是在index。html下  相对json的路径  js/index.json
             * */
            /*看作一个接口*/
            url:'js/index.json',
            type:'get',
            data:{},
            dataType:'json',
            success:function(data){
                /*函数当中 data  指向的是
                 * function a(b){
                 *   b
                 * }
                 *
                 * */
                myData = data;
                callback &&callback(myData);
            }
        })
    }


    /*3.根据屏幕的尺寸 json转化渲染html字符串  (1.js来拼接字符串 2.模版引擎) artTemplate*/

    /*获取数据*/
    /*渲染*/
    var renderHtml = function(){
        /* 2.判断屏幕的尺寸 */
        /*当前的屏幕尺寸*/
        var width = $(window).width();
        var isMobile = false;
        /*在768px一下都认为是移动端*/
        if(width < 768){
            isMobile = true;
        }
        getData(function(data){
            /*渲染html*/
            /*拿到模版*/
            var templatePoint = _.template($('#template_point').html());
            var templateImage = _.template($('#template_image').html());
            /*把数据穿进去解析成html*/
            /*
             * key-value
             * */
            var pointHtml = templatePoint({model:data});
            /*
             * {
             *   model:{
             *       list:[]
             *       isMobile:isMobile
             *   }
             * }
             *
             * */
            var imageHtml = templateImage({model:{list:data,isMobile:isMobile}});

            /*4.渲染在页面当中 html('我们解析的html');*/
            $('.carousel-indicators').html(pointHtml);
            $('.carousel-inner').html(imageHtml);
        });
    };

    /*5.响应屏幕的尺寸  来渲染当前屏幕尺寸下的图片  resize事件*/
    /*
     * renderHtml并没有调用
     * trigger 是jquery的立即触发这个传入的事件
     * .trigger('resize')  立即触发了resize事件
     * */
    $(window).on('resize',function(){
        renderHtml();
    }).trigger('resize');


    /*在移动端需要滑动*/
    var startX = 0
    var moveX = 0;
    var distanceX = 0;
    var isMove = false;
    $('.wjs_banner').on('touchstart',function(e){
        /*  在jquery当中 绑定touch事件的时候 返回的  originalEvent  包含的是原生的touchevent*/
        startX = e.originalEvent.touches[0].clientX;
    });
    $('.wjs_banner').on('touchmove',function(e){
        moveX = e.originalEvent.touches[0].clientX;
        distanceX = moveX - startX;
        isMove = true;
    });
    $('.wjs_banner').on('touchend',function(e){
        /*
         * 滑懂过50的时候才算是一个手势
         * */
        if(isMove && Math.abs(distanceX)>50){
            if(distanceX >0 ){
                /*向右滑动*/
                $('.carousel').carousel('prev');
            }else{
                /*向左滑动*/
                $('.carousel').carousel('next');
            }
        }
        startX = 0;
        moveX = 0;
        distanceX = 0;
        isMove = false;
    });
}

/*初始化 tabs*/
function initTabs(){
    /*父盒子*/
    var parent = $('.wjs_tabs_parent');
    /*子盒子*/
    var child = parent.find('ul');
    /*所有的li*/
    var lis = child.find('li');

    /*获取所有的li的宽度的和*/
    var width = 0;
    /*遍历*/
    lis.each(function(){
        width += $(this).innerWidth()
    });
    console.log(width);

    /*设置child的宽度*/
    child.width(width);

    /*滑动*/
    itcast.iScroll({
        /*dom parent[0]*/
        swipeDom:parent.get(0),
        swipeType:'x',
        swipeDistance:60
    });

    /*
    * innerWidth() 内边距+内容
    * outerWidth() 内边距+内容+边框
    * outerWidth(true) 外边距 + 边框 + 内容 + 内边距
    *
    * */
    /*$.each(lis,function(){

     });*/
}