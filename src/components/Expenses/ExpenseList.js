import "./ExpenseList.css";
import { ExpenseItem } from "./ExpenseItem";
import { Card } from "../UI/Card";

export const ExpenseList = ({ expenses }) => {
  return (
    <Card className="expenses">
      {expenses.map((ele) => {
        return (
          <ExpenseItem title={ele.title} amount={ele.amount} date={ele.date} />
        );
      })}
    </Card>
  );
};
