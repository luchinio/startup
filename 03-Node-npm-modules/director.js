//Why do this ?
//You require this modulo in the bundle.js
require('./movie.js');

var Director= (function ()
{
	function Director(name)
	{       
        this.name = name;
        this.hashmap = {};
		this.quotes= [];
	};
    //be careful you're treading the prototype.
	Director.prototype =
	{
        //this is redundant
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor 
		constructor: Director,
        //Hashmap's methods
        set:function(attr,value)  {
            if(attr === 'quotes'){                
                for(i in value){                    
                    this.quotes.push(value[i]);
                }       
            }
            else{
               this.hashmap[attr] = value;  
            }
        },
        get:function(attr){
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
        getName:function(){
            return console.log(this.name);
        }, 
        //Director´s methods
        speak: function(){
			var quoteCount = this.quotes.length;
            for(var i=0; i < quoteCount; i++){
                console.log(this.name + ' says: ' + this.quotes[i]);
            }
		}
	};

	return Director;
})();
// if you pay attention, you can do this in the same line. Assigning to module.exports your anonymus function.
// E.g modules.exports = (function (){....})();
module.exports = Director;