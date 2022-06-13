import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import MainListItems from "./ListItems";

import Home from "./Home/Home";
import Message from "./Message/Message";
import Payment from "./Payment/Payment";

import ApartmentList from "./Apartment/List";
import ApartmentCreate from "./Apartment/Create";
import ApartmentUpdate from "./Apartment/Update";

import BillList from "./Bill/List";
import BillCreate from "./Bill/Create";
import BillUpdate from "./Bill/Update";

import UserList from "./User/List";
import UserCreate from "./User/Create";
import UserUpdate from "./User/Update";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9)
      }
    })
  }
}));

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  function checkRoute() {
    var r = window.location.pathname;
    if (r === "/home") {
      return <Home />;
    }

    else if (r === "/apartment/list") {
      return <ApartmentList />;
    }
    else if (r === "/apartment/create") {
      return <ApartmentCreate />;
    }
    else if (r === "/apartment/update") {
      return <ApartmentUpdate />;
    }

    else if (r === "/bill/list") {
      return <BillList />;
    }
    else if (r === "/bill/create") {
      return <BillCreate />;
    }
    else if (r === "/bill/update") {
      return <BillUpdate />;
    }

    else if (r === "/user/list") {
      return <UserList />;
    }
    else if (r === "/user/create") {
      return <UserCreate />;
    }
    else if (r === "/user/update") {
      return <UserUpdate />;
    }

    else if (r === "/message") {
      return <Message />;
    }
    else if (r === "/payment") {
      return <Payment />;
    }

    // else if (r === "/log/data") {
    //   return <Datalog />;
    // }  

    else {
      return <Home />;
    }
  }
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px" // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" })
              }}
            >
              <MenuIcon />
            </IconButton>
            {/* <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Site Management
            </Typography> */}
            {/* <IconButton color="inherit">
              <Badge badgeContent={8} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1]
            }}
          >
            <Typography
              component="h1"
              variant="h6"
              color="primary"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Site Management
            </Typography>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List>
            <MainListItems />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto"
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 2, mb: 4 }}>
            {checkRoute()}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}