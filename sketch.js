 var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

  var mySnow = []
  var index= 0
  var Snowflake
  var bg1

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
 
}

function preload(){
 bg1=loadImage("snow1.jpg")
}
function draw() {
  background(bg1);  
Engine.update(engine)
  
  if(frameCount%50===0 || frameCount%23===0){
  
    index= index+1
    Snowflake=new Snow(random(10,400),10,30)
    
    mySnow[index]= Snowflake
    index = index + 1

    console.log(Snowflake)
  }
  
  for(var i=0; i<mySnow.length; i++)
  {
    if(mySnow[i])
     mySnow[i].display()
  }

  
}