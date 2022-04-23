import { useState } from "react";
import StrategiesPreview from "../../../../strategiesPreview.js";
import StrategySubmision from "../../../../strategySubmision.js";
function BeastsGlitterdust() {
  const [submitWindow, setSubmitWindow] = useState(false);
  const location = "beastsGlitterdust";
  return (
    <div className="containerStrategy">
      <h1>Glitterdust Beasts Pet Battle Guide</h1>
      <h2>ArdenWeald (Shadowlands)</h2>
      {
        <div className="containerStrategyButton">
          <button
            className="strategyButton"
            onClick={() => {
              setSubmitWindow(!submitWindow);
            }}
          >
            {submitWindow ? "Close" : "Add New Strategy"}
          </button>
        </div>
      }
      {submitWindow ? (
        <StrategySubmision
          baseLocation="shadowlands/familiar/"
          location={location}
        />
      ) : (
        <StrategiesPreview
          baseLocation="shadowlands/familiar/"
          location={location}
        />
      )}
    </div>
  );
}
export default BeastsGlitterdust;
