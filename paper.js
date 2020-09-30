class Paper {
    constructor() {
        var options = {
            isStatic:false,
            restituton:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Matter.Bodies.circle(200,200,23,options);
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        fill("pink");
        circle(pos.x,pos.y,23);
    }
}