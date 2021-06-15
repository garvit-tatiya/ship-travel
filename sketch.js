//creating ship
var sea;
var ship, ship_moving, edges;



function preload(){
ship_moving = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);

  sea = createSprite(200,200,50,50);
  sea.addImage(seaImage);

  ship = createSprite(100,220,20,50)
  ship.addAnimation("moving", ship_moving);
}

function draw() {
  background("blue");

 ship.scale=0.2;
 sea.scale=0.2;
 sea.velocityX=-5;

 if(sea.x<0){
  sea.x = sea.width/10;
}

  drawSprites();
}