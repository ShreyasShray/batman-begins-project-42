class Umbrella{
    constructor(x, y, radius){
        var options = {
            'isStatic': true,
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius*2;
        World.add(world, this.body);
    }

    display(){
        ellipseMode(CENTER);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius)
    }
}