import { useState } from "react";
import StrategiesPreview from "../../../../strategiesPreview.js";
import StrategySubmision from "../../../../strategySubmision.js";
function UndeadMaximillian() {
  const [submitWindow, setSubmitWindow] = useState(false);
  const location = "undeadMaximillian";
  return (
    <div className="containerStrategy">
      <h1>Maximillian Undead Pet Battle Guide</h1>
      <h2>Maldraxxus (Shadowlands)</h2>
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
export default UndeadMaximillian;
