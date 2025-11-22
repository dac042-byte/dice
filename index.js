// Global variable to keep track of balance across all plays
let totalBalance = 0;

// Main function that starts the game when button is clicked
function startGame() {
    // Prompt user for number of plays
    let numberOfPlays = prompt("How many plays?");

    // Convert input to a number
    numberOfPlays = parseInt(numberOfPlays);

    // Validate input
    if (isNaN(numberOfPlays) || numberOfPlays <= 0) {
        alert("Please enter a valid number greater than 0!");
        return;
    }

    // Reset balance for new game session
    totalBalance = 0;

    // Play the game the specified number of times
    for (let i = 0; i < numberOfPlays; i++) {
        playOnce();
    }

    // Update the balance display on the page
    updateBalanceDisplay();
}

// Function to play one round of the dice game
function playOnce() {
    // Roll two dice using the formula from the rubric
    let dice1Value = Math.floor(Math.random() * 6) + 1;
    let dice2Value = Math.floor(Math.random() * 6) + 1;

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

    // Display the result
    displayResult(dice1Value, dice2Value, sum, outcome);
}

// Function to update the dice images based on rolled values
function updateDiceImages(dice1Value, dice2Value) {
    // Use querySelectorAll to get all dice images (as required by rubric)
    let diceImages = document.querySelectorAll('img');

    // Update first dice image
    // ⚠️ Make sure you have images/dice1.png through images/dice6.png
    diceImages[0].src = "images/dice" + dice1Value + ".png";

    // Update second dice image
    diceImages[1].src = "images/dice" + dice2Value + ".png";
}

// Function to display the result in the h3 element
function displayResult(dice1, dice2, sum, outcome) {
    // Get the h3 element
    let resultElement = document.getElementById("result");

    // Update innerHTML with the result
    resultElement.innerHTML = dice1 + " + " + dice2 + " is " + sum + " — " + outcome;
}

// Function to update the balance display
function updateBalanceDisplay() {
    let balanceElement = document.getElementById("balance");
    balanceElement.textContent = totalBalance;

    // Change color based on balance
    if (totalBalance > 0) {
        balanceElement.style.color = "green";
    } else if (totalBalance < 0) {
        balanceElement.style.color = "red";
    } else {
        balanceElement.style.color = "#007bff";
    }
}
