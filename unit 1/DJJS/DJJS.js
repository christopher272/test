const square = document.querySelector(".square")

square.addEventListener("mouseover", function() {
    square.style.background= "blue"
    });

    square.addEventListener("mousedown", function() {
        square.style.background= "red"
        });
    square.addEventListener("mouseup", function() {
        square.style.background= "yellow"
        });
    square.addEventListener("dblclick", function() {
        square.style.background= "green"
        });
 window.addEventListener("wheel", function() {
        square.style.background= "orange"
        });
        window.addEventListener("keydown", colorChange);
        function colorChange(e) {
            console.log(e.keyCode)
        if (e.keyCode === 66) {
            square.style.background= "blue"
        }
        else if (e.keyCode === 82) {
            square.style.background= "red" 
        }
        else if (e.keyCode === 89) {
            square.style.background= "yellow"
        }
        else if (e.keyCode === 71) {
            square.style.background= "green"
        }
        else if (e.keyCode === 79) {
            square.style.background= "orange"
        }
        }