var URL = localStorage.getItem("URL");
$.ajaxSetup({cache: false});
//导航切换变色
$(function () {
    $('.head_right_1 li').eq(0).children().removeClass("selete");
});

//搜索
// $(".cont_1_input img").click(function () {
//     var s=$(".cont_1_input input").val();
//     window.location.href="helpCenter.html?s="+s;
// });
// $(".cont_1_inputs").bind('keydown', function (e) {
//     var key = e.which;
//     if (key == 13) {
//         var s=$(".cont_1_input input").val();
//         window.location.href="helpCenter.html?s="+s;
//     }
// });

// 预约咨询
$("#make").on("click", function (e) {
    if ($(".phone_Email").val() == "") {
        prompt("请您输入手机号")
    } else {
        e.preventDefault();
        checkUser($(".phone_Email").val())
    }

});

//判断手机号
function checkUser(str) {
    var re = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (re.test(str)) {

        $.ajax({
            type: "post",
            url: URL + "?c=AfficialLogin&a=sendCode",
            data: {
                "mobile": $(".phone_Email").val(),
                "operate": "consultation",
            },
            success: function (data) {
                if (data.errcode == "0") {
                    pops($(".phone_Email").val().substring(0, 3) + "****" + $(".phone_Email").val().substring(7, 11));
                } else {
                    prompt(data.errstr)
                }
            },
            error: function (arr) {
                console.log(arr)
            }
        });

    } else {
        prompt("输入的手机号有误")
    }
}

//预约弹窗
var time;

function pops(state) {
    var div = $("<div></div>").css({
        width: "100%",
        height: "100%",
        position: "fixed",
        backgroundColor: "rgba(0,0,0,.5)",
        top: "0",
        zIndex: "999"
    }).click(function () {
        div.remove();
        location.reload();
        $(".phone_Email").val("");
    }).appendTo($("body"));
    var div1 = $("<div></div>").css({
        position: "absolute",
        width: "345px",
        height: "210px",
        left: "50%",
        top: "50%",
        marginTop: "-105px",
        marginLeft: "-173px",
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: "4px"
    }).click(function (e) {
        e.preventDefault();
        e.stopPropagation();
    }).appendTo(div);
    var img = $("<img src='../images/row2.png'>").css({
        position: "absolute",
        width: "20px",
        height: "20px",
        left: "50%",
        top: "50%",
        marginTop: "-140px",
        marginLeft: "180px",
        cursor: "pointer"
    }).appendTo(div);
    var p = $("<p>已向" + state + "发送短信验证码</p>").css({
        color: "rgba(0,0,0,1)",
        fontSize: "16px",
        width: "345px",
        marginTop: "30px",
        textAlign: "center",
    }).appendTo(div1);
    var p1 = $("<p></p>").css({
        position: "relative",
    }).appendTo(div1);

    var input = $("<input type='text' class='codeNumber'/>").css({
        width: "270px",
        height: "36px",
        borderRadius: "4px",
        border: "solid 1px #cccccc",
        marginTop: "25px",
        marginLeft: "36px",
        textIndent: "10px",
        color: "#333",
        fontSize: "14px",
    }).focus(function () {
        $(".codeRon").css({
            visibility: "hidden"
        })
    }).appendTo(p1);

    time = 60;
    CountdownTime();

    function CountdownTime() {
        var test1;
        if (time >= 1) {
            time -= 1;
            if (time == 0) {
                span1.show();
                $(".button").css({
                    backgroundColor: "#ccc",
                    cursor: "not-allowed",
                }).attr("disabled", "disabled");
                return
            }
            var span = $("<span>" + time + "S后重试<span>").css({
                position: "absolute",
                right: "60px",
                top: "35px",
                fontSize: "14px",
                color: "#666",
            }).appendTo(p1);

            test1 = setTimeout(function () {
                CountdownTime();
                span.remove();
                clearTimeout(test1)
            }, 1000);
        }
    }


    var span1 = $("<span>发送验证码<span>").css({
        position: "absolute",
        right: "60px",
        top: "35px",
        fontSize: "14px",
        color: "#347ffe",
        cursor: "pointer",
        display: "none"
    }).click(function () {
        $.ajax({
            type: "post",
            url: URL + "?c=AfficialLogin&a=sendCode",
            data: {
                "mobile": $(".phone_Email").val(),
                "operate": "consultation",
            },
            success: function (data) {
                if (data.errcode == "0") {
                    $(".button").css({
                        backgroundColor: "#347ffe",
                        cursor: "pointer",
                    }).removeAttr("disabled")
                } else {
                    prompt(data.errstr)
                }
            },
            error: function (arr) {
                console.log(arr)
            }
        });
        time = 60;
        CountdownTime();
        span1.hide();
    }).appendTo(p1);


    var p2 = $("<p class='codeRon'>验证码错误</p>").css({
        color: "#fe6e6e",
        fontSize: "12px",
        marginTop: "10px",
        marginLeft: "39px",
        visibility: "hidden"
    }).appendTo(div1);


    var button = $("<button class='button'>完成预约</button>").css({
        width: "270px",
        height: "36px",
        backgroundColor: "#347ffe",
        borderRadius: "4px",
        outline: "none",
        border: "none",
        color: "#fff",
        fontSize: "16px",
        marginTop: "10px",
        marginLeft: "38px",
        cursor: "pointer",
    }).click(function () {
        if ($(".codeNumber").val() == "") {
            $(".codeRon").css({
                visibility: "inherit"
            })
        } else {
            $.ajax({
                type: "post",
                url: URL + "?c=AfficialLogin&a=consultation",
                data: {
                    "info": $(".phone_Email").val(),
                    "code": $(".codeNumber").val()
                },
                success: function (data) {
                    if (data.errcode == "0") {
                        div.remove();
                        time = "";
                        pos1();
                    } else {
                        $(".codeRon").css({
                            visibility: "inherit"
                        })
                    }
                },
                error: function (arr) {
                    console.log(arr)
                }
            });
        }


    }).appendTo(div1);
}

function pos1() {
    var div = $("<div></div>").css({
        width: "100%",
        height: "100%",
        position: "fixed",
        backgroundColor: "rgba(0,0,0,.5)",
        top: "0",
        zIndex: "999"
    }).click(function () {
        div.remove();
        location.reload();
        time = ""
        $(".phone_Email").val("");
    }).appendTo($("body"));
    var div1 = $("<div></div>").css({
        position: "absolute",
        width: "345px",
        height: "170px",
        left: "50%",
        top: "50%",
        marginTop: "-85px",
        marginLeft: "-173px",
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: "4px"
    }).click(function (e) {
        e.preventDefault();
        e.stopPropagation();
    }).appendTo(div);
    var img1 = $("<img src='../images/row2.png'>").css({
        position: "absolute",
        width: "20px",
        height: "20px",
        left: "50%",
        top: "50%",
        marginTop: "-120px",
        marginLeft: "180px",
        cursor: "pointer"
    }).appendTo(div);

    var p1 = $("<p></p>").css({
        marginTop: "50px",
        width: "100%",
    }).appendTo(div1);

    var img = $("<img src='../images/addOk.png'>").css({
        marginLeft: "100px",
        width: "25px",
        height: "25px",
        verticalAlign: "top"
    }).appendTo(p1);

    var span = $("<span>预约成功</span>").css({
        marginLeft: "30px",
        color: "#347ffe",
        fontSize: "18px"
    }).appendTo(p1);

    var p2 = $("<p>稍后会有工作人员与您联系</p>").css({
        marginTop: "25px",
        width: "100%",
        textAlign: "center",
        color: "#333",
        fontSize: "14px"
    }).appendTo(div1);
}