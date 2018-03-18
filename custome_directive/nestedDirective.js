var myapp = angular.module('myApp',[]);

	myapp.directive('outer', function(){
        return{
            transclude:true,
            restrict:'E',
            template:'<div><h1>i am a outer</h1><div ng-transclude></div></div>'
        }
    });

    myapp.directive('inner',function(){
        return{
            restrict:'E',
            require : 'outer',
            template : '<div><h1>i am a inner</h1></div>'
        }
    });

    myapp.directive('helloWorld',function(){
    	return {
    		replace : false,
    		template : '<h3>Hello world !!!!</h3>'
    	}
    });
	
	