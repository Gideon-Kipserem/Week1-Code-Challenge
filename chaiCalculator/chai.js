function calculateChaiIngredients(numberOfCups) {
  const water = numberOfCups * 200; // ml
  const milk = numberOfCups * 50;   // ml
  const teaLeaves = numberOfCups * 1;   // tablespoons
  const sugar = numberOfCups * 2;   // teaspoons

  console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${water} ml`);
  console.log(`Milk: ${milk} ml`);
  console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoons`);
  console.log(`Sugar (Sukari): ${sugar} teaspoons`);

  return "Enjoy your Chai Bora!";
}

// E
const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = Number(input);
const message = calculateChaiIngredients(numberOfCups);

console.log(message);
