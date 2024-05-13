import Seperator from "@/components/seperator";
import { TransactionSummaryItem } from "@/components/transaction-summary-item";
import TransactionItem from "@/components/trasaction-item";
import React from "react";
import { createClient } from "../../../../lib/supabase/server";

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

const groupAndSumTransactionByDate = (
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

export default async function TransactionList() {
  //revalidating data based on tag
  // const response = await fetch(`${process.env.API_URL}/transactions`,{
  //   next : {
  //     tags : ['transaction-list']
  //   }
  // });
  // const transactions = await response.json();

  const supabase = createClient();
  const { data: transactions, error } = await supabase
    .from("transactions")
    .select("*")
    .order("created_at", { ascending: false });

  const grouped = groupAndSumTransactionByDate(transactions);

  return (
    <div className="space-y-8">
      {Object.entries(grouped).map(([date, { transactions, amount }]) => (
        <div key={date}>
          <TransactionSummaryItem date={date} amount={amount} />
          <Seperator />
          <section className="space-y-4">
            {transactions.map((transaction: any) => (
              <div key={transaction.id}>
                <TransactionItem {...transaction} />
              </div>
            ))}
          </section>
        </div>
      ))}
    </div>
  );
}
