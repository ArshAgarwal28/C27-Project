class hold{ 
    constructor(bodyA, bodyB) {
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            length: 140,
            stiffness: 0.4
        }

        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display() {
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.bodyB.position;
        strokeWeight(7);
        stroke("#54270F");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}