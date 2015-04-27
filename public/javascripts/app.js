var app = angular.module('procymo-admin',['ngRoute','ngAnimate']);

(function(){

  app.config(function($routeProvider,$locationProvider,$httpProvider){

    $locationProvider.html5Mode({enabled: true,requireBase: false});

    $routeProvider
      .when("/",{templateUrl: '/html/main/main.html',controller: 'mainCtrl'})
      .when("/register",{templateUrl:'/html/account/register.html',controller:'registerCtrl'})
      .when("/logout",{templateUrl: '/html/main/main.html',controller: 'logoutCtrl'})
      .when("/jobs",{templateUrl: '/html/job/jobs.html',controller:'jobCtrl'})
      .otherwise({redirectTo:'/'});

    $httpProvider.interceptors.push('authInterceptor');
  })
  .constant('API_URL','http://localhost:3000/');


  app.run(function($rootScope,$location){
    $rootScope.$on('$routeChangeError', function(evt,current,previous,rejection) {
      if(rejection === 'not authorized'){
        $location.path('/');
      }
      /* Act on the event */
    })

  });


})();