import { useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import "./styles/WatchingScreen.css";
import { IoReturnDownBack } from "react-icons/io5";
import WatchingZoneLeftSide from "../components/WatchingZoneLeftSide";
import WatchingZoneRightSide from "../components/WatchingZoneRightSide";

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
      <WatchingZoneLeftSide
        animeName={animeName}
        rating={rating}
        setRating={setRating}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <WatchingZoneRightSide
        isPlaying={isPlaying}
        animeName={animeName}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        isOverflowing={isOverflowing}
        randomizedComments={randomizedComments}
        images={images}
        sliderRef={sliderRef}
        setCurrentImage={setCurrentImage}
        descriptionRef={descriptionRef}
        scrollImages={scrollImages}
      />

      {currentImage && (
        <div className="image-modal" onClick={() => setCurrentImage("")}>
          <img src={currentImage} alt="" />
        </div>
      )}
    </div>
  );
}
