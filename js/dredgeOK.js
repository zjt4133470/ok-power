var URL = localStorage.getItem("URL");
$.ajaxSetup({cache: false});
var apply_state = sessionStorage.getItem("apply_state");
if (userName == "" || userName == undefined || userName == null) {
    prompt("请您先登录")
} else {
    var s1, s2, s3, s4, s5;
    $("#form").attr("action", URL + "?c=Dredge&a=fileUpload");
    $("#form1").attr("action", URL + "?c=Dredge&a=fileUpload");
    $("#form2").attr("action", URL + "?c=Dredge&a=fileUpload");
//下拉框1
//     var bool = false;
//     $(function () {
//         $("#cont .cont_input").click(function () {
//             bool = !bool;
//             if (bool) {
//                 $("#cont .cont_ul").show();
//                 $("#cont .cont_input img").css({
//                     transform: "rotate(180deg)",
//                     // transitionDuration:"1s"
//                 })
//             } else {
//                 $("#cont .cont_ul").hide();
//                 $("#cont .cont_input img").css({
//                     transform: "rotate(360deg)",
//                     // transitionDuration:"1s"
//                 })
//             }
//         });
//         $("#cont .cont_ul").on("click", "li", function () {
//             bool = !bool;
//             $("#cont .cont_ul").hide();
//             $("#cont .cont_input img").css({
//                 transform: "rotate(360deg)",
//             });
//             window.sessionStorage.setItem("s1", $(this).index());
//             var index = sessionStorage.getItem("s1");
//             s1 = index;
//             window.sessionStorage.setItem("option", $(this).html());
//             var option = sessionStorage.getItem("option");
//             $("#cont .cont_input span").css("color", "#333").html(option);
//             // $("#cont .cont_input span").css("color","#333").html($(this).html())
//
//         })
//     });

//下拉框2
    var bool1 = false;
    $(function () {
        $("#cont #firmScale").click(function () {
            bool1 = !bool1;
            if (bool1) {
                $("#cont #firmScale_ul").show();
                $("#cont #firmScale img").css({
                    transform: "rotate(180deg)",
                    // transitionDuration:"1s"
                })
            } else {
                $("#cont #firmScale_ul").hide();
                $("#cont #firmScale img").css({
                    transform: "rotate(360deg)",
                    // transitionDuration:"1s"
                })
            }
        });
        $("#cont #firmScale_ul").on("click", "li", function () {
            bool1 = !bool1;
            $("#cont #firmScale_ul").hide();
            $("#cont #firmScale img").css({
                transform: "rotate(360deg)",
            });
            window.sessionStorage.setItem("s2", $(this).index());
            var index = sessionStorage.getItem("s2");
            s2 = index;
            window.sessionStorage.setItem("option1", $(this).html());
            var option1 = sessionStorage.getItem("option1");
            $("#cont #firmScale span").css("color", "#333").html(option1);
        })
    });

//下拉框3
    var bool2 = false;
    $("#cont #firmPlace").click(function () {
        bool2 = !bool2;
        if (bool2) {
            $("#cont #firmPlace_ul").show();
            $("#cont #firmPlace img").css({
                transform: "rotate(180deg)",
                // transitionDuration:"1s"
            })
        } else {
            $("#cont #firmPlace_ul").hide();
            $("#cont #firmPlace img").css({
                transform: "rotate(360deg)",
                // transitionDuration:"1s"
            })
        }
    });
    $("#cont #firmPlace_ul").on("click", "li", function () {
        bool2 = !bool2;
        $("#cont #firmPlace_ul").hide();
        $("#cont #firmPlace img").css({
            transform: "rotate(360deg)",
        });
        window.sessionStorage.setItem("s3", $(this).index());
        var index = sessionStorage.getItem("s3");
        s3 = index;
        window.sessionStorage.setItem("option2", $(this).html());
        var option2 = sessionStorage.getItem("option2");
        $("#cont #firmPlace span").css("color", "#333").html(option2);

    });

//下拉框4
    var bool3 = false;
    $("#cont .city").click(function () {
        bool3 = !bool3;
        if (bool3) {
            $("#cont #city").show();
            $("#cont .city img").css({
                transform: "rotate(180deg)",
                // transitionDuration:"1s"
            })
        } else {
            $("#cont #city").hide();
            $("#cont .city img").css({
                transform: "rotate(360deg)",
                // transitionDuration:"1s"
            })
        }
    });
    var arr5 = [];
    $("#cont #city").on("click", "li", function () {
        $("#district ul").html("");
        arr5 = [];
        bool3 = !bool3;
        $("#cont #city").hide();
        $("#cont .city img").css({
            transform: "rotate(360deg)",
        });
        window.sessionStorage.setItem("s4", $(this).index());
        var index = sessionStorage.getItem("s4");
        s4 = index;
        window.sessionStorage.setItem("option3", $(this).html());
        var option3 = sessionStorage.getItem("option3");
        $("#cont .city span").css("color", "#333").html(option3);
        $("#cont .district span").html("");
        $.ajax({
            type: "post",
            url: URL + "?c=Dredge&a=getPowerInfo",
            success: function (data) {
                if (data.errcode == "0") {
                    var arr4 = data.data.area//所在城市
                    arr5 = arr4[s4].children;
                    for (var i = 0; i < arr5.length; i++) {
                        $("#district ul").append("<li>" + arr5[i].name + "</li>");
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

//下拉框5
    var bool4 = false;
    $("#cont .district").click(function () {
        bool4 = !bool4;
        if (bool4) {
            $("#cont #district").show();
            $("#cont .district img").css({
                transform: "rotate(180deg)",
                // transitionDuration:"1s"
            })
        } else {
            $("#cont #district").hide();
            $("#cont .district img").css({
                transform: "rotate(360deg)",
                // transitionDuration:"1s"
            })
        }
    });
    $("#cont #district").on("click", "li", function () {
        bool4 = !bool4;
        $("#cont #district").hide();
        $("#cont .district img").css({
            transform: "rotate(360deg)",
        });
        window.sessionStorage.setItem("option4", $(this).html());
        var option4 = sessionStorage.getItem("option4");
        $("#cont .district span").css("color", "#333").html(option4);
        window.sessionStorage.setItem("s5", $(this).index());
        var index = sessionStorage.getItem("s5");
        s5 = index;
    });
//进入渲染页面
    $(function () {
        var option = sessionStorage.getItem("option");
        $("#cont .cont_input span").css("color", "#333").html(option);
        var option1 = sessionStorage.getItem("option1");
        $("#cont #firmScale span").css("color", "#333").html(option1);
        var option2 = sessionStorage.getItem("option2");
        $("#cont #firmPlace span").css("color", "#333").html(option2);
        var option3 = sessionStorage.getItem("option3");
        $("#cont .city span").css("color", "#333").html(option3);
        var option4 = sessionStorage.getItem("option4");
        $("#cont .district span").css("color", "#333").html(option4);
        $.ajax({
            type: "post",
            url: URL + "?c=Dredge&a=getPowerInfo",
            success: function (data) {
                if (data.errcode == "0") {
                    var arr1 = data.data.product_version//版本
                    var arr2 = data.data.scale//企业规模
                    var arr3 = data.data.industry//所在行业
                    var arr4 = data.data.area//所在城市
                    for (var i = 0; i < arr1.length; i++) {
                        $(".cont_1 .cont_ul ul").append("<li>" + arr1[i].name + "</li>")
                        if (version == arr1[i].version_id) {
                            $("#cont .cont_input span").css("color", "#333").text(arr1[i].name);
                        }
                    }
                    for (var i = 0; i < arr2.length; i++) {
                        $("#firmScale_ul ul").append("<li>" + arr2[i].name + "</li>")
                        if (scale == arr2[i].id) {
                            $("#cont #firmScale span").css("color", "#333").html(arr2[i].name);
                        }
                    }
                    for (var i = 0; i < arr3.length; i++) {
                        $("#firmPlace_ul ul").append("<li>" + arr3[i].name + "</li>")
                        if (industry == arr3[i].id) {
                            $("#cont #firmPlace span").css("color", "#333").html(arr3[i].name);
                        }
                    }
                    for (var i = 0; i < arr4.length; i++) {
                        $("#city ul").append("<li>" + arr4[i].name + "</li>");
                        if (province == arr4[i].id) {
                            $("#cont .city span").css("color", "#333").html(arr4[i].name);
                            var arr6 = arr4[i].children;
                            console.log(arr6);
                            for (var j = 0; j < arr6.length; j++) {
                                if (city == arr6[j].id) {
                                    console.log(arr6[j].name);
                                    $("#cont .district span").css("color", "#333").html(arr6[j].name);
                                }
                            }
                        }
                    }

                    //开通ok-power
                    $("#from_submit").click(function () {
                        if (imgurl && imgurl1 && imgurl2) {
                            if (bol) {
                                required();
                                // var s1 = sessionStorage.getItem("s1");
                                var s2 = sessionStorage.getItem("s2");
                                var s3 = sessionStorage.getItem("s3");
                                var s4 = sessionStorage.getItem("s4");
                                var s5 = sessionStorage.getItem("s5");
                                var data = {
                                    // "version_id": s1 ? arr1[s1].version_id : version,//版本ID
                                    "version_id": "4",//版本ID
                                    "company_name": $("#firmNames").val(),//企业名称
                                    "scale_id": s2 ? arr2[s2].id : scale,//企业规模
                                    "industry_id": s3 ? arr3[s3].id : industry,//所在行业
                                    "city_id": s5 ? arr5[s5].id : city,//城市
                                    "province_id": s4 ? arr4[s4].id : province,//省份
                                    "registered_address": $(".address").val(),//注册地址
                                    "organization_code": $("#institutionNumber").val(),//组织机构代码
                                    "business_license": imgurl,//营业执照
                                    "manager_name": $("#Names").val(),//管理者姓名
                                    "mobile": $("#Phones").val(),//管理者手机
                                    "code": $("#codeM").val(),//验证码
                                    "email": $("#email").val(),//联系邮箱
                                    "other_ways": $("#telPhone").val(),//其他联系方式
                                    "id_card": imgurl1,//身份证
                                    "logo": imgurl2,//上传logo
                                };
                                $.ajax({
                                    type: "post",
                                    url: URL + "?c=Dredge&a=openPower",
                                    data: data,
                                    success: function (data) {
                                        console.log(data)
                                        if (data.errcode == "0") {
                                            // var company_name=data.data.company_name;//公司名称
                                            // var manager=data.data.manager;//管理员姓名
                                            // var mobile=data.data.mobile;//管理员手机号
                                            // var price=data.data.price;//所需价格
                                            // var unit=data.data.unit;//开通年限
                                            // var version=data.data.version;//开通版本
                                            // var version_id=data.data.version_id//开通版本id
                                            // var time=data.data.time//时间
                                            // var cid=data.data.cid//产品ID
                                            // var state=data.data.state;
                                            // var arr=[company_name,manager,mobile,price,unit,version,version_id,time,cid,state];
                                            // var arrs=JSON.stringify(arr);
                                            // console.log(arrs)
                                            // localStorage.setItem("arrs",arrs);
                                            window.location.href = "pay.html";
                                        } else {
                                            prompt(data.errstr)
                                        }
                                    },
                                    error: function (arr) {
                                        console.log(arr)
                                    }
                                });
                            } else {
                                prompt("请仔细阅读并且同意协议")
                            }
                        } else {
                            prompt("图片正在上传中")
                        }
                    });
                } else {
                    prompt(data.errstr)
                }
            },
            error: function (arr) {
                console.log(arr)
            }
        });
    });
//发送验证码倒计时
    var timer = 60;

    function Countdown() {
        if (timer >= 1) {
            timer -= 1;
            $($(".get_codeM1 .downTime")).html(timer);
            if (timer == 0) {
                $(".get_codeM").show();
                $(".get_codeM1").hide();
            }
            var test1 = setTimeout(function () {
                Countdown();
                clearTimeout(test1);
            }, 1000);
        }
    }

    $(".get_codeM").click(function () {
        timer = 60;
        Countdown();
        $(".get_codeM").hide();
        $(".get_codeM1").show();

    });
//发送验证码
    $(".get_codeM").click(function () {
        $.ajax({
            type: "post",
            url: URL + "?c=AfficialLogin&a=sendCode",
            data: {
                "mobile": $("#Phones").val(),
                "operate": "admin_info",
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

//上传照片部分
    var imgurl;
    var imgurl1;
    var imgurl2;
    var bol;
    var thumb = "";
    var thumb1 = "";
    var thumb2 = "";
    $("#file").on("change", function () {
        $("#form").submit();
        var upload_file = this.files[0];
        var resder = new FileReader();
        resder.readAsDataURL(upload_file);
        resder.onload = function (e) {
            $(".cont_file").css({
                backgroundImage: 'url(' + this.result + ')',
                border: "none"
            });
            $("#clickFile").css({
                "color": "#347ffe",
                "fontSize": "16px",
                "marginTop": "90px",
                "marginLeft": "224px",
                "width": "200px"
            })
        };
        var timer = setTimeout(function () {
            if (document.all) { // IE
                thumb = document.frames['img_file'].document
            } else { // 标准
                thumb = document.getElementById('img_file').contentWindow.document
            }
            if (thumb.body.innerHTML != '') {
                var result = thumb.body.innerHTML;
                var arr = JSON.parse(result);
                imgurl = arr.data.url;
                console.log(imgurl);
                clearInterval(timer);
            }
        }, 2000)
    });
// 上传身份证照片部分
    $("#file1").on("change", function () {
        $("#form1").submit();
        var upload_file = this.files[0];
        var resder = new FileReader();
        resder.readAsDataURL(upload_file);
        resder.onload = function (e) {
            $(".cont_file1").css({
                backgroundImage: 'url(' + this.result + ')',
                border: "none"
            });
            $("#clickFile1").css({
                "color": "#347ffe",
                "fontSize": "16px",
                "marginTop": "90px",
                "marginLeft": "224px",
                "width": "200px"
            })
        }
        var timer = setTimeout(function () {
            $
            if (document.all) { // IE
                thumb1 = document.frames['img_file1'].document
            } else { // 标准
                thumb1 = document.getElementById('img_file1').contentWindow.document
            }
            if (thumb1.body.innerHTML != '') {
                var result = thumb1.body.innerHTML;
                var arr = JSON.parse(result);
                imgurl1 = arr.data.url;
                console.log(imgurl1);
                clearInterval(timer);
            }
        }, 2000)
    });
// 上传logo部分
    $("#file2").on("change", function () {
        $("#form2").submit();
        var upload_file = this.files[0];
        var resder = new FileReader();
        resder.readAsDataURL(upload_file);
        resder.onload = function (e) {
            $(".cont_file2").css({
                backgroundImage: 'url(' + this.result + ')',
                border: "none"
            });
            $("#clickFile2").css({
                "color": "#347ffe",
                "fontSize": "16px",
                "marginTop": "90px",
                "marginLeft": "224px",
                "width": "200px"
            })
        }
        var timer = setTimeout(function () {
            if (document.all) { // IE
                thumb2 = document.frames['img_file2'].document
            } else { // 标准
                thumb2 = document.getElementById('img_file2').contentWindow.document
            }
            if (thumb2.body.innerHTML != '') {
                var result = thumb2.body.innerHTML;
                var arr = JSON.parse(result);
                imgurl2 = arr.data.url;
                console.log(imgurl2)
                clearInterval(timer);
            }
        }, 2000)
    });
    /*控制阅读*/

    $('.consent').click(function () {
        if ($(".consent").is(':checked')) {
            bol = true;
        } else {
            bol = false;
        }
    });
}

//遗漏来判断是否为必填项
function required() {
    if ($("#firmNames").val() == "") {
        $("#firmNames").css({
            border: "1px solid #fe6e6e"
        }).attr("placeholder", "此项为必填项")
    }
    if ($(".address").val() == "") {
        $(".address").css({
            border: "1px solid #fe6e6e"
        }).attr("placeholder", "此项为必填项")
    }
    if ($("#institutionNumber").val() == "") {
        $("#institutionNumber").css({
            border: "1px solid #fe6e6e"
        }).attr("placeholder", "此项为必填项")
    }
    if ($("#Names").val() == "") {
        $("#Names").css({
            border: "1px solid #fe6e6e"
        }).attr("placeholder", "此项为必填项")
    }
    if ($("#Phones").val() == "") {
        $("#Phones").css({
            border: "1px solid #fe6e6e"
        }).attr("placeholder", "此项为必填项")
    }
    if ($("#codeM").val() == "") {
        $("#codeM").css({
            border: "1px solid #fe6e6e"
        }).attr("placeholder", "此项为必填项")
    }
    if ($("#email").val() == "") {
        $("#email").css({
            border: "1px solid #fe6e6e"
        }).attr("placeholder", "此项为必填项")
    }
    if ($("#telPhone").val() == "") {
        $("#telPhone").css({
            border: "1px solid #fe6e6e"
        }).attr("placeholder", "此项为必填项")
    }
    if (imgurl == undefined) {
        $(".cont_file").css({
            border: "1px solid #fe6e6e"
        })
    }
    if (imgurl1 == undefined) {
        $(".cont_file1").css({
            border: "1px solid #fe6e6e"
        })
    }
    if (imgurl2 == undefined) {
        $(".cont_file2").css({
            border: "1px solid #fe6e6e"
        })
    }
}


//失去焦点来判断是否为必填项
$("#firmNames").on("blur", function () {
    if ($("#firmNames").val() == "") {
        $("#firmNames").css({
            border: "1px solid #fe6e6e"
        }).attr("placeholder", "此项为必填项")
    } else {
        $("#firmNames").css({
            border: "1px solid #cdd3da"
        })
    }
});
$(".address").on("blur", function () {
    if ($(".address").val() == "") {
        $(".address").css({
            border: "1px solid #fe6e6e"
        }).attr("placeholder", "此项为必填项")
    } else {
        $(".address").css({
            border: "1px solid #cdd3da"
        })
    }
});
$("#institutionNumber").on("blur", function () {
    if ($("#institutionNumber").val() == "") {
        $("#institutionNumber").css({
            border: "1px solid #fe6e6e"
        }).attr("placeholder", "此项为必填项")
    } else {
        $("#institutionNumber").css({
            border: "1px solid #cdd3da"
        })
    }
});
$("#Names").on("blur", function () {
    if ($("#Names").val() == "") {
        $("#Names").css({
            border: "1px solid #fe6e6e"
        }).attr("placeholder", "此项为必填项")
    } else {
        $("#Names").css({
            border: "1px solid #cdd3da"
        })
    }
});
$("#firmNames").on("blur", function () {
    if ($("#firmNames").val() == "") {
        $("#firmNames").css({
            border: "1px solid #fe6e6e"
        }).attr("placeholder", "此项为必填项")
    } else {
        $("#firmNames").css({
            border: "1px solid #cdd3da"
        })
    }
});
$("#Phones").on("blur", function () {
    if ($("#Phones").val() == "") {
        $("#Phones").css({
            border: "1px solid #fe6e6e"
        }).attr("placeholder", "此项为必填项")
    } else {
        $("#Phones").css({
            border: "1px solid #cdd3da"
        })
    }
});
$("#codeM").on("blur", function () {
    if ($("#codeM").val() == "") {
        $("#codeM").css({
            border: "1px solid #fe6e6e"
        }).attr("placeholder", "此项为必填项")
    } else {
        $("#codeM").css({
            border: "1px solid #cdd3da"
        })
    }
});
$("#email").on("blur", function () {
    if ($("#email").val() == "") {
        $("#email").css({
            border: "1px solid #fe6e6e"
        }).attr("placeholder", "此项为必填项")
    } else {
        $("#email").css({
            border: "1px solid #cdd3da"
        })
    }
});
$("#telPhone").on("blur", function () {
    if ($("#telPhone").val() == "") {
        $("#telPhone").css({
            border: "1px solid #fe6e6e"
        }).attr("placeholder", "此项为必填项")
    } else {
        $("#telPhone").css({
            border: "1px solid #cdd3da"
        })
    }
});

//邮箱的正则验证
$("#email").blur(function () {
    checkUserEmail($("#email").val());
});

function checkUserEmail(str) {
    var re = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    if (re.test(str)) {
        $("#email").css({
            border: "1px solid #cdd3da"
        })
    } else {
        prompt("输入邮箱格式有误");
        $("#email").css({
            border: "1px solid #fe6e6e"
        })
    }
}

//申请详情
var version;
var scale;
var industry;
var city;
var province;
// var LOGO;
// var business_license;
// var ID_Card;
$(function () {
    $.ajax({
        type: "post",
        url: URL + "?c=Dredge&a=applyDetial",
        success: function (data) {
            console.log(data)
            if (data.errcode == "0") {
                var arr = data.data;
                $("#firmNames").val(arr.cname)//企业名称
                $(".address").val(arr.registered_address)//注册地址
                $("#institutionNumber").val(arr.organization_code)//组织机构代码
                $("#Names").val(arr.manager_name)//管理者姓名
                $("#Phones").val(arr.mobile)//管理者手机
                $("#email").val(arr.email)//联系邮箱
                $("#telPhone").val(arr.other_ways)//其他联系方式
                version = arr.version_id;//版本ID
                scale = arr.scale_id;//企业规模
                industry = arr.industry_id//所在行业
                city = arr.city_id;
                province = arr.province_id;
                imgurl2 = arr.logo;
                imgurl1 = arr.id_card;
                imgurl = arr.business_license;
                if (apply_state == -3) {
                    $("#cont #cont_file2 .cont_file2 label").css({
                        "color": "#347ffe",
                        "fontSize": "16px",
                        "marginTop": "90px",
                        "marginLeft": "224px",
                        "width": "200px"
                    })
                    $(".cont_file").css({
                        backgroundImage: 'url(' + imgurl + ')',
                        border: "none"
                    });
                    $("#cont_file .cont_file label").css({
                        "color": "#347ffe",
                        "fontSize": "16px",
                        "marginTop": "90px",
                        "marginLeft": "224px",
                        "width": "200px"
                    })
                    $(".cont_file1").css({
                        backgroundImage: 'url(' + imgurl1 + ')',
                        border: "none"
                    });
                    $("#cont_file1 .cont_file1 label").css({
                        "color": "#347ffe",
                        "fontSize": "16px",
                        "marginTop": "90px",
                        "marginLeft": "224px",
                        "width": "200px"
                    })
                    $(".cont_file2").css({
                        backgroundImage: 'url(' + imgurl2 + ')',
                        border: "none"
                    });
                }
            } else {

            }
        },
        error: function (arr) {
            console.log(arr)
        }
    });
});
