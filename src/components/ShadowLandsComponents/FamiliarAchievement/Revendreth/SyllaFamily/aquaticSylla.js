import { useState } from "react";
import StrategiesPreview from "../../../../strategiesPreview.js";
import StrategySubmision from "../../../../strategySubmision.js";

function AquaticSylla() {
  const [submitWindow, setSubmitWindow] = useState(false);
  const location = "aquaticSylla";
  return (
    <div>
      {
        <div className="containerStrategyButton">
          <button
            className="strategyButton"
            onClick={() => {
              setSubmitWindow(!submitWindow);
            }}
          >
            {submitWindow ? "Close" : "New Strategy"}
          </button>
        </div>
      }
      {submitWindow ? (
        <StrategySubmision location={location} />
      ) : (
        <StrategiesPreview location={location} />
      )}
    </div>
  );
}
export default AquaticSylla;
