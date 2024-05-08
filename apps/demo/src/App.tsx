import { useState } from "react";
import { RENDERER } from "radster-renderer";

function App() {
  const [count, setCount] = useState(0);

  return <main>demo app {RENDERER}</main>;
}

export default App;
