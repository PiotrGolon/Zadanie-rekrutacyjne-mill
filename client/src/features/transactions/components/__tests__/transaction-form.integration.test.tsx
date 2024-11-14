import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionForm from "../transaction-form";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("TransactionForm", () => {
  it("should have the submit button disabled initially", async () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <TransactionForm />
      </QueryClientProvider>
    );

    const submitButton = screen.getByRole("button", { name: /Transfer/i });

    expect(submitButton).toBeDisabled();

    await userEvent.type(screen.getByLabelText(/Beneficiary/i), "Test User");
    await userEvent.type(
      screen.getByLabelText(/Account number/i),
      "PL12345678901234567890123456"
    );
    await userEvent.type(screen.getByLabelText(/Adress/i), "123 Main St");
    await userEvent.type(screen.getByLabelText(/Amount/i), "100");

    expect(submitButton).toBeEnabled();
  });
});
