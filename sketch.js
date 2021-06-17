var ball;
var database;

function setup(){
    createCanvas(500,500);

    database = firebase.database();
    console.log(database)//database.ref()
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    database.ref("ball/position").on("value",readfunction,showError);
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

function readfunction(data){
    rposition=data.val();
    ball.x = rposition.x;//100
    ball.y = rposition.y;
}

function writePosition(x,y){
    database.ref("ball/position").set({
        x:ball.x+x,
        y:ball.y+y
    })
}

function showError(){
    console.log("error");
}