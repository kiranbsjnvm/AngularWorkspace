var myapp = angular.module('myApp',[]);

	myapp.controller('myController', function($scope,StringService) {

	    var employees = [
	    	{name:'zzzz',gender:'1',city:'hassan'},
	    	{name:'aaaa',gender:'2',city:'dshfhj'},
	    	{name:'bbbb',gender:'2',city:'bang'},
	    	{name:'ccccc',gender:'1',city:'aaaww'},
	    	{name:'ddddd',gender:'3',city:'qwe'},
	    ]

	    $scope.employees = employees;

	    $scope.formatString = function(input){
	    	$scope.output = StringService.processString(input);
	    }

	});
	
	
	