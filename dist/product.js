"use strict";
// function of Product objects :
function sumProduct(x) {
  // create a function its parameter's type is array of product
  // And return a value its type number
  return x.reduce((sum, x) => sum + x.price, 0);
}
let products = [
  { name: "banana", price: 50 },
  { name: "Mango", price: 30 },
  { name: "strawberry", price: 30 },
];
// Task => 5
// checks if it is a valid email address.
// if the email contain a word ("@") and (".com") => the email is valid :)
function check(email) {
  email.split("");
  if (email.includes("@") && email.includes(".")) {
    return email;
  } else {
    return `not Valid`;
  }
}
console.log(check("nancy203@gmail.com"));
console.log(check("farah.c"));
