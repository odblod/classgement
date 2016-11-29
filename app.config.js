'use strict';

angular.
  module('mainApp').
  config(['$locationProvider','$routeProvider', function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    
    $routeProvider.
      when('/cursos', {
        template: '<cursos></cursos>'
      }).
      when('/registro', {
        template: '<registro></registro>'
      }).
      
    otherwise({
      redirectTo: '/cursos'
    });
  }]);