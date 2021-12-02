const add = document["addition"]
const sub = document["subtraction"]
const mult = document["Multiplication"]

 add.addEventListener("submit", function(event){
    event.preventDefault()
    const addNum1 = add.add1.value
    const addNum2 = add.add2.value
    add.add1.value = ""
    add.add2.value = ""
    const h1 = document.createElement('h1')
    const addSol = addNum1 - - addNum2;
    h1.textContent = (addNum1 + " + " + addNum2 + " = " + addSol)
    document.getElementsByTagName("body")[0].append(h1)
})

sub.addEventListener("submit", function(event){
    event.preventDefault()
    const subNum1 = sub.sub1.value
    const subNum2 = sub.sub2.value
    sub.sub1.value = ""
    sub.sub2.value = ""
    const h1 = document.createElement('h1')
    const subSol = subNum1 - subNum2;
    h1.textContent = (subNum1 + " - " + subNum2 + " = " + subSol)
    document.getElementsByTagName("body")[0].append(h1)
})

mult.addEventListener("submit", function(event){
    event.preventDefault()
    const multNum1 = mult.mul1.value
    const multNum2 = mult.mul2.value
    mult.mul1.value = ""
    mult.mul2.value = ""
    const h1 = document.createElement('h1')
    const mulSol = multNum1 * multNum2;
    h1.textContent = (multNum1 + " * " + multNum2 + " = " + mulSol)
    document.getElementsByTagName("body")[0].append(h1)
})