import React, { useEffect, useState } from "react";
import {Button, Container, Stack,} from "@mui/material";

import Table from "../Table/Table";
import { getBillList } from "../GetTableColumn/getBillList";
import axios from "../../Services/axios"
import Footer from "../Footer/Footer"

import Update from "./Update";

function List() {
  const [rows, setRows] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const toggleRefresh = () => {
    setRefresh(refresh => !refresh);
  }

  const editBill = (bill) => {
    axios.put("api/BillAdmin/Update", bill).then(response => toggleRefresh()).catch(error => console.log(error))
  };

  const deleteBill = (bill) => {
    axios.delete("api/BillAdmin/Delete?id=" + bill.id).then(response => toggleRefresh()).catch(error => console.log(error))
  };

  const billList = getBillList.map((e) => ({
    ...e,
    ...(e.field === "actions" && {
      renderCell: (params) => (
        <Stack spacing={2} direction={"row"}>
          <Update editBill={editBill} bill={params.row} />
          <Button
            variant="contained"
            color="error"
            onClick={() => deleteBill(params.row)}
          >
            Delete
          </Button>
        </Stack>
      ),
    })
  }));

  useEffect(() => {
    axios.get("api/BillAdmin/GetAll").then(response => {
      setRows(response.data.list)
    }).catch(error => console.log(error))
  }, [refresh])

  return (
    <div className="">
      <Container>
      <h1 style={{ fontSize: "200%" }}>Bill List, Update, Delete</h1>
        <Table columns={billList} rows={rows} />
      </Container>
      <Footer style={{ marginTop:50 }}/>
    </div>
  );
}

export default List;
