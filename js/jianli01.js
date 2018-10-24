/**
 * Created by wengyimi on 2018/10/9.
 */
$(function(){

    //自动nav
    $("#nav").autoHidingNavbar({

    });


//点击X取消
    $(document).scroll(function(){
        if($(document).scrollTop()!=0){
            $('#xclose').slideUp('fast');
        }
        else{
            $('#xclose').slideDown('show');

        }
    });






});/*全部括号*/