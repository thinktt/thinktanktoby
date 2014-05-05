var appy = angular.module('appy', []); 
var usernameRegEx = /^[a-zA-Z0-9_-]{3,16}$/;
var passwordRegEx = /^[\u0020-\u007E]{8,64}$/;

 

appy.controller('SignUpForm', function($scope) {
	
	$scope.validUserIcon = ''; 	
	$scope.validPassIcon = ''; 	
	$scope.validConfirmIcon = ''; 	
	$scope.message = ''; 
	$scope.messageType = '';


	$scope.onUsernameFocus = function() {
		$scope.message = 'Username must be at least 3 characters long and can contain letters and numbers.'; 
		$scope.validateUsername(); 
	};

	$scope.onPassFocus = function() {
		$scope.message = 'Password must be at leat 8 characters long and up to 64.'; 
		$scope.validatePass(); 
	};

	$scope.onConfirmFocus = function() {
		$scope.message = 'This field must macth your password';
		$scope.confirmPass(); 
	};
	

	$scope.validateUsername = function() {
		if($scope.username === undefined) {
			//do nothing
		} else if(usernameRegEx.test($scope.username)) {
			$scope.validUserIcon = 'glyphicon glyphicon-check text-success'; 
			$scope.messageType = '';
			$scope.message = '';
		} else {
			$scope.message = 'Username must be at least 3 characters long and can contain letters and numbers.';
			$scope.validUserIcon = 'glyphicon glyphicon-exclamation-sign text-danger';
			$scope.messageType = 'text-danger'; 

		}
	};


	$scope.validatePass = function() {
		if($scope.password === undefined) {
			//do nothing
		} else if(passwordRegEx.test($scope.password)) {
			$scope.validPassIcon = 'glyphicon glyphicon-check text-success';
			$scope.messageType = ''; 
			$scope.message = '';
 
		} else {
			$scope.message = 'Password must be at leat 8 characters long and up to 64.'; 
			$scope.validPassIcon = 'glyphicon glyphicon-exclamation-sign text-danger';
			$scope.messageType = 'text-danger'; 
 
		}
	};

	
	$scope.confirmPass = function() {
		if($scope.passConfirm === undefined) {
			//do nothing
		} else if($scope.password === $scope.passConfirm) {
			$scope.validConfirmIcon = 'glyphicon glyphicon-check text-success'; 
			$scope.messageType = ''; 
			$scope.message = '';
		} else {
			$scope.message = 'This field must macth your password';
			$scope.validConfirmIcon = 'glyphicon glyphicon-exclamation-sign text-danger'; 
			$scope.messageType = 'text-danger'; 
		}
	};



}); 


