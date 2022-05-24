import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import "./ExpensesFilter"
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({expenses}) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

        {expenses.map((expense, index) => (
          <ExpenseItem expense={expense} key={index} />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;