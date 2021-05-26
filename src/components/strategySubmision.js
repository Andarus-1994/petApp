import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SearchPet from "./searchPetStrategy";

function StrategySubmision() {
  const allPets = useSelector((state) => state.allPets);
  const [allPetsIcons, setAllPetsIcons] = useState({
    loading: true,
    pets: null,
  });

  const [counterTurns, setCounterTurns] = useState(0);
  const [chosenInput, setChosenInput] = useState(0);
  const [instructions, setInstructions] = useState([]);
  const [modalPet1, setModalPet1] = useState(false);
  const [modalPet2, setModalPet2] = useState(false);
  const [modalPet3, setModalPet3] = useState(false);
  const [nextStep, setNextStep] = useState(false);
  const [pet1, setPet1] = useState({
    id: null,
    owned: false,
    abilitiesChosen: { 1: 0, 2: 1, 3: 2 },
    loading: true,
    speed: null,
    rarity: "rare",
    type: null,
    icon: null,
    abilities: null,
    name: null,
  });
  const [pet2, setPet2] = useState({
    id: null,
    owned: false,
    abilitiesChosen: { 1: 0, 2: 1, 3: 2 },
    loading: true,
    speed: null,
    rarity: "rare",
    type: null,
    icon: null,
    abilities: null,
    name: null,
  });
  const [pet3, setPet3] = useState({
    id: null,
    owned: false,
    abilitiesChosen: { 1: 0, 2: 1, 3: 2 },
    loading: true,
    speed: null,
    rarity: "rare",
    type: null,
    icon: null,
    abilities: null,
    name: null,
  });
  useEffect(() => {
    if (!allPets.loading && allPetsIcons.loading) {
      setAllPetsIcons({ loading: false, pets: allPets.pets });
    }
    console.log(allPetsIcons);
    console.log(pet1);
  }, [allPets.loading, allPetsIcons.loading, pet1]);

  function setPetDetails1(id, name, type, abilities, icon) {
    setPet1({
      ...pet1,
      id: id,
      name: name,
      type: type,
      abilities: abilities,
      icon: icon,
    });
  }
  function setPetDetails2(id, name, type, abilities, icon) {
    setPet2({
      ...pet2,
      id: id,
      name: name,
      type: type,
      abilities: abilities,
      icon: icon,
    });
  }
  function setPetDetails3(id, name, type, abilities, icon) {
    setPet3({
      ...pet3,
      id: id,
      name: name,
      type: type,
      abilities: abilities,
      icon: icon,
    });
  }

  function returnIndex(index) {
    console.log(index);
    if (index === 0) return 1;
    if (index === 1) return 2;
    if (index === 2) return 3;
    if (index === 3) return 1;
    if (index === 4) return 2;
    if (index === 5) return 3;
  }

  function createElements(n) {
    return (
      <>
        {[...Array(n)].map((e, i) => {
          return (
            <div className="instruction" key={i}>
              <input
                onChange={(e) => {
                  handleInputChangeTurn(e, i);
                }}
                placeholder="Turn number..."
                className="turn"
                value={instructions[i].turn}
              ></input>
              <textarea
                onChange={(e) => {
                  handleInputChangeInstruction(e, i);
                }}
                value={instructions[i].instructions}
                placeholder="Instruction...."
                className="description"
                onClick={() => {
                  setChosenInput(i);
                }}
              ></textarea>
            </div>
          );
        })}
      </>
    );
  }

  function handleInputChangeInstruction(e, i) {
    console.log(e.target.value);
    console.log(i);
    let instructionsArray = [...instructions];
    let instruction = { ...instructionsArray[i] };

    instruction.instructions = e.target.value;
    instructionsArray[i] = instruction;
    setInstructions(instructionsArray);
    console.log(instructions);
  }
  function handleInputChangeTurn(e, i) {
    console.log(e.target.value);
    console.log(i);
    let instructionsArray = [...instructions];
    let instruction = { ...instructionsArray[i] };

    instruction.turn = e.target.value;
    instructionsArray[i] = instruction;
    setInstructions(instructionsArray);
    console.log(instructions);
  }

  function importantSpan() {
    let instructionsArray = [...instructions];
    let instruction = { ...instructionsArray[chosenInput] };

    instruction.instructions =
      instruction.instructions +
      '<span class="important">Replace this with your text</span>';
    instructionsArray[chosenInput] = instruction;
    setInstructions(instructionsArray);
    console.log(instructions);
  }

  function addNamePet(id, name) {
    let instructionsArray = [...instructions];
    let instruction = { ...instructionsArray[chosenInput] };

    instruction.instructions =
      instruction.instructions +
      `<span class="hero"><a href="https://www.wowhead.com/battle-pet/` +
      id +
      `" target="_blank">` +
      name +
      `</a></span>`;
    instructionsArray[chosenInput] = instruction;
    setInstructions(instructionsArray);
  }

  function addAbilityPet(id, name) {
    let instructionsArray = [...instructions];
    let instruction = { ...instructionsArray[chosenInput] };

    instruction.instructions =
      instruction.instructions +
      `<span><a href="https://www.wowhead.com/pet-ability=` +
      id +
      `" target="_blank">` +
      name +
      `</a></span>`;
    instructionsArray[chosenInput] = instruction;
    setInstructions(instructionsArray);
  }

  function removeRow() {
    let instructionsArray = [...instructions];

    if (counterTurns) {
      instructionsArray.pop();
      setInstructions(instructionsArray);
    }
  }

  return (
    <div className="submitStrategy">
      <h1>Submit Your Strategy</h1>

      <ul className="petPanel">
        <li className={pet1.type && pet1.type.toLowerCase()}>
          <div className="iconPet">
            <img
              src={pet1.icon && pet1.icon}
              alt="?"
              onClick={() => {
                setModalPet1(!modalPet1);
              }}
              className={nextStep ? "locked" : ""}
            ></img>
          </div>
          {!pet1.id && <p>Choose Pet</p>}
          {pet1.id && (
            <div>
              <div className="petName">{pet1.name}</div>
              <div className="abilities">
                {pet1.abilities.map((ability, index) => (
                  <div key={index}>
                    <img
                      className={
                        index === pet1.abilitiesChosen[1] ||
                        index === pet1.abilitiesChosen[2] ||
                        index === pet1.abilitiesChosen[3]
                          ? "chosen"
                          : ""
                      }
                      src={ability.ability.icon}
                      alt="noAbility"
                      onClick={() => {
                        setPet1({
                          ...pet1,
                          abilitiesChosen: {
                            ...pet1.abilitiesChosen,
                            [returnIndex(index)]: index,
                          },
                        });
                      }}
                    ></img>
                    <p>{ability.ability.name}</p>
                  </div>
                ))}
              </div>
              <p className="type">-{pet1.type}-</p>
            </div>
          )}

          {modalPet1 && (
            <SearchPet setPet={setPetDetails1} allPets={allPetsIcons} />
          )}
        </li>
        <li className={pet2.type && pet2.type.toLowerCase()}>
          <div className="iconPet">
            <img
              src={pet2.icon && pet2.icon}
              alt="?"
              onClick={() => {
                setModalPet2(!modalPet2);
              }}
              className={nextStep ? "locked" : ""}
            ></img>
          </div>
          {!pet2.id && <p>Choose Pet</p>}
          {pet2.id && (
            <div>
              <div className="petName">{pet2.name}</div>
              <div className="abilities">
                {pet2.abilities.map((ability, index) => (
                  <div key={index}>
                    <img
                      className={
                        index === pet2.abilitiesChosen[1] ||
                        index === pet2.abilitiesChosen[2] ||
                        index === pet2.abilitiesChosen[3]
                          ? "chosen"
                          : ""
                      }
                      src={ability.ability.icon}
                      alt="noAbility"
                      onClick={() => {
                        setPet2({
                          ...pet2,
                          abilitiesChosen: {
                            ...pet2.abilitiesChosen,
                            [returnIndex(index)]: index,
                          },
                        });
                      }}
                    ></img>
                    <p>{ability.ability.name}</p>
                  </div>
                ))}
              </div>
              <p className="type">-{pet2.type}-</p>
            </div>
          )}

          {modalPet2 && (
            <SearchPet setPet={setPetDetails2} allPets={allPetsIcons} />
          )}
        </li>
        <li className={pet3.type && pet3.type.toLowerCase()}>
          <div className="iconPet">
            <img
              src={pet3.icon && pet3.icon}
              alt="?"
              onClick={() => {
                setModalPet3(!modalPet3);
              }}
              className={nextStep ? "locked" : ""}
            ></img>
          </div>
          {!pet3.id && <p>Choose Pet</p>}
          {pet3.id && (
            <div>
              <div className="petName">{pet3.name}</div>
              <div className="abilities">
                {pet3.abilities.map((ability, index) => (
                  <div key={index}>
                    <img
                      className={
                        index === pet3.abilitiesChosen[1] ||
                        index === pet3.abilitiesChosen[2] ||
                        index === pet3.abilitiesChosen[3]
                          ? "chosen"
                          : ""
                      }
                      src={ability.ability.icon}
                      alt="noAbility"
                      onClick={() => {
                        setPet3({
                          ...pet3,
                          abilitiesChosen: {
                            ...pet3.abilitiesChosen,
                            [returnIndex(index)]: index,
                          },
                        });
                      }}
                    ></img>
                    <p>{ability.ability.name}</p>
                  </div>
                ))}
              </div>
              <p className="type">-{pet3.type}-</p>
            </div>
          )}

          {modalPet3 && (
            <SearchPet setPet={setPetDetails3} allPets={allPetsIcons} />
          )}
        </li>
      </ul>
      <button
        className="nextStep"
        onClick={() => {
          setNextStep(true);
        }}
      >
        Next Step
      </button>
      <div className="utilitiesUser">
        <div className="important" onClick={importantSpan}>
          Important !
          <span className="importantHelper">
            Remember to replace the text inside the SPAN tag
          </span>
        </div>

        {pet1.id && (
          <>
            <div
              className="pet"
              onClick={() => {
                addNamePet(pet1.id, pet1.name);
              }}
            >
              {pet1.name}
            </div>
            <div
              className="ability"
              onClick={() => {
                addAbilityPet(
                  pet1.abilities[pet1.abilitiesChosen[1]].ability.id,
                  pet1.abilities[pet1.abilitiesChosen[1]].ability.name
                );
              }}
            >
              {pet1.abilities[pet1.abilitiesChosen[1]].ability.name}
            </div>
            <div
              className="ability"
              onClick={() => {
                addAbilityPet(
                  pet1.abilities[pet1.abilitiesChosen[2]].ability.id,
                  pet1.abilities[pet1.abilitiesChosen[2]].ability.name
                );
              }}
            >
              {pet1.abilities[pet1.abilitiesChosen[2]].ability.name}
            </div>
            <div
              className="ability"
              onClick={() => {
                addAbilityPet(
                  pet1.abilities[pet1.abilitiesChosen[3]].ability.id,
                  pet1.abilities[pet1.abilitiesChosen[3]].ability.name
                );
              }}
            >
              {pet1.abilities[pet1.abilitiesChosen[3]].ability.name}
            </div>
          </>
        )}
        {pet2.id && (
          <>
            <div
              className="pet"
              onClick={() => {
                addNamePet(pet2.id, pet2.name);
              }}
            >
              {pet2.name}
            </div>
            <div
              className="ability"
              onClick={() => {
                addAbilityPet(
                  pet2.abilities[pet2.abilitiesChosen[1]].ability.id,
                  pet2.abilities[pet2.abilitiesChosen[1]].ability.name
                );
              }}
            >
              {pet2.abilities[pet2.abilitiesChosen[1]].ability.name}
            </div>
            <div
              className="ability"
              onClick={() => {
                addAbilityPet(
                  pet2.abilities[pet2.abilitiesChosen[2]].ability.id,
                  pet2.abilities[pet2.abilitiesChosen[2]].ability.name
                );
              }}
            >
              {pet2.abilities[pet2.abilitiesChosen[2]].ability.name}
            </div>
            <div
              className="ability"
              onClick={() => {
                addAbilityPet(
                  pet2.abilities[pet2.abilitiesChosen[3]].ability.id,
                  pet2.abilities[pet2.abilitiesChosen[3]].ability.name
                );
              }}
            >
              {pet2.abilities[pet2.abilitiesChosen[3]].ability.name}
            </div>
          </>
        )}
        {pet3.id && (
          <>
            <div
              className="pet"
              onClick={() => {
                addNamePet(pet3.id, pet3.name);
              }}
            >
              {pet3.name}
            </div>
            <div
              className="ability"
              onClick={() => {
                addAbilityPet(
                  pet3.abilities[pet3.abilitiesChosen[1]].ability.id,
                  pet3.abilities[pet3.abilitiesChosen[1]].ability.name
                );
              }}
            >
              {pet3.abilities[pet3.abilitiesChosen[1]].ability.name}
            </div>
            <div
              className="ability"
              onClick={() => {
                addAbilityPet(
                  pet3.abilities[pet3.abilitiesChosen[2]].ability.id,
                  pet3.abilities[pet3.abilitiesChosen[2]].ability.name
                );
              }}
            >
              {pet3.abilities[pet3.abilitiesChosen[2]].ability.name}
            </div>
            <div
              className="ability"
              onClick={() => {
                addAbilityPet(
                  pet3.abilities[pet3.abilitiesChosen[3]].ability.id,
                  pet3.abilities[pet3.abilitiesChosen[3]].ability.name
                );
              }}
            >
              {pet3.abilities[pet3.abilitiesChosen[3]].ability.name}
            </div>
          </>
        )}
      </div>
      <div className="strategyInstructions">
        <h1>Fight Instructions</h1>
        <div className="ColumnNames">
          <div className="turn">Turn Number</div>
          <div className="instruction">Description</div>
        </div>
        {createElements(counterTurns)}
        <div className="buttons">
          <button
            onClick={() => {
              setCounterTurns(counterTurns - 1);
              removeRow();
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              setCounterTurns(counterTurns + 1);
              setInstructions([
                ...instructions,
                { turn: "", instructions: "" },
              ]);
            }}
          >
            +
          </button>
        </div>
      </div>
      <button>Submit Your Strategy</button>
    </div>
  );
}

export default StrategySubmision;
