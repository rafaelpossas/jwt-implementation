/**
 * Created by rafaelpossas on 3/29/15.
 */
app.controller('registerCtrl',['$scope','$rootScope','$http','alert','authToken','$location','API_URL',function($scope,$rootScope,$http,alert,authToken,$location,API_URL){
  $('ul.nav.nav-pills li#register').addClass('active').siblings().removeClass('active');

  $scope.submit = function(){
    var url = API_URL+"users/register";
    var user = {
      email: $scope.email,
      password: $scope.password
    }
    $http.post(url,user)
      .success(function(res){
        $rootScope.recentlyRegistered = true;
        $rootScope.recentlyLogged = true;
        $rootScope.user = res.user;
        $rootScope.isAuthenticated = true;
        authToken.setToken(res.token);
        $location.path('/');


      })
      .error(function(err){
        alert('warning','Opps!','Could not register');
      });
  }
}])