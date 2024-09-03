const myDate = new Date();
const weekdayMessage = "Pas encore, c'est un jour de semaine.";
const weekendMessage = "C'est le weekend, profitez-en !";
const fridayEveningMessage = "C'est presque le weekend, tenez bon !";
const mondayMorningMessage = "C'est encore le weekend, dormez un peu plus.";

const currentDay = myDate.getDay();
const currentHour = myDate.getHours();

let message;

const isTesting = true;

if (isTesting) {
    const testDay = parseInt(prompt("Entrez un jour (0 = dimanche, 1 = lundi, ..., 6 = samedi) :"));
    const testHour = parseInt(prompt("Entrez une heure (0-23) :"));

    if (testDay === 0 || testDay === 6) {
        message = weekendMessage;
    } else if (testDay === 5 && testHour >= 17) {
        message = fridayEveningMessage;
    } else if (testDay === 1 && testHour < 9) {
        message = mondayMorningMessage;
    } else {
        message = weekdayMessage;
    }
} else {
    if (currentDay === 0 || currentDay === 6) {
        message = weekendMessage;
    } else if (currentDay === 5 && currentHour >= 17) {
        message = fridayEveningMessage;
    } else if (currentDay === 1 && currentHour < 9) {
        message = mondayMorningMessage;
    } else {
        message = weekdayMessage;
    }
}

console.log(message);
