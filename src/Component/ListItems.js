import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

import Apartment from "./Items/Apartment";
import Bill from "./Items/Bill";
import User from "./Items/User";

import MailIcon from '@mui/icons-material/Mail';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import HomeIcon from '@mui/icons-material/Home';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import PaymentsIcon from '@mui/icons-material/Payments';
import PaymentIcon from '@mui/icons-material/Payment';

export default function MainListItems() {
  
  const [apartment, setApartment] = React.useState(false);
  const [bill, setBill] = React.useState(false);
  const [user, setUser] = React.useState(false);

  function handleApartment() {
    setApartment(!apartment);
  }
  function handleBill() {
    setBill(!bill);
  }
  function handleUser() {
    setUser(!user);
  }

  return (
    <div>

      <Link to="/home" style={{ textDecoration: "none" , color: "#757575" }}>
        <ListItem button id="home">
          <ListItemIcon>
            <HomeIcon/>
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </Link>

      <ListItem button onClick={handleApartment}>
        <ListItemIcon>
          <HomeWorkIcon />
        </ListItemIcon>
        <ListItemText primary="Apartment" />
      </ListItem>
      {apartment ? <Apartment /> : null}

      <ListItem button onClick={handleBill}>
        <ListItemIcon>
          <PaymentIcon />
        </ListItemIcon>
        <ListItemText primary="Bill" />
      </ListItem>
      {bill ? <Bill /> : null}

      <Link to="/message" style={{ textDecoration: "none" , color: "#757575" }}>
        <ListItem button id="message">
          <ListItemIcon>
            <MailIcon/>
          </ListItemIcon>
          <ListItemText primary="Message" />
        </ListItem>
      </Link>

      <ListItem button onClick={handleUser}>
        <ListItemIcon>
          <PeopleAltIcon />
        </ListItemIcon>
        <ListItemText primary="User" />
      </ListItem>
      {user ? <User /> : null}

      <Link to="/payment" style={{ textDecoration: "none" , color: "#757575" }}>
        <ListItem button id="payment">
          <ListItemIcon>
            <PaymentsIcon/>
          </ListItemIcon>
          <ListItemText primary="Payment" />
        </ListItem>
      </Link>
      
    </div>
  );
}