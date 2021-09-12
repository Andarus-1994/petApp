import { useState } from "react";
import StrategiesPreview from "../../../../strategiesPreview.js";
import StrategySubmision from "../../../../strategySubmision.js";

function MechanicalSylla() {
	const [submitWindow, setSubmitWindow] = useState(false);
	const location = "mechanicalSylla";
	return (
		<div className="containerStrategy">
			<h1>Sylla Mechanical Pet Battle Guide</h1>
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
			{submitWindow ? (
				<StrategySubmision location={location} />
			) : (
				<StrategiesPreview location={location} />
			)}
		</div>
	);
}
export default MechanicalSylla;
