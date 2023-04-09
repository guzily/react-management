import { useState } from "react";
import Comp from "./components/Comp1";
import { Button } from "antd"
import { Outlet } from "react-router-dom"


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Outlet></Outlet>
    </div>
  );
}

export default App;
