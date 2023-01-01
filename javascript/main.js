// displays a random choice out of the three
function getComputerChoice() {

    // the randomNumber gives any one number between 0-2 
    let randomNumber = Math.round(Math.random() * 2);

    // switch converts the number to choice accordingly
    let choice;
    switch (randomNumber) {
        case 0:
            choice = `Rock`;
            break;

        case 1:
            choice = `Paper`;
            break;
        case 2:
            choice = `Scissors`;
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

    // store and display the games result
    let result;

    // conditional statements that compares user input and computer's choice
    if (toLowerP1ayerSelection === `rock` && computerSelection === `Scissors`) {
        console.log("Computer's choice:- Scissors");
        result = `You won! Rock beats Scissors, good job`;
    }
    else if (toLowerP1ayerSelection === `paper` && computerSelection === `Rock`) {
        console.log("Computer's choice:- Rock");
        result = `You won! Paper beats Rock good job`;
    }

    else if (toLowerP1ayerSelection === `scissors` && computerSelection === `Paper`) {
        console.log("Computer's choice:- Paper");
        result = `You won! Scissors beat Paper, goof job `;
    }



    else if (toLowerP1ayerSelection === `rock` && computerSelection === `Rock`) {
        console.log("Computer's choice:- Rock");
        result = `It's a tie, there's still chances remaining`;
    }
    else if (toLowerP1ayerSelection === `paper` && computerSelection === `Paper`) {
        console.log("Computer's choice:- Paper");
        result = `It's a tie, there's still chances remaining`;
    }
    else if (toLowerP1ayerSelection === `scissors` && computerSelection === `Scissors`) {
        console.log("Scissors");
        result = `It's a tie, there's still chances remaining`;
    }



    else if (toLowerP1ayerSelection === `rock` && computerSelection === `Paper`) {
        console.log("Computer's choice:- issors");
        result = `You lose! Scissors beats Rock`;
    }
    else if (toLowerP1ayerSelection === `scissors` && computerSelection === `Rock`) {
        console.log("Computer's choice:- Rock");
        result = `You Lose! Rock beats Scissors`;
    }
    else if (toLowerP1ayerSelection === `paper` && computerSelection === `scissors`) {
        console.log("Computer's choice:- Paper");
        result = `You Lose! Rock beats Scissors`;
    }
    


    else {
        result = `Enter a valid option!!`;
    }


    return result;
}




