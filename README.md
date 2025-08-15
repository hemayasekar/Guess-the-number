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

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/guess-the-number.git





















Guess the Number Game

This project is a simple "Guess the Number" game built using HTML, CSS, and JavaScript. The goal of the game is to guess a randomly generated number between 1 and 20 within a limited number of tries. With each guess, feedback is given to help the player adjust their next guess, and the game ends when the correct number is guessed or when the player runs out of attempts.

Features

Random Number Generation:
On every game reset, a new random number between 1 and 20 is generated using JavaScript's Math.random() function.
Guessing Mechanism:
The player enters their guess in an input field, and when they hit the "Check" button, the game compares their guess to the hidden number.
If the guess is correct, a congratulatory message is displayed, the background changes color, and the player's score is updated.
If the guess is wrong, feedback is provided to indicate whether the guess was too high or too low, and the score is decremented.
Score and Highscore:
The player starts with a score of 20 points. Each wrong guess reduces the score by 1.
The player’s highest score is tracked during the session, and the highscore is updated if they win with a higher score than previous attempts.
Game Over Condition:
If the player runs out of points (score reaches 0), the game displays a "Game Over" message, and the background changes to signify the end of the game.
Play Again:
A "Play Again" button is provided to restart the game without refreshing the page. This resets the score, generates a new hidden number, and restores the default styling.
Technologies Used

HTML:
HTML forms the structure of the page, with essential elements like the heading, input field for guessing, buttons for submitting the guess and restarting the game, and containers for displaying messages and scores.
CSS:
Custom styles are applied to the game using CSS. The background is styled with gradient effects to change color based on the game state (win/loss).
A retro-styled font is used for a fun, arcade-like experience, and CSS animations bring subtle visual effects to the UI, such as changes in layout and color.
JavaScript:
The game logic is handled entirely through JavaScript. Event listeners capture the player's input and manage the game states (win, loss, guessing).
JavaScript dynamically updates the DOM to show messages, adjust the score, and modify the background and other UI elements.

Key Files:
index.html: Contains the structure of the webpage, including headings, buttons, and placeholders for dynamic elements like the score, highscore, and messages.
styles.css: Responsible for the visual design of the game, including background gradients, font choices, and layout styles.
script.js: The core logic for the game, handling input, feedback, score management, and UI updates.
Game Flow

Start Game:
A random number between 1 and 20 is generated.
The player inputs their guess and clicks the "Check" button.
Check Guess:
The guess is compared to the hidden number:
If the guess is correct, a success message is displayed, and the background color changes.
If the guess is too high or too low, feedback is provided, and the score is reduced.
Game Over:
If the player's score reaches 0 before guessing correctly, a "Game Over" message is displayed.
Play Again:
The player can restart the game by clicking the "Play Again" button, resetting all variables and starting with a new random number.

