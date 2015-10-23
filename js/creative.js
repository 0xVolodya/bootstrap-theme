/**
 * Created by Vova on 24.10.2015.
 */

(function ($) {
    "use strict";
    $('body').scrollspy({
        target:'.navbar-fixed-top',
        offset:100
    });
    //alert("blablba");
    new WOW().init();
})(jQuery);
