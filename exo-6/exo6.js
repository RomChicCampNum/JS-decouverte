// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe
console.log(joeInfo.cars.length);

// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.

joeInfo.bathrooms = 1;  // Mettre à jour le nombre de salles de bain
console.log(joeInfo.bathrooms);  // Afficher la nouvelle valeur

// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information.

joeInfo.garage = true;  // Modifier la valeur de 'garage' à true
console.log(joeInfo.garage);  // Afficher la nouvelle valeur du garage

// Partie 2

//Équipe de Manchester City (Football)
const team = {
    players: [
        { firstName: "Kevin", lastName: "De Bruyne", age: 32 },
        { firstName: "Erling", lastName: "Haaland", age: 23 },
        { firstName: "Phil", lastName: "Foden", age: 24 },
        { firstName: "Ruben", lastName: "Dias", age: 26 },
    ],
    games: [
        { opponent: "Arsenal", teamPoints: 3, opponentPoints: 1 },
        { opponent: "Liverpool", teamPoints: 2, opponentPoints: 2 },
        { opponent: "Manchester United", teamPoints: 1, opponentPoints: 0 },
    ],
    addPlayer: function(firstName, lastName, age) {
        this.players.push({ firstName: firstName, lastName: lastName, age: age });
    },
    addGame: function(opponent, teamPoints, opponentPoints) {
        this.games.push({ opponent: opponent, teamPoints: teamPoints, opponentPoints: opponentPoints });
    }
};

// Ajout d'un nouveau joueur
team.addPlayer("Jack", "Grealish", 28);

// Calcul de la somme des points de l'équipe
function calculateTotalTeamPoints(games) {
    return games.reduce(function(total, game) {
        return total + game.teamPoints;
    }, 0);
}

const totalTeamPoints = calculateTotalTeamPoints(team.games);
console.log("Total des points de Manchester City: " + totalTeamPoints);

// Calcul de la moyenne des points des adversaires
function calculateAverageOpponentPoints(games) {
    const totalOpponentPoints = games.reduce(function(total, game) {
        return total + game.opponentPoints;
    }, 0);
    return totalOpponentPoints / games.length;
}

const averageOpponentPoints = calculateAverageOpponentPoints(team.games);
console.log("Moyenne des points des adversaires: " + averageOpponentPoints.toFixed(2));

// Trouver le joueur le plus âgé
function findOldestPlayer(players) {
    return players.reduce(function(oldest, player) {
        return player.age > oldest.age ? player : oldest;
    }, players[0]);
}

const oldestPlayer = findOldestPlayer(team.players);
console.log("Le joueur le plus âgé est: " + oldestPlayer.firstName + " " + oldestPlayer.lastName);

// Tri des joueurs par ordre alphabétique
function sortPlayersAlphabetically(players) {
    return players.sort(function(a, b) {
        if (a.lastName < b.lastName) {
            return -1;
        }
        if (a.lastName > b.lastName) {
            return 1;
        }
        return 0;
    });
}

const sortedPlayers = sortPlayersAlphabetically(team.players);
console.log("Joueurs triés par ordre alphabétique:", sortedPlayers);

