import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from "@mui/material";
import React, { useState } from "react";
import StudentEntryForm from "./StudentEntryForm";
import Controls from "../../../components/controls/Controls";
import StandardsList from "../StandardsList";

export default function StudentEntry(props) {
    const [open, setOpen] = useState(false); //use state hook for dialog
    const [standardList, setStandardList] = useState([]); // useSate for set standardList which comes from backend

    //handler when dialog open button is clicked
    //handler calls method for fetching list from backend
    const handleClickOpen = async () => {
        setStandardList(await StandardsList());
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
                text="+ Add Student"
                onClick={handleClickOpen}
            />

            <Dialog maxWidth={"xl"} open={open} onClose={handleClose}>
                <DialogTitle sx={{ textAlign: "center" }}>
                    STUDENT ENTRY
                </DialogTitle>
                <DialogActions>
                    <Controls.Button
                        sx={{ margin: 2 }}
                        color="error"
                        text="X"
                        onClick={handleClose}
                    />
                </DialogActions>
                <DialogContent>
                    // Passing list of standards as a prop
                    <StudentEntryForm StandardList={standardList} />
                </DialogContent>
            </Dialog>
        </>
    );
}
