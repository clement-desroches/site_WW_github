
    (function ($) {
    "use strict";
    
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });


    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
        $("#mainNav").addClass("navbar-shrink");
    });
    
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });


    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").removeClass("navbar-shrink");
            $(".navbar-collapse").collapse("hide");
        } else {
            $("#mainNav").addClass("navbar-shrink");
        }
    };
    
    navbarCollapse();
    
    $(window).scroll(navbarCollapse);
})(jQuery); 
