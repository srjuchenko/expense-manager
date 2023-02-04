import './App.css';
import ExpenseTable from './components/ExpenseTable'
import Chart from './components/Chart'
import Storage from './utils/Storage';

function App() {

  const [expenses, setExpenses] = useState(async () => await Storage.getItems()); 
  const filterExpenses = expenses

  // show by year
  // show by month
  const onYearHandler = () => {
    // filterExpenses = filterExpenses.map(x=> x.)
  }

  return (
    <div className="App">
      <Chart expenses={expenses} />
      <button>Add new expense</button>
      <ExpenseTable 
        expenses={expenses}
      />
    </div>
  );
}

export default App;
