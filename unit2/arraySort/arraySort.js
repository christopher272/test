var numbers = [15, 95, 1, 265, 3, 500, 7];
var lowtoHigh = numbers.sort(lTH)
function lTH(a, b){return a-b}
console.log(lowtoHigh)

var highToLow = numbers.sort(hTL)
function hTL(a, b){return b-a}
console.log(highToLow)

const words = ["dog", "wolf", "by", "family", "eaten"];
const shortWords = words.sort(short)
function short(a, b) {return a.length - b.length}
console.log(shortWords)
var words2= ["dog", "wolf", "by", "family", "eaten"];
var wordsInOrder = words2.sort()
console.log(wordsInOrder)


var ages = ([
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
])

var old = ages.sort(x)
function x(a, b){return a.age - b.age}
console.log(old)