function computerPlay() {
    const options = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(Math.random() * 3);
    return options[random];
}

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();
    if (player === computer) {
        return "IT'S A DRAW!";
    } else if ((player === 'rock' && computer === 'scissors') || (player === 'paper' && computer === 'rock') || (player === 'scissors' && computer === 'rock')) {
        return `YOU WIN! ${player.toUpperCase()} BEATS ${computer.toUpperCase()}`;
    } else {
        return `YOU LOSE! ${computer.toUpperCase()} BEATS ${player.toUpperCase()}`;
    }
}

function game() {
    let userScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Please input your selection (choose among Rock, Paper and Scisscors)");
        const result = playRound(playerChoice, computerPlay());
        console.log(result);
        if (result.indexOf('WIN') !== -1) {
            userScore++;
        } else if (result.indexOf('LOSE') !== -1) {
            computerScore++
        }
    }

    if (userScore > computerScore) {
        console.log(`AFTER 5 ROUNDS, YOU WIN ${userScore} TO ${computerScore}`);
    } else if (userScore < computerScore) {
        console.log(`AFTER 5 ROUNDS, YOU LOSE ${userScore} TO ${computerScore}`);
    } else {
        console.log(`AFTER 5 ROUNDS, YOU DRAW ${userScore} TO ${computerScore}`)
    }
};