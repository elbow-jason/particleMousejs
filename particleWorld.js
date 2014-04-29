var ParticleWorld = function(limit, center){
	
	this.limit = (limit || 1000);
	this.center = center || new Vector(0,0);
	var particles = []; //fill with Particle Objects
	var emitters = [];  //fill with Emitter Objects

	//expects to be called with an Emitter as arg
	this.addEmitter = function(e){
		emitters.add(e);
	};
	
	this.newEmitter = function(pos, angle,  persecond){
		emitters.add(new Emitter(pos, angle, persecond, this));
	};

	this.update = function(dt){
		for(e in emitters){
			e.emit(10000);
		}
		var deaths = 0;
		for(var i = 0; i < particles.length-deaths; ++i){
			if(death){
				i--;
				death = false;
			}
			if(particles[i].isDead()){
				particles.splice(i,1);
				deaths++;
			}
			
			particles[i].applyGravity(dt);
			
			if(particles[i].shouldMove()){

				particles[i].position.add(particles[i].velocity);

			}
		}
	};
	
};
