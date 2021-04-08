import "./scss/style.css";
import { useEffect, useState } from "react";
import Home from "./components/home.js";
import HeaderTop from "./components/headerTop.js";

import Nav from "./components/router/nav.js";
function App() {
  useEffect(() => {}, []);

  return (
    <div className="App">
      <HeaderTop />
    </div>
  );
}

export default App;
