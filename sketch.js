var score = 0;
var jet, ufo, bullet, backBoard;

var jetImg,ufoImg,bulletImg,blastImg,backBoardImg;

var ufoGroup, bulletGroup;

var life = 3;
var score = 0;
var gamestate = 1;

function preload(){
  jetImg = loadImage("jet.png");
  blastImg = loadImage("blast.png");
  bulletImg = loadImage("bullet1.png");
  ufoImg = loadImage("ufo.png");
  backBoardImg = loadImage("back.jpg");
}
function setup(){
  createCanvas(800,800);

  backBoard = createSprite(50, width/2, 100,height);
  backBoard.addImage(backBoardImg);

  jet = createSprite(100, height/2, 50,50);
  jet.addImage(jetImg);
  jet.scale=0.2;

  bulletGroup = createGroup();
  ufoGroup = createGroup();

  heading = createElement("h1");
  scoreboard = createElement("h1");
}
function draw(){
  drawSprites();
}