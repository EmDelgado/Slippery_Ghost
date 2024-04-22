
let myBois = new Array(5);


function setup() {
  createCanvas(900, 600);
  for (let i = 0; i < myBois.length; i ++ ) {
    myBois[i] = new array_Boi(300+random(-150,150),50+random(100),100,50,80,0.5);
  }
}

function draw() {
  background(220);
  frameRate(15);
    stroke(0);
    myBois[0].buttonAction();
    myBois[0].screenSplit();
    myBois[0].buttonDisplay();
    for (let i = 0; i < myBois.length; i ++ ) {
      let rojo = random(255);
      let verde = random(255);
      let azul = random(255);
      myBois[i].display();
      myBois[i].color(rojo,verde,azul);
      myBois[i].zooming();
      myBois[i].mouseInteraction();
    }
}
