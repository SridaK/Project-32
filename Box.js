class Box {
    constructor(x,y,width,height) {
      var options = {
          restitution: 0.4, friction: 0.1
      }
      this.Visiblity = 225;
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    score(){
      if(this.Visibility<0 && this.Visibility>-105){
        score++;
      }
    }

display(){
 console.log(this.body.speed);
 if(this.body.speed < 6){
  var pos =this.body.position;
  var angle = this.body.angle
  push()
      translate(pos.x,pos.y)
      rotate(angle)
      rectMode(CENTER);
      fill("blue");
      rect(0, 0, this.width, this.height);
      pop()
 }
 else{
   World.remove(world, this.body);
   push();
   this.Visiblity = this.Visiblity - 5;
   pop();
 }
  }
    }