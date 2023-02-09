import React, { useState, useEffect } from "react";
import "./App.css";
import Storage from "./utils/storage";
import TotalExpenses from "./components/TotalExpenses/TotalExpenses";
import ExpenseTable from "./components/ExpenseTable/ExpenseTable";
import PieChart from "./components/PieChart/PieChart";
import NewExpense from "./components/NewExpense/NewExpense";
import Filters from "./components/Filters/Filters";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

function App() {
  const [expenses, setExpenses] = useState([]);

  /**
   * init data
   */
  useEffect(() => {
    (async () => {
      let response = await Storage.getItems();
      setExpenses(response);
    })();
  }, []);

  const updateExpenseHandler = (expenses) => {
    setExpenses(expenses);
  };

  return (
    <div className="App">
      <div className="head">
        <div className="head-left">
          <div className="app-icon">
            <CurrencyExchangeIcon fontSize="large" color="warning" />
            <h1 className="app-title">Expense Manager</h1>
          </div>
          <TotalExpenses
            expenses={expenses.reduce((sum, a) => sum + Number(a.cost), 0)}
          />
          <NewExpense onUpdateExpense={updateExpenseHandler} />
        </div>
        <PieChart expenses={expenses} />
      </div>
      <div className="filters">
        <Filters onUpdateExpense={updateExpenseHandler} />
      </div>
      <div className="bottom">
        <ExpenseTable expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
