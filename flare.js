

var Flare = function(pos, ratePerSec, angle, accuracy, power, life, world){
    this.position         = pos; 
    this.emitsPerSecond   = ratePerSec;
    this.dAngle           = angle % 361;
    this.angle            = (angle % 360) * (Math.PI/180);
    this.accuracy         = accuracy;
    this.power            = power;
    this.life             = life;
    this.world            = world;
    oldTime               = 0;
    delay                 = 1000 / ratePerSec;
    accTpi                = accuracy * Math.PI;

  var length, 
      particleAmount, 
      startTime,
      endTime,
      running = false;
  
 
  this.emit = function(){
    var xM, yM;
    if(dAngle == 360){
      var angleRand = Math.random() * Math.PI * 2;
      xM = Math.cos(angleRand);
      yM = Math.sin(angleRand);
    }else{
      xM = Math.cos(angle + (Math.random() - 0.5) * accTpi);
      yM = Math.sin(angle + (Math.random() - 0.5) * accTpi);
    }
    var velocity = new Vector(xM * this.power, yM * this.power);
    world.particles.add(new Particle(this.position, velocity, this.life));
  };



  this.destroy = function(){
    this.die = true;
  };
  this.triggerPar = function(particles){
    if(!running){
      start(particles);
    }
    running = true;
  };
  
  this.triggerLen = function(len){
    if(!running){
      start(len);
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
    startTime   = Date.now() / 10000;
    endTime     = startTime + length;
    oldTime     = 0;
  };
  
  this.run = function(delta){
    var time = Date.now() / 10000;
    if (time <= endTime) {
      if(oldTime == 0){
        oldTime = time - delay;
      }
      var difference = time - oldTime;
      if(difference >= delay && world.particles.length < world.limit){
        var remains = difference % delay;
        var times = difference / delay;
        for(var i = 0; i < times; ++i){
          this.emit();
        }
        oldTime = time + remains;
      }
    }else if(running){running = false;}
  };
};

