import { useState } from "react";

function App() {
  const [firstname, setFirstname] = useState("");

  const handleChange = (e) => {
    setFirstname(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(new FormData(e.target));
  };

  const resetForm = () => {
    setFirstname("");
  };

  const [checked, setChecked] = useState(false);

  const toggleCheck = () => {
    setChecked(!checked);
  };

  // on text input : this approach renders too many times with controlled field
  // (2 for each changes in the input field with strictmode)
  // we might want to use onSubmit event on the form instead

  console.log("render");

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          onChange={handleChange}
          value={firstname}
        />{" "}
        <br />
        <label htmlFor="cgu">I agree to the terms and conditions.</label>
        <input
          type="checkbox"
          name="test"
          id="cgu"
          checked={checked}
          onChange={toggleCheck}
        />
        <br />
        <button disabled={!checked} type="submit">
          Submit
        </button>
        {!checked && <span style={{ color: "red" }}> ! cgu are mandatory</span>}
      </form>
      <hr />
      your name : {firstname} <br />
      <button onClick={resetForm}> - RESET - </button>
    </>
  );
}

export default App;
