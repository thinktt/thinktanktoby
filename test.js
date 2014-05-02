var appy = angular.module('appy', []); 
var usernameRegEx = /^[a-zA-Z0-9_-]{3,16}$/;
var passwordRegEx = /^[\u0020-\u007E]{8,64}$/;
 

appy.controller('SignUpForm', function($scope) {
	
	$scope.validUserIcon = ''; 	
	$scope.validPassIcon = ''; 	
	$scope.validConfirmIcon = ''; 	
	$scope.message = ''; 

	$scope.validateUsername = function() {
		if(usernameRegEx.test($scope.username)) {
			$scope.validUserIcon = 'glyphicon glyphicon-check text-success'; 
		} else {
			$scope.validUserIcon = 'glyphicon glyphicon-exclamation-sign text-danger'; 
		}
		$scope.message = 'Username must be at least 3 characters long and can contain letters and numbers.'; 
	};


	$scope.validatePass = function() {
		if(passwordRegEx.test($scope.password)) {
			$scope.validPassIcon = 'glyphicon glyphicon-check text-success'; 
		} else {
			$scope.validPassIcon = 'glyphicon glyphicon-exclamation-sign text-danger'; 
		}
		$scope.message = 'Password must be at leat 8 characters long and up to 64.'; 		
	};

	
	$scope.confirmPass = function() {
		if($scope.password === $scope.passConfirm) {
			$scope.validConfirmIcon = 'glyphicon glyphicon-check text-success'; 
		} else {
			$scope.validConfirmIcon = 'glyphicon glyphicon-exclamation-sign text-danger'; 
		}
		$scope.message = 'This field must macth your password';
	};









}); 


