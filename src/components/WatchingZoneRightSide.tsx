import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import type { Anime } from "../types/Anime";

export default function WatchingZoneRightSide({
  isPlaying,
  animeName,
  images,
  setCurrentImage,
  sliderRef,
  descriptionRef,
  commentsRef,
  isDescriptionExpanded,
  setIsDescriptionExpanded,
  isCommentsExpanded,
  setIsCommentsExpanded,
  isDescriptionOverflowing,
  isCommentsOverflowing,
  randomizedComments,
  scrollImages,
}: {
  isPlaying: boolean;
  animeName: Anime;
  images: string[];
  setCurrentImage: (image: string) => void;
  sliderRef: React.RefObject<HTMLDivElement>;
  descriptionRef: React.RefObject<HTMLDivElement>;
  commentsRef: React.RefObject<HTMLDivElement>;
  isDescriptionExpanded: boolean;
  setIsDescriptionExpanded: (expanded: boolean) => void;
  isCommentsExpanded: boolean;
  setIsCommentsExpanded: (expanded: boolean) => void;
  isDescriptionOverflowing: boolean;
  isCommentsOverflowing: boolean;
  randomizedComments: string[];
  scrollImages: (direction: number) => void;
}) {
  return (
    <div className="watching-screen-rgt">
      {isPlaying && (
        <div className="playzone">
          <div className="video-zone"></div>
        </div>
      )}
      <div className="playzone-description-container">
        <div className="playzone-description-comments">
          <div className="playzone-description-expand">
            <div
              className={`playzone-description-content ${
                isDescriptionExpanded ? "expanded" : "collapsed"
              }`}
              ref={descriptionRef}
            >
              <h1>Description:</h1>
              <div className="playzone-description">
                {animeName.description}
              </div>
            </div>
            {isDescriptionOverflowing && (
              <button
                className="toggle-btn description"
                onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
              >
                {isDescriptionExpanded ? "show less" : "show more"}
              </button>
            )}
          </div>
          <div className="playzone-description-expand">
            <div
              className={`playzone-random-comments ${
                isCommentsExpanded ? "expanded" : "collapsed"
              }`}
              ref={commentsRef}
            >
              <h1>Random comments:</h1>
              {randomizedComments.map((comment, index) => (
                <div key={index} className="playzone-random-comment">
                  {comment}
                </div>
              ))}
            </div>
            {isCommentsOverflowing && (
              <button
                className="toggle-btn comments"
                onClick={() => setIsCommentsExpanded(!isCommentsExpanded)}
              >
                {isCommentsExpanded ? "show less" : "show more"}
              </button>
            )}
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
