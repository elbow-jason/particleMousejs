
  
var ParticleSystemTest = function(){ 

    var main = function(args) { 

        world = new ParticleWorld(100, new Vector((800 / 2), (600 / 2))); 
        world.newFlare(new Vector((800 * 0.25), (600 / 2)), 100, 90, 0, 10, 100000); 
//      BurstEmitter e = new BurstEmitter(new Vec2d((1280 * 0.25), (720 / 2.0)), 1000.0, 360.0, 0.0, 25.0, 100000.0, world); 
//      TriggerEmitter e = new TriggerEmitter(new Vec2d(1280 * 0.25, 720 / 2), 10000, 90, 0.5, 25.0, 10000, world); 
//      world.emitters.add(e); 
          
        var time = Date.now(); 
        var delta = 0; 

        var input = function(){};
        var update = function(dt){ 
          world.update(dt); 
        };
      

        var render = function(g){ 
          g.setColor(Color.BLACK); 
          g.fillRect(0, 0, 1280, 720); 
    
          g.setColor(p); 
          for(Particle p : world.particles){ 
              g.fillRect((int)p.position.x, (int)p.position.y, 1, 1); 
          } 
            
          g.setColor(Color.RED); 
          g.fillRect((int)world.center.x, (int)world.center.y, 1, 1); 
          g.drawString("" + EasyCanvas.actualFPS(), 50, 50); 
        };

        while(true === true ){ 
            update(delta / 1000000); 
            render(EasyCanvas.getGraphics()); 
            EasyCanvas.update(); 
            delta = Date.now() - time; 
            time = Date.now(); 
        } 
    }; 
      
};
