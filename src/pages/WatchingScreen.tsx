import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./styles/WatchingScreen.css";
import { RiStarSLine, RiStarSFill } from "react-icons/ri";
import { IoReturnDownBack } from "react-icons/io5";
export default function WatchingScreen() {
  const location = useLocation();
  const navigate = useNavigate();
  const { animeName } = location.state;
  const [rating, setRating] = useState(0);
  const handleStarClick = (star: number) => {
    setRating(star);
  };
  return (
    <div className="watching-screen-content">
      <div className="return-btn" onClick={() => navigate(-1)}>
        <IoReturnDownBack />
      </div>
      <div className="watching-screen-lft">
        <div className="watching-screen-play-name">{animeName.name}</div>
        <div className="watching-screen-img">
          <img src={animeName.img} alt="" />
        </div>
        <div className="watching-screen-play">
          <div className="watching-ranking">
            <div className="watching-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} onClick={() => handleStarClick(star)}>
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
          <button onClick={() => {}} className="play-btn">
            Watch
          </button>
        </div>
      </div>
      <div className="watching-screen-rgt"></div>
    </div>
  );
}
