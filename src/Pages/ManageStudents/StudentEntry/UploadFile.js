import React, { Component, useState } from "react";
import Controls from "../../../components/controls/Controls";

export default function StudentEntry(props) {
    const [state, setstate] = useState({});

    // On file select (from the pop up)
    function onFileChange(event) {
        // Update the state
        console.log(event.target.files[0]);
        setstate({ selectedFile: event.target.files[0] });
    }

    // On file upload (click the upload button)
    async function onFileUpload(event) {
        // Create an object of formData
        const formData = new FormData();

        // Update the formData object
        formData.append("file", state.selectedFile, state.selectedFile.name);

        formData.append("schoolId", sessionStorage.getItem("schoolId"));

        // Request made to the backend api
        // Send formData object
        try {
            const isUploaded = await fetch(
                `http://localhost:5050/addStudents/uploadDataFile/${sessionStorage.getItem(
                    "schoolId"
                )}`,
                {
                    method: "POST",
                    body: formData,
                }
            );

            const parseRes = await isUploaded.json();
            if (parseRes.isStudentAdded) {
                window.alert("Successfully submitted");
            } else {
                window.alert("Empty File");
            }
        } catch (err) {
            console.error(err.message);
        }
    }

    // File content to be displayed after
    // file upload is complete
    function fileData() {
        if (
            state.selectedFile !== undefined &&
            state.selectedFile.type ==
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        ) {
            return (
                <>
                    <div>
                        <h3>File Details:</h3>

                        <p>File Name: {state.selectedFile.name}</p>
                    </div>
                    <Controls.Button
                        sx={{ margin: 2, backgroundColor: "#106375" }}
                        text="Upload File"
                        type="submit"
                        onClick={onFileUpload}
                    />
                </>
            );
        } else if (state.selectedFile) {
            return (
                <div>
                    <br />
                    <h4>Choose Excel File...</h4>
                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <h4>Choose File Before Upload...</h4>
                </div>
            );
        }
    }

    return (
        <>
            {/* Upload Button */}
            <Controls.Input
                sx={{ margin: 2 }}
                type="file"
                onChange={onFileChange}
            />

            {fileData()}
        </>
    );
}
