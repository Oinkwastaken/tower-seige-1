const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function setup() {
  createCanvas(1300,900);
  engine = Engine.create();
  world = engine.world;
  background=createSprite(650,450,1300,900)
  box1=new box(300,275,30,30)
  box2=new box(330,275,30,30)
  box3=new box(360,275,30,30)
  box4=new box(390,275,30,30)
  box5=new box(420,275,30,30)
  box6=new box(450,275,30,30)
  box7=new box(480,275,30,30)
  box8=new box(330,235,30,30)
  box9=new box(360,235,30,30)
  box10=new box(390,235,30,30)
  box11=new box(420,235,30,30)
  box12=new box(450,235,30,30)
  box13=new box(360,195,30,30)
  box14=new box(390,195,30,30)
  box15=new box(420,195,30,30)
  box16=new box(390,155,30,30)
  polygon =new box(50,200,40,40)
  ground1=new ground(390,285,210,20)
  slingshot=new Slingshot(this.polygon,{x:200,y:100})
}

function draw() {
  Engine.update(engine)
  rectMode(CENTER)
  drawSprites();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  Slingshot1.display();
  polygon.display();
  ground1.display();
}

function mouseDragged(){  
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slingshot.fly();
}