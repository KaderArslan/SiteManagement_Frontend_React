import { Button, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

function UserForm({ setOpen, addUser, editUser, oldUser }) {
  const [user, setUser] = useState({
    userId: "",
    userName: "",
    userSurname: "",
    userTcnum: "",
    userEmail: "",
    userPassword: "",
    userPhoneNum: "",
    userCarStatus: 0,
    userIsActive:"",
    apartmentId:"",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log(user);
    if (editUser) {
      editUser(user);
    } else {
      addUser(user);
    }
    setOpen(false);
  };

  useEffect(() => {
    if (oldUser) setUser(oldUser);
  }, [oldUser]);

  return (
    <div style={{ marginBottom: "20px" }}>

      <h1 style={{ fontSize: "200%" }}>
        {!editUser ? "User Create" : "Edit User"}
      </h1>

      <Stack spacing={2}>

      <Stack direction={"row"} spacing={3}>
        <TextField
          name="userId"
          label="User ID"
          value={user.userId}
          onChange={handleChange}
          fullWidth
          type="number"
        />
      </Stack>

      <Stack direction={"row"} spacing={3}>
        <TextField
          name="userName"
          label="User Name"
          value={user.userName}
          onChange={handleChange}
          fullWidth
          inputProps={{ maxLength: 1 }}
        />
        <TextField
          name="userSurname"
          label="User Surname"
          value={user.userSurname}
          onChange={handleChange}
          fullWidth
        />
      </Stack>

        <Stack direction={"row"} spacing={3}>
          <TextField
            name="userTcnum"
            label="Tc No"
            value={user.userTcnum}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            name="userEmail"
            value={user.userEmail}
            onChange={handleChange}
            fullWidth
          />
        </Stack>

        <Stack direction={"row"} spacing={3}>
          <TextField
            name="userPassword"
            label="User Password"
            value={user.userPassword}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            name="userPhoneNum"
            label="Phone Num"
            value={user.userPhoneNum}
            onChange={handleChange}
            fullWidth
          />
        </Stack>

        <Stack direction={"row"} spacing={3}>
          <TextField
            name="userCarStatus"
            label="User CarStatus"
            value={user.userCarStatus}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            name="userIsActive"
            label="Is Active"
            value={user.userIsActive}
            onChange={handleChange}
            fullWidth
          />
        </Stack>
        <Stack direction={"row"} spacing={3}>
          
          <TextField
            name="apartmentId"
            label="Apartment ID"
            value={user.apartmentId}
            onChange={handleChange}
            fullWidth
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

export default UserForm;
