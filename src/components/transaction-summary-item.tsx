import { useFormatCurrency } from "@/hooks/use-format-currency";
import { format } from "date-fns";

interface transactionSummaryType {
  amount: number;
  date: string;
}

export const TransactionSummaryItem: React.FC<transactionSummaryType> = ({
  date,
  amount,
}) => {
  const formatedAmout = useFormatCurrency(amount);
  // const formattedDate = format(date, "MM/dd/yyyy");
  return (
    <div className="flex text-gray-500 dark:text-gray-400 font-semibold">
      <div className="grow "> {date} </div>
      <div className="min-w-[70px] text-right font-semibold  ">
        {formatedAmout}
      </div>
      <div className="min-w-[50px] "></div>
    </div>
  );
};
