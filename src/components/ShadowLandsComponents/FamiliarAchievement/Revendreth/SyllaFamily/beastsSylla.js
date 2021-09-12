import { useState } from "react";
import StrategiesPreview from "../../../../strategiesPreview.js";
import StrategySubmision from "../../../../strategySubmision.js";

function BeastsSylla() {
    const [submitWindow, setSubmitWindow] = useState(false);
    const location = "beastsSylla";
    return (
        <div className="containerStrategy">
            <h1>Sylla Beasts Pet Battle Guide</h1>
            <h2>Revendreth (Shadowlands)</h2>
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
            {submitWindow ? <StrategySubmision location={location} /> : <StrategiesPreview location={location} />}
        </div>
    );
}
export default BeastsSylla;
