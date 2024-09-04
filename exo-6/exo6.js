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
    players: [],
    games: [],
    addPlayer(firstName, lastName, age) {
        this.players.push({ firstName, lastName, age });
    },
    addGame(opponent, teamPoints, opponentPoints) {
        this.games.push({ opponent, teamPoints, opponentPoints });
    }
};

// Joueurs et matchs
team.addPlayer("Erling", "Haaland", 23);
team.addPlayer("Kevin", "De Bruyne", 32);
team.addPlayer("Phil", "Foden", 24);
team.addPlayer("Rúben", "Dias", 27);
team.addPlayer("Jack", "Grealish", 28);
team.addGame("Liverpool", 3, 1);
team.addGame("Arsenal", 4, 2);
team.addGame("Chelsea", 2, 0);

// Ajouter joueur et match
team.addPlayer("Bernardo", "Silva", 29);
team.addGame("Tottenham", 5, 2);

// Somme points équipe
const totalTeamPoints = team.games.reduce((total, game) => total + game.teamPoints, 0);
console.log(`Total des points de Manchester City: ${totalTeamPoints}`);

// Moyenne des points adversaires
const totalOpponentPoints = team.games.reduce((total, game) => total + game.opponentPoints, 0);
const averageOpponentPoints = totalOpponentPoints / team.games.length;
console.log(`Moyenne des points des adversaires: ${averageOpponentPoints.toFixed(2)}`);

// Joueur le plus âgé
const oldestPlayer = team.players.reduce((oldest, player) => {
    return player.age > oldest.age ? player : oldest;
}, team.players[0]);
console.log(`Le joueur le plus âgé est: ${oldestPlayer.firstName} ${oldestPlayer.lastName}, âge: ${oldestPlayer.age}`);

// Ordre alphabétique
team.players.sort((a, b) => a.lastName.localeCompare(b.lastName));
console.log("Joueurs de Manchester City triés par ordre alphabétique:");
console.log(team.players);
