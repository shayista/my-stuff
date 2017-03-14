var app = angular.module('photoGallery',[]);
app.controller('galleryController', function($scope, $http) {
  $http.get("data/data.json").then(function (response) {
      $scope.shoe = response.data.shoes;

  });


});

