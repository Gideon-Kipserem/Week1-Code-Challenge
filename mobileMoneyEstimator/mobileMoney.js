function estimateTransactionFee(amountToSend) {

 

  const minFee = 10;//maximum fee
  const maxFee = 70;//maximum fee
  const feeRate = 0.015; // 1.5% in decimal


  // Validate input before processing
  if (Number.isNaN(amountToSend) || amountToSend <= 0) {
    console.error("Please input a valid amount.");
    return; // Exit function early
  }

  // Calculates initial  fee
  let fee = amountToSend * feeRate;


  
  // Apply min and max fee limits
  if (fee < minFee) {
    fee = minFee;
  } else if (fee > maxFee) {
    fee = maxFee;
  }

  const totalDebit = amountToSend + fee;// total amount to be debited from client
//output
  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${fee}`);
  console.log(`Total amount to be debited: KES ${totalDebit}`);
  console.log("Send Money Securely!");
}

// Prompts user 
const input = prompt("Unatuma Ngapi? (KES):");
const amount = Number(input);



//calls action
estimateTransactionFee(amount);


