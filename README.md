# MyCanvas

 
  ribbon2 = createSprite(750,35,1500,70);
 ribbon2.shapeColor=(0);

 ribbon  = createSprite(50,350,150,900);
 ribbon.shapeColor=(255,255,55);

 


 button1 = createButton('R');
 button1.size(50,50);
 button1.position(75,73);
 button1.mousePressed(()=>{
  value = "red";
});


 button2 = createButton('O');
 button2.size(50,50);
 button2.position(75,133);
 button2.mousePressed(()=>{
  value = "orange";
});
 
 button3 = createButton('Y');
 button3.size(50,50);
 button3.position(75,193);
 button3.mousePressed(()=>{
  value = "yellow";
});

 button4 = createButton('G');
 button4.size(50,50);
 button4.position(75,253);
 button4.mousePressed(()=>{
  value = "green";
});


 button5 = createButton('B');
 button5.size(50,50);
 button5.position(75,313);
 button5.mousePressed(()=>{
  value = "blue";
});


 button6 = createButton('V');
 button6.size(50,50);
 button6.position(75,373);
 button6.mousePressed(()=>{
  value = "purple";
});

 
 size1 = createButton("");
 size1.size(22,22);
 size1.position(87,500);
 size1.mousePressed(()=>{
   value2 = 5;
 })

 
 size2 = createButton("");
 size2.size(30,30);
 size2.position(85,535);
 size2.mousePressed(()=>{
   value2 = 15;
 })

 
 size3 = createButton("");
 size3.size(40,40);
 size3.position(80,575);
 size3.mousePressed(()=>{
   value2 = 25;
 })

 
 size4 = createButton("");
 size4.size(48,48);
 size4.position(77,625);
 size4.mousePressed(()=>{
   value2 = 40;
 })

 eraser = createButton("");
 eraser.size(40,40);
 eraser.position(77,735);
 eraser.mousePressed(()=>{
   value = 0;
 })

 color1 = createSprite(55,100,45,45);
 color1.shapeColor=("red");
 color2 = createSprite(55,160,45,45);
 color2.shapeColor=("orange");
 color3 = createSprite(55,220,45,45);
 color3.shapeColor=("yellow");
 color4 = createSprite(55,280,45,45);
 color4.shapeColor=("green");
 color5 = createSprite(55,340,45,45);
 color5.shapeColor=("blue");
 color6 = createSprite(55,400,45,45);
 color6.shapeColor=("purple");
}



function draw() {
 
  stroke(0,200,200);
  strokeWeight(3);

  line(0,70,1500,70);

  stroke(value);
  strokeWeight(value2);

  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

  
 
 
  drawSprites();
  textSize(25);
  noStroke();
  fill(0,200,200);
  text("Colour",25,50);
  text("Size",38,470);
  text("Eraser",25,700);
  fill(255)
  stroke(0,200,200);
  strokeWeight(4)
  textSize(40);
  text("My Canvas",650,40)

}
