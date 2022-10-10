import { Grid } from "@mui/material";
import React from "react";
import { useForm, Form } from "../../../components/useForm";
import Controls from "../../../components/controls/Controls";

const initialFValues = {
  id: 0,
  name: "",
  contactNo: "",
  standard: "STD ",
  teacherId: "",
};

export default function StandardEntryForm(props) {
  const validate = () => {
    let temp = {};
    console.log(`${values.name} ${values.teacherId} ${values.contactNo} ${values.standard}`);

    //for validation of teacher's name

    if (!values.name) {
      temp.name = "*Required Field";
    } else {
      if (!/[^a-zA-Z]/i.test(values.name)) {
        temp.name = "";
      } else {
        temp.name = "Only Alaphabets are allowed";
      }
    }


    //for validation of mobile number

    if (!values.contactNo) {
      temp.contactNo = "*Required Field";
    } else {
      if (values.contactNo.length < 10) {
        if (10 - values.contactNo.length === 1) {
          temp.contactNo = `${10 - values.contactNo.length
            } digit remain to enter`;
        } else {
          temp.contactNo = `${10 - values.contactNo.length
            } digits remain to enter`;
        }
      } else if (values.contactNo.length > 10) {
        if (values.contactNo.length - 10 === 1) {
          temp.contactNo = `${values.contactNo.length - 10
            } digit is remain to delete`;
        } else {
          temp.contactNo = `${values.contactNo.length - 10
            } digits are remain to delete`;
        }
      }
    }

    //for validation of standard

    if (!values.standard) {
      temp.standard = "*Required Field";
    } else {
      temp.standard = "";
    }

    console.log(values.standard);

    //for validation of teacher id
    if (!values.teacherId) {
      temp.teacherId = "*Required Field";
    } else {
      temp.teacherId = "";
    }

    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x === "");
  };


  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      //backend Logic...........
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container paddingLeft={20}>
        <Grid item xs={6}>
          <Controls.Input
            name="name"
            label="Teacher Name"
            value={values.name}
            onChange={handleInputChange}
            error={errors.name}
          />

          <Controls.Input
            name="standard"
            label="Standard"
            value={values.standard}
            onChange={handleInputChange}
            error={errors.standard}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.Input
            type="number"
            name="contactNo"
            label="Mobile Number"
            value={values.contactNo}
            onChange={handleInputChange}
            error={errors.contactNo}
          />

          <Controls.Input
            name="teacherId"
            label="Teacher ID"
            value={values.teacherId}
            onChange={handleInputChange}
            error={errors.teacherId}
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
