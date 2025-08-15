# Guess the Number Game

A simple **"Guess the Number"** game built using **HTML, CSS, and JavaScript**.  
The goal of the game is to guess a randomly generated number between **1 and 20** within a limited number of tries.  
With each guess, feedback is given to help the player adjust their next guess, and the game ends when the correct number is guessed or when the player runs out of attempts.

## Features

- **Random Number Generation**  
  - On every game reset, a new random number between **1 and 20** is generated using JavaScript’s `Math.random()`.

- **Guessing Mechanism**  
  - The player enters their guess in an input field.  
  - Clicking the **Check** button compares the guess to the hidden number.  
  - Correct guess → congratulatory message, background color change, and score update.  
  - Wrong guess → feedback (too high/too low), and score is decremented.

- **Score and Highscore**  
  - Initial score: **20 points**.  
  - Each wrong guess reduces the score by **1** point.  
  - Highscore is tracked during the session and updated if the player wins with a higher score than before.

- **Game Over Condition**  
  - When the score reaches **0**, a “Game Over” message is displayed and the background changes to reflect the loss.

- **Play Again**  
  - Clicking the **Play Again** button restarts the game without refreshing the page.  
  - Resets score, generates a new hidden number, and restores the default styling.

## Technologies Used

- **HTML** – Structure of the page, including headings, input field, buttons, and dynamic message and score containers.  
- **CSS** – Visual styling: gradient backgrounds for different game states, retro-styled fonts, and subtle animations.  
- **JavaScript** – Core logic: generating the random number, handling guesses, score and highscore updates, managing UI feedback.

## Key Files

| File         | Description                                                             |
|--------------|-------------------------------------------------------------------------|
| `index.html` | Contains the basic structure of the webpage—heading, input, buttons, and placeholders for scores and messages. |
| `styles.css` | Defines visual design—background gradients, fonts, layout, and animations. |
| `script.js`  | Manages game logic: random number generation, guess checking, score logic, and DOM updates. |

## Game Flow

1. **Start Game**  
   A random number between 1 and 20 is generated. Player inputs a guess and clicks **Check**.

2. **Check Guess**  
   - If correct → display a success message, change background color, update score.  
   - If wrong → show “too high” or “too low,” and reduce score by 1.

3. **Game Over**  
   If the score hits 0 before guessing correctly → display "Game Over" message and change the background.

4. **Play Again**  
   Player clicks **Play Again** → resets the game: score is reset, a new number is generated, and styling returns to default.

