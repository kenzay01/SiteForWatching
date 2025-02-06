import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
export default function MainImageBunner({
  animeList,
}: {
  animeList: { name: string; img: string; link: string }[];
}) {
  const navigate = useNavigate();
  const [currentAnime, setCurrentAnime] = useState(0);
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
            navigate(`/anime/${animeList[currentAnime].link}`, {
              state: { animeName: animeList[currentAnime] },
            });
          }}
          className="home-content-btn"
        >
          watch now
        </button>
      </div>
      <div
        onClick={() => {
          changeAnime("right");
        }}
      >
        <IoIosArrowForward className="swap-main-img-btn rgt" />
      </div>
      <div
        onClick={() => {
          changeAnime("left");
        }}
      >
        <IoIosArrowBack className="swap-main-img-btn lft" />
      </div>
    </div>
  );
}
