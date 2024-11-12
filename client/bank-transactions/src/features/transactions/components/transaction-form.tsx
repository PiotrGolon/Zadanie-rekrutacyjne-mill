import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Box, Button, Grid, Typography, TextField } from "@mui/material";

import FormField from "./form-field";

import {
  transactionSchema,
  TransactionFormData,
} from "../schemas/transfer-schema";

import { useCreateTransaction } from "../api/use-create-transaction";
import { today } from "../../../utils/helpers";

const TransactionForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TransactionFormData>({
    resolver: zodResolver(transactionSchema),
  });

  const { mutate, isPending } = useCreateTransaction();

  const onSubmit: SubmitHandler<TransactionFormData> = (data) => {
    const now = new Date();
    const formattedDate = now.toISOString().split(".")[0];

    const newTransaction = {
      ...data,
      amount: -Math.abs(data.amount),
      date: formattedDate,
    };

    mutate(newTransaction, {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ mx: "auto", p: 2, mt: 1 }}
      noValidate
      aria-label="Formularz Przelewu"
    >
      <Typography variant="h4" sx={{ mb: 2, textAlign: "center" }}>
        Formularz Przelewu
      </Typography>
      <Grid container spacing={2}>
        <FormField
          label="Beneficiary"
          name="beneficiary"
          register={register}
          error={errors.beneficiary}
          required
          gridProps={{ xs: 12 }}
        />
        <FormField
          label="Account number"
          name="account"
          register={register}
          error={errors.account}
          required
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          gridProps={{ xs: 12 }}
        />
        <FormField
          label="Adress"
          name="address"
          register={register}
          error={errors.address}
          gridProps={{ xs: 12 }}
        />
        <FormField
          label="Amount"
          name="amount"
          register={register}
          error={errors.amount}
          required
          type="number"
          inputProps={{ step: "0.01", min: "0.01" }}
          gridProps={{ xs: 12 }}
        />
        <Grid item xs={12}>
          <TextField
            label="Date"
            type="text"
            fullWidth
            value={today}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <FormField
          label="Description"
          name="description"
          register={register}
          error={errors.description}
          multiline
          rows={4}
          gridProps={{ xs: 12 }}
        />
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={isPending}
            aria-disabled={isPending}
            sx={{ py: 2 }}
          >
            {isPending ? "Przetwarzanie..." : "Wykonaj"}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TransactionForm;
