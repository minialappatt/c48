const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

var avatar, avatar_img, avatar_img2;
var scene;
var sofa, bookshelf, cabinet, lamp, tv, table;
var sofa_img, bookshelf_img, cabinet_img, lamp_img, tv_img, table_img;
var bg_img;
var edges;
var platform1, platform2, platform3;
var gameLife1, gameLife2, gameLife3;
var gameLife1_img, gameLife2_img, gameLife3_img;
var lava, lavaGroup;
var gameOver, gameOver_img, gameOverSound;
var restart, restartImg;
var livesGroup;
var victory, victory_img;

function preload(){
  avatar_img = loadImage("Images/Man_walking.png");
  avatar_img2 = loadImage("Images/Man_jumping.png");
  sofa_img = loadImage("Images/sofa_img.png");
  lamp_img = loadImage("Images/lamp_img.png");
  bookshelf_img = loadImage("Images/bookshelf_img.png");
  cabinet_img = loadImage("Images/cabinet_img.png");
  tv_img = loadImage("Images/tv_img.png");
  table_img = loadImage("Images/table_img.png");
  bg_img = loadImage("Images/lava_bg2.png");
  gameLife1_img = loadImage("Images/game life_img2.png");
  gameLife2_img = loadImage("Images/game life_img2.png");
  gameLife3_img = loadImage("Images/game life_img2.png");
  lava_img = loadImage("Images/lava blotch_img.png");
  gameOver_img = loadImage("Images/game over_img.png");
  gameOverSound = loadSound("gameOver sound.wav");
  restartImg = loadImage("Images/restartImg.png");
  victory_img = loadImage("Images/victory_img.jpg");
}

function setup() {
  createCanvas(displayWidth-20,  displayHeight-120);

  scene = createSprite(0,0,displayWidth,displayHeight);
  scene.addImage(bg_img);
  scene.scale = 3.4;
  scene.x = scene.width/2;

  engine = Engine.create();
  world = engine.world;

  avatar = createSprite(100,500,50,50);
  avatar.addImage(avatar_img);
  avatar.scale = 0.5;

  sofa = createSprite(300, 350, 50, 50);
  sofa.addImage(sofa_img);
  sofa.scale = 0.3;

  lamp = createSprite(650,290,50,50);
  lamp.addImage(lamp_img);
  lamp.scale = 0.5;

  bookshelf = createSprite(850,230,50,50);
  bookshelf.addImage(bookshelf_img);
  bookshelf.scale = 0.4;

  table = createSprite(450,250,50,50);
  table.addImage(table_img);
  table.scale = 0.5;

  tv = createSprite(475,500,50,50);
  tv.addImage(tv_img);
  tv.scale = 0.35;

  cabinet = createSprite(1000,400,50,50);
  cabinet.addImage(cabinet_img);
  cabinet.scale = 0.7;

  platform1 = createSprite(160,590,80,20);
  platform1.shapeColor = "blue";

  platform2 = createSprite(690,475,80,20);
  platform2.shapeColor = "blue";
  
  platform3 = createSprite(1100,280,80,20);
  platform3.shapeColor = "blue";

  gameLife1 = createSprite(1050,30,50,50);
  gameLife1.addImage(gameLife1_img);
  gameLife1.scale = 0.25;

  gameLife2 = createSprite(1120,30,50,50);
  gameLife2.addImage(gameLife2_img);
  gameLife2.scale = 0.25;

  gameLife3 = createSprite(1190,30,50,50);
  gameLife3.addImage(gameLife3_img);
  gameLife3.scale = 0.25;

  //sofa.debug = true;
  //bookshelf.debug = true;
  
  //avatar.debug = true;
  avatar.setCollider("rectangle",0,0,200,300);

  //cabinet.debug = true;
  cabinet.setCollider("rectangle",20,50,500,200);

  //table.debug = true;
  table.setCollider("circle",0,0,100);

  
  //tv.debug = true;
  tv.setCollider("circle",0,0,170);

  //lamp.debug = true;
  lamp.setCollider("circle",0,0,150);
  //avatar = new Avatar(100,500,50,50);

  gameOver = createSprite(displayWidth/2,displayHeight/2,50,50);
  gameOver.addImage(gameOver_img);
  gameOver.visible = false;

  lavaGroup = new Group();

  livesGroup = new Group();
  livesGroup.add(gameLife1, gameLife2, gameLife3);
}

function draw() {
  background(0); 
  //console.log("x : "+avatar.x);
  //console.log("y : "+avatar.y); 
  scene.velocityX = -4;

  if(scene.x<0){
    scene.x = scene.width/2;
  }
  
  if(gameState === PLAY){
    avatar.velocityX = 0;
    avatar.velocityY = 0;
  
    if(keyDown("space")){
      avatar.velocityY = -6;
      avatar.addImage(avatar_img2);
    }
  
    if(keyDown("RIGHT_ARROW")){
      avatar.velocityX = 6;
      avatar.velocityY = 0;
    }
    
    if(keyDown("LEFT_ARROW")){
      avatar.velocityX = -6;
      avatar.velocityY = 0;
    }
  
    if(avatar.isTouching(platform2)){
     avatar.velocityX = 0;
     avatar.velocityY = 0;
     avatar.addImage(avatar_img);
    }
  
    if(avatar.isTouching(platform3)){
      avatar.velocityX = 0;
      avatar.velocityY = 0;
      avatar.addImage(avatar_img);
     }
  
    if(avatar.isTouching(sofa)){
      avatar.velocityX = 0;
      avatar.velocityY = 0;
      avatar.addImage(avatar_img);
     }
  
    if(avatar.isTouching(lamp)){
      avatar.velocityX = 0;
      avatar.velocityY = 0;
      avatar.addImage(avatar_img);
     }
  
    if(avatar.isTouching(table)){
      avatar.velocityX = 0;
      avatar.velocityY = 0;
      avatar.addImage(avatar_img);
     }
  
    if(avatar.isTouching(bookshelf)){
      avatar.velocityX = 0;
      avatar.velocityY = 0;
      avatar.addImage(avatar_img);
     }
    
    if(avatar.isTouching(tv)){
      avatar.velocityX = 0;
      avatar.velocityY = 0;
      avatar.addImage(avatar_img);
     }
  
    if(avatar.isTouching(cabinet)){
      avatar.velocityX = 0;
      avatar.velocityY = 0;
      avatar.addImage(avatar_img);
     }
    avatar.velocityY = avatar.velocityY + 0.8;

    avatar.depth = avatar.depth + 1;
    spawnLava();
    reset();

    if(lavaGroup.isTouching(avatar)){
      livesGroup - 1;
      gameState = END;
    }
  }

  else if(gameState === END){
    gameOverSound.play();
    avatar.destroy();
    sofa.destroy();
    cabinet.destroy();
    lamp.destroy();
    bookshelf.destroy();
    table.destroy();
    tv.destroy();
    platform1.destroy();
    platform2.destroy();
    platform3.destroy();
    scene.destroy();
    lavaGroup.destroyEach(0);
    gameOver.visible = true;
  }

  //if(avatar.x === 298 || avatar.y === 350){
    //avatar.velocityX = 0;
    //avatar.velocityY = 0;
    //avatar.addImage(avatar_img);
    
  //}

  

  Engine.update(engine);

  //avatar.display();

  edges = createEdgeSprites();
  //avatar.collide(edges);

  avatar.collide(platform1);
  avatar.collide(platform2);
  avatar.collide(platform3);

  avatar.collide(sofa);
  avatar.collide(bookshelf);
  avatar.collide(cabinet);
  avatar.collide(table);
  avatar.collide(tv);
  avatar.collide(lamp);

  

  drawSprites();
  fill("white");
  textSize(30);
  stroke("yellow");
  strokeWeight(2);
  text("LAVA ESCAPE !!",displayWidth/2-100,50);

  fill("white");
  textSize(20);
  text("Avoid the lava blotches & complete the obstacle.",800,550);
}

function spawnLava(){
  if(frameCount%60 === 0){
    lava = createSprite(1000,100,20,20);
    lava.addImage(lava_img);
    lava.scale = 0.15;
    lava.velocityY = 7;
    lava.velocityX = -7;
    lava.x = Math.round(random(40,1500));
    lavaGroup.add(lava);
  }
}

function reset(){
  if(keyDown("space")){
    avatar.velocityY = -6;
    avatar.addImage(avatar_img2);
  }

  if(keyDown("RIGHT_ARROW")){
    avatar.velocityX = 6;
    avatar.velocityY = 0;
  }
  
  if(keyDown("LEFT_ARROW")){
    avatar.velocityX = -6;
    avatar.velocityY = 0;
  }
}