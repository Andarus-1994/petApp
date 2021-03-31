import "./scss/style.css";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import {
  auth,
  imgPet,
  petInfo,
  retriveToken,
} from "./components/functions/serverFunctions.js";
import HeaderTop from "./components/headerTop.js";
import SearchBar from "./components/searchBar.js";

function App() {
  const [load, setLoad] = useState(true);
  const [loadPetImage, setLoadPetImage] = useState(true);
  const [img, setPetImg] = useState([]);
  const [find, setFind] = useState("belfu");
  const [searchError, setSearchError] = useState("");
  const [region, setRegion] = useState("EU");
  const [characterData, setCharacterData] = useState({
    char: "belfu",
    server: "balnazzar",
    region: "EU",
  });
  const [pets, setPets] = useState({ loading: true, pets: [], errors: "" });
  const [pageNumber, setPageNumber] = useState(0);
  const petsPerPage = 10;
  const pagesVisited = pageNumber * petsPerPage;
  const pageCount = Math.ceil(pets.pets.length / petsPerPage);
  const [activeCard, setActiveCard] = useState(null);
  const [search, setSearch] = useState(false);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
    setLoadPetImage(false);
    getPetDetails(pets.pets, selected);
  };

  function importPets(character) {
    if (find)
      auth(character).then((response) => {
        if (!response.error) {
          setPets({ loading: false, pets: response.pets, errors: "" });

          return setLoad(false);
        }
        setPets({ loading: true, pets: [], errors: response.error });
      });
  }

  const displayPets = pets.pets
    .slice(pagesVisited, pagesVisited + petsPerPage)
    .map((pet, index) => {
      {
        return (
          <Tilt key={index} scale={1.1} transitionSpeed={800}>
            {img.map(
              (imagePet, index) =>
                imagePet.id === pet.species.id && (
                  <li
                    onClick={() => {
                      setActiveCard(pet.id);
                      console.log(activeCard);
                    }}
                    className={[
                      activeCard === pet.id
                        ? "selected"
                        : "" + checkType(imagePet.battle_pet_type.type),
                    ]}
                    key={index}
                  >
                    <div className="iconPet">
                      <img key={index} src={imagePet.icon} alt="noImg"></img>
                    </div>
                    {imagePet.name} <p>{pet.level}</p>
                    <p>Health: {pet.stats.health}</p>
                    <p>Power: {pet.stats.power}</p>
                    <p>Speed: {pet.stats.speed}</p>
                    <p>Type:{imagePet.battle_pet_type.type}</p>
                    {imagePet.battle_pet_type.type === "BEAST" ? (
                      <div className="swipe"></div>
                    ) : (
                      ""
                    )}
                    {imagePet.battle_pet_type.type === "ELEMENTAL" ? (
                      <div className="fireIcon"></div>
                    ) : (
                      ""
                    )}
                  </li>
                )
            )}
          </Tilt>
        );
      }
    });

  function checkType(type) {
    if (type.toLowerCase() === "elemental") {
      return "elemental";
    }
    if (type.toLowerCase() === "critter") {
      return "critter";
    }
    if (type.toLowerCase() === "aquatic") {
      return "aquatic";
    }
    if (type.toLowerCase() === "magic") {
      return "magic";
    }
    if (type.toLowerCase() === "beast") {
      return "beast";
    }
  }

  function getPetDetails(pet, page) {
    setLoadPetImage(true);
    petInfo(pet, page * 10).then((response) => {
      if (response) {
        console.log("aici");
        console.log(response);

        let nonDuplicate = response.filter(
          (ele, ind) =>
            ind ===
            response.findIndex(
              (elem) => elem.id === ele.id && elem.id === ele.id
            )
        );
        setPetImg(nonDuplicate);

        console.log(img);
        /*
        console.log(response.assets[0].value);
        
        setPetImg([...img, response.assets[0].value]);
        setLoadPet(false);
        return response.assets[0].value;
        */
      }
    });
  }

  useEffect(() => {
    retriveToken().then((response) => {
      console.log(response);
      if (localStorage.token !== undefined) {
        if (pets.pets.length === 0 && !pets.errors) {
          importPets(characterData);
        }

        if (pets.pets.length > 0 && img.length === 0)
          getPetDetails(pets.pets, 0);
      }

      if (search) {
        importPets(characterData);
        getPetDetails(pets.pets, 0);
        setSearch(false);
      }
    });

    /* if (pets.pets.length > 0)
      petInfo(pets.pets).then((response) => {
        if (response) {
          console.log(response);
        }
      });
      */
  }, [pets, img]);

  function separateString(str) {
    /*str = str.replace(/\s/g, "-");*/

    var period = str.lastIndexOf("-");
    str = str.replace(/ /g, "-");
    var charName = str.substring(0, period);
    var server = str.substring(period + 1);

    return [charName.toLowerCase(), server.toLowerCase()];
  }
  function findCharacter(char, region) {
    setFind(char);
    setRegion(region);
    console.log(char, region);
    var [charName, server] = separateString(char);
    if (!charName || !server)
      setSearchError("*You didn't add a character name or a server");
    if (charName && server) setSearchError("");
    setCharacter(charName, server, region);
    console.log(characterData);
    setPets({ loading: true, pets: [], errors: "" });
    console.log(pets);
    console.log(charName, server);

    setSearch(true);
  }

  function setCharacter(char, server, region) {
    setCharacterData({
      char: char,
      server: server,
      region: region,
    });
  }

  return (
    <div className="App">
      <HeaderTop />
      <SearchBar find={findCharacter} findError={searchError} />
      {pets.errors ? (
        <div className="error">Your search bring no results</div>
      ) : (
        ""
      )}

      {loadPetImage ? (
        <ul className="displayPets">
          <div
            className="zoomOutPet"
            onClick={() => {
              setActiveCard(null);
            }}
          ></div>
          {load ? "Loading" : !pets.loading && displayPets}
        </ul>
      ) : (
        "loading"
      )}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationButtons"}
        previousLinkClassName={"previousButton"}
        nextLinkClassName={"nextButton"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

export default App;
