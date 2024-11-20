// Task = > 4
//  Interface for a Product :
interface product {
    name : string
    price : number
}

// function of Product objects :
function sumProduct (x:product[]):number{ 
    // create a function its parameter's type is array of product
    // And return a value its type number  
    return  x.reduce((sum , x)=> sum + x.price,0)
}

let products :product[]= [
    {name : "banana" , price : 50},
    {name : "Mango" , price : 30},
    {name : "strawberry" , price : 30}
]


// Task => 5 
// checks if it is a valid email address.
// if the email contain a word ("@") and (".com") => the email is valid :)

function check (email: string ){
    email.split("")
    if (email.includes("@")  &&  email.includes(".")){
        return email
    }
    else {
        return `not Valid`;
      }
}
/*
1=>The process that converts a TypeScript (.ts) file into a JavaScript (.js) file 
is called Transpilation.

2=> To compile a .ts file into a .js file, use the following command:
       tsc filename.ts
*/


