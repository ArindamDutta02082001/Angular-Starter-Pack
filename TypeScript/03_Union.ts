
// union - it is OR  | It helps in merging fields from one or the other into a single entity , where all the fields are optional
// opposite of union (OR) is & ( AND ) , here we have to include all the fields
// unions are not to be applied to the primary data type like string | number instead to be applied in custom type , interface , classes  

/* union in normal variables */ 

let seat : "aisle" | "middle" | "window" ;
seat = "aisle";
// seat "crew"    error

// ENUM
// ** there exists ENUM to serve the avobe purpose
// enums are auto initialized with some value starting from 1 , we can change the vlaue
enum SeatChoice 
{
    AISLE , MIDDLE , WINDOW , EXTRA = 40 , EXTRAXX = "Extra leg" 
}

let seats : SeatChoice ;
seats = SeatChoice.WINDOW;
// seats = "crew" error

console.log(SeatChoice.EXTRAXX);  // Extra leg
console.log(SeatChoice.EXTRA);    // 40
console.log(SeatChoice.WINDOW);   // 3

/* union in function */ 

function dateCreated(data : string | number)
{
    console.log(data)
}
dateCreated(12022023);
dateCreated("12th jan 2023");

/* union in type */  

type Users = {
    readonly _id : string;  // field cant be modified after initialized
    username : string ;     
    age: number;
    place: string;
};


type Admin = {
    _adminid : string ,
    dept : string
}

// all fields are manadatory - & ( AND )
let newUser : Users & Admin = {
    _id: "user123", // Ensure _id is initialized
    username: "JohnDoe",
    age: 23,
    place: "Bangalore",
    _adminid: "admin45",
    dept: "CSE"
} 

// all fields are not mandatory - union ( OR )
let newUserdetail : Users | Admin = {
    age: 23,
    place: "Bangalore",
    _adminid: "admin45",
    dept: "CSE"
}

console.log(newUser)
console.log(newUserdetail)

/* union in array */ 

// const data : number | string[] = [ "1" , 2 , 3 , "4" ] ;  error : in this both type of data can be stored
// const data : number[] | string[] = [ "1" , 2 , 3 , "4" ] ;  error : in this either type of array of either number or either string can be stored
const data : (number | string)[] = [ "1" , 2 , 3 , "4" ] ;  // in this both type of data can be stored


