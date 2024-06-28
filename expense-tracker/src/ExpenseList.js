import React from 'react';
import './ExpenseList.css';

const ExpenseList = ({ expenses, deleteExpense }) => {
  const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="expense-list">
      <h2>Expenses</h2>
      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>
            <span>{expense.description}</span>
            <span>${expense.amount.toFixed(2)}</span>
            <span>{expense.category}</span>
            <span>{expense.date}</span>
            <button onClick={() => deleteExpense(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalAmount.toFixed(2)}</h3>
    </div>
  );
};

export default ExpenseList;
