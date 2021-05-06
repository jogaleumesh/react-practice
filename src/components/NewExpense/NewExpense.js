import "./NewExpense.css";
import { ExpenseForm } from "./ExpenseForm";

export const NewExpense = ({ onSaveExpenseData }) => {
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseData} />
    </div>
  );
};
