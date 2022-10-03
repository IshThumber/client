import React from "react";
import { useState } from "react";

export function useForm(initialFValues) {
  const [values, setValues] = useState(initialFValues); //hook for set form properties
  const [errors, setErrors] = useState({}); //use state hooks for errors

  //event handlers for the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  //function for resetForm
  const resetForm = () => {
    setValues(initialFValues);
    setErrors({});
  };

  return {
    values,
    errors,
    setErrors,
    setValues,
    handleInputChange,
    resetForm,
  };
}

export function Form(props) {
  const { children, ...other } = props;

  return (
    <form className="MuiFormControl-root" autoComplete="off" {...other}>
      {props.children}
    </form>
  );
}
