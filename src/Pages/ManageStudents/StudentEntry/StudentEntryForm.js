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

let today = new Date();
const dd = today.getDate();
const mm = today.getMonth() + 1;
const yyyy = today.getFullYear();

today = dd + '-' + mm + '-' + yyyy;

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
        if ((18 - (values.uidNumber.length)) === 1) {
          temp.uidNumber = `${18 - (values.uidNumber.length)} digit remain to enter`;
        }
        else {
          temp.uidNumber = `${18 - (values.uidNumber.length)} digits remain to enter`;
        }
      }

      else if ((values.uidNumber.length) > 18) {
        if ((values.uidNumber.length - 18) === 1) {
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
      temp.caste = '*Required Field';
    }
    else {
      temp.caste = '';
    }

    //mobile number

    if (!values.mobileNumber) {
      temp.mobileNumber = '*Required Field';
    }
    else {
      if (values.mobileNumber.length < 10) {
        if ((10 - (values.mobileNumber.length)) === 1) {
          temp.mobileNumber = `${10 - (values.mobileNumber.length)} digit remain to enter`;
        }
        else {
          temp.mobileNumber = `${10 - (values.mobileNumber.length)} digits remain to enter`;
        }
      }
      else if ((values.mobileNumber.length) > 10) {
        if ((values.mobileNumber.length - 10) === 1) {
          temp.mobileNumber = `${(values.mobileNumber.length) - 10} digit is remain to delete`;
        }
        else {
          temp.mobileNumber = `${(values.mobileNumber.length) - 10} digits are remain to delete`;
        }
      }
      else {
        temp.mobileNumber = '';
      }
    }

    let bday = values.birthDate.split('-');
    let year = bday[0];
    let month = bday[1];
    let day = bday[2];


    console.log(today);
    //birth date
    if (!values.birthDate) {
      temp.birthDate = '*Required Field';
    }
    else {
      // if (year > yyyy) {
      //   temp.birthDate = `year cannot be greater than ${yyyy}`;
      // }
      // else {
      //   if (month > mm) {
      //     temp.birthDate = `moth cannot be grater than ${mm}`;
      //   }
      //   else {
      //     if (day > dd) {
      //       temp.birthDate = `selected date cannot be grater than ${dd}`;
      //     }
      //     else {
      //       temp.birthDate = '';
      //     }
      //   }
      // }
      if (year >= yyyy && month >= mm && day >= dd) {
        temp.birthDate = `date cannot be greater than ${today}`;
      }
      else {
        temp.birthDate = '';
      }
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
            type='number'
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
