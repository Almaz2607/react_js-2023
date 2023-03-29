import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [value, setValue] = useState("Input text");

  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
