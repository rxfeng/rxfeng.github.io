(function($){
  $.fn.waterFall=function (options){
    // 默认值
    var defaults={
      gap:10
    }
    // 合并参数如果没有传参数，gap走的是默认值10，如果传了参数gap是20
    options = $.extend(defaults,options);

    // 这里的this指的是需要定位元素的父节点，
    // 在这就是items
    // $(this).children()获取所有item
    var items = $(this).children(),
        // gap = options.gap;     /*为什么要用options.gap*/
        gap = defaults.gap,  /*这样写也没错啊*/
    // items是一个数组，在jquery中items.width()是获取第一个的孩子的宽度
        width = items.width(),
        height=0,
        //一行可以放几列 colums=4
        colums = Math.floor($(this).width()/(width + gap)),
        h =[];
        items.each(function(key,val){
          // console.log(val)
          // 获取每个元素的高度
          height=$(val).height();
          // 第一行
          if(key<colums){
            // 初始化每一列的高度
            h[key]=height;
            // 设置第一行的坐标
            $(val).css({
              top:0,
              left:key*(width+gap)
            });
          }else{
            // 处理其他行
            var min_h=h[0];
            var min_k=0;
            for(var i= 0;i<h.length;i++){
              if(h[i] < min_h){
                min_h=h[i];
                min_k=i;
              }
            }
          // 更新列的高度
          h[min_k] +=height;
          // 设置坐标
            $(val).css({
              // top就是最小的高度
              top:min_h,
              left: min_k * (width + gap)
            });
          }
        });

        // 设置最高列
        var max_h = h[0];
        for(var j = 0 ;j<h.length;j++){
          if(h[j]>max_h){
            max_h=h[j];
          }
        }
        // 设置父盒子items的高度
        $(this).css('height',max_h);
  }
})(jQuery)