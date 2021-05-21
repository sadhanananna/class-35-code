var hypnoticball,hypnoticBallPosition;
var position;
var database;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    var hypnoticBallPosition=database.ref('ball/position')
    hypnoticBallPosition.on("value",readPosition,showError)
    hypnoticball = createSprite(250,250,10,10);
    hypnoticball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function showError(){
    console.log("Error in writing to the database")
}

function readPosition(data){
position=data.val()
hypnoticball.x=position.x;
hypnoticball.y=position.y
}

function writePosition(x,y){
database.ref('ball/position').set({
   x:position.x+x,
   y:position.y+y 
})
}