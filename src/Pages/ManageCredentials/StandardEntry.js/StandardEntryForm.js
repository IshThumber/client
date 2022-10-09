import { Grid } from "@mui/material";
import React from "react";
import { useForm, Form } from "../../../components/useForm";
import Controls from "../../../components/controls/Controls";

const initialFValues = {
  id: 0,
  name: "",
  contactNo: "",
  standard: "",
  teacherId: "",
};

export default function StandardEntryForm(props) {
  const validate = () => {
    let temp = {};
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
            label="standard"
            value={values.standard}
            onChange={handleInputChange}
            error={errors.standard}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.Input
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
