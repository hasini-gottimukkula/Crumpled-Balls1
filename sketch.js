
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100, 60, 10);

	leftDustbin = new dustbin(550, 630, 20, 10);
	bottomDustbin = new dustbin(611, 660, 100, 20);
	rightDustbin = new dustbin(675, 630, 20, 10);

	ground = new Ground(400, 685, 800, 20);


	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);

	paper.display();
	leftDustbin.display();
	rightDustbin.display();
	bottomDustbin.display();
	ground.display();
	drawSprites();


}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, { x: 85, y: -85 });
	}
}



