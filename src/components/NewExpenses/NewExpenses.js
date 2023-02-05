import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent  from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormGroup from '@mui/material/FormGroup';

import Storage , { Data, Category } from "../../utils/Storage";

function NewExpensesDialog(props) {
  const data = new Data();
  const { onClose, open, onUpdateExpense } = props;

  const handleClose = () => {
    onClose();
  };

  const handleChangeCategory = (event) => {
    data.category = event.target.value
  }
  const handleChangeTitle = (event) => {
    data.title = event.target.value
  }
  const handleChangeDate = (event) => {
    data.date = event.target.value
  }
  const handleChangeCost = (event) => {
    data.cost = event.target.value
  }

  const handleAddItem = async() => {
    await Storage.addItem(data)
    const items = await Storage.getItems()
    onUpdateExpense(items)
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Add New Expenses</DialogTitle>
      <DialogContent dividers>
      <FormGroup>
        <TextField 
            id="title" 
            labelId='title-label'
            label="Title" 
            variant="standard" 
            onChange={handleChangeTitle}
            style={{ width: "200px", margin: "5px" }}
            />
            <br />
        <TextField
            id="cost" 
            label="Cost" 
            variant="standard" 
            type="number"
            InputProps={{
                inputProps: { min: 0 }
            }}
            onChange={handleChangeCost}
            style={{ width: "200px", margin: "5px" }}
            />
            <br />
            <FormControl fullWidth>
            <InputLabel id="category-label">Category</InputLabel>
            <Select
                labelId="category-label"
                id="category"
                label="Category"
                onChange={handleChangeCategory}
                style={{ width: "200px", margin: "5px" }}
            >
                <MenuItem value={Category.A.name}>{Category.A.name}</MenuItem>
                <MenuItem value={Category.B.name}>{Category.B.name}</MenuItem>
                <MenuItem value={Category.C.name}>{Category.C.name}</MenuItem>
            </Select>
            </FormControl>
            <br />
            <TextField 
                id="date" 
                type="date"
                variant="standard" 
                onChange={handleChangeDate}
                style={{ width: "200px", margin: "5px" }}
            />
        </FormGroup>
      </DialogContent>
      <DialogActions>
          <Button 
            autoFocus 
            onClick={handleAddItem}
            color="success"
            variant="contained"
            style={{ width: "200px", margin: "5px" }}
          >
            Add
          </Button>
        </DialogActions>
    </Dialog>
  );
}

NewExpensesDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  onAddExpense: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function NewExpenses(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add New Expenses
      </Button>
      <NewExpensesDialog
        onUpdateExpense={props.onUpdateExpense}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}