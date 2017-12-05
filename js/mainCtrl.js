angular.module("friendsList").controller("mainCtrl", function($scope){
  $scope.test= "Angular MINI Project";
  $scope.friends= ["friend1", "friend2", "friend3", "friend4", "friend5"];
  $scope.input="";
  $scope.addFriend= newFriend=> {
    $scope.friends.push($scope.input);
    $scope.input="";
  }
});
