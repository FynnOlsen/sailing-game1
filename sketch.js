
var score = 0;

//initiate Game STATEs
var PLAY = 1;
var END = 0;
var gameState = PLAY;

var gameOver,restart;
var gameoverImg, restartImg;

var checkPoint, jumpSound;

var bg, player, ObstaclesGroup,gameOver;
var gameState = "play"; 


function preload(){
   
  playerImage = loadImage("boat1.png");
  bgImage = loadImage("oceanBackground.png")
  
}

function setup() {
  createCanvas(600, 200);
 
bg = createSprite(600,400,400,400);
bg.addImage(bgImage);
bg.scale = 3.5;
bg.velocityY = 1.5;

player = createSprite(200, 200);
player.addImage(playerImage);
player.scale = 0.5;

//set collision radius for the trex
player.setCollider("rectangle",0,0,100,220);


ObstaclesGroup = createGroup();
 
gameOver = createSprite(200,50);
//gameOver.setAnimation("GameOver");
gameOver.visible = false;
}

function draw() {
  background("white");
  
   if(gameState === "play"){
     
   spawnObstacles();
  
   if (keyDown(RIGHT_ARROW)){
    player.x =player.x +2;
  }
  
  if (keyDown(LEFT_ARROW)){
    player.x =player.x -2;
  }
   
  if (keyDown(UP_ARROW)) {
    player.y =player.y -2;
  }
  
  if (keyDown(DOWN_ARROW)){
    player.y = player.y +2;
  }
  
  if (bg.y>300){
    bg.y = 200;
  }
   

   
   if (ObstaclesGroup.isTouching(player)){
   
   gameState = "end";
   
 }
 
   }
   
   
    else if(gameState === "end"){
     
     bg.velocityY = 0;
     gameOver.visible = true;
   }
 
  drawSprites();
  
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600,120,40,10);
    cloud.y = Math.round(random(80,120));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 200;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    cloudsGroup.add(cloud);
  }
  
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -4;
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      case 6: obstacle.addImage(obstacle6);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}