import { Grid, InputAdornment } from "@mui/material";
import React from "react";
import { useForm, Form } from "../../../components/useForm";
import Controls from "../../../components/controls/Controls";
import * as employeeService from "../../../SelectItems/SelectItems";

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

let today = new Date();
const dd = today.getDate();
const mm = today.getMonth() + 1;
const yyyy = today.getFullYear();

today = dd + "-" + mm + "-" + yyyy;

export default function StudentEntryForm(props) {
    const validate = () => {
        let temp = {};

        //validation for student's name
        if (!values.studentName) {
            temp.studentName = "*Required Field";
        } else {
            if (!/[^a-zA-Z]/i.test(values.studentName)) {
                temp.studentName = "";
            } else {
                temp.studentName = "Only Alaphabets are allowed";
            }
        }

        //validation for surname
        if (!values.surName) {
            temp.surName = "*Required Field";
        } else {
            if (!/[^a-zA-Z]/i.test(values.surName)) {
                temp.surName = "";
            } else {
                temp.surName = "Only Alaphabets are allowed";
            }
        }

        //validation for father's name
        if (!values.fatherName) {
            temp.fatherName = "*Required Field";
        } else {
            if (!/[^a-zA-Z]/i.test(values.fatherName)) {
                temp.fatherName = "";
            } else {
                temp.fatherName = "Only Alaphabets are allowed";
            }
        }

        //validation for mother's name
        if (!values.motherName) {
            temp.motherName = "*Required Field";
        } else {
            if (!/[^a-zA-Z]/i.test(values.motherName)) {
                temp.motherName = "";
            } else {
                temp.motherName = "Only Alaphabets are allowed";
            }
        }

        // validation for GR number
        if (!values.grNumber) {
            temp.grNumber = "*Required Field";
        } else {
            temp.grNumber = "";
        }

        // validation for UDISE number
        if (!values.uidNumber) {
            temp.uidNumber = "*Required Field";
        } else {
            if (values.uidNumber.length < 18) {
                if (18 - values.uidNumber.length == 1) {
                    temp.uidNumber = `${
                        18 - values.uidNumber.length
                    } digit remain to enter`;
                } else {
                    temp.uidNumber = `${
                        18 - values.uidNumber.length
                    } digits remain to enter`;
                }
            } else if (values.uidNumber.length > 18) {
                if (values.uidNumber.length - 18 == 1) {
                    temp.uidNumber = `${
                        values.uidNumber.length - 18
                    } digit is remain to delete`;
                } else {
                    temp.uidNumber = `${
                        values.uidNumber.length - 18
                    } digits are remain to delete`;
                }
            } else {
                temp.uidNumber = "";
            }
        }

        //validation for caste
        if (!values.caste) {
            temp.caste = "*Required Field";
        } else {
            temp.caste = "";
        }

        //validation for mobile number
        if (!values.mobileNumber) {
            temp.mobileNumber = "*Required Field";
        } else {
            if (values.mobileNumber.length < 10) {
                if (10 - values.mobileNumber.length === 1) {
                    temp.mobileNumber = `${
                        10 - values.mobileNumber.length
                    } digit remain to enter`;
                } else {
                    temp.mobileNumber = `${
                        10 - values.mobileNumber.length
                    } digits remain to enter`;
                }
            } else if (values.mobileNumber.length > 10) {
                if (values.mobileNumber.length - 10 === 1) {
                    temp.mobileNumber = `${
                        values.mobileNumber.length - 10
                    } digit is remain to delete`;
                } else {
                    temp.mobileNumber = `${
                        values.mobileNumber.length - 10
                    } digits are remain to delete`;
                }
            }
        }

        let bday = values.birthDate.split("-");
        let year = bday[0];
        let month = bday[1];
        let day = bday[2];

        //validatoi for birth date
        if (!values.birthDate) {
            temp.birthDate = "*Required Field";
        } else {
            if (year >= yyyy && month >= mm && day >= dd) {
                temp.birthDate = `Date cannot be greater than ${today}`;
            }
        }

        // validation for standard
        if (!values.standard) {
            temp.standard = "*Required Field";
        } else {
            temp.standard = "";
        }

        //validation for address
        if (!values.address) {
            temp.address = "*Required Field";
        } else {
            temp.address = "";
        }

        // validation for roll number
        if (!values.studentId) {
            temp.studentId = "*Required Field";
        } else {
            temp.studentId = "";
        }

        setErrors({
            ...temp,
        });
        return Object.values(temp).every((x) => x === "");
    };

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm,
    } = useForm(initialFValues);

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
                                <InputAdornment position="start">
                                    Birth Date :
                                </InputAdornment>
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
                        <Controls.Button
                            sx={{ margin: 2 }}
                            type="submit"
                            text="Submit"
                        />
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
