$(document).foundation();

function proceedNext(){
    $('.event-registration-form-message').css('display', 'none');
    $('.event-registration-form-part').css('display', 'block');
}

function workshopProceedNext(){
    $('.workshop-registration-form-message').css('display', 'none');
    $('.event-registration-form-part').css('display', 'block');
}

formReg = 0;

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

//Navitem active

function navItemActive(){
    if(location.pathname.indexOf("/competitions") !== -1) $('.navitem-competitions').addClass('navitem-active');
    if(location.pathname.indexOf("/workshops") !== -1) $('.navitem-workshops').addClass('navitem-active');
    if(location.pathname.indexOf("/talks") !== -1) $('.navitem-talks').addClass('navitem-active');
}



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
    $.post( "/user/logout")
    .done(function( data ) {
        if(data.response){
            location.reload();
        }
    });
}

function unloadcallback(){
    if(localStorage.temptoken !== undefined){
        activateLoader();
        $.post( "/user/user_validate", { "token" : localStorage.temptoken })
        .done(function( data ) {
            deactivateLoader();
            if(!data.response){
                formReg = 1;
                workshopProceedNext();
                proceedNext();
                $('.name-label').css('display','none');
                $('.user-name').attr("disabled", "");
                $('.email').attr("disabled", "");
                $('.close-button').trigger('click'); // old form
                $('.holaxx').trigger('click'); // register form
                $('.reg-form-event-pagging').css('display','none');
                $('.event-registration-form-btnx').removeClass('btn-disabled');
                $('.reg-social').css("display","none"); // register btn with fb and google
                $('.add-member-btn').css("display", "none");
                $('.user-name').val(data.name);
                $('.email').val(data.email);
            }
            else{
                $('.close-button').trigger('click');
                $('.close-button').trigger('click');
                location.reload();
                localStorage.temptoken = "";
            }
        })
        .fail(function(response) {
            apiCallFail(response);
        });
    }else{
        return;
    }
};

function registerUserComplete(){
    var x = getUserDetails();
    if(!validateUserDetails(x)){
        return
    }
    data = {"token" : localStorage.temptoken, "user" : x};
    activateLoader();
    $.post( {
        url: "/user/user_register_complete",
        contentType: 'application/json; charset=utf-8',
        dataType : 'json',
        data: JSON.stringify(data)
    })
    .done(function( data ) {
        deactivateLoader();
        if(data.response){
            $('.close-button').trigger('click');
            notifDisplay(1,1);
            localStorage.temptoken = "";
            location.reload();
        }else{
            notifDisplay(0,0);
        }
    })
    .fail(function(response) {
        apiCallFail(response);
    });
}


$(function()
{
    $(".popupwindow").popupwindow(profiles);
});



// Reg Form Object

function getUserDetails(){
    userDetail ={
        name : $('.user-name').val(),
        gender : $('input:radio[name=gender]:checked').val(),
        phoneNumber : $('.phone').val(),
        email : $('.email').val(),
        college : $('.college').val(),
        year : $('input:radio[name=year]:checked').val(),
        city : $('.city').val(),
        accommodation : $('input:radio[name=acc]:checked').val()
    }
    return userDetail;
}

function validateUserDetails(data){
    if(data.name === "" || data.gender === undefined || data.phoneNumber === "" || data.email === "" || data.college === "" || data.year === undefined || data.city === "" || data.accommodation === undefined)
        return false;
    else
        return true;
}

function notifDisplay(status, icon){
    var regMsg = ["Your registration is not successfull !", "Your registration is successfull !", "Payment will be open soon", "Payment successfull !", "Payment unsuccessfull !", "Please select fields","Two or more team member can't have same mail id","We will contact you soon","Your Answer is Correct","Your Answer is Wrong"]
    var regIcon = ['<i class="fa fa-times" aria-hidden="true"></i>', '<i class="fa fa-check" aria-hidden="true"></i>', '<i class="fa fa-exclamation" aria-hidden="true" style="width: 14px; height: 14px; padding-right: 4px;"></i>']
    $(".reg-status-img").html(regIcon[status]);
    $(".reg-status").html(regMsg[icon]);
    $(".notif").css('display','block').delay(3000).fadeOut();
}

function activateLoader(){
    $('.notif-loader').css('display','block');
}

function deactivateLoader(){
    $('.notif-loader').css('display','none');
}

function apiCallFail(response){
    deactivateLoader();
    console.log(response.status);
    console.log('Reach me at help.plinth@gmail.com with above number and url');
    alert(response.statusText + ' : ' + response.status + '\nSorry for trobule caused please mail us at help.plinth@gmail.com along with above status, code & url, we will fix this as soon as possible');
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

$(document).ready(function() {
    $('.master-wrapper').delay(1000).fadeOut('fast');
});

 navItemActive();
