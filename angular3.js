var appy = angular.module('appy', []);



appy.controller('Controller1', function($scope) {
	$scope.someText = 'Howdy!';
    $scope.someText2 = 'Howdy!';
	$scope.checkMessage ='Checketh my box oh lowly one.';

	 $scope.$watch('youCheckedIt', function() {
        if($scope.youCheckedIt === true) {
            $scope.checkMessage = 'Well done good and faithful servant.';
        }
        else if($scope.youCheckedIt === false ) {
            $scope.checkMessage = 'You shall be smitten down!';
        }

    });


    $scope.submitStuff = function() {
        $scope.youCheckedIt = true;
        $scope.someText='Yo Romeo'; 
    };

}); 


appy.controller('DeathrayMenuController', function($scope){
    $scope.menuState = { show: true };
    $scope.isRed = false; 

    $scope.toggleMenu = function() {
        //$scope.menuState.show = !$scope.menuState.show;
        $scope.isRed = !$scope.isRed; 
    };
});


appy.controller('ColorController', function($scope){
    $scope.turnBlue = function(){
        $scope.isBlue = !$scope.isBlue;
        $scope.isYellow = false;  
    };

    $scope.turnYellow = function(){
        $scope.isYellow = !$scope.isYellow; 
        $scope.isBlue = false; 

    };

});


appy.controller('TableController', function($scope){

    $scope.people = [           
        {name: 'Toby', job: 'Supervisor'}, 
        {name:'John', job:'Student Worker'},
        {name:'Jeremiah', job:'Student Worker'},
        {name:'Ryan', job:'Student Worker'},
        {name:'Fanrui', job:'Student Worker'},
        {name:'Cynthia', job:'Supervisor'},
        {name:'Joe', job:'Supervisor'},  
        {name: 'Max', job: 'Garbage Man'}
    ];

   
});

appy.controller('TableRowController', function($scope) {
    $scope.isSelected = false;

    $scope.handleTableClick = function() {
        $scope.isSelected = !$scope.isSelected;   
    };


});


appy.controller('Controller2', function($scope) {
	$scope.someText = 'Hello!';
});


