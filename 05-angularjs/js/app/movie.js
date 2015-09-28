'use strict';

var appMovies = angular.module('appMovies', ['appStorageService']);

appMovies.controller('MovieListController', [ '$scope', 'LocalStorageService', function($scope, LocalStorageService){
  
  $scope.movies = LocalStorageService.getAll();

  $scope.deleteMovie = function(index){
    LocalStorageService.deleteMovie(index);
  }
 
}]);

appMovies.controller('MovieActionsController', [ '$scope', 'LocalStorageService', '$location', '$routeParams', function($scope, LocalStorageService, $location, $routeParams){

  if($routeParams.id){
    $scope.movieId = $routeParams.id;
    $scope.movie = LocalStorageService.getByIndex($routeParams.id);
  }

  $scope.addMovie = function(movie){
    LocalStorageService.addMovie(movie);
    $location.path('/');
  }

  $scope.editMovie= function(index,movie){
    LocalStorageService.editMovie(index,movie);
    $location.path('/');
  }

}]);