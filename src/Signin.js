import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./styles.css";

import Footer from "./Component/Footer/Footer";

const theme = createTheme();

export default function SignIn() {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [data, setData] = React.useState([]);
  var emailValid = "";
  var passValid = "";
  var valid = false;
  var error = "";
  var found = false;
  const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  if (regex.test(email) || !email.length) {
    emailValid = "";
  } else {
    emailValid = "Email is badly formated";
  }
  if (pass.length < 8 && pass.length !== 0) {
    passValid = "Minimum 8 characters is required";
  } else {
    passValid = "";
  }
  if (email.length > 0 && pass.length > 0 && !passValid && !emailValid) {
    valid = true;
  } else {
    valid = false;
  }
  function checkLogin() {
    setData(JSON.parse(localStorage.getItem("loginData")));
  }
  if (data.length > 0) {
    for (var i = 0; i < data.length; i++) {
      if (email === data[i]["id"]) {
        if (pass === data[i]["password"]) {
          found = true;
          error = " ";
          break;
        } else {
          found = false;
          error = "Password Incorrect";
          break;
        }
      }
    }
    if (!error) {
      found = false;
      error = "No user record found";
    }
    console.log(error);
  } else {
    error = "";
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
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
                setData([]);
              }}
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <div className="error">{emailValid}</div>
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={(e) => {
                setPass(e.target.value);
                setData([]);
              }}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <div className="error">{passValid}</div>

            <div className="login">{error}</div>
            <Button
              href={found === true ? "/dashboard" : "#"}
              type="submit"
              fullWidth
              disabled={valid === true ? false : true}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={checkLogin}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {" Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Footer sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
