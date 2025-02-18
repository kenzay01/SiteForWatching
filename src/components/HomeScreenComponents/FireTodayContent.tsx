import type { Anime } from "../../types/Anime";
import "../styles/FireTodayContent.css";
export default function FireTodayContent({
  animeFire,
}: {
  animeFire: Anime[];
}) {
  return (
    <div className="fire-today-container">
      <div className="fire-today-title">Today's Top</div>
      <div className="fire-today-top">
        <div className="fire-today-top-one"></div>
        <div className="fire-today-top-others"></div>
      </div>
    </div>
  );
}
