import { useFormatCurrency } from "@/hooks/use-format-currency";
import { HandCoins, Landmark, PiggyBank, Wallet } from "lucide-react";

type TransactinItemtypes = {
  type: string;
  category: string;
  description: string;
  amount: number;
};

type mapObjtypes = {
  [key: string]: {
    icon: React.ComponentType<any>;
    colors: string;
  };
};

const TransactionItem: React.FC<TransactinItemtypes> = ({
  type,
  category,
  description,
  amount,
}) => {
  const formatedAmount = useFormatCurrency(amount);

  const typeMap: mapObjtypes = {
    Income: {
      icon: HandCoins,
      colors: "text-green-500 dark:text-green-400",
    },
    Investment: {
      icon: Landmark,
      colors: "text-yellow-500 dark:text-yellow-400",
    },
    Saving: {
      icon: PiggyBank,
      colors: "text-indigo-500 dark:text-indigo-400",
    },
    Expenses: {
      icon: Wallet,
      colors: "text-red-500 dark:text-red-400",
    },
  };

  const IconComponent = typeMap[type].icon;
  const colors = typeMap[type].colors;
  return (
    <div className="flex items-center w-full">
      <div className="flex items-center mr-4 grow">
        {" "}
        <IconComponent className={`${colors} w-4 h-4 mr-2 hidden sm:block`} />
        <span> {description}</span>{" "}
      </div>
      <div className="min-w-[150px] items-center hidden md:flex ">
        {category && (
          <div className="px-2 py-0.5 rounded-md  bg-gray-700 dark:bg-gray-100 text-xs capitalize dark:text-black text-white">
            {" "}
            {category}{" "}
          </div>
        )}
      </div>
      <div className="min-w-[70px]  text-right ">{formatedAmount} </div>
      <div className="flex min-w-[50px] justify-end ">...</div>
    </div>
  );
};

export default TransactionItem;
