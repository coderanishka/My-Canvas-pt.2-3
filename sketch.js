
var ribbon;
var value = 255;
var value2 = 5;
var database;
var drawing = [];
var currentPath = [];


function setup() {
 
  canvas = createCanvas(1500, 800);
  background(0);
 
    database = firebase.database()
  
   

 display();
}
var db_drawing = []

function mouseDragged() {

    var point = {
        x: mouseX,
        y: mouseY
    }
    drawing.push(point);
    var drawingRef = database.ref('drawing')
    drawingRef.set({
        "d": drawing
    })
}

function draw() {
  readData()
  beginShape();
 /* stroke(value);
  strokeWeight(value2);

  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }*/
   
  
 
  stroke(value);
  strokeWeight(value2);
  noFill();
  for (var i = 0; i < db_drawing.length; i++){  
    
   //beginShape();
   vertex(db_drawing[i].x, db_drawing[i].y);
  
   endShape();
  } 

  stroke(0,200,200);
  strokeWeight(3);
  line(0,70,1500,70);
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




function readData() {
  database.ref('drawing/').on('value', (data) => {
      db_drawing = data.val().d
  })
}


function clearDrawing() {
  db_drawing = [];
  var adaRef = database.ref('drawing');
  adaRef.remove()
}