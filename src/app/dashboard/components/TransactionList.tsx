"use client";
import Seperator from "@/components/seperator";
import { TransactionSummaryItem } from "@/components/transaction-summary-item";
import TransactionItem from "@/components/trasaction-item";
import React from "react";
import { groupAndSumTransactionByDate } from "../../../../lib/utils";

export default async function TransactionList({ initialTransactions }: any) {
  //revalidating data based on tag
  // const response = await fetch(`${process.env.API_URL}/transactions`,{
  //   next : {
  //     tags : ['transaction-list']
  //   }
  // });
  // const transactions = await response.json();

  //fetching data from supabase without any filter all data
  // const { data: transactions, error } = await supabase
  //   .from("transactions")
  //   .select("*")
  //   .order("created_at", { ascending: false });

  const grouped = groupAndSumTransactionByDate(initialTransactions);

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
