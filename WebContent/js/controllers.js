var app = angular.module('socialNetwork', []);

	app.config(['$httpProvider', function($httpProvider) {
	        $httpProvider.defaults.useXDomain = true;
	        delete $httpProvider.defaults.headers.common['X-Requested-With'];
	    }
	]);
	
app.controller('LoginCtrl', function ($scope) {
  $scope.details = [
    {'`': 'Nexus S',
     'password' : 'Fast just got faster with Nexus S.'} ,
     {'username': 'Nexus S',
         'password' : 'Fast just got faster with Nexus S.'}];
});


app.controller('LoginController', ['$scope','$http', function($scope, $http) {


    $scope.userdetailsToValidate = {};
    $scope.userValidated = false;
    $scope.errorMsg ="No Error";
    $scope.friendlist="Friend List";

    $scope.update = function(userdetails) {
      $scope.userdetailsToValidate = angular.copy(userdetails);
    };

    $scope.validate = function(userdetails) {    
    	$http.get('http://localhost:8080/RestSocialNetwork/isValidUser?username=' + userdetails.username + '&password=' + userdetails.password)
    	.success(function(response) {
        	$scope.errorMsg = response;
        }).error(function(data, status, headers, config) {
        	$scope.errorMsg = "Request Failed" + status + ' : ' + 'http://localhost:8080/RestSocialNetwork/isValidUser?username=' + userdetails.username + '&password=' + userdetails.password ;
          });;   	
    	};
      
    $scope.registerUser = function(userSignUp) {    
        	$scope.response="Invoking request";      
        	$http.get('http://localhost:8080/RestSocialNetwork/addUserProfile?name='+userSignUp.name)
        	.success(function(response) {
            	$scope.response = "Successfully Registered";
            }).error(function(data, status, headers, config) {
            	$scope.errorMsg = 'Registeration failed' ;
            });;         	
        	};
    	
    $scope.reset = function() {
      $scope.userdetails = angular.copy($scope.userdetailsToValidate);
    };
    $scope.reset();
  }]);
  
  

app.controller('TabController', ['$scope','$http', function($scope, $http){
    this.tab = 1;
    this.setTab = function(newValue){
      this.tab = newValue;
    };

    this.isSelected = function(tabName){
      return this.tab === tabName;
    };
    
    getfriendlist = function() {    
    	this.friendlst="Invoking request";      
    	$http.get('http://localhost:8080/RestSocialNetwork/friendlist')
    	.success(function(response) {
    		$scope.friendlist = response;
        }); 
    	return friendlst;
    	};
    	
  }]);


app.controller('FriendsController', ['$scope','$http', function($scope, $http){ 
    getfriendlist = function() {    
    	this.friendlst="Invoking request";      
    	$http.get('http://localhost:8080/RestSocialNetwork/friendlist')
    	.success(function(response) {
    		$scope.friendlist = response;
        }); 
    	return friendlst;
    	};    	
  }]);

app.controller('FriendsController2', function($scope, $http) {
    $http.get("http://localhost:8080/RestSocialNetwork/friendlist")
    .success(function(response) {$scope.friendlistResponse = response;});
});

app.controller('TimelineController',function($scope,$http){
	$http.get("http://localhost:8080/RestSocialNetwork/timeline")
	.success(function(response) {$scope.timelineResponse=response;});
});


app.controller('personCtrl', function($scope) {    
    $scope.myVar = true;
    $scope.toggle = function() {
        $scope.myVar = !$scope.myVar;
    };
});