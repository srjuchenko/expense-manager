import { useState } from 'react';
import { Button, ButtonGroup } from "@mui/material";
import Storage from "../../utils/Storage";
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import "./Filters.css"; 

const clear = async(onUpdateExpense) => {
    const data = await Storage.getItems()
    onUpdateExpense(data)
}

const updateFilter = async(onUpdateExpense, value) => {
    let data = await Storage.getItems()
    const date = new Date(value)
    data = data.filter(d => new Date(d.date).getYear() == date.getYear() 
                            && new Date(d.date).getMonth() == date.getMonth());
    onUpdateExpense(data)
}

function Filters(props) {
    const [value, setValue] = useState(dayjs('2023-04'));
    return (
        <div className="filters">
            <h1>Filters</h1>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    views={['year']}
                    label="Year"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} helperText={null} />}
                />
                <DatePicker
                    views={['month']}
                    label="Month"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} helperText={null} />}
                />
            </LocalizationProvider>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button onClick={() => updateFilter(props.onUpdateExpense, value)}>Filter</Button>
                <Button onClick={() => clear(props.onUpdateExpense)}>Clear</Button>
            </ButtonGroup>
        </div>
      );
}

export default Filters;