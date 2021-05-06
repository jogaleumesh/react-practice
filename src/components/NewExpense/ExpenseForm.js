import React, { useState } from "react";

import "./ExpenseForm.css";

export const ExpenseForm = ({ onSaveExpenseData, onCancel }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title,
      amount,
      date: new Date(date),
    };
    onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
            min="2020-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
