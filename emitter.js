


var EmitterClass = function(pos , angle, persecond, world ) {
// need random Obj? 

	this.particlesPerSecond  = persecond;
	var delay = 1000 / particlesPerSecond;;
	var lastEmitTime= 0;
		this.world = world;
		this.position = pos;
		this.angle = angle;

	

	this.single = function(pos, vel, life){
		p = new Particle(world, pos.x, pos.y, life);
		p.velocity.set(vel);
		this.world.particles.add(p);
	};
	
	this.emit1 = function(life){
		emit3(0,0,life);
	};
	
	this.emit3 = function(x,  y, life){
		//using nodejs's process.hrtime() to replace java's System.nanoTime()
		var time = process.hrtime() / 1000000;
		if(lastEmitTime == 0){
			lastEmitTime = time - delay;
		}
		var difference = time - lastEmitTime;
		var angle = position.angleTo(world.center);
		if(difference >= delay){
			for(var i = 0; i < (difference / delay); ++i){
				var pos = position.clone();
				//nextFloat() => The method call returns the next pseudorandom, uniformly distributed  value between 0.0 and 1.0 from this random number generator's sequence.
				pos.add(Math.cos(angle + (Math.random() * 5.0) - 2.5) * i, Math.sin(angle + (Math.random() * 5.0) - 2.5) * i);
				single(pos, new Vector(x, y), life);
				lastEmitTime = time - (difference % delay);
			}
		}
	};
};
