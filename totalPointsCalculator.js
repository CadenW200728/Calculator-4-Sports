//Input the amount of wins, losses, and overtime losses from a hypothetical or current National Hockey League team's season into the variables.
var numberOfWins = 0;
var numberOfLosses = 0;
var numberOfOvertimeLosses = 0;
console.log((((("Record: " + numberOfWins) + " - ") + numberOfLosses) + " - ") + numberOfOvertimeLosses);
calculateTotalPoints();
//Function "calculateTotalPoints" will calculate the sum of the points that the record provides.
function calculateTotalPoints() {
var winsValue = 2 * numberOfWins;
var totalPoints = (winsValue + numberOfOvertimeLosses);
console.log("Total Points: " + totalPoints);
}