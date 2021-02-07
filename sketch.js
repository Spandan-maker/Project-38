var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var car1, car2, car3, car4, cars;
var carImage1, carImage2, carImage3, carImage4

var form, player, game;

function preload(){
  carImage1 = loadImage("Car1.png");
  carImage2 = loadImage("Car2.png");
  carImage3 = loadImage("Car3.png");
  carImage4 = loadImage("Car4.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);

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
}
