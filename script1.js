// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question





//Countdown timer
const startingMinutes =10;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown()  {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;

}





// WHEN I answer a question
// THEN I am presented with another question






// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock






// WHEN all questions are answered or the timer reaches 0
// THEN the game is over





// WHEN the game is over
// THEN I can save my initials and score