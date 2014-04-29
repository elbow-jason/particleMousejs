var ParticleWorld = function(limit, center){

  this.limit        = (limit || 100);
  this.center       = center || new Vector(0,0);
  this.particles    = [];   //fill with Particle Objects
  this.flares       = [];   //fill with Flare Objects

  //expects to be called with an FlareClass obj as arg
  this.addFlare = function(e){
    this.flares.push(e);
  };

  this.destroyEverything = function(){
    this.particles = [];
    this.flares= [];
  };

  this.newFlare = function(pos, ratePerSec, angle, accuracy, power, life){
    var e = new Flare(pos, ratePerSec, angle, accuracy, power, life, this);
    this.flares.push(e);
    return e;
  };

  this.getFlare = function(i){
    return this.flares[i];
  };

  this.removeFlare = function(i){
    this.flares.splice(i, 1);
  };

  this.removeFlares = function(start, end){
    for(var i = start; i < end; i++){
      this.removeFlare(i);
    }
  };


  this.getFlareCount = function(){
    return this.flares.length;
  };

  this.getParticleCount = function(){
    return this.particles.length;
  };

  this.getParticle = function(i){
    return this.particles[i];
  };

  this.destroyParticle = function(i){
    this.particles.splice(i, 1);
  };
  
  this.destroyParticles = function(start, end){
    for(i = start; i < end; i++){
      destroyParticle(i);
    }
  };
  
  this.destroyAllParticles = function(){
    this.particles = [];
  };

  this.update = function(delta){
    var eDeath = false;
    for(var i = 0; i < this.flares.length; i++){
      if(eDeath){i--;}
      this.flares[i].run(delta);
      if(this.flares[i].die){
        this.flares.splice(i, 1);
        eDeath = true;
      }
    }
    
    var pDeath = false;
    for(var i = 0; i < this.particles.length; i++){
      if(pDeath){
        i--;
        pDeath = false;
      }
      
      var p = this.particles[i];
      
      if(this.center != null){
        p.applyGravity(this.center, delta);
      }
      
      p.applyVelocity(delta);
      
      if(p.isDead()){
        this.particles.splice(i, 1);
        pDeath = true;
      }
    }
  };
  
};