//正式路径
localStorage.setItem("URL", "http://www.ok-power.com/apipc");
//测试路径
// localStorage.setItem("URL", "http://api.ok-power.com/apipc");
//登陆后调用
var userName = sessionStorage.getItem("userName");
$(".head_right1 .head_phone .userPhone").html(userName);
// 首页导航切换变色1
var indexs
$(function () {
    $('.head_right_1 li').eq(0).children().addClass('selete');
    $('.head_right_1 li').click(function () {
        $(this).children().addClass('selete').parent().siblings().children().removeClass('selete');
    });
});

//弹框一的显示隐藏
$("#pop .pop1 img").click(function () {
    $("#pop").hide()
});

//提示框的展示
function prompt(str) {
    if (str == "成功" || str == "预约成功，请等待工作人员与您联系" || str == "支付成功" || str == "您已预约成功") {
        $("#warn .warn1 ").css({
            border: "1px solid #0fce1b",
            background: "rgba(15,206,27,.3)"
        });
        $("#warn .warn1 p").css({
            color: "rgba(15,206,27,1)"
        });
        $("#warn .warn1 .img1").attr("src", "./images/icon/success.png")
    } else {
        $("#warn .warn1 ").css({
            border: "1px solid #fe6e6e",
            background: "rgba(254, 110, 110, .3)"
        });
        $("#warn .warn1 p").css({
            color: "rgba(254, 110, 110, 1)"
        });
        $("#warn .warn1 .img1").attr("src", "./images/icon/warn.png")
    }
    $("#warn").show(1500);
    $("#warn .warn1 .hint").html(str);
    $("#warn .warn1 .img2").click(function () {
        $("#warn").hide(1000)
    });
    setTimeout(function () {
            $("#warn").hide(1000);
        },
        5000);
}

//退出登录
var URL = localStorage.getItem("URL");
$("#head .out").click(function () {
    $.ajax({
        type: "post",
        url: URL + "?c=AfficialLogin&a=quitLogin",
        success: function (data) {
            console.log(data)
            if (data.errcode == "0") {
                window.location.href = "login.html";
                // sessionStorage.removeItem("userName");
                // sessionStorage.removeItem("apply_state");
                sessionStorage.clear()
            } else {
                prompt(data.errstr)
            }
        },
        error: function (arr) {
            console.log(arr)
        }
    });
});
/*主页退出*/
$("#head .out1").click(function () {
    $.ajax({
        type: "post",
        url: URL + "?c=AfficialLogin&a=quitLogin",
        success: function (data) {
            console.log(data)
            if (data.errcode == "0") {
                window.location.href = "login.html";
                // sessionStorage.removeItem("userName");
                // sessionStorage.removeItem("apply_state");
                sessionStorage.clear();
            } else {
                prompt(data.errstr)
            }
        },
        error: function (arr) {
            console.log(arr)
        }
    });
});
//登陆成功后主页的登陆显示
if (userName == null) {
    $("#head .head_right_2 #phones").hide();
    $("#head .head_right_2 #last").show();
} else {
    $("#head .head_right_2 #phones .userPhone").html(userName);
    $("#head .head_right_2 #phones").show();
    $("#head .head_right_2 #last").hide();
}
//点击头部字变色
$(function () {
    indexs = window.location.hash;
    var index = indexs.substring(indexs.indexOf("#") + 1, indexs.length);
    if (index == "a") {
        $('.head_right_1 li').eq(1).children().addClass('selete').parent().siblings().children().removeClass('selete');
    } else if (index == "b") {
        $('.head_right_1 li').eq(2).children().addClass('selete').parent().siblings().children().removeClass('selete');
    }
});



