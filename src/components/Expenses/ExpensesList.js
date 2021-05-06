import { ExpenseItem } from "./ExpenseItem";
import "./ExpensesList.css";

export const ExpensesList = ({ expenses }) => {
  if (expenses.length === 0) {
    return <h2 className="expenses-list__fallback ">No expenses found.</h2>;
  }

  return (
    <ul className="expenses-list">
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
    </ul>
  );
};
