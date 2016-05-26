// 在原型上声明一个函数
// (function(){
//   $.fn.pubuliu=function(data){
//   var defaults = {
//     gap:10
//   }
//   var options = $.extend(defaults,data);
//   var items=$(this).children();
//   // jQuery中数组的宽度，获取的是第一个元素的宽度
//   var width = items.width();
//   var gap = options.gap;
//   var colums = Math.floor($(this).width()/(width+gap));
//   var h =[];
//   var height=0;
//   for(var i= 0;i<items.length;i++){
//     height = $(items[i]).height();
//     if(i<colums){
//       // 说明是第一行
//       h[i] = height;
//       $(items[i]).css({
//         top:0,
//         left:i * (width+gap)
//       });
//     }else{
//       var min_h = h[0];
//       var min_k = 0;
//       for(var j =0 ;j<h.length;j++){
//         if(min_h>h[j]){
//           min_h=h[j];
//           min_k = j;
//         }
//       }
//       // 更新每列的高
//       h[min_k] += height;
//       $(items[i]).css({
//         top:min_h,
//         left:min_k*(width+gap)
//       })
//     }
//   }
//   var max_h = h[0];
//       for(var j =0 ;j<h.length;j++){
//         if(max_h<h[j]){
//           max_h=h[j];
//         }
//       }
//   $(this).css("height",max_h);
//   return $(this);
// }
// })(jQuery)
//绑定调
(function($){
 $.fn.pubuliu=function(){
      var items = $('.items').children();
      var gap = 10;
      var width = items.width();
      var colums = Math.floor($('.items').width()/(width+gap));
      // console.log(colums);
      var h = [];
      var height = 0;
      for(var i = 0;i <items.length;i++){
        height= $(items[i]).height();
        // console.log(height);
        if(colums>i){
          h[i] = height;
          console.log(h[i]);
          $(items[i]).css({
            top:0,
            left:i*(width+gap)
          });
        }else{
          var min_h = h[0];
          var min_k = 0;
          for(var j = 0;j<h.length;j++){
            if(min_h > h[j]){
              min_h=h[j];
              min_k = j;
            }
          }
          // 更新列的高度
          h[min_k] += height;
          $(items[i]).css({
            top: min_h,
            left: min_k*(width+gap)
          });
        }
      }

      // 设置最高列
      var max_h = h[0];
      for(var j = 0;j<h.length;j++){
        if(h[j]>max_h){
          max_h = h[j];
        }
      }
      $('.items').css('height',max_h);
      return $(this);
 }
 })(jQuery)