import { useState } from "react";

function App() {
  const [isCGUAccepted, setIsCGUAccepted] = useState(false);

  // const test = (e) => {
  //   console.log(e)
  // }

  return (
    <form>
      <CGUCheckbox checked={isCGUAccepted} onCheck={setIsCGUAccepted} />
      <button disabled={!isCGUAccepted}>SUBMIT</button>
    </form>
  );
}

// reverse data flow
/* eslint-disable react/prop-types */
function CGUCheckbox({ checked, onCheck }) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          onChange={(e) => onCheck(e.target.checked)}
          checked={checked}
        />
        Accept CGU
      </label>
      <span>{checked ? "✅" : "❌"}</span>
    </div>
  );
}

export default App;
