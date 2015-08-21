app.controller('cartoons', [ '$scope', function ($scope) {
  $scope.cartoons = cartoons;
  $scope.reverse = true;
  $scope.sort = 'score';
  $scope.cartoonFormShow = false;
  $scope.order = function (sort) {
    $scope.reverse = ($scope.predicate === sort) ? !$scope.reverse : $scope.reverse;
    $scope.sort = sort;
  }
  $scope.downScore = function () {
    this.cartoon.score--;
  }
  $scope.upScore = function () {
    this.cartoon.score++;
  }
  $scope.show = function (type) {
    if (this.cartoon[type]) {
      this.cartoon.form = false;
      this.cartoon.comment = false;
      this.cartoon[type] = false;
    } else {
      this.cartoon.form = false;
      this.cartoon.comment = false;
      this.cartoon[type] = true;
    }
  }
  $scope.post = function (comment) {
    this.cartoon.comments.push({text: comment, author:'You'})
  }
  $scope.submitForm = function (info) {
    console.log(info);
  }
  $scope.formShow = function () {
    if ($scope.cartoonFormShow) {
      $scope.cartoonFormShow = false
    } else {
      $scope.cartoonFormShow = true
    }
  }
  $scope.submitCartoon = function () {
    $scope.cartoons.push({name: $scope.title, image: $scope.url, score: 10, comments: [], author: "You", description: $scope.description})
  };
  $scope.clearForm = function (form) {
    $scope.title = null;
    $scope.url = null;
    $scope.description = null;
    this[form].$setPristine();
    this[form].$setUntouched();
  }
}])

app.filter('shuffle', function () {
  return function (input) {
    for (var i = input.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = input[i];
      input[i] = input[j];
      input[j] = temp;
    }
    return input;
  }
})

app.controller('about', ['$scope', function($scope) {
  $scope.message = 'to be completed';
  $scope.array = [1,2,3,4,5];
}]);

app.controller('find', ['$scope', '$http', function($scope, $http) {
  $scope.findShow = function (search) {
    $http.get('http://api.themoviedb.org/3/search/tv?api_key=1ba088fb7619598dd41dd19962963592&query='+ search).then(function(data){
      var cartoons = data.data.results;
      var array = cartoons.filter(function (cartoon) {
        if (cartoon.first_air_date) {
          var year = cartoon.first_air_date.substring(0,4);
          if (parseInt(year) < 2000 && parseInt(year) > 1989) {
            cartoon.year = year;
            return cartoon
          } else if (parseInt(year) < 2000) {
            cartoon.year = year;
            cartoon.warning = "Note: not true 90s, but may have been on TV";
            return cartoon;
          }
        }
      })
      $scope.cartoons = array;
    });
  }
}]);

app.controller('math', ['$scope','$routeParams', function($scope, $routeParams) {
  var param1 = $routeParams;
  $scope.message = param1;
  $scope.factor = param1.factor;
  $scope.number = param1.number;
  $scope.otherNumber = param1.otherNumber;
  if ($scope.factor === 'add') {
    $scope.result = parseInt(param1.number) + parseInt(param1.otherNumber)
  } else if ($scope.factor === "multiply") {
    $scope.result = parseInt(param1.number) * parseInt(param1.otherNumber)
  } else {
    $scope.result = "something something, I don't want to do math"
  }
}]);
