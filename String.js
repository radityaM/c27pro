class String{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.3,
            length: 400
        }
        this.pointB=pointB;
        this.str = Constraint.create(options);
        World.add(world, this.str);
    }

    display(){
        if(this.str.bodyA){
            var pointA = this.str.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }

    }
    
}