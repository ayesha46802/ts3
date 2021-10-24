class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.4,
        
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visiblity=255;
        World.add(world, this.body);
      }

      score(){
        if (this.visiblity<0 && this.visiblity>-105){
          score=score+1
      
        }
      }

      display(){
        
        if (this.body .speed<3){

          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0, 0, this.width, this.height);
          pop();
        }
        else{
      World.remove(world, this.body);
      push();
      tint (255,this.visiblity);
     this.visiblity=this.visiblity-5
     pop();
        }

      
      }
}
