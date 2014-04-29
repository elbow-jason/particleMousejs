
var Particle = function(world, x, y, life){

	this.position = new Vector(x, y); //position isA Vector
	this.velocity = new Vector(0,0);  //velocity isA Vector
	
	var lifetime = life;
	this.world = new ParticleWorld;
	var starttime = (process.hrtime() / 1000000);

	this.applyGravity= function(dt){
		var y = Math.sin(position.angleTo(world.center)) * 9.8 * (dt / 1000);
		var x = Math.cos(position.angleTo(world.center)) * 9.8 * (dt / 1000);
		velocity.add((x < 10.0 && x > -10.0) ? x : 0,(y < 10.0 && y > -10.0) ? y:0);
	};
	
	this.shouldMove = function(){
		return (velocity.x != 0 || velocity.y != 0);
	};
	
	this.isDead = function(){
		return (process.hrtime() / 1000000) - starttime >= lifetime;
	};
};
