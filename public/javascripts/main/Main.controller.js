/**
 * Created by rafaelpossas on 3/29/15.
 */
app.controller('mainCtrl',['$scope','$rootScope','alert',function($scope,$rootScope,alert){
  $('ul.nav.nav-pills li#home').addClass('active').siblings().removeClass('active');
  $scope.message = 'Welcome to this angularJS application'
  if($rootScope.recentlyRegistered){
    alert('success','Account Created!','Welcome, ' + $rootScope.user.email + '!');
  }else if($rootScope.recentlyLogged){
    alert('success','You have just Logged In!','Welcome, ' + $rootScope.user.email + '!');
  }

}])