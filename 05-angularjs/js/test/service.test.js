'use strict';

describe("Movie Storage Service Test", function(){

	//angular module
	beforeEach(module('appStorageService'));

	// inject service from appStorageService module
	var LocalStorageService;

	beforeEach(inject(function(_LocalStorageService_){
      LocalStorageService = _LocalStorageService_;      
    }));

    var movieTest = {title: 'titleTest', director: 'directorTest', genre: 'genreTest', year: '2014', review: 'reviewTest'};

    it("Add a Movie", function() {  
    	//Length before add
    	var lengthBefore = LocalStorageService.getAll().length;
        LocalStorageService.addMovie(movieTest);        
        var lengthAfter = LocalStorageService.getAll().length;
        expect(lengthAfter).toEqual(lengthBefore+1);     

    });

    it("Edit a Movie", function() {  
    	//Length before add
    	LocalStorageService.addMovie(movieTest);
        var length = LocalStorageService.getAll().length;
        var editMovieTest = {title: 'titleEditTest', director: 'directorEditTest', genre: 'genreEditTest', year: '2015', review: 'reviewEditTest'};
        LocalStorageService.editMovie(length-1,editMovieTest)     
        expect(editMovieTest).toEqual(LocalStorageService.getByIndex(length-1));
    });

    it("Delete a Movie", function() {  
    	//Length before add
    	var length = LocalStorageService.getAll().length;
    	if(length>0){
    		LocalStorageService.deleteMovie(0);
    		expect(length-1).toEqual(LocalStorageService.getAll().length);  
    	}
    	else{
    		LocalStorageService.addMovie(movieTest);
    		LocalStorageService.deleteMovie(0);
    		expect(0).toEqual(LocalStorageService.getAll().length);
    	} 
    });

    it("Get all Movies", function() {  
    	expect(LocalStorageService.getAll()).not.toBe(null);
    });

    it("Get Movie by Index", function() {  
    	var editMovieTest = {title: 'titleEditTest', director: 'directorEditTest', genre: 'genreEditTest', year: '2015', review: 'reviewEditTest'};
        LocalStorageService.addMovie(editMovieTest);
        LocalStorageService.addMovie(movieTest);
        var getByIndex = LocalStorageService.getByIndex(LocalStorageService.getAll().length-2);
        expect(getByIndex.title).toEqual(editMovieTest.title);         
    });

});