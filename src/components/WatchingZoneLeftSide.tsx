import type { Anime } from "../types/Anime";
// import { RiStarSLine, RiStarSFill } from "react-icons/ri";
import {
  MdOutlineStarHalf,
  MdOutlineStarOutline,
  MdOutlineStar,
} from "react-icons/md";
import { useMemo, useState } from "react";

export default function WatchingZoneLeftSide({
  animeName,
  rating,
  setRating,
  isPlaying,
  setIsPlaying,
  setCurrentImage,
}: {
  animeName: Anime;
  rating: number;
  setRating: (rating: number) => void;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentImage: (logo: string) => void;
}) {
  const [isOnImage, setIsOnImage] = useState(false);
  const [isRatingModalOpen, setIsRatingModalOpen] = useState(false); // Стейт для модального вікна

  const handleStarClick = (star: number) => {
    setRating(star);
    // setIsRatingModalOpen(false); // Закриваємо модальне вікно після вибору
  };

  const renderStars = useMemo(() => {
    return [...Array(5)].map((_, index) => {
      const starIndex = index + 1;
      const isFull = starIndex <= Math.floor(rating / 2); // Можна поділити rating на 2
      const isHalf = starIndex === Math.ceil(rating / 2) && rating % 2 !== 0; // Якщо зірка на межі, відображаємо половинку

      return (
        <span key={starIndex}>
          {isFull ? (
            <MdOutlineStar className="star-btn" />
          ) : isHalf ? (
            <MdOutlineStarHalf className="star-btn" />
          ) : (
            <MdOutlineStarOutline className="star-btn" />
          )}
        </span>
      );
    });
  }, [rating]);

  return (
    <div className="watching-screen-lft">
      <div className="watching-screen-play-name">{animeName.name}</div>
      <div
        className="watching-screen-img"
        onMouseEnter={() => {
          setIsOnImage(true);
        }}
        onMouseLeave={() => {
          setIsOnImage(false);
        }}
      >
        <img src={animeName.logo} alt="" />
        {isOnImage && (
          <div
            className="watching-screen-play-btn"
            onClick={() => setCurrentImage(animeName.logo)}
          >
            full size
          </div>
        )}
      </div>
      <div className="watching-screen-play">
        <div className="watching-ranking">
          <div
            className="watching-stars"
            onClick={() => setIsRatingModalOpen(true)}
          >
            {renderStars}
          </div>
          <div className="watching-ranking-info">
            <div>Your ranking: {rating}</div>
            <div>Average ranking: {animeName.avg_rating}</div>
          </div>
        </div>

        {isRatingModalOpen && (
          <div className="rating-modal">
            <div className="rating-modal-content">
              <div className="rating-modal-rate">{rating}</div>
              <div className="rating-modal-stars">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
                  <span key={star} onClick={() => handleStarClick(star)}>
                    {star <= rating ? (
                      <MdOutlineStar className="star-btn modal" />
                    ) : (
                      <MdOutlineStarOutline className="star-btn modal" />
                    )}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setIsRatingModalOpen(false)}
                className="close-btn"
              >
                Close
              </button>
            </div>
          </div>
        )}

        <button
          onClick={() => setIsPlaying((prev) => !prev)}
          className="play-btn"
        >
          {isPlaying ? "Hide player" : "Watch"}
        </button>
      </div>
    </div>
  );
}
