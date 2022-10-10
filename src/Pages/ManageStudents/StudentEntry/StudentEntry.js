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
    const [openPopup, setOpenPopup] = useState(false); //use state hook for popup

    //handler when dialog open button is clicked
    //handler calls method for fetching list from backend
    const handleClickOpen = async () => {
        setStandardList(await StandardsList());
        setOpen(true);
    };

    const handleClickUpload = async () => {
        // window.alert("Hello");
        setOpenPopup(true);
    }

    //handler when dialog close button is clicked
    const handleClose = () => {
        setOpen(false);
    };
    const handleClosePopup = () => {
        setOpenPopup(false);
    }

    return (
        <>
            <Controls.Button
                sx={{ margin: 2, backgroundColor: "#106375" }}
                text="+ Add Student"
                onClick={handleClickOpen}
            />
            <Controls.Button
                sx={{ margin: 2, backgroundColor: "#106375" }}
                text="File Upload"
                type="file"
                onClick={handleClickUpload}
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
                    {/* Passing list of standards as a prop */}
                    <StudentEntryForm StandardList={standardList} />
                </DialogContent>
            </Dialog>

            <Dialog maxWidth={"xl"} open={openPopup} onClose={handleClosePopup}>
                <DialogTitle sx={{ textAlign: "center" }}>
                    Upload Entry
                </DialogTitle>
                <DialogActions>
                    <Controls.Button
                        sx={{ margin: 2 }}
                        color="error"
                        text="X"
                        onClick={handleClosePopup}
                    />
                </DialogActions>
                <DialogContent>
                    {/* Upload Button */}
                    <Controls.Input
                        sx={{ margin: 2 }}
                        // color="error"
                        type="file"
                        onClick={handleClosePopup}
                    />
                    <Controls.Button
                        sx={{ margin: 2, backgroundColor: "#106375" }}
                        text="Done"
                        type="submit"
                        onClick={handleClosePopup}
                    />
                </DialogContent>
            </Dialog>
        </>
    );
}
