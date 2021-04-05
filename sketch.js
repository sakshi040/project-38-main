var canvas;
var gameState=0;
var playerCount;
var database;
var form;
var game;
var player;
var allPlayers;
var car1;
var car2;
var car3;
var car4;
var cars;
var blackImage;
var blueImage;
var pinkImage;
var redImage;
var track;

function preload(){
blackImage=loadImage("black.png")
blueImage=loadImage("blue.png")
pinkImage=loadImage("pink.png")
redImage=loadImage("red.png")
track=loadImage("track.png")

}

function setup(){
    canvas=createCanvas(displayWidth-20,displayHeight-30)
    database=firebase.database()
    game=new Game()
    game.getState();
    game.start()
}

function draw(){
    background(225)
    if(playerCount===4){
game.update(1)
    }
    if(gameState===1){
clear();
game.play()
    }
    
    
}