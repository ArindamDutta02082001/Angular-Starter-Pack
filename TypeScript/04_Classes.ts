// class - typically same as java | the variables has to be initialiZed or use !

enum SeatEnum {
    AISLE,
    MIDDLE,
    WINDOW,
    EXTRA = 40,
    EXTRAXX = "Extra leg"
}

class Manager {
    constructor(
        readonly manager_name: string
    ) {}
}

// Defining one class inside another class
class Employee {
    readonly _id: string;
    username: string;
    age: number;
    manager : Manager;
    seat : SeatEnum;
    foodFunction: () => string; // Function type declaration


    constructor(_id: string, username: string, age: number, seat : SeatEnum , manager : Manager , food : ()=> string ) {
        this._id = _id;
        this.username = username;
        this.age = age;
        this.manager = manager;
        this.seat = seat;
        this.foodFunction = food;
    }


}

let food  = () : string => {
    return "Food function implementation";
}

// using class by creating new object
let newEmployee1 : Employee = new Employee("01_emp" , "emp07" , 76 , SeatEnum.AISLE ,new Manager("Sallu") , food);
console.log(newEmployee1);
newEmployee1.foodFunction();

// using class as type in object
let newEmployee2 : Employee = {
    _id : "02_emp" ,
    username : "emp09",
    age : 45 ,
    seat : SeatEnum.AISLE , 
    manager : new Manager("Ballu") ,
    foodFunction : food
}
console.log(newEmployee2);

// combining one or more classes to type
class Office {
    place : string ;
    constructor(place : string)
    {
        this.place=place;
    }
}

type NewEmployeeClassAND = Employee & Office ;   
type NewEmployeeClassOR = Employee | Office ;


// implement function outsode the class
// let food = () => {
//     return "Food function implementation";
// }

// Assign the method to the class prototype if we dont want to pass function in the parameter
// UserClass.prototype.foodFunction = food;


 


