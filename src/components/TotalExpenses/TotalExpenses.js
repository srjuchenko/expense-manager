/*
  Moshe Frankipour 206196693
  Sergey Juchenko 319365102
*/
import "./TotalExpenses.css";

/**
 * @param {number} props
 * @returns component that shows the total expenses
 */
function TotalExpenses(props) {
  return (
    <div className="total-expenses">
      <h1 className="total">Total Expenses</h1>
      <h2 className="expenses">{props.total}$</h2>
    </div>
  );
}

export default TotalExpenses;
