import { z } from "zod";

export const transactionSchema = z.object({
  beneficiary: z.string().min(1, "Beneficiary is required"),
  account: z
    .string()
    .min(1, "Account number is required")
    .regex(
      /^PL\d{26}$/,
      "Account number must be in the format PLxxxxxxxxxxxxxxxxxxxxxxxxxx"
    ),
  address: z.string().min(1, "Adres jest wymagany"),
  amount: z.preprocess(
    (val) => Number(val),
    z.number().min(0.01, "Amount must be greater than 0")
  ),
  description: z.string().max(255, "Description cannot exceed 255 characters"),
});

export type TransactionFormData = z.infer<typeof transactionSchema>;
