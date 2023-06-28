
const rock = document.querySelector("#r");
const scissors = document.querySelector("#s");
const paper = document.querySelector("#p");

let userScore = 0;
let computerScore = 0;

let userScore_span= document.getElementById("user-score");
let computerScoreScore_span= document.getElementById("computer-score");

const scoreboard_div= document.querySelector(".scoreboard")
let result_div = document.querySelector(".result > p")

const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = (Math.floor(Math.random() * 3))
    return choices[randomNumber];
}
function converter(letter) {
    if (letter == "r") return "Rock";
    if (letter == "p") return "Paper"
    else return "Scissors"
    
}
function win(userChoice, computerChoice){
userScore++;
userScore_span.innerHTML = userScore;
computerScoreScore_span.innerHTML = computerScore;
result_div.innerHTML= converter(userChoice) + " beats " + converter(computerChoice) + " You win! 🔥 👍";

    }
function lose(userChoice, computerChoice) {
    computerScore++
    userScore_span.innerHTML = userScore;
    computerScoreScore_span.innerHTML = computerScore;
    result_div.innerHTML= converter(userChoice) + " loses to " + converter(computerChoice) + " You lose.... 💩 👎" 

}
function draw() {

userScore_span.innerHTML = userScore;
computerScoreScore_span.innerHTML = computerScore;
result_div.innerHTML="Tie!"   
}



function game(userChoice) {
    const computerChoice= getComputerChoice();
    console.log(computerChoice);
    console.log("User choice = " + userChoice);
    switch (userChoice + computerChoice) {
      case "rs":
      case "sp":
      case "pr":
        win(userChoice, computerChoice)
    
        break;
      case "sr":
      case "ps":
      case "rp":
        lose(userChoice, computerChoice);
        break;
      case "rr":
      case "ss":
      case "pp":
        draw();
        break;

      default:
        break;
    }

}

function main() {
    
rock_div.addEventListener('click', function () {
        game("r"); 
    })

paper_div.addEventListener('click', function(){
    game("p")
})

scissors_div.addEventListener('click', function(){
    game("s")
})

}
main()