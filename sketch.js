const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg
var play, playImg
var render 

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

    
}

function draw(){
    background(backgroundImg);

//Creating the play button

    play = (displayWidth/2, displayHeight/2)
    image(playImg, displayWidth/2-150 ,displayHeight/2 -70 , 320, 250)
    World.add(world, play);

    if(mousePressed(play)){
        gameState = "1"
        play.visible = false;

    }
    
    Engine.update(engine);
   
}

//Mouse pressed function creation

function mousePressed(){
    const mouse = Matter.Mouse.create(render.canvas)
    const mouseConstraint = matter.MouseConstraint.create(engine, {mouse:mouse,
        constraint: {
            render: {visible: false}
        }});

        render.mouse = mouse;

        Matter.World.add(engine.world, [boxA, boxB, ground, mouseConstraint]);
}