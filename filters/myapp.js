var myapp = angular.module('myApp',[]);

	myapp.controller('MyController', function($scope) {
		
		$scope.peoples = ['kiranssssssssssss','bbbbsadsfsdfds','ccccsdfsdcsdddd','dddddddddddddddddddddddd'];

	});

	myapp.filter('limitCharacters',function(){
		
		return function(input,count){
			if(input.length > count)
				return input.substring(0,count);
			else
				return input;
		}
	});

	myapp.filter('wordCount',function(){
		return function(input){
			return input===undefined ? 0 : input.split(' ').length;
		} 
	})

	myapp.controller('myController2',function($scope,limitCharactersFilter){
		var str = "This is very very big string mmmmmmmmmmmmmmm shshshhshshs";
		$scope.name = 'Name with 15 chars length : '+ limitCharactersFilter(str,15);
	});
