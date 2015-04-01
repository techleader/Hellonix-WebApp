var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('LoginCtrl', function ($scope) {
  $scope.details = [
    {'`': 'Nexus S',
     'password' : 'Fast just got faster with Nexus S.'} ,
     {'username': 'Nexus S',
         'password' : 'Fast just got faster with Nexus S.'}];
});

phonecatApp.controller('LoginController', ['$scope', function($scope) {
    $scope.userdetailsToValidate = {};
    $scope.userValidated = false;

    $scope.update = function(userdetails) {
      $scope.userdetailsToValidate = angular.copy(userdetails);
    };

    $scope.validate = function(userdetails) {
    	
        $scope.userValidated = true;
      };
    $scope.reset = function() {
      $scope.userdetails = angular.copy($scope.userdetailsToValidate);
    };
    $scope.reset();
  }]);