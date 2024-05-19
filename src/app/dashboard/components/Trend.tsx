import Trend from "@/components/trend";
import React from "react";
import { createClient } from "../../../../lib/supabase/server";

type trendType = {
  type: string;
  range: string;
};

export const TrendDashboard = async ({ type, range }: trendType) => {
  // const response = await fetch(`${process.env.API_URL}/trends/${type}`);
  // const { amount, prevAmount } = await response.json();
  const supabase = createClient();
  let { data, error } = await supabase.rpc("calculate_total", {
    type_arg: type,
    range_arg: range,
  });
  if (error) throw new Error("couldn't fetch trend data");

  const amount = data[0];

  return (
    <React.Fragment>
      <Trend
        type={type}
        amount={amount.current_amount}
        prevAmount={amount.previous_amount}
      />
    </React.Fragment>
  );
};
