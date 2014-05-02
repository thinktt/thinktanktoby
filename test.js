var appy = angular.module('appy', []); 
var bob = angular.module('bob', []); 



appy.controller('MegaController', function($scope) {
	
	$scope.doSomething = function() {
		console.log('Howdy!'); 
	};
	
}); 


