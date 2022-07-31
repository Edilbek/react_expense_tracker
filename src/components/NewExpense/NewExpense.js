import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => { setIsOpen(p => !p) }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };

    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {isOpen && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} toggle={toggle}/>}
      {!isOpen && <button onClick={toggle}>Add New Expense</button>}
    </div>
  );
};

export default NewExpense;