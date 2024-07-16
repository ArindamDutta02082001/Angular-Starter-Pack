// interface - a guideline to define the class 
//              all the field mentioned in interface has to be implemented in class or variable using it unless that field having ?

enum Seat
{
    AISLE , MIDDLE , WINDOW , EXTRA = 40 , EXTRAXX = "Extra leg" 
}

interface NewUser 
{
    readonly _id : number ,
    email : string ,
    seatChoice ?: Seat ,
    startTrial: () => string
}

const hitesh : NewUser = {
    _id : 123 ,
    email : "abc@gmail.com" ,
    seatChoice : Seat.AISLE ,
    startTrial : () => { return "trial"}

}

console.log(hitesh)


// DIFFERENT WAY TO MERGE INTERFACES

// reopening of interface 

interface gitCred
{
    gitToken : string
}

interface bitCred
{
    bitToken : String
}

interface rootUser extends gitCred , bitCred
{
    role : "USER" | "ROOT"
}

let Arindam : rootUser = {
    gitToken : "qweeqXXXXXXXXXXXXret4353" ,
    bitToken : "qweeq-32sfd-qdsaer432" ,
    role : "ROOT"
}

// merging in same interface 
// if same interface is there then all fields are accumulated under one

interface colors {
    colorname : string;
};

interface colors {
  colortype: string;
};

const colors: colors = {
  colorname : "Green",
  colortype : "Light"
};

// merging interface with type by & and |

interface colorName {
    colorname: string , 
    quality : string
  }
  interface colortype {
    colortype: string
  }

  type colorDesignOR = colorName | colortype // OR

  type colorDesignAND = colorName & colortype // AND
 
// Main use of interface
//   see  inheritance in TS in Class  in the class.ts 
//////////////////// inheritance in TS in Class //////////////////////

// Define a interface
interface Vehicles {
    brand: string;
    accelerate(): void;
}

// Define a class implementing the Vehicle interface
class Car implements Vehicles {

    speed: number;
    brand: string;
    model : string ;

    constructor(model:string ,brand: string, speed: number) {
        this.model = model;
        this.brand = brand;
        this.speed = speed;
    }

    accelerate(this: any) {
        this.speed += 10;
        console.log(`${this.brand} is accelerating. Speed: ${this.speed} km/h`);
    }
}

// we can Define the accelerate function externally also like this
// function accelerate(this: any) {
//     this.speed += 10;
//     console.log(`${this.brand} is accelerating. Speed: ${this.speed} km/h`);
// }

// Create an instance of the Car class, passing the accelerate function as a parameter
const myCar = new Car("Tesla Truck" , "XUV", 60);
console.log(myCar); // Output: Car { brand: 'Testla Truck', speed: 60 }
myCar.accelerate(); // Output: Tesla Truck is accelerating. Speed: 70 km/h


