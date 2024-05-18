import { any, string, z } from "zod";
import { types } from "./consts";
import { categories } from "./consts";

export const transactionSchema = z
  .object({
    type: z.enum(types),
    category: z.string().optional(),
    amount: z.coerce.number().min(1, {
      message: "Amount must be at least 1",
    }),
    description: z.string().optional(),
    created_at: z.string().refine((val) => !isNaN(Date.parse(val)), {
      message: "Date needs to contain a valid date!",
    }),
  })
  .refine(
    (data) => {
      if (data.type === "Expenses") {
        return (
          data.category !== undefined && categories.includes(data.category)
        );
      }
      return true;
    },
    {
      path: ["category"],
      message: "Categroy is required for expenese",
    }
  )
  .refine(
    (data) => {
      if (data.type === "Income") {
        return data.description !== "";
      }
      return true;
    },
    {
      message: "Income should has Description  ",
      path: ["description"],
    }
  );
