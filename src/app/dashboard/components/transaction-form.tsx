"use client";
import { Label } from "@/components/Label";
import { Select } from "@/components/Select";
import React, { useState } from "react";
import { categories, types } from "../../../../lib/consts";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { transactionSchema } from "../../../../lib/validation";
import { useRouter } from "next/navigation";
import { CreateTransaction } from "../../../../lib/action";
import FromError from "@/components/error-form";

type Inputs = {
  type: string;
  category: string;
  created_at: string;
  amount: number;
  description: string;
};

const TransactionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "onTouched",
    // resolver: zodResolver(transactionSchema),
  });

  const [isSaving, setIsSaving] = useState(false);
  const [lastError, setLastError] = useState("");
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsSaving(true);
    try {
      // await fetch(`${process.env.NEXT_PUBLIC_API_URL}/transactions`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     ...data,
      //     created_at: `${data.created_at}T00:00:00`,
      //   }),
      // });
      // await PurgeTransactionListCache();
      await CreateTransaction(data);
      router.push("/dashboard");
    } catch (error: any) {
      setLastError(error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <Label className="mb-1">Type</Label>
          <Select {...register("type")}>
            {types.map((type) => (
              <option key={type} value={type}>
                {type}{" "}
              </option>
            ))}
          </Select>

          <FromError error={errors.type} />
        </div>
        <div>
          <Label className="mb-1">Category</Label>
          <Select {...register("category")}>
            {categories.map((type) => (
              <option key={type} value={type}>
                {type}{" "}
              </option>
            ))}
          </Select>
          <FromError error={errors.category} />
        </div>
        <div>
          <Label className="mb-1">Transaction Date</Label>
          <Input {...register("created_at")} />
          <FromError error={errors.created_at} />
        </div>
        <div>
          <Label className="mb-1">Transaction Amount </Label>
          <Input type="number" {...register("amount")} />
          <FromError error={errors.amount} />
        </div>
        <div className=" col-span-2">
          <Label className="mb-1">Description </Label>
          <Input {...register("description")} />
          <FromError error={errors.description} />
        </div>
      </div>
      <div className="flex justify-between">
        <div>{lastError && <FromError error={lastError} />}</div>
        <Button disabled={isSaving} type="submit ">
          {" "}
          Save{" "}
        </Button>
      </div>
    </form>
  );
};

export default TransactionForm;
