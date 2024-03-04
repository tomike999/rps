const playerChoose = document.querySelector("#playerOne");
const computerChoose = document.querySelector("#computer");
const yourResult = document.querySelector("#result");
const buttonChoose = document.querySelectorAll(".btns");

let player
let computer
let result

buttonChoose.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    getRandom()
    playerChoose.textContent = `Hráč: ${player}` 
    computerChoose.textContent = `Súper: ${computer}` 
    yourResult.textContent = winner();
} ))

//víťaz
function winner(){
    if(player == computer){
        return "Remíza"
    } else if(computer == "Nožnice"){
        return(player == "Kameň") ? "Vyhral si" : "Prehral si"
    } else if(computer == "Papier"){
        return(player == "Nožnice") ? "Vyhral si" : "Prehral si"
    } else if(computer == "Kameň"){
        return(player == "Papier") ? "Vyhral si" : "Prehral si"
    }
}

function getRandom()  {
    const randomResult = Math.floor(Math.random() * 3) + 1;

    switch(randomResult){
        case 1:
            computer = "Kameň"
            break
        case 2:
            computer = "Papier"
            break
        case 3:
            computer = "Nožnice"
            break    
    }
  }



