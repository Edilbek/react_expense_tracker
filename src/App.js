import React from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2022, 21, 1) },
    { title: "Health Insurance", amount: 400, date: new Date(2022, 21, 2) },
    { title: "Courses", amount: 110.5, date: new Date(2022, 21, 3) },
    { title: "Gym", amount: 50, date: new Date(2022, 21, 4) },
  ];
  
  const addExpenseHandler = expense => {
    console.log('App.js');
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpenseHandler={addExpenseHandler} />
      <Expenses expenses={expenses} />;
    </div>
  );
}

export default App;
