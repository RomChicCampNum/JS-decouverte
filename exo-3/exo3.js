// you can write js here
console.log('exo-3');

var playerInput = prompt("Your choice ( rock, paper, scissors) ?")

function getPlayerChoice(playerInput) {
    playerInput = playerInput.toLowerCase(); // Convertit l'entrée en minuscules

    // Vérifie si l'entrée est l'une des options valides
    if (playerInput === 'rock' || playerInput === 'paper' || playerInput === 'scissors') {
        return playerInput;
    } else if (playerInput === 'bomb') {
        // Ajoute le "cheat code"
        return playerInput;
    } else {
        console.error("Invalid choice! Please choose 'rock', 'paper', or 'scissors'.");
    }
}

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3); // Génère un nombre entre 0 et 2

    switch(randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function findWinner(playerChoice, computerChoice) {
    if (playerChoice === 'bomb') {
        return 'Won'; // "Cheat code" : si l'utilisateur entre 'bomb', il gagne automatiquement
    }

    if (playerChoice === computerChoice) {
        return 'Tied'; // Égalité
    }

    if (playerChoice === 'rock') {
        if (computerChoice === 'scissors') {
            return 'Won';
        } else {
            return 'Lost';
        }
    }

    if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'Won';
        } else {
            return 'Lost';
        }
    }

    if (playerChoice === 'scissors') {
        if (computerChoice === 'paper') {
            return 'Won';
        } else {
            return 'Lost';
        }
    }
}

function playGame() {
    const uChoice = getPlayerChoice(playerInput); // Récupère le choix de l'utilisateur
    const computerChoice = getComputerChoice(); // Récupère le choix de l'ordinateur

    console.log(`You chose: ${uChoice}`);
    console.log(`The computer chose: ${computerChoice}`);

    const result = findWinner(uChoice, computerChoice); // Détermine le gagnant
    console.log(`The result is: ${result}`);
}

playGame(); // Lance le jeu
