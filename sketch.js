const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1000,1000);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,920,70,70);
    box2 = new Box(770,770,70,70);
    ground = new Ground(500,height,1000,20);
    pig1= new Pig(520,500);
    log= new log(650,180,300,PI/2);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log.display();

}