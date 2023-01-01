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

    // store and display the games result
    let result;

    // conditional statements that compares user input and computer's choice
    if ((toLowerP1ayerSelection === `rock` && computerSelection === `scissors`) || 
        (toLowerP1ayerSelection === `paper` && computerSelection === `rock`) || 
        (toLowerP1ayerSelection === `scissors` && computerSelection === `paper`)) {

    console.log(`Computer's choice:- ${computerSelection}`);
     result = `You won! ${toLowerP1ayerSelection} beats ${computerSelection} good job`;
    }
    


    else if (toLowerP1ayerSelection === computerSelection) {

        console.log(`Computer's choice:- ${computerSelection}`);
        result = `It's a tie, there's still chances remaining`;
    }


    else if ((toLowerP1ayerSelection === `rock` && computerSelection === `paper`) ||
             (toLowerP1ayerSelection === `scissors` && computerSelection === `rock`) ||
             (toLowerP1ayerSelection === `paper` && computerSelection === `scissors`)) {
       
     console.log(`Computer's choice:- ${computerSelection}`);
     result = `You Lose! ${computerSelection} beats ${toLowerP1ayerSelection}`;
    }


    else {
        result = `Enter a valid option!!`;
    }

    console.log(toLowerP1ayerSelection);

    return result;
}




