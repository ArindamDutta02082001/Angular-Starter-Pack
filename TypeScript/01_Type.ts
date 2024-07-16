
/*
we have ? to make a field optional , and we use ! to initialize a field with a default value
*/

/////////////// types ////////////////

enum UserSeat 
{
    AISLE , MIDDLE , WINDOW , EXTRA = 40 , EXTRAXX = "Extra leg" 
}

type userName = {
    name : string
}

// combining one type inside another
type Passenger = {
    readonly _id : string;  // field cant be modified after initialized
    username : userName;     
    age: number;
    place: string;
    seatchoice ?: UserSeat  // optional field
};

type cardNumber = {
    _number : string
}


// DIFFERENT WAY TO MERGE TYPE

// reopening of interface 

// adding 2 or more type and extra properties by &  
// i.e every porperty without ? has to be present appending a new field also 
type UserDetail = Passenger & cardNumber & { createdOn : string } 


let userdetail : UserDetail = {
    _id : "1234",
    username : { name : "John" },
    _number : "CVV2023" ,
    age: 23,
    place: "Bangalore" ,
    createdOn : "28th Jan 2023" ,
    seatchoice : UserSeat.AISLE
};

console.log(userdetail)

// UNION / OR of 2 type - either property can be present or may not be
//                           ( basically every property is having ? )

type UserDetailUnion = Passenger | cardNumber

let userdetailsintersected : UserDetailUnion= {
    username : { name : "John" },
    _number : "CVV2023" ,
    place: "Bangalore" ,
    seatchoice : UserSeat.AISLE  
}

console.log(userdetailsintersected)




