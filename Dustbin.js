class Dustbin {
    constructor(x, y, width, height) {
        var options = {
            restitution: 0,
            friction: 0,
            density: 0.1
        }
        this.body = Bodies.rectangle(x, y, width, height, options)
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display() {
        rect(this.body.x, this.body.y, this.width, this.height);
        fill("white");
    }
}