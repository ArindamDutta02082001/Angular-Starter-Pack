
abstract class Vehicle {
    // Properties
    brand: string;
    speed: number;

    // Constructor
    constructor(brand: string, speed: number) {
        this.brand = brand;
        this.speed = speed;
    }

    // Abstract method
    abstract accelerate(): void;

    // Concrete method
    displaySpeed() {
        console.log(`${this.brand} is moving at a speed of ${this.speed} km/h`);
    }
}

// Define a concrete subclass
class Cars extends Vehicle {
    // Constructor
    constructor(brand: string, speed: number) {
        super(brand, speed);
    }

    // Implement the abstract method
    accelerate() {
        this.speed += 10;
        console.log(`${this.brand} is accelerating. Current speed: ${this.speed} km/h`);
    }
}

// Create an instance of the Car class
const myCars = new Cars("Toyota", 60);
console.log(myCars); // Output: Car { brand: 'Toyota', speed: 60 }
myCars.accelerate(); // Output: Toyota is accelerating. Current speed: 70 km/h
myCars.displaySpeed(); // Output: Toyota is moving at a speed of 70 km/h
