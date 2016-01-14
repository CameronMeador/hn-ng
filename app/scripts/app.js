'use strict';
/**
 * @ngdoc overview
 * @name hnNgApp
 * @description
 * # hnNgApp
 *
 * Main module of the application.
 */
var app = angular
  .module('hnNgApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
