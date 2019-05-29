var s = window.location.search;
s = s.substring(s.indexOf("?") + 1, s.length).split("=")[1];


// search1();
// var arr1=[{
//     name:"如何登录？",
//     time:"2018/07/18 18:09",
//     describe1:"进入OK-Power官网，点击右上角“登录”按钮，输入手机号和验证码进行登录。",
//     describe2:"",
//     img1:"1.png",
//     img2:""
// },{
//     name:"如何申请体验？",
//     time:"2018/07/18 18:09",
//     describe1:"方法一：进入OK-Power官网，点击“在线体验”，输入手机号和验证码进行体验。",
//     describe2:"方法二：进入OK-Power官网，下拉至官网底部，输入手机号后点击“免费体验”",
//     img1:"2_1.png",
//     img2:"2_2.png"
// },{
//     name:"如何联系客服",
//     time:"2018/07/18 18:09",
//     describe1:"通过官网进入“服务与支持”。",
//     describe2:"",
//     img1:"",
//     img2:""
// },{
//     name:"如何体验OK-Power网页端",
//     time:"2018/07/18 18:09",
//     describe1:"进入OK-Power官网，点击“在线体验”，输入手机号和验证码，使用手机号和初始密码：666666进行登录体验。",
//     describe2:"",
//     img1:"3.png",
//     img2:""
// },{
//     name:"如何体验OK-Power移动端",
//     time:"2018/07/18 18:09",
//     describe1:"下载：①应用商店下载  ②官网-移动端进行下载",
//     describe2:"",
//     img1:"3.png",
//     img2:""
// },{
//     name:"产品安全相关3",
//     time:"2018/07/18 18:09",
//     describe:"产品安全相关产品安全相关产品安全相关、视频、直播和专栏，小鹅通为大家提供了填写内容描述的功能。",
//     img:"banner3.png"
// },{
//     name:"产品安全相关3",
//     time:"2018/07/18 18:09",
//     describe:"产品安全相关产品安全相关产品安全相关、视频、直播和专栏，小鹅通为大家提供了填写内容描述的功能。",
//     img:"banner3.png"
// },{
//     name:"产品安全相关3",
//     time:"2018/07/18 18:09",
//     describe:"产品安全相关产品安全相关产品安全相关、视频、直播和专栏，小鹅通为大家提供了填写内容描述的功能。",
//     img:"banner3.png"
// },{
//     name:"产品安全相关3",
//     time:"2018/07/18 18:09",
//     describe:"产品安全相关产品安全相关产品安全相关、视频、直播和专栏，小鹅通为大家提供了填写内容描述的功能。",
//     img:"banner3.png"
// },{
//     name:"产品安全相关3",
//     time:"2018/07/18 18:09",
//     describe:"产品安全相关产品安全相关产品安全相关、视频、直播和专栏，小鹅通为大家提供了填写内容描述的功能。",
//     img:"banner3.png"
// },{
//     name:"产品安全相关3",
//     time:"2018/07/18 18:09",
//     describe:"产品安全相关产品安全相关产品安全相关、视频、直播和专栏，小鹅通为大家提供了填写内容描述的功能。",
//     img:"banner3.png"
// }]

//导航
$(function () {
    $('.active').show().siblings().hide();
    // $('#cont .cont1_head ul li').eq(0).addClass('selete');
    $('#cont .cont1_head ul li').click(function () {
        $(this).addClass('selete').siblings().removeClass('selete');
        $('.actives').eq($(this).index()).show().siblings().hide();
        $("#cont .cont1_left .cont1_left_ul1 li span").eq($(this).index()).parent().children().eq(1).show(500).parent().siblings().children().eq(1).hide(500)
        $("#cont .cont1_left .cont1_left_ul1 li span").eq($(this).index()).parent().children().eq(1).show(500).parent().siblings().children().eq(3).hide(500)
        $("#cont .cont1_left .cont1_left_ul1 li span").eq($(this).index()).parent().children().eq(1).show(500).parent().siblings().children().eq(5).hide(500)
        $("#cont .cont1_left .cont1_left_ul1 li span").eq($(this).index()).children().css({
            transform: "rotate(360deg)"
        }).parent().parent().siblings().children().eq(0).children().css({
            transform: "rotate(180deg)"
        })
        $("#cont .cont1_left .cont1_left_ul1 li span").eq($(this).index()).children().css({
            transform: "rotate(360deg)"
        }).parent().parent().siblings().children().eq(2).children().css({
            transform: "rotate(180deg)"
        })
        $("#cont .cont1_left .cont1_left_ul1 li span").eq($(this).index()).children().css({
            transform: "rotate(360deg)"
        }).parent().parent().siblings().children().eq(4).children().css({
            transform: "rotate(180deg)"
        })
        $("#cont .cont_div1 .actives1 ul").show();
        // $("#cont .cont_div1 .actives1 div").hide();
        $("#cont .cont_div1 .actives2 ul").show();
        // $("#cont .cont_div1 .actives2 div").hide();
        $("#cont .cont_div1 .actives3 ul").show();
        // $("#cont .cont_div1 .actives3 div").hide();
        $("#cont .cont_div1 .actives4 ul").show();
        // $("#cont .cont_div1 .actives4 div").hide();
        $("#cont .cont_div1 .actives1 .search_ul").hide();
    });
});
//侧边导航
$(function () {
    // $('.active').show().siblings().hide();
    // $('#cont .cont1_left .cont1_left_ul1 .cont1_left_ul12 li').eq(0).addClass('selete');
    $('.activess').show().siblings().hide();
    $('#cont .cont1_left .cont1_left_ul1 .cont1_left_ul12 li').click(function () {
        $('.actives1').eq($(this).index()).show().siblings().hide();
        $(this).addClass('selete').siblings().removeClass('selete');
        $("#cont .cont_div1 .actives1 h2").html($(this).html());
        $("#cont .cont_div1 .actives1 ul").show();
        // $("#cont .cont_div1 .actives1 div").hide();
        $("#cont .cont_div1 .actives1 .search_ul").hide();
        $("#cont .cont_div1 .actives1 .search_img").hide();
    });
});

$(function () {
    // $('.active').show().siblings().hide();
    // $('#cont .cont1_left .cont1_left_ul1 .cont1_left_ul13 li').eq(0).addClass('selete');
    $('.activess1').show().siblings().hide();
    $('#cont .cont1_left .cont1_left_ul1 .cont1_left_ul13 li').click(function () {
        $('.actives2').eq($(this).index()).show().siblings().hide();
        $(this).addClass('selete').siblings().removeClass('selete');
        $("#cont .cont_div1 .actives2 h2").html($(this).html())
        // $('.actives').eq($(this).index()).show().siblings().hide();
        $("#cont .cont_div1 .actives2 ul").show();
        // $("#cont .cont_div1 .actives2 div").hide()
        $("#cont .cont_div1 .actives2 .search_ul").hide();
        $("#cont .cont_div1 .actives2 .search_img").hide();
    });
});
$(function () {
    // $('.active').show().siblings().hide();
    // $('#cont .cont1_left .cont1_left_ul1 .cont1_left_ul14 li').eq(0).addClass('selete');
    $('.activess2').show().siblings().hide();
    $('#cont .cont1_left .cont1_left_ul1 .cont1_left_ul14 li').click(function () {
        $('.actives3').eq($(this).index()).show().siblings().hide();
        $(this).addClass('selete').siblings().removeClass('selete');
        $("#cont .cont_div1 .actives3 h2").html($(this).html())
        // $('.actives').eq($(this).index()).show().siblings().hide();
        $("#cont .cont_div1 .actives3 ul").show();
        // $("#cont .cont_div1 .actives3 div").hide()
        $("#cont .cont_div1 .actives3 .search_ul").hide();
        $("#cont .cont_div1 .actives3 .search_img").hide();
    });
});
// $(function () {
//     // $('.active').show().siblings().hide();
//     $('#cont .cont1_left .cont1_left_ul1 .cont1_left_ul15 li').eq(0).addClass('selete');
//     $('.activess3').show().siblings().hide();
//     $('#cont .cont1_left .cont1_left_ul1 .cont1_left_ul15 li').click(function () {
//         $('.actives4').eq($(this).index()).show().siblings().hide();
//         $(this).addClass('selete').siblings().removeClass('selete');
//         $("#cont .cont_div1 .actives4 h2").html($(this).html())
//         // $('.actives').eq($(this).index()).show().siblings().hide();
//         $("#cont .cont_div1 .actives4 ul").show();
//         $("#cont .cont_div1 .actives4 div").hide();
//         $("#cont .cont_div1 .actives4 .search_ul").hide();
//         $("#cont .cont_div1 .actives4 .search_img").hide();
//
//     });
// });

$(function () {
    $("#cont .cont1_left .cont1_left_ul1 li span").click(function () {
        // $("#cont .cont_div1 .actives1 div").hide();
        // $("#cont .cont_div1 .actives2 div").hide();
        // $("#cont .cont_div1 .actives3 div").hide();
        // $("#cont .cont_div1 .actives4 div").hide();
        var index = $(this).parent().index();
        $("#cont .cont1_head ul li").eq(index).addClass('selete').siblings().removeClass('selete');
        $('.actives').eq(index).show().siblings().hide();
        $(this).parent().children().eq(1).show(500).parent().siblings().children().eq(1).hide(500);
        $(this).parent().children().eq(1).show(500).parent().siblings().children().eq(3).hide(500);
        $(this).parent().children().eq(1).show(500).parent().siblings().children().eq(5).hide(500);
        $(this).children().css({
            transform: "rotate(360deg)"
        }).parent().parent().siblings().children().eq(0).children().css({
            transform: "rotate(180deg)"
        })
        $(this).children().css({
            transform: "rotate(360deg)"
        }).parent().parent().siblings().children().eq(2).children().css({
            transform: "rotate(180deg)"
        })
        $(this).children().css({
            transform: "rotate(360deg)"
        }).parent().parent().siblings().children().eq(4).children().css({
            transform: "rotate(180deg)"
        })
    })
});
// // 详情展示
// $(function () {
//     $('#cont .cont_div1 .actives ul li').click(function () {
//         $(this).parent().hide();
//         $("#cont .cont_div1 .details").show();
//         var index=$(this).attr("data-id");
//         if(index==0){
//             $("#cont .cont_div1 .details .img1").show()
//             $("#cont .cont_div1 .details .img2").hide()
//         }
//         if(index==1){
//             $("#cont .cont_div1 .details .img1").show()
//             $("#cont .cont_div1 .details .img2").show()
//         }
//         if(index==2){
//             $("#cont .cont_div1 .details .img1").hide();
//             $("#cont .cont_div1 .details .img2").hide()
//         }
//         if(index==3){
//             $("#cont .cont_div1 .details .img1").show()
//             $("#cont .cont_div1 .details .img2").hide()
//         }
//         $("#cont .cont_div1 .details h1").html(arr1[index].name);
//         $("#cont .cont_div1 .details .p2").html(arr1[index].time);
//         $("#cont .cont_div1 .details .p3").html(arr1[index].describe1);
//         $("#cont .cont_div1 .details .p4").html(arr1[index].describe2);
//         $("#cont .cont_div1 .details .img1").attr("src",'./images/helpCenter/'+arr1[$(this).index()].img1)
//         $("#cont .cont_div1 .details .img2").attr("src",'./images/helpCenter/'+arr1[$(this).index()].img2)
//     })
// });
// $(function () {
//     $("#cont .cont_div1 .actives1_1 ul li").click(function () {
//         $(this).parent().hide();
//         $("#cont .cont_div1 .details").show();
//         $("#cont .cont_div1 .details h1").html(arr2[$(this).index()].name);
//         $("#cont .cont_div1 .details .p2").html(arr2[$(this).index()].time);
//         $("#cont .cont_div1 .details .p3").html(arr2[$(this).index()].describe);
//         $("#cont .cont_div1 .details img").attr("src",'./images/help/'+arr2[$(this).index()].img)
//     })
// })
// $(function () {
//     $("#cont .cont_div1 .actives2 ul li").click(function () {
//         $(this).parent().hide();
//         $("#cont .cont_div1 .details").show()
//         $("#cont .cont_div1 .details h1").html(arr2[$(this).index()].name);
//         $("#cont .cont_div1 .details .p2").html(arr2[$(this).index()].time);
//         $("#cont .cont_div1 .details .p3").html(arr2[$(this).index()].describe);
//         $("#cont .cont_div1 .details img").attr("src",'./images/help/'+arr2[$(this).index()].img)
//     })
// })
// $(function () {
//     $("#cont .cont_div1 .actives3 ul li").click(function () {
//         $(this).parent().hide();
//         $("#cont .cont_div1 .details").show()
//         $("#cont .cont_div1 .details h1").html(arr2[$(this).index()].name);
//         $("#cont .cont_div1 .details .p2").html(arr2[$(this).index()].time);
//         $("#cont .cont_div1 .details .p3").html(arr2[$(this).index()].describe);
//         $("#cont .cont_div1 .details img").attr("src",'./images/help/'+arr2[$(this).index()].img)
//     })
// })
// $(function () {
//     $("#cont .cont_div1 .actives4 ul li").click(function () {
//         $(this).parent().hide();
//         $("#cont .cont_div1 .details").show()
//         $("#cont .cont_div1 .details h1").html(arr2[$(this).index()].name);
//         $("#cont .cont_div1 .details .p2").html(arr2[$(this).index()].time);
//         $("#cont .cont_div1 .details .p3").html(arr2[$(this).index()].describe);
//         $("#cont .cont_div1 .details img").attr("src",'./images/help/'+arr2[$(this).index()].img)
//     })
// });
//点击筛选
// var arrs=[]
// $(function(){
//     $('#search').click(function(){
//         search()
//     })
// });
// function search() {
//     $("#cont .cont_div1 .actives1 .search_ul").show();
//     $('.actives').eq(0).show().siblings().hide();
//     $('#cont .cont1_head ul li').eq(0).addClass('selete').siblings().removeClass('selete');
//     $("#cont .cont1_left .cont1_left_ul1 li span").eq(0).parent().children().eq(1).show(500).parent().siblings().children().eq(1).hide(500);
//     $("#cont .cont1_left .cont1_left_ul1 li span").eq(0).parent().children().eq(1).show(500).parent().siblings().children().eq(3).hide(500)
//     $("#cont .cont1_left .cont1_left_ul1 li span").eq(0).parent().children().eq(1).show(500).parent().siblings().children().eq(5).hide(500)
//     // $("#cont .cont_div1 .actives1 .details").hide();
//     // $("#cont .cont_div2 .actives1 .details").hide();
//     // $("#cont .cont_div3 .actives1 .details").hide();
//     // $("#cont .cont_div4 .actives1 .details").hide();
//     if($('#input').val()==""){
//         prompt("请输入要搜索的内容")
//     }else {
//         arrs=[];
//         $(".search_ul").html("")
//         $('#cont .cont_div1 .actives1 ul:not(".search_ul") li').parent().hide();
//         var text = $('#input').val();
//         $("#cont .cont_div1 .actives1 h2").html('有关"'+text+'"的搜索结果');
//         if($.trim(text) != ""){
//             arrs=$(".actives ul li").filter(":contains('"+text+"')");
//             if(arrs.length==0){
//                 $(".search_img").show()
//             }else {
//                 $(".search_img").hide()
//             }
//             for(i=0;i<arrs.length;i++){
//                 var lis=$(arrs[i])
//                 // var li=$("<li>"+lis+"</li>");
//                 lis.appendTo($(".search_ul"));
//             }
//         }
//         $('#input').val("")
//     }
// }
// function  search1() {
//     console.log(s !== undefined)
//     if(s !== undefined){
//         $("#cont .cont_div1 .actives1 .search_ul").show();
//         $('.actives').eq(0).show().siblings().hide();
//         $('#cont .cont1_head ul li').eq(0).addClass('selete').siblings().removeClass('selete');
//         $("#cont .cont1_left .cont1_left_ul1 li span").eq(0).parent().children().eq(1).show(500).parent().siblings().children().eq(1).hide(500);
//         $("#cont .cont1_left .cont1_left_ul1 li span").eq(0).parent().children().eq(1).show(500).parent().siblings().children().eq(3).hide(500)
//         $("#cont .cont1_left .cont1_left_ul1 li span").eq(0).parent().children().eq(1).show(500).parent().siblings().children().eq(5).hide(500)
//         $('#input').val(s)
//         arrs=[];
//         $(".search_ul").html("")
//         $('#cont .cont_div1 .actives1 ul:not(".search_ul") li').parent().hide();
//         var text = $('#input').val();
//         $("#cont .cont_div1 .actives1 h2").html('有关"'+text+'"的搜索结果');
//         if($.trim(text) != ""){
//             arrs=$(".actives ul li").filter(":contains('"+text+"')");
//             if(arrs.length==0){
//                 $(".search_img").show()
//             }else {
//                 $(".search_img").hide()
//             }
//             for(i=0;i<arrs.length;i++){
//                 var lis=$(arrs[i])
//                 // var li=$("<li>"+lis+"</li>");
//                 lis.appendTo($(".search_ul"));
//             }
//         }
//     }else {
//        console.log(1111)
//     }
// }

$(function () {
    //进入判断页面位置
    var idstr=window.location.search;
    idstr = idstr.substring(idstr.indexOf("?") + 1, idstr.length);
    var firstOrder=idstr.split("&")[0].split("=")[1];
    var secondOrder=idstr.split("&")[1].split("=")[1];
    $('#cont .cont1_head ul li').eq(firstOrder-1).addClass('selete').siblings().removeClass('selete');
    $('.actives').eq(firstOrder-1).show().siblings().hide();
    $("#cont .cont1_left .cont1_left_ul1 li span").eq(firstOrder-1).parent().children().eq(1).show(500).parent().siblings().children().eq(1).hide(500);
    $("#cont .cont1_left .cont1_left_ul1 li span").eq(firstOrder-1).parent().children().eq(1).show(500).parent().siblings().children().eq(3).hide(500);
    $("#cont .cont1_left .cont1_left_ul1 li span").eq(firstOrder-1).parent().children().eq(1).show(500).parent().siblings().children().eq(5).hide(500);
    $("#cont .cont1_left .cont1_left_ul1 li span").eq(firstOrder-1).children().css({
        transform: "rotate(360deg)"
    }).parent().parent().siblings().children().eq(0).children().css({
        transform: "rotate(180deg)"
    })
    $("#cont .cont1_left .cont1_left_ul1 li span").eq(firstOrder-1).children().css({
        transform: "rotate(360deg)"
    }).parent().parent().siblings().children().eq(2).children().css({
        transform: "rotate(180deg)"
    })
    $("#cont .cont1_left .cont1_left_ul1 li span").eq(firstOrder-1).children().css({
        transform: "rotate(360deg)"
    }).parent().parent().siblings().children().eq(4).children().css({
        transform: "rotate(180deg)"
    });
    if(firstOrder-1==0){
        $('#cont .cont1_left .cont1_left_ul1 .cont1_left_ul12 li').eq(secondOrder-1).addClass('selete').siblings().removeClass('selete');
        $('#cont .cont_div1 .actives1').eq(secondOrder-1).show().siblings().hide();
        $("#cont .cont_div1 .actives1 h2").html($("#cont .cont1_left .cont1_left_ul1 .cont1_left_ul12 li").eq(secondOrder-1).html());
    }
    if(firstOrder-1==1){
        $('#cont .cont1_left .cont1_left_ul1 .cont1_left_ul13 li').eq(secondOrder-1).addClass('selete').siblings().removeClass('selete');
        $('#cont .cont_div1 .actives2').eq(secondOrder-1).show().siblings().hide();
        $("#cont .cont_div1 .actives2 h2").html($("#cont .cont1_left .cont1_left_ul1 .cont1_left_ul13 li").eq(secondOrder-1).html());
    }
    if(firstOrder-1==2){
        $('#cont .cont1_left .cont1_left_ul1 .cont1_left_ul14 li').eq(secondOrder-1).addClass('selete').siblings().removeClass('selete');
        $('#cont .cont_div1 .actives3').eq(secondOrder-1).show().siblings().hide();
        $("#cont .cont_div1 .actives3 h2").html($("#cont .cont1_left .cont1_left_ul1 .cont1_left_ul14 li").eq(secondOrder-1).html())
    }
});
