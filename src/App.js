/*
  Moshe Frankipour 206196693
  Sergey Juchenko 319365102
*/

import React, { useState, useEffect } from "react";
import "./App.css";
import Storage from "./utils/storage";
import TotalExpenses from "./components/TotalExpenses/TotalExpenses";
import ExpenseTable from "./components/ExpenseTable/ExpenseTable";
import Chart from "./components/Chart/Chart";
import NewExpense from "./components/NewExpense/NewExpense";
import Filters from "./components/Filters/Filters";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const [yearState, setYear] = useState(-1);
  const [monthState, setMonth] = useState(-1);

  // get data from local storage and init the states
  useEffect(() => {
    (async () => {
      const response = await Storage.getItems();
      setExpenses(response);
      setFilteredExpenses(response);
    })();
  }, []);

  const updateExpenseHandler = async (expense) => {
    setExpenses((expenses) => [expense, ...expenses]);

    filteredExpensesHandler(yearState, monthState, expense);
    await Storage.addItem(expense);
  };

  // updates the state of filtered data ("-1" means to show all months/years)
  const filteredExpensesHandler = (year, month, expense = null) => {
    setYear(year);
    setMonth(month);

    let filteredData = expenses;
    if (expense) {
      filteredData = [expense, ...expenses];
    }

    if (year !== -1) {
      filteredData = filteredData.filter(
        (d) => new Date(d.date).getFullYear() === year
      );
    }
    if (month !== -1) {
      filteredData = filteredData.filter(
        (d) => new Date(d.date).getMonth() === month
      );
    }
    setFilteredExpenses(filteredData);
  };

  return (
    <div className="App">
      <div className="head">
        <div className="head-left">
          <div className="app-icon">
            <CurrencyExchangeIcon fontSize="large" color="warning" />
            <h1 className="app-title">Expenses Manager</h1>
          </div>
          <TotalExpenses
            total={filteredExpenses.reduce((sum, a) => sum + Number(a.cost), 0)}
          />
          <NewExpense onUpdateExpense={updateExpenseHandler} />
        </div>
        <Chart expenses={filteredExpenses} />
      </div>
      <div className="filters">
        <Filters onFilterExpenses={filteredExpensesHandler} />
      </div>
      <div className="bottom">
        <ExpenseTable expenses={filteredExpenses} />
      </div>
    </div>
  );
}

export default App;
