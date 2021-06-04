class dustbin{
    constructor(x,y,width,height){
       this.x=x;
       this.y=y;
       this.dustbinWidth=200;
       this.dustbinHeight=213;
       this.wallThickness=20;
       this.dustbin=loadImage("dustbingreen.png");


        this.Bottombody=Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.dustbinHeight,{isStatic:true});
        this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness);
        this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness);

       
        World.add(world,this.Bottombody);
        World.add(world,this.leftWallBody);
        World.add(world,this.rightwallBody);
    }
    display(){
        var posbottom=this.Bottombody.position;
        var posLeft=this.leftWallbody.position;
        var posRight=this.rightWallbody.position;

    
        push()
        translate (posLeft.x,posLeft.y);
        rectMode(CENTER)
        angleMode(RADIANS)
        fill(255)
        rotate(this.angle)
        pop()

        push()
        translate (posRight.x,posRight.y);
        rectMode(CENTER)
        angleMode(RADIANS)
        fill(255)
        rotate(-1*this.angle)
        pop()

        push()
        translate (posBottom.x,posBottom.y+10);
        rectMode(CENTER)
        angleMode(RADIANS)
        fill(255)
        imageMode (CENTER)
        image (this.image,0,-this.dustbinHeight/2,this.dustbinWidth,this.dustbinHeight)
        pop()


        







    }
}