import type { Anime } from "../types/Anime";
import "./styles/SearchElement.css";
import { useNavigate } from "react-router-dom";
export default function SearchElement({ anime }: { anime: Anime }) {
  const navigate = useNavigate();
  console.log("anime", anime);
  return (
    <div
      className="search-element"
      onClick={() => {
        navigate(`/anime/${anime.link}`, {
          state: { animeName: anime },
        });
      }}
    >
      <div className="search-element-img">
        <img src={anime.logo} alt={anime.name} />
      </div>
      <div className="search-element-info-container">
        <div className="search-element-info">
          <div className="search-element-title">
            <b>Name:</b> <span>{anime.name}</span>
          </div>
          <div className="search-element-rating">
            <b>Rating:</b> <span>{anime.avg_rating}/10</span>
          </div>
          <div className="search-element-author">
            <b>Author:</b> <span>{anime.author}</span>
          </div>
          <div className="search-element-genres">
            <b>Genres:</b>
            <div className="search-element-genres-list">
              {anime.genres.map((genre) => {
                return (
                  <div key={genre} className="search-element-genre">
                    {genre}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* <div className="search-element-watch-btn">Watch</div> */}
      </div>
    </div>
  );
}
