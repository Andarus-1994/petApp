import { useState } from "react";
import StrategySubmision from "../../../../strategySubmision.js";

function AquaticSylla() {
  const [submitWindow, setSubmitWindow] = useState(false);
  const location = "aquaticSylla";
  return (
    <div>
      {
        <button
          onClick={() => {
            setSubmitWindow(!submitWindow);
          }}
        >
          {submitWindow ? "Close" : "New Strategy"}
        </button>
      }
      {submitWindow && <StrategySubmision location={location} />}
    </div>
  );
}
export default AquaticSylla;
