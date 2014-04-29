
var phelper = {};

phelper.writeMessage = function(canvasPos, message){
  var contextPos              = canvasPos.getContext('2d');
  contextPos.clearRect        (0, 0, 340, 30);
  contextPos.font             = '18pt Courier'
  contextPos.fillStyle        = 'black';
  contextPos.fillText         (message, 10, 25);
}

phelper.clearParticles = function(canvasClear){
  var contextClear             = canvasClear.getContext('2d');
  contextClear.clearRect        (340, 30, 1000, 1000);
  contextClear.clearRect        (  0, 30,  340,  1000);
  contextClear.clearRect        (340,  0, 1000,  30);
}


phelper.drawMousePos = function(canvasPos, coordObj){
  var contextPos            = canvasPos.getContext('2d');
  var imageData             = contextPos.createImageData(1, 1);
      imageData.data[0]     = 0,  // red   color
      imageData.data[1]     = 0,  // green color
      imageData.data[2]     = 0,  // blue  color
      imageData.data[3]     = 255;
  contextPos.putImageData(imageData, coordObj.x, coordObj.y);
}

phelper.drawParticles = function(canvasObj, coordObj){
  var contextParticle       = canvasObj.getContext('2d');
  var imageData             = contextPos.createImageData(1, 1);

}

phelper.getMousePos = function(canvasPos, evt) {
  var rect = canvasPos.getBoundingClientRect();

  return {'x': evt.clientX - rect.left,
          'y': evt.clientY - rect.top};
}
