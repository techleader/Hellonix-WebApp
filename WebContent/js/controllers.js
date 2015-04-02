var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('LoginCtrl', function ($scope) {
  $scope.details = [
    {'`': 'Nexus S',
     'password' : 'Fast just got faster with Nexus S.'} ,
     {'username': 'Nexus S',
         'password' : 'Fast just got faster with Nexus S.'}];
});


phonecatApp.controller('LoginController', ['$scope','$http', function($scope, $http) {
    $scope.userdetailsToValidate = {};
    $scope.userValidated = false;
    $scope.errorMsg ="No Error";

    $scope.update = function(userdetails) {
      $scope.userdetailsToValidate = angular.copy(userdetails);
    };

    $scope.validate = function(userdetails) {    
    	$scope.errorMsg="Invoking request";
  
    	$http({
    	    method: 'POST',
    	    url: 'http://localhost:8080/WebApp/loginkaro',
    	    data: $.param({username:'jawahar'}),
    	    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    	}).success(function(response) {
        	$scope.errorMsg = response;
        });
    	
    	};
      
    $scope.reset = function() {
      $scope.userdetails = angular.copy($scope.userdetailsToValidate);
    };
    $scope.reset();
  }]);