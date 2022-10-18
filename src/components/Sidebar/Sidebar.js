import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SidebarFooter } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import {
  BiMenu,
  BiHome,
  BiGroup,
  BiLockAlt,
  BiAnalyse,
  BiLogOutCircle,
} from "react-icons/bi";
import "./Sidebar-pro.css";
import { padding } from "@mui/system";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { toast } from "react-toastify";

const styleIcon = {
  fontSize: "1.5rem",
  color: "white",
};

const logOutIcon = {
  fontSize: "1.5rem",
  color: "white",
};
const Sidebar = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
  const [isCollapse, setIsCollapse] = useState(true);

  return (
    <ProSidebar className="Sidebar" toggled={true} collapsed={isCollapse}>
      <Menu>
        <MenuItem
          onClick={() => setIsCollapse(!isCollapse)}
          className="MenuItem"
          icon={<BiMenu style={styleIcon} />}
        ></MenuItem>
        <MenuItem
          className="tech"
          onClick={() => setIsCollapse(!isCollapse)}
          icon={<BiHome style={styleIcon} />}
          // style={styleText }
        >
          Dashboard
          <Link to="/admin/" />
        </MenuItem>
        <MenuItem
          onClick={() => setIsCollapse(!isCollapse)}
          icon={<BiGroup style={styleIcon} />}
        >
          Manage Students
          <Link to="/admin/StudentManagement" />
        </MenuItem>
        <MenuItem
          onClick={() => setIsCollapse(!isCollapse)}
          icon={<BiLockAlt style={styleIcon} />}
        >
          Manage Credentials
          <Link to="/admin/Credentials" />
        </MenuItem>
        <MenuItem
          onClick={() => setIsCollapse(!isCollapse)}
          icon={<BiAnalyse style={styleIcon} />}
        >
          Result Analysis
          <Link to="/admin/Analytics" />
        </MenuItem>
      </Menu>
      <SidebarFooter>
        <Menu>
          <MenuItem
            onClick={() => {
              setIsCollapse(!isCollapse);
              handleClickOpen();
            }}
            icon={<BiLogOutCircle style={logOutIcon} />}
          >
            LogOut
          </MenuItem>
        </Menu>
      </SidebarFooter>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className="LogOut-DialogBox">Log Out</DialogTitle>
        <DialogContent>
          <DialogContentText>Do you want to Logout ?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>No</Button>
          <Button variant="contained" onClick={onLogOut} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </ProSidebar>
  );
};

export default Sidebar;
