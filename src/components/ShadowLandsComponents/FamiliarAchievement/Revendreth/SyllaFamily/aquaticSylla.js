import { useState } from "react";
import StrategySubmision from "../../../../strategySubmision.js";

function AquaticSylla() {
  const [submitWindow, setSubmitWindow] = useState(true);
  return <div>{submitWindow && <StrategySubmision />}</div>;
}
export default AquaticSylla;
