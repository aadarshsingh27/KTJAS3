import React, { useState, useEffect } from 'react';
import './AddExpenseForm.css';

const AddExpenseForm = ({ addExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(description && amount && category);
  }, [description, amount, category]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    const newExpense = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      category,
      date: new Date().toLocaleDateString(),
    };

    addExpense(newExpense);
    setDescription('');
    setAmount('');
    setCategory('');
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="stationary">Stationary</option>
        <option value="food">Food</option>
        <option value="transport">Transport</option>
      </select>
      <button type="submit" disabled={!isFormValid}>Add Expense</button>
    </form>
  );
};

export default AddExpenseForm;
