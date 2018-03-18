angular.module('myApp',['ngRoute'])
	.controller('homeController',homeControllerFunc)
	.controller('courseController',courseController)
	.controller('studentController',studentController)
	.controller('loginController',loginController);

	angular.module('myApp')
		.config(function($routeProvider){

		$routeProvider
			.when("/login",{
				templateUrl:'login.html',
				controller : 'loginController'
			})
			.when("/home",{
				templateUrl:'home.html',
				controller : 'homeController'
			})
			.when("/courses",{
				templateUrl:'courses.html',
				controller : 'courseController'
			})
			.when("/students",{
				templateUrl:'students.html',
				controller : 'studentController'
			})
			.otherwise({
				redirectTo : "/login"
			})
	});

	function homeControllerFunc($scope){
		$scope.message = 'Home Page';
	};
	
	function courseController($scope){
		$scope.courses = ['C#','Java','PHP','Python','C'];
	};

	function studentController($scope){
		$scope.students = ['Kiran','Shilpa','Divya','Manju','Roopesh'];
	};

	function loginController($scope){
		
		$scope.login = function(){
			alert('login Success');
		};

	};
	
	