var myapp = angular.module('myApp',[]);

	myapp.controller('MyController', function($scope) {
		
		// $scope.peoples = ['kiran','bbbb','cccc','dddd'];

		// $scope.message = '';
		// $scope.checkIfPeopleSame = function(){
		// 	if($scope.peoples[0]=='kiran' && $scope.peoples[1]=='bbbb' && $scope.peoples[2]=='cccc' && $scope.peoples[3]=='dddd')
		// 		$scope.message = 'same';
		// 	else
		// 		$scope.message = 'not same';
		// }

		//ng-repeat will not reflect cahnges for priitive types like string, integer etc
		//changes will be reflected to objects
		$scope.peoples = [{name : 'kiran'},{name : 'bbbb'},{name : 'cccc'},{name  : 'dddd'}];

		$scope.message = '';
		$scope.checkIfPeopleSame = function(){
			if($scope.peoples[0].name=='kiran' && $scope.peoples[1].name=='bbbb' && $scope.peoples[2].name=='cccc' && $scope.peoples[3].name=='dddd')
				$scope.message = 'same';
			else
				$scope.message = 'not same';
		}

	});
