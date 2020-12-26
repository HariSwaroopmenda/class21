var b1,b2;

function setup() {
  createCanvas(800,400);
  b1=createSprite(400, 200, 50, 50);
  b2=createSprite(100, 200, 50, 80);
  b2.shapeColor="red";
  b1.shapeColor="red";
  b1.debug=true; 
  b3=createSprite(300,300);

  b2.debug=true; 


}

function draw() {
  background("green");  
  b2.x=World.mouseX
  b2.y=World.mouseY
if(isTouching(b3,b2)){
  b3.shapeColor="blue";
  b2.shapeColor="white";
}
else{
  b2.shapeColor="red";
  b3.shapeColor="red";


}  
 

  
  
  drawSprites();
}












