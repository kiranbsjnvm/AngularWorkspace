var myapp = angular.module('myApp',[]);

	myapp.controller('MyController1', function($scope,$rootScope) {

		$scope.formSubmit = function(){
			
			if($scope.myform.$valid)
				alert("submitted"); // save $scope.user object
			else
				alert('Unable to save. Validation error!');
		}

		$scope.names = ["Tejas","Rakesh","Jignesh"];

		//for select using ng-options
		$scope.user = {};
		$scope.countries = [
			{
				id:'US',
				desc : 'United States'
			},
			{
				id:'IND',
				desc : 'India'
			},
			{
				id: 'AU',
				desc: 'Australia'
			}
		]

	});


	
	
	