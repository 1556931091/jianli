/**
 * Created by wengyimi on 2018/10/9.
 */
$(function(){

//导航开始
/*
    $(document).scroll(function() {
        if($(document).scrollTop()!=0){
            $("nav").stop();
            $("nav").animate({"top":"0"});
        }
        else{
            $("nav").stop();
            $("nav").animate({"top":"108px"});
        }
    });
*/


//导航结束

    /*轮播开始*/

    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // 如果需要滚动条
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })






//animate插件









    /*轮播结束*/


});/*全部括号*/