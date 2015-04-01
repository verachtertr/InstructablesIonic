
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'myApp' is the name of this angular module example 
// the 2nd parameter is an array of 'requires'
angular.module('myApp', ['ionic', 'myApp.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/side/home')

  $stateProvider
  .state('sidemenu', {
      url: "/side",
      abstract: true,
      templateUrl: "templates/side-menu.html"
  })
 .state('sidemenu.home', {
    url: '/home',
    views: {
      'menuContent' :{
        templateUrl: "templates/home.html"
      }
    }
  })
  .state('sidemenu.nav', {
    url: '/nav',
    views: {
      'menuContent' :{
        controller: 'NavCtrl',
        templateUrl: "templates/map.html"
      }
    }
  })
})
