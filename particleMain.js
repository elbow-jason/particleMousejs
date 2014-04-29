      function writeMessage(canvasPos, message){
          var contextPos              = canvasPos.getContext('2d');
          contextPos.clearRect        (0, 0, canvasPos.width, canvasPos.height);
          contextPos.font             = '18pt Courier'
          contextPos.fillStyle        = 'black';
          contextPos.fillText         (message, 10, 25);
      }


        function getMousePos(canvasPos, evt) {
        var rect = canvasPos.getBoundingClientRect();

        return {x: evt.clientX - rect.left,
                y: evt.clientY - rect.top};
        }

var ParticleSystemTest = function() { 

    var world = new ParticleWorld; 
    var makeWorld = function(args) { //expect arg to be array of strings 
        // need to put canvas input here.

          
        world = new ParticleWorld(1000, new Vector(500,500)); 
        world.newEmitter(new Vector((1000 / 2), (1000 / 2)), 0, 1000); 

    };
      
    this.updateXY = function(coordObj){ 
        world.center.x = coordObj;
        world.center.y = coordObj;
    };
} 