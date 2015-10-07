app.controller('index', [ '$scope', function ($scope) {
  $scope.regular = false;
  $scope.d = null;
  $scope.previewButtonText = "Preview";
  $scope.previews = false;
  $scope.togglePreviews = function () {
    if ($scope.previews) {
      $scope.previews = false;
      $scope.previewButtonText = "Preview";
    } else {
      $scope.previews = true;
      $scope.previewButtonText = "Hide";
    }
  }
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
