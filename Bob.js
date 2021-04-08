class Bob{
    constructor(x, y, radius) {
        var options = {
            'restitution':1.1,
            'friction':0.3,
            'density':1.0
        }
        this.x=x;
        this.y=y;
        this.radius = radius;
        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        circle(0, 0, this.radius, this.radius);
        pop();
      }
}