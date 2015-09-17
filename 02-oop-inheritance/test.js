

//Movies
var ironman2 = new Movie();
ironman2.set('title', 'Iron Man 2');

var minions = new Movie();
minions.set('title', 'Minios');

var avengers = new Movie();
avengers.set('title', 'The Avengers');

//Observers
var firstObserver = new MovieObserver();
var secondObserver = new MovieObserver();

//Add Observers
ironman2.addObserver(firstObserver);
ironman2.addObserver(secondObserver);
minions.addObserver(firstObserver);
minions.addObserver(secondObserver);
avengers.addObserver(firstObserver);
avengers.addObserver(secondObserver);

//Play event
ironman2.play();
minions.play();
avengers.play();

//Stop event
ironman2.stop();
minions.stop();
avengers.stop();

//Actors
var Lucio = new Actor('Lucio','Mambrilla');
var Kevin = new Actor('Kevin','Costner');

//Add actors to movie and show all
ironman2.addActor(Lucio);
ironman2.addActor(Kevin);
ironman2.showActors();

//DownloadableMovie
var firstDownloadableMovie = new DownloadableMovie();
//Set Title test for firstDownloadableMovie
firstDownloadableMovie.set('title', 'Downloadable');

//Add Observer to firstDownloadableMovie
firstDownloadableMovie.addObserver(firstObserver);

//Test download download
firstDownloadableMovie.download();

//Share 
ironman2.share('Lucio');

//Like
ironman2.like();