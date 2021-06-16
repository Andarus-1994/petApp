import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getStrategy } from "./functions/submitStrategy.js";
import InstructionsPreview from "./instructionsPreview.js";
import PetPreview from "./petPreview.js";

function StrategiesPreview({ location }) {
  const allUserPets = useSelector((state) => state.pets);
  const [emptyStrategy, setEmptyStrategy] = useState("");
  const [strategies, setStrategies] = useState({ loading: true, data: [] });
  const [selectOption, setSelectOption] = useState("");
  useEffect(() => {
    console.log(allUserPets.pets);

    getStrategies();
    console.log(strategies.data);
  }, [allUserPets.loading]);

  async function getStrategies() {
    await getStrategy({
      location: location,
    }).then((resp) => {
      console.log(resp.data);
      if (resp.data.Empty) {
        setEmptyStrategy(resp.data.Empty);
        setStrategies({ loading: false, data: [] });
      }
      if (!resp.data.Empty) {
        var result = Object.keys(resp.data).map((key) => [key, resp.data[key]]);
        setSelectOption(result[0][0]);

        setStrategies({ loading: false, data: result });
      }
    });
  }

  function handleSelect(e) {
    setSelectOption(e.target.value);
  }
  return (
    <div className="strategiesPreview">
      <h2>{emptyStrategy}</h2>

      <div className="strategyOptions">
        <label>Strategy:</label>

        <select onChange={handleSelect} className="CustomSelect">
          {strategies.loading ? (
            <option>Loading</option>
          ) : (
            strategies.data.map((strategy, index) => (
              <option key={index} value={strategy[0]}>
                {strategy[1].title}
              </option>
            ))
          )}
        </select>
      </div>
      {strategies.loading ? (
        <div className="loadingSpinner"></div>
      ) : (
        strategies.data.map((strategy, index) => (
          <div key={index}>
            {strategy[0] === selectOption ? (
              <div>
                <ul>
                  <PetPreview
                    petId={strategy[1].pet1_id}
                    petRequiredLevel={strategy[1].pet1_level}
                    petRarity={strategy[1].pet1_rarity}
                    petBreed={strategy[1].pet1_breed}
                    chosenAbilities={{
                      0: strategy[1].pet1_ability_1,
                      1: strategy[1].pet1_ability_2,
                      2: strategy[1].pet1_ability_3,
                    }}
                  />
                  <PetPreview
                    petId={strategy[1].pet2_id}
                    petRequiredLevel={strategy[1].pet2_level}
                    petRarity={strategy[1].pet2_rarity}
                    petBreed={strategy[1].pet2_breed}
                    chosenAbilities={{
                      0: strategy[1].pet2_ability_1,
                      1: strategy[1].pet2_ability_2,
                      2: strategy[1].pet2_ability_3,
                    }}
                  />
                  <PetPreview
                    petId={strategy[1].pet3_id}
                    petRequiredLevel={strategy[1].pet3_level}
                    petRarity={strategy[1].pet3_rarity}
                    petBreed={strategy[1].pet3_breed}
                    chosenAbilities={{
                      0: strategy[1].pet3_ability_1,
                      1: strategy[1].pet3_ability_2,
                      2: strategy[1].pet3_ability_3,
                    }}
                  />
                </ul>
                <div className="author">Author: {strategy[1].author}</div>
                <InstructionsPreview
                  location={location}
                  idStrategy={selectOption}
                />
              </div>
            ) : (
              ""
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default StrategiesPreview;
