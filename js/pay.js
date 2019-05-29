var URL = localStorage.getItem("URL");
// var payindex="";
var pay_Money;
var cid;
var a;
var apply_state = sessionStorage.getItem("apply_state");
$(function () {
    $.ajax({
        type: "post",
        url: URL + "?c=Dredge&a=orderInfo",
        success: function (data) {
            if (data.errcode == "0") {
                var arrs = data.data;
                var name = arrs.cname;
                var product = arrs.version_name;
                var mobile = arrs.mobile;
                var manager_name = arrs.manager_name;
                var regtime = arrs.regtime;
                var start_time = arrs.start_time;
                var end_time = arrs.end_time;
                var client = arrs.client;
                var console = arrs.console;
                pay_Money = arrs.unit_price;
                $(".companyName").html(name);
                $(".product").html(product);
                $(".timestamp").html(timeFilter(regtime));
                $(".start_time").html(timeFilter1(start_time));
                $(".end_time").html(timeFilter1(end_time));
                $(".adminName").html(manager_name);
                $(".adminPhone").html(mobile);
                $(".pay_Money").html(pay_Money);
                $(".pay1").html(pay_Money);
                $("#site1").val(client);
                $("#site2").val(console);
                a = arrs.state;
                cid = arrs.cid;
                if (a == -2 || apply_state == -2) {
                    $("#cont .cont_1 .cont_1_foot").show();
                    $("#cont .cont_1 .cont_1_1 img").attr("src", "./images/icon/waitPay.png");
                    $("#cont .cont_1 .cont_1_1 .title").html("等待支付")
                } else if (a == -1 || apply_state == -1) {
                    $("#cont .cont_1 .cont_1_foot1").show();
                    $("#cont .cont_1 .cont_1_foot1 p span").html(pay_Money);
                    $("#cont .cont_1 .cont_1_1 img").attr("src", "./images/icon/waitCheck.png");
                    $("#cont .cont_1 .cont_1_1 .title").html("受理中");
                    $("#cont .cont_1 .cont_1_foot1 .cont_1_foot1_1").hide();
                    $("#cont .cont_1 .cont_1_foot1 .cont_1_foot1_2").show();
                    $("#cont .cont_1 .cont_1_foot").hide();
                    $(".warn_pay_1 .p2").hide()

                } else if (a == -3 || apply_state == -3) {
                    $("#cont .cont_1 .cont_1_foot1").show();
                    $("#cont .cont_1 .cont_1_foot1 p span").html(pay_Money);
                    $("#cont .cont_1 .cont_1_1 img").attr("src", "./images/icon/warn.png");
                    $("#cont .cont_1 .cont_1_1 .title").css({
                        fontSize: "14px"
                    }).html("审核暂未通过，您提供的资料有误");
                    $("#cont .cont_1 .cont_1_foot1 .cont_1_foot1_1").show();
                    $("#cont .cont_1 .cont_1_foot1 .cont_1_foot1_2").hide()
                } else if (a == 1 || apply_state == 1) {
                    $("#cont .cont_1 .cont_1_1 .title_times").show();
                    $("#cont .cont_1 .cont_1_2 .storePhone").show();
                    $("#cont .cont_1 .cont_1_foot2").show();
                    $("#cont .cont_1 .cont_1_1 img").attr("src", "./images/icon/service.png");
                    $("#cont .cont_1 .cont_1_1 .title").html("服务中");
                }
            } else {

            }
        },
        error: function (arr) {
            console.log(arr)
        }
    });
    // var arr=localStorage.getItem("arrs");
    // var arrs=JSON.parse(arr);
    //
    // $(".adminName").html(arrs[1]);
    // $(".adminPhone").html(arrs[2]);
    // $(".pay_Money").html(arrs[3]);
    // pay_Money=arrs[3];
    // cid=arrs[8];
    // a=arrs[9];
    // $(".pay1").html(arrs[3]);
    // $(".number").html(arrs[4]);
    // $(".product").html(arrs[5]);
    // var version_id=arrs[6];
    // $(".timestamp").html(timeFilter(arrs[7]));
    // if(version_id=="4"){
    //     // $(".validTime").show()
    // }
});

//切换支付
// $("#cont .cont_1 .cont_1_3_ul li").click(function () {
//    $(this).addClass("select1").siblings().removeClass("select1");
//    payindex=$(this).index()+1;
// });
//点击立即支付

// $(".cont_1_4 .payMoney").click(function () {
//     if(payindex==""){
//         prompt("请先选择支付方式")
//     }else if(payindex=="1"){
//         // var url;
//         // //微信二维码生成
//         //     $.ajax({
//         //         type: "post",
//         //         url: URL + "?c=AfficialLogin&a=keepUsing",
//         //         success: function (data) {
//         //             if (data.errcode == "0") {
//         //                 url=data.data.url
//         //             } else {
//         //                 prompt(data.errstr)
//         //             }
//         //         },
//         //         error: function (arr) {
//         //             console.log(arr)
//         //         }
//         //     });
//         payMoney();
//         $("#warn_pay").show();
//         $("#warn_pay .warn_pay .warn_pay_2").show();
//         $("#warn_pay .warn_pay .warn_pay_3").hide();
//         $("#warn_pay .warn_pay .warn_pay_1 .p2 .pay1").html(pay_Money);
//         $("#warn_pay .warn_pay .warn_pay_2 img").css({
//             background:"yellow"
//             // backgroundImage:'url("'+url+'")'
//         });
//         $("#warn_pay .warn_pay .warn_pay_2 .QRcode").html("微信支付二维码");
//         $("#warn_pay .warn_pay .warn_pay_4").hide()
//     }else if(payindex=="2"){
//         a=2;
//         if(a=="2"){
//             $("#cont .cont_1 .cont_1_foot1").show();
//             $("#cont .cont_1 .cont_1_foot1 p span").html("1111");
//             $("#cont .cont_1 .cont_1_1 img").attr("src","./images/icon/waitCheck.png");
//             $("#cont .cont_1 .cont_1_1 .title").html("受理中");
//             $("#cont .cont_1 .cont_1_foot1 .cont_1_foot1_1").hide();
//             $("#cont .cont_1 .cont_1_foot1 .cont_1_foot1_2").show();
//             $("#cont .cont_1 .cont_1_foot").hide();
//         }
//         // //支付宝二维码生成
//         // var url;
//         // $.ajax({
//         //     type: "post",
//         //     url: URL + "?c=AfficialLogin&a=keepUsing",
//         //     success: function (data) {
//         //         if (data.errcode == "0") {
//         //
//         //         } else {
//         //             prompt(data.errstr)
//         //         }
//         //     },
//         //     error: function (arr) {
//         //         console.log(arr)
//         //     }
//         // });
//         payMoney();
//          $("#warn_pay").show();
//          $("#warn_pay .warn_pay .warn_pay_2").show();
//          $("#warn_pay .warn_pay .warn_pay_3").hide();
//          $("#warn_pay .warn_pay .warn_pay_1 .p2 .pay1").html(pay_Money);
//          $("#warn_pay .warn_pay .warn_pay_2 img").css({
//              background:"green"
//              // backgroundImage:'url("'+url+'")'
//          });
//          $("#warn_pay .warn_pay .warn_pay_2 .QRcode").html("支付宝支付二维码");
//          $("#warn_pay .warn_pay .warn_pay_4").hide()
//      }else if(payindex=="3"){
//          $("#warn_pay").show();
//          $("#warn_pay .warn_pay").css("marginTop","-250px");
//          $("#warn_pay .warn_pay .warn_pay_3").show();
//          $("#warn_pay .warn_pay .warn_pay_2").hide();
//         $("#warn_pay .warn_pay .warn_pay_1 .p2 .pay1").html(pay_Money);
//         $("#warn_pay .warn_pay .warn_pay_4").show()
//     }
// });

//只选择支付宝的方式
$(".cont_1_4 .payMoney").click(function () {
    //支付宝二维码生成
    $.ajax({
        type: "post",
        url: URL + "?c=Order&a=createOrder",
        data: {
            "pay_method": "alipay",
            "cid": cid
        },
        success: function (data) {
            if (data.errcode == "0") {
                var urlimg = data.data.data.pay_scan_img;
                $("#warn_pay .warn_pay .warn_pay_2 img").css({
                    backgroundImage: 'url("' + urlimg + '")'
                });
                var sn = data.data.data.sn;
                payMoney(sn);
            } else {
                prompt(data.errstr)
            }
        },
        error: function (arr) {
            console.log(arr)
        }
    });

    $("#warn_pay").show();
    $("#warn_pay .warn_pay .warn_pay_2").show();
    $("#warn_pay .warn_pay .warn_pay_3").hide();
    $("#warn_pay .warn_pay .warn_pay_1 .p2 .pay1").html(pay_Money);
    $("#warn_pay .warn_pay .warn_pay_1 .QRcode").html("支付宝支付");
    $("#warn_pay .warn_pay .warn_pay_4").hide()
});
//关闭弹窗
$("#warn_pay .warn_pay .warn_pay_1 .p1 img").click(function () {
    $("#warn_pay").hide();
    clearInterval(paysetInterval)
});
//复制功能
$("#cont .cont_1 .cont_1_foot2 .copy1").click(function () {
    var site1 = document.getElementById("site1");
    site1.select();
    document.execCommand('copy');
});
$("#cont .cont_1 .cont_1_foot2 .copy2").click(function () {
    var site2 = document.getElementById("site2");
    site2.select();
    document.execCommand('copy');
});

//时间
function timeFilter(value) {
    var oDate = new Date();
    oDate.setTime(value * 1000);
    var y = oDate.getFullYear();
    var M = oDate.getMonth() + 1;
    parseInt(M) < 10 ? M = '0' + M : M = M;
    var d = oDate.getDate();
    parseInt(d) < 10 ? d = '0' + d : d = d;
    var h = oDate.getHours();
    parseInt(h) < 10 ? h = '0' + h : h = h;
    var m = oDate.getMinutes();
    parseInt(m) < 10 ? m = '0' + m : m = m;
    var s = oDate.getSeconds();
    parseInt(s) < 10 ? s = '0' + s : s = s;
    return y + '/' + M + '/' + d + '  ' + h + ':' + m + ':' + s
}

//时间
function timeFilter1(value) {
    var oDate = new Date();
    oDate.setTime(value * 1000);
    var y = oDate.getFullYear();
    var M = oDate.getMonth() + 1;
    parseInt(M) < 10 ? M = '0' + M : M = M;
    var d = oDate.getDate();
    parseInt(d) < 10 ? d = '0' + d : d = d;
    return y + '/' + M + '/' + d
}


//扫描二维码调取的接口
var paysetInterval;

function payMoney(sn) {
    paysetInterval = setInterval(function () {
        $.ajax({
            type: "post",
            url: URL + "?c=Order&a=getOrderStatus",
            data: {
                "sn": sn
            },
            success: function (data) {
                if (data.errcode == "0") {
                    prompt("支付成功");
                    clearInterval(paysetInterval);
                    $("#warn_pay").hide();
                    location.reload();

                } else {
                    // prompt(data.errstr)
                }
            },
            error: function (arr) {
                console.log(arr)
            }
        });
    }, 2000);
}

//点击修改申请资料
$(".Application").click(function () {
    window.location.href = "dredgeOK.html"
});


