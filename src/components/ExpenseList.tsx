import { Button } from "@/components/ui/button";
import { Expense } from "@/hooks/useExpenses";
import { format } from "date-fns";
import React from "react";

interface ExpenseListProps {
  expenses: Expense[];
  onRemoveExpense: (id: string) => void;
}

export const ExpenseList: React.FC<ExpenseListProps> = ({
  expenses,
  onRemoveExpense,
}) => {
  return (
    <ul className="space-y-4">
      {expenses.map((expense) => (
        <li key={expense.id} className="flex justify-between items-center">
          <div>
            <h3 className="font-bold">{expense.description}</h3>
            <p>Amount: ${expense.amount.toFixed(2)}</p>
            <p>Date: {format(new Date(expense.date), "MM/dd/yyyy")}</p>
          </div>
          <Button
            variant="destructive"
            onClick={() => onRemoveExpense(expense.id)}
          >
            Remove
          </Button>
        </li>
      ))}
    </ul>
  );
};
