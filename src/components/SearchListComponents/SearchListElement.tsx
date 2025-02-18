import type { Anime } from "../../types/Anime";
import "../styles/SearchListElement.css";
import { useNavigate } from "react-router-dom";
export default function SearchListElement({ anime }: { anime: Anime }) {
  const navigate = useNavigate();
  console.log("anime", anime);
  return (
    <div
      className="search-list-element"
      onClick={() => {
        navigate(`/anime/${anime.link}`, {
          state: { animeName: anime },
        });
      }}
    >
      <div className="search-list-element-img">
        <img src={anime.logo} alt={anime.name} />
      </div>
      <div className="search-list-element-info">
        <div className="search-list-element-title">
          <span>{anime.name}</span>
        </div>
        <div className="search-list-element-rating">
          <div>
            <b>Rating: </b>
            <span>{anime.avg_rating}/10</span>
          </div>
        </div>
        <div className="search-list-element-genres-list">
          {anime.genres.map((genre) => {
            return (
              <div key={genre} className="search-list-element-genre">
                {genre}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
