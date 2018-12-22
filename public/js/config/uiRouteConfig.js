'use strict';

/**
 * 
 */




angular.module("menu").config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
	// Utilizando o HTML5 History API
	$locationProvider.html5Mode(true);

console.log('Ingrese en UI Route 2');




$stateProvider.state('inicio', {
    url: '/',
    views: {
      'principal': {
        templateUrl: 'public/views/templates/slider.html',
        controller: 'sliderController'
      },'info':{
        templateUrl:'public/views/templates/info.html'

      },'integrante':{
        templateUrl:'public/views/integrante/integrante.html',
        controller:'integranteController'

      }
    }

  })

	
	$urlRouterProvider.otherwise("/");

	// Utilizando o HTML5 History API
	$locationProvider.html5Mode(true);
}]);