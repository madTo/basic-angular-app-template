var controllers = angular.module('controllers', []);
	
	/*Index Page*/
	var HomeController = function  ($scope) {
		$scope.msg = "Hello world";
		console.log('HomeController loaded');
	};

	HomeController.$inject = ['$scope'];
	controllers.controller('HomeController',  HomeController);

