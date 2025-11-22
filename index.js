// Global variable to keep track of balance across all plays
let totalBalance = 0;
let totalRolls = 0;

// Main function that rolls the dice when button is clicked
function rollDice() {
    console.log("rollDice() function called!"); // DEBUG: Check if function runs

    // Roll two dice using the formula from the rubric
    let dice1Value = Math.floor(Math.random() * 6) + 1;
    let dice2Value = Math.floor(Math.random() * 6) + 1;

    console.log("Dice values:", dice1Value, dice2Value); // DEBUG: Check random values

    // Update the dice images
    updateDiceImages(dice1Value, dice2Value);

    // Calculate the sum
    let sum = dice1Value + dice2Value;

    // Determine win/loss/draw based on game rules
    let outcome = "";
    let moneyChange = 0;

    if (sum >= 9) {
        // Player wins
        moneyChange = 5;
        totalBalance += moneyChange;
        outcome = "You win, I pay you 5 dollars.";
    } else if (sum <= 5) {
        // Player loses
        moneyChange = -5;
        totalBalance += moneyChange;
        outcome = "You lose, you pay me 5 dollars.";
    } else {
        // Draw (sum is 6, 7, or 8)
        moneyChange = 0;
        outcome = "It's a draw, no money exchanged.";
    }

    // Increment total rolls
    totalRolls++;

    // Display the result (shows both current roll and overall game status)
    displayResult(dice1Value, dice2Value, sum, outcome);
}

// Function to update the dice images based on rolled values
function updateDiceImages(dice1Value, dice2Value) {
    // Use querySelectorAll to get all dice images (as required by rubric)
    let diceImages = document.querySelectorAll('img');

    // ⭐⭐⭐ CHANGE IMAGE FILE EXTENSION HERE ⭐⭐⭐
    // If using .png images instead of .svg, change ".svg" to ".png" below

    // Update first dice image
    diceImages[0].src = "images/dice" + dice1Value + ".svg";  // ⭐ CHANGE .svg to .png if needed ⭐

    // Update second dice image
    diceImages[1].src = "images/dice" + dice2Value + ".svg";  // ⭐ CHANGE .svg to .png if needed ⭐
}

// Function to display the result in the h3 element
// Shows BOTH the current dice result AND the overall game status
function displayResult(dice1, dice2, sum, outcome) {
    // Get the h3 element
    let resultElement = document.getElementById("result");

    // Build the result message with current roll
    let message = dice1 + " + " + dice2 + " is " + sum + " — " + outcome;

    // Add overall game status
    message += "<br><br>";
    message += "<strong>Overall Game:</strong><br>";
    message += "Total Rolls: " + totalRolls + "<br>";
    message += "Balance: $" + totalBalance;

    // Add color to balance based on value
    if (totalBalance > 0) {
        message += " <span style='color: green;'>(Winning!)</span>";
    } else if (totalBalance < 0) {
        message += " <span style='color: red;'>(Losing)</span>";
    }

    // Update innerHTML with the complete result
    resultElement.innerHTML = message;
}
