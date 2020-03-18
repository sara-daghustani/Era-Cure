
// make progress bar shows up and move when scrolling down or up 
// this part got help from shumukh. 
window.onload = function () {
  if (document.documentElement.scrollHeight === document.documentElement.clientHeight){
      document.getElementById("myBar").style.width = "100%";
  }
};
window.onscroll = function () {
 bar()
};
function bar() {
 var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
 var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
 var scrolled = (winScroll / height) * 100;
 document.getElementById("myBar").style.width = scrolled + "%";
}

$(document).ready(function(){

// fade in pictures in whyus page when reaching the sections. 
    var firstWaypoint1 = $('#whyuspage').waypoint({
      handler: function(direction) {
        if (direction === 'down') {
          $('.browse1').delay(500).fadeIn();
          $('.request1').delay(1000).fadeIn();
          $('.complet1').delay(1500).fadeIn();

        }
        if(direction === 'up') {
          $('.browse1').delay(0).fadeOut();
          $('.request1').delay(0).fadeOut();
          $('.complet1').delay(0).fadeOut();
        }
      },
      offset: window.innerHeight
    });




// toggle information in about us page
      $("#vision").on("click", slid1);
    function slid1(){
      $(".visioninfo").toggleClass("slidout");
    }
  
    $("#mission").on("click", slid2);
    function slid2(){
      $(".missioninfo").toggleClass("slidout");
    }
  


// change name in contact us page after submiting. 

    $('#contactusform').on('submit', namechange);
    function namechange(event){
      event.preventDefault();
      var fname = $('#fname').val();
      var lname = $('#lname').val();
      $('#contactpage h3').text('Hello ' + fname + ' '+ lname + ' ');
       $('#contactpage p').text('We got your message! will contact with you soon');
    }
});

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyApo4xMVYzjW89s6DvjvK7Kwp1ht19agNQ",
  authDomain: "era-cure.firebaseapp.com",
  databaseURL: "https://era-cure.firebaseio.com",
  projectId: "era-cure",
  storageBucket: "era-cure.appspot.com",
  messagingSenderId: "1065217510027",
  appId: "1:1065217510027:web:3b5d5c716f17b2aa52e28e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');


//Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// submit form 
function submitForm(e){
e.preventDefault();
console.log(123);

//Get Value
var firstName = getInputVal("firstName");
var lastName = getInputVal("lastName");
var email = getInputVal("email");
var message = getInputVal("message");
// console.log(firstName + " " + lastName +" "+ email + " "+ message);

//save massage
saveMessage(firstName, lastName, email, message);

// show alart
document.querySelector('.alart').style.display= "inline-block";
document.querySelector('#firstName').style.display= "none";
document.querySelector('#lastName').style.display= "none";
document.querySelector('#email').style.display= "none";
document.querySelector('#message').style.display= "none";
document.querySelector('#submit').style.display= "none";
document.querySelector('#firstLabel').style.display= "none";
document.querySelector('#lastLabel').style.display= "none";
document.querySelector('#emailLabel').style.display= "none";




// Hide alart after 3 second 
setTimeout(function(){
	document.querySelector('.alart').style.display= "none";
	document.querySelector('#firstName').style.display= "inline-block";
	document.querySelector('#lastName').style.display= "inline-block";
	document.querySelector('#email').style.display= "inline-block";
	document.querySelector('#message').style.display= "inline-block";
  document.querySelector('#submit').style.display= "inline-block";
  document.querySelector('#firstLabel').style.display= "inline-block";
document.querySelector('#lastLabel').style.display= "inline-block";
document.querySelector('#emailLabel').style.display= "inline-block";
 

}, 3000);

 //clear from
	document.getElementById('contactForm').reset();
}

// function to get  form value 
function getInputVal(id){
	return document.getElementById(id).value;
}

// save massage to firebase
function saveMessage(firstName, lastName, email, message){
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		firstName : firstName,
		lastName : lastName,
		email : email,
		message : message
	});


}