var myapp = angular.module('calculatorApp',[]);

myapp.controller("CalculatorController",function ($scope) {

    $scope.z = 0;
    $scope.sum = function() {
        $scope.z = $scope.x + $scope.y;
    };

});