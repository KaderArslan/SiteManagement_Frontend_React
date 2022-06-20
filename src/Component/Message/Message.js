import React, { useEffect, useState } from "react";
import { Container} from "@mui/material";

import Table from "../Table/Table";
import axios from "../../Services/axios"
import Footer from "../Footer/Footer"

const getMessageList = [
  {field: "messageId",headerName: "ID",sortable: false,},
  {field: "messageTitle",headerName: "Title",sortable: false,},
  {field: "messageText",headerName: "Text",sortable: false,},
  {field: "messageSender",headerName: "Sender",sortable: false,},
  {field: "messageReceiver",headerName: "Receiver",sortable: false,},
  {field: "messageIsRead",headerName: "Is Read",sortable: false,},
  {field: "messageDate",headerName: "Message Date",sortable: false,}
];


function Message() {
  const [rows, setRows] = useState([]);

  const messageList = getMessageList.map((e) => ({
    ...e,
    ...(e.field === "messageIsRead" && {
      renderCell: (params) => (params.row.messageIsRead ? "True" : "False"),
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
