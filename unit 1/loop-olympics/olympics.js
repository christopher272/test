var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for(var i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}
for(var i = numbers.length - 1; i >= 0; i--){
    console.log(numbers[i]);
}
var fruit = ["banana", "orange", "apple", "kiwi"];
for(var i = 0; i < fruit.length; i++){
    console.log(fruit[i]);
}

var numbers2 = [];
for(var i = 0; i < numbers.length; i++){
    numbers2.push(numbers[i]);
}
console.log(numbers2);

for(var n = 0; n <=100 ;n++){
    if(n % 2 === 0)
    console.log(n);
}
var fruit2 = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
var fruit3 = [];
for(var f = 0; f < fruit2.length; f++){
    console.log([f])
    if ([f] % 2 === 0) {fruit3.push(fruit2[f]);        
    }
} console.log(fruit3);