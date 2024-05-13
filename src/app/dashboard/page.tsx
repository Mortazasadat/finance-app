import React, { Suspense } from "react";
import TransactionList from "./components/TransactionList";
import TransactionListFallback from "./components/TransactionList-Fallback";
import { TrendDashboard } from "./components/Trend";
import { TrendFallback } from "./components/Trend-Fallback";
import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { sizes, variants } from "../../../lib/variants";
import { createClient } from "../../../lib/supabase/server";
import { types } from "../../../lib/consts";
import { ErrorBoundary } from "react-error-boundary";

export default async function DashboardPage() {
  const client = createClient();

  return (
    <>
      <section className="mb-8">
        <h1 className="text-4xl font-semibold">Summary</h1>
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
              <TrendDashboard type={type} />
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
        <TransactionList />
      </Suspense>
    </>
  );
}