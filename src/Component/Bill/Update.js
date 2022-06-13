import React, { useState } from "react";
import BillForm from "./BillForm";
import MuiDialog from "../Table/OpenDialog";

function Update({ editBill, bill }) {
  const [open, setOpen] = useState(false);
  return (
    <MuiDialog btnText="Edit" open={open} setOpen={setOpen}>
      <BillForm setOpen={setOpen} editBill={editBill} oldBill={bill} />
    </MuiDialog>
  );
}

export default Update;