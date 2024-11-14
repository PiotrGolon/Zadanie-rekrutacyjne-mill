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
    formState: { errors, isValid },
  } = useForm<TransactionFormData>({
    resolver: zodResolver(transactionSchema),
    mode: "onChange",
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
      aria-label="Transaction Form"
    >
      <Typography variant="h4" sx={{ mb: 2, textAlign: "center" }}>
        Transaction Form
      </Typography>
      <Grid container spacing={2}>
        <FormField
          data-testid="cypress-beneficiary-field"
          label="Beneficiary"
          name="beneficiary"
          register={register}
          error={errors.beneficiary}
          required
          gridProps={{ xs: 12 }}
        />
        <FormField
          data-testid="cypress-account-number-field"
          label="Account number"
          name="account"
          register={register}
          error={errors.account}
          required
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          gridProps={{ xs: 12 }}
        />
        <FormField
          data-testid="cypress-adress-field"
          label="Adress"
          name="address"
          register={register}
          error={errors.address}
          required
          gridProps={{ xs: 12 }}
        />
        <FormField
          data-testid="cypress-amount-field"
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
            data-testid="cypress-date-field"
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
          data-testid="cypress-description-field"
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
            data-testid="cypress-button-form"
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={!isValid || isPending}
            aria-disabled={!isValid || isPending}
            sx={{ py: 2 }}
          >
            {isPending ? "Processing..." : "Transfer"}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TransactionForm;
