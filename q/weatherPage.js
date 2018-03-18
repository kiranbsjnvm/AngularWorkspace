var weather = angular.module('weatherApp',[]);

weather.factory('weatherService',function($http){

	return {
		getWeather : function(city,country){

			var query = city +","+ country;
			return $http.get('http://api.openweathermap.org/data/2.5/weather', { params: { q: query } })
				.then(function(response){
					return response.data.weather[0].description;
				});
		}
	};

});

weather.controller('weatherController',['$scope','weatherService',function($scope,weatherService){

	$scope.getWeather = function(){

		$scope.weatherDescription = 'Fetching...';
		
		weatherService.getWeather($scope.city, $scope.country)
			.then(function(data) {
				$scope.weatherDescription = data;
			}, function() {
				$scope.weatherDescription = "Could not obtain data";
			}
		);
			
	}

}]);