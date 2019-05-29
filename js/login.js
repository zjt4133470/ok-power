var URL = localStorage.getItem("URL")
/*登录时调用*/
var phone1 = sessionStorage.getItem("phone1");
$("#cont_1 #phone").val(phone1)
//登录倒计时
var timer = 60;

function Countdown() {
    if (timer >= 1) {
        timer -= 1;
        $($("#cont_1 .cont_1_1 .time")).html(timer)
        if (timer == 0) {
            $("#cont_1 .cont_1_1 .gain").show();
            $("#cont_1 .cont_1_1 .gain1").hide();
        }
        var test1 = setTimeout(function () {
            Countdown();
        }, 1000);
    }
}

$("#cont_1 .cont_1_1 .gain").click(function () {
    timer = 60;
    Countdown();
    $("#cont_1 .cont_1_1 .gain").hide();
    $("#cont_1 .cont_1_1 .gain1").show();

});

//登陆判断手机号
function checkUser(str) {
    var re = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (re.test(str)) {
        $("#cont_1 .cont_1_1 .p1").css({
            visibility: "hidden"
        });
    } else {
        $("#cont_1 .cont_1_1 .p1").css({
            visibility: "visible"
        });
        $("#cont_1 .cont_1_1 .p1").html("输入手机号有误")
    }
}

$("#cont_1 .cont_1_1 #phone").bind("blur", function (e) {
    if ($("#cont_1 .cont_1_1 #phone").val() == "") {
        $("#cont_1 .cont_1_1 .p1").css({
            visibility: "visible"
        });
        $("#cont_1 .cont_1_1 .p1").html("请输入手机号")
    } else {
        e.preventDefault();
        checkUser($("#cont_1 .cont_1_1 #phone").val())
    }
});

//登陆判断验证码
function checkUser1(str) {
    var re = /^[0-9]{4}$/;
    if (re.test(str)) {
        $("#cont_1 .cont_1_1 .p2").css({
            visibility: "hidden"
        });
    } else {
        $("#cont_1 .cont_1_1 .p2").css({
            visibility: "visible"
        });
        $("#cont_1 .cont_1_1 .p2").html("输入验证码有误")
    }
}

$("#cont_1 .cont_1_1 #authCode").bind("blur", function (e) {
    if ($("#cont_1 .cont_1_1 #authCode").val() == "") {
        $("#cont_1 .cont_1_1 .p2").css({
            visibility: "visible"
        });
        $("#cont_1 .cont_1_1 .p2").html("请输入验证码")
    } else {
        e.preventDefault();
        checkUser1($("#cont_1 .cont_1_1 #authCode").val())
    }
});
//发送验证码
$("#cont_1 .cont_1_1 .gain").click(function () {
    $.ajax({
        type: "post",
        url: URL + "?c=AfficialLogin&a=sendCode",
        data: {
            "mobile": $("#phone").val(),
            "operate": "official_register",
        },
        success: function (data) {
            if (data.errcode == "0") {
                prompt(data.errstr)
            } else {
                prompt(data.errstr)
            }
        },
        error: function (arr) {
            console.log(arr)
        }
    });
});

//用户登录
$("#cont_1 .cont_1_1 .login").click(function () {
    $.ajax({
        type: "post",
        url: URL + "?c=AfficialLogin&a=officialLogin",
        data: {
            "mobile": $("#phone").val(),
            "code": $("#authCode").val(),
        },
        success: function (data) {
            if (data.errcode == "0") {
                sessionStorage.setItem("userName", data.data.username);
                sessionStorage.setItem("apply_state", data.data.apply_state);
                var apply_state = sessionStorage.getItem("apply_state");
                if (apply_state == 0) {
                    window.location.href = "myCustomer.html"
                } else {
                    window.location.href = "pay.html"
                }

            } else {
                prompt(data.errstr)
            }
        },
        error: function (arr) {
            console.log(arr)
        }
    });
});
$("#cont_1 .cont_1_1 #authCode").bind('keydown', function (e) {
    var key = e.which;
    if (key == 13) {
        $.ajax({
            type: "post",
            url: URL + "?c=AfficialLogin&a=officialLogin",
            data: {
                "mobile": $("#phone").val(),
                "code": $("#authCode").val(),
            },
            success: function (data) {
                if (data.errcode == "0") {
                    sessionStorage.setItem("userName", data.data.username);
                    sessionStorage.setItem("apply_state", data.data.apply_state);
                    var apply_state = sessionStorage.getItem("apply_state");
                    if (apply_state == 0) {
                        window.location.href = "myCustomer.html"
                    } else {
                        window.location.href = "pay.html"
                    }
                } else {
                    prompt(data.errstr)
                }
            },
            error: function (arr) {
                console.log(arr)
            }
        });
    }
});