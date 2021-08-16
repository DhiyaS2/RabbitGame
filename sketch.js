var garden,rabbit;
var gardenImg,rabbitImg;
var apple, leaf, orangeL, redL;
var appleImg, leafImg, orangeImg, redImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage("garden", gardenImg);


//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage("rabbit", rabbitImg);
}


function draw() {
  background(0);
rabbit.x = mouseX

  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  if (World.frameCount % 100 === 0) {
   var ran = Math.round(random(1,4))
   switch(ran) {
    case 1: apple();
    break;
    case 2: leaf();
    break;
    case 3: redL();
    break;
    case 4: orangeL();
    break;
    default: break; 

  }
  }

  drawSprites();
  
}


function apple(){
  var rand = Math.round(50, 350);
  var apple = createSprite(rand, 40, 10, 10);
  apple.addImage(appleImg);
  apple.velocityY = 3;
  apple.scale=0.07;
}

function orangeL(){
  var rand = Math.round(50, 350);
  var orangeL = createSprite(rand, 40, 10, 10);
  orangeL.addImage(orangeImg);
  orangeL.velocityY =3;
  orangeL.scale=0.07;
}

function redL(){
  var rand = Math.round(50, 350);
  var redL = createSprite(rand, 40, 10, 10);
  redL.addImage(redImg);
  redL.velocityY = 3;
  redL.scale=0.07;
}

function leaf(){
  var rand = Math.round(50, 350);
  var leaf = createSprite(rand, 40, 10, 10);
  leaf.addImage(leafImg);
  leaf.velocityY = 3;
  leaf.scale=0.07;
}