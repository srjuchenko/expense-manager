import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormGroup from "@mui/material/FormGroup";
import Button from "@mui/material/Button";
import Storage, { Data, categories } from "../../utils/Storage";
import "./ExpenseDialog.css";

function ExpenseDialog(props) {
  const data = new Data();
  const { onClose, open, onUpdateExpense } = props;
  const inputInlineStyles = { width: "300px", margin: "5px", fontSize: "22px" };

  const handleClose = () => {
    onClose();
  };

  const handleChangeCategory = (event) => {
    data.category = event.target.value;
  };
  const handleChangeTitle = (event) => {
    data.title = event.target.value;
  };
  const handleChangeDate = (event) => {
    data.date = event.target.value;
  };
  const handleChangeCost = (event) => {
    data.cost = event.target.value;
  };

  const handleAddItem = async () => {
    if (!validate()) {
      alert("All fields must be filled !!");
      return;
    }
    await Storage.addItem(data);
    const items = await Storage.getItems();
    onUpdateExpense(items);
    onClose();
  };

  const validate = () => {
    if (!data.category || !data.cost || !data.date || !data.title) return false;
    return true;
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle
        style={{ backgroundColor: "#333", textAlign: "center", color: "#fff" }}
      >
        Add New Expense
      </DialogTitle>
      <DialogContent
        style={{
          width: "400px",
          backgroundColor: "#666",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        dividers
      >
        <FormGroup>
          <TextField
            id="title"
            labelid="title-label"
            label="Title"
            variant="standard"
            onChange={handleChangeTitle}
            style={inputInlineStyles}
            color="warning"
          />
          <br />
          <TextField
            id="cost"
            label="Cost"
            variant="standard"
            type="number"
            InputProps={{
              inputProps: { min: 0, max: 10000 },
            }}
            color="warning"
            onChange={handleChangeCost}
            style={inputInlineStyles}
          />
          <br />
          <FormControl fullWidth>
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelid="category-label"
              id="category"
              label="Category"
              onChange={handleChangeCategory}
              style={inputInlineStyles}
              color="warning"
              variant="outlined"
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <br />
          <TextField
            id="date"
            type="date"
            variant="standard"
            onChange={handleChangeDate}
            style={inputInlineStyles}
            color="warning"
          />
        </FormGroup>
      </DialogContent>
      <DialogActions style={{ backgroundColor: "#666" }}>
        <Button
          autoFocus
          onClick={handleAddItem}
          color="success"
          variant="contained"
          style={{
            width: "200px",
            margin: "10px auto",
            backgroundColor: "#222",
            borderRadius: "10px",
          }}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ExpenseDialog;
