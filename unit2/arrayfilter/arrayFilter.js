var numbers = [1,2,3,4,5,6,7,8,9,158];
var pickNumber = numbers.filter(pick)
function pick(number){
    return number>= 5}
        console.log(pickNumber)

var evens = numbers.filter(even);
function even(nums){
  return nums % 2 == 0}
    console.log(evens)

 var fiveOrLess = (["johnathan", "fredd","quazimoto","bob"])   
 var five = fiveOrLess.filter(less);
 function less(top){return top.length <= 5}
 console.log(five)

 var peoples = ([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
])
var illuminati = peoples.filter(yes)
function yes(ill){return ill.member >= true}
console.log(illuminati)

var oldEnough = ([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
])
var matrix = oldEnough.filter(x);
function x(y) {return y.age >= 18}
console.log(matrix)