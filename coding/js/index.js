window.onload = function () {
    var wrap = document.getElementById("wrap");
    var slide = document.getElementById("slide");
    var ul = slide.children[0];
    var lis = ul.children;
    var arrRight = document.getElementById("arrRight");
    var arrLeft = document.getElementById("arrLeft");

    var arrow = document.getElementById("arrow");
    var $codingUl = $('#codingUl');
    var config = [//config ����
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
    ];//��ʵ����һ�����õ� �涨��ÿ��ͼƬ�Ĵ�Сλ�ò㼶͸����

    //1.��꾭������ ��������ʾarrow ����뿪 ����������arrow
    //���Ҽ�ͷ
    //wrap.onmouseover = function () {
    //    animate(arrow, {"opacity": 1});
    //}
    //wrap.onmouseout = function () {
    //    animate(arrow, {"opacity": 0.7});
    //}
    //2.�������õ� ��ÿһ��li��λ�ý��з���
    function assign() {
        for (var i = 0; i < lis.length; i++) {
            //��ͼƬ�����ص���ָ��λ��
            //�Ǹ�li����Ӧ���Ǹ�li�����ã�
            animate(lis[i], config[i], function () {
                //ִ�лص�������ʱ��˵�������Ѿ�ִ������
                flag = true;//�򿪽�����
            });
        }
    }

    assign();

    //3.�����ͷ��ľ��ת����
    arrRight.onclick = function () {
        if (flag) {//�����ť��ʱ��Է��ŵ�״̬�����ж� ����Ǵ򿪵ľͿ���ִ��
            flag = false;//�رս�����
            //����Ҳఴť ���õ� ɾ����һ��Ԫ�� ׷�ӵ���β
            config.push(config.shift());//�޸����õ�
            assign();//�����޸���ɵ����õ���λ�ý������·���
        }
    }
    arrLeft.onclick = function () {
        if (flag) {
            flag = false;
            //�����ఴť ���õ� ɾ�����һ�� ׷�ӵ���ͷ
            config.unshift(config.pop());//�޸����õ�
            assign();//�����޸���ɵ����õ���λ�ý������·���
        }
    }

    //4.��ӽ�����
    var flag = true;//flagΪtrue��ʱ���ʾ�������� ��ͷ���Ե��

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