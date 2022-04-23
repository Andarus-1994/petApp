import { useHistory } from "react-router-dom";
import petImage from "../assets/homePage.jpg";
import elementalImage from "../assets/FamilyIcons/elemental.png";
import beastImage from "../assets/FamilyIcons/beast.png";
import aquaticImage from "../assets/FamilyIcons/aquatic.png";
import critterImage from "../assets/FamilyIcons/critter.png";
import dragonkinImage from "../assets/FamilyIcons/dragonkin.png";
import flyingImage from "../assets/FamilyIcons/flying.png";
import humanoidImage from "../assets/FamilyIcons/humanoid.png";
import magicImage from "../assets/FamilyIcons/magic.png";
import mechanicalImage from "../assets/FamilyIcons/mechanical.png";
import undeadImage from "../assets/FamilyIcons/undead.png";
import CatImage from "../assets/cat.png";
function HomePage() {
  let history = useHistory();

  function SendToPets() {
    history.push("/guidepetlevel");
  }
  return (
    <div className="homePage">
      <div className="mainBanner">
        <div className="leftSide">
          <img className="catHomePage" src={CatImage} alt="cat" />
          <h2>
            Petius. <span>Your pet battles Website.</span>
          </h2>
          <p>
            Check new guides every day with constantly updated strategies. Be Up
            to Date with US.
          </p>
          <button onClick={SendToPets} title="Pets Guides">
            Check the Guides!
          </button>
        </div>
        <div className="rightSide">
          <img src={petImage} alt="noHomeImg" />
          <h4>
            Always choose the best options for <span>YOU</span>!
          </h4>
        </div>
      </div>
      <div className="gridTypes">
        <h3>
          Learn to master every <span>Pet type</span>
        </h3>
        <div className="gridPetsTypes">
          <div className="type">
            <img src={aquaticImage} alt="pet" />
            <p>Aquatic</p>
            <div className="description">
              Aquatic: Strong against elemental (attack) and undead (defense);
              weak against magic (attack) and flying (defense). Harmful damage
              over time effects are reduced by 50% on Aquatic pets.
            </div>
          </div>
          <div className="type">
            <img src={beastImage} alt="pet" />
            <p>Beast</p>
            <div className="description">
              Beast: Strong against critter (attack) and humanoid (defense);
              weak against flying (attack) and mechanical (defense). Beasts deal
              25% extra damage below half health.
            </div>
          </div>
          <div className="type">
            <img src={elementalImage} alt="pet" />
            <p>Elemental</p>
            <div className="description">
              Elemental attacks do more damage to Mechanical companions and less
              to Critter companions.
            </div>
          </div>
          <div className="type">
            <img src={critterImage} alt="pet" />
            <p>Critter</p>
            <div className="description">
              Critter: Strong against undead (attack) and elemental (defense);
              weak against humanoid (attack) and beast (defense)
            </div>
          </div>
          <div className="type">
            <img src={dragonkinImage} alt="pet" />
            <p>Dragonkin</p>
            <div className="description">
              Dragonkin attacks deal bonus damage to Magic companions and less
              damage to Undead companions.
            </div>
          </div>
          <div className="type">
            <img src={flyingImage} alt="pet" />
            <p>Flying</p>
            <div className="description">
              Flying attacks deal bonus damage to Aquatic companions and less
              damage to Dragonkin companions.
            </div>
          </div>
          <div className="type">
            <img src={humanoidImage} alt="pet" />
            <p>Humanoid</p>
            <div className="description">
              Humanoid attacks do more damage to Dragonkin and less to Beast
              companions.
            </div>
          </div>
          <div className="type">
            <img src={magicImage} alt="pet" />
            <p>Magic</p>
            <div className="description">
              Magical attacks deal bonus damage to Flying and less damage to
              Mechanical companions.
            </div>
          </div>
          <div className="type">
            <img src={mechanicalImage} alt="pet" />
            <p>Mechanical</p>
            <div className="description">
              Strong against beast (attack) and magic (defense); weak against
              mechanical (attack and defense). Comes back to life once per
              battle, returning to 25% health.
            </div>
          </div>
          <div className="type">
            <img src={undeadImage} alt="pet" />
            <p>Undead</p>
            <div className="description">
              Undead: Strong against humanoid (attack) and dragonkin (defense);
              weak against aquatic (attack) and critter (defense).
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
