import React, { useEffect, useState } from "react";

import Table from "../Table/Table";
import Update from "./Update";
import { Button, Container, Stack } from "@mui/material";
import { getApartmentList } from "../GetTableColumn/getApartmentList";
import axios from "../../Services/axios"
import Footer from "../Footer/Footer"


function List() {
  const [rows, setRows] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const toggleRefresh = () => {
    setRefresh(refresh=> !refresh);
  }

  const editApartment = (apartment) => {
    axios.put("api/ApartmentAdmin/Update", apartment).then(response => toggleRefresh()).catch(error => console.log(error))
  };

  const deleteApartment = (apartment) => {
    axios.delete("api/ApartmentAdmin/Delete?id="+apartment.id).then(response => toggleRefresh()).catch(error => console.log(error))
  };

  const apartmentList = getApartmentList.map((e) => ({
    ...e,
    ...(e.field === "ApartmentIsEmpty" && {
      renderCell: (params) => (params.row.ApartmentIsEmpty ? "Yes" : "No"),
    }),
    ...(e.field === "actions" && {
      renderCell: (params) => (
        <Stack spacing={2} direction={"row"}>
          <Update editApartment={editApartment} apartment={params.row} />
          <Button
            variant="contained"
            color="error"
            onClick={() => deleteApartment(params.row)}
          >
            Delete
          </Button>
        </Stack>
      ),
    }),
  }));

  useEffect(() => {
    axios.get("api/ApartmentAdmin/GetAllApartments").then(response => {
      setRows(response.data.list)
    }).catch(error => console.log(error))
  }, [refresh])


  return (
    <div className="">
      <Container>
      <h1 style={{ fontSize: "200%" }}>Apartment List, Update, Delete</h1>
        <Table columns={apartmentList} rows={rows} />
      </Container>
      <Footer style={{ marginTop:50 }}/>

      
    </div>
  );
}

export default List;
