"use client";

import { ExpenseForm } from "@/components/ExpenseForm";
import { ExpenseList } from "@/components/ExpenseList";
import { ExpenseSummary } from "@/components/ExpenseSummary";
import { useExpenses } from "@/hooks/useExpenses";

export default function Home() {
  const { expenses, addExpense, removeExpense } = useExpenses();

  return (
    <main className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-2xl font-bold mb-4 text-center">Expense Trackerrr</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} onRemoveExpense={removeExpense} />
      <ExpenseSummary expenses={expenses} />
    </main>
  );
}
