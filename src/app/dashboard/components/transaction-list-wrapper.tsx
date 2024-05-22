import { fetchTransactions } from "../../../../lib/action";
import TransactionList from "./TransactionList";

export default async function TransactionListWrapper({ range }: any) {
  const transactions = await fetchTransactions(range);
  return <TransactionList initialTransactions={transactions} />;
}
