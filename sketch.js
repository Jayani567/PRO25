
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.render;
var DustbinObj,PaperObj,GroundObj;
var object;

var engine,world;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	PaperObj= new paper(200,450,70);
	DustbinObj= new dustbin(1200,650)
	GroundObj=new ground(width/2,670,width,20);


	var render= Render.create({
		element: document.body,
		engine: engine,
		options: {
			width:1600,
			height:700,
			wireframes:false
		}
	});

	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  

  PaperObj.display();
  GroundObj.display();
  DustbinObj.display();
   
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(Paper.body,Paper.body.position,{x:130,y:-145});

	}
}

