import "./AddNewStudentForm.css";

export default function AddNewStudentForm() {
  return (
    <>
      <section className="full-screen-container-form">

        <div className="form-container">
          <h1 className="form-title">Student Detail</h1>

          <form action="post" className="add-student-form">


            <div className="input-grid">

              <div className="form-input-container">
                <label htmlFor="academic-year">Academic Year</label>
                <select name="year-dropdown" id="year-dropdown"></select>
              </div>

              <div className="form-input-container">
                <label htmlFor="GR-number">GR Number</label>
                <input type="number" name="GR-number" id="GR-number" />
              </div>

              <div className="form-input-container">
                <label htmlFor="UDISE-number">UDISE</label>
                <input
                  type="number"
                  name="UDISE-number"
                  id="UDISE-number"
                  placeholder="18 Digit UDISE Number"
                />
              </div>

              <div className="form-input-container">
                <label htmlFor="student-name">Student Name</label>
                <input
                  type="text"
                  name="student-name"
                  id="student-name"
                  placeholder="First Name"
                />
              </div>

              <div className="form-input-container">
                <label htmlFor="father-name">Father's Name</label>
                <input
                  type="text"
                  name="father-name"
                  id="father-name"
                  placeholder="Middle Name"
                />
              </div>

              <div className="form-input-container">
                <label htmlFor="last-name">Last Name</label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="Last Name"
                />
              </div>

              <div className="form-input-container">
                <label htmlFor="gender">Gender</label>
                <div className="div-gender">
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    defaultChecked="checked"
                  />
                  <label htmlFor="male">Male</label>
                </div>

                <div className="div-gender">
                  <input type="radio" name="gender" id="female" />
                  <label htmlFor="female">Female</label>
                </div>

              </div>


              <div className="form-input-container">

                <label htmlFor="caste">Caste</label>
                <select name="caste-dropdown" id="caste-dropdown">
                  <option value="none" selected="" disabled="" hidden="">
                    Select an Option
                  </option>
                  <option value="ST">ST</option>
                  <option value="SC">SC</option>
                  <option value="OBC">OBC</option>
                  <option value="General">General</option>
                </select>
              </div>

              <div className="form-input-container">
                <label htmlFor="standard">Standard</label>
                <select name="standard-dropdown" id="standard-dropdown">
                  <option value="none" selected="" disabled="" hidden="">
                    Select an Option
                  </option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                </select>
              </div>

              <div className="form-input-container">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Enter Address Here"
                />
              </div>

              <div className="form-input-container">
                <label htmlFor="contact">Contact Number</label>
                <input
                  type="number"
                  name="contact"
                  id="contact"
                  placeholder="Phone Number"
                />
              </div>

            </div>
            <button className="btn-sub">SUBMIT</button>
          </form>
        </div>
      </section>
    </>
  );
}
