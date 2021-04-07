class Chain{
    constructor(bodyA,bodyB){
        var option={
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.04,
            length : 200
        }
        this.bodyB = bodyB
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }    

    display(){
        if(this.chain.bodyA){
        var pointA = this.chain.pointA.position
        var pointB = this.pointB
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    
    }
        
    
}