import {  Container } from "@mui/material";
import React from "react";

import BillForm from "./BillForm";
import axios from "../../Services/axios"
import Footer from "../Footer/Footer"

function Create() {

  const addBill = (apartment) => {
    axios.post("api/BillAdmin/Add", apartment).then(response => response).catch(error => console.log(error))
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
