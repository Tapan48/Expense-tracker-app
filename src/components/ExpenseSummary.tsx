import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
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

  const maxBudget = 1000; // You can make this configurable
  const progressPercentage = (totalExpenses / maxBudget) * 100;

  return (
    <Card className="mt-4">
      <CardHeader>
        <h2 className="text-2xl font-bold">Summary</h2>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-muted-foreground">Total Expenses</p>
          <p className="text-2xl font-bold">${totalExpenses.toFixed(2)}</p>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Budget Usage</span>
            <span>{progressPercentage.toFixed(1)}%</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>
        <div className="flex justify-between items-center">
          <p className="text-muted-foreground">Number of Expenses</p>
          <p className="text-xl font-semibold">{expenses.length}</p>
        </div>
      </CardContent>
    </Card>
  );
};
