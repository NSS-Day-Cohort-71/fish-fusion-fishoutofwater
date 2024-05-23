const { todaysCatch } = require("./fishingBoat.js");

const fishMongerDeals = todaysCatch();

const mongerInventory = () => {
  const cheapFishArray = [];

  for (const fish of fishMongerDeals) {
    if (fish.price <= 7.5 && fish.amount >= 10) {
      fish.amount = 10;
      cheapFishArray.push(fish);
    }
  }
  return cheapFishArray;
};

const gatherFish = mongerInventory();

const chefPrice = (chefMaxPrice) => {
  const chefFishArray = [];
  for (const fish of gatherFish) {
    if (fish.price <= chefMaxPrice) {
      chefFishArray.push(fish);
    }
  }
  return chefFishArray;
};

// const check = chefPrice(5);
// console.log(check);
module.exports = { mongerInventory, chefPrice };
