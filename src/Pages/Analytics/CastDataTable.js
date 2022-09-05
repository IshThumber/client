export default function CastDataTable() {
  return (
    <>
      <label htmlFor="Class">Class : </label>
      {/* <br></br> */}
      <select name="caste-dropdown" id="caste-dropdown">
        <option value="none" selected="" disabled="" hidden="">
          Select an Option
        </option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="All">ALL</option>
      </select>
    </>
  );
}
