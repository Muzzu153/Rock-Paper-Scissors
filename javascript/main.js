let computerScore = 0;
let playerScore = 0;


// store and display the games result
let result = " ";


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
            choice = `scissors`;
            break;
    }
    return choice;
}


//Compares the result of getComputerChoice and  users input
function playRound() {

    //prompt asks user to enter a choice between the three
    const playerSelection = prompt("Enter your choice", " ")  //first we store it in
    const toLowerP1ayerSelection = playerSelection.toLowerCase(); //converts choice entered by user to Lower case for comparison

    //stores the result of getComputerChoice]
    const computerSelection = getComputerChoice();

    // conditional statements that compares user input and computer's choice
    if ((toLowerP1ayerSelection === `rock` && computerSelection === `scissors`) ||
        (toLowerP1ayerSelection === `paper` && computerSelection === `rock`) ||
        (toLowerP1ayerSelection === `scissors` && computerSelection === `paper`)) {

        console.log(`Computer's choice:- ${computerSelection}`);
        result = `You won! ${toLowerP1ayerSelection} beats ${computerSelection} good job`;
        console.log(`Score: Player = ${playerScore += 1}, Computer = ${computerScore}`);
    }


    else if (toLowerP1ayerSelection === computerSelection) {

        console.log(`Computer's choice:- ${computerSelection}`);
        result = `It's a tie, there's still chances remaining`;
        console.log(`Score: Player = ${playerScore}, Computer = ${computerScore}`);
    }


    else if ((toLowerP1ayerSelection === `rock` && computerSelection === `paper`) ||
        (toLowerP1ayerSelection === `scissors` && computerSelection === `rock`) ||
        (toLowerP1ayerSelection === `paper` && computerSelection === `scissors`)) {

        console.log(`Computer's choice:- ${computerSelection}`);
        result = `You Lose! ${computerSelection} beats ${toLowerP1ayerSelection}`;
        console.log(`Score: Player = ${playerScore}, Computer = ${computerScore += 1}`);
    }


    else {
        result = `Enter a valid option!!`;
    }

    return result;

}

//Function to start the game
// This functions calls the playRound() function to start the game and end it when either the player or the computer reaches the score of 5
function game() {

    //for loop that calls the playRound() function and breaks when either of them reaches the score of 5 
    for (; ;) {
        console.log(playRound());
        if (computerScore === 5 || playerScore === 5) break;
        
    }

    //when computer's score reaches 5 this resets the both scores to 0 and displays the result
    if (computerScore == 5) {
        playerScore = 0;
        computerScore = 0;
        return result = `Too bad you lost this game`;
    }

    //when player's score reaches 5 this resets the both scores to 0 and displays the result
    else if (playerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        return result = `Congratulations! You won!`;
    }

} 
