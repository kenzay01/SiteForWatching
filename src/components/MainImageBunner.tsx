import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function MainImageBunner({
  animeList,
}: {
  animeList: { name: string; img: string; link: string }[];
}) {
  const navigate = useNavigate();
  const [currentAnime, setCurrentAnime] = useState(1);
  const changeAnime = (direction: "left" | "right") => {
    if (direction === "left") {
      setCurrentAnime((prev) => (prev === 0 ? animeList.length - 1 : prev - 1));
    } else {
      setCurrentAnime((prev) => (prev === animeList.length - 1 ? 0 : prev + 1));
    }
  };
  return (
    <div className="main-image-bunner">
      <div className="main-image">
        <img src={animeList[currentAnime].img} alt="Main" />
      </div>
      <div>
        <h1 className="home-content-name">{animeList[currentAnime].name}</h1>
        <button
          onClick={() => {
            navigate(`/anime/${animeList[currentAnime].link}`);
          }}
          className="home-content-btn"
        >
          watch now
        </button>
      </div>
      <button
        onClick={() => {
          changeAnime("right");
        }}
        className="swap-main-img-btn rgt"
      >
        →
      </button>
      <button
        onClick={() => {
          changeAnime("left");
        }}
        className="swap-main-img-btn lft"
      >
        ←
      </button>
    </div>
  );
}
