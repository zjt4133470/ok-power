var URL = localStorage.getItem("URL");

//banner轮播
var swiper = new Swiper('#conts_slideshow', {
    autoplay: {
        delay: 5000,//自动切换时间
        stopOnLastSlide: false,//自动切换是否停留
        disableOnInteraction: false,//触碰是否停止
    },
    pagination: {
        el: '.swiper-pagination',
        clickable :true
    },
    loop: true,//环路

});
//鼠标悬停轮播不动
$('#conts_slideshow').mouseenter(function () {
    swiper.autoplay.stop();
});
$('#conts_slideshow').mouseleave(function () {
    swiper.autoplay.start();
});
// 第一个轮播
var swiper1 = new Swiper('#swiper1', {
    autoplay: {
        delay: 3000,//自动切换时间
        stopOnLastSlide: false,//自动切换是否停留
        disableOnInteraction: false,//触碰是否停止
    },
    loop: true,//环路
    effect: 'coverflow',
    slidesPerView: 3,
    centeredSlides: true,
    coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 50,
        modifier: 2,
        slideShadows: true
    },
});
//第二个轮播
var swiper2 = new Swiper('#swiper2', {
    pagination: {
        el: '.swiper-pagination2',
        clickable: true,//分页是否能点击
        renderBullet: function (index, className) {
            switch (index) {
                case 0:
                    text = '知识产权资产';
                    break;
                case 1:
                    text = '业务知识资产';
                    break;
                case 2:
                    text = '人力资源知识资产';
                    break;
                case 3:
                    text = '市场知识资产';
                    break;
            }
            return '<span class="' + className + '">' + text + '</span>';
        },

    },
    autoplay: {
        delay: 3000,//自动切换时间
        stopOnLastSlide: true,//自动切换是否停留
        disableOnInteraction: false,//触碰是否停止
    },
    loop: true,//环路
    effect: 'cube',
    cubeEffect: {
        slideShadows: false,
        shadow: false,
        shadowOffset: 100,
        shadowScale: 0.6
    }
});
//第三个轮播
var swiper3 = new Swiper('#swiper3', {
    pagination: {
        el: '.swiper-pagination3',
        clickable: true,//分页是否能点击
        renderBullet: function (index, className) {
            switch (index) {
                case 0:
                    text = '创造社';
                    break;
                case 1:
                    text = '训练营';
                    break;
                case 2:
                    text = '知识圈';
                    break;
                case 3:
                    text = '知识库';
                    break;
                case 4:
                    text = '成长中心';
                    break;
                case 5:
                    text = '管理中心';
                    break;
                case 6:
                    text = '消息';
                    break;
            }
            return '<span class="' + className + '">' + text + '</span>';
        },
    },
    autoplay: false,
    loop: true,//环路
    effect: 'flip',
    flipEffect: {
        slideShadows: false,
        limitRotation: true,
    }
});
//手机轮播
$("#lun3 #swiper3").click(function (e) {
    e.stopPropatation
})
var p = 1,
p1 = 1,
p2 = 1,
p3 = 1,
p4 = 1,
p5 = 1,
p6 = 1;
var arr = ["以创造点为核心进行业务梳理与分解，更能抓住重点形成业务闭环", "自然索引文档和资料", "随时邀请同事和客户", "轻松掌握工作进度"];
var arr1 = ["主题制分享，满足训练营多维度学习主题的知识分享", "自然索引 文档和资料", "多媒体课件，支持直播教学，轻松导入企业内外部知识", "图文、音频、视频、文档、直播、问答全面支持"];
var arr2 = ["全员知识分享 ，支持已读统计，消息必达", "自然索引文档和资料", "动态统计的分享达人榜 ，让分享更有动力"];
var arr3 = ["智能识别使用者权限，提供全库文件、课件的搜索、收藏和下载", "每个员工都能免费拥有自己的私密存储空间"];
var arr4 = ["自动根据使用者数据分析员工的能力和贡献"];
var arr5 = ["全功能系统后台，清晰掌握系统全局"];
var arr6 = ["Power消息，移动端消息提取功能，无需进入Power即可处理创造点和主题点的消息内容","私聊消息，随时查询企业联系人，拨打电话，发起私聊更加便捷"];
// 手机1
$(".leftImgs").click(function () {
    if (p == 1) {
        p = arr.length;
    } else {
        p--
    }
    $(".cont_5_2 .phoneLun").css({
        backgroundImage: 'url("./images/Shuffling/lun2/1/' + p + '.png")'
    })
    $(".cont_5_2 .cont_text p").html(arr[p - 1])
});
$(".rightImgs").click(function () {
    if (p == arr.length) {
        p = 1;
    } else {
        p++
    }
    $(".cont_5_2 .phoneLun").css({
        backgroundImage: 'url("./images/Shuffling/lun2/1/' + p + '.png")'
    })
    $(".cont_5_2 .cont_text p").html(arr[p - 1])
});
//手机2
$(".leftImgs1").click(function () {
    if (p1 == 1) {
        p1 = arr1.length;
    } else {
        p1--
    }
    $(".cont_5_2 .phoneLun1").css({
        backgroundImage: 'url("./images/Shuffling/lun2/2/' + p1 + '.png")'
    })
    $(".cont_5_2 .cont_text1 p").html(arr1[p1 - 1])
});
$(".rightImgs1").click(function () {
    if (p1 == arr1.length) {
        p1 = 1;
    } else {
        p1++
    }
    $(".cont_5_2 .phoneLun1").css({
        backgroundImage: 'url("./images/Shuffling/lun2/2/' + p1 + '.png")'
    });
    $(".cont_5_2 .cont_text1 p").html(arr1[p1 - 1])
});
//手机3
$(".leftImgs2").click(function () {
    if (p2 == 1) {
        p2 = arr2.length;
    } else {
        p2--
    }
    $(".cont_5_2 .phoneLun2").css({
        backgroundImage: 'url("./images/Shuffling/lun2/3/' + p2 + '.png")'
    })
    $(".cont_5_2 .cont_text2 p").html(arr2[p2 - 1])
});
$(".rightImgs2").click(function () {
    if (p2 == arr2.length) {
        p2 = 1;
    } else {
        p2++
    }
    $(".cont_5_2 .phoneLun2").css({
        backgroundImage: 'url("./images/Shuffling/lun2/3/' + p2 + '.png")'
    });
    $(".cont_5_2 .cont_text2 p").html(arr2[p2 - 1])
});
//手机4
$(".leftImgs3").click(function () {
    if (p3 == 1) {
        p3 = arr3.length;
    } else {
        p3--
    }
    $(".cont_5_2 .phoneLun3").css({
        backgroundImage: 'url("./images/Shuffling/lun2/4/' + p3 + '.png")'
    });
    $(".cont_5_2 .cont_text3 p").html(arr3[p3 - 1])
});
$(".rightImgs3").click(function () {
    if (p3 == arr3.length) {
        p3 = 1;
    } else {
        p3++
    }
    $(".cont_5_2 .phoneLun3").css({
        backgroundImage: 'url("./images/Shuffling/lun2/4/' + p3 + '.png")'
    });
    $(".cont_5_2 .cont_text3 p").html(arr3[p3 - 1])
});
//手机5
$(".leftImgs4").click(function () {
    if (p4 == 1) {
        p4 = arr4.length;
    } else {
        p4--
    }
    $(".cont_5_2 .phoneLun4").css({
        backgroundImage: 'url("./images/Shuffling/lun2/5/' + p4 + '.png")'
    })
    $(".cont_5_2 .cont_text4 p").html(arr4[p4 - 1])
});
$(".rightImgs4").click(function () {
    if (p4 == arr4.length) {
        p4 = 1;
    } else {
        p4++
    }
    $(".cont_5_2 .phoneLun4").css({
        backgroundImage: 'url("./images/Shuffling/lun2/5/' + p4 + '.png")'
    });
    $(".cont_5_2 .cont_text4 p").html(arr4[p4 - 1])
});
//手机6
$(".leftImgs5").click(function () {
    if (p5 == 1) {
        p5 = arr5.length;
    } else {
        p5--
    }
    $(".cont_5_2 .phoneLun5").css({
        backgroundImage: 'url("./images/Shuffling/lun2/6/' + p5 + '.png")'
    })
    $(".cont_5_2 .cont_text5 p").html(arr5[p5 - 1])
});
$(".rightImgs5").click(function () {
    if (p5 == arr5.length) {
        p5 = 1;
    } else {
        p5++
    }
    $(".cont_5_2 .phoneLun5").css({
        backgroundImage: 'url("./images/Shuffling/lun2/6/' + p5 + '.png")'
    });
    $(".cont_5_2 .cont_text5 p").html(arr5[p5 - 1])
});

//手机7
$(".leftImgs6").click(function () {
    if (p6 == 1) {
        p6 = arr6.length;
    } else {
        p6--
    }
    $(".cont_5_2 .phoneLun6").css({
        backgroundImage: 'url("./images/Shuffling/lun2/7/' + p6 + '.png")'
    });
    $(".cont_5_2 .cont_text6 p").html(arr6[p6 - 1])
});
$(".rightImgs6").click(function () {
    if (p6 == arr6.length) {
        p6 = 1;
    } else {
        p6++
    }
    $(".cont_5_2 .phoneLun6").css({
        backgroundImage: 'url("./images/Shuffling/lun2/7/' + p6 + '.png")'
    });
    $(".cont_5_2 .cont_text6 p").html(arr6[p6 - 1])
});

//鼠标滑过背景变色
$(".cont_3_2 .li1").on("mouseover", function () {
    $(".cont_3_2 .li1_1").slideDown()
});
$(".cont_3_2 .li1_1").on("mouseleave ", function () {
    $(".cont_3_2 .li1_1").slideUp()
});
$(".cont_3_2 .li2").on("mouseover", function () {
    $(".cont_3_2 .li2_1").slideDown()
});
$(".cont_3_2 .li2_1").on("mouseleave", function () {
    $(".cont_3_2 .li2_1").slideUp()
});

$(".cont_3_2 .li3").on("mouseover", function () {
    $(".cont_3_2 .li3_1").slideDown()
});
$(".cont_3_2 .li3_1").on("mouseleave", function () {
    $(".cont_3_2 .li3_1").slideUp()
});

$(".cont_3_2 .li4").on("mouseover", function () {
    $(".cont_3_2 .li4_1").slideDown()
});
$(".cont_3_2 .li4_1").on("mouseleave", function () {
    $(".cont_3_2 .li4_1").slideUp()
});

$(".cont_3_2 .li5").on("mouseover", function () {
    $(".cont_3_2 .li5_1").slideDown()
});
$(".cont_3_2 .li5_1").on("mouseleave", function () {
    $(".cont_3_2 .li5_1").slideUp()
});
//点击免费体验
$(".cont_9_1 .experience").click(function () {
    sessionStorage.setItem("phone1", $("#phone1").val());
    window.location.href = "../login.html"
});
//点击主页尾部头部字变色
$("#foot .foot_1 .foot_ul1 .foot_li1").click(function () {
    $('.head_right_1 li').eq(0).children().addClass('selete').parent().siblings().children().removeClass('selete');
});
$("#foot .foot_1 .foot_ul1 .foot_li2").click(function () {
    $('.head_right_1 li').eq(1).children().addClass('selete').parent().siblings().children().removeClass('selete');
});
$("#foot .foot_1 .foot_ul1 .foot_li3").click(function () {
    $('.head_right_1 li').eq(2).children().addClass('selete').parent().siblings().children().removeClass('selete');
});
//展示微信二维码
$(function () {
    $("#wx").click(function () {
        $(".wxCode").show()
    });
    $(".wxCode").click(function () {
        $(".wxCode").hide()
    });
});

//点击进入OK-power
$(".dredgeOk").click(function () {
    if (userName == "" || userName == undefined || userName == null) {
        window.location.href = "login.html"
    } else {
        var apply_state = sessionStorage.getItem("apply_state");
        console.log(apply_state)
        if (apply_state == 0) {
            window.location.href = "dredgeOK.html"
        } else {
            window.location.href = "pay.html"
        }
    }
});


