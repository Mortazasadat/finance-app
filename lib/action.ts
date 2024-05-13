"use server";

type Inputs = {
  type: string;
  category: string;
  created_at: string;
  amount: number;
  description: string;
};

import { revalidatePath, revalidateTag } from "next/cache";
import { createClient } from "./supabase/server";
import { transactionSchema } from "./validation";

// revalidating data based on tag
// export async function PurgeTransactionListCache() {
//   revalidateTag("transaction-list");
// }

export async function CreateTransaction(formData: Inputs) {
  //validation
  const validated = transactionSchema.safeParse(formData);
  if (!validated.success) {
    throw new Error("Inalid data passed!");
  }

  const { error } = await createClient()
    .from("transactions")
    .insert(validated.data);

  //handle errors
  if (error) {
    throw new Error("Failed Creating Transaction!");
  }

  revalidatePath("/dashboard");
}
