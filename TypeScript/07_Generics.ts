// generics - it is same as using any but better than that horrible word any  
// used for passing any type of generic value

// syntax 
function functionName<SameWord>(arg: SameWord): SameWord {
    return arg;
}

// example 1
let result = functionName<string>("Hello");
console.log(result); // Output: Hello

// example 2
interface Bottle<T, U> 
{
    capacity : T;
    brand : U;
}

let bottle : Bottle<number, string> = {
    capacity : 100,
    brand : "Pepsi"
}

let result1 = functionName<Bottle<number , string>>(bottle);
console.log(result1.brand+" has capacity : "+result1.capacity);

// complex example 1 - we can keep one param as generic and other restricted to a particular type out of 2 parameter

interface DBCredentials {
    connection : string ,
    username : string ,
    password : string
}

function anotherFunction<T , U extends DBCredentials > ( firstValue : T , secondValue : U )
{
    return {
        stringValue: firstValue,
        dbCredentials: secondValue
    };
}

const stringValue = "Hello";
const dbCredentials: DBCredentials = {
    connection: "localhost",
    username: "admin",
    password: "password123"
};

const complexresult = anotherFunction(stringValue, dbCredentials);
console.log(complexresult);



