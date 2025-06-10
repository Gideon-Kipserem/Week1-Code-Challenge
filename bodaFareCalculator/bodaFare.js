//multiplies charges per km with kilometres a client wants to travel and adds base fare(50)

function calculateBodaFare(distanceInKm) {
  const baseFare = 50;//Fixed starting fare
  const chargePerKm = 15;//Fare per kilometer

//ensures input is a number
  if (isNaN(distanceInKm)) {
    console.log("Tafadhali weka nambari halali ya kilomita.");
  } else if (distanceInKm <= 0) {
    console.log("Tafadhali weka umbali  zaidi ya sifuri.");
  } else {
  const fareForDistance = distanceInKm * chargePerKm;       //Total variable fare
  const totalFare = baseFare + fareForDistance; //net fare

  //output
  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${fareForDistance}`);
  console.log(`Total: KES ${totalFare}`);
  return "Panda Pikipiki!";
}
}

// Prompt user to input number of kilometres they want to travel

const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
const distance = Number(input);


//calls function
let result = calculateBodaFare(distance);
console.log(result)