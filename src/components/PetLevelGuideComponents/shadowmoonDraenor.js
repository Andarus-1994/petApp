import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { singlePetInfo, petAbility } from "../functions/serverFunctions.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import Pet from "./pet.js";
import location3 from "../../assets/Ashlei/Ashlei.jpg";
import location from "../../assets/Ashlei/ashleiDraenorMap.jpg";
import location2 from "../../assets/Ashlei/ashleiSMmap.jpg";

function ShadowmoonDraenor() {
  const petsChar = useSelector((state) => state.pets);
  const [coords] = useState("/way ShadowMoon Valley 50, 31");
  //const pet = { id: 844 };
  const [pet, setPet] = useState({
    id: 844,
    owned: false,
    abilities: { 1: 0, 2: 1, 3: 5 },
    speed: null,
    rarity: "rare",
  });
  const [requiredPetOne, setRequiredPetOne] = useState({
    pets: {},
    petAbilities: [],
    loading: true,
  });

  useEffect(() => {
    if (requiredPetOne.loading) getPetDetails();
    setPet({ ...pet, id: 844, owned: checkOwnedPet(pet.id) });

    if (requiredPetOne.petAbilities.length < 6 && !requiredPetOne.loading) {
      petAbility(
        requiredPetOne.pets.abilities[requiredPetOne.petAbilities.length]
      ).then((resp) => {
        if (!resp.error)
          setRequiredPetOne({
            ...requiredPetOne,
            petAbilities: [
              ...requiredPetOne.petAbilities,
              resp.assets[0].value,
            ],
          });
      });
      // if (petAbilities.length === 5) setLoadAbilities(false);
    }
  }, [petsChar, requiredPetOne.petAbilities]);

  async function getPetDetails() {
    await singlePetInfo(pet).then((res) => {
      setRequiredPetOne({ pets: res, petAbilities: [], loading: false });
    });
  }

  function checkOwnedPet(id) {
    if (petsChar.pets.pets.find((pet) => isPet(pet, id))) return true;
    else return false;
  }
  function isPet(pet, id) {
    return pet.species.id === id;
  }

  return (
    <div className="shadowmoonDraenorLevelGuide">
      <h1>Ashlei Pet Battle Guide</h1>
      <h2>ShadowMoon Valley (Draenor)</h2>
      <div className="difficulty">
        <div className="greenDifficulty"></div>
        <p>Difficulty level:</p>
      </div>
      <div className="containerShadowmoonDraenorLevel">
        <div className="FightRequirements">
          <ul>
            {!requiredPetOne.loading && requiredPetOne.pets ? (
              <Pet pet={requiredPetOne} petOwned={pet} />
            ) : (
              "loading"
            )}
            <li className={"anyPet"}>
              <div className="iconPet">
                <img className="noImg" alt="?"></img>
              </div>
              <p>Any Pet</p>
              <p>No Stats Required</p>
              <p className="level">Any level </p>
            </li>
            <li className={"anyPet"}>
              <div className="iconPet">
                <img className="noImg" alt="?"></img>
              </div>
              <p>Any Pet</p>
              <p>No Stats Required</p>
              <p className="level">Any level </p>
            </li>
          </ul>
          <div className="FightInstructions">
            <h1>Fight Instructions</h1>
            <div className="turn">
              {" "}
              <p>Turn 1</p>
              <p>
                Use <span>Breath</span> ability until Pixiebell dies.
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 3 or 4 </p>
              <p>
                Doodle joins the fight. Start with <span>Bombing Run</span> then
                use <span>Decoy</span>. Tally comes in, but you just continue
                using <span>Breath</span> until you will eventually kill him.
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 8 or 9</p>
              <p>
                Spam <span>Breath</span> until Doodle is around 350hp then u can
                swap the leveling pet and swap back again.
              </p>
            </div>
            <div className="turn">
              <p>Turn 11 or 12</p>
              <p>
                Spam <span>Breath</span> until Doodle dies and the leveling pet
                gets all the exp.
              </p>
            </div>
          </div>
          <h3>
            TIP: Use the <span>[Safari Hat]</span> toy for 10% increased XP.
          </h3>
        </div>
        <div className="locationImages">
          <h1>Localization: </h1>
          <button
            onClick={() => {
              navigator.clipboard.writeText(coords);
            }}
          >
            Copy Coordinates <FontAwesomeIcon icon={faClipboard} />
          </button>
          <a href={location} target="_blank" rel="noreferrer">
            {" "}
            <img src={location} alt="noImg"></img>
          </a>

          <a href={location2} target="_blank" rel="noreferrer">
            {" "}
            <img src={location2} alt="noImg"></img>
          </a>
          <a href={location3} target="_blank" rel="noreferrer">
            {" "}
            <img src={location3} alt="noImg"></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ShadowmoonDraenor;
