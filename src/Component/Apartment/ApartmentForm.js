import { Button, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

function ApartmentForm({ setOpen, addApartment, editApartment, oldApartment }) {
  const [apartment, setApartment] = useState({
    apartmentId: "",
    apartmentBlock: "",
    apartmentIsEmpty: "",
    apartmentType: "",
    apartmentFloor: 0,
    apartmentNumber: 0,
    apartmentIsOwner: "",
    apartmentStartDate: "",
    apartmentEndDate: "",
  });

  const handleChange = (e) => {
    setApartment({ ...apartment, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log(apartment);
    if (editApartment) {
      editApartment(apartment);
    } else {
      addApartment(apartment);
    }
    setOpen(false);
  };

  useEffect(() => {
    if (oldApartment) setApartment(oldApartment);
  }, [oldApartment]);

  return (
    <div style={{ marginBottom: "20px" }}>

      <h1 style={{ fontSize: "200%" }}>
        {!editApartment ? "Apartment Create" : "Edit Apartment"}
      </h1>

      <Stack spacing={2}>

      <Stack direction={"row"} spacing={3}>
        <TextField
          name="apartmentId"
          label="Apartment ID"
          value={apartment.apartmentId}
          onChange={handleChange}
          fullWidth
          type="number"
        />
      </Stack>

      <Stack direction={"row"} spacing={3}>
        <TextField
          name="apartmentBlock"
          label="Apartment Block"
          value={apartment.apartmentBlock}
          onChange={handleChange}
          fullWidth
          inputProps={{ maxLength: 1 }}
        />
        <TextField
          name="apartmentType"
          label="Apartment Type"
          value={apartment.apartmentType}
          onChange={handleChange}
          fullWidth
        />
      </Stack>

        <Stack direction={"row"} spacing={3}>
          <TextField
            name="apartmentFloor"
            label="Apartment Floor"
            value={apartment.apartmentFloor}
            onChange={handleChange}
            fullWidth
            type="number"
          />
          <TextField
            name="apartmentNumber"
            label="Apartment Number"
            value={apartment.apartmentNumber}
            onChange={handleChange}
            fullWidth
            type="number"
          />
        </Stack>

        <Stack direction={"row"} spacing={3}>
          <TextField
            name="apartmentIsEmpty"
            label="Is Empty"
            value={apartment.apartmentIsEmpty}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            name="apartmentIsOwner"
            label="Is Owner"
            value={apartment.apartmentIsOwner}
            onChange={handleChange}
            fullWidth
          />
        </Stack>

        <Stack direction={"row"} spacing={3}>
          <TextField
            name="apartmentStartDate"
            value={apartment.apartmentStartDate}
            onChange={handleChange}
            fullWidth
            type="date"
          />
          <TextField
            name="apartmentEndDate"
            value={apartment.apartmentEndDate}
            onChange={handleChange}
            fullWidth
            type="date"
          />
        </Stack>

        <Stack direction={"row"} spacing={3}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSave}
          >
            Save
          </Button>
        </Stack>

    </Stack>
    </div>
  );
}

export default ApartmentForm;
