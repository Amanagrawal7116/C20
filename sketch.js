
var mvrt,fdrt;

function setup() {
  createCanvas(800,400);
 mvrt = createSprite(400, 200, 50, 50);
 fdrt =createSprite(200, 200, 50, 50);

 mvrt.shapeColor = "green";
 fdrt.shapeColor = "green";
}

function draw() {
  background(255,255,255);

  mvrt.x = World.mouseX;
  mvrt.y = World.mouseY;

  if(mvrt.x-fdrt.x < mvrt.width/2+fdrt.width/2 && fdrt.x-mvrt.x < mvrt.width/2+fdrt.width/2 && mvrt.y-fdrt.y < mvrt.height/2+fdrt.height/2 && fdrt.y-mvrt.y < mvrt.height/2+fdrt.height/2 )
   { mvrt.shapeColor="red";
    fdrt.shapeColor="red"; } 

    else{ mvrt.shapeColor="green"; 
    fdrt.shapeColor="green"; }
  


  drawSprites();
}