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
        	$scope.errorMsg = "Login successfull";
        }).error(function(data, status, headers, config) {
        	$scope.errorMsg = "Request Failed" + status;
          });;   	
    	};
      
    $scope.registerUser = function(userSignUp) {    
        	  
        	$http.get('http://localhost:8080/RestSocialNetwork/addUserProfile?username='+userSignUp.name+
        			'&email='+userSignUp.email + '&password=' + userSignUp.password)
        	.success(function(response) {
            	$scope.response = "Successfully Registered";
            }).error(function(data, status, headers, config) {
            	$scope.response = 'Registeration failed' ;
            });         	
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

app.controller('CommentController', ['$scope','$http', function($scope, $http) {
	 
	$scope.userComment=function(statusComment,t,userName){
		$scope.timelineResponse = 'started' ;
		$http.get("http://localhost:8080/RestSocialNetwork/addCommentToTimeline?comment="+statusComment.comment
				+ "&username="+ userName + "&timelineid="+t.id)
		.success(function(response) {
			$scope.timelineResponse=response;			
			statusComment.comment="";
		}
		).error(function(data, status, headers, config) {
        	$scope.timelineResponse = 'Registeration failed' ;
        }); 
	};
	$scope.likeComment=function(commentid,timelineid,username){
		$scope.timelineResponse = 'started' ;
		$http.get("http://localhost:8080/RestSocialNetwork/likeComment?commentid="+commentid
				+ "&username="+ username + "&timelineid="+timelineid)
				.success(function(response) {
					$scope.timelineResponse=response;
				});
			};
			
			$scope.likeTimeline=function(timelineid,userame){
				$scope.timelineResponse = 'started' ;
				$http.get("http://localhost:8080/RestSocialNetwork/likeTimeline?username="+ username + "&timelineid="+timelineid)
						.success(function(response) {
							$scope.timelineResponse=response;			
						});
					};
					$scope.addTimeline=function(status,username){
		
						$http.get("http://localhost:8080/RestSocialNetwork/addTimeLine?status="+status +"&username="+ username)
								.success(function(response) {
									$scope.timelineResponse=response;			
								});
							};
							
	}]);

app.controller('customersCtrl', function($scope, $http) {
    $http.get("http://localhost:8080/RestSocialNetwork/listAllTimeLines")
    .success(function(response) {$scope.timelines = response;});
});

app.controller('personCtrl', function($scope) {    
    $scope.myVar = true;
    $scope.toggle = function() {
        $scope.myVar = !$scope.myVar;
    };
});