var myapp = angular.module('myApp',[]);

	myapp.controller('myController', function($scope,$location,$anchorScroll) {

		$scope.scrollPageTo = function(scrollToId){
			$location.hash(scrollToId);
			$anchorScroll.yOffset = 30; //give 30px of verticale space
			$anchorSrcoll();
		}

	});
	
	
	