// import React from "react";
// import "./Header.css";
// export default function Header(props) {
//   return (
//     <div className="Main-header-admin">
//       <div className="header-title-text">{props.HeaderText}</div>
//     </div>
//   );
// }

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { toast } from "react-toastify";
import { red } from "@mui/material/colors";

export default function Header(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{ background: "#106375", marginLeft: 30, zIndex: 111 }}
        position="fixed"
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, marginLeft: 20 }}
          >
            {props.HeaderText}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
