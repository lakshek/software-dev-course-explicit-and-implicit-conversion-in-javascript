/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
console.log("The result is: " + result);

let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = Number(age) + 5;//added explicit conversion of string to a Number
console.log("Total Age: " + totalAge);

let number = "25" / 0 //implicit conversion to a number
if (number) {//checking for an undefined number
  console.log("Oops! It's an undefined number")
}

let yourAge = "25";
let howOld = Number(yourAge) - 25;//explicit conversion to a number
if (!howOld) {//checking for zero
  console.log("You were not born yet!")
}