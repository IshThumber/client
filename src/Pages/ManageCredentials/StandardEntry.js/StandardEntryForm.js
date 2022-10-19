import { Grid } from "@mui/material";
import React, { useState } from "react";
import { useForm, Form } from "../../../components/useForm";
import Controls from "../../../components/controls/Controls";
import { margin } from "@mui/system";

const initialFValues = {
  id: 0,
  name: "",
  contactNo: "",
  standard: "STD ",
  teacherId: "",
  password: "",
  confirmPassword: "",
};


export default function StandardEntryForm(props) {
  const { addOrEdit } = props;

  const [showPass, setShowPass] = useState(true);
  const toggleBtnPass = () => {
    setShowPass((prevState) => !prevState);
  };


  const [showConfPass, setShowConfPass] = useState(true);
  const toggleBtnConfPass = () => {
    setShowConfPass((prevState) => !prevState);
  };

  const validate = () => {
    let temp = {};

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

    if (!values.standard || values.standard.trim() === 'STD') {
      temp.standard = "*Required Field";
    } else {
      let stdArr = values.standard.split(' ');
      if (!/[^1-8]/i.test(stdArr[1])) {
        temp.standard = "";
      }

      else {
        temp.standard = "Standard must between 1-8";
      }
    }


    //for validation of teacher id
    if (!values.teacherId) {
      temp.teacherId = "*Required Field";
    } else {
      temp.teacherId = "";
    }

    // for validation of password
    if (!values.password) {
      temp.password = "*Required Field";
    }
    else {
      if (values.password.length >= 8 && values.password.length <= 15) {
        let paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
        if (values.password.match(paswd)) {
          // console.log('contain everything');
        }

        else {
          temp.password = "Password must contain atleast 1 special character and 1 digit"
        }
      }
      else {
        temp.password = "Length of Password must betwen 8 an 15"
      }
    }

    // for validatin of confirm password

    if (!values.confirmPassword) {
      temp.password = "*Required Field";
    }
    else {
      if (values.confirmPassword.length >= 8 && values.confirmPassword.length <= 15) {
        let paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
        if (values.confirmPassword.match(paswd)) {
          if (values.confirmPassword !== values.password) {
            temp.confirmPassword = "Does not match with entered password";
          }
          else {
            temp.confirmPassword = "";
          }
        }

        else {
          temp.confirmPassword = "Confirm Password must contain atleast 1 special character and 1 digit"
        }
      }
      else {
        temp.confirmPassword = "Length of Confirm Password must betwen 8 an 15"
      }
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
      console.log("Tum jo aye");
      try {
        const isStandardAdded = await fetch("http://localhost:5050/auth/addClass/", 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            schoolId: sessionStorage.getItem("schoolId"),
            year: new Date().getFullYear(),
            name: values.name,
            contactNo: values.contactNo,
            standard: values.standard,
            userName: parseInt(values.teacherId),
            password: values.password,
          }),
        });

        const res = await isStandardAdded.json();

        console.log(res);

        if (res.isStandardAdded) {
          window.alert(res.message);
          resetForm();
        }
        else {
          window.alert(res.message);
        }

      } catch (err) {
        console.log(err);
      }
      console.log(values);
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
          <Controls.Input

            type={showPass ? "password" : "text"}
            name="password"
            label="Password"
            value={values.password}
            onChange={handleInputChange}
            error={errors.password}
          />
          <input
            style={{
              scale: "1.3",
              transform: "translate(-25px, 20px)",
            }}
            type="checkbox"
            onClick={toggleBtnPass}

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
            type='number'
            name="teacherId"
            label="Teacher ID"
            value={values.teacherId}
            onChange={handleInputChange}
            error={errors.teacherId}
          />
          <Controls.Input
            type={showConfPass ? "password" : "text"}
            name="confirmPassword"
            label="Confirm Password"
            value={values.confirmPassword}
            onChange={handleInputChange}
            error={errors.confirmPassword}
          />
          <input
            style={{
              scale: "1.3",
              transform: "translate(-25px, 20px)",
            }}
            type="checkbox"
            onClick={toggleBtnConfPass}
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
