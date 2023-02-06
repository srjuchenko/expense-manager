import { useState } from "react";
import ExpenseDialog from "./ExpenseDialog";

export default function NewExpenses(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="button-style" onClick={handleClickOpen}>
        Add New Expenses
      </button>
      <ExpenseDialog
        onUpdateExpense={props.onUpdateExpense}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
