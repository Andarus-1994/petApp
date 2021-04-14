import "../scss/style.css";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
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
} from "@fortawesome/free-solid-svg-icons";
import { petInfo } from "./functions/serverFunctions.js";
import SearchBar from "./searchBar.js";
import ModalPet from "./modalPet.js";
import CopyRight from "./copyright.js";
import ReactGa from "react-ga";

function Home() {
  const dispatch = useDispatch();
  const profileTop = useSelector((state) => state.profile);
  const searchedChar = useSelector((state) => state.foundChar);
  const petsChar = useSelector((state) => state.pets);
  const [fav, setFav] = useState(false);
  const [load, setLoad] = useState(true);
  const [loadPetImage, setLoadPetImage] = useState(true);
  const [img, setPetImg] = useState([]);
  const [searchError, setSearchError] = useState("");
  const [curentPet, setCurentPet] = useState({ id: null, pet: {} });
  const [pageNumber, setPageNumber] = useState(0);
  const petsPerPage = 10;
  const pagesVisited = pageNumber * petsPerPage;
  const pageCount = Math.ceil(petsChar.pets.pets.length / petsPerPage);
  const [showModal, setShowModal] = useState(false);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
    setLoadPetImage(false);
    setLoad(true);
    getPetDetails(petsChar.pets.pets, selected);
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

  const displayPets = petsChar.pets.pets
    .slice(pagesVisited, pagesVisited + petsPerPage)
    .map((pet, ind) => {
      {
        return (
          <Tilt key={ind} scale={1.1} transitionSpeed={800}>
            {img.map(
              (imagePet, index) =>
                imagePet.id === pet.species.id && (
                  <li
                    key={index}
                    onClick={() => {
                      setShowModal(true);
                      setCurentPet({ id: pet.id, pet: imagePet });
                    }}
                    className={[checkType(imagePet.battle_pet_type.type)]}
                    style={{ animationDuration: 0.6 + index * 0.12 + "s" }}
                  >
                    <div className="iconPet">
                      <img key={index} src={imagePet.icon} alt="noImg"></img>
                    </div>
                    <div className="petName">{imagePet.name}</div>{" "}
                    <div className={checkRarity(pet.quality.type)}>
                      {pet.quality.type.toLowerCase()}
                    </div>
                    <p className="level">Level {pet.level}</p>
                    <br></br>
                    <p>
                      {" "}
                      Health: {pet.stats.health}{" "}
                      <FontAwesomeIcon className="health" icon={faHeart} />
                    </p>
                    <p>
                      {" "}
                      Power: {pet.stats.power}{" "}
                      <FontAwesomeIcon className="power" icon={faMeteor} />
                    </p>
                    <p>
                      Speed: {pet.stats.speed}{" "}
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
                          style={{ top: 3 * pet.level + "%" }}
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
                            top: pet.stats.speed > 10 ? "17%" : "40%",
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
                            bottom: pet.stats.speed > 10 ? "17%" : "10%",
                            left: pet.stats.speed > 10 ? "17%" : "5%",
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
                )
            )}
          </Tilt>
        );
      }
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
    console.log(searchedChar);
    if (!searchedChar.loading && petsChar.pets.length === 0)
      dispatch(getPetsCharacter(searchedChar.character));
    if (petsChar.pets.pets.length > 0 && img.length === 0)
      getPetDetails(petsChar.pets.pets, 0);

    if (searchedChar && !searchedChar.error) {
      console.log(pageNumber);
      setPageNumber(0);
      getPetDetails(petsChar.pets.pets, 0);
    }
  }, [
    searchedChar.character,
    petsChar.pets.pets,
    petsChar.loading,
    petsChar.error,
    searchedChar.loading,
  ]);

  function setError(error) {
    setSearchError(error);
  }

  function loadingOnDisplayPets() {
    setLoad(true);
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

      {loadPetImage ? (
        <ul className="displayPets">
          {load ? (
            <div className="spinnerPets-1"></div>
          ) : (
            !petsChar.loading && petsChar.pets.pets && displayPets
          )}
        </ul>
      ) : (
        "loading"
      )}
      {!searchedChar.error && !petsChar.error && !petsChar.loading ? (
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
