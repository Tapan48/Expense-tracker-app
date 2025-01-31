import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Expense } from "@/hooks/useExpenses";
import { format } from "date-fns";
import { motion } from "framer-motion";
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
    <div className="space-y-4">
      {expenses.map((expense, index) => (
        <motion.div
          key={expense.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card>
            <CardContent className="flex justify-between items-center p-6">
              <div className="space-y-1">
                <h3 className="font-bold text-lg">{expense.description}</h3>
                <p className="text-2xl font-semibold text-primary">
                  ${expense.amount.toFixed(2)}
                </p>
                <p className="text-sm text-muted-foreground">
                  {format(new Date(expense.date), "PPP")}
                </p>
              </div>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => onRemoveExpense(expense.id)}
              >
                Remove
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
      {expenses.length === 0 && (
        <div className="text-center text-muted-foreground p-8">
          No expenses added yet
        </div>
      )}
    </div>
  );
};
