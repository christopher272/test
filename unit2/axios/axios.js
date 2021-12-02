var submit = document.getElementById('submit');
//var todoForm = document.getElementById('addTodo')
var todoForm = document['todo']

function getData(){
    axios.get("https://api.vschool.io/chrisbarr/todo/") 
        .then(res => listData(res.data))
        .catch(err => console.log(err))
}
getData()


//get
function listData(data){
for(let i = 0; i < data.length; i++){
    const div = document.createElement("div")
    const title = document.createElement("h1")
    const price = document.createElement("h2")
    const description = document.createElement("h2")
    const img = document.createElement("img")
    const completed = document.createElement("input")
    const complete = document.createElement("h3")
    const edit = document.createElement("button")
    const deletebtn = document.createElement("button")
    completed.setAttribute("type", "checkbox")
    title.textContent = data[i].title
    description.textContent = data[i].description
    img.src = data[i].imgUrl
    price.textContent = "$" +data[i].price
    complete.textContent = ("complete?")
    complete.appendChild(completed)
    edit.textContent = ("Edit properties")
    deletebtn.textContent = ("Delete")
    div.appendChild(title)
    div.appendChild(description)
    div.appendChild(complete)
    div.appendChild(img)
    div.appendChild(edit)
    div.appendChild(deletebtn)
    div.appendChild(price)
   
document.getElementById('chores-list').appendChild(div);
   
if (data[i].completed === true) {
        title.style.textDecoration = "line-through"
        completed.checked = true}
   
    //put
edit.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("hello" + data[i]._id)
axios.put("https://api.vschool.io/chrisbarr/todo/",)
     .then (res => console.log(res))
     .catch (err => console.log(err))
     setTimeout(function(){location.reload()}, 300);
})
deletebtn.addEventListener("click", (e) => {
    e.preventDefault
    axios.delete("https://api.vschool.io/chrisbarr/todo/" + data[i]._id, )
     .then (res => console.log(res))
     .catch (err => console.log(err))
     setTimeout(function(){location.reload()}, 300);
 })
 completed.addEventListener("click", (e) => {
    if (completed.checked === true) {
        let completion = {"completed" : true}
        axios.put("https://api.vschool.io/chrisbarr/todo/" + data[i]._id, completion)
        .then (res => console.log(res))
        .catch (err => console.log(err))
        setTimeout(function(){location.reload()}, 1500);
 } else {let completion = {"completed" : false} 
 axios.put("https://api.vschool.io/chrisbarr/todo/" + data[i]._id, completion)
 .then (res => console.log(res))
 .catch (err => console.log(err))
 setTimeout(function(){location.reload()}, 1500);
}
 })
}}
// get end
// post

function postData(){
    //var todoForm = document['addTodo']
    const newTodo = 
    { "title" : todoForm.title.value,
    "description" : todoForm.Description.value,
    "price" : todoForm.Price.value,
    "imgUrl" : todoForm.imageUrl.value,
    "completed" : todo.completed.checked === true? true:false
} 
   axios.post("https://api.vschool.io/chrisbarr/todo/", newTodo)
        .then (res => console.log(res))
        .catch (err => console.log(err))
}
submit.addEventListener("click", (e) => {
    e.preventDefault()
   postData()
   setTimeout(function(){location.reload()}, 300);
})
//post end
