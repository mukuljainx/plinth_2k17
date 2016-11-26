$(document).foundation()

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
  console.log("dsd")
  $('.wrapper-form').css('display','block');
});



//Firebase
// Initialize Firebase

userSignedIn = false;

var config = {
    apiKey: "AIzaSyDUDw2j-fANRusjUV96gbjPSGzPyM_ly5w",
    authDomain: "plinth-435fb.firebaseapp.com",
    databaseURL: "https://plinth-435fb.firebaseio.com",
    storageBucket: "plinth-435fb.appspot.com",
    messagingSenderId: "59796155431"
};
firebase.initializeApp(config);


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    userSignedIn = true;
    console.log(user);
  } else {
    userSignedIn = false;
  }
});

var signInPopup = function(provider){
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    return user;
  }).catch(function(error) {
    // Handle Errors here.
    console.log(error);
  });
}

var googleRegister = function(){

  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/user.birthday.read');
  signInPopup(provider);
}

var facebookRegister = function(){
  var provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope('user_birthday');
  userx = signInPopup(provider);
  console.log(userx);
}


signOut = function(){
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
      userSignedIn = false;
      console.log("signed Out");
    }, function(error) {
      // An error happened.
  });
}
