function sum(x, y) {
const checkX = typeof x
const checkY = typeof y
if  (checkX === 'number' && checkY === 'number'){
console.log(x + y) 
} else {throw 'math cannot be executed on data types other than numbers.'}}
try { sum("1", "2")
    
} catch (error) {console.log("this didnt work")
}


var user = {username: "cbarr272" , password: "kal1mari"}
function login(username, password) {
    if  (username === user.username && password === user.password){
        console.log("login successful")
    }else {throw  'login failed'
}}
try{login("cbarr272" , "kal1mari")}
catch (error) {console.log("oops")}