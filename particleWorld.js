var ParticleWorld = function(limit, center){

  this.limit      = (limit || 100);
  this.center     = center || new Vector(0,0);
  var particles   = [];   //fill with Particle Objects
  var emitters    = [];   //fill with Emitter Objects

  //expects to be called with an EmitterClass obj as arg
  this.addEmitter = function(e){
    emitters.push(e);
  };

  this.destroyEverything = function(){
    particles = [];
    emitters = [];
  };

  this.newEmitter = function(pos, angle,  persecond){
    emitters.push(new EmitterClass(pos, angle, persecond, this));
  };

  this.getEmitterCount = function(){
    return emitters.length;
  };

  this.getParticleCount = function(){
    return particles.length;
  };

  this.update = function(delta){
    var eDeath = false;
    for(var i = 0; i < emitters.length; ++i){
      if(eDeath){i--;}
    if(particles[i].isDead()){
      particles.splice(i,1);
      deaths++;
    }

  particles[i].applyGravity(dt);
  if(particles[i].shouldMove()){
    particles[i].position.push(particles[i].velocity);
  }
  };
  };

  };
