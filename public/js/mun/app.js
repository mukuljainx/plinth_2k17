"use strict"

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    console.log(scroll);
    var homeHeight = $('.home').height() -22;
    if(scroll > homeHeight){
        $('.navitem a').css('color','black');
    }
    else {
        $('.navitem a').css('color','white');
    }
    var img= $('.mun-logo-content img');
    if(scroll < img.offset().top){
        img.css('position','relative');
        img.css('top','-17px');
        img.css('left','0px');
    }
    else {
        img.css('position','fixed');
        img.css('top','10px');
        img.css('left','10px');
    }
});
