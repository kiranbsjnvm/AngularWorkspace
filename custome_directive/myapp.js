var myapp = angular.module('myApp',[]);

myapp.controller('myController', function($scope) {

	$scope.message = 'I Love Angular'
	
	$scope.changeText = function(){
		$scope.test = 'changed text';
	}
});


myapp.directive('helloWorld',function(){

	return {
		scope : {message : '=messageAttr'},
		restrict : 'AEC',
		replace : true,
		template : '<p ng-click="clearMessage()">Hello World! : {{message}} - {{test}}</p>',

		link : function(scope,ele,attr){

			scope.test = 'kiran';

			scope.$watch('message',function(newValue,oldValue){
				console.log('Value changed to : '+newValue);
			});

			scope.clearMessage = function() {
				scope.message = '';
			};

			ele.bind('mouseover',function(){
				console.log('inside mouseover');
				ele.css('cursor','pointer');
			});

		}
	};

});
	

//communication btw two directives
myapp.directive('outerDirective',function(){
	return{
		scope : {},
		controller : function($scope){
			this.message = 'Outer message';

			this.addChild = function(nestedDirectiveScope){
				console.log('got the msg from nested directive :'+nestedDirectiveScope.message);
			}
		}
	};
});

myapp.directive('innerDirective',function(){
	return{
		scope : {},
		require : '^outerDirective',
		link : function(scope,ele,attrs,controllerInstance){
			scope.message = 'Hello World';
			
			console.log(controllerInstance.message);
			controllerInstance.addChild(scope);
		}
	};
});


