import React, {useState, useRef, useEffect} from "react";
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

import axios from '../../Services/axios';
import Dashboard from '../Dashboard'
import Footer from "../Footer/Footer";

const LOGIN_URL = '/admin';

const theme = createTheme();

export default function AdminLogin() {

    const [adminEmail, setAdminEmail] = useState('');
    const [adminPassword, setAdminPassword] = useState('');
    
    const userRef = useRef();
    const errRef = useRef();
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);//

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [adminEmail, adminPassword])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ adminEmail, adminPassword }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
                
            );
            // console.log(JSON.stringify(response?.data));
            
            //   console.log(response.data.data.dtoAdminLogin.adminName)
            if (response.data.data.dtoAdminLogin.adminName === 'Kader') {
                setSuccess(true);
              }
              else{
                sessionStorage.clear();
                return true;
              }


             if (!JSON.parse(sessionStorage.getItem("admin"))) {
                sessionStorage.setItem("admin",JSON.stringify((response?.data))
              );
            }
            
            setAdminEmail('');
            setAdminPassword('');
            
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing User Email or User Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            setSuccess(false);
            errRef.current.focus();
        }
    }

  return (
    <>
        {success ? (
            <Dashboard />
        ) : (

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
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Admin Sign in
                </Typography>
                <Box onSubmit={handleSubmit} component="form" noValidate sx={{ mt: 1 }}>
                    <TextField htmlFor="adminEmail"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    ref={userRef}
                    type="email"
                    value={adminEmail}
                    onChange={(e) => setAdminEmail(e.target.value)}
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    />
                    <TextField htmlFor="adminPassword"
                    margin="normal"
                    required
                    fullWidth
                    onChange={(e) => setAdminPassword(e.target.value)}
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={adminPassword}
                    autoComplete="current-password"
                    />
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    // onClick={checkLogin}
                    >
                    Sign In
                    </Button>
                    <Grid container>
                        <Grid item >
                            <Link href="/user" variant="body2">
                            {" Are you a user? User Sign In"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
                </Box>
                <Footer sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>

    )}
    </>
  );
}
