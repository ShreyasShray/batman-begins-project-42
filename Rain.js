class Rain{
    constructor(x, y){
        var options = {
            'isStatic': false,
            'density': 0.1,
            'friction': 0.1
        }
        this.body = Bodies.circle(x, y, 5, options);
        World.add(world, this.body);
    }

    display(){
        push();
        ellipseMode(CENTER);
        fill("blue");
        strokeWeight(0);
        ellipse(this.body.position.x, this.body.position.y, 10, 10)
        pop();
    }
}