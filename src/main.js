document.addEventListener('DOMContentLoaded', event => {
  /*----------------DOM-ELEMENTS---------------*/
  const petAge = document.getElementById('pet-age');
  const petHunger = document.getElementById('pet-hunger');
  const petHealth = document.getElementById('pet-health');
  const petHappiness = document.getElementById('pet-happiness');

  function counter() {
    let age = 0;
    let health = 100;
    let hunger = 0;
    let happiness = 100;

    const renderStatChanges = () => {
      petAge.innerHTML = `<li> ${age} days old</li>`;
      petHunger.innerHTML = `<li> hunger : ${hunger}</li>`;
      petHealth.innerHTML = `<li> health : ${health}</li>`;
      petHappiness.innerHTML = `<li> happiness : ${happiness}</li>`;
    };

    setInterval(() => {
      age += 1;
      hunger += 1;
      health -= 1;
      happiness -= Math.floor(Math.random() * (5 + 2) + 2);
      renderStatChanges();
    }, 1000);
  }

  counter();
});
