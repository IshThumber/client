import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { toast } from "react-toastify";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import DashboardStatusTable from "./DashboardStatusTable";

function Dashboard(props) {
  //Dialog Start
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //Dialog Close
  const styleToast = {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 2000,
    hideProgressBar: true,
    closeButton: false,
  };

  const onLogOut = (event) => {
    event.preventDefault();
    localStorage.removeItem("token");
    props.setAuth(false);
    props.setAdmin(false);
    toast.success("Logout Successful!", styleToast);
  };
  return (
    <>
      <div className="Flex">
        <Sidebar />
        <div className="Content-container">
          <button onClick={handleClickOpen} className="btn-sub">
            Log Out
          </button>
          <div>
            <DashboardStatusTable />
          </div>
        </div>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{""}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              શું તમે તમારા અકાઉંટમાંથી લૉગ આઉટ કરવા માંગો છો ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>ના </Button>
            <Button onClick={onLogOut} autoFocus>
              હા
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
export default Dashboard;




