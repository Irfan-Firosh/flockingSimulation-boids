class Boid {
    constructor() {
        this.position = createVector(width/2, height/2);
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(3,6));
        this.acceleration = createVector();
        this.maxspeed = 3;
        this.maxforce = 0.05;
    }

    update() {
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxspeed);
    }

    applyForce(force) {
        this.acceleration.add(force)
    }

    run(boids) {
        this.flock(boids);
        this.update();
        this.borders();
        this.render();
    }

    show() {
        strokeWeight(16);
        stroke(255);
        point(this.position.x, this.position.y)
    }
}