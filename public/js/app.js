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


function logOut(){
    var cookies = document.cookie.split(";");

   for (var i = 0; i < cookies.length; i++) {
       var cookie = cookies[i];
       var eqPos = cookie.indexOf("=");
       var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
       document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
   }
}

function unloadcallback(){
    if(localStorage.temptoken !== undefined){
        $.post( "/user/user_validate", { "token" : localStorage.temptoken })
        .done(function( data ) {
            if(!data.response){
                console.log(data);
                $('.holax').trigger('click'); // register form
                $('.close-button').trigger('click'); // old form
                $('.reg-social').css("display","none"); // register btn with fb and google
                $('.user-name').val(data.name);
                $('.email').val(data.email);
            }
            else{
                $('.close-button').trigger('click');
                //change view add his sign in
            }
        });
    }
};

function registerUserComplete(){
    $.post( "/user/user_register_complete", { "token" : getCookie('access-token'), "user" : userDetails })
    .done(function( data ) {
        if(data.response){
            document.cookie = "access-token=" + localStorage.temptoken + "; expires=Mon, 30 Dec 2017 12:00:00 UTC;path=/";
            //notify him
            //change view add his sign in
        }
    });
}


$(function()
{
    $(".popupwindow").popupwindow(profiles);
});


// Reg Form Object

$('.reg-form-btn-register').click(function() {
    var UserDetail ={
        name : $('.user-name').val(),
        gender : $('input:radio[name=sex]:checked').val(),
        phoneNumber : $('.phone').val(),
        email : $('.email').val(),
        college : $('.college').val(),
        year : $('input:radio[name=year]:checked').val(),
        city : $('.city').val(),
        accomodation : $('input:radio[name=acc]:checked').val()
    };
});

function notifDisplay(status){
    var regMsg = ["Your registration is not successfull !", "Your registration is successfull !"]
    var regIcon = ['<i class="fa fa-times" aria-hidden="true"></i>', '<i class="fa fa-check" aria-hidden="true"></i>']
    $(".reg-status-img").html(regIcon[status]);
    $(".reg-status").html(regMsg[status]);
    $(".notif").css('display','block').delay(3000).fadeOut();
}


$('.nav-usr-name').mouseover(function() {
    $('.profile-drop-down').css('display','block');
});
$('.nav-usr-name').mouseout(function() {
    $('.profile-drop-down').css('display','none');
});
$('.profile-drop-down').mouseover(function() {
    $('.profile-drop-down').css('display','block');
});
$('.profile-drop-down').mouseout(function() {
    $('.profile-drop-down').css('display','none');
});
