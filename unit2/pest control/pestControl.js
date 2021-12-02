const form = document.tally
form.addEventListener('submit',(event)  => {
    event.preventDefault()
    const bob = form.bobomb.value
    const cheep = form.cheep.value
    const goomba = form.goomba.value
    const oomba = document.createElement('h2')
    const creep = document.createElement('h2')
    const boom = document.createElement('h2')
    const total = document.createElement('h1')
    const omb = bob * 7
    const eep = cheep * 11
    const roomba = goomba * 5
    const totally = roomba - - omb - - eep 
    oomba.textContent = ("Goomba total = " + goomba + " x 5 coins = " +roomba + " coins")
    document.getElementsByTagName("body")[0].append(oomba)
    boom.textContent = ("Bob-omb total = " + bob + " x 7 coins = " + omb + " coins")
    document.getElementsByTagName("body")[0].append(boom)
    creep.textContent = ("Cheep cheep total = " + cheep + " x 11 coins = " + eep + " coins")
    document.getElementsByTagName("body")[0].append(creep)
    total.textContent = ("Total = " + totally + " coins" )
    document.getElementsByTagName("body")[0].append(total)
}) 
