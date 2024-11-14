import { render, fireEvent, screen } from "@testing-library/react";
import ActionsMenu from "../actions-menu";
import { Transaction } from "../../types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("ActionsMenu", () => {
  const transaction: Transaction = {
    id: 0,
    amount: -2008.75,
    beneficiary: "Callie Nieves",
    account: "PL10104092290785174000000000",
    address: "185 Berkeley Place, Brady, West Virginia, 7409",
    date: "2021-12-15T01:05:42",
    description: "Amet amet qui proident sint esse adipisicing amet.",
  };

  it("opens the menu when the icon is clicked", () => {
    const queryClient = new QueryClient();

    const onToggleMock = vi.fn();
    const onDeleteMock = vi.fn();

    render(
      <QueryClientProvider client={queryClient}>
        <ActionsMenu
          onToggle={onToggleMock}
          onDelete={onDeleteMock}
          transaction={transaction}
        />
      </QueryClientProvider>
    );

    const iconButton = screen.getByRole("button");
    fireEvent.click(iconButton);

    const menu = screen.getByRole("menu");
    expect(menu).toBeVisible();
  });
});
