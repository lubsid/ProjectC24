
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj, paper1,ground1;	
var world,boxPosition;


function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	ground1 = Bodies.rectangle(width/2, height-10, width, 10 , {isStatic:true} );
 	World.add(world, ground1);

 	boxPosition=width/2-100
 	boxY=height-50;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxrightSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxrightSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);

	var option1={
		restitution:0.3,
		friction:0.5,
		density:1.2
	}
	paper1=Bodies.circle(height/2, 200, 20, option1)
	World.add(world, paper1);
	
	

	// Online Code
	//dustbinObj=new dustbin(1200,650);
	//paperObject=new paper(200,450,40);
	//groundObject=new ground(width/2,670,width,20);
	//Create a Ground
	

	//var render = Render.create({
	//  element: document.body,
	 // engine: engine,
	 // options: {
	 //   width: 1200,
	 //   height: 700,
	 //   wireframes: false
	 // }
	//});

	//Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
	background(0);
Engine.update(engine);
  //rectMode(CENTER);
  

  fill(255,0,255)
  ellipseMode(RADIUS);
  ellipse(paper1.position.x,paper1.position.y, 20,20);
 

  //dustbinObj.display();
  //paperObject.display();
  //groundObject.display();
  
 
  drawSprites();
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:150,y:-200});
    
  	}
}

 


function keyPressed() {

	
	if (keyCode === LEFT_ARROW) {
  
		boxleftSprite.x=boxleftSprite.x-20;  
		boxrightSprite.x=boxrightSprite.x-20;
		boxBase.x=boxBase.x-20;
	 // translation={x:-20,y:0}
	  //Matter.Body.translate(boxrightSprite, translation)
	  //Matter.Body.translate(boxBottomSprite, translation)
	  
  
	} else if (keyCode === RIGHT_ARROW) {
		boxleftSprite.x=boxleftSprite.x+20;  
		boxrightSprite.x=boxrightSprite.x+20;
		boxBase.x=boxBase.x+20;
	}
  }
	
  
  





