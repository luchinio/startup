'use strict';

var appStorageService = angular.module('appStorageService', ['ngStorage']);

appStorageService.service('LocalStorageService', ['$localStorage', function($localStorage){

  var moviesDB = $localStorage.$default({movies: []});

  this.addMovie = function(movie){
    var movieObject = new Movie(movie);
    moviesDB.movies.push(movieObject);
  }

  this.editMovie = function(index,movie){
    moviesDB.movies[index] = movie;
  }

  this.deleteMovie = function(index){
    moviesDB.movies.splice(index,1);
  }

  this.getAll = function(){
    return moviesDB.movies;
  }

  this.getByIndex = function(index){
    return moviesDB.movies[index];
  }

}]);

var Movie = (function(){
  function Movie(movie){
      this.title = movie.title ? movie.title : '' ;
      this.director = movie.director ? movie.director : '';
      this.genre = movie.genre ? movie.genre : '';
      this.year = movie.year ? movie.year : '';
      this.review = movie.review ? movie.review : '';
  }
  return Movie;
})();