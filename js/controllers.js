app.controller('index', [ '$scope', function ($scope) {
  $scope.regular = false;
  $scope.everyone = function () {
    $scope.regular = true;
  }
}])
