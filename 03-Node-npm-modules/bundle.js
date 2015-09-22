var $ = require('./jquery-2.1.4.js');
var Director = require('./director.js');
var Movie = require('./movie.js');

$(document).ready(function(){	
	var alien = new Movie();
	var ridleyScott = new Director('Ridley Scott');
	ridleyScott.set('quotes', ['Cast is everything.', 'Do what ...']);
	alien.set('director', ridleyScott);
	alien.get('director').speak();		
});