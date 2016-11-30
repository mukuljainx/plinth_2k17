

$(document).foundation();

//HAMBURGER

$('.ham-btn').click(function() {
    $('.ham-wrapper').animate({width: "200px"}, 200);
    $('.ham-close').css("display", "block");
});

$('.ham-close').click(function() {
    $('.ham-close').css("display","none");
    $('.ham-wrapper').animate({width: "0px"}, 200);
});

$('body').click(function() {
    var toggle = $('.ham-wrapper').width();
    if(toggle > 0){
        $('.ham-wrapper').animate({width: "0px"}, 200);
        $('.ham-close').css("display","none");

    }
});

//BACK

$('.back').click(function() {
    var hist=history.length;
//    console.log(hist);
    if(hist>1){
        window.history.back();
    }
    else{
        window.location.assign("index.html");
    }
});

//Register Modal

$('.register-pop-up').click(function(){
  $('.wrapper-form').css('display','block');
});


// popus window for login

var profiles =
{
    windowCallUnload:
    {
        // height:300,
        // width:400,
        center:1,
        onUnload:unloadcallback
    }
};

function unloadcallback(){
    document.cookie = "access_token=" + localStorage.temptoken + "; expires=Fri, 20 Dec 2017 12:00:00 UTC";
};


$(function()
{
    $(".popupwindow").popupwindow(profiles);
});
