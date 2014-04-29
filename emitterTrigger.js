

var TriggerEmitter = function(pos, ratePerSec, angle, accuracy, power, life, ParticleWorld world) 
{
  this.triggerPar = function(particles){
    if(!running){
      start(particles);
    }
    running = true;
  };
  
  this.triggerLen = function(length){
    if(!running){
      start(length);
    }
    running = true;
  };

  var startPar = function(particles){
    start(delay * particles, particles);
  };
  
  var startLen = function(length){
    start(length, length / delay);
  };

  var start = function(length, particles) {
    startTime   = Date.now() / 1000000;
    endTime     = startTime + length;
    oldTime     = 0;
  };
  
  @Override
  this.run(delta){
    time = System.nanoTime() / 1000000;
    if (time <= endTime) {
      if (oldTime == 0) {
        oldTime = time - delay;
      }
      difference = time - oldTime;
      if (difference >= delay && world.particles.size() < world.limit) {
        remains = difference % delay;
         times = () (difference / delay);
        for ( i = 0; i < times; ++i) {
          emit();
        }
        oldTime = time + remains;
      }
    }else if(running){
      running = false;
    }
  }
  
}


} extends Emitter {