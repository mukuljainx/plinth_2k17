"use strict"

var img= $('.mun-logo-content img');
var intialLogoTop = img.offset().top +90;

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    var homeHeight = $('.home').height() -22;

    if(scroll > homeHeight){
        $('.navitem a').css('color','black');
        $('nav').addClass('nav-white');
    }
    else {
        $('.navitem a').css('color','white');
        $('nav').removeClass('nav-white');
    }

    // for logo

    if(scroll > intialLogoTop){
        img.addClass('mun-img-top-send');
    }
    else {
        img.removeClass('mun-img-top-send');
    }
});

$(document).on('click', 'a', function(event){
    if(this.classList[0] === "mun-scroll"){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top -70
        }, 500);
    }
});
