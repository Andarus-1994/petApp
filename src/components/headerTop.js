import "../scss/style.css";
import Nav from "./router/nav.js";
import { useEffect, useState } from "react";

function HeaderTop() {
  const [search, setSearch] = useState("");

  useEffect(() => {});
  return (
    <div className="headerTop">
      <h1>Petopia of Warcraft</h1>
      <Nav />
    </div>
  );
}

export default HeaderTop;
