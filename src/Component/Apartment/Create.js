import {  Container } from "@mui/material";
import React, { useState } from "react";

import ApartmentForm from "./ApartmentForm";
import axios from "../../Services/axios"
import Footer from "../Footer/Footer"

function Create() {
  const [refresh, setRefresh] = useState(false);

  const toggleRefresh = () => {
    setRefresh(refresh=> !refresh);
  }

  const addApartment = (apartment) => {
    axios.post("api/ApartmentAdmin/Add", apartment).then(response => toggleRefresh()).catch(error => console.log(error))
  };


  return (
     <div className="">
      <Container>
          <ApartmentForm addApartment={addApartment} />
      </Container>
      <Footer style={{ marginTop:50 }}/>
    </div>  

  );
}

export default Create;
