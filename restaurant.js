const { mongerInventory, chefPrice } = require("./fishMonger.js");

/*
TODO
Create fish menu function that accepts chefMaxPrice.
Filter the fish monger fish list by chefMaxPrice.
For the fish that the chef buys, we divide the amount by 2.
For every fish the chef buys, we need to insert that into the HTML example.
Loop through each fish thats bought, plug in that into the HTML.
*/

//const exportedFish = chefPrice(5);

const fishMenu = (chefMaxPrice) => {
  // Call the chePricePrice function with chefMaxPrice and store the result in fishVariable.
  const fishVariable = chefPrice(chefMaxPrice);

  // Initialize the HTML string with a header and an article tag.
  let HTML = `<h1>Menu</h1>

<article class="menu">`;

  // // initialize an empty array to store fish objects that are halved amount
  // const halfFishAmount = [];

  // // Loop through each fish object in fishVariable
  // for (const fish of fishVariable) {
  //   // Halve the amount property for the current fish object
  //   fish.amount /= 2;
  //   // Add the modified fish object to the halfFishAmount array.
  //   halfFishAmount.push(fish);
  // }

  const halfFishAmount = fishVariable.map((fish) => {
    fish.amount /= 2;

    return fish;
  });

  // Utilize the map method to create a new array of HTML strings for each fish.
  const fishMap = halfFishAmount.map(
    (fish) => `
  <h2>${fish.species}</h2>
  <section class="menu__item">${fish.species} Soup</section>
  <section class="menu__item">${fish.species} Sandwich</section>
  <section class="menu__item">Grilled ${fish.species}</section>
`
  );

  // Join the array of HTML strings into a single string.
  // Separate each string with a space.
  const joinTest = fishMap.join(" ");

  // Append the new joined HTML strings to the HTML variable.
  HTML += joinTest;

  // close the article tag in the HTML string and return the complete HTML string
  HTML += `</article>`;
  return HTML;
};

// const test = fishMenu();
// console.log(test);

module.exports = { fishMenu };

// let numbers = [1, 2, 3, 4, 5];

// let squaredNumbers = numbers.map((number) => number * number);

// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
