var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]
const people = peopleArray.filter(function(age){
    return age.age > 18
})
const orderedPeople = people.sort(function(a, b) {
    return a.lastName.localeCompare(b.lastName)
});
const finalPeople = orderedPeople.map(function(person){
    return "<li>" + person.firstName + " " + person.lastName + " is " + person.age + "</li>"
})
console.log(finalPeople)