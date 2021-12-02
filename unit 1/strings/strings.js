var capilizeAndLowercase = ("supercalifragilisticexpialidocious");// return string of text that is all caps followed by all lowercase letters
var upAndDown = (capilizeAndLowercase.toUpperCase() + "" + capilizeAndLowercase.toLowerCase());
//console.log(upAndDown);
var findMiddleIndex = ("Hzdfsdfgdsfgdfsfgdsfgdfsfgdsfgdsfgdsfgdsfgdsfgdsfgdsfgello"); // returns a number that is half of the length of the string rounded down
var middle = (findMiddleIndex.length / 2);
//console.log(Math.floor(middle));
var returnFirstHalf = ("Hellonwheels"); // use "slice" to return the first half of the string
var firstHalf = returnFirstHalf.slice(0, returnFirstHalf.length / 2);
//console.log(firstHalf);
var capilizeAndLowercased = ("sup"); // capitalizes the first half of the string and lower case the second half
var caps = (capilizeAndLowercased.slice(0, capilizeAndLowercased.length / 2));
var lower = (capilizeAndLowercased.slice(capilizeAndLowercased.length/2, capilizeAndLowercased.length));
var result = (caps.toUpperCase() + lower.toLowerCase());
console.log(result);