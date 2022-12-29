function getComputerChoice() {
    let randomNumber = Math.round(Math.random() * 2);
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
