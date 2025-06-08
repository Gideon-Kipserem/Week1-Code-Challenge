function estimateTransactionFee(amountToSend) {
  const minFee = 10;
  const maxFee = 70;
  const feeRate = 0.015; // 1.5% in decimal

  // Calculates initial  fee
  let fee = amountToSend * feeRate;

  // Apply min and max fee limits
  if (fee < minFee) {
    fee = minFee;
  } else if (fee > maxFee) {
    fee = maxFee;
  }

  const totalDebit = amountToSend + fee;// total amount to be debited from client

  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${fee}`);
  console.log(`Total amount to be debited: KES ${totalDebit}`);
  console.log("Send Money Securely!");
}

// Prompts user and calls action
const input = prompt("Unatuma Ngapi? (KES):");
const amount = Number(input);

estimateTransactionFee(amount);
