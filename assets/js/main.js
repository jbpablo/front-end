/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
// function myFunction() {
//     var x = document.getElementById("topNav");
//     if (x.className === "nav") {
//       x.className += " responsive";
//     } else {
//       x.className = "nav";
//     }
//   }


$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

   //>=, not <=
  if (scroll >= 500) {
    // alert("yess");
      //clearHeader, not clearheader - caps H
      $("#nav").addClass("sticky");
  }
  else{

    $("#nav").removeClass("sticky");
  }
}); //missing )
  
//   function myFunctionn() {
//     var x = document.getElementById("Mynavbar");
//     if (x.className === "navbar") {
//       x.className += " responsive";
//     } else {
//       x.className = "navbar";
//     }
// //   }

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}