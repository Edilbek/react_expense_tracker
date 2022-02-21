import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2022, 21, 1) },
    { title: "Car Insurance", amount: 294.67, date: new Date(2022, 21, 1) },
    { title: "Car Insurance", amount: 294.67, date: new Date(2022, 21, 1) },
    { title: "Car Insurance", amount: 294.67, date: new Date(2022, 21, 1) },
  ];

  return (
    <div>
      {expenses.map((expense, index) => (
        <ExpenseItem expense={expense} key={index}/>
      ))}
    </div>
  );
}

export default App;
