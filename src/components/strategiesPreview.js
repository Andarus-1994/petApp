import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getStrategy } from "./functions/submitStrategy.js";
import InstructionsPreview from "./instructionsPreview.js";
import PetPreview from "./petPreview.js";
import CommentSection from "./commentSection.js";
function StrategiesPreview({ location, baseLocation }) {
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

	function checkPetLevel25(id1, id2, id3) {
		let petsOwned = 0;
		let pet1Found = false;
		let pet2Found = false;
		let pet3Found = false;
		allUserPets.pets.pets.map((pet) => {
			if ((pet.species.id === id1 || id1 === 0) && !pet1Found) {
				petsOwned = petsOwned + 1;
				pet1Found = true;
			}
			if ((pet.species.id === id2 || id2 === 0) && !pet2Found) {
				petsOwned = petsOwned + 1;
				pet2Found = true;
			}
			if ((pet.species.id === id3 || id3 === 0) && !pet3Found) {
				petsOwned = petsOwned + 1;
				pet3Found = true;
			}
		});
		console.log(petsOwned);
		if (petsOwned === 3) {
			return true;
		}
		return false;
	}

	return (
		<div className="strategiesPreview">
			<div className="strategyOptions">
				<label>Strategy:</label>

				<select onChange={handleSelect} className="CustomSelect">
					{strategies.loading ? (
						<option>Loading</option>
					) : strategies.data.length === 0 ? (
						<option>None</option>
					) : (
						strategies.data.map((strategy, index) => (
							<option
								key={index}
								value={strategy[0]}
								className={checkPetLevel25(strategy[1].pet1_id, strategy[1].pet2_id, strategy[1].pet3_id) && "OwnedPetsSelect"}
							>
								{checkPetLevel25(strategy[1].pet1_id, strategy[1].pet2_id, strategy[1].pet3_id)
									? strategy[1].title + "(Owned Pets)"
									: strategy[1].title}
							</option>
						))
					)}
				</select>
			</div>
			{emptyStrategy ? <h2 className={emptyStrategy ? "empty" : "strategyH1"}>{emptyStrategy}</h2> : null}
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

								<div className="flexRNGAuthor">
									{strategy[1].rng ? <div className="rngSign">RNG Involved !</div> : <div></div>}

									<div className="author">Author: {strategy[1].author}</div>
								</div>

								<InstructionsPreview location={location} idStrategy={selectOption} />
							</div>
						) : (
							""
						)}
					</div>
				))
			)}
			{strategies.loading ? (
				"Loading"
			) : strategies.data.length > 0 ? (
				<CommentSection props={{ location: baseLocation + location + "/" + selectOption }} />
			) : null}
		</div>
	);
}

export default StrategiesPreview;
