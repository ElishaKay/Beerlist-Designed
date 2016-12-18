app.controller('AuthCtrl', ['$scope', '$state', 'auth', function($scope, $state, auth){
  $scope.register = function () {
    auth.register($scope.user).then(function(){
      $state.go('home');
    });
  };
  $scope.logIn = function(){
  		debugger;
  		console.log("you clicked submit");

      auth.logIn($scope.user);
    };
}]);