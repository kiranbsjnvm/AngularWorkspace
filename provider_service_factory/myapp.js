var myapp = angular.module('myApp',[]);

//Provider
/*myapp.provider("myProvider",function () {

	this.thingFromConfig = '';

	//this method will be called only once(singleton), no matter in how many place we inject provider;
	// this is same for all (provider,service, factory)
	this.$get = function () {
		//even though it is injected in two controllers , this will be executed once
		console.log('myProvider.get() calls');

		return "My Value";
    };

    //or
    //this.$get = function () {
	//	return {
	//		getValue1 : function(){
	//			return "My Value";
	//		},
	//
	//		thingonConfig: this.thingFromConfig
	//	}
    //};
});

app.config(function (myProviderProvider) {
  myProviderProvider.thingFromConfig = 'This was set in config()';
})

myapp.controller('myController', function(myProvider) {
	console.log("myProvider : "+myProvider);
});

myapp.controller('myController2', function(myProvider) {
    console.log("myProvider : "+myProvider);
}); */




//Factory (it returns objects)
//here we have a freedom to to decide what to return and what not to
/*myapp.factory("myFactory",function () {
	console.log('myFactory function called');
	var name = 'kiran';
	
	return {
        getValue : function () {
            return "It is an object";
        },
		getValue2 : function () {
            return "It is an object2";
        }
	}

	//or
	//var service = {}

	//service.getValue = function () {
	//	return "It is an object";
	//};

	//service.getValue2 = function () {
	//	return "It is an object2";
	//};

	//return service;

});

myapp.controller('myController', function(myFactory) {
    console.log("myFactory : "+myFactory.getValue());
    console.log("myFactory : "+myFactory.getValue2());
});*/


//Service (it returns constructor function)
myapp.service("myService",function () {
    console.log('myService function called');
	
	this.name = 'kiran';

	this.getValue = function () {
		return "It is an object";
	};

	this.getValue2 = function () {
		return "It is an object2";
	}

});

myapp.controller('myController', function(myService) {
    console.log("myService : "+myService.getValue());
	console.log("myService : "+myService.getValue2());
	console.log("myService : "+myService.name);
});
	
	
	