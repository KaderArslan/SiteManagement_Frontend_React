import {  Container } from "@mui/material";
import React, { useState } from "react";

import BillForm from "./BillForm";
import axios from "../../Services/axios"
import Footer from "../Footer/Footer"

function Create() {
  const [refresh, setRefresh] = useState(false);

  const toggleRefresh = () => {
    setRefresh(refresh=> !refresh);
  }

  const addBill = (apartment) => {
    axios.post("api/BillAdmin/Add", apartment).then(response => toggleRefresh()).catch(error => console.log(error))
  };


  return (
     <div className="">
      <Container>
          <BillForm addBill={addBill} />
      </Container>
      <Footer style={{ marginTop:50 }}/>
    </div>  

  );
}

export default Create;
