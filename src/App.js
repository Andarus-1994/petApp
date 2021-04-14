import "./scss/style.css";
import { useEffect, useState } from "react";
import Home from "./components/home.js";
import ReactGa from "react-ga";
import Nav from "./components/router/nav.js";
function App() {
  useEffect(() => {
    ReactGa.initialize("UA-194620693-1");

    ReactGa.pageview(window.location.pathname);
  }, []);

  return (
    <div className="App">
      <Nav />
    </div>
  );
}

export default App;
