import React, { useEffect, useState } from "react";

import Table from "../Table/Table";
import { Container} from "@mui/material";
import { getMessageList } from "../GetTableColumn/getMessageList";
import axios from "../../Services/axios"
import Footer from "../Footer/Footer"


function Message() {
  const [rows, setRows] = useState([]);

  const messageList = getMessageList.map((e) => ({
    ...e,
    ...(e.field === "actions" && {
      renderCell: (params) => (params.row.actions ? "Yes" : "No"),
    }),
  }));

  useEffect(() => {
    axios.get("api/MessageAdmin/GetAll").then(response => {
      setRows(response.data.list)
    }).catch(error => console.log(error))
  }, [])


  return (
    <div className="">
      <Container>
        <h1 style={{ fontSize: "200%" }}>Message List</h1>
        <Table columns={messageList} rows={rows} />
      </Container>
      <Footer style={{ marginTop:50 }}/>
      
    </div>
  );
}

export default Message;
