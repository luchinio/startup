'use strict';

var appConfig = angular.module('appConfig', ['ngStorage']);


//Header Active tab 
appConfig.controller('dataController', ['$scope', '$localStorage', function($scope,$localStorage){

  //LocalStorage
  var dataDB = $localStorage.$default({data: []});

  $scope.dataDB = dataDB.data; 

  $scope.saveData = function(data){
    dataDB.data.push(data);
  } 

  $scope.clearData = function(){
    dataDB.data = [];
    $scope.dataDB = dataDB.data;
  }

}]);


appConfig.controller('indexedDBController', ['$scope', function($scope){

  //IndedexDB
  var IndedexDB = indexedDB.open('userData'); //DB name
  var db;
  IndedexDB.onupgradeneeded = function() {
    db = IndedexDB.result;
    var inputText = db.createObjectStore('userInputs', { autoIncrement: true });
  };

  IndedexDB.onsuccess = function() {
    db = IndedexDB.result;
  };

  $scope.dataDB = db; 

  $scope.saveData = function(data){
    var tx      =   db.transaction('userInputs', 'readwrite');
    var inputText   =   tx.objectStore('userInputs');
    inputText.put({content: data});
  } 

  $scope.clearData = function(){
    var tx      =   db.transaction('userInputs', 'readwrite');
    var inputText   =   tx.objectStore('userInputs');
    inputText.clear();
  }

}]);

