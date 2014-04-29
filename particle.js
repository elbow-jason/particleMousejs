var Particle = function(pos, vel, life){

  this.position = pos;
  this.velocity = vel;
  this.life = life;
  var startTime = Date.now() / 1000000;

  this.applyGravity= function(world, delta){
    var angle = this.position.radiansTo(world);
    var dSecs = 9.8 * (delta / 1000);
    this.velocity.add(Math.cos(angle) * dSecs, Math.sin(angle) * dSecs);
  };

  this.applyVelocity = function(delta){
    if(this.velocity !== (0,0)){
      var vel = this.velocity.clone();
      vel.multiply((delta / 1000));
      this.position.add(vel);
    }
  };
  this.isDead = function(){
    return ((Date.now() / 1000000) - startTime >= life);
  };

};
