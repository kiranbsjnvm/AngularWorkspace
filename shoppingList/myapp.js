var myapp = angular.module('myApp',[]);

	myapp.controller('myController', function($scope, $q) {

			$scope.products = ['watch'];

			$scope.addProduct = function(item){
				if(item!=null || item!=undefined)
				{
					if ($scope.products.indexOf(item) == -1) {
            			$scope.products.push(item);
            			$scope.prod = '';
        			} else {
            			$scope.errortext = "The item is already in your shopping list.";
        			}
					
					
				}
				
			}

			$scope.deleteProduct = function(item){
				var index = $scope.products.indexOf(item);
				if(index>-1)
				{
					$scope.products.splice(index,1);
				}
			}

			//manual watch method
			$scope.name = 'dotnet-tricks.com'; 
			$scope.counter = 0; 
			//watching change in name value 
			$scope.$watch('name', function (newValue, oldValue) { 
				$scope.counter = $scope.counter + 1; 

			});

	});
	
	
	