import { useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import "./styles/WatchingScreen.css";
import { RiStarSLine, RiStarSFill } from "react-icons/ri";
import { IoReturnDownBack } from "react-icons/io5";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function WatchingScreen() {
  const randomComments = [
    "It was amazing!",
    "I didn't like it",
    "It was so so",
    "I would recommend it",
    "It was the best anime I've ever seen",
    "I would watch it again",
    "I didn't understand the plot",
    "It was too short",
    "It was too long",
    "I would recommend it to my friends",
    "I would watch it again",
  ];

  const getRandomComments = (comments: string[]) => {
    return [...comments].sort(() => 0.5 - Math.random()).slice(0, 3);
  };

  const location = useLocation();
  const navigate = useNavigate();
  const { animeName } = location.state;
  const [rating, setRating] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [randomizedComments, setRandomizedComments] = useState<string[]>([]);

  const descriptionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const images = animeName.epidsodes_screens;
  const [currentImage, setCurrentImage] = useState("");

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

  useEffect(() => {
    setRandomizedComments(getRandomComments(randomComments));
  }, []);

  useEffect(() => {
    document.body.style.overflow = currentImage ? "hidden" : "auto";
  }, [currentImage]);

  const scrollImages = (direction: number) => {
    const container = sliderRef.current;
    if (container) {
      const itemWidth = container.children[0].clientWidth;
      const newScroll = container.scrollLeft + direction * itemWidth;
      container.scrollTo({ left: newScroll, behavior: "smooth" });
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
        {isPlaying && (
          <div className="playzone">
            <div className="video-zone"></div>
          </div>
        )}
        <div className="playzone-description-container">
          <div className="playzone-discription-comments">
            <div className="playzone-description-expand">
              <div
                className={`playzone-description-content ${
                  isExpanded ? "expanded" : "collapsed"
                }`}
                ref={descriptionRef}
              >
                <h1>Description: </h1>
                <div className="playzone-description">
                  {animeName.description}
                </div>
              </div>
              {isOverflowing && (
                <button
                  className="toggle-btn"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? "unfold" : "roll up"}
                </button>
              )}
            </div>
            <div className="playzone-random-comments">
              <h1>Random comments:</h1>
              {randomizedComments.map((comment, index) => (
                <div key={index} className="playzone-random-comment">
                  {comment}
                </div>
              ))}
            </div>
          </div>
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
                  onClick={() => setCurrentImage(image)}
                />
              ))}
            </div>
            <button className="nav-btn rgt" onClick={() => scrollImages(1)}>
              <IoIosArrowForward className="nav-btn-arr" />
            </button>
          </div>
        </div>
      </div>
      {currentImage && (
        <div className="image-modal" onClick={() => setCurrentImage("")}>
          <img src={currentImage} alt="" />
        </div>
      )}
    </div>
  );
}
