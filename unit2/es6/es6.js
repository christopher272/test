/*const manname = "John"
let age = 101

function runForLoop(pets) {
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        var name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", manname)
    return petObjects
}

runForLoop(["cat", "dog"])*/
/* arrow functions */

/*const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(function(carrot) {
        return { type: "carrot", name: carrot }
    })
}*/

const carrots = ["bright orange", "ripe", "rotten"]

mapVegetables = arr => (arr.map (carrot => ({type: "carrot", name:carrot})))
console.log(mapVegetables(carrots))

//arrow pt 2

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]
filterForFriendly = arr => (arr.filter (person => person.friendly))
console.log(filterForFriendly(people))


// arrow pt 3

let doMathSum = (a, b) => a + b

console.log(doMathSum(145451561563,8))

// arrow pt 4

let printString = (firstName, lastName, age) => (`Hi ${firstName} ${lastName}, how does it feel to be ${age}?`)

console.log(printString("Jane", "Doe", "100"))

// arrow pt 5

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 filterfordogs = arr => (arr.filter (animal => animal.type ))
 console.log(filterfordogs(animals))