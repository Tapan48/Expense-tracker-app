import { Expense } from "@/hooks/useExpenses";
import React from "react";

interface ExpenseSummaryProps {
  expenses: Expense[];
}

export const ExpenseSummary: React.FC<ExpenseSummaryProps> = ({ expenses }) => {
  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold">Summary</h2>
      <p>Total Expenses: ${totalExpenses.toFixed(2)}</p>
      <p>Number of Expenses: {expenses.length}</p>
    </div>
  );
};
