import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchChar, retriveMediaProfile, getPetsCharacter } from "./actions";
import ReactGa from "react-ga";
import "../scss/style.css";

function SearchBar(props) {
  const [user, setUser] = useState("");
  const [region, setRegion] = useState("EU");
  const searchedChar = useSelector((state) => state.foundChar);
  const dispatch = useDispatch();
  function handleChange(e) {
    ReactGa.event({
      category: "Searched Char",
      action: "Searched for a char",
      value: e.target.value,
    });
    setUser(e.target.value);
  }
  function hitEnter(e) {
    if (e.charCode === 13) {
      const [character, server] = separateString(user);
      ReactGa.event({
        category: "Searched Char",
        action: "Searched for a char",
        value: e.target.value,
      });
      // props.find(user, region);
      if (character && server && region) {
        props.setLoading();
        props.setError("");

        dispatch(
          searchChar({
            char: character,
            server: server,
            region: region,
          })
        );
      } else props.setError("*You didn't add a character name or a server");
    }
  }

  function separateString(str) {
    /*str = str.replace(/\s/g, "-");*/

    var period = str.lastIndexOf("-");
    str = str.replace(/ /g, "-");
    var charName = str.substring(0, period);
    var server = str.substring(period + 1);

    return [charName.toLowerCase(), server.toLowerCase()];
  }

  function changeRegion(e) {
    setRegion(e.target.value);
  }
  function searchUserPets() {
    const [character, server] = separateString(user);

    // props.find(user, region);
    if (character && server && region) {
      props.setLoading();
      props.setError("");

      dispatch(
        searchChar({
          char: character,
          server: server,
          region: region,
        })
      );
    } else props.setError("*You didn't add a character name or a server");
  }

  useEffect(() => {
    if (!searchedChar.loading) {
      dispatch(retriveMediaProfile(searchedChar.character));
      dispatch(getPetsCharacter(searchedChar.character));
    }
  }, [searchedChar.character, searchedChar.loading, dispatch]);

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
