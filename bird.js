class bird{
constructor(x,y){
    var optionsbirds={
        restitution:1.0,
        friction:1.0,
        density:1.5
    }
    this.body= Bodies.rectangle(x,y,50,50,optionsbirds);
    this.height=50;
    this.width=50;
    World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle= this.body.angle;
        pos.x=mouseX;
        pos.y=mouseY;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}
