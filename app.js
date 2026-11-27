'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number'
// console.log(document.querySelector('.guess').value)
// document.querySelector('.guess').value = 23

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No number 🙅‍♀️!!!');
  } else if (guess === secretNumber) {
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.number').textContent = secretNumber;

    displayMessage('Correct number 🎉!!!');
    document.querySelector('body').style.backgroundColor = '#60b347';
  } else {
    score--;
    document.querySelector('.score').textContent = score;
    if (score >= 1) {
      displayMessage('Wrong number 😢!!!');
      if (score > 1) {
        document.querySelector('.message').textContent =
          guess > secretNumber ? 'Too high! 📈' : 'Too low! 📉';
      } else {
        displayMessage('End Game');
        document.querySelector('.score').textContent = 0;
      }
    }
  }
});
