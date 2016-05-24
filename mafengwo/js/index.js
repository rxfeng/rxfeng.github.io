window.onload = function () {
    /**
     * Created by rxfeng on 2016/2/26.
     */
    //小轮播图
    var travellerImg = document.getElementById("travellerImg");
    var travellerImgUls = document.getElementById("travellerImgUls");
    var travellerImgUl = travellerImg.children[0];
    var travellerImgLis = travellerImgUl.children;
    var travellerNum = document.getElementById("travellerNum");
    var travellerNumUl = travellerNum.children[0];
    var travellerImgWidth = travellerImg.offsetWidth;
    var travellerCon = document.getElementById("travellerCon");
    var travellerConUl = travellerCon.children[0];
    var travellerConLis = travellerConUl.children;
    var travellerTimer = null;
    var travellerpic = 0;
    var travellersquare = 0;
    //alert(imgWidth);

    //动态生成小圆点
    for (var i = 0; i < travellerImgLis.length; i++) {
        var li = document.createElement("li");
        travellerNumUl.appendChild(li);
    }
    var travellerNumLis = travellerNumUl.children;
    travellerNumLis[0].className = "traveller-one";
    //增加第一张图片在最后面
    travellerImgUls.appendChild(travellerImgLis[0].cloneNode(true));
    travellerConUl.appendChild(travellerConLis[0].cloneNode(true));
    //travellerConUl.insertBefore(travellerConLis[travellerConLis.length-2].cloneNode(true),travellerConLis[0]);

    //js中设置ul的宽度，通用性强。
    var travellerImgUls = document.getElementById("travellerImgUls");
    travellerImgUls.style.width = travellerImgWidth * travellerImgUls.childElementCount + "px";
    //鼠标放上去停止自动播放
    travellerImg.onmouseover = function () {
        clearInterval(travellerTimer);
    }
    travellerCon.onmouseover= function () {
        clearInterval(travellerTimer);
    }
    //鼠标离开继续自动播放
    travellerImg.onmouseout = function () {
        travellerTimer = setInterval(PlayNext, 7000);
    }
    travellerCon.onmouseout= function () {
        travellerTimer = setInterval(PlayNext, 7000);
    }
    //点击小圆点事件
    for (var i = 0; i < travellerNumLis.length; i++) {
        travellerNumLis[i].index = i;
        travellerNumLis[i].onmouseover = function () {
            for (var j = 0; j < travellerNumLis.length; j++) {
                travellerNumLis[j].className = "";
            }
            this.className = "traveller-one";
            var target = -this.index * travellerImgWidth;
            animate(travellerImg, target);
            animate(travellerConUl, target);
            travellerpic = this.index;
            travellersquare = this.index;
        }
    }
    //自动播放事件
    travellerTimer = setInterval(PlayNext, 7000);
    function PlayNext() {
        if (travellerpic == travellerImgLis.length - 1) {
            travellerImg.style.left = 0;
            travellerConUl.style.left=0;
            travellerpic = 0;
        }
        travellerpic++;

        var target = -travellerpic * travellerImgWidth;
        animate(travellerImg, target);
        animate(travellerConUl, target);

        if (travellersquare < travellerNumLis.length - 1) {
            travellersquare++;
        } else {
            travellersquare = 0
        }
        for (var i = 0; i < travellerNumLis.length; i++) {
            travellerNumLis[i].className = "";
        }
        travellerNumLis[travellersquare].className = "traveller-one";
    }

    //大轮播图
    var banner = document.getElementById("banner");
    var bannerBig = document.getElementById("bannerBig");
    var bannerBigUl = document.getElementById("bannerBigUl");
    var bannerBigLis = bannerBigUl.children;
    var bannerImgWidth = bannerBigLis[0].offsetWidth;
    var bannerSmall = document.getElementById("bannerSmall");
    var bannerSmallUl = bannerSmall.children[0];
    var bannerSmallLis = bannerSmallUl.children;
    var bannerFonts  = document.getElementById("bannerFonts");
    var bannerFontsUl = bannerFonts.children[0];
    var bannerFontsLis = bannerFontsUl.children;
    var bannerTimer = null;
    var bannerPic = 0;
    var bannerSquare = 0;
    bannerBigUl.appendChild(bannerBigLis[0].cloneNode(true));
    //给ul设置宽度，通用性强
    bannerBigUl.style.width = bannerImgWidth * bannerBigUl.childElementCount + "px";

    //鼠标放上去
    banner.onmouseover = function () {
        clearInterval(bannerTimer);
    }
    banner.onmouseout = function () {
        bannerTimer = setInterval(bannerPlayNext, 5000);
    }
    //鼠标点击小图片事件
    for (var i = 0; i < bannerSmallLis.length; i++) {
        bannerSmallLis[i].index = i;
        bannerSmallLis[i].onclick = function () {
            for (var j = 0; j < bannerSmallLis.length; j++) {
                bannerSmallLis[j].className = "";
                bannerFontsLis[j].style.display="none";
            }
            this.className = "liBorder";
            bannerFontsLis[this.index].style.display="block";
            var target = -this.index * bannerImgWidth;
            animate(bannerBig, target);
            bannerPic = this.index;
            bannerSquare = this.index;
        }
    }
    //自动播放事件
    clearInterval(bannerTimer)
    bannerTimer = setInterval(bannerPlayNext, 5000);
    function bannerPlayNext() {
        if (bannerPic == bannerBigLis.length - 1) {
            bannerBig.style.left = 0;
            bannerPic = 0;
        }
        bannerPic++;
        var target = -bannerPic * bannerImgWidth;
        animate(bannerBig, target);
        if (bannerSquare < bannerSmallLis.length - 1) {
            bannerSquare++;
        } else {
            bannerSquare = 0;
        }
        //轮播图样式加边框
        for (var j = 0; j < bannerSmallLis.length; j++) {
            bannerSmallLis[j].className = "";
            bannerFontsLis[j].style.display="none";
        }
        bannerSmallLis[bannerSquare].className = "liBorder";
        bannerFontsLis[bannerSquare].style.display="block";
    }


//模态框
    var idea = document.getElementById("idea");
    var closeBtn = document.getElementById("closeBtn");
    var ideaMask = document.getElementById("ideaMask");
    var ideaButton = document.getElementById("ideaButton");
    var textArea = document.getElementById("textArea");
    var ideaerr = document.getElementById("ideaerr");
    idea.onclick = function (event) {
        var event = event || window.event;
        ideaMask.style.display = "block";
        //让滚动条不显示，
        document.body.style.overflow = "hidden";
        textArea.value = "";
    }
    closeBtn.onclick = function () {
        ideaMask.style.display = "none";
        document.body.style.overflow = "visible";
    }
    ideaButton.onclick = function () {
        if (textArea.value == "") {
            ideaerr.className = "err";

        }else{
            ideaMask.style.display = "none";
        }
    }




}
