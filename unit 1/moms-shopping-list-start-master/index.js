document.addItem.addEventListener("submit", function(event){
event.preventDefault();

const item = document.addItem.input.value;
document.addItem.input.value = "";
console.log("item");

const li = document.createElement("li");
const div = document.createElement("divcontent");
div.textContent = item;
const button = document.createElement("button");
const buttonx = document.createElement("button");
button.textContent = ("edit");
buttonx.textContent = ("clear item");
document.getElementsByTagName("ul")[0].append(li);
document.getElementsByTagName("li")[0].append(div);
document.getElementsByTagName("divcontent")[0].append(button);
document.getElementsByTagName("divcontent")[0].append(buttonx);
buttonx.addEventListener("click",function(){
li.remove();
});
});