var Movie = (function(){

    function Movie(){
        this.hashmap = {};
        this.actors = [];
        this.director = {};
    };

    Movie.prototype = {
        constructor: Movie,
        //Hashmap's methods
        set:function(attr,value)  {
            if (attr === 'director') {
                return this.director = value;
            };
            if (attr === 'actor') {
                return this.actors.push(value);
            };
            return this.hashmap[attr] = value;        
        },
        get:function(attr){
            if(attr === 'director'){
                return this.director;
            };
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
        showDirectors: function(){
            var directorCount = this.directors.length;
            for(var i=0; i < directorCount; i++){
                console.log(this.directors[i].getName());
            }
        }   
    };

    return Movie;

})();


module.exports = Movie;