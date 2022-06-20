import {  Container } from "@mui/material";
import React from "react";

import UserForm from "./UserForm";
import axios from "../../Services/axios"
import Footer from "../Footer/Footer"

function Create() {

  const addUser = (apartment) => {
    axios.post("api/UserAdmin/Add", apartment).then(response => response).catch(error => console.log(error))
  };


  return (
     <div className="">
      <Container>
          <UserForm addUser={addUser} />
      </Container>
      <Footer style={{ marginTop:50 }}/>
    </div>  

  );
}

export default Create;
