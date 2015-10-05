'use strict';

document.addEventListener("DOMContentLoaded", function(event) { 

  window.requestAnimFrame = (function(callback) {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
  })();

  //Render canvas object
  function Render(canvasObj, context) {
    context.beginPath();
    context.rect(canvasObj.x, canvasObj.y, canvasObj.width, canvasObj.height);
    context.fillStyle = canvasObj.color;
    context.fill();
    context.lineWidth = canvasObj.borderWidth;
    context.strokeStyle = canvasObj.borderColor;
    context.stroke();
  }

  
  function animation(canvasObj, canvas, context, startTime) {
    // update
    var time = (new Date()).getTime() - startTime;

    var linearSpeed = 100;
    // pixels / second
    var newX = linearSpeed * time / 1000;

    if(newX < canvas.width - canvasObj.width - canvasObj.borderWidth / 2) {
      canvasObj.x = newX;
    }

    //full windows Width
    var fullWidth = document.body.clientWidth;
    canvas.width = fullWidth;
    
    // clear
    context.clearRect(0, 0, canvas.width, canvas.height);

    Render(canvasObj, context);

    // request new frame
    requestAnimFrame(function() {
      animation(canvasObj, canvas, context, startTime);
    });
  }

  var canvas = document.getElementById('canvasElement');
  var context = canvas.getContext('2d');

  //Canvas object
  var canvasObj = {
    x: 0,
    y: 75,
    width: 100,
    height: 100,
    color: '#FFFF00',
    borderWidth: 5, 
    borderColor: 'black',

  };

  Render(canvasObj, context);

  // wait one second before starting animation
  setTimeout(function() {
    var startTime = (new Date()).getTime();
    animation(canvasObj, canvas, context, startTime);
  }, 1000);

});


