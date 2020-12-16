var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

Object1 = createSprite(600,100,80,30);
Object1.velocityY = +5;
Object1.shapeColor = "yellow";

Object2 = createSprite(600,800,30,80);
Object2.velocityY = -5;
Object2.shapeColor = "lime";

}

function draw() {
  background(0,0,0); 
  
  bounceOff(Object1,Object2);

  isTouching(movingRect,fixedRect);

  drawSprites();
}

