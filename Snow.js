class Snow {
    constructor(x, y, r) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:false
        }
        this.r = 10;
        this.image=loadImage("snow4.webp")
        this.body = Bodies.circle(x, y, this.r, options);
        
        
        
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,20,20)
        
        pop();
    }

};