//multiplies charges per km with kilometres a client wants to travel and adds base fare(50)

function calculateBodaFare(distanceInKm) {
  const baseFare = 50;//Fixed starting fare
  const chargePerKm = 15;//Fare per kilometer
  const fareForDistance = distanceInKm * chargePerKm;       //Total variable fare
  const totalFare = baseFare + fareForDistance; //net fare
//output
  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${fareForDistance}`);
  console.log(`Total: KES ${totalFare}`);
  console.log("Panda Pikipiki!");
}

// Prompt user to input number of kilometrs they want to travel

const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
const distance = Number(input);
//calls function
calculateBodaFare(distance);
