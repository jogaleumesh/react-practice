import { useState } from "react";

import "./Expenses.css";
import { ExpensesFilter } from "./ExpensesFilter";
import { ExpensesList } from "./ExpensesList";
import { Card } from "../UI/Card";
import { ExpensesChart } from "./ExpensesChart";

export const Expenses = ({ expenses }) => {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (year) => {
    setFilterYear(year);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        seletedYear={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};
