import Trend from "@/components/trend";
import React from "react";

type trendType = {
  type: string;
};

export const TrendDashboard = async ({ type }: trendType) => {
  const response = await fetch(`${process.env.API_URL}/trends/${type}`);
  const { amount, prevAmount } = await response.json();
  return (
    <React.Fragment>
      <Trend type={type} amount={amount} prevAmount={prevAmount} />
    </React.Fragment>
  );
};
