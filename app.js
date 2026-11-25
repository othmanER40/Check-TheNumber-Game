'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number'
// console.log(document.querySelector('.guess').value)
// document.querySelector('.guess').value = 23

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
    document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number 🙅‍♀️!!!';
  } else if (guess === secretNumber) {
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('.message').textContent = 'Correct number 🎉!!!';
    document.querySelector('body').style.backgroundColor = '#60b347';
  } else {
    score--;
    document.querySelector('.score').textContent = score;
    if (score >= 1) {
      document.querySelector('.message').textContent = 'Wrong number 😢!!!';
      if (guess > secretNumber) {
        document.querySelector('.message').textContent = 'Too high! 📈';
      } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = 'Too low! 📉';
      }
    } else {
      document.querySelector('.message').textContent = 'End Game';
    }
  }
});
