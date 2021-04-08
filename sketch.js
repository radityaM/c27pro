const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObj1,bobObj2,bobObj3,bobObj4,bobObj5;
var line1,line2,line3,line4,line5;
var roof;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObj1=new Bob(1000,100,30);
	bobObj2=new Bob(450,600,30);
	bobObj3=new Bob(400,600,30);
	bobObj4=new Bob(350,600,30);
	bobObj5=new Bob(300,600,30);
	line1=new String(bobObj1.body,{x:500,y:200});
	line2=new String(bobObj2.body,{x:450,y:200});
	line3=new String(bobObj3.body,{x:400,y:200});
	line4=new String(bobObj4.body,{x:350,y:200});
	line5=new String(bobObj5.body,{x:300,y:200});
	roof=new Roof(400,200,350,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(170);

  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();
  line1.display();
  line2.display();
  line3.display();
  line4.display();
  line5.display();
  roof.display();
 
}



function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObj1.body,bobObj1.body.position,{x:-50,y:-45});
	}
}