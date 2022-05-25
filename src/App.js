import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const INITIAL_EXPENSES = [
    { id: "e1", title: "Car Insurance", amount: 294.67, date: new Date(2019, 2, 21) },
    { id: "e2", title: "Health Insurance", amount: 400, date: new Date(2020, 1, 21) },
    { id: "e3", title: "Courses", amount: 110.5, date: new Date(2021, 3, 21) },
    { id: "e4", title: "Gym", amount: 50, date: new Date(2021, 4, 21) },
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
