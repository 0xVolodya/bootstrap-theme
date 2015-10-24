/**
 * Created by Vova on 24.10.2015.
 */

(function ($) {
    //при нажатии панели происходит перемещение страницы в указанную область
    "use strict";
    $('.page-scroll').bind('click', function (event) {
        event.preventDefault();
        var $pagescroll=$(this);
        $('html, body').stop().animate({

            scrollTop:($($pagescroll.attr('href')).offset().top -50)
        },1500,"easeInOutExpo");
    });

    //при прокрутке выделяются элементы навигации
    $('body').scrollspy({
        target:'.navbar-fixed-top',
        offset:55
    });

    //смещение главное панели навигации
    $("#mainNav").affix({
        offset:{
            top:100
        }
    });

    //alert("blablba");
    new WOW().init();
})(jQuery);
