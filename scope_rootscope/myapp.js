var myapp = angular.module('myApp',[]);

myapp.controller('parentController', function($scope,$rootScope) {

	$rootScope.rootName1 = "Root Name1"; 
	$scope.parentName = 'Parent';

});

myapp.controller('childController', function($scope,$rootScope) {

	$rootScope.rootName2 = "Root Name2"; 
	$scope.childName = 'Child';
	
});

myapp.controller('myController', function($scope) {
	
	$scope.count = 0;

	$scope.$watch('name',function(newValue,oldValue){
		if(oldValue!=newValue)
			$scope.count = $scope.count + 1;
	});


	//watch for object
	/*$scope.form = {
		firstName : 'kiran',
		lastName : 'kumar'
	};
    $scope.count2 = 0;

	$scope.$watch('form',function (newValue,oldValue) {
        $scope.count2 = $scope.count2 + 1;
    },true);*/

	//or
	$scope.form = {
		firstName : 'kiran',
		lastName : 'kumar'
	};
    $scope.count2 = 0;

	$scope.$watchCollection('form',function (newValue,oldValue) {
        $scope.count2 = $scope.count2 + 1;
    });


    //watch for collection 
    $scope.item1 = '';
    $scope.item2 = '';
    $scope.message = '';
    $scope.$watchGroup(['item1','item2'],function(newValue,oldValue){
    	if(newValue[0] != oldValue[0])
    	{
    		$scope.message = 'item1 changed to '+newValue[0];
    	}
    	else if(newValue[1] != oldValue[1])
    	{
    		$scope.message = 'item2 changed to '+newValue[1];	
    	}
    });


    //watcher without watchExpression
    $scope.$watch(function(){
    	console.log('called in digest cycle');
    })

});


//********************************************************

/*myapp.controller('TimeoutController',function($scope){

	$scope.scheduleTask = function(){

		setTimeout (function(){
			$scope.$apply(function(){
				$scope.message = 'Fetched after 3 seconds';
				console.log('message='+$scope.message);
			});
		},3000);
	}
});*/

//OR
myapp.controller('TimeoutController',function($scope,$timeout){

	$scope.scheduleTask = function(){
		$timeout (function(){
				$scope.message = 'Fetched after 3 seconds';
				console.log('message='+$scope.message);
		},3000);
	}
});
	
	
	