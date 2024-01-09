let playerScore = 0;
let computerScore = 0;


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

// display winner of round 
const result = document.getElementById(`result`);


// to get player choice when they click on any button 
document.addEventListener("click", gameSelectionListener);
// See if the click was on a game selection button (can't apply directly on button as div initially hidden)
function gameSelectionListener(event) {
    let element = event.target;
    console.log(event.target);
    let rock = `rock`;
    let paper = `paper`;
    let scissor = `scissor`;
    if (element.classList.contains(`leftSide_choice`) && element.id === (`player_rock`)) {
        playRound(rock);
        console.log(`submitted rock`);
    }
    else if (element.classList.contains(`leftSide_img`) && element.id === (`playerRock_img`)) {
        playRound(rock);
        console.log(`submitted rock`);
    }
    else if (element.classList.contains(`leftSide_choice`) && element.id === (`player_paper`)) {
        playRound(paper);
        console.log(`submitted paper`);
    }
    else if (element.classList.contains(`leftSide_img`) && element.id === (`playerPaper_img`)) {
        playRound(paper);
        console.log(`submitted paper`);
    }
    else if (element.classList.contains(`leftSide_choice`) && element.id === (`player_scissor`)) {
        playRound(scissor);
        console.log(`submitted scissor`);
    }
    else if (element.classList.contains(`leftSide_img`) && element.id === (`playerScisssor_img`)) {
        playRound(scissor);
        console.log(`submitted scissor`);
    }

}

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


//function for playing a round of game
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
    
    

    let playerSelectionString = String(playerSelection);
    // conditional statements that compares user input and computer's choice
    if ((playerSelectionString === `rock` && computerSelection === `scissor`) ||
    (playerSelectionString === `paper` && computerSelection === `rock`) ||
    (playerSelectionString === `scissor` && computerSelection === `paper`)) {
        
        
        console.log(`Computer's choice:- ${computerSelection}`);
        result.textContent = `You won the round!! ${playerSelectionString} beats ${computerSelection}, good job`;
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


    else if (playerSelectionString === computerSelection) {

        console.log(`Computer's choice:- ${computerSelection}`);
        result.textContent = `It's a tie, there's still chances remaining`;
        console.log(`Score: Player = ${playerScore}, Computer = ${computerScore}`);
    }
    
    
    else if ((playerSelectionString === `rock` && computerSelection === `paper`) ||
    (playerSelectionString === `scissor` && computerSelection === `rock`) ||
    (playerSelectionString === `paper` && computerSelection === `scissor`)) {
        
        console.log(`Computer's choice:- ${computerSelection}`);
        result.textContent = `You lost the round! ${computerSelection} beats ${playerSelectionString}`;
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
    
}

// event listners for button which calls playRound2 fucntion 
playerRock.addEventListener(`click`, playRound);
playerPaper.addEventListener(`click`, playRound);
playerScissor.addEventListener(`click`, playRound);