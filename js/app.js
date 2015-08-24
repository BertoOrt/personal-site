var app = angular.module('app', ['ngAnimate', 'ngRoute']);

$(document).ready(function () {
  setTimeout(function () {
    $(".image").slideDown(1500);
  },1000)

  $( "#everyone" ).click(function() {
    $( ".image" ).slideUp(1000);
  });

  $('.image').mousemove(function(e){
  var amountMovedX = (e.pageX * - (1 / 80));
  var amountMovedY = (e.pageY * - (1 / 80));
  $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
  });

  $('#developer').click(function () {
    window.location.replace("http://bertoort.com");
  })
  // 
  // $('.hideMe').click(function () {
  //   document.querySelector('.navbar-toggle').click()
  // })
  // $('.hideMe').click(function () {
  //   document.querySelector('.navbar-toggle').click()
  // })

  $(function() {
   $('a[href*=#]:not([href=#])').click(function() {
     if (this.hash !== "#myCarousel") {
       if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
         if (target.length) {
           $('html,body').animate({
             scrollTop: target.offset().top - 80
           }, 1000);
           return false;
         }
       }
     }
   });
 });

  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
  })
})

// app.config(function($routeProvider, $locationProvider) {
//     $routeProvider
//       // .when('/', {
//       //   templateUrl: 'partials/home.html',
//       //   controller: 'cartoons'
//       // })
//       .otherwise({redirectTo: '/'});
//       $locationProvider.html5Mode(true);
// });
