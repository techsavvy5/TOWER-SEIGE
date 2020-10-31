const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var box1,box,box2,box3,box4;
var box6,box7,box8;
var boxx,boxx1,boxx2,boxx3,boxx4;
var bird;
var constrainedLog;
function setup() {
  var canvas=createCanvas(1200,500);
  engine = Engine.create();
  world = engine.world;

  constrainedLog= new Log(230,180,80,PI/2);
  
  ground= new Ground(900,470,4000,20);
  ground.shapeColor="black";

  box1=new Box(800,400,70,70);
  box=new Box(820,400,70,70);
  box2=new Box(840,400,70,70);
  box3=new Box(810,400,70,70);
  box4=new Box(830,400,70,70);
  boxx=new Box(810,380,70,70);
  boxx1=new Box(780,380,70,70);
  boxx2=new Box(800,380,70,70);
  boxx3=new Box(840,380,70,70);
  boxx4=new Box(850,380,70,70);
  box6=new Box(810,350,70,70);
  box7=new Box(820,350,70,70);
  box8=new Box(830,350,70,70);

  bird = new Bird(100,100);

  var options = { 
    bodyA:bird.body,
    bodyB:constrainedLog.body,
    stiffness:0.04,
    length:10
   }

    var chain=Constraint.create(options);
    World.add(world,chain);
}
 
function draw() {
  background("lightBlue"); 
  Engine.update(engine); 
  ground.display();
  box1.display();
  box.display();
 box2.display();
 box3.display();
 box4.display();
 box6.display();
 box7.display();
 box8.display();
 boxx.display();
 boxx2.display();
 boxx3.display();
 boxx4.display();
 constrainedLog.display();
 bird.display();
 strokeWeight(3);
 line(bird.body.position.x,bird.body.position.y,constrainedLog.body.position.x,constrainedLog.body.position.y);
}
