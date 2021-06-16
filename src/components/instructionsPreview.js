import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getInstructions, getStrategy } from "./functions/submitStrategy.js";
import parse from "html-react-parser";
function InstructionsPreview({ location, idStrategy }) {
  const [instructions, setInstructions] = useState({ loading: true, data: [] });
  useEffect(() => {
    console.log(idStrategy);
    callInstructions();
  }, []);

  async function callInstructions() {
    await getInstructions({ location: location, id_strategy: idStrategy }).then(
      (resp) => {
        console.log(resp);
        setInstructions({ loading: false, data: resp });
      }
    );
  }

  return (
    <div className="instructions">
      <div>
        <h1>Fight Instructions</h1>
        {instructions.loading ? (
          <div className="loadingSpinner"></div>
        ) : (
          instructions.data.map((instruction, index) => (
            <div className="turn" key={index}>
              <p>{instruction.turn}</p>

              <p> {parse(instruction.instruction)}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default InstructionsPreview;
