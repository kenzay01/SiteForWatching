import { useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import "./styles/WatchingScreen.css";
import { RiStarSLine, RiStarSFill } from "react-icons/ri";
import { IoReturnDownBack } from "react-icons/io5";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function WatchingScreen() {
  const location = useLocation();
  const navigate = useNavigate();
  const { animeName } = location.state;
  const [rating, setRating] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (descriptionRef.current) {
        setIsOverflowing(descriptionRef.current.scrollHeight > 150);
        setIsExpanded(!(descriptionRef.current.scrollHeight > 150));
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    return () => window.removeEventListener("resize", checkOverflow);
  }, [animeName.description]);

  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [images, setImages] = useState([...animeName.epidsodes_screens]);
  console.log(images);
  const scrollImages = (direction: number) => {
    const container = sliderRef.current;
    if (container) {
      const itemWidth = container.children[0].clientWidth;
      const currentScroll = container.scrollLeft;

      const newScroll = currentScroll + direction * itemWidth;

      const maxScroll = container.scrollWidth - container.clientWidth;
      const finalScroll = Math.max(0, Math.min(newScroll, maxScroll));

      container.scrollTo({
        left: finalScroll,
        behavior: "smooth",
      });
    }
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
      <div className="watching-screen-rgt">
        {isPlaying ? (
          <div className="playzone">
            <div className="video-zone"></div>
          </div>
        ) : null}
        <div className="playzone-description-container">
          <div
            className={`playzone-description-content ${
              isExpanded ? "expanded" : "collapsed"
            }`}
            ref={descriptionRef}
          >
            <h1>Description: </h1>
            <div className="playzone-description">{animeName.description}</div>
          </div>
          {isOverflowing && (
            <button
              className="toggle-btn"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Згорнути" : "Читати більше"}
            </button>
          )}

          <div className="playzone-short-imgs">
            <button className="nav-btn lft" onClick={() => scrollImages(-1)}>
              <IoIosArrowBack className="nav-btn-arr" />
            </button>
            <div className="images-container" ref={sliderRef}>
              {images.map((image, index) => (
                <img
                  className="image"
                  alt="sliderImage"
                  key={index}
                  src={image}
                />
              ))}
            </div>
            <button className="nav-btn rgt" onClick={() => scrollImages(1)}>
              <IoIosArrowForward className="nav-btn-arr" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
