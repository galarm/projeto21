
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bola;
var radius= 40
var chao

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var bola_options= {

	isStatic:false,
	restituition:0.3,
	friction:0,
	density:1.2

	
}

chao= new ground(width/2,670,width,20)
leftside= new ground (1100,600,20,120)
rightside= new ground (1400,600,20,120)

bola= Bodies.circle(260,100,radius/2, bola_options)
World.add(world,bola)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(bola.position.x, bola.position.y, radius, radius)
  
  
 chao.display()
 leftside.display()
 rightside.display()

 
  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(bola, bola.position,{x:85, y:-85})
	}


}

