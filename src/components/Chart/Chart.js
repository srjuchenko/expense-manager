/*
  Moshe Frankipour 206196693
  Sergey Juchenko 319365102
*/
import "./Chart.css";
import { CATEGORIES } from "../../utils/consts";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = (expenses) => {
  let data = []
  CATEGORIES.forEach(cat => {
    const total = expenses.filter(expense => expense.category == cat)
      .reduce((sum, current) => sum + Number(current.cost), 0)
    data.push({ name: cat, total: total })
  });
  return data
}

function Chart(props) {
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
