import { useState } from 'react';
import { Button, ButtonGroup, FormControl, FormControlLabel, InputLabel, MenuItem, Select } from "@mui/material";
import Storage from "../../utils/Storage";
import dayjs from 'dayjs';
import "./Filters.css"; 

const clear = async(onUpdateExpense, setValue) => {
    const data = await Storage.getItems()
    onUpdateExpense(data)
    setValue({year: -1, month: -1})
}

const updateFilter = async(onUpdateExpense, value) => {
    let data = await Storage.getItems()
    if (value.year != -1)
        data = data.filter(d => new Date(d.date).getYear() == value.year);
    if (value.month != -1)
        data = data.filter(d=> new Date(d.date).getMonth() == value.month);
    onUpdateExpense(data)
}

const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
const YEARS =
    Array.from(
    { length: (2030 - 1950) / 1 + 1 },
    (value, index) => 1950 + index * 1
    );

function Filters(props) {
    const [value, setValue] = useState({year: -1, month: -1});
    return (
        <div className="filters">
            <h3>Filter By Year And Month</h3>
            <FormControl>
                <InputLabel id="Year-label">Year</InputLabel>
                <Select
                    labelId="Year-label"
                    id="Year"
                    value={value.year}
                    label="Year"
                    onChange={(event) => {
                        setValue({year: event.target.value , month: value.month});
                    }}
                >
                    <MenuItem value="-1">Empty</MenuItem>
                    {YEARS.map((x)=> <MenuItem value={x}>{x}</MenuItem>)}
                </Select>
            </FormControl>
            <FormControl>
            <InputLabel id="month-label">Month</InputLabel>
                <Select
                    labelId="month-label"
                    id="month"
                    value={value.month}
                    label="Month"
                    onChange={(event) => {
                        setValue({year: value.year, month: event.target.value});
                    }}
                >
                    <MenuItem value="-1">Empty</MenuItem>
                    {MONTHS.map((x, index)=> <MenuItem value={index}>{x}</MenuItem>)}
                </Select>
            </FormControl>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button onClick={() => updateFilter(props.onUpdateExpense, value)}>Filter</Button>
                <Button onClick={() => clear(props.onUpdateExpense, setValue)}>Show All</Button>
            </ButtonGroup>
        </div>
      );
}

export default Filters;