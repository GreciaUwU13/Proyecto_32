//hola mastra buenas tardes, dicen que lo que bien se aprende no se olvida pero a mi se me olvidó como generar
//las particulas :(, revise en proyectos pasados e intente acomodar algún fragmento de código pero creo que no 
//funcionó, le debo una gran disculpa maestra 
var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 

//matrices
var balls = [];
var plinkos = [];
var divisions =[];
var particle =[];
var ball;

//estados del juego
var PLAY = 1;
var END = 0;
var gameState = PLAY;

var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) { //cada 80 pixeles se crea una división
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375));
    }
   /* for (var g = 0; g < balls.length; g++) { //genera los balones
      balls[g].display();  }
   for (var g = 5; g <= width; g=g+20){  //intento de generar las particulas
    particle.push(new Particle(g, 10));
  }*/
}
 
function draw() {
  background("lightblue");
  textSize(35)
  text("Puntuación : "+score,20,40);
  fill("black");

  textSize(35)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);
  Engine.update(engine);
  ground.display();
  mousePressed();

  
  for (var g = 0; g < balls.length; g++) { //genera los balones
    balls[g].display();  } 

  for (var m = 0; g < particle.length; m++) { //genera las particulas
    particle[m].display();  }
 
  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  } 

    if(ball!=null){
       ball.display();
       if(ball.body.position.y>760){
         if(ball.body.position.x<300){  
           score = score+500;  
           ball = null;  
           if(count>=5) gameState = "end";
    }}}
    if(ball!=null){
      ball.display();
      if(ball.body.position.y>760){
        if(ball.body.position.x>601 && ball.body.position.x< 900){  
          score = score+200;  
          ball = null;  
          if(count>=5) gameState = "end";
   }}}
   if(ball!=null){
    ball.display();
    if(ball.body.position.y>760){
      if(ball.body.position.x>301 && ball.body.position.x<600){  
        score = score+100;  
        ball = null;  
        if(count>=5) gameState = "end";
 }}}

   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(ball.body,{x:200, y:50});
  }
}

function mousePressed()
{
  if(gameState =="end"){
    count++;
  ball=new Ball(mouseX, 10, 10, 10); 
  
  textsize(100);
  text("GameOver", 150, 250);
}}

