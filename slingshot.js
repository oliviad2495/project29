class slingshot{

    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

    this.sling = Constraint.create(options);
    World.add(world, this.sling);

    }

    fly(){
        this.sling.bodyA = null;
    }
    
    display(){
       imageMode(CENTER)
       image(polygon_img, polygon.position.x, polygon.position.y, 40,40); 
    }

}