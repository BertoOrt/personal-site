app.controller('index', [ '$scope', function ($scope) {
  $scope.regular = true;
  $scope.everyone = function () {
    $scope.regular = true;
  }
}])
