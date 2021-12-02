var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1;
var players;
var treasure;
var treasureGroup;
var treasure1_img, treasure2_img, treasure3_img, treasure4_img;
var player_img;


function preload(){
  back_img = loadImage("images/aladdin_cave2.jpg");
  player_img = loadImage("TreasureChest.png");
  treasure1_img = loadImage("images/cash1.png");
  treasure2_img = loadImage("images/diamonds.png");
  treasure3_img = loadImage("images/jwell.png");
  treasure4_img = loadImage("images/sword.png");
  treasureGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 1) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    game.end();
   }
}