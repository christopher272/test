 const form = document.travel

 form.addEventListener('submit', (event)  =>{
    event.preventDefault()
    const nameFirst = form.first
    const nameLast = form.last
    const age = form.age
    const gender = form.gender.value
    const destination = []
    for(let i = 0; i < form.Destination.length; i++){
      if(form.Destination[i].checked){
          destination.push(form.Destination[i].value)
      }
  }
    const diet = []
    for(let j = 0; j < form.Diet.length; j++){
      if(form.Diet[j].checked){
          diet.push(form.Diet[j].value)
      }
  }
    alert (`
       First name: ${nameFirst.value}
       Last name: ${nameLast.value}
       Age: ${age.value}
       Gender: ${gender}
       Destination: ${destination}
       Dietary restrictions: ${diet}`);
 })