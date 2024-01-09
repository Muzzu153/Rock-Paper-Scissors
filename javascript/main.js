let computerScore = 0;
let playerScore = 0;

// display winner of round 
const result = document.getElementById(`result`);

// stores scores for both player and computer and displays it with dom
const player = document.getElementById(`playerScore`);
const comp = document.getElementById(`compScore`);

// to highlight which choice computer selected 
const compRock = document.getElementById(`comp_rock`);
const compPaper = document.getElementById(`comp_paper`);
const compScissor = document.getElementById(`comp_scissor`);

// player buttons 
const playerRock = document.getElementById(`player_rock`)
const playerPaper = document.getElementById(`player_paper`)
const playerScissor = document.getElementById(`player_scissor`)

// displays a random choice out of the three
function getComputerChoice() {

    // the randomNumber gives any one number between 0-2 
    let randomNumber = Math.round(Math.random() * 2);

    // switch converts the number to choice accordingly
    let choice;
    switch (randomNumber) {
        case 0:
            choice = `rock`;
            break;

        case 1:
            choice = `paper`;
            break;
        case 2:
            choice = `scissor`;
            break;
    }
    return choice;
}


//Compares the result of getComputerChoice and  users input
function playRound(playerSelection) {

    //stores the result of getComputerChoice]
    let computerSelection = getComputerChoice();

    // highlights computer rcok div if computer selction is rock 
    if (computerSelection === `rock`) {
        compRock.setAttribute(`style`, `box-shadow: 2px 2px 2px #9d7463;
            border: #9d7463 solid 1px;
            border-radius: 8px;`)

        compPaper.removeAttribute(`style`);
        compScissor.removeAttribute(`style`);
    }

    // highlights computer paper div if computer selction is paper 
    else if (computerSelection === `paper`) {
        compPaper.setAttribute(`style`, `box-shadow: 2px 2px 2px #9d7463;
            border: #9d7463 solid 1px;
            border-radius: 8px;`)

        compScissor.removeAttribute(`style`);
        compRock.removeAttribute(`style`);
    }

    // highlights computer scissor div if computer selction is scissor
    else if (computerSelection === `scissor`) {
        compScissor.setAttribute(`style`, `box-shadow: 2px 2px 2px #9d7463;
            border: #9d7463 solid 1px;
            border-radius: 8px;`)

        compPaper.removeAttribute(`style`);
        compRock.removeAttribute(`style`);
    }

    // conditional statements that compares user input and computer's choice
    if ((playerSelection === `rock` && computerSelection === `scissor`) ||
        (playerSelection === `paper` && computerSelection === `rock`) ||
        (playerSelection === `scissor` && computerSelection === `paper`)) {

        result.textContent = `You won the round!! ${playerSelection} beats ${computerSelection}, good job`;
        playerScore++;
        player.textContent = `${playerScore}`;
        
        // ends round if player score reachers 5 
        if (playerScore === 5) {
            playerScore = 0;
            computerScore = 0;
            player.textContent = `${playerScore}`;
            comp.textContent = `${computerScore}`
            result.textContent = `Congratulations! You won!`;
        }
    }


    else if (playerSelection === computerSelection) {

        console.log(`Computer's choice:- ${computerSelection}`);
        console.log(`Score: Player = ${playerScore}, Computer = ${computerScore}`);
    }


    else if ((playerSelection === `rock` && computerSelection === `paper`) ||
        (playerSelection === `scissor` && computerSelection === `rock`) ||
        (playerSelection === `paper` && computerSelection === `scissor`)) {

        result.textContent = `You lost the round! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
        comp.textContent = `${computerScore}`

        // ends round if the computer score reaches 5 
        if (computerScore == 5) {
            playerScore = 0;
            computerScore = 0;
            player.textContent = `${playerScore}`;
            comp.textContent = `${computerScore}`
            result.textContent = `Too bad you lost this game`;
        }
    }


    else {
        result = `Enter a valid option!!`;
    }

    return result;

}



playerRock.addEventListener(`click`, () => {
    playRound(`rock`);
});
playerPaper.addEventListener(`click`, () => {
    playRound(`paper`);
});
playerScissor.addEventListener(`click`, () => {
    playRound(`scissor`);
});
