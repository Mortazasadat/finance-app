import React from "react";
import TransactionForm from "../../components/transaction-form";

export const metadata = {
  title: "Add Transaction",
};

const TrasactionPage = () => {
  return (
    <div>
      <h1 className="text-3xl mb-8 font-semibold">Add Transaction</h1>
      <TransactionForm />
    </div>
  );
};

export default TrasactionPage;
