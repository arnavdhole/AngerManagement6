var ground, player1, bob, npc1, npc2, npc3, truck, bucket, bucket2;
var gameState = 0;
var keyPressed =0;

var block1, block2, block3, block4, block5, block6, block7, block8, block9,
disappearingBlock1, disappearingBlock2, movingblock3, movingblock1, movingblock2, spikesL, spikesR, spikes2;
var ib1, ib2;

var player1Image, worriedPlayer1, bobImage, angryBob, npcImage, npc2Image, bucketImage, spikesImage, groundImage, blockImage;

function preload(){

player1Image = loadImage("player1.png");
worriedPlayer1 = loadImage("worriedPlayer1.png");

bobImage = loadImage("bob1.png");
angryBob = loadImage("angryBob1.png");

bucketImage = loadImage("bucket.png");

spikesImage = loadImage("spikes1.png");

groundImage = loadImage("ground1.png");

npcImage = loadImage("npc.png");

npc2Image = loadImage("npc2.png");

}

function setup() {
  createCanvas(1200,600);
  
  ground = createSprite(600, 700, 1200, 400);
  ground.shapeColor = "green";
  //ground.addImage(groundImage);
  player1 = createSprite(50, 460, 75, 75);
  player1.addImage(player1Image);
  player1.shapeColor = "yellow";
  player1.scale = 0.74;
  bob = createSprite(190, 460, 75, 75);
  bob.shapeColor = "red";
  bob.addImage(bobImage);
  bob.scale = 0.2;
  npc1 = createSprite(1300, 460, 75, 75);
  npc1.shapeColor = "blue";
  npc1.addImage(npcImage);
  npc1.scale = 0.3;
  npc2 = createSprite(1100, 460, 75, 75);
  npc2.visible = false;
  npc2.shapeColor = "purple";
  //npc2.addImage(npc2Image);

  block1 = createSprite(250, 375, 100, 10);
  block1.visible=false;
  block2 = createSprite(450, 290, 100, 10);
  block2.visible = false;
  movingblock1 = createSprite(650, 215, 100, 10);
  movingblock1.visible = false;
  movingblock1.velocityX = -3;
  block3 = createSprite(850, 130, 100, 10);
  block3.visible = false;
  bucket = createSprite(850, 105, 25, 50);
  bucket.visible = false;
  bucket.addImage(bucketImage);
  bucket.scale = 0.15;
  bucket2 = createSprite(60, 70, 25, 50);
  bucket2.visible = false;
  bucket2.addImage(bucketImage);
  bucket2.scale = 0.15;
  spikesL = createSprite(250, 490, 400, 10);
  spikesL.visible = false;
  spikesL.addImage(spikesImage);
  spikesL.scale = 0.1;
  spikesR = createSprite(950, 490, 400, 10);
  spikesR.visible = false;
  spikesR.addImage(spikesImage);
  spikesR.scale = 0.1;
  /*ib1 = createSprite(450, 215, 10, 10);
  ib1.visible = true;
  ib2 = createSprite(850, 215, 10, 10);
  ib2.visible = true;*/

  block4 = createSprite(60, 100, 100, 10);
  block4.visible = false;
  block5 = createSprite(250, 375, 100, 10);
  block5.visible = false;
  movingblock3 = createSprite(420, 210, 100, 10);
  movingblock3.visible = false;
  block6 = createSprite(250, 150, 100, 10);
  block6.visible = false;
  block7 = createSprite(600, 150, 100, 10);
  block7.visible = false;
  block8 = createSprite(710, 210, 100, 10);
  block8.visible = false;
  block9 = createSprite(820, 150, 100, 10);
  block9.visible = false;
  disappearingBlock2 = createSprite(1000, 275, 100, 10);
  disappearingBlock2.visible = false;

}

     
function draw() {
  background(255,255,255); 
bob.velocityX =0;
npc1.velocityX=0;
if(movingblock1.x<0){
  movingblock1.velocityX = 3;
}
if(movingblock1.x > 1200){
  movingblock1.velocityX = -3;
}
  if(gameState === 0){
 
    console.log(gameState);
    
    if(keyDown("space") && keyPressed ===0){
      text("Let's get ice-cream", 50, 420);
      keyPressed =1;
    }
    if(keyDown("space") && keyPressed ===1){
        
      text("Yes", 180, 400);
     
      keyPressed = 2;
    }
    if(keyDown("space") && keyPressed ===2){
           
      gameState = 1;
      keyPressed = 3;
    }
    /*if(keyDown("space") && keyPressed ===0){
      text("Let's get ice-cream", 50, 420);
      keyPressed =1;
      if(keyDown("space") && keyPressed ===1){
        
         text("Yes", 180, 400);
        
         keyPressed = 2;
         if(keyDown("space") && keyPressed ===2){
           
           gameState = 1;
           keyPressed = 3;
         }
       }
       
    }*/

    
  }

  if(gameState === 1){
   
  
    player1.velocityX = 4;
    bob.velocityX = 4;

    npc1.velocityX = -4;

    
    if(bob.isTouching(npc1)){
     // console.log(bob.x);
      //console.log(npc1.x);
   /*   bob.velocityX = -4;
      npc1.velocityX = 4;*/
      player1.velocityX = 0;
    /*  bob.velocityX =0;
       npc1.velocityX=0*/
       bob.x = bob.x -30;
       npc1.x = npc1.x + 30;
     
      
      gameState =2;
      
    }
   
  }
  if(gameState ===2){
    text("Watch where you are going!",660,400);
    //console.log(gameState)
    bob.addImage(angryBob);
    

    if(keyDown("space") && keyPressed ===3){
      text("What did you say to me?!",640,350);
      gameState = 3;
      keyPressed = 4;
    }
  }

  if(gameState === 3){
    /*player1.x = 50;
    player1.y = 460;

    bob.x = 1150;
    bob.y = 460;*/

    npc1.visible = false;

    bob.scale = 0.15;
    ;
   /*if(movingblock1.x > ib1.x && movingblock1.x < ib2.x){
     movingblock1.bounceOff(ib1);
    movingblock1.bounceOff(ib2);
   }*/
    

    block1.visible = true;
    block2.visible = true;
    movingblock1.visible = true;
    block3.visible = true;
    bucket.visible = true; 
    spikesL.visible = true;
    spikesR.visible = true;


    if(keyDown("UP_ARROW")){
      player1.velocityY = -12;
    }
    if(keyDown("LEFT_ARROW")){
      player1.velocityX = -4;
    }
    if(keyDown("RIGHT_ARROW")){
      player1.velocityX = 4;
    }
    
    player1.velocityY = player1.velocityY + 0.8;
    player1.collide(ground);

    if(player1.isTouching(bucket)){
      bucket.x = player1.x +20;
      bucket.y = player1.y;
    }

    if(player1.isTouching(bob) && bucket.isTouching(bob)){
      gameState = 4;
    }
  }

  if(gameState === 4){
   /* player1.x = 50;
    player1.y = 460;

    bob.x = 190;
    bob.y = 460;*/
    player1.collide(ground);
    block1.destroy();
    block2.destroy();
    block3.destroy();
    movingblock1.destroy();
    spikesL.destroy();
    spikesR.destroy();
    bucket.destroy();

    bob.addImage(bobImage);
    bob.scale = 0.2;

    npc2.visible = true;

    bob.velocityX = 4;
    player1.velocityX = 4;

    if(bob.x === 900){
      bob.velocityX = 0;
    }
    if(player1.x >= 800){
      player1.velocityX = 0;
    }

    if(keyDown("space") && keyPressed === 4){
      text("Haha, are you Bob, the cube with anger issues?", 900, 390);
      keyPressed = 5;
    }
    if(keyDown("space") && keyPressed === 5){
      text("Did you laugh at me?!!!", 800, 370);
      keyPressed = 6;
      //bob.addImage(angryBob);
      //player1.addImage(worriedPlayer1);
      gameState = 5;
    }
  }

  if(gameState === 5){
    
    player1.x = 50;
    player1.y = 460;

    bob.x = 1150;
    bob.y = 460;

    npc2.visible = false;

    block4.visible = true;
    block5.visible = true;
    block6.visible = true;
    block7.visible = true;
    block8.visible = true;
    block9.visible = true;
    movingblock3.visible = true;
    disappearingBlock2.visible = true;
    bucket2.visible = true;
  }

  drawSprites();
}