import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import ActionsMenu from "../actions-menu";
import { Transaction } from "../../types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("ActionsMenu integration test", () => {
  const transaction: Transaction = {
    id: 0,
    amount: -2008.75,
    beneficiary: "Callie Nieves",
    account: "PL10104092290785174000000000",
    address: "185 Berkeley Place, Brady, West Virginia, 7409",
    date: "2021-12-15T01:05:42",
    description: "Amet amet qui proident sint esse adipisicing amet.",
  };

  it("opens menu and deletes a row on confirmation", async () => {
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
    await userEvent.click(iconButton);

    await waitFor(() => {
      expect(screen.getByRole("menu")).toBeVisible();
    });

    const deleteMenuItem = screen.getByText("Delete");
    await userEvent.click(deleteMenuItem);

    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeVisible();
    });

    const confirmDeleteButton = screen.getByText("Delete");
    await userEvent.click(confirmDeleteButton);

    await waitFor(() => {
      expect(onDeleteMock).toHaveBeenCalledTimes(1);
    });
  });
});
