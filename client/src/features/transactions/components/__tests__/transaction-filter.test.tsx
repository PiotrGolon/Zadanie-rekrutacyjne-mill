import { render, screen } from "@testing-library/react";
import TransactionsFilter from "../transaction-filter";
import { vi } from "vitest";
import { FilterProvider } from "../../../../context/filter/filter-provider";

vi.mock("../../../hooks/use-filter", () => ({
  useFilter: () => ({
    filter: "",
    setFilter: vi.fn(),
  }),
}));

describe("TransactionsFilter", () => {
  it("displays the filter input with the correct aria-label", () => {
    render(
      <FilterProvider>
        <TransactionsFilter />
      </FilterProvider>
    );

    const filterInput = screen.getByLabelText(
      "Filter transactions by beneficiary"
    );
    expect(filterInput).toBeInTheDocument();
  });
});
