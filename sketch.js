var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var database; 
var distance=0; 

var hurdles; 

var form, player, game; 

var players, player1, player2, player3, player4;
var track, player1Img, player2Img, player3Img, player4Img, ground;

function preload(){ 
  ground= loadImage("images/ground.png");
  track= loadImage("images/track2.png"); 
  player1Img= loadImage("images/Runner1.png");
  player2Img= loadImage("images/Runner2.png"); 
  player3Img= loadImage("images/Runner3.png"); 
  player4Img= loadImage("images/Runner4.png"); 
 
}

function setup(){
  canvas = createCanvas(displayWidth, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){ 
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  } 
}
