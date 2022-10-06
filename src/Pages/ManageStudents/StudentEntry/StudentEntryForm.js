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
};

export default function StudentEntryForm(props) {
  const validate = () => {
    let temp = {};
    temp.studentName = values.studentName ? "" : "This Filed is Required";
    temp.surName = values.surName ? "" : "This Filed is Required";
    temp.fatherName = values.fatherName ? "" : "This Filed is Required";
    temp.motherName = values.motherName ? "" : "This Filed is Required";
    temp.grNumber = values.grNumber ? "" : "This Filed is Required";
    temp.uidNumber = values.uidNumber ? "" : "This Filed is Required";
    temp.caste = values.caste ? "" : "This Filed is Required";
    temp.birthDate = values.birthDate ? "" : "This Filed is Required";
    temp.mobileNumber =
      values.mobileNumber.length > 9 ? "" : "This Filed is Required";
    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      window.alert("Successfully submitted");
      // employeeService.insertEmployee(values);
      console.log(values);
      resetForm();
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
          <Controls.Select
            name="caste"
            label="Caste"
            value={values.caste}
            onChange={handleInputChange}
            options={employeeService.getCasteCollection()}
            error={errors.caste}
          ></Controls.Select>
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
            label="UID Number"
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
