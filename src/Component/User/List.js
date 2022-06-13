import React, { useEffect, useState } from "react";
import {Button, Container, Stack,} from "@mui/material";

import Table from "../Table/Table";
import { getUserList } from "../GetTableColumn/getUserList";
import axios from "../../Services/axios"
import Footer from "../Footer/Footer"

import Update from "./Update";

function List() {
  const [rows, setRows] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const toggleRefresh = () => {
    setRefresh(refresh => !refresh);
  }

  const editUser = (user) => {
    axios.put("api/UserAdmin/Update", user).then(response => toggleRefresh()).catch(error => console.log(error))
  };

  const deleteUser = (user) => {
    axios.delete("api/UserAdmin/Delete?id=" + user.id).then(response => toggleRefresh()).catch(error => console.log(error))
  };

  const userList = getUserList.map((e) => ({
    ...e,
    ...(e.field === "userIsActive" && {
      renderCell: (params) => (params.row.userIsActive ? "Yes" : "No"),
    }),
    ...(e.field === "actions" && {
      renderCell: (params) => (
        <Stack spacing={2} direction={"row"}>
          <Update editUser={editUser} user={params.row} />
          <Button
            variant="contained"
            color="error"
            onClick={() => deleteUser(params.row)}
          >
            Delete
          </Button>
        </Stack>
      ),
    })
  }));

  useEffect(() => {
    axios.get("api/UserAdmin/GetAll").then(response => {
      setRows(response.data.list)
    }).catch(error => console.log(error))
  }, [refresh])

  return (
    <div className="">
      <Container>
      <h1 style={{ fontSize: "200%" }}>User List, Update, Delete</h1>
        <Table columns={userList} rows={rows} />
      </Container>
      <Footer style={{ marginTop:50 }}/>
    </div>
  );
}

export default List;
