var purpleShep

function setup(){
    createCanvas(500,500);
    purpleShep = createSprite(100, 200, 50, 50);
    purpleShep.shapeColor = "purple";
}

function draw(){
    background("lightBlue");
    
    if(keyDown("UP_ARROW")){
        changePosition(0, -1);
    } else if(keyDown("DOWN_ARROW")){
        changePosition(0, 1);
    } else if(keyDown("LEFT_ARROW")){
        changePosition(-1, 0);
    } else if(keyDown("RIGHT_ARROW")){
        changePosition(1, 0);
    }

    drawSprites();
}

function changePosition(x, y){
    purpleShep.x = purpleShep.x + x;
    purpleShep.y = purpleShep.y + y; 
}