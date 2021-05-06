import { useState } from "react";

import "./Expenses.css";
import { ExpenseItem } from "./ExpenseItem";
import { ExpensesFilter } from "./ExpensesFilter";
import { Card } from "../UI/Card";

export const Expenses = ({ expenses }) => {
  const [filterYear, setfilterYear] = useState("2020");

  const filterChangeHandler = (year) => {
    setfilterYear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        seletedYear={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenses.map((ele, index) => {
        return (
          <ExpenseItem
            key={index}
            title={ele.title}
            amount={ele.amount}
            date={ele.date}
          />
        );
      })}
    </Card>
  );
};
