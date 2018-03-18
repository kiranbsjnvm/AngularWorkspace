var myapp = angular.module('myApp',[]);

	myapp.controller('myController', function($scope, $q, $http) {

		var defer = $q.defer();

		defer.promise
			.then(function(inputData){
				alert("It is resolved : "+inputData);
			});
			/*.then(function(inputData){
				alert("Second time It is resolved : "+inputData);
			});*/

		defer.resolve("passing data");


		/*$http.get("https://support.oneskyapp.com/hc/en-us/article_attachments/202761627/example_1.json")
					.then(function(data){
						console.log(data);
				});*/


		$scope.fruits = '';
		$scope.getData = function(){

			$http.get("https://support.oneskyapp.com/hc/en-us/article_attachments/202761627/example_1.json")
				.success(function(data,status,header,config){
					$scope.fruits = data;
				},function(error){
					console.log('error while loading');
				});

		};


		//or
		/*var promise = $http.get("https://support.oneskyapp.com/hc/en-us/article_attachments/202761627/example_1.json");

		promise.then(function(data){
			console.log(data);
		},function(error){
			console.log('error while loading');
		});*/



		/*
		var first = $http.get("https://support.oneskyapp.com/hc/en-us/article_attachments/202761627/example_1.json");
		var second = $http.get("https://support.oneskyapp.com/hc/en-us/article_attachments/202761627/example_1.json");

		$q.all([first,second])
			.then(function(result){
					for (var i = 0; i<result.length;i++) {
						console.log(result[i]);
					}
			});*/


	});
	
	
myapp.controller('myController2',['$scope','$q','$interval',function($scope,$q,$interval){

	$scope.getPromise = function(){
		var i = 0;
		var defered = $q.defer();

		var timer = $interval(function(){

			if($scope.cancelRequested){
				defered.reject('Request rejected due to cancelation');
				$interval.cancel(timer);
			}

			i = i + 1;

			if(i==5){
				defered.resolve('Count has reached 5');
				$interval.cancel(timer);
			}else{
				defered.notify('Count reached '+i);
			}

		},1000);

		return defered.promise;
	};


	$scope.getAsyncMessage = function(){

		var promise = $scope.getPromise();

		promise.then(function(msg){
			$scope.status = 'Resolved : '+msg;
		},function(msg){
			$scope.status = 'Rejected : '+msg;
		},function(msg){
			$scope.status = 'Notified : '+msg;
		});
	};

}]);