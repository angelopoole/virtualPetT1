document.addEventListener('DOMContentLoaded', event => {
  /*----------------DOM-ELEMENTS---------------*/
  const petAge = document.getElementById('pet-age');
  const petHunger = document.getElementById('pet-hunger');
  const petHealth = document.getElementById('pet-health');
  const petHappiness = document.getElementById('pet-happiness');
  const gameOverModal = document.getElementById('game-over-modal');
  const virgilContainer = document.getElementById('pet-image');

  // buttons
  const resetButton = document.getElementById('reset-button');
  const cleanButton = document.getElementById('clean');
  const feedButton = document.getElementById('feed');
  const playButton = document.getElementById('play');

  let age = 0;
  let health = 100;
  let hunger = 0;
  let happiness = 100;
  const gameOver = () => {
    gameOverModal.style.display = 'block';
  };

  const resetGame = () => {
    age = 0;
    health = 100;
    hunger = 0;
    happiness = 100;
  };

  const randomNumberBetween = (high, low) =>
    Math.floor(Math.random() * (high + low) + low);

  const renderStatChanges = () => {
    let mood;
    if (happiness > 50) {
      mood = 'virgil-neutral';
    } else if (happiness <= 50 && happiness > 20) {
      mood = 'virgil-angry';
    } else {
      mood = 'virgil-sad';
    }

    petAge.innerHTML = `<li> ${age} days old</li>`;
    petHunger.innerHTML = `<li> hunger : ${hunger}</li>`;
    petHealth.innerHTML = `<li> health : ${health}</li>`;
    petHappiness.innerHTML = `<li> happiness : ${happiness}</li>`;
    virgilContainer.innerHTML = `<img src="./src/images/${mood}.png" />`;
  };

  // and event listeners
  resetButton.addEventListener('click', () => {
    gameOverModal.style.display = 'none';
    resetGame();
  });

  feedButton.addEventListener('click', () => {
    hunger -= randomNumberBetween(25, 5);
    if (hunger < 0) {
      hunger = 0;
    }
  });

  cleanButton.addEventListener('click', () => {
    health += randomNumberBetween(10, 2);
  });

  playButton.addEventListener('click', () => {
    happiness += randomNumberBetween(15, 10);
  });

  function counter() {
    setInterval(() => {
      age += 1;
      hunger += 1;
      health -= 5;
      happiness -= Math.floor(Math.random() * (5 + 2) + 2);
      renderStatChanges();
      if (health <= 0) {
        gameOver();
      }
    }, 1000);
    // console.log('here');
  }

  counter();
  // gameOver();
});
