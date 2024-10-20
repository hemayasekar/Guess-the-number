'use strict';

let hidden_no = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = (message) => {
    document.querySelector(".message").textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
    const guessno = Number(document.querySelector('.guess').value);
    // console.log(guessno, typeof(guessno));

    if(!guessno){
        displayMessage( "❌ Opps! no number");
    }
    else if(score <= 0){
        displayMessage( "😔 Game Over! You lost!");
        document.querySelector('body').style.backgroundImage = "radial-gradient(#d77d7d,#e52828)";

    }
    else if(hidden_no === guessno && score > 0){
        displayMessage( "🏆 Correct Guess! You Win!!");
        document.querySelector('.number').textContent = hidden_no;
        document.querySelector('body').style.backgroundImage = "radial-gradient(#dbd543,#3bbd1b)";
        document.querySelector('.number').style.width = "30rem";
        if(score > highscore){
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    }

    else if(guessno != hidden_no && score > 0){
        let x = guessno > hidden_no ? "📈 The guessed number is high!" : "📉 The guessed number is low!";
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = x; 
    }
});


document.querySelector(".again").addEventListener('click', function(){
    displayMessage("Start guessing...");
    score = 20;
    hidden_no = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.number').style.width = "15rem";
    document.querySelector('.guess').value = "";
    document.querySelector('body').style.backgroundImage = "radial-gradient(#2a3744,#0d1217)";

});

