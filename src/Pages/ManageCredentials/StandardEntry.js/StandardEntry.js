import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";
import Controls from "../../../components/controls/Controls";
import StandardEntryForm from "./StandardEntryForm";

export default function StandardEntry(props) {
  const [open, setOpen] = useState(false); //use state hook for dialog

  //handler when dialog open button is clicked
  //handler calls method for fetching list from backend
  const handleClickOpen = async () => {
    setOpen(true);
  };

  //handler when dialog close button is clicked
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Controls.Button
        sx={{ margin: 2, backgroundColor: "#106375" }}
        text="+ Add Standard"
        onClick={handleClickOpen}
      />

      <Dialog maxWidth={"xl"} open={open} onClose={handleClose}>
        <DialogTitle sx={{ textAlign: "center" }}>STANDARD ENTRY</DialogTitle>
        <DialogActions>
          <Controls.Button
            sx={{ margin: 2 }}
            color="error"
            text="X"
            onClick={handleClose}
          />
        </DialogActions>
        <DialogContent>
          <StandardEntryForm />
        </DialogContent>
      </Dialog>
    </>
  );
}
