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
import UploadFile from "./UploadFile";
import Loader from "../../../components/Loader";

export default function StudentEntry(props) {
    const [open, setOpen] = useState(false); //use state hook for dialog
    const [standardList, setStandardList] = useState([]); // useSate for set standardList which comes from backend
    const [openPopup, setOpenPopup] = useState(false); //use state hook for popup
    const [isAdded, setIsAdded] = useState(true);

    //handler when dialog open button is clicked
    //handler calls method for fetching list from backend
    const handleClickOpen = async () => {
        setStandardList(await StandardsList());
        setOpen(true);
    };

    //handler when dialog close button is clicked
    const handleClose = () => {
        setOpen(false);
        props.studentData();
    };

    const handleCloseAfterSubmit = (isOpen) => {
        setOpen(isOpen);
    };

    const handleSubmitLoading = (isLoaded) => {
        setIsAdded(isLoaded);
    };

    const handleClickUpload = async () => {
        // window.alert("Hello");
        setOpenPopup(true);
    };

    const handleClosePopup = () => {
        setOpenPopup(false);
        props.studentData();
    };

    const handleClosePopupAfterUpload = (isOpenPopup) => {
        setOpenPopup(isOpenPopup);
    };

    const addOrEdit = (student, resetForm) => {
        //add student details
        setOpen(false);
    };

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

            <Dialog
                sx={{
                    width: "1000px",
                    margin: "auto",
                    height: "120vh",
                }}
                maxWidth={"800px"}
                open={open}
                onClose={handleClose}
            >
                <DialogTitle sx={{ height: "70px", marginBottom: "20px" }}>
                    STUDENT ENTRY
                    <div style={{ display: "inline-block", marginLeft: "73%" }}>
                        <Controls.Button
                            color="error"
                            text="X"
                            onClick={handleClose}
                        />
                    </div>
                </DialogTitle>
                <DialogContent>
                    {/* Passing list of standards as a prop */}

                    {isAdded ? (
                        <StudentEntryForm
                            handleSubmitLoading={handleSubmitLoading}
                            handleCloseAfterSubmit={handleCloseAfterSubmit}
                            addOrEdit={addOrEdit}
                            StandardList={standardList}
                        />
                    ) : (
                        <div style={{ width: "1000px", height: "500px" }}>
                            <Loader />
                        </div>
                    )}
                </DialogContent>
            </Dialog>

            <Dialog maxWidth={"xl"} open={openPopup} onClose={handleClosePopup}>
                <DialogTitle sx={{ textAlign: "center" }}>
                    Upload Entry
                    <div style={{ display: "inline-block", marginLeft: "45%" }}>
                        <Controls.Button
                            color="error"
                            text="X"
                            onClick={handleClosePopup}
                        />
                    </div>
                </DialogTitle>
                <DialogContent>
                    {/* Upload Button */}
                    <UploadFile
                        handleClosePopupAfterUpload={
                            handleClosePopupAfterUpload
                        }
                    />
                </DialogContent>
            </Dialog>
        </>
    );
}
