



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
