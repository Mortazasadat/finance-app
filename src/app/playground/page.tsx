import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { Select } from "@/components/Select";
import Skeleton from "@/components/Skeleton";
import PageHeader from "@/components/page-header";
import { TransactionSummaryItem } from "@/components/transaction-summary-item";
import TransactionItem from "@/components/trasaction-item";
import Trend from "@/components/trend";
import React from "react";

export const metadata = {
  title: "Playground",
};

export default function Playground() {
  return (
    <main className=" space-y-8 mb-52">
      <h1 className="text-4xl font-semibold  mt-8">Playground</h1>

      <div>
        <h2 className="mb-4 text-lg font-mono"> page header </h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800 " />
        <div>
          {" "}
          <PageHeader />
        </div>
      </div>
      <div>
        <h2 className="mb-6 text-lg font-mono"> Trend </h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800 " />
        <div className="flex items-center space-x-10">
          {" "}
          <Trend type="Income" amount={2000} prevAmount={1200} />
          <Trend type="Saving" amount={2000} prevAmount={3344} />
          <Trend type="Investment" amount={3000} prevAmount={2300} />
          <Trend type="Expenses" amount={1000} prevAmount={1200} />
        </div>
      </div>

      <div>
        <h2 className="mb-6 text-lg font-mono"> Transaction Items </h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800 " />
        <div className="space-y-4">
          {" "}
          <TransactionItem
            amount={300}
            description="for the children"
            type="Income"
            category="Food"
          />
          <TransactionItem
            amount={400}
            description="for courses"
            type="Expenses"
            category="Salary"
          />
          <TransactionItem
            amount={600}
            description="for microsoft"
            type="Investment"
            category="Shopping"
          />
          <TransactionItem
            amount={500}
            description="for lundry"
            type="Saving"
            category="Car"
          />
        </div>
      </div>
      <div>
        <h2 className="mb-6 text-lg font-mono">
          Transaction Summary Item + Transaction Items{" "}
        </h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800 " />
        <div className="space-y-4">
          {" "}
          <TransactionSummaryItem date={"2024/04/02"} amount={3500} />
          <hr className="mb-4 border-gray-200 dark:border-gray-800 " />
          <TransactionItem
            amount={300}
            description="for the children"
            type="Income"
            category="Food"
          />
          <TransactionItem
            amount={400}
            description="for courses"
            type="Expenses"
            category="Salary"
          />
          <TransactionItem
            amount={600}
            description="for microsoft"
            type="Investment"
            category="Shopping"
          />
          <TransactionItem
            amount={500}
            description="for lundry"
            type="Saving"
            category="Car"
          />
        </div>
      </div>
      <div>
        <h2 className="mb-6 text-lg font-mono">Buttons</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800 " />
        <div className="space-x-4">
          <Button>Hello</Button>
          <Button variants="outline">Hello</Button>
          <Button variants="ghost">Hello</Button>
          <Button size="xs">Hello</Button>
          <Button size="small">Hello</Button>
          <Button size="lg">Hello</Button>
          <Button className="py-2 px-10 bg-red-400 text-white hover:bg-red-500 ">
            Hello
          </Button>
        </div>
      </div>
      <div>
        <h2 className="mb-6 text-lg font-mono">Forms</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800 " />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="block mb-1"> Your name </Label>
            <Input placeholder="type something here.." />
          </div>
          <div>
            <Label className="block mb-1">City</Label>
            <Select>
              <option value=""> Kabul </option>
              <option value=""> parwan </option>
            </Select>
          </div>
          <div className="flex items-center">
            <Input id="checkboxid" type="checkbox" />
            <Label className="ml-2" htmlFor="checkboxid">
              City
            </Label>
          </div>
        </div>
      </div>
      <div>
        <h2 className="mb-6 text-lg font-mono">Loading Skeleton</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800 " />
        <div className="flex space-x-5">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
        <div className=" mt-4 space-y-4">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      </div>
    </main>
  );
}
