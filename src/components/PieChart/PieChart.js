import "./PieChart.css";

function PieChart(props) {
  return (
    <div className="pie-chart">
      <div className="hero">
        <ul className="category-list">
          <li>cat1</li>
          <li>cat2</li>
          <li>cat3</li>
          <li>cat4</li>
          <li>cat6</li>
          <li>cat7</li>
        </ul>
      </div>
      <div className="chart"></div>
    </div>
  );
}

export default PieChart;
