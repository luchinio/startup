'use strict';

var appConfig = angular.module('appConfig', ['ngRoute','appMovies', 'appStorageService']);

//Route Configuration
appConfig.config(['$routeProvider', function($routeProvider) {  
  $routeProvider.
      when('/movies', { templateUrl: 'Views/list.html', controller: 'MovieListController', activetab: 'list'}). 
      when('/movie', { templateUrl: 'Views/movie.html', controller: 'MovieActionsController', activetab: 'details'}).
      when('/movie/:id', { templateUrl: 'Views/movie.html', controller: 'MovieActionsController', activetab: 'details'}).        
      otherwise({ redirectTo: '/movies' });   
}]);

//Temaplte Cache
appConfig.run(['$templateCache', '$http', function ($templateCache, $http)
{
  $http.get('Views/list.html', {cache: $templateCache});
  $http.get('Views/movie.html', {cache: $templateCache});
}]);

//Header Active tab 
appConfig.controller('HeaderController', ['$scope', '$location', function($scope,$location){
    $scope.isActive = function (viewLocation) { 
      return viewLocation === $location.path();
    };
}]);

