/**
 * Created by rxfeng on 2016/5/21.
 */
//С�󶯻�

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

//����뿪С��
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

//�������µ�С��
    window.onscroll = function (){
        //��������topֵ����500����С����ʾ��С��500����С������
        if(scroll().top>10){
            //elephant.style.display="block";
            animated(elephant,{"bottom":-4});
        }else{
            //elephant.style.display="none";
            animated(elephant,{"bottom":-36});
        }
    }
//��������

    //function scroll() {
    //    if (window.pageYOffset != null) {
    //        return {
    //            "top": window.pageYOffset,
    //            "left": window.pageXOffset
    //        };
    //    } else if (document.compatMode == "CSS1Compat") {
    //        //˵���Ǳ�׼ģʽ ��DTD
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

