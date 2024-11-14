describe("template spec", () => {
  it("passes", () => {
    // === Initial Setup ===
    cy.visit("http://localhost:5173/");

    const transaction = {
      beneficiary: "Unique Test Unique UniqueOne",
      accountNumber: "PL10104415359647878000000000",
      address: "Example Adress Tested",
      amount: 100,
      description: "Unique Testing Example",
    };

    // === Utility Function to Parse Balance ===
    const parseBalance = (balanceStr) => {
      return parseFloat(
        balanceStr.replace(/zł|\s/g, "").replace(",", ".") // Remove currency symbol and replace comma with dot
      );
    };

    // === Capture Initial Balance ===
    let oldBalance;
    cy.get('[data-testid="cypress-balance-info"]').then(($balance) => {
      oldBalance = parseBalance($balance.text());
    });

    // === Add Transaction ===
    // Fill in transaction form fields
    cy.get('[data-testid="cypress-beneficiary-field"]')
      .should("exist")
      .type(transaction.beneficiary);
    cy.get('[data-testid="cypress-account-number-field"]')
      .should("exist")
      .type(transaction.accountNumber);
    cy.get('[data-testid="cypress-adress-field"]')
      .should("exist")
      .type(transaction.address);
    cy.get('[data-testid="cypress-amount-field"]')
      .should("exist")
      .type(transaction.amount);
    cy.get('[data-testid="cypress-date-field"]').should("exist"); // Verify date field exists (value is auto-populated)
    cy.get('[data-testid="cypress-description-field"]')
      .should("exist")
      .type(transaction.description);

    // Submit transaction form
    cy.get('[data-testid="cypress-button-form"]').click();

    // === Verify Success Notification and Form Reset ===
    cy.contains("Transaction completed successfully!").should("be.visible");

    // Check that form fields are reset
    cy.get('[data-testid="cypress-beneficiary-field"]').should(
      "have.value",
      ""
    );
    cy.get('[data-testid="cypress-account-number-field"]').should(
      "have.value",
      ""
    );
    cy.get('[data-testid="cypress-adress-field"]').should("have.value", "");
    cy.get('[data-testid="cypress-amount-field"]').should("have.value", "");
    cy.get('[data-testid="cypress-description-field"]').should(
      "have.value",
      ""
    );

    // === Verify Balance Update After Transaction ===
    cy.get('[data-testid="cypress-balance-info"]').then(($balance) => {
      const newBalance = parseBalance($balance.text());
      expect(newBalance).to.equal(oldBalance - transaction.amount);
    });

    // === Verify Transaction in Table ===
    // Filter transactions by beneficiary to verify the new transaction appears
    cy.findByRole("textbox", {
      name: /filter by beneficiary/i,
    }).type(transaction.beneficiary);

    // Verify filtered balance
    cy.get('[data-testid="cypress-balance-info"]').then(($balance) => {
      const transactionBalance = parseBalance($balance.text());
      expect(transactionBalance).to.equal(-transaction.amount);
    });

    // === Verify Transaction via API and Delete ===
    // Fetch all transactions to locate the added one
    cy.request("GET", "http://localhost:3000/transactions").then((response) => {
      expect(response.status).to.eq(200);

      // Find the newly added transaction based on unique attributes
      const testTransaction = response.body.find(
        (tx) =>
          tx.beneficiary === transaction.beneficiary &&
          tx.description === transaction.description
      );

      expect(testTransaction).to.exist;

      const transactionId = testTransaction.id;

      // Find table row with the specified transaction ID and delete it
      cy.get(`[data-testid="cypress-table-row-with-id-${transactionId}"]`);
      cy.get('[data-testid="open-menu-action"]').click();
      cy.get('[data-testid="delete-action"]').click();
      cy.get('[data-testid="confirm-delete-action"]').click();

      // Verify delete success notification
      cy.contains("Transaction deleted successfully!").should("be.visible");
    });

    // === Clear Filter and Verify Balance Reset ===
    // Clear the filter to reset the view
    cy.findByRole("textbox", {
      name: /filter by beneficiary/i,
    }).clear();

    // Verify balance has returned to the original value after deletion
    cy.get('[data-testid="cypress-balance-info"]').then(($balance) => {
      const finalBalance = parseBalance($balance.text());
      expect(finalBalance).to.equal(oldBalance);
    });
  });
});
