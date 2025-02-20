import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import type { Anime } from "../types/Anime";
import { TbArrowBigRightLineFilled } from "react-icons/tb";

export default function MainImageBunner({ animeList }: { animeList: Anime[] }) {
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
        <div className="main-image-content">
          <div className="main-image-content-name-rating">
            <div className="main-image-content-name">
              {animeList[currentAnime].name}
            </div>
            <div className="main-image-content-rating">
              Rating: <span>{animeList[currentAnime].avg_rating}</span>
            </div>
          </div>
          <button
            onClick={() => {
              navigate(`/anime/${animeList[currentAnime].link}`, {
                state: { animeName: animeList[currentAnime] },
              });
            }}
            className="home-content-btn"
          >
            watch now
            <TbArrowBigRightLineFilled className="main-image-arrow-go" />
          </button>
        </div>
      </div>
      <div>
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
