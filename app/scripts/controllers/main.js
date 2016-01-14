'use strict';

/**
 * @ngdoc function
 * @name hnNgApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hnNgApp
 */
angular.module('hnNgApp')
  .controller('MainCtrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http.get('https://hacker-news.firebaseio.com/v0/topstories.json').success(function(data) {
      console.log("SUCCESS");
      $scope.stories = data;
      console.log($scope.stories);
        angular.forEach($scope.stories, function(item){
          $http.get('https://hacker-news.firebaseio.com/v0/item/'+ item +'.json').success(function(data) {
            $scope.listStories = data;
            console.log($scope.listStories);
        });
      });
  });


});
