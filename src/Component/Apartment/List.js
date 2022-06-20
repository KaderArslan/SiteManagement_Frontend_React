import React, { useEffect, useState } from "react";
import {  Container } from "@mui/material";
import axios from "../../Services/axios"
import Table from "../Table/Table";
import Footer from "../Footer/Footer"

const columns = [
  {field: "apartmentId",headerName: "ID",sortable: false,},
  {field: "apartmentBlock",headerName: "Block",sortable: false,},
  {field: "apartmentIsEmpty",headerName: "IsEmpty",sortable: false,},
  {field: "apartmentType",headerName: "Type",sortable: false,},
  {field: "apartmentFloor",headerName: "Floor",sortable: false,},
  {field: "apartmentNumber",headerName: "Number",sortable: false,},
  {field: "apartmentIsOwner",headerName: "IsOwner",sortable: false,},
  {field: "apartmentStartDate",headerName: "StartDate",sortable: false,},
  {field: "apartmentEndDate",headerName: "EndDate",sortable: false,},
];

export function getStorgeItem(key) {
  return JSON.parse(sessionStorage.getItem(key));
}

export const getAllApartments = async () => {
  const auth = getStorgeItem('user');

  return axios.get("/api/ApartmentAdmin/GetAll", {
    headers: {
      'Authorization': `Bearer ${auth.accessToken}`
    }
  })
}

export const updateApartment = async (apartmentId, apartmentBlock, apartmentIsEmpty, apartmentType, apartmentFloor, apartmentNumber,apartmentIsOwner,apartmentStartDate, apartmentEndDate) => {
  const auth = getStorgeItem('user');

  return axios.post("/api/ApartmentAdmin/Update", {
    apartmentId : apartmentId,
    apartmentBlock: apartmentBlock,
    apartmentIsEmpty: apartmentIsEmpty,
    apartmentType: apartmentType,
    apartmentFloor: apartmentFloor,
    apartmentNumber : apartmentNumber,
    apartmentIsOwner: apartmentIsOwner,
    apartmentStartDate : apartmentStartDate,
    apartmentEndDate : apartmentEndDate
  }, {
    headers: {
      'Authorization': `Bearer ${auth.accessToken}`
    }
  })
};

export const deleteApartment = async (id) => {
  const auth = getStorgeItem('user');

  return axios.put('/api/ApartmentAdmin/Delete?id=' + id, {},{
    headers: {
      'Authorization': `Bearer ${auth.accessToken}`
    }
  })
};

function List() {

  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);

  const updateApartment = async (apartment) => {
    let response = await updateApartment(apartment)
    if(response.data.dtoUserLogin.userIsActive === true){
      fetchData()
    }
  };

  const handleDelete = async (apartment) => {
    let response = await deleteApartment(apartment)
    if(response.data.dtoUserLogin.userIsActive === true){
      fetchData()
    }
  };

  async function fetchData() {
    let response = await getAllApartments()
    console.log(response.data.data)
    setRows(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div>
      <Container>
      <h1 style={{ fontSize: "200%" }}>Apartment List, Update, Delete</h1>
        <Table columns={columns} rows={rows}  handleDelete={handleDelete} setOpen={setOpen} editApartment={updateApartment}/>
      </Container>
      <Footer style={{ marginTop:50 }}/>


    </div>
  );
}

export default List;
