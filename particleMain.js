
var Particle = require('Particle');
var ParticleWorld = require('particleWorld');
var Vector = require('particleMath')
 
import com.mangopearapples.easycanvas.EasyCanvas; 
import com.mangopearapples.easycanvas.input.EasyMouse; 
  
  
var ParticleSystemTest = function() { 
  
    var world = new ParticleWorld; 
      
    this.main = function(args) { //expect arg to be array of strings 
        // need to put canvas input here.
        EasyCanvas.create(1280, 720); 
        EasyCanvas.setFPS(0); 
          
        world = new ParticleWorld(1000, new Vec2f(500,500)); 
        world.newEmitter(new Vector((1280 / 2), (720 / 2)), 0, 1000); 
          
        while(!EasyCanvas.isCloseRequested()){ 
            input(); 
            update(); 
            render(EasyCanvas.getGraphics()); 
            EasyCanvas.update(); 
        } 
        EasyCanvas.destroy(); 
    };
      
    this.input = function(){ 
        world.center.x = EasyMouse.getX(); 
        world.center.y = EasyMouse.getY(); 
    };
      
    this.update = function(){ 
          
        world.update(1000.0 / EasyCanvas.actualFPS()); 
    };

      // need color html5 hooks here.
    var Color p = new Color(255,255,255,80); 
    this.render = function(Graphics2D g){ // g is a class object for displaying 
        g.setColor(Color.BLACK); 
        g.fillRect(0, 0, 1280, 720); 
  
        g.setColor(p); 
        for(Particle p : world.particles){ 
            g.fillRect((int)p.position.x, (int)p.position.y, 1, 1); 
        } 
          
        g.setColor(Color.RED); 
        g.fillRect((int)world.center.x, (int)world.center.y, 1, 1); 
        g.drawString("" + EasyCanvas.actualFPS(), 50, 50); 
    } 
  
} 