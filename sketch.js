const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var engine, world;

var umbrella;

var thunder1, thunder2, thunder3, thunder4; 

var man, manAnimation;
var drops = [];

function preload(){
    thunder1 = loadImage("images/1.png");
    thunder2 = loadImage("images/2.png");
    thunder3 = loadImage("images/3.png");
    thunder4 = loadImage("images/4.png");
    manAnimation = loadAnimation("images/walking_8.png", "images/walking_7.png", "images/walking_6.png", "images/walking_5.png", "images/walking_4.png", "images/walking_3.png", "images/walking_2.png", "images/walking_1.png");
}

function setup(){
    //creating the canvas
    createCanvas(500, 800);

    engine = Engine.create();
    world = engine.world;

    man = createSprite(250, 610, 140, 380);
    man.addAnimation("walking", manAnimation);
    man.scale = 0.5;

    for(var i = 0; i < 100; i++){
        drops.push(new Rain(Math.round(random(0, 400)), Math.round(random(0, 400))));
    }

    umbrella = new Umbrella(260, 540, 90);

    Engine.run(engine);
}

function draw(){
    background("black");
    if(frameCount % 40 === 0 || frameCount % 44 === 0){
        var ran = Math.round(random(1, 4));
        imageMode(CENTER);
        switch(ran){
            case 1: image(thunder1, 250, 150, 400, 400);
                break;
            case 2: image(thunder2, 250, 150, 400, 400);
                break;
            case 3: image(thunder3, 250, 150, 400, 400);
                break;
            case 4: image(thunder4, 250, 150, 400, 400);
                break;
            default: image(thunder1, 250, 150, 400, 400);
                break;    
        }
    }
    for(var i = 0; i < 100; i++){
        drops[i].display();
        if(drops[i].body.position.y > 1000){
            Matter.Body.setPosition(drops[i].body, {x: Math.round(random(0, 500)), y: Math.round(random(0, 500))});
        }
    }
    console.log(drops.length);
    //umbrella.display();
    drawSprites();
        
    
    
}   

