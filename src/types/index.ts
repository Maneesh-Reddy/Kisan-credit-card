export interface User {
  id: string;
  name: string;
  role: 'farmer' | 'staff';
  mobile: string;
  accountNumber?: string;
  branchCode?: string;
  balance?: number;
}

export interface LoanApplication {
  id: string;
  userId: string;
  status: 'pending' | 'approved' | 'rejected';
  amount: number;
  purpose: string;
  cropType: string;
  documents: string[];
  createdAt: string;
}

export interface Transaction {
  id: string;
  userId: string;
  type: 'credit' | 'debit';
  amount: number;
  description: string;
  date: string;
}