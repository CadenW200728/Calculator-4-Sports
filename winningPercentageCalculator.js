//Input the amount of wins, losses, and ties from a hypothetical or current sports team's season into the variables.
var numberOfWins = 0;
var numberOfLosses = 0;
var numberOfTies = 0;
var average = 0;
console.log(((("Record: " + numberOfWins) + " - ") + numberOfLosses + " - ") + numberOfTies);
calculateWinningPercentage();
//Function "calculateWinningPercentage" will calculate the average of the inputted record (rounded to the thousandth).
function calculateWinningPercentage() {
var tiesValue = 0.5 * numberOfTies;
var gamesPlayed = (numberOfWins + tiesValue) + numberOfLosses;
average = (numberOfWins + tiesValue) / gamesPlayed;
console.log("Winning Percentage: " + Math.round(average * 1000) / 1000);
}