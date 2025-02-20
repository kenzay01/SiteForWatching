import { useState, useRef } from "react";
import type { Anime } from "../../types/Anime";
import "../styles/FireTodayContent.css";
import { MdComment } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
export default function FireTodayContent({
  animeFire,
}: {
  animeFire: Anime[];
}) {
  const navigate = useNavigate();
  const [topOneAnime] = useState<Anime>(animeFire[0]);
  const [transformStyle, setTransformStyle] = useState("");
  const animationFrame = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / width;
    const y = (e.clientY - top - height / 2) / height;

    const rotateX = Math.max(-10, Math.min(10, y * -10));
    const rotateY = Math.max(-10, Math.min(10, x * 10));

    animationFrame.current = requestAnimationFrame(() => {
      setTransformStyle(
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      );
    });
  };

  const handleMouseLeave = () => {
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }
    animationFrame.current = requestAnimationFrame(() => {
      setTransformStyle("perspective(1000px) rotateX(0deg) rotateY(0deg)");
    });
  };

  return (
    <div className="fire-today-container">
      <div className="fire-today-title">Today's Top</div>
      <div className="fire-today-top">
        <div className="fire-today-top-one-container">
          <div className="fire-today-top-one">
            <div
              className="fire-today-top-one-img"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: transformStyle,
                transition: "transform 0.15s ease-out",
              }}
            >
              <img
                src={topOneAnime.logo}
                alt="anime-logo"
                onClick={() => {
                  navigate(`/anime/${topOneAnime.link}`, {
                    state: { animeName: topOneAnime },
                  });
                }}
              />
            </div>
            <div className="fire-today-top-one-content">
              <div className="fire-today-top-one-content-name">
                {topOneAnime.name}
              </div>
              <div className="fire-today-top-one-content-views-comments-rating">
                <div className="fire-today-top-other-content-rating">
                  <IoStar className="fire-today-top-other-content-rating-icon" />
                  {topOneAnime.avg_rating}
                </div>
                <div className="fire-today-top-one-content-views">
                  <FaEye className="fire-today-top-one-content-views-icon" />
                  {topOneAnime.views}
                </div>
                <div className="fire-today-top-one-content-comments">
                  <MdComment className="fire-today-top-one-content-comments-icon" />
                  {topOneAnime.commentsList.length}
                </div>
              </div>
              <div className="top-one-fire-gif">
                <img src="https://i.gifer.com/5Mz4.gif" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="fire-today-top-others-container">
          <div className="fire-today-top-others">
            {animeFire.slice(1).map((anime) => (
              <div
                key={anime.link}
                className="fire-today-top-other"
                onClick={() => {
                  navigate(`/anime/${anime.link}`, {
                    state: { animeName: anime },
                  });
                }}
              >
                <div className="fire-today-top-other-img">
                  {/* <img src={anime.logo} alt="anime-logo" /> */}
                </div>
                <div className="fire-today-top-other-content">
                  <div className="fire-today-top-other-content-name">
                    {anime.name}
                  </div>
                  <div className="fire-today-top-other-content-views-comments">
                    <div className="fire-today-top-other-content-views">
                      <FaEye className="fire-today-top-other-content-views-icon" />
                      {anime.views}
                    </div>
                    <div className="fire-today-top-other-content-comments">
                      <MdComment className="fire-today-top-other-content-comments-icon" />
                      {anime.commentsList.length}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
