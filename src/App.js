import React, { useState, useEffect } from "react";
import "./App.css";
import Storage, { Data, Category } from "./utils/Storage";
import TotalExpenses from "./components/TotalExpenses/TotalExpenses";
import ExpenseTable from "./components/ExpenseTable/ExpenseTable";
import PieChart from "./components/PieChart/PieChart";

function App() {
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    (async () => {
      let response = await Storage.getItems();
      setExpenses(response);
    })();
  }, []);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
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
          <TotalExpenses expenses={10000000} />
          <button
            onClick={() =>
              addExpenseHandler(
                new Data("aa", 123, Date.now(), Category.A.name)
              )
            }
          >
            Add new expense
          </button>
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
