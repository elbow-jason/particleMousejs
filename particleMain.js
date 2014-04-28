import java.awt.Color; 
import java.awt.Graphics2D; 
  
import com.mangopearandapples.libraries.particlesystem.Particle; 
import com.mangopearandapples.libraries.particlesystem.ParticleWorld; 
import com.mangopearandapples.libraries.particlesystem.maths.Vec2f; 
import com.mangopearapples.easycanvas.EasyCanvas; 
import com.mangopearapples.easycanvas.input.EasyMouse; 
  
  
public class ParticleSystemTest { 
  
    static ParticleWorld world; 
      
    public static void main(String[] args) { 
        EasyCanvas.create(1280, 720); 
        EasyCanvas.setFPS(60); 
          
        world = new ParticleWorld(1000, new Vec2f((1280 / 2), 10000000)); 
        world.newEmitter(new Vec2f((1280 / 2), (720 / 2)), 0, 1000, 1.0, 3.0f); 
          
        long time = System.nanoTime(); 
        float delta = 0; 
        while(!EasyCanvas.isCloseRequested()){ 
            input(); 
            update(delta / 1000000); 
            render(EasyCanvas.getGraphics()); 
            EasyCanvas.update(); 
            delta = System.nanoTime() - time; 
            time = System.nanoTime(); 
        } 
        EasyCanvas.destroy(); 
    } 
      
    public static void input(){ 
//      world.center.x = EasyMouse.getX(); 
//      world.center.y = EasyMouse.getY(); 
    } 
      
    public static void update(float dt){ 
          
        world.update(dt); 
    } 
      
    static Color p = new Color(255,255,255,80); 
    public static void render(Graphics2D g){ 
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