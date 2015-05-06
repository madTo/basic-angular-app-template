var app = angular.module('app', ['ui.router', 'angular-loading-bar', 'services', 'controllers']);
	/* Routing */
	app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url : '/',
			templateUrl : 'templates/home.html',
			controller : 'HomeController'
		});
	}]);