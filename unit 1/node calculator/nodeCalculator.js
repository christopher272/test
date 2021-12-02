var readlineSync = require('readline-sync');
var num1 = readlineSync.question("What is the first number?")
var num2 = readlineSync.question("what is the second number?")
var total = readlineSync.question("To add (type a) to subtract (type s) to divide (type d) to multiply (type m)")
if (total === "a"){
    console.log(num1 - - num2)
}   else if ( total === "s"){
    console.log(num1 - num2)
}   else if ( total === "d"){
    console.log(num1 / num2)
}   else if (total === "m"){
    console.log (num1 * num2)
}