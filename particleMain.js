function writeMessage(canvasPos, message){
  var contextPos              = canvasPos.getContext('2d');
  contextPos.clearRect        (0, 0, 340, 30);
  contextPos.font             = '18pt Courier'
  contextPos.fillStyle        = 'black';
  contextPos.fillText         (message, 10, 25);
}



      function drawParticles(canvasParticle, coordObj){

      var contextParticleToo    = canvasParticle.getContext('2d');
      var imageData             = contextParticleToo.createImageData(1, 1);
          imageData.data[0]     = 0,  // red   color
          imageData.data[1]     = 0,  // green color
          imageData.data[2]     = 0,  // blue  color
          imageData.data[3]     = 255;
      contextParticleToo.putImageData(imageData, coordObj.x, coordObj.y);
      }

function getMousePos(canvasPos, evt) {
    var rect = canvasPos.getBoundingClientRect();

    return {'x': evt.clientX - rect.left,
            'y': evt.clientY - rect.top};
}

var ParticleSystemTest = function() { 

    var world = new ParticleWorld; 
    var makeWorld = function(args) { //expect arg to be array of strings 
        // need to put canvas input here.

          
        world = new ParticleWorld(1000, new Vector(500,500)); 
        world.newEmitter(new Vector((1000 / 2), (1000 / 2)), 0, 1000); 

    };
      
    this.updateXY = function(coordObj){ 
        world.center.x = coordObj.x;
        world.center.y = coordObj.y;
    };
} 