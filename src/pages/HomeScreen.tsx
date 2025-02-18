import HomeHeader from "../components/HomeHeader";
import MainImageBunner from "../components/MainImageBunner";
import { Outlet } from "react-router-dom";
import "./styles/HomeScreen.css";
import type { Anime } from "../types/Anime";
import FireTodayContent from "../components/HomeScreenComponents/FireTodayContent";
export default function HomeScreen({ animeList }: { animeList: Anime[] }) {
  const randomAnimesForBanner = [...animeList]
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);
  return (
    <div className="home-container">
      <HomeHeader animeList={animeList} />
      <MainImageBunner animeList={randomAnimesForBanner} />
      <FireTodayContent animeFire={animeList} />
      <Outlet />
    </div>
  );
}
