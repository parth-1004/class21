var fixedRect, movingRect;
var gameobject2,gameobject1;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityY=-5;
  movingRect = createSprite(600,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY=5;
  gameobject1=createSprite(100,100,50,50);
  gameobject1.shapeColor="green";
  gameobject2=createSprite(200,100,50,50);
  gameobject2.shapeColor="green";

}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
bounceOff(movingRect,fixedRect);
if( isTouching(movingRect,gameobject2)===true){
  movingRect.shapeColor = "blue";
  gameobject2.shapeColor = "blue";
}
else {
  movingRect.shapeColor = "green";
  gameobject2.shapeColor = "green";
}
  drawSprites();
}



