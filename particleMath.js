//ParticleMousejs - a neat thing to play with.
//inspired/designed/coded/attributed by/to www.reddit.com/u/mangopearapples this is a JavaScript port of his/her Java work.
//http://www.reddit.com/r/learnprogramming/comments/2275te/i_made_a_particle_system_and_i_think_it_looks/
//See MIT.LISCENCE for liscening info.

// Vector Key: 
	// x is X coordinate
	// y is Y coordinate
	// v is Vector class object

var Vector =  function(x, y) {
	this.x = x || 0.0;
	this.y = y || 0.0;
	this.approach = function(destination, dt){
		if(distanceTo(destination, true) < dt){
			set(destination);
		}
		else{
			x += Math.cos(radiansTo(destination)) * dt;
			y += Math.sin(radiansTo(destination)) * dt;
		};
	};
	
	this.set = function(x, y){
		this.x = x;
		this.y = y;
	};
	
	this.add = function(x1, y1) {
		x += x1;
		y += y1;
	};
	
	this.sub = function(x1, y1){
		x -= x1;
		y -= y1;
	};
	
	this.multiply = function(x1, y1){
		x *= x1;
		y *= y1;
	};
	
	this.divide = function(x1, y1){
		x /= x1;
		y /= y1;
	};
	
	this.addFunc = function(v){
		add(v.x,v.y);
	};
	
	this.subFunc = function(v){
		sub(v.x,v.y);
	};
	
	this.multiplyFunc = function(v){
		multiply(v.x,v.y);
	};
	
	this.divideFunc = function(v){
		divide(v.x,v.y);
	};
	
	this.powerFunc = function(v, p){
		v.x = Math.pow(v.x, p);
		v.y = Math.pow(v.y, p);
	};
	
	this.negative = function(){
		if((this.x < 0 && this.y < 0) || (this.x == 0 && this.y == 0)){
			return this;
		};
		var nx = (this.x < 0) ? x:-x;
		var ny = (this.y < 0) ? y:-y;
		return new Vector(nx, ny);
	};
	
	this.positive = function(){
		if((this.x > 0 && this.y > 0) || (this.x == 0 && this.y == 0)){
			return this;
		};
		var nx = (x > 0) ? x:-x;
		var ny = (y > 0) ? y:-y;
		return new Vector(nx, ny);
	};
	
	this.opposite = function(){
		return new Vector(-x, -y);
	};
	
	this.distanceTo = function(x, y, matrix){
		return (matrix) ? Math.abs(Math.sqrt(((x - this.x)*(x - this.x)) + ((y - this.y)*(y - this.y)))):Math.sqrt(((x - this.x)*(x - this.x)) + ((y - this.y)*(y - this.y)));
	};
	
	this.distanceTo = function(v, matrix){
		return distanceTo(v.x, v.y, matrix);
	};
	
	this.angleTo = function(x, y){
		return (Math.atan2(y - this.y, x - this.x));
	};
	
	this.angleFrom = function(x, y){
		return (Math.atan2(this.y - y, this.x - x));
	};

	this.angleTo = function(v){
		return angleTo(v.x, v.y);
	};
	
	this.angleFrom = function(v){
		return angleFrom(v.x, v.y);
	};

	this.radiansTo = function(x, y){
		return Math.atan2(y - this.y, x - this.x);
	};
	
	this.radiansFrom = function(x, y){
		return Math.atan2(this.y - y, this.x - x);
	};

	this.radiansTo = function(v){
		return radiansTo(v.x, v.y);
	};
	
	this.radiansFrom = function(v){
		return radiansFrom(v.x, v.y);
	};
	
	this.clone = function(){
		return new Vector(this.x, this.y);
	};
	
	// @Override
	this.ToString = function(){
		return "Vec2f(" + x + "," + y +")";
	};
}
