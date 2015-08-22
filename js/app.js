var app = angular.module('app', ['ngAnimate', 'ngRoute']);

$(document).ready(function () {
  setTimeout(function () {
    $(".test").slideDown(1500);
  },1000)

  $( "#everyone" ).click(function() {
    $( ".test" ).slideUp(1000);
  });
  $('.logos').fadeIn(1000)

  $('.test').mousemove(function(e){
  var amountMovedX = (e.pageX * - (1 / 80));
  var amountMovedY = (e.pageY * - (1 / 80));
  $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
  });
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
