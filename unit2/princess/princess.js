class person {
    constructor(name, totalCoins, status, hasStar, gameActive){
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar;
        this.gameActive = gameActive;
    }
setName(){}
gotHit(hit){
    if (this.status == "Powered Up") {
         this.status = "Big"
    } else if(this.status == "Big") {
        this.status = "Small"
    } else if(this.status == "Small") {
        this.status = "Dead"
        this.gameActive = "false"
    clearInterval(running)}
      else if(this.hasStar == "true") {
          this.hasStar = "false"
          this.status = "Powered Up"
          console.log(`Your star saved you!`)}    
      } 
gotPowerup(powerup){
    if (this.status == "Powered Up") {
        this.status = "you got a star"
        this.hasStar = "true"}
      else if (this.status == "Big") {
          this.status = "Powered Up"
    } else if(this.status == "Small") {
          this.status = "Big"
    }
}
addCoins(coins){
    this.totalCoins = this.totalCoins - - 1
}
print(){
    if (this.gameActive == "true"){
    console.log(`
    Name: ${this.name}
    Status: ${this.status}
    Total Coins: ${this.totalCoins}`)}
    else if(this.gameActive == "false"){
        console.log(`You have died`)
    }
}
}
function runTime() {
    let randomNumber =  Math.floor(Math.random() *3)
if (randomNumber == 0 ) {player.gotHit()}
else if( randomNumber == 1) {player.gotPowerup()}
else if(randomNumber == 2) {player.addCoins()}
player.print()}
let player = new person("luigi", "0", "Big", "false", "true"); 
var running = setInterval (runTime, 2000); 