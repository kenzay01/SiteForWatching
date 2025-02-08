import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import type { Anime } from "../types/Anime";
export default function WatchingZoneRightSide({
  isPlaying,
  animeName,
  images,
  setCurrentImage,
  sliderRef,
  descriptionRef,
  isExpanded,
  setIsExpanded,
  isOverflowing,
  randomizedComments,
  scrollImages,
}: {
  isPlaying: boolean;
  animeName: Anime;
  images: string[];
  setCurrentImage: any;
  sliderRef: any;
  descriptionRef: any;
  isExpanded: boolean;
  setIsExpanded: any;
  isOverflowing: boolean;
  randomizedComments: string[];
  scrollImages: any;
}) {
  return (
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
  );
}
