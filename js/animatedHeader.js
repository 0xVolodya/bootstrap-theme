/**
 * Created by Vova on 24.10.2015.
 */

var animatedHeader = (function () {
    var docElemenet=document.documentElement,
        header=document.querySelector('.navbar-default'),
        didScroll=false,
        changeHeaderOn=300;

    function init(){
        window.addEventListener('scroll', function (event) {
            if(!didScroll){
                didScroll=true;
                setTimeout(scrollPage,250);
            }
        },false)
    }

    function scrollPage() {
        var scrollY=scrollY();
        if(scrollY >=changeHeaderOn){
            classie.add(header,'navbar-shrink');
        }
        else{
            classie.remove(header,'navbar-shrink');
        }
    }
    function scrollY(){
        return window.pageYOffset || docElemenet.scrollTop;
    }

})();