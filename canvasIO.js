
var colorLib          = {};
    colorLib.red      = [255,   0,   0, 255];
    colorLib.black    = [  0,   0,   0, 255];

var colorPixel = function(color, context){
  var pixel = context.createImageData(1, 1);
      for (i in colorLib[color]){ 
        pixel.data[i] = colorLib[color][i];
      }
  return pixel;
};

var CanvasIO = function(canvas){
  this.canvas = canvas;

  this.setContext = function(){
    this.context = this.canvas.getContext('2d');
  };
  this.setContext()

  var black = colorPixel('black', this.context);
  var red   = colorPixel('red',   this.context);

  this.writeMessage = function(message){
    this.context.clearRect        (0, 0, 350, 30);
    this.context.font             = '18pt Courier'
    this.context.fillStyle        = 'black';
    this.context.fillText         (message, 10, 25);
  };

  this.writeTime = function(){
    var timeNow = Date.now();
    this.context.clearRect        (350, 0, 700, 30);
    this.context.font             = '18pt Courier'
    this.context.fillStyle        = 'black';
    this.context.fillText         (timeNow, 360, 25);
    };

  this.clearParticles = function(){
    this.context.clearRect        (340, 30, 1000,  1000);
    this.context.clearRect        (  0, 30,  340,  1000);
    this.context.clearRect        (340,  0, 1000,    30);
  };

  this.drawMousePos = function(coordObj){
    this.context.putImageData(black, coordObj.x, coordObj.y);
  };

  this.getMousePos = function(evt) {
    var rect = this.canvas.getBoundingClientRect();
    return {'x': evt.clientX - rect.left,
            'y': evt.clientY - rect.top};
  };

  this.renderParticles = function(worldObj){ 
    var particleCount                = worldObj.getParticleCount();
    for(p in worldObj.particles){ 
      this.context.putImageData(red,   p.position.x,      p.position.y);
    }
  };


};



