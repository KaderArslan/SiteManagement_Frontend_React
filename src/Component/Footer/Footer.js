import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export default function Footer(props) {
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