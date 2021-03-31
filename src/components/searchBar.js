import { useState, useEffect } from "react";
import "../scss/style.css";

function SearchBar(props) {
  const [user, setUser] = useState("");
  const [region, setRegion] = useState("EU");
  function handleChange(e) {
    setUser(e.target.value);
  }
  function hitEnter(e) {
    if (e.charCode === 13) {
      props.find(user, region);
    }
  }
  function changeRegion(e) {
    setRegion(e.target.value);
  }
  function searchUserPets() {
    props.find(user, region);
  }

  useEffect(() => {}, []);

  return (
    <div className="searchBar">
      <select onChange={changeRegion}>
        <option value="EU">EU</option>
        <option value="US">US</option>
      </select>

      <div className="search">
        {props.findError ? <div className="error">{props.findError}</div> : ""}
        <input
          type="search"
          id="site-search"
          name="q"
          aria-label="Search through site content"
          placeholder="Character name & Realm"
          onChange={handleChange}
          onKeyPress={hitEnter}
        />
        <label>Character name & Realm</label>
      </div>
      <button onClick={searchUserPets}>
        <i className="fa fa-search"></i>
      </button>
      <label>
        Ex: "Belfu-Balnazzar, Drannosh-Kazzak, Sethar-Twisting Nether, etc..."
      </label>
    </div>
  );
}

export default SearchBar;
