import { render, screen } from "@testing-library/react";
import BalanceInfo from "../balance-info";
import { vi } from "vitest";

describe("BalanceInfo", () => {
  const testBalance = 1234.56;

  it("displays the balance in the correct format on desktop", () => {
    vi.mock("../../../hooks/use-responsive", () => ({
      useResponsive: () => ({ isDesktop: true }),
    }));

    render(<BalanceInfo balance={testBalance} />);

    const balanceElement = screen.getByText(/1\s?234,56 zł/);
    expect(balanceElement).toBeInTheDocument();
  });

  it("displays the balance in the correct format on mobile", () => {
    vi.mock("../../../hooks/use-responsive", () => ({
      useResponsive: () => ({ isDesktop: false }),
    }));

    render(<BalanceInfo balance={testBalance} />);

    const balanceElement = screen.getByText(/1\s?234,56 zł/);
    expect(balanceElement).toBeInTheDocument();
  });
});
