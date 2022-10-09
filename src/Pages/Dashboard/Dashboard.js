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
import Controls from "../../components/controls/Controls";

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
    sessionStorage.removeItem("token");
    props.setAuth(false);
    props.setAdmin(false);
    toast.success("Logout Successful!", styleToast);
  };
  return (
    <>
      <div className="Flex">
        <Sidebar />
        <div className="Content-container">
          <Controls.Button
            sx={{ margin: 2, backgroundColor: "#106375" }}
            text="Logout"
            onClick={handleClickOpen}
          />
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
          <DialogTitle className="LogOut-DialogBox">Log Out</DialogTitle>
          <DialogContent>
            <DialogContentText>Do you want to Logout ?</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>No</Button>
            <Button onClick={onLogOut} autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
export default Dashboard;
