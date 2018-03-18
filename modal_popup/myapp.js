var myapp = angular.module('myApp',[]);

	myapp.controller('myController', function($scope) {

		$scope.loginMsg = '';
		
		$scope.submitForm = function()
		{
			$scope.loginMsg = 'Log in sucecss, Username : '+$scope.username+", Password : "+$scope.password;

			$('#myModal').modal('hide');
		}

	});
	
	
	