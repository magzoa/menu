'use strict';

/**
 * 
 */




angular.module("menu").config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
	// Utilizando o HTML5 History API
	$locationProvider.html5Mode(true);

console.log('Ingrese en UI Route 2');

$stateProvider.state('principal', {
    url: '/',
    views: {
      'principal': {
        templateUrl: 'public/views/templates/principal.html',
        controller: 'principalController'
      },'eventos':{
		templateUrl: 'public/views/templates/eventos.html',
        controller: 'eventosController'
      },'auspiciantes':{
    templateUrl: 'public/views/templates/auspiciantes.html',
        controller: 'auspiciantesController'
      }
    }

  })

	
	$urlRouterProvider.otherwise("/");

	// Utilizando o HTML5 History API
	$locationProvider.html5Mode(true);
}]);