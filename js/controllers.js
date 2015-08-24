app.controller('index', [ '$scope', function ($scope) {
  $scope.regular = true;
  $scope.d = null;
  $scope.everyone = function () {
    $scope.regular = true;
  }
  $scope.description = function (tab) {
    if ($scope.d && $scope.d[tab] === true) {
      $scope.d = null;
    } else {
      $scope.d = null;
      $scope.d = {};
      $scope.d[tab] = true;
    }
  }
}])
