let today = new Date();
const dd = today.getDate();
const mm = today.getMonth() + 1;
const yyyy = today.getFullYear();

today = dd + "-" + mm + "-" + yyyy;

export default function Validation(values) {
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

  //validation for birth date
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
  console.log(temp);

  return temp;
}
