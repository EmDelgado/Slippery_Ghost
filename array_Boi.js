class array_Boi {
    constructor(circX,circY,diff,cSize,mSpeed,gravity) { 
      this.cX = circX;
      this.cY = circY;
      this.difference = diff;
      this.size = cSize;
      this.r = 0;
      this.g = 0;
      this.b = 0;
      this.state = 0;
      this.speed = mSpeed;
      this.momentum = gravity;
      this.dX = random(width);
      this.dY = random(height);
  
      this.button1 = false;
      this.button2 = false;
      this.distance;
      this.d;
      this.dCon;
      
      this.color = function(rojo,verde,azul){
        this.r = rojo;
        this.g = verde;
        this.b = azul;
      };
  
      this.screenSplit = function() { 
        this.iR = 0;
        this.iG = 900;
      while (this.iR < width/2) {
        noStroke();
        rectMode(CORNERS);
        this.distance = abs(mouseX - this.iR)-20; 
        fill(this.distance,0,0);
        rect(this.iR,0,this.iR-350,height);
        this.iR += 1;
      }
    
      while (this.iG > width/2) {
        noStroke();
        rectMode(CORNER);
        this.distance = abs(mouseX - this.iG)-20; 
        fill(0,this.distance,0);
        rect(this.iG,0,350,height);
        this.iG -= 1;
      }
    };
      this.display = function() {    
        fill(this.r,this.g,this.b);
        ellipse(this.cX,this.cY+this.size*2.5,this.size/2,this.size/2); ///tail
        ellipse(this.cX,this.cY+this.difference,this.size,this.size); ///tail
        ellipse(this.cX,this.cY+this.size,this.size*1.5,this.size*1.5); ///torso
        ellipse(this.cX-this.difference,this.cY+this.size*1.5,this.size/4*3,this.size/4*3); ///arms
        ellipse(this.cX+this.difference,this.cY+this.size*1.5,this.size/4*3,this.size/4*3); ///
        ellipse(this.cX,this.cY,this.size*2,this.size*2); ///head
        fill(0);
        ellipse(this.cX,this.cY,this.size,this.size); ///eye
      };
    
      this.zooming = function() {
        this.speed = this.speed + this.momentum;
        if (this.state == 0) {
          this.cX = this.cX + this.speed;
        if (this.cX > width-250) {
          this.cX = width-250;
          this.state = 1;
        }
      } else if (this.state == 1) {
        this.cY = this.cY + this.speed;
        if (this.cY > height-300) {
          this.cY = height-300;
          this.state = 2;
        }
      } else if (this.state == 2) {
        this.cX = this.cX - this.speed;
        if (this.cX < 200) {
          this.cX = 200;
          this.state = 3;
        }
      } else if (this.state == 3) {
        this.cY = this.cY - this.speed;
        ellipse(this.dX,this.dY,10,10);
        if (this.cY < 100) {
          this.cY = 100;
          this.state=0;
        }
      }      
      };
      this.buttonAction = function(){
  
        if (mouseX > 50 && mouseX < 250 && mouseY > 500 && mouseY < 550 && mouseIsPressed) {
          this.button1 = true; 
        } else {
          this.button1 = false;
        }
        if (mouseX > 600 && mouseX < 800 && mouseY > 500 && mouseY < 550 && mouseIsPressed) {
          this.button2 = true; 
        } else {
          this.button2 = false;
        }
  
        if (this.button1) {
          this.r=255;
          this.g=0;
          this.b=0;
          this.cX=150;
          this.cY=362;
          this.speed = 30;
        } 
        
        if (this.button2) {
          this.r=0;
          this.g=255;
          this.b=0;
          this.cX=700;
          this.cY=362;
          this.speed = 30;
  
        }
      }
      this.buttonDisplay = function() {
        fill(255,0,0);
        rect(50,500,200,50);
        fill(0,255,0);
        rect(600,500,200,50);
      };
      this.mouseInteraction = function(){
        this.d = dist(this.cX,this.cY,mouseX,mouseY)/800;
        this.dCon = constrain(this.d,0,1.05);
        this.speed = this.speed * this.dCon;
        print(this.dCon);
        ///As the mouse gets closer, the Bois slow down but get far 
        ///enough away and they benefit from a little boost.
    };
    }
  }