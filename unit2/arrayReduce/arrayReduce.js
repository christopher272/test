const numAdd = [11, 15, 14]
const add = numAdd.reduce(addNum)
function addNum(total, num) {
    return total + num}
console.log(add)

const concat = numAdd.reduce(function(final, num){
    return final + "" + num 
})

console.log(concat)
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const whoVoted = voters.reduce(function(final, voter){ 
    if(voter.voted){
    final.didVote++
} 
return final
}, { didVote: 0})
console.log(whoVoted)

const wishList =[
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
const costTotal = wishList.reduce(function(total, cost){
    total = total + cost.price
    return total
}, 0)
console.log(costTotal)
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];
const oneArray = arrays.reduce(function(final, input){
    final = final + "" + input
    return final
})
console.log(oneArray)
const voterResults = voters.reduce(function(total, vote){
    if (vote.voted === true) {
        if (vote.age >= 18 && vote.age <= 25) {
            total.youngVoters ++
            total.youngPeople ++
        } else if (vote.age >= 26 && vote.age <= 35){
            total.olderVoters ++
            total.olderPeople ++
        } else if (vote.age >= 36 && vote.age <= 55){
            total.oldVoters ++
            total.oldPeople ++
        }
     } else if (vote.voted === false){
        if (vote.age >= 18 && vote.age <= 25) {
            total.youngPeople ++
        } else if(vote.age >= 26 && vote.age <= 35) {
            total.olderPeople ++
        } else if (vote.age >= 36 && vote.age <= 55){
            total.oldPeople ++
        }   
    }
    return total
}, {youngVoters: 0, youngPeople: 0, olderVoters: 0, olderPeople: 0, oldVoters: 0, oldPeople: 0})
console.log(voterResults)