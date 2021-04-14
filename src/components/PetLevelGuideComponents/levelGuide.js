import NavMenu from "./navLevelGuide.js";
import Copyright from "../copyright.js";
function LevelGuide() {
  return (
    <div className="levelingGuide">
      <div className="containerLevelingGuide">
        <NavMenu />
      </div>
      <Copyright />
    </div>
  );
}

export default LevelGuide;
