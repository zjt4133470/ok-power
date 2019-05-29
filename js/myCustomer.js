var URL = localStorage.getItem("URL");
$.ajaxSetup({cache: false});
$.ajax({
    type: "post",
    url: URL + "?c=AfficialLogin&a=joinExperience",
    success: function (data) {
        console.log(data);
        sessionStorage.setItem("a", data.data.status);
        var a = sessionStorage.getItem("a");
        if (data.errcode == "0") {
            $(".dataTime").html(data.data.surplus_time);
            if (a == "1") {
                $("#cont_1 .experience").click(function () {
                    window.open("https://demo.ok-power.com", "_blank");
                    //var tempwindow = window.open('http://_blank'); // 先打开页面
                    //tempwindow.location = 'https://demo.ok-power.xyz'; // 后更改页面地址
                })
            } else if (a == "-1") {
                $("#cont_1 .experience").click(function () {
                    $("#pop").show()
                })
            } else if (a == "-2") {
                $("#cont_1 .p4").show();
                $("#cont_1 .p5").show();
                $("#cont_1 .p2").hide();
                $("#cont_1 .cont_1_1 .experience").css({
                    backgroundColor: "#ccc"
                });
            }
        } else {
            prompt(data.errstr)
        }
    },
    error: function (arr) {
        console.log(arr)
    }
});
//继续使用
$("#cont_1 .p5").click(function () {
    $.ajax({
        type: "post",
        url: URL + "?c=AfficialLogin&a=keepUsing",
        success: function (data) {
            if (data.errcode == "0") {
                window.location.href = "myCustomer.html"
            } else {
                prompt(data.errstr)
            }
        },
        error: function (arr) {
            console.log(arr)
        }
    });
});
//记录线索
$("#pop .start").click(function () {
    $("#pop").hide();
    $.ajax({
        type: "post",
        url: URL + "?c=AfficialLogin&a=addSalesLead",
        data: {
            "company_name": $("#pop #firmName").val(),
            "industry_name": $("#firmType option:selected").val(),
            "company_scale": $("#firmPeople option:selected").val(),
            "user_name": $("#pop #name").val()
        },
        success: function (data) {
            sessionStorage.setItem("a", "1");
            var a = sessionStorage.getItem("a");
            if (a == "1") {
                $("#cont_1 .experience").click(function () {
                    window.open("https://demo.ok-power.com", "_blank");
                    // var tempwindow = window.open('_blank'); // 先打开页面
                    // tempwindow.location = 'https://demo.ok-power.xyz'; // 后更改页面地址
                })
            }
            window.open("https://demo.ok-power.com", "_blank");
            // var tempwindow = window.open('_blank'); // 先打开页面
            // tempwindow.location = 'https://demo.ok-power.xyz'; // 后更改页面地址
        },
        error: function (arr) {
            console.log(arr)
        }
    });
});