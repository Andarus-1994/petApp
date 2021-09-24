import { useState } from "react";
import StrategiesPreview from "../../../../strategiesPreview.js";
import StrategySubmision from "../../../../strategySubmision.js";
import CommentSection from "../../../../commentSection.js";
function AquaticSylla() {
	const [submitWindow, setSubmitWindow] = useState(false);
	const location = "aquaticSylla";
	return (
		<div className="containerStrategy">
			<h1>Sylla Aquatic Pet Battle Guide</h1>
			<h2>Revendreth (Shadowlands)</h2>
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
				<StrategySubmision baseLocation="shadowlands/familiar/" location={location} />
			) : (
				<StrategiesPreview baseLocation="shadowlands/familiar/" location={location} />
			)}
		</div>
	);
}
export default AquaticSylla;
