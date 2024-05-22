interface Transaction {
  created_at: string; // Assuming this is a string representing the date
  amount: number;
  type: string;
  id: number;

  // Define other properties of the transaction as needed
}

interface GroupedTransaction {
  transactions: Transaction[];
  amount: number;
}

type GroupedTransactions = Record<string, GroupedTransaction>;

export const groupAndSumTransactionByDate = (
  transactions: Transaction[] | any
): GroupedTransactions => {
  const grouped: GroupedTransactions = {};
  for (const transaction of transactions) {
    const date = transaction.created_at.split("T")[0];

    if (!grouped[date]) {
      grouped[date] = { transactions: [], amount: 0 };
    }

    grouped[date].transactions.push(transaction);

    const amount =
      transaction.type === "Expenses"
        ? -transaction.amount
        : transaction.amount;
    grouped[date].amount = grouped[date].amount + amount;
  }
  return grouped;
};
