const { mongerInventory, chefPrice } = require("./fishMonger.js");

/*
TODO
Create fish menu function that accepts chefMaxPrice.
Filter the fish monger fish list by chefMaxPrice.
For the fish that the chef buys, we divide the amount by 2.
For every fish the chef buys, we need to insert that into the HTML example.
Loop through each fish thats bought, plug in that into the HTML.
*/

const exportedFish = chefPrice(5);

const fishMenu = (chefMaxPrice) => {
  let HTML = `<h1>Menu</h1>

<article class="menu">`;
  const halfFishAmount = [];
  for (const fish of exportedFish) {
    fish.amount /= 2;
    halfFishAmount.push(fish);
  }
  halfFishAmount.map(
    (fish) =>
      (HTML += `
  <h2>${fish.species}</h2>
  <section class="menu__item">${fish.species} Soup</section>
  <section class="menu__item">${fish.species} Sandwich</section>
  <section class="menu__item">Grilled ${fish.species}</section>
`)
  );
  HTML += `</article>`;
  return HTML;
};

const test = fishMenu();
console.log(test);

module.exports = { fishMenu };
