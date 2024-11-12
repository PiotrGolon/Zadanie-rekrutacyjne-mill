export interface Transaction {
  id: number;
  amount: number;
  beneficiary: string;
  account: string;
  address: string;
  date: string;
  description: string;
  type?: "income" | "expense";
}

export interface TransactionsTableContentProps {
  transactions: Transaction[];
}

export interface TransactionDetailsRowProps {
  transaction: Transaction;
  open: boolean;
  onToggle: () => void;
  colSpan: number;
  isDesktop: boolean;
  isTablet: boolean;
  isMobile: boolean;
}

export interface TransactionDetailsProps {
  transaction: Transaction;
}

export interface TransactionRowContentProps {
  transaction: Transaction;
  onToggle: () => void;
  onDelete: () => void;
  isDesktop: boolean;
  isTablet: boolean;
  isMobile: boolean;
  exitingRowId: number | null;
}

export interface TransactionRowProps {
  transaction: Transaction;
}

export interface ActionsMenuProps {
  onToggle: () => void;
  onDelete: () => void;
  transaction: Transaction;
}

export interface ConfirmDeleteDialogProps {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}
