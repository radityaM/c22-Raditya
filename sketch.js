const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,box,ball,ground;

function setup(){

  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var option={
    restitution : 0.8
  }

  box = Bodies.rectangle(250,150,30,50,option);
  World.add(world,box);

  var option2={
    restitution:0.8
  }

  ball=Bodies.circle(200,200,20,option2);
  World.add(world,ball);

  var option1={
    isStatic:true
  }

  ground=Bodies.rectangle(200,370,400,15,option1);
  World.add(world,ground);

}

function draw(){
  background(0);
  Engine.update(engine);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

  rectMode(CENTER);
  rect(box.position.x,box.position.y,30,50);

  rect(ground.position.x,ground.position.y,400,15);

}