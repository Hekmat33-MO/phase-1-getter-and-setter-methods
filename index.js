// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;
        this.pi = Math.PI.toFixed(20);
    }

    set diameter(diameter) {
        this.radius = diameter / 2;
    }
    set circumference(circumference) {
        this.radius = circumference / (2 * this.pi);
    }
    set area(area) {
        this.radius = Math.sqrt(area / this.pi);
    }
    get diameter() {
        return this.radius * 2;
    }
    get circumference() {
        return this.diameter * this.pi;
    }
    get area() {
        return this.radius * this.radius * this.pi;
    }
}