'use strict';

/**
 * @ngdoc function
 * @name budgetburnApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the budgetburnApp
 */
angular.module('budgetburnApp')
  .controller('MainCtrl', function ($scope, $location) {

    $scope.awesomeThings = [
      {
          'name': 'HTML5 Boilerplate',
          'desc': 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.'
      },
      {
          'name': 'AngularJS',
          'desc': 'AngularJS is a toolset for building the framework most suited to your application development.'
      },
      {
          'name': 'Karmas',
          'desc': 'Spectacular Test Runner for JavaScript.'
      }
    ];

    $scope.thisSucks = function(){
        return 'Yep';
    };

    $scope.isActive = function(route) {
        return route === $location.path();
    };
  });
