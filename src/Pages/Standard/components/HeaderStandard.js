import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { toast } from "react-toastify";
import { red } from "@mui/material/colors";

export default function HeaderStandard(props) {
  const styleToast = {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 2000,
    hideProgressBar: true,
    closeButton: false,
  };
  const onLogOut = (event) => {
    event.preventDefault();
    sessionStorage.removeItem("token");
    props.setAuth(false);
    props.setAdmin(false);
    toast.success("Logout Successful!", styleToast);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ background: "#106375" }} position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Class : {props.standard}
          </Typography>
          <Button color="inherit" onClick={onLogOut}>
            LOG OUT
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
