import { useId, useState } from "react";
import "./App.css";

function App() {
  console.log(useId());

  return (
    <div className="flex items-center flex-col m-8">
      <h1>test ids </h1>
      <MyComponent1 className="bg-red-400" />
      <MyComponent2 className="bg-red-400" />
      <MyComponent3 className="bg-red-400" />
    </div>
  );
}

function MyComponent1() {
  const id = useId();
  return (
    <div id={id} className="bg-red-400 p-1">
      <h2>MyComponent1</h2>
      <h2>ID: {id}</h2>
    </div>
  );
}
function MyComponent2() {
  const id = useId();
  return (
    <div id={id} className="bg-blue-400 p-1">
      <h2>MyComponent2</h2>
      <h2>ID: {id}</h2>
    </div>
  );
}
function MyComponent3() {
  const id = useId();
  return (
    <div id={id} className="bg-orange-400 p-1">
      <h2>MyComponent3</h2>
      <h2>ID: {id}</h2>
    </div>
  );
}

export default App;
