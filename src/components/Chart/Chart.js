/*
  Moshe Frankipour 206196693
  Sergey Juchenko 319365102
*/
import "./Chart.css";
import { CATEGORIES } from "../../utils/consts";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

/**
 * @param {} props
 * @returns component with bar plot chart of total expenses for each category
 */
function Chart(props) {
  /**
   * helping function for chart data, returns a list with total epxenses for each category.
   * @param {list} expenses
   * @returns list
   */
  const data = (expenses) => {
    let data = [];
    CATEGORIES.forEach((cat) => {
      const total = expenses
        .filter((expense) => expense.category == cat)
        .reduce((sum, current) => sum + Number(current.cost), 0);
      data.push({ name: cat, total: total });
    });
    return data;
  };

  return (
    <div className="pie-chart">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data(props.expenses)}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill="#fb8217" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
