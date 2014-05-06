var appy = angular.module('appy', []); 
var usernameRegEx = /^[a-zA-Z0-9_-]{3,16}$/;
var passwordRegEx = /^[\u0020-\u007E]{8,64}$/;
var usernameCharsRegEx = /^[a-zA-Z0-9_-]*$/;
var passwordCharsRegEx = /^[\u0020-\u007E]*$/;

 

appy.controller('SignUpForm', function($scope) {
	
	var successIcon, warningIcon, noIcon;
	successIcon =  'glyphicon glyphicon-check text-success';
	warningIcon = 'glyphicon glyphicon-exclamation-sign text-danger';
	noIcon = ''; 

	$scope.validUserIcon = noIcon; 	
	$scope.validPassIcon = noIcon; 	
	$scope.validConfirmIcon = noIcon; 	
	$scope.message = ''; 
	$scope.messageType = '';

	

	$scope.validateUsername = function() {
		if($scope.username === undefined) {
			//do nothing
		} else if(usernameRegEx.test($scope.username)) {
			$scope.validUserIcon = successIcon; 
			$scope.messageType = '';
			$scope.message = '';
		} else {
			$scope.validUserIcon = warningIcon;
			$scope.message = 'Username must be at least 3 characters long and '+
							 'can contain letters and numbers.';
			$scope.messageType = 'text-danger'; 

		}
	};


	$scope.validatePass = function() {
		if($scope.password === undefined) {
			//do nothing
		} else if(passwordRegEx.test($scope.password)) {
			$scope.validPassIcon = successIcon;
			$scope.messageType = ''; 
			$scope.message = '';
 
		} else {
			$scope.validPassIcon = warningIcon;
			$scope.message = 'Password must be at leat 8 characters long and '+
							 'up to 64.'; 
			$scope.messageType = 'text-danger'; 
 
		}
	};

	
	$scope.confirmPass = function() {
		if($scope.passConfirm === undefined) {
			//do nothing
		} else if($scope.password === $scope.passConfirm) {
			$scope.validConfirmIcon = successIcon; 
			$scope.messageType = ''; 
			$scope.message = '';
		} else {
			$scope.validConfirmIcon = warningIcon; 
			$scope.message = 'This field must macth your password';
			$scope.messageType = 'text-danger'; 
		}
	};

}); 


