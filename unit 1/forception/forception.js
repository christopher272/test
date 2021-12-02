var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var forception = [""];
var end = [""];
for(var i = 0; i < people.length; i++){
       forception.push(people[i]);
       forception.push(alphabet);
}
end.push(forception);
console.log(end);