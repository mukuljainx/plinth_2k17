$(document).foundation();

formReg = 0;


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
                console.log(data)
                formReg = 1;
                // $('.user-name').val(data.name);
                // $('.email').val(data.email);
            }
            else{
                location.reload();
                localStorage.temptoken = "";
            }
        })
        .fail(function(response) {
            apiCallFail(response);
        });
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
    return cliUser;
}

function validateUserDetails(data){
    if(data.name === "" || data.gender === undefined || data.phoneNumber === "" || data.email === "" || data.college === "" || data.year === undefined || data.city === "" || data.accommodation === undefined)
        return false;
    else
        return true;
}

function notifDisplay(status, icon){
    var regMsg = ["Your registration is not successfull !", "Your registration is successfull !", "Payment will be open soon", "Payment successfull !", "Payment unsuccessfull !", "Please select fields","Two or more team member can't have same mail id"]
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
