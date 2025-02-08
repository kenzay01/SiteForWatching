import type { Anime } from "../types/Anime";
import { RiStarSLine, RiStarSFill } from "react-icons/ri";

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
  return (
    <div className="watching-screen-lft">
      <div className="watching-screen-play-name">{animeName.name}</div>
      <div
        className="watching-screen-img"
        // onClick={() => setCurrentImage(animeName.logo)}
      >
        <img src={animeName.logo} alt="" />
        <div
          className="watching-screen-play-btn"
          onClick={() => setCurrentImage(animeName.logo)}
        >
          full size
        </div>
      </div>
      <div className="watching-screen-play">
        <div className="watching-ranking">
          <div className="watching-stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} onClick={() => setRating(star)}>
                {star <= rating ? (
                  <RiStarSFill className="star-btn" />
                ) : (
                  <RiStarSLine className="star-btn" />
                )}
              </span>
            ))}
          </div>
          <div className="watching-ranking-info">
            <div>Your ranking: {rating}</div>
            <div>Average ranking: {3.5}</div>
          </div>
        </div>
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
