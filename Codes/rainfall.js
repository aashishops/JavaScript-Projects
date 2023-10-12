class Drop{
constructor(){
this.x=random (width);
this.y = random(height);
this.speed = random(2,10);
this.length = random(4,10);
}
  fall(){
    this.y = this.speed + this.y;
    this.speed = this.speed + 0.10;
    if (this.y > height){
    this.y = random(height);
      this.speed = random(2,10);
       }
   }
  show(){
  stroke(138,48,226);
    line(this.x,this.y,this.x,this.y+this.length);
    
  }
  
  

}
