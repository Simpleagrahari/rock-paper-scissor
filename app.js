let userscore = 0;
let compscore = 0;

let userpara = document.querySelector("#user-score")
let compara = document.querySelector("#comp-score")


const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")


const gencompchoice = () => {
    const option = ["rock", "scissors", "paper"]
    const idx = Math.floor(Math.random() * 3)
    return option[idx]
}

const drawgame = () => {
    console.log("The game has been draw")
    msg.innerText = "Game draw ! keep trying "
    msg.style.backgroundColor = "purple"
}

const showWinner = (userwin) => {
    if (userwin) {
        userscore++;
        userpara.innerText = userscore;
        console.log("You Won")
        msg.innerText = "You won"
        msg.style.backgroundColor = "green"
    } else {
        compscore++;
        compara.innerText = compscore;
        console.log("you loose")
        msg.innerText = "you loose!"
        msg.style.backgroundColor = "red"
    }
}


const playgame = (userchoice) => {
    console.log("choices has been clicked =", userchoice)
    const comchoice = gencompchoice();
    console.log("computer choice has been clicked = ", comchoice)


    if (userchoice === comchoice) {
        drawgame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            //paper,scissors
            userwin = comchoice === "paper" ? false : true
        } else if (userchoice === "paper") {
            //scissors,rock
            userwin = comchoice === "scissors" ? false : true
        } else {
            //rock ,paper
            userwin = comchoice === "rock" ? false : true
        }
        showWinner(userwin);
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
        playgame(userchoice);
    })
})
  
  