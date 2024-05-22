import React, { Suspense } from "react";
import TransactionListFallback from "./components/TransactionList-Fallback";
import { TrendDashboard } from "./components/Trend";
import { TrendFallback } from "./components/Trend-Fallback";
import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { sizes, variants } from "../../../lib/variants";
import { createClient } from "../../../lib/supabase/server";
import { types } from "../../../lib/consts";
import { ErrorBoundary } from "react-error-boundary";
import { Range } from "./components/range";
import TransactionListWrapper from "./components/transaction-list-wrapper";

export default async function DashboardPage({ searchParams }: any) {
  const range = searchParams?.range ?? "last30days";

  return (
    <div>
      <section className="mb-8 flex justify-between items-center">
        <h1 className="text-4xl font-semibold">Summary</h1>
        <div>
          <Range />
        </div>
      </section>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-4">
        {types.map((type) => (
          <ErrorBoundary
            key={type}
            fallback={
              <div className="text-red-500 text-sm">
                Cannot fetch {type} trend data{" "}
              </div>
            }
          >
            <Suspense fallback={<TrendFallback />}>
              <TrendDashboard range={range} type={type} />
            </Suspense>
          </ErrorBoundary>
        ))}
      </div>
      <section className="flex items-center justify-between my-8">
        <h1 className="text-3xl font-semibold">Transactions</h1>
        <Link
          href="/dashboard/transaction/add"
          className={`flex items-center space-x-3  ${variants["outline"]} ${sizes["small"]} `}
        >
          <PlusCircle className="w-4 h-4" />
          <div>Add</div>
        </Link>
      </section>
      <Suspense fallback={<TransactionListFallback />}>
        <TransactionListWrapper range={range} />
      </Suspense>
    </div>
  );
}
