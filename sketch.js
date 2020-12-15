var ball;
var lball;
var database;
var position;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database=firebase.database();
    //ref refers to the location in database   .ref()
    lball=database.ref('ball/positions');
    //read the values continously from the database   .on()
    lball.on("value" ,readPosition);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-4,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(4,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-4);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+4);
    }
    drawSprites();
}

function writePosition(x,y){
    //writing the values in to the database  .set()
   database.ref('ball/positions').set({
     'x': position.x+ x,
     'y': position.y+ y
   })
}
function  readPosition(data) {
   position=data.val();//var position={x:200,y:200}
    ball.x=position.x;  //=
    ball.y=position.y;
}