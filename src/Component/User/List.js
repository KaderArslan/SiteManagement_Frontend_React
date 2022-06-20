import React, { useEffect, useState } from "react";
import {Button, Container, Stack,} from "@mui/material";

import Table from "../Table/Table";
import axios from "../../Services/axios"
import Footer from "../Footer/Footer"
import Update from "./Update";

const columns = [
  {field: "userId",headerName: "ID",sortable: false,},
  {field: "userName",headerName: "Name",sortable: false,},
  {field: "userSurname",headerName: "Surname",sortable: false,},
  {field: "userTcnum",headerName: "TC",sortable: false,},
  {field: "userEmail",headerName: "Email",sortable: false,},
  {field: "userPhoneNum",headerName: "Phone",sortable: false,},
  {field: "userCarStatus",headerName: "Car Status",sortable: false,},
  {field: "userIsActive",headerName: "Is Active",sortable: false,},
  {field: "apartmentId",headerName: "Apartment ID",sortable: false,}
];

export function getStorgeItem(key) {
  return JSON.parse(sessionStorage.getItem(key));
}

export const getAllUsers = async () => {
  const auth = getStorgeItem('user');

  return axios.get("/api/UserAdmin/GetAll", {
    headers: {
      'Authorization': `Bearer ${auth.accessToken}`
    }
  })
}

export const updateUser = async (userId, userName, userSurname, userTcnum, userEmail, userPassword,userPhoneNum,userCarStatus,userIsActive,apartmentId) => {
  const auth = getStorgeItem('user');

  return axios.post("/api/UserAdmin/Update", {
    userId : userId,
    userName: userName,
    userSurname: userSurname,
    userTcnum: userTcnum,
    userEmail: userEmail,
    userPassword : userPassword,
    userPhoneNum : userPhoneNum,
    userCarStatus: userCarStatus,
    userIsActive:userIsActive,
    apartmentId:apartmentId
  }, {
    headers: {
      'Authorization': `Bearer ${auth.accessToken}`
    }
  })
};

export const deleteUser = async (id) => {
  const auth = getStorgeItem('user');

  return axios.put('/api/UserAdmin/Delete?id=' + id, {},{
    headers: {
      'Authorization': `Bearer ${auth.accessToken}`
    }
  })
};

function List() {
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);

  const updateUser = async (bill) => {
    let response = await updateUser(bill)
    if(response.data.dtoUserLogin.userIsActive === true){
      fetchData()
    }
  };

  const handleDelete = async (bill) => {
    let response = await deleteUser(bill)
    if(response.data.dtoUserLogin.userIsActive === true){
      fetchData()
    }
  };

  async function fetchData() {
    let response = await getAllUsers()
    console.log(response.data.data)
    setRows(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="">
      <Container>
      <h1 style={{ fontSize: "200%" }}>User List, Update, Delete</h1>
        <Table columns={columns} rows={rows} handleDelete={handleDelete} setOpen={setOpen} editUser={updateUser}/>
      </Container>
      <Footer style={{ marginTop:50 }}/>
    </div>
  );
}

export default List;
