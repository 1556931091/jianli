/**
 * Created by wengyimi on 2018/10/9.
 */
function w () {
    var r = document.documentElement;
    var a = r.getBoundingClientRect().width;
    if (a > 750) {
        a = 750;
    };
    rem = a / 7.5;
    r.style.fontSize = rem + 'px';
};
var t;
w();


