import React, { useState, useEffect } from "react";
import "./App.css";
import Storage from "./utils/Storage";
import TotalExpenses from "./components/TotalExpenses/TotalExpenses";
import ExpenseTable from "./components/ExpenseTable/ExpenseTable";
import PieChart from "./components/PieChart/PieChart";
import NewExpenses from './components/NewExpenses/NewExpenses'

function App() {
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    (async () => {
      let response = await Storage.getItems();
      setExpenses(response);
    })();
  }, []);

  const updateExpenseHandler = (expense) => {
    setExpenses(expense)
  };
  
  
  const filterExpenses = expenses;
  // show by year
  // show by month

  const onYearHandler = () => {
    // filterExpenses = filterExpenses.map(x=> x.)
  };
  return (
    <div className="App">
      <div className="head">
        <div className="head-left">
          <TotalExpenses expenses={expenses.reduce((sum, a) => sum + Number(a.cost), 0)} />
          <NewExpenses onUpdateExpense={updateExpenseHandler}  />
        </div>
        <PieChart />
      </div>
      <div className="bottom">
        <ExpenseTable expenses={expenses} />
      </div>
    </div>
  );
}


export default App;
