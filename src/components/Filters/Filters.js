import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Storage from "../../utils/storage";
import "./Filters.css";
import Box from "@mui/material/Box";
import { MONTHS, YEARS } from "../../utils/consts";
import { selectStyles, labelStyles } from "../../utils/inlinestyles";

const clear = async (onUpdateExpense, setValue) => {
  const data = await Storage.getItems();
  onUpdateExpense(data);
  setValue({ year: -1, month: -1 });
};

const updateFilter = async (onUpdateExpense, value) => {
  let data = await Storage.getItems();
  if (value.year !== -1)
    data = data.filter((d) => new Date(d.date).getFullYear() == value.year);
  if (value.month !== -1)
    data = data.filter((d) => new Date(d.date).getMonth() == value.month);
  onUpdateExpense(data);
};

function Filters(props) {
  const [value, setValue] = useState({ year: -1, month: -1 });

  return (
    <div className="filters">
      <button
        onClick={() => clear(props.onUpdateExpense, setValue)}
        className="my-btn"
      >
        SHOW ALL
      </button>
      <div className="filter-container">
        <Box sx={{ minWidth: 100 }}>
          <FormControl fullWidth>
            <InputLabel style={labelStyles} color="warning" id="year-label">
              Year
            </InputLabel>
            <Select
              labelid="year-label"
              id="year"
              label="Year"
              onChange={(event) => {
                setValue({ year: event.target.value, month: value.month });
              }}
              color="warning"
              style={selectStyles}
              defaultValue={-1}
              value={value.year}
            >
              <MenuItem key={-1} value={-1}>
                Select
              </MenuItem>
              {YEARS.map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 160 }}>
          <FormControl fullWidth>
            <InputLabel style={labelStyles} color="warning" id="month-label">
              Month
            </InputLabel>
            <Select
              labelid="month-label"
              id="month"
              label="Year"
              onChange={(event) => {
                setValue({ year: value.year, month: event.target.value });
              }}
              color="warning"
              style={selectStyles}
              defaultValue={-1}
              value={value.month}
            >
              <MenuItem key={-1} value={-1}>
                Select
              </MenuItem>
              {MONTHS.map((month, index) => (
                <MenuItem value={index} key={month}>
                  {month}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <button
          onClick={() => updateFilter(props.onUpdateExpense, value)}
          className="my-btn"
        >
          FILTER
        </button>
      </div>
    </div>
  );
}

export default Filters;
