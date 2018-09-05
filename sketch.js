function setup() {
  createCanvas(2000,1000);
  background (204);
  angleMode(DEGREES);
  strokeCap(ROUND);
}

function draw(){
  strokeCap(ROUND);
  strokeJoin(ROUND);
  // put drawing code here
  fill(0);
  beginShape();
  //RIGHT SIDE
  vertex(100,400)
  vertex(350,600);
  vertex(250,999);
  //lEFT SIDE
  vertex(750,999);
  vertex(650,600);
  vertex(900,400);
  endShape();
  //HEAD
  ellipse(500,300,300,300);
  fill(255,51,51);
  ellipse(450,260,75,75);
  ellipse(550,260,75,75);
  //LEFT MOUTH
  fill(0);
  arc(200,500,150,150,170,90);
  //right MOUTH
  arc(800,500,150,150,90,10);
  //rings
  ellipse(200,200,100,100);
  ellipse(350,90,100,100);
  triangle(425,90,575,90,500,1);
  triangle(425,90,575,90,500,200);
  ellipse(650,80,100,100);
  ellipse(800,200,100,100);
  //zipper
  fill(255,51,51);
  rect(475,600,50,500);
}

//js stands for java script , set ups draw once while draw puts up 60 frames per second
