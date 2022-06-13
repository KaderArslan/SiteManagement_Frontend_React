import * as React from "react";
import "./styles.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Footer from "./Component/Footer/Footer";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" target="_blank" href="https://www.linkedin.com/in/kaderarslan/">
      Kader Arslan
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  var emailValid = "";
  var passValid = "";
  var currentData = [];
  var error = true;
  const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  function handleFirstName(e) {
    setFirstName(e.target.value);
  }
  function handleLastName(e) {
    setLastName(e.target.value);
  }
  function handleEmail(event) {
    setEmail(event.target.value);
  }
  function handlePass(event) {
    setPass(event.target.value);
  }
  if (regex.test(email) || email.length === 0) {
    emailValid = "";
  } else {
    emailValid = "Email address is not valid";
  }
  if (pass.length >= 8 || pass.length === 0) {
    passValid = "";
  } else {
    passValid = "Password should contain atleast 8 characters";
  }
  if (
    email.length !== 0 &&
    pass.length !== 0 &&
    firstName.length > 0 &&
    lastName.length > 0 &&
    emailValid.length === 0 &&
    passValid.length === 0
  ) {
    error = false;
    currentData = [
      {
        id: email,
        "First Name": firstName,
        "Last Name": lastName,
        password: pass
      }
    ];
  } else {
    error = true;
  }
  function signUp() {
    var oldData = JSON.parse(localStorage.getItem("loginData"));
    if (oldData) {
      oldData = oldData.concat(currentData);
    } else {
      oldData = currentData;
    }
    localStorage.setItem("loginData", JSON.stringify(oldData));
    setEmail("");
    setPass("");
    setFirstName("");
    setLastName("");
  }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  value={firstName}
                  fullWidth
                  onChange={handleFirstName}
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  value={lastName}
                  onChange={handleLastName}
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={email}
                  onChange={handleEmail}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <p className="error">{emailValid}</p>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={pass}
                  onChange={handlePass}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <p className="error">{passValid}</p>

            </Grid>
            <Button
              href="/signin"
              type="submit"
              fullWidth
              variant="contained"
              onClick={signUp}
              sx={{ mt: 3, mb: 2 }}
              disabled={error === true ? true : false}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Footer sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
