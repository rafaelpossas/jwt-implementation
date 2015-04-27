/**
 * Created by rafaelpossas on 4/15/15.
 */
app.controller('jobCtrl',['$scope','$http','API_URL','alert',function($scope,$http,API_URL,alert){
  $('ul.nav.nav-pills li#jobs').addClass('active').siblings().removeClass('active');

  $scope.message = 'This is our Jobs';

  $http.get(API_URL+'jobs')
    .success(function(jobs){
      $scope.jobs = jobs
    })
    .error(function(err){
      var msg;
      if(err == null) {
        msg = "Connection Failed"
      }else{
        msg = err.message;
      }
      alert('warning',"Unable to get jobs!",' Reason: '+msg);
    })

}])