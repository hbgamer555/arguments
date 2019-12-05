var moving,fixed,object1,object2,object3,object4;
function setup() {
  createCanvas(800,400);
 fixed= createSprite(400, 200, 50, 50);
 moving=createSprite(700,200,50,50);
 object1=createSprite(100,200,50,50);
 object2=createSprite(200,200,50,50);
 object3=createSprite(300,200,50,50);
 object4=createSprite(500,200,50,50);
 
 moving.shapeColor=("blue");
 fixed.shapeColor=("yellow");
 
}

function draw() {
  background(255,255,255);  
moving.x=mouseX;
  moving.y=mouseY;
  if (isTouching(moving,object1)){
  moving.shapeColor=("red");
  }
else {
  moving.shapeColor=("green");
  object1.shapeColor=("green");
}
if (isTouching(moving,object2)){
  moving.shapeColor=("black");
}
  drawSprites();
}
function isTouching(gameobject1,gameobject2){
  if (gameobject1.x-gameobject2.x<gameobject1.width/2+gameobject2.width/2
    &&gameobject2.x-gameobject1.x<gameobject1.width/2+gameobject2.width/2
   && gameobject1.y-gameobject2.y<gameobject1.height/2+gameobject2.height/2
   &&gameobject2.y-gameobject1.y<gameobject1.height/2+gameobject2.height/2)
  {
    return true;




  }
else{
  return false;
}
 

}