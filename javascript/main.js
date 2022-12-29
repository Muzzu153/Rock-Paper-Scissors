// displays a random choice out of the three
function getComputerChoice() {

    // the randomNumber gives any one number between 0-2 
    let randomNumber = Math.round(Math.random() * 2);

    // switch converts the number to choice accordingly
    switch (randomNumber) {
        case 0:
            console.log("Rock");
            break;

        case 1:
            console.log("Paper");
            break;
        case 2:
            console.log("Scissors");
            break;
    }
}

getComputerChoice();

