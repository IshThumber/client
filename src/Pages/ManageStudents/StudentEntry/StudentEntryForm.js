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
    // temp.studentName = !/[^a-z]/i.test(values.studentName) ? "This Filed is Required" : "Only Aplphabets are allowed";

    //for student name
    if (!values.studentName) {
      temp.studentName = "*Required Field";
    }
    else {
      if (!/[^a-zA-Z]/i.test(values.studentName)) {
        temp.studentName = '';
      }
      else {
        temp.studentName = 'Only Alaphabets are allowed';
      }
    }

    //for surname
    if (!values.surName) {
      temp.surName = "*Required Field";
    }
    else {
      if (!/[^a-zA-Z]/i.test(values.surName)) {
        temp.surName = '';
      }
      else {
        temp.surName = 'Only Alaphabets are allowed';
      }
    }


    //for father's name
    if (!values.fatherName) {
      temp.fatherName = "*Required Field";
    }
    else {
      if (!/[^a-zA-Z]/i.test(values.fatherName)) {
        temp.fatherName = ''
      }
      else {
        temp.fatherName = 'Only Alaphabets are allowed';
      }
    }


    // for mother's name
    if (!values.motherName) {
      temp.motherName = "*Required Field";
    }
    else {
      if (!/[^a-zA-Z]/i.test(values.motherName)) {
        temp.motherName = '';
      }
      else {
        temp.motherName = 'Only Alaphabets are allowed';
      }
    }

    // grnumber
    if (!values.grNumber) {
      temp.grNumber = '*Required Field';
    }
    else {
      temp.grNumber = '';
    }

    // uid
    if (!values.uidNumber) {
      temp.uidNumber = '*Required Field';
    }
    else {
      if ((values.uidNumber.length) < 18) {
        if ((18 - (values.uidNumber.length)) == 1) {
          temp.uidNumber = `${18 - (values.uidNumber.length)} digit remain to enter`;
        }
        else {
          temp.uidNumber = `${18 - (values.uidNumber.length)} digits remain to enter`;
        }
      }

      else if ((values.uidNumber.length) > 18) {
        if ((values.uidNumber.length - 18) == 1) {
          temp.uidNumber = `${(values.uidNumber.length) - 18} digit is remain to delete`;
        }
        else {
          temp.uidNumber = `${(values.uidNumber.length) - 18} digits are remain to delete`;
        }
      }
      else {
        temp.uidNumber = '';
      }
    }


    //caste
    if (!values.caste) {
      temp.caste = '*Required Field'
    }
    else {
      temp.caste = ''
    }

    //birthdate
    if (!values.birthDate) {
      temp.birthDate = '*Required Field'
    }
    else {
      temp.birthDate = ''
    }


    //mobile number

    if (!values.mobileNumber) {
      temp.mobileNumber = '*Required Field'
    }
    else {
      if (!/[^0-9]/i.test(values.mobileNumber)) {
        if (values.mobileNumber.length !== 10) {
          temp.mobileNumber = 'Length must be of 10 numbers'
        }
        else {
          temp.mobileNumber = ''
        }
      }
      else {
        temp.mobileNumber = 'Must be Number'
      }
    }

    //birth date
    if (!values.birthDate) {
      temp.birthDate = '*Required Field'
    }
    else {
      temp.birthDate = ''
    }

    // temp.grNumber = values.grNumber ? "" : "This Filed is Required";
    // temp.uidNumber = values.uidNumber ? "" : "This Filed is Required";
    // temp.caste = values.caste ? "" : "This Filed is Required";
    // temp.birthDate = values.birthDate ? "" : "This Filed is Required";

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
            type='number'
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
