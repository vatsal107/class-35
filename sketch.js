var database,canvas;
var gameState=0;
var playerCount;
var form,game,player;



function setup(){
  canvas=createCanvas(400,400);
  database=firebase.database();
  game=new Game();
  game.start();
}

function draw(){
  
  
}

