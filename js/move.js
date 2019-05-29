var URL = localStorage.getItem("URL");
$.ajaxSetup({cache: false});
//导航切换变色
$(function () {
    $('.head_right_1 li').eq(0).children().removeClass("selete");

});