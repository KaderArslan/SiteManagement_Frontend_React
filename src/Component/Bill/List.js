import React, { useEffect, useState } from "react";
import {Container} from "@mui/material";

import Table from "../Table/Table";
import axios from "../../Services/axios"
import Footer from "../Footer/Footer"

const columns = [
  {field: "billId",headerName: "ID",sortable: false,},
  {field: "billType",headerName: "Bill Type",sortable: false,},
  {field: "billSum",headerName: "Bill Sum",sortable: false,},
  {field: "billIsPaid",headerName: "Is Paid",sortable: false,},
  {field: "billDate",headerName: "End Date",sortable: false,},
  {field: "apartmentId",headerName: "Apartment ID",sortable: false,},
  {field: "userId",headerName: "User ID",sortable: false,}
];

export function getStorgeItem(key) {
  return JSON.parse(sessionStorage.getItem(key));
}

export const getAllBills = async () => {
  const auth = getStorgeItem('user');

  return axios.get("/api/BillAdmin/GetAll", {
    headers: {
      'Authorization': `Bearer ${auth.accessToken}`
    }
  })
}

export const updateBill = async (billId, billType, billSum, billIsPaid, billDate, apartmentId,userId) => {
  const auth = getStorgeItem('user');

  return axios.post("/api/BillAdmin/Update", {
    billId : billId,
    billType: billType,
    billSum: billSum,
    billIsPaid: billIsPaid,
    billDate: billDate,
    apartmentId : apartmentId,
    userId : userId
  }, {
    headers: {
      'Authorization': `Bearer ${auth.accessToken}`
    }
  })
};

export const deleteBill = async (id) => {
  const auth = getStorgeItem('user');

  return axios.put('/api/BillAdmin/Delete?id=' + id, {},{
    headers: {
      'Authorization': `Bearer ${auth.accessToken}`
    }
  })
};

function List() {


  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);

  const updateBill = async (bill) => {
    let response = await updateBill(bill)
    if(response.data.dtoUserLogin.userIsActive === true){
      fetchData()
    }
  };

  const handleDelete = async (bill) => {
    let response = await deleteBill(bill)
    if(response.data.dtoUserLogin.userIsActive === true){
      fetchData()
    }
  };

  async function fetchData() {
    let response = await getAllBills()
    console.log(response.data.data)
    setRows(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="">
      <Container>
      <h1 style={{ fontSize: "200%" }}>Bill List, Update, Delete</h1>
        <Table columns={columns} rows={rows}  handleDelete={handleDelete} setOpen={setOpen} editBill={updateBill}/>
      </Container>
      <Footer style={{ marginTop:50 }}/>
    </div>
  );
}

export default List;
