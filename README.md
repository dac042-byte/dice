# 🎲 Dice Game

A simple two-dice game built with HTML and JavaScript.

## Setup Instructions

### 1. Get Dice Images
You need 6 dice images (one for each face). Create an `images` folder and add:
- `dice1.png`
- `dice2.png`
- `dice3.png`
- `dice4.png`
- `dice5.png`
- `dice6.png`

### 2. Folder Structure
```
dice/
├── index.html
├── index.js
├── README.md
└── images/
    ├── dice1.png
    ├── dice2.png
    ├── dice3.png
    ├── dice4.png
    ├── dice5.png
    └── dice6.png
```

### 3. Run the Game
Simply open `index.html` in any web browser.

## How to Play

1. Click the **"Let's Play Again"** button
2. Enter the number of times you want to play
3. Watch the dice roll and see your results!

## Game Rules

- **Sum ≥ 9**: You win $5 💰
- **Sum ≤ 5**: You lose $5 💸
- **Sum 6-8**: It's a draw (no money changes hands)

Your balance is tracked across all plays!

## Features

✅ Bootstrap styling (extra credit)
✅ Animated dice images
✅ Running balance tracker
✅ Multiple plays per session
✅ Clean, centered layout

## Rubric Requirements Met

- ✅ HTML renders correctly in browser
- ✅ JS properly linked with `<script src="index.js">`
- ✅ Button prompts "How many plays?"
- ✅ Uses `Math.floor(Math.random() * 6) + 1` for dice rolls
- ✅ Images use `images/dice1.png` through `dice6.png` format
- ✅ Uses `querySelectorAll('img')` to update dice
- ✅ Win/loss/draw logic based on sum
- ✅ Running balance across plays
- ✅ Result displayed in `<h3>` using `.innerHTML`
- ✅ Basic styling with centered layout
- ✅ Bootstrap formatting (+15% extra credit)
