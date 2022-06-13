import { Button, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

function BillForm({ setOpen, addBill, editBill, oldBill }) {
  const [bill, setBill] = useState({
    billId: "",
    billType: "",
    billSum: "",
    billIsPaid: "",
    billDate: "",
    apartmentId: "",
    userId: 0,
  });

  const handleChange = (e) => {
    setBill({ ...bill, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log(bill);
    if (editBill) {
      editBill(bill);
    } else {
      addBill(bill);
    }
    setOpen(false);
  };

  useEffect(() => {
    if (oldBill) setBill(oldBill);
  }, [oldBill]);

  return (
    <div style={{ marginBottom: "20px" }}>

      <h1 style={{ fontSize: "200%" }}>
        {!editBill ? "Bill Create" : "Edit Bill"}
      </h1>

      <Stack spacing={2}>

      <Stack direction={"row"} spacing={3}>
        <TextField
          name="billId"
          label="Bill ID"
          value={bill.billId}
          onChange={handleChange}
          fullWidth
          type="number"
        />
      </Stack>

      <Stack direction={"row"} spacing={3}>
        <TextField
          name="billType"
          label="Bill Type"
          value={bill.billType}
          onChange={handleChange}
          fullWidth
          inputProps={{ maxLength: 1 }}
        />
        <TextField
          name="billSum"
          label="Bill Sum"
          value={bill.billSum}
          onChange={handleChange}
          fullWidth
          type="number"
        />
      </Stack>

        <Stack direction={"row"} spacing={3}>
          <TextField
            name="billIsPaid"
            label="Is Paid"
            value={bill.billIsPaid}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            name="billDate"
            value={bill.billDate}
            onChange={handleChange}
            fullWidth
            type="date"
          />
        </Stack>

        <Stack direction={"row"} spacing={3}>
          <TextField
            name="apartmentId"
            label="apartment ID"
            value={bill.apartmentId}
            onChange={handleChange}
            fullWidth
            type="number"
          />
          <TextField
            name="userId"
            label="user ID"
            value={bill.userId}
            onChange={handleChange}
            fullWidth
            type="number"
          />
        </Stack>

        <Stack direction={"row"} spacing={3}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSave}
          >
            Save
          </Button>
        </Stack>

    </Stack>
    </div>
  );
}

export default BillForm;
