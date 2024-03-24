import { useMemo, useState } from "react";
import { Input } from "./components/form/Input";
import "./App.css";

function App() {
  const [firstname, setFirstname] = useState("John");
  const [password, setPassword] = useState("MDP");

  // bad
  // const security = pwdSec(password);
  // better
  // when the dependancy password changes,
  // we will then call our pwdSec func,
  // and not each time our whole component rerender anymore
  const security = useMemo(() => {
    return pwdSec(password);
  }, [password]);

  const fixedRandomAtRender = useMemo(() => Math.random(), []);
  const randomAtRender = Math.random();

  return (
    <div className="flex items-center flex-col m-8">
      <p className="text-center">
        This random number <strong>WON'T</strong> be generated again because of
        useMemo without parameter in dependancy array:
      </p>
      <pre className="text-purple-800 bg-slate-200">
        const fixedRandomAtRender = useMemo(()=>Math.random(),[])
      </pre>
      <h1 className="bg-black text-red-400">{fixedRandomAtRender}</h1>
      <p className="text-center">
        This random number <strong>WILL</strong> be generated again for each
        rendering, because it's just declared at componant level
      </p>
      <pre className="text-purple-800 bg-slate-200">
        const randomAtRender = Math.random(){" "}
      </pre>
      <h1 className="bg-black text-emerald-400">{randomAtRender}</h1>
      <Input label="username" value={firstname} onChange={setFirstname} />
      <Input
        label="pwd"
        type="paswword"
        value={password}
        onChange={setPassword}
        className="text-orange-400"
      />
      security : {security}
    </div>
  );
}

// we imagine that pwdSec function execution is heavy
// each time we'll render our component,
// it's gonna be executed, even if we don't need it
// in case we change input on username only for instance.
// We'll use useMemo to link what has to be render with whatever input we want
function pwdSec(pwd) {
  console.error("pwdSec call");
  if (pwd.length < 3) {
    return "faible";
  } else if (pwd.length < 6) {
    return "moyen";
  }
  return "fort";
}

export default App;
