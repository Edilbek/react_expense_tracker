import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const INITIAL_EXPENSES = [
    { id: "e1", title: "Car Insurance", amount: 294.67, date: new Date(2022, 21, 1) },
    { id: "e2", title: "Health Insurance", amount: 400, date: new Date(2022, 21, 2) },
    { id: "e3", title: "Courses", amount: 110.5, date: new Date(2022, 21, 3) },
    { id: "e4", title: "Gym", amount: 50, date: new Date(2022, 21, 4) },
  ];

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />;
    </div>
  );
}

export default App;
