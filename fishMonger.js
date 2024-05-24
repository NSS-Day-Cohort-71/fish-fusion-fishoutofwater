const { todaysCatch } = require("./fishingBoat.js");

const fishMongerDeals = todaysCatch();

// const mongerInventory = () => {
//   const cheapFishArray = [];

//   for (const fish of fishMongerDeals) {
//     if (fish.price <= 7.5 && fish.amount >= 10) {
//       fish.amount = 10;
//       cheapFishArray.push(fish);
//     }
//   }
//   return cheapFishArray;
// };

const mongerInventory = fishMongerDeals.filter((fish) => {
  return fish.price <= 7.5 && fish.amount >= 10;
});

/*
Make a new array from an existing that meets certain conditions.
HINT: It's the filter method.
*/

const gatherFish = mongerInventory;

const chefPrice = (chefMaxPrice) => {
  // Use the filter method to filter the fish based on the chef's max price
  return gatherFish.filter((fish) => fish.price <= chefMaxPrice);
};

// const chefPrice = (chefMaxPrice) => {
//   const chefFishArray = [];
//   for (const fish of gatherFish) {
//     if (fish.price <= chefMaxPrice) {
//       chefFishArray.push(fish);
//     }
//   }
//   return chefFishArray;
// };

// const check = chefPrice(5);
// console.log(check);
module.exports = { mongerInventory, chefPrice };
