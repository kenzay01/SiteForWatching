import type { Anime } from "../../types/Anime";
import "../styles/SearchWildElement.css";
import { useNavigate } from "react-router-dom";
export default function SearchWildElement({ anime }: { anime: Anime }) {
  const navigate = useNavigate();
  console.log("anime", anime);
  return (
    <div
      className="search-wild-element"
      onClick={() => {
        navigate(`/anime/${anime.link}`, {
          state: { animeName: anime },
        });
      }}
    >
      <div className="search-wild-element-img">
        <img src={anime.logo} alt={anime.name} />
      </div>
      <div className="search-wild-element-info-container">
        <div className="search-wild-element-info">
          <div className="search-wild-element-title">
            <b>Name:</b> <span>{anime.name}</span>
          </div>
          <div className="search-wild-element-rating">
            <b>Rating:</b> <span>{anime.avg_rating}/10</span>
          </div>
          <div className="search-wild-element-author">
            <b>Author:</b> <span>{anime.author}</span>
          </div>
          <div className="search-wild-element-genres">
            <b>Genres:</b>
            <div className="search-wild-element-genres-list">
              {anime.genres.map((genre) => {
                return (
                  <div key={genre} className="search-wild-element-genre">
                    {genre}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
