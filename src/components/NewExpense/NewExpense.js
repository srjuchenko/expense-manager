/*
  Moshe Frankipour 206196693
  Sergey Juchenko 319365102
*/
import { useState, useEffect } from "react";
import ExpenseDialog from "./ExpenseDialog";
import AlertMsg from "../AlertMsg/AlertMsg"
import "./NewExpense.css";

export default function NewExpenses(props) {
  const [open, setOpen] = useState(false);
  const [showMsg, setShowMsg] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (isSuccessful = false) => {
    setOpen(false);
    setShowMsg(isSuccessful);
  };

  useEffect(() => {
    setTimeout(function () {
      setShowMsg(false)
    }, 3000);
  }, [showMsg])

  return (
    <div>
      <AlertMsg show={showMsg} />
      <button className="button-style" onClick={handleClickOpen}>
        <div className="plus-icon"></div>
        Add New Expense
      </button>
      <ExpenseDialog
        onUpdateExpense={props.onUpdateExpense}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
