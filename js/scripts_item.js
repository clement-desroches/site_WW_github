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

function update_item(id) {
    localStorage.setItem("last_id", id);
    console.log(localStorage.getItem("last_id"))
};

item_id = localStorage.getItem("last_id");

const generatedHtmlmasthead =
` <div class="container">
    <div class="masthead-heading text-uppercase">${learnings[item_id].title}</div>
    <div class="masthead-subheading">${learnings[item_id].description}</div>
</div>  
  `;
if (document.getElementById('masthead')!==null){
document.getElementById('masthead').insertAdjacentHTML('afterbegin', generatedHtmlmasthead);
}

const generatedHtmlvideo=
` <video class="video" controls>
    <source src="videos_learnings/${learnings[item_id].video}" type="video/mp4">
    <source src="mov_bbb.ogg" type="video/ogg">
    Your browser does not support HTML video.
</video>
  `;
if (document.getElementById('video_container')!==null){
document.getElementById('video_container').insertAdjacentHTML('afterbegin', generatedHtmlvideo);
}

var generatedHtmlnext;
var generatedHtmlprevious;
var generatedHtmlpreviousnext;

if (parseFloat(item_id) === 0)  {
  generatedHtmlnext=
` 
<a type="button" class="fill" href="/e-learning.html">
    <text class="text_previous_next">Tous les E-learning</text> 
</a>
<a type="button" class="fill" href="/item.html" onmouseover="update_item(${(parseFloat(item_id)+1).toString()})">
    <text class="text_previous_next">${learnings[(parseFloat(item_id)+1).toString()].title}</text> <i class="fas fa-chevron-right"></i>
</a>
  `;
  } else if (parseFloat(item_id) === Object.keys(learnings).length-1){
   generatedHtmlprevious=
` 
<a type="button" class="fill" href="/item.html" onmouseover="update_item(${(parseFloat(item_id)-1).toString()})">
    <i class="fas fa-chevron-left"></i>
    <text class="text_previous_next">${learnings[(parseFloat(item_id)-1).toString()].title}</text> 
</a>


<a type="button" class="fill" href="/e-learning.html">
    <text class="text_previous_next">Tous les E-learning</text> 
</a>

  `;
  } else { generatedHtmlpreviousnext=
    ` 
    <a type="button" class="fill" href="/item.html" onmouseover="update_item(${(parseFloat(item_id)-1).toString()})">
        <i class="fas fa-chevron-left"></i>
        <text class="text_previous_next">${learnings[(parseFloat(item_id)-1).toString()].title}</text> 
    </a>
    
    
    <a type="button" class="fill" href="/e-learning.html">
        <text class="text_previous_next">Tous les E-learning</text> 
    </a>
    <a type="button" class="fill" href="/item.html" onmouseover="update_item(${(parseFloat(item_id)+1).toString()})">
        <text class="text_previous_next">${learnings[(parseFloat(item_id)+1).toString()].title}</text> <i class="fas fa-chevron-right"></i>
    </a>
      `;}

  if (document.getElementById('discover')!==null){ 
    if (parseFloat(item_id) === 0)  {
        document.getElementById('discover').insertAdjacentHTML('afterbegin', generatedHtmlnext);
} else if (parseFloat(item_id) === Object.keys(learnings).length-1) {
    document.getElementById('discover').insertAdjacentHTML('afterbegin', generatedHtmlprevious);
} else {
    document.getElementById('discover').insertAdjacentHTML('afterbegin', generatedHtmlpreviousnext);}
};
console.log(learnings[(parseFloat(item_id)+1)])