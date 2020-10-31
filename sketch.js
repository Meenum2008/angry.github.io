const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box3,box4,box5;
var pig1,pig2;
var log1,log2,log5,log4;
var angB;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    pig1= new Pig(810,220);
    pig2=new Pig(810,280);
    log1= new Log(810,260,300,PI/2)
    log2=new Log(810,180,300,PI/2);
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3=new Box(700,240,70,70);
    box4=new Box(920,240,70,70);
    box5=new Box(810,150,70,70)
    log4=new Log(760,120,150,PI/7);
    log5=new Log(850,120,150,-PI/7);
    angB=new Bird(100,100);
    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    
    console.log(World.mouseY);
    console.log(World.mouseX);
    log1.display();
    log2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    log4.display();
    log5.display();
    pig1.display();
    pig2.display();
    angB.display();
    ground.display();
}