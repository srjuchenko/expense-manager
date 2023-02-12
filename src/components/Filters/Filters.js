/*
  Moshe Frankipour 206196693
  Sergey Juchenko 319365102
*/
import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import "./Filters.css";
import Box from "@mui/material/Box";
import { MONTHS, YEARS } from "../../utils/consts";
import { selectStyles, labelStyles } from "../../utils/inlinestyles";

/**
 * @param {requestCallback} props
 * @returns component with btns for filtering the data by month/year
 */
function Filters(props) {
  const [value, setValue] = useState({ year: -1, month: -1 });

  // clear the criterias of filtering (-1 means to show all months/years)
  const clear = (onFilterExpenses) => {
    onFilterExpenses(-1, -1);
    setValue({ year: -1, month: -1 });
  };

  // send the values to app component to show expenses by specific month/year
  const updateFilter = (onFilterExpenses, value) => {
    onFilterExpenses(value.year, value.month);
  };

  return (
    <div className="filters">
      <button
        onClick={() => clear(props.onFilterExpenses)}
        className="my-btn show-all"
      >
        SHOW ALL EXPENSES
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
                All
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
                All
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
          onClick={() => updateFilter(props.onFilterExpenses, value)}
          className="my-btn"
        >
          FILTER
        </button>
      </div>
    </div>
  );
}

export default Filters;
