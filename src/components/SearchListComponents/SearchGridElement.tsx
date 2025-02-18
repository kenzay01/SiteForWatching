import type { Anime } from "../../types/Anime";
import "../styles/SearchGridElement.css";
import { useNavigate } from "react-router-dom";
export default function SearchGridElement({ anime }: { anime: Anime }) {
  const navigate = useNavigate();
  console.log("anime", anime);
  return (
    <div
      className="search-grid-element"
      onClick={() => {
        navigate(`/anime/${anime.link}`, {
          state: { animeName: anime },
        });
      }}
    >
      <div className="search-grid-element-img">
        <img src={anime.logo} alt={anime.name} />
      </div>
      <div className="search-grid-element-info-container">
        <div className="search-grid-element-title">{anime.name}</div>
        <div className="search-grid-element-info">
          <div className="search-grid-element-rating">
            <div>
              <span>{anime.avg_rating}/10</span>
            </div>
          </div>
          <div className="search-grid-element-genres-list">
            {anime.genres.map((genre) => {
              return (
                <div key={genre} className="search-grid-element-genre">
                  {genre}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
