import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  console.log("render");

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  const incrementWithStateInCallBack = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  const handlePerson = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  const [person, setPerson] = useState({
    name: "John",
    age: 25,
  });

  return (
    <>
      <p>COUNTER : {count} </p>
      <button onClick={decrement}> - </button>
      <button onClick={increment}> + </button>
      <button onClick={incrementWithStateInCallBack}> +++ </button>
      <hr />
      <p>PERSON: </p>
      <ul>
        <li>{person.name}</li>
        <li>{person.age}</li>
      </ul>
      <button onClick={handlePerson}>person aging !</button>
    </>
  );
}

export default App;
