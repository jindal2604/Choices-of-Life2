const Engine = Matter.Engine;
const World= Matter.World;
const Mouse = Matter.Mouse;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;

var engine, world;
var backgroundImg
var play, playImg
var render 
var mConstraint;

var gameState = "0"
function preload() {
//loading the images
    backgroundImg = loadImage("images/background4.jpg");
    playImg = loadImage("images/play.png");
}


function setup(){
    var canvas = createCanvas(displayWidth, displayHeight);
    engine = Engine.create();
    world = engine.world;

    var canvasMouse = Mouse.create(canvas.elt);
    canvasMouse.pixelRatio = pixelDensity();
    console.log(canvasMouse);

    play = (displayWidth/2, displayHeight/2)
    play = Bodies.rectangle(displayWidth/2-150 ,displayHeight/2 -70 , 320, 250)
   
    World.add(world, play);
    console.log(play)


    var options = {
        mouse: canvasMouse
    }

   mConstraint = MouseConstraint.create(engine, options);
   World.add(world, mConstraint);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
//Creating the play button

    image(playImg, displayWidth/2-150 ,displayHeight/2 -70 , 320, 250);


    
    if(mConstraint.play){
        World.remove(world, play)

    }
   
}

