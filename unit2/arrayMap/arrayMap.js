var numbers = [ 15, 95, 14, 365, 945];
var numbers2 = numbers.map(multi)
function multi(num){return num * 2;}
console.log(numbers2)

var numbers2string = [15, 45, 194, 362];
var string = numbers2string.map(numString)
function numString(strng) {return strng.toString()}
console.log(string)

var names = ["john", "joseph", "jose", "jiggles"];
var name = names.map(cap)
function cap(capName){return capName[0].toUpperCase() + capName.substring(1)}
console.log(name)

var nameAge = ([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])
var agelessNames = nameAge.map(subName)
function subName(sub){return sub.name.toString()}
console.log(agelessNames)

var matrix = nameAge.map(mat);
function mat(Mats){if (Mats.age >= 18) {
    return Mats.name + " can go to the matrix.".toString()
    
} else {
    return Mats.name + " is under age!!".toString()
    
}}
console.log(matrix)
var x = nameAge.map(y)
function y(z){return "<h1>" +z.name+"</h1><h2>"+ z.age+"</h2>"}
console.log(x)