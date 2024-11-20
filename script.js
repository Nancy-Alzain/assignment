// Task = > 2
// Write a function that calculates the total sum
// and the average of the numbers using the reduce method

let array = [12, 42, 5, 9, 4, 22];
let average = array.reduce(function (acc, curr) {
  let sum = acc + curr;
  return sum;
});

console.log(`The Sum of the array is : => ${average}`);
console.log(`The Average of the array is : => ${average / array.length}`);

// Task 3 =>
// There Is More Solution Here : ->
// Solution One :
// A Set is a special object in JavaScript that only stores unique values.

function remDupli(arr) {
  let unSet = new Set(arr); //// Create a Set object
  let Array = [...unSet]; // Convert the Set to an Array
  return Array; // Return the array of unique values
}
const array1 = ["nancy", "yara", "nagham", "yara", "farah"];
const newArray = remDupli(array1);
console.log("Solution One : ", newArray); // Output: ["nancy", "yara", "nagham", "farah"]

// Solution Two By Filter Function
let array11 = ["nancy", "yara", "nagham", "yara", "farah"];
let newArr = array11.filter((ele, index) => array11.indexOf(ele) === index);
console.log("Solution Two : ", newArr);
