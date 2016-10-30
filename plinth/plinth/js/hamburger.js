/*
$('.ham-btn').click(function() {
    $('.ham-wrapper').toggleClass('fly-left');
});
*/

$('.ham-btn').click(function() {
    $('.ham-wrapper').animate({width: "250px"}, 200);
});

$('.ham-close').click(function() {
    $('.ham-wrapper').animate({width: "0px"}, 200);
});

$('body').click(function() {
    var toggle = $('.ham-wrapper').width();
    if(toggle > 0){
        $('.ham-wrapper').animate({width: "0px"}, 200);    
    }
});




