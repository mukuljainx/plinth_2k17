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

//cookie service

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}


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

function isLoggedIn(){
        // check if user is already logged
}

function unloadcallback(){
    if(localStorage.temptoken !== undefined){
        document.cookie = "access-token=" + localStorage.temptoken + "; expires=Mon, 30 Dec 2017 12:00:00 UTC;";
        $.post( "/user/user_validate", { "token" : getCookie('access-token') })
        .done(function( data ) {
            if(!data.response){
                //open modal for complete signup
                //close current modal
                //if(modal is closed)
                    // unregister user
                    // notify him registration unsuccesfull
                //else(filled details)
                    //save his details
                    //notify him
                    //change view add his sign in
                    //set some browser cookie to on
            else
                //close current modal
                //change view add his sign in
            }
        });
    }
};


$(function()
{
    $(".popupwindow").popupwindow(profiles);
});
