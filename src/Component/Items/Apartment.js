import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import EditIcon from '@mui/icons-material/Edit';
import ListIcon from '@mui/icons-material/List';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import { Link } from "react-router-dom";

export default function Apartment() {
  return (
    <div style={{ WebkitTextFillColor: "blue", marginLeft: "10%" }}>

      <Link to="/apartment/list" style={{ textDecoration: "none", color: "blue" }}>
        <ListItem button id="list">
          <ListItemIcon>
            <ListIcon style={{ textDecoration: "none", color: "blue" }}/>
          </ListItemIcon>
          <ListItemText primary="List" />
        </ListItem>
      </Link>

      <Link to="/apartment/create" style={{ textDecoration: "none", color: "green" }}>
        <ListItem button id="create">
          <ListItemIcon>
            <AddCircleOutlineIcon style={{ textDecoration: "none", color: "green" }}/>
          </ListItemIcon>
          <ListItemText primary="Create" />
        </ListItem>
      </Link>

      <Link to="/apartment/update" style={{ textDecoration: "none", color: "blue" }}>
        <ListItem button id="update">
          <ListItemIcon>
            <EditIcon style={{ textDecoration: "none", color: "blue" }}/>
          </ListItemIcon>
          <ListItemText primary="Update" />
        </ListItem>
      </Link>

    </div>
  );
}
