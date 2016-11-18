// Initialize Firebase
var config = {
    apiKey: "AIzaSyDUDw2j-fANRusjUV96gbjPSGzPyM_ly5w",
    authDomain: "plinth-435fb.firebaseapp.com",
    databaseURL: "https://plinth-435fb.firebaseio.com",
    storageBucket: "plinth-435fb.appspot.com",
    messagingSenderId: "59796155431"
};
firebase.initializeApp(config);


var inName = document.getElementById("in-name");
var inEmail = document.getElementById("in-email");
var inQuery = document.getElementById("in-query");
var btnSubmit = document.getElementById("btn-submit");

var dbref = firebase.database().ref();
var queryref = dbref.child("Queries");

btnSubmit.addEventListener('click', submit=>{
    var name = inName.value;
    var email = inEmail.value;
    var query = inQuery.value;
    
    queryref.push({
        Name: name,
        Email: email,
        Query: query
    });
});


