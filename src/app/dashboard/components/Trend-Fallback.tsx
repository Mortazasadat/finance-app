import Skeleton from "@/components/Skeleton";
import React from "react";

export const TrendFallback = () => {
  return (
    <div className="space-y-4 mb-5">
      <div>
        {" "}
        <Skeleton />{" "}
      </div>
      <div className=" ">
        <Skeleton />
      </div>
      <div className="flex items-center space-x-2">
        <Skeleton />
        <Skeleton />
      </div>
    </div>
  );
};
