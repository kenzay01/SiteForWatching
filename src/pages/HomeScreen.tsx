import HomeHeader from "../components/HomeHeader";
import MainImageBunner from "../components/MainImageBunner";
import { Outlet } from "react-router-dom";
import "./styles/HomeScreen.css";
export default function HomeScreen() {
  const animeList = [
    {
      name: "Jujutsu Kaisen",
      img: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/10/jujutsu-kaisen-s-main-cast.jpg",
      link: "jujutsu-kaisen",
    },
    {
      name: "Naruto",
      img: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/12/naruto-isn-t-really-an-underdog.jpg",
      link: "naruto",
    },
    {
      name: "My Hero Academia",
      img: "https://cdn.europosters.eu/image/hp/65704.jpg",
      link: "my-hero-academia",
    },
    {
      name: "Attack on Titan",
      img: "https://m.media-amazon.com/images/S/pv-target-images/7c1672bcbb985231df92ac310cbb162b182443f781dd4b3e66fe67b53a01f936.jpg",
      link: "attack-on-titan",
    },
  ];

  return (
    <div className="home-container">
      <HomeHeader />
      <MainImageBunner animeList={animeList} />
      <Outlet />
    </div>
  );
}
