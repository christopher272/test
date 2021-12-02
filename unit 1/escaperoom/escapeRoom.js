const readline = require("readline-sync");
const name = readline.question("What is your name? ");
console.log("hello " + name);
console.log("you wake up and find yourself in a room with no windows and a single door there is also a single hole in the wall");
const action = readline.keyIn("will you [o] open the door [h] find out what is in the hole or [k] find the key", {limit: "kho"});

if(action === "o"){
    console.log("the door is locked ");
}else if(action === "k"){
    console.log("you found the key under a loose floorboard");
}else if(action === "h"){
    console.log("you stuck your hand into the hole in the wall.  You were impaled by poisoned spikes. YOU DIED!!!!");
    }
 const action2 = readline.keyIn("will you [o] open the door [h] find out what is in the hole or [k] find the key", {limit: "kho"});
 if (action2 === "o"){
     console.log("congratulations you have successfully escaped");
 }else if(action2 === "k"){
     console.log("you already had the key");
 }else if(action2 === "h"){
     console.log("you stuck your hand into the hole in the wall.  You were impaled by poisoned spikes. YOU DIED!!!!");
 }