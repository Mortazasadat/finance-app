import { useFormatCurrency } from "@/hooks/use-format-currency";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { useMemo } from "react";

type trendType = {
  type: string;
  amount: number;
  prevAmount: number;
};

const Trend: React.FC<trendType> = ({ type, amount, prevAmount }) => {
  const colorClasses: any = {
    Income: "text-green-700 dark:text-green-300",
    Expenses: "text-red-700 dark:text-red-300",
    Investment: "text-indigo-700 dark:text-indigo-300",
    Saving: "text-yellow-700 dark:text-yellow-300",
  };

  const formatCurrnecy = useFormatCurrency(amount);

  const calcPrecentageChange = (amount: number, prevAmount: number) => {
    if (!prevAmount || !amount) return 0;
    return ((amount - prevAmount) / prevAmount) * 100;
  };

  const precentageChange: any = useMemo(
    () => calcPrecentageChange(amount, prevAmount).toFixed(0),
    [amount, prevAmount]
  );

  return (
    <div className=" ">
      <div className={`font-semibold mb-1 ${colorClasses[type]}`}>{type}</div>
      <div className="text-2xl text-black dark:text-white font-semibold ">
        {/* {amount ? formatCurrency(amount) : formatCurrency(0)} */}
        {formatCurrnecy}
      </div>
      <div className="flex items-center space-x-1 text-sm">
        {precentageChange <= 0 && (
          <ArrowDownLeft className="text-red-700 dark:text-red-300 " />
        )}
        {precentageChange > 0 && (
          <ArrowUpRight className="text-green-700 dark:text-green-300" />
        )}
        {precentageChange}% vs last period
      </div>
    </div>
  );
};

export default Trend;
