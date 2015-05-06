var services = angular.module('services', []);
	services.factory('basicService',  function(){
		return {
			test: function() {
				return 1;
			}
		}
	});