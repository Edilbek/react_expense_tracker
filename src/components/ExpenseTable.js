import ExpenseItem from "./ExpenseItem";
import "./ExpenseTable.css";

const ExpenseTable = ({expenses}) => {
  return (
    <div className="expenses">
      {expenses.map((expense, index) => (
        <ExpenseItem expense={expense} key={index} />
      ))}
    </div>
  );
}

export default ExpenseTable;