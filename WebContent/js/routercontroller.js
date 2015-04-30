var socialNetworkRoute = angular.module('socialNetworkRoute',['ngRoute']);

socialNetworkRoute.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
     when('/Login', {
        templateUrl: 'login.html',
        controller: 'AddOrderController'
      }).
      when('/ShowOrders', {
        templateUrl: 'show_orders.html',
        controller: 'ShowOrdersController'
      }).
      otherwise({
        redirectTo: '/Login'
      });
}]);
 
 
sampleApp.controller('AddOrderController', function($scope) {     
    $scope.message = 'This is Add new order screen';
     
});
 
 
sampleApp.controller('ShowOrdersController', function($scope) {
 
    $scope.message = 'This is Show orders screen';
 
});