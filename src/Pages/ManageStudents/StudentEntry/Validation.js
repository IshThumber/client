let today = new Date();
const dd = today.getDate();
const mm = today.getMonth() + 1;
const yyyy = today.getFullYear();

today = dd + "-" + mm + "-" + yyyy;

export default function Validation(values) {
    let temp = {};
    let flag = true;

    //validation for student's name
    if (!values.studentName) {
        temp.studentName = "*Required Field";
        flag = false;
    } else {
        if (/[^a-zA-Z]/i.test(values.studentName)) {
            flag = false;
            temp.studentName = "Only Alaphabets are allowed";
        }
    }

    //validation for surname
    if (!values.surName) {
        flag = false;
        temp.surName = "*Required Field";
    } else {
        if (/[^a-zA-Z]/i.test(values.surName)) {
            flag = false;
            temp.surName = "Only Alaphabets are allowed";
        }
    }

    //validation for father's name
    if (!values.fatherName) {
        flag = false;
        temp.fatherName = "*Required Field";
    } else {
        if (/[^a-zA-Z]/i.test(values.fatherName)) {
            flag = false;
            temp.fatherName = "Only Alaphabets are allowed";
        }
    }

    //validation for mother's name
    if (!values.motherName) {
        flag = false;
        temp.motherName = "*Required Field";
    } else {
        if (/[^a-zA-Z]/i.test(values.motherName)) {
            flag = false;
            temp.motherName = "Only Alaphabets are allowed";
        }
    }

    // validation for GR number
    if (!values.grNumber) {
        flag = false;
        temp.grNumber = "*Required Field";
    }

    // validation for UDISE number
    if (!values.uidNumber) {
        flag = false;
        temp.uidNumber = "*Required Field";
    } else {
        if (values.uidNumber.length < 18) {
            if (18 - values.uidNumber.length == 1) {
                temp.uidNumber = `${
                    18 - values.uidNumber.length
                } digit remain to enter`;
                flag = false;
            } else {
                temp.uidNumber = `${
                    18 - values.uidNumber.length
                } digits remain to enter`;
                flag = false;
            }
        } else if (values.uidNumber.length > 18) {
            if (values.uidNumber.length - 18 == 1) {
                temp.uidNumber = `${
                    values.uidNumber.length - 18
                } digit is remain to delete`;
                flag = false;
            } else {
                temp.uidNumber = `${
                    values.uidNumber.length - 18
                } digits are remain to delete`;
                flag = false;
            }
        }
    }

    //validation for caste
    if (!values.caste) {
        flag = false;
        temp.caste = "*Required Field";
    }

    //validation for mobile number
    if (!values.mobileNumber) {
        flag = false;
        temp.mobileNumber = "*Required Field";
    } else {
        if (values.mobileNumber.length < 10) {
            if (10 - values.mobileNumber.length === 1) {
                temp.mobileNumber = `${
                    10 - values.mobileNumber.length
                } digit remain to enter`;
                flag = false;
            } else {
                temp.mobileNumber = `${
                    10 - values.mobileNumber.length
                } digits remain to enter`;
                flag = false;
            }
        } else if (values.mobileNumber.length > 10) {
            if (values.mobileNumber.length - 10 === 1) {
                temp.mobileNumber = `${
                    values.mobileNumber.length - 10
                } digit is remain to delete`;
                flag = false;
            } else {
                temp.mobileNumber = `${
                    values.mobileNumber.length - 10
                } digits are remain to delete`;
                flag = false;
            }
        }
    }

    let bday = values.birthDate.split("-");
    let year = bday[0];
    let month = bday[1];
    let day = bday[2];

    //validation for birth date
    if (!values.birthDate) {
        flag = false;
        temp.birthDate = "*Required Field";
    } else {
        if (year >= yyyy && month >= mm && day >= dd) {
            flag = false;
            temp.birthDate = `Date cannot be greater than ${today}`;
        }
    }

    // validation for standard
    if (!values.standard) {
        flag = false;
        temp.standard = "*Required Field";
    }

    //validation for address
    if (!values.address) {
        flag = false;
        temp.address = "*Required Field";
    } else {
        if (/[^a-zA-Z,.]/i.test(values.adderss)) {
            flag = false;
            temp.address = "Special Characters are not Allowed";
        }
    }

    // validation for roll number
    if (!values.studentId) {
        flag = false;
        temp.studentId = "*Required Field";
    }

    if (flag) {
        return true;
    }

    return temp;
}
