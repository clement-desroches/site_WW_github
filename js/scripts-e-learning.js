
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
    


    const generatedHtml = Object.keys(learnings).reduce((accum, currKey) => accum +
      ` <div class="column" id =${currKey}>
            
            <div class="content">
                <div class="img-learning" >
                    <img src=${learnings[currKey].image} alt="Mountains" style="width: 100%; height: auto; overflow: hidden;">
                </div>
                <div class="overlay">
                    <div class="learnings-title">${currKey}</div>
                    <p class="learnings-subtitle">${learnings[currKey].description}</p>
                </div>
            </div>
        </div>
        `, '');
    
    document.getElementById('learnings-container').innerHTML = generatedHtml;

function search_function() {
  // Declare variables
  var input, filter, div, col, a, i, txtValue;
  input = document.getElementById('search_input');
  filter = input.value.toUpperCase();
  div = document.getElementById("learnings-container");
  col = div.getElementsByClassName('column');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < col.length; i++) {
    a = col[i].getElementsByClassName("learnings-title")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      col[i].style.display = "inline-block";
    } else {
      col[i].style.display = "none";
    }
  }
}


