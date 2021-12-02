function collectAnimals(...collectAnimals) {  
    console.log(collectAnimals)
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]
// part 2




function combineFruit(fruit, sweets, vegetables){
return {fruit, sweets, vegetables}}

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]))


             //destructuring

             const vacation = {  
                location: "Burly Idaho",
                duration: "2 weeks"
              };
              function parseSentence({location, duration}){
                return `We're going to have a good time in ${location} for ${duration}`
              }
      console.log(parseSentence(vacation));

      // destructuring part 2
      function returnFirst(items){
    const firstItem = items[0]; /*change this line to be es6*/
    return firstItem
}
//destructuring part 3

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
   const [firstFav, secondFav, thirdFav] = arr
    return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`;
}

console.log(returnFavorites(favoriteActivities))

// rest/spread
function combineAnimals(...combineAnimals) { console.log(combineAnimals) 
 
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];
combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals); 




