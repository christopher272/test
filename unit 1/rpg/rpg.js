const readlineSync = require('readline-sync')
let playerIsAlive = true
const hero ={
    name: '',
    hp:175,
    strength: 150,
    inventory:["sword"],
    gold:0
}
class Enemy {
    constructor(name, strength, hp, weapon, loot){
    this.name = name
    this.strength = strength
    this.hp = hp
    this.weapon = weapon
    this.loot = loot
}}
const enemy1 = new Enemy( 'Gordon Ramsey', 200, 100, 'frying pan', '500 gold')
const enemy2 = new Enemy( 'Simon Cowell', 145, 100, 'verbal abuse', '1300 gold' )
const enemy3 = new Enemy( 'Jeremy Clarkson', 95, 100, 'tire iron', '75 gold' )
const enemies = [ enemy1, enemy2, enemy3]
const inputName = readlineSync.question("What is your name? ")
hero.name = inputName
console.log("Hello "+ hero.name)
 const index = Math.floor(Math.random() *3)
            let currentEnemy = enemies[index]


while(playerIsAlive) {
const input = readlineSync.keyIn("what would you like to do? ", {limit:'wiqp'})
console.log(input)
if (input === "w") {
    console.log("You are walking now")
    let number = Math.floor(Math.random() *4) +1
    if (number === 1){
        console.log("you have encountered an enemy!")
        const action = readlineSync.keyIn("would you like to run or fight?",{limit: 'fr'})
        if (action === 'r'){
          let escapeNumber = Math.floor(Math.random()*2)+1
            console.log("you are attempting to run.")
           if (escapeNumber = 1){
                console.log("you have successfully escaped.")
            }
          else if (escapeNumber = 2){
                console.log("you have failed to escape. You must fight your way out.")
                attack()
            }
        }
        else if (action === 'f') {
            console.log("you are fighting.")
            
            attack()
  }
 }
}
else if (input === 'i') {
    console.log("Inventory: " +hero.inventory)
}
else if (input === 'q'){
    playerIsAlive = false
    console.log("Thanks for playing.")
}
else if (input === 'p'){
    console.log(hero)
}}
function attack(){
    
            while(hero.hp >0 && currentEnemy.hp >0) {
                const heroAttk = hero.strength / 5
                const enemyAttk = currentEnemy.strength/ 5
                console.log("You are being attacked by " + currentEnemy.name +"!")
                currentEnemy.hp = currentEnemy.hp - heroAttk
                console.log("You have attacked the enemy with your " + hero.inventory[0])
                hero.hp = hero.hp - enemyAttk
                console.log(currentEnemy.name + " has attacked you with his " + currentEnemy.weapon + ", you currently have " + hero.hp + " health remaining")
                if (hero.hp <= 0) {
                playerIsAlive = false
                console.log("you have lost to " + currentEnemy.name +" thank you for playing")}
                if (currentEnemy.hp <= 0) {
                    console.log("you have vanquished " + currentEnemy.name + " you had " + hero.hp + " health remaining."
                    + currentEnemy.name + " dropped " + currentEnemy.loot)
                    hero.loot = hero.loot + currentEnemy.loot
                }
            }
}

if (playerIsAlive = false) {
    console.log("you have ended the game with " + hero.loot + " gold")
}