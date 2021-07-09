import "../scss/style.css";
import ReactPaginate from "react-paginate";
import { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPetsCharacter } from "./actions";
import Tilt from "react-parallax-tilt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faHeart,
  faBolt,
  faMeteor,
  faSkull,
  faPaw,
  faFeatherAlt,
  faFrog,
  faCogs,
  faCog,
  faMask,
  faCheck,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { petInfo, getDetails } from "./functions/serverFunctions.js";
import SearchBar from "./searchBar.js";
import ModalPet from "./modalPet.js";
import CopyRight from "./copyright.js";
import ReactGa from "react-ga";

function Home() {
  const dispatch = useDispatch();
  const profileTop = useSelector((state) => state.profile);
  const searchedChar = useSelector((state) => state.foundChar);
  const petsChar = useSelector((state) => state.pets);
  const allPets = useSelector((state) => state.allPets);
  const [fav, setFav] = useState(false);
  const [load, setLoad] = useState(true);
  const [loadPetImage, setLoadPetImage] = useState(true);
  const [img, setPetImg] = useState([]);
  const [searchError, setSearchError] = useState("");
  const [curentPet, setCurentPet] = useState({ id: null, pet: {} });
  const [pageNumber, setPageNumber] = useState(0);
  const [pageLoad, setPageLoad] = useState(true);
  const petsPerPage = 10;
  const pagesVisited = pageNumber * petsPerPage;
  const [searchPetName, setSearchPetName] = useState("");
  const [searchPetNameKey, setSearchPetNameKey] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [displayedPets, SetDisplayedPets] = useState({
    loading: true,
    pets: [],
    errors: "",
  });
  const options = [
    { value: "", label: "Default" },
    { value: "AQUATIC", label: "Aquatic" },
    { value: "BEAST", label: "Beast" },
    { value: "CRITTER", label: "Critter" },
    { value: "DRAGONKIN", label: "Dragonkin" },
    { value: "ELEMENTAL", label: "Elemental" },
    { value: "FLYING", label: "Flying" },
    { value: "HUMANOID", label: "Humanoid" },
    { value: "MAGIC", label: "Magic" },
    { value: "MECHANICAL", label: "Mechanical" },
    { value: "UNDEAD", label: "Undead" },
  ];
  const [selectedOption, SetSelectedOption] = useState("");
  const [pageCount, setPageCount] = useState(1);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
    setPageLoad(true);
    setLoadPetImage(false);
    setLoad(true);
    // getPetDetails(petsChar.pets.pets, selected);
    getDetailsPets(selected);
    window.scrollTo(0, 0);
  };

  function displayModal() {
    setShowModal(!showModal);
  }

  function makeFavorite() {
    ReactGa.event({
      category: "Favorite Button",
      action: "Made favorite his char",
    });
    setFav(true);
    localStorage.setItem("favChar", JSON.stringify(searchedChar.character));
  }

  async function getDetailsPets(selected) {
    console.log("testing", selected);

    setPageLoad(true);
    await getDetails({
      pets: petsChar.pets.pets,
      page: selected,
      petName: searchPetName,
      type: selectedOption,
      allPets: allPets.pets,
    }).then((response) => {
      if (!response.data) {
        SetDisplayedPets({
          loading: false,
          pets: [],
          errors: "Server Down until 1st June.",
        });
        setPageLoad(false);
        return;
      }
      console.log("founder", response.data);
      let nonDuplicate = response.data.filter(
        (ele, ind) =>
          ind === response.data.findIndex((elem) => elem.id === ele.id)
      );
      SetDisplayedPets({ loading: false, pets: response.data });
      setPageLoad(false);

      console.log("testing", nonDuplicate);
      setPageCount(response.page);
    });
  }

  const displayPets =
    !displayedPets.loading &&
    displayedPets.pets.map((imagePet, index) => {
      return (
        <Tilt key={index} scale={1.1} transitionSpeed={800}>
          <li
            key={index}
            onClick={() => {
              setShowModal(true);
              setCurentPet({ id: imagePet.data.id, pet: imagePet });
            }}
            className={[checkType(imagePet.battle_pet_type.type)]}
            style={{ animationDuration: 0.6 + index * 0.12 + "s" }}
          >
            <div className="iconPet">
              <img key={index} src={imagePet.icon} alt="noImg"></img>
            </div>
            <div className="petName">{imagePet.name}</div>{" "}
            <div className={checkRarity(imagePet.data.quality.type)}>
              {imagePet.data.quality.type.toLowerCase()}
            </div>
            <p className="level">Level {imagePet.data.level}</p>
            <br></br>
            <p>
              {" "}
              Health: {imagePet.data.stats.health}{" "}
              <FontAwesomeIcon className="health" icon={faHeart} />
            </p>
            <p>
              {" "}
              Power: {imagePet.data.stats.power}{" "}
              <FontAwesomeIcon className="power" icon={faMeteor} />
            </p>
            <p>
              Speed: {imagePet.data.stats.speed}{" "}
              <FontAwesomeIcon className="speed" icon={faBolt} />
            </p>
            <p className="type">- {imagePet.battle_pet_type.type} -</p>
            {imagePet.battle_pet_type.type === "BEAST" ? (
              <div className="swipe"></div>
            ) : (
              ""
            )}
            {imagePet.battle_pet_type.type === "BEAST" ? (
              <FontAwesomeIcon className="paw" icon={faPaw} />
            ) : (
              ""
            )}
            {imagePet.battle_pet_type.type === "ELEMENTAL" ? (
              <div className="fireIcon"></div>
            ) : (
              ""
            )}
            {imagePet.battle_pet_type.type === "UNDEAD" ? (
              <div>
                <FontAwesomeIcon
                  className="skull"
                  icon={faSkull}
                  style={{ top: 3 * imagePet.data.level + "%" }}
                />
                <FontAwesomeIcon className="skull1" icon={faSkull} />
                <FontAwesomeIcon className="skull2" icon={faSkull} />
              </div>
            ) : (
              ""
            )}
            {imagePet.battle_pet_type.type === "FLYING" ? (
              <div>
                <FontAwesomeIcon
                  className="feather"
                  style={{
                    top: imagePet.data.stats.speed > 10 ? "17%" : "40%",
                  }}
                  icon={faFeatherAlt}
                />
              </div>
            ) : (
              ""
            )}
            {imagePet.battle_pet_type.type === "CRITTER" ? (
              <div>
                <FontAwesomeIcon
                  className="frog"
                  style={{
                    bottom: imagePet.data.stats.speed > 10 ? "17%" : "10%",
                    left: imagePet.data.stats.speed > 10 ? "17%" : "5%",
                  }}
                  icon={faFrog}
                />
              </div>
            ) : (
              ""
            )}
            {imagePet.battle_pet_type.type === "MECHANICAL" ? (
              <div>
                <FontAwesomeIcon className="cogs" icon={faCogs} />
                <FontAwesomeIcon className="cog" icon={faCog} />
              </div>
            ) : (
              ""
            )}
            {imagePet.battle_pet_type.type === "HUMANOID" ? (
              <div>
                <FontAwesomeIcon className="mask" icon={faMask} />
              </div>
            ) : (
              ""
            )}
            {imagePet.battle_pet_type.type === "AQUATIC" ? (
              <div>
                <div className="waterDrop1"></div>
                <div className="waterDrop2"></div>
                <div className="waterDrop3"></div>
              </div>
            ) : (
              ""
            )}
            {imagePet.battle_pet_type.type === "DRAGONKIN" ? (
              <div>
                <div className="dragonSign1"></div>
              </div>
            ) : (
              ""
            )}
          </li>
        </Tilt>
      );
    });

  function checkRarity(rare) {
    if (rare.toLowerCase() === "poor") {
      return "grey";
    }
    if (rare.toLowerCase() === "common") {
      return "white";
    }
    if (rare.toLowerCase() === "uncommon") {
      return "green";
    }
    if (rare.toLowerCase() === "rare") {
      return "blue";
    }
  }

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
    if (type.toLowerCase() === "dragonkin") {
      return "dragonkin";
    }
    if (type.toLowerCase() === "undead") {
      return "undead";
    }
    if (type.toLowerCase() === "flying") {
      return "flying";
    }
    if (type.toLowerCase() === "mechanical") {
      return "mechanical";
    }
    if (type.toLowerCase() === "humanoid") {
      return "humanoid";
    }
  }

  function getPetDetails(pet, page) {
    setLoadPetImage(true);

    petInfo(pet, page * 10).then((response) => {
      if (response) {
        console.log("aici");
        console.log(response);
        setLoad(false);
        let nonDuplicate = response.filter(
          (ele, ind) => ind === response.findIndex((elem) => elem.id === ele.id)
        );

        setPetImg(nonDuplicate);
      }
    });
  }

  useEffect(() => {
    if (
      Object.keys(searchedChar.character).length === 0 &&
      searchedChar.loading
    ) {
      setPageLoad(false);
    }

    document.title = "Petius";

    if (
      displayedPets.loading &&
      !petsChar.loading &&
      pageLoad &&
      !allPets.loading
    ) {
      getDetailsPets(0);
    }

    if (
      !searchedChar.loading &&
      !searchedChar.error &&
      !petsChar.loading &&
      !pageLoad &&
      !allPets.loading
    ) {
      setPageNumber(0);
      console.log("test24");
      getDetailsPets(0);
    }
  }, [
    petsChar.pets.pets,
    petsChar.loading,
    petsChar.error,
    searchPetName,
    load,
    selectedOption,
    allPets.loading,
  ]);

  function setError(error) {
    setSearchError(error);
  }

  function loadingOnDisplayPets() {
    //  getPetDetails(0);
    SetDisplayedPets({ loading: true, pets: [] });
    setPageLoad(true);
    setPageNumber(0);
    setSearchPetNameKey("");
  }

  function hitEnter(e) {
    if (e.charCode === 13) {
      setSearchPetName(e.target.value);
    }
  }

  function handleChange(e) {
    setSearchPetNameKey(e.target.value);
  }
  function searchPet() {
    setSearchPetName(searchPetNameKey);
  }

  function handleChangeOptions(e) {
    console.log("testing,", e.target.value);
    SetSelectedOption(e.target.value);
  }
  return (
    <div className="App">
      {profileTop.profile && !profileTop.loading && !profileTop.error ? (
        <div
          className={
            fav ||
            (localStorage.favChar &&
              JSON.parse(localStorage.favChar).char ===
                searchedChar.character.char &&
              JSON.parse(localStorage.favChar).server ===
                searchedChar.character.server &&
              JSON.parse(localStorage.favChar).region ===
                searchedChar.character.region)
              ? "rememberChar favored"
              : "rememberChar"
          }
          onClick={() => makeFavorite()}
        >
          {fav ||
          (localStorage.favChar &&
            JSON.parse(localStorage.favChar).char ===
              searchedChar.character.char &&
            JSON.parse(localStorage.favChar).server ===
              searchedChar.character.server &&
            JSON.parse(localStorage.favChar).region ===
              searchedChar.character.region) ? (
            <div>
              Favored <FontAwesomeIcon icon={faCheck} />{" "}
            </div>
          ) : (
            "Favorite Character"
          )}
        </div>
      ) : (
        ""
      )}
      {showModal ? (
        <ModalPet pet={curentPet.pet} closeModal={displayModal}></ModalPet>
      ) : (
        ""
      )}
      <SearchBar
        setError={setError}
        setLoading={loadingOnDisplayPets}
        findError={searchError}
      />
      {petsChar.error ? (
        <div className="error">
          <p>404 !</p>
          Your search bring no results!
        </div>
      ) : (
        ""
      )}
      {!petsChar.error ? (
        <div className="petFilters">
          <div className="search">
            <input
              type="search"
              id="site-search"
              name="q"
              aria-label="Search through site content"
              placeholder="Pet Name"
              onChange={handleChange}
              onKeyPress={hitEnter}
              value={searchPetNameKey}
            />
            <label>Find a pet </label>
            <label>Ex: "Fawn, Otter, Blue etc... " </label>
            {searchPetNameKey && (
              <button
                onClick={() => {
                  setSearchPetNameKey("");
                }}
              >
                <FontAwesomeIcon icon={faTrash} />{" "}
              </button>
            )}
          </div>
          <button onClick={searchPet}>
            <i className="fa fa-search"></i>
          </button>
          <div className="sort">
            <label>Order by type:</label>
            <select
              id="lang"
              onChange={handleChangeOptions}
              value={selectedOption}
              className="round"
            >
              {options.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
          <div className="totalPets">
            Total Pets (
            {!petsChar.loading && petsChar.pets && petsChar.pets.pets.length})
          </div>
        </div>
      ) : (
        ""
      )}

      <ul className="displayPets">
        {!petsChar.loading &&
        !pageLoad &&
        !displayedPets.loading &&
        searchedChar.character ? (
          displayedPets.pets.length > 0 ? (
            displayPets
          ) : (
            !searchedChar.error &&
            !petsChar.error &&
            !petsChar.loading &&
            !allPets.loading &&
            "No pets found."
          )
        ) : pageLoad ? (
          <div className="spinnerPets-1"></div>
        ) : (
          ""
        )}
        {displayedPets.errors && <p>{displayedPets.errors}</p>}
      </ul>
      {!searchedChar.error &&
      !petsChar.error &&
      !petsChar.loading &&
      !allPets.loading ? (
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationButtons"}
          previousLinkClassName={"previousButton"}
          nextLinkClassName={"nextButton"}
          forcePage={pageNumber}
          nextLabel={<FontAwesomeIcon icon={faAngleRight} />}
          previousLabel={<FontAwesomeIcon icon={faAngleLeft} />}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      ) : (
        ""
      )}
      <CopyRight />
    </div>
  );
}

export default Home;
