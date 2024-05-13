import { useMemo } from "react";

type FormatCurrencyFunction = (amount: number) => string;

export const useFormatCurrency = (amount: number) => {
  const formatCurrency: FormatCurrencyFunction = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "EUR",
    }).format(amount);
  };
  return useMemo(() => formatCurrency(amount), [amount]);
};
