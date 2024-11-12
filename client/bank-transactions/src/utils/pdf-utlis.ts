// src/utils/pdfUtils.ts
import jsPDF from "jspdf";
import { Transaction } from "../features/transactions/types";

export const generateTransactionPDF = (transaction: Transaction) => {
  const doc = new jsPDF();
  doc.setFontSize(16);
  doc.text("Potwierdzenie Transakcji", 105, 20, { align: "center" });

  doc.setFontSize(12);
  doc.text(`Kwota: ${transaction.amount.toLocaleString("pl-PL")} PLN`, 20, 50);
  doc.text(`Beneficjent: ${transaction.beneficiary}`, 20, 60);
  doc.text(`Konto: ${transaction.account}`, 20, 70);
  doc.text(`Adres: ${transaction.address}`, 20, 80);
  doc.text(
    `Data: ${new Date(transaction.date).toLocaleDateString("pl-PL", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })}`,
    20,
    90
  );
  doc.text(`Opis: ${transaction.description}`, 20, 100);
  doc.save(`Potwierdzenie_Transakcji_${transaction.id}.pdf`);
};
