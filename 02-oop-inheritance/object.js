var Movie = (function(){

    function Movie(){
        this.hashmap = {};
        this.observers = new MovieObserver();
        this.actors = [];
    }

    Movie.prototype = {
        constructor: Movie,
        play:function(){
            //this.observers.playing(this.hashmap['title']);
            this.notify('Playing ', this.get('title'));
        },
        stop:function ()  {
            //this.observers.stopped(this.hashmap['title']);
            this.notify('Stopped ', this.get('title'));
        },
        //Hashmap's methods
        set:function(attr,value)  {
            this.hashmap[attr] = value;        
        },
        get:function(attr)  {
            return this.hashmap[attr];
        },
        remove:function(attr){
            delete this.hashmap[attr];
        },
        exists:function(attr){
            return attr in this.hashmap;
        },
        clear:function(){
            for(i in this.hashmap){
                delete this.hashmap[i];
            }
        },
        length:function(){
            var count =0;
            for(i in this.hashmap){
                count++;
            }
            return count;
        },
        //Observer's methods
        addObserver:function(observer){
          this.observers.add(observer);
        },
        removeObserver:function(observer){
          this.observers.removeAt(this.observers.indexOf(observer,0));
        },
        notify:function(action, name){
          var observerCount = this.observers.count();
          for(var i=0; i < observerCount; i++){
            this.observers.get(i).update(action,name);
          }
        },
        addActor: function(actor){
            this.actors.push(actor);
        },
        countActors: function(){
            var count =0;
            for(i in this.actors){
                count++;
            }
            return count;
        },
        showActors: function(){
            var actorCount = this.countActors();
            for(var i=0; i < actorCount; i++){
                this.actors[i].getFullName();
            }
        }
    }

    return Movie;

})();


// Observer List Class
function ObserverList(){
  this.observerList = [];
};
 
ObserverList.prototype = {
    add:function( obj ){
        return this.observerList.push( obj );
    }, 
    count:function(){
        return this.observerList.length;
    },
    get:function( index ){
        if( index > -1 && index < this.observerList.length ){
        return this.observerList[ index ];
        }
    },
    indexOf:function( obj, startIndex ){
        var i = startIndex; 
        while( i < this.observerList.length ){
            if( this.observerList[i] === obj ){
              return i;
            }
            i++;
        } 
        return -1;
    },
    removeAt:function( index ){
        this.observerList.splice( index, 1 );
    }
};

//MovierObserver class
function MovieObserver(){
	this.observersList = new ObserverList();
};

MovieObserver.prototype = {
    constructor: MovieObserver,
    add:function(obj){
        return this.observersList.add(obj);
    },
    count:function(){
        return this.observersList.count();
    },
    get:function( index ){
        return this.observersList.get(index);
    },
    indexOf:function( obj, startIndex ){
        return this.observersList.indexOf(obj,startIndex);
    },
    removeAt:function( index ){
        return this.observersList.removeAt(index);
    }, 
    update:function(action, name){
        console.log(action + name + '...');
    },
    playing:function(name){
        console.log('Playing ' + name + '...');
    },
    stopped:function(name){
        console.log('Stopping ' + name + '...');
    }
};


// DownloadableMovie Class
var DownloadableMovie = (function(){

    function DownloadableMovie(){
        // Invoke the superclass constructor
        Movie.call(this);
    }

    DownloadableMovie.prototype = Object.create(Movie.prototype)

    DownloadableMovie.prototype.download = function(){
        this.notify('Downloading ', this.get('title'));        
    }

    /* Why not?
    DownloadableMovie.prototype = {
        constructor: DownloadableMovie,
        download:function(){
            this.notify('Downloading ' + this.get('title'));
        }
    }
    */ 

    return DownloadableMovie;

})();

 
// Mixins : Social
var Social = {
    share: function(friendName){
        console.log('Sharing ' + this.get('title') + ' with ' + friendName + '...');
    },
    like: function(){
        console.log('Like ' + this.get('title') + '...');
    }
}

/* Extends Social mixin to Movie Class , use function from : 
http://blog.brillskills.com/2013/09/javascript-subclassing-using-object-create/ */

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

__extends( Movie.prototype, Social );


// Actor Class
var Actor = (function(){

    function Actor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    Actor.prototype = {
        constructor: Actor,
        getFirstName: function(){
            return this.firstName;
        },
        getLastName: function(){
            return this.lastName;
        },
        getFullName: function(){
            return console.log(this.firstName + ' ' + this.lastName);
        }
    }

    return Actor;

})();


/* 

Biblilography:

- http://addyosmani.com/resources/essentialjsdesignpatterns/book/

- https://www.stevefenton.co.uk/2013/12/javascript-prototype-vs-revealing-module-pattern/

*/


/* Old Movie Class 

function Movie(){
    this.hashmap = {};
    this.observers = new MovieObserver();
};

Movie.prototype = {
    constructor: Movie,
    play:function ()  {
        //this.observers.playing(this.hashmap['title']);
        this.notify('play', this.get['title']);
    },
    stop:function ()  {
        //this.observers.stopped(this.hashmap['title']);
        this.notify('stop', this.get['title']);
    },
    //Hashmap's methods
    set:function(attr,value)  {
        this.hashmap[attr] = value;        
    },
    get:function(attr)  {
        return this.hashmap[attr];
    },
    remove:function(attr){
        delete this.hashmap[attr];
    },
    exists:function(attr){
        return attr in this.hashmap;
    },
    clear:function(){
        for(i in this.hashmap){
            delete this.hashmap[i];
        }
    },
    length:function(){  // probar this.hashmap.length
        var count =0;
        for(i in this.hashmap){
            count++;
        }
        return count;
    },
    //Observer's methods
    addObserver:function(observer){
      this.observers.add(observer);
    },
    removeObserver:function(observer){
      this.observers.removeAt(this.observers.observersList.indexOf(observer,0));
    },
    notify:function(from, name){
      var observerCount = this.observers.observersList.count();
      for(var i=0; i < observerCount; i++){
        this.observers.observersList.get(i).update(from,name);
      }
    }
};

*/
