const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,stand1,stand2;
var polygon, slingshot;
var ball;
var score=0

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
 polygon=loadImage("polygon.png") 
  
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

     

    ground = new Ground(450,390,900,20);
    stand1=new Ground(390,300,250,10);
    stand2=new Ground(700,200,200,10);
//level 1
    box1=new Box(300,275,30,40);
    box2=new Box(330,275,30,40);
    box3=new Box(360,275,30,40);
    box4=new Box(390,275,30,40);
    box5=new Box(420,275,30,40);
    box6=new Box(450,275,30,40);
    box7=new Box(480,275,30,40);
//level2
    box8=new Box(330,235,30,40);
    box9=new Box(360,235,30,40);
    box10=new Box(390,235,30,40);
    box11=new Box(420,235,30,40);
    box12=new Box(450,235,30,40);
//level3 
    box13=new Box(360,195,30,40);
    box14=new Box(390,195,30,40);
    box15=new Box(420,195,30,40);
//  level4
  box16=new Box(390,155,30,40)

  //STAND 2
  //level 1
  
  box17=new Box (630,175,30,40)
  box18=new Box (660,175,30,40)
  box19=new Box (690,175,30,40)
  box20=new Box (720,175,30,40)
  box21=new Box (750,175,30,40)

  //level 2
  box22=new Box (660,125,30,40)
  box23=new Box (690,125,30,40)
  box24=new Box (720,125,30,40)
  //level 3
  box25=new Box (690,75,30,40)


  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingshot = new SlingShot(this.ball,{x:100, y:200});
    
}

function draw(){
    getBackground();

 ground.display(); 
 stand1.display();  
 stand2.display(); 
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 box10.display();
 box11.display();
 box12.display();
 box13.display();
 box14.display();
 box15.display();
 box16.display();
 box17.display();
 box18.display();
 box19.display();
 box20.display();
 box21.display();
 box22.display();
 box23.display();
 box24.display();
 box25.display();

 box1.score();
 box2.score();
 box3.score();
 box4.score();
 box5.score();
 box6.score();
 box7.score();
 box8.score();
 box9.score(); 
 box10.score();
 box11.score();
 box12.score();
 box13.score();
 box14.score();
 box15.score();
 box16.score();
 box17.score();
 box18.score();
 box19.score();
 box20.score();
 box21.score();
 box22.score();
 box23.score();
 box24.score();
 box25.score();

 
text ("SCORE:"+score,750,40,);

 imageMode (CENTER)
 image (polygon,ball.position.x,ball.position.y,40,40)
 slingshot.display();
}

function mouseDragged(){
        Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32)
{
    slingshot.attach(this.ball);
}
}



async function getBackground(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=18){
        background(rgb(176,224,230))
    }
    else{
        background(rgb(23,44,92))
    }


    console.log(backgroundImg);
}

