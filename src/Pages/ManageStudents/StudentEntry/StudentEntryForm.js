import { Grid, InputAdornment } from "@mui/material";
import React from "react";
import { useForm, Form } from "../../../components/useForm";
import Controls from "../../../components/controls/Controls";
import * as employeeService from "../../../SelectItems/SelectItems";
import Validation from "./Validation.js";

const initialFValues = {
    id: 0,
    studentName: "",
    surName: "",
    fatherName: "",
    motherName: "",
    grNumber: "",
    uidNumber: "",
    birthDate: "",
    mobileNumber: "",
    caste: "",
    standard: "",
    address: "",
    studentId: "",
};

export default function StudentEntryForm(props) {
    const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
        useForm(initialFValues);

    const validate = () => {
        setErrors({
            ...Validation(values),
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                const isStudentAdded = await fetch(
                    "http://localhost:5050/addStudents",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            schoolId: sessionStorage.getItem("schoolId"),
                            year: new Date().getFullYear(), // Taken Current year by default
                            studentId: 9, // Must taken form the user
                            grNo: values.grNumber,
                            UdiseNo: values.uidNumber,
                            studentName: values.studentName,
                            motherName: values.motherName,
                            fatherName: values.fatherName,
                            surname: values.surName,
                            birthDate: values.birthDate,
                            gender: "Female", // This school is only for girls
                            caste: values.caste,
                            standard: values.standard, // Must taken from the user
                            address: values.address, // Must taken from the user
                            contactNo: values.mobileNumber,
                            presentCount: 100, // Need discussion on this
                        }),
                    }
                );
                const parseRes = await isStudentAdded.json();
                if (parseRes.isStudentAdded) {
                    window.alert("Successfully submitted");
                    resetForm();
                } else {
                    window.alert(
                        "Same UDISE number or GR number exist in the school !!!"
                    );
                }
            } catch (err) {
                console.error(err.message);
            }
            console.log(values);
            // employeeService.insertEmployee(values);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container paddingLeft={20}>
                <Grid item xs={6}>
                    <Controls.Input
                        name="surName"
                        label="Surname"
                        value={values.surName}
                        onChange={handleInputChange}
                        error={errors.surName}
                    />

                    <Controls.Input
                        name="fatherName"
                        label="Father Name"
                        value={values.fatherName}
                        onChange={handleInputChange}
                        error={errors.fatherName}
                    />

                    <Controls.Input
                        type="number"
                        name="grNumber"
                        label="G R Number"
                        value={values.grNumber}
                        onChange={handleInputChange}
                        error={errors.grNumber}
                    />

                    <Controls.Input
                        type="number"
                        name="mobileNumber"
                        label="Mobile Number"
                        value={values.mobileNumber}
                        onChange={handleInputChange}
                        error={errors.mobileNumber}
                    />

                    <Grid item marginTop={1}>
                        <Controls.Select
                            name="caste"
                            label="Caste"
                            value={values.caste}
                            onChange={handleInputChange}
                            options={employeeService.getCasteCollection()}
                            error={errors.caste}
                        />
                    </Grid>
                    <Controls.Input
                        name="address"
                        label="Address"
                        value={values.address}
                        onChange={handleInputChange}
                        error={errors.address}
                    />
                </Grid>

                <Grid item xs={6}>
                    <Controls.Input
                        name="studentName"
                        label="Student Name"
                        value={values.studentName}
                        onChange={handleInputChange}
                        error={errors.studentName}
                    />

                    <Controls.Input
                        name="motherName"
                        label="Mother Name"
                        value={values.motherName}
                        onChange={handleInputChange}
                        error={errors.motherName}
                    />

                    <Controls.Input
                        type="number"
                        name="uidNumber"
                        label="UDISE Number"
                        value={values.uidNumber}
                        onChange={handleInputChange}
                        error={errors.uidNumber}
                    />

                    <Controls.Input
                        type="date"
                        name="birthDate"
                        value={values.birthDate}
                        onChange={handleInputChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">Birth Date :</InputAdornment>
                            ),
                        }}
                        error={errors.birthDate}
                    />
                    <Grid item marginTop={1}>
                        <Controls.Select
                            name="standard"
                            label="Standard"
                            value={values.standard}
                            onChange={handleInputChange}
                            options={props.StandardList}
                            error={errors.standard}
                        />
                    </Grid>

                    <Controls.Input
                        type="number"
                        name="studentId"
                        label="Student ID"
                        value={values.studentId}
                        onChange={handleInputChange}
                        error={errors.studentId}
                    />
                </Grid>

                <Grid container>
                    <Grid item xs={6}></Grid>

                    <Grid item xs={6}>
                        <Controls.Button sx={{ margin: 2 }} type="submit" text="Submit" />
                        <Controls.Button
                            // disabled
                            color="secondary"
                            text="Reset"
                            onClick={resetForm}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Form>
    );
}
