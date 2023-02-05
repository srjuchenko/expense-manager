import "./TotalExpenses.css";

/**
 *
 * @param {number} total expenses
 *
 * @returns component that shows the total expenses
 */

function TotalExpenses(props) {
  return (
    <div className="total-expenses">
      <h1 className="total">Total Expenses</h1>
      <h2 className="expenses">{props.expenses}$</h2>
    </div>
  );
}

export default TotalExpenses;
