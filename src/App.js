import "./App.css";
// import ExpenseTable from "./components/ExpenseTable";
import TotalExpenses from "./components/TotalExpenses/TotalExpenses";
// import Storage from "./utils/Storage";

function App() {
  // const [expenses, setExpenses] = useState(async () => await Storage.getItems());
  // const filterExpenses = expenses

  // show by year
  // show by month
  // const onYearHandler = () => {
  //   // filterExpenses = filterExpenses.map(x=> x.)
  // }

  return (
    <div className="App">
      <TotalExpenses className="head" expenses={10000000} />

      {/* <button>Add new expense</button>
      <ExpenseTable expenses={expenses} /> */}
    </div>
  );
}

export default App;
