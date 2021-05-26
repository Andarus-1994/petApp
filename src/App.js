import "./scss/style.css";
import { useEffect, useState } from "react";
import ReactGa from "react-ga";
import Nav from "./components/router/nav.js";

function App() {
  useEffect(() => {
    ReactGa.initialize("UA-194620693-1");
    console.log("sent the pet info");
    ReactGa.pageview(window.location.pathname);

    localStorage.removeItem("comments");
  }, []);

  return (
    <div className="App">
      <Nav />
    </div>
  );
}

export default App;
