import "./styles/SearchScreen.css";
import { IoCaretBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import SearchElement from "../components/SearchElement";
import { animeList } from "../constant/animeList";
import { useParams } from "react-router-dom";
import { useMemo, useState, useEffect, useRef } from "react";
import SearchScreenHeader from "../components/SearchScreenHeader";

export default function SearchScreen() {
  const navigate = useNavigate();
  const { searchValue: searchItem } = useParams();
  const [searchTerm, setSearchTerm] = useState(searchItem);
  const [searchValue, setSearchValue] = useState(searchItem);
  const [sortBy, setSortBy] = useState("name");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [showGenreSelector, setShowGenreSelector] = useState(false);
  const genres = [...new Set(animeList.flatMap((anime) => anime.genres))];
  const genreSelectorRef = useRef<HTMLDivElement | null>(null);
  const genreButtonRef = useRef<HTMLButtonElement | null>(null);

  const filteredAnimeList = useMemo(() => {
    let filtered = animeList.filter((anime) =>
      anime.name.toLowerCase().includes(searchValue?.toLowerCase() || "")
    );

    if (selectedGenres.length > 0) {
      filtered = filtered.filter((anime) =>
        selectedGenres.every((genre) => anime.genres.includes(genre))
      );
    }

    return filtered.sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "rating") return b.avg_rating - a.avg_rating;
      return 0;
    });
  }, [animeList, searchValue, sortBy, selectedGenres]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm === undefined) return;
    setSearchValue(searchTerm);
    if (searchTerm.length > 0) {
      navigate(`/search/${searchTerm}`);
    } else {
      navigate("/search");
    }
  };

  const handleGenreSelect = () => {
    setShowGenreSelector(!showGenreSelector);
  };

  const handleGenreClick = (genre: string) => {
    setSelectedGenres((prevGenres) =>
      prevGenres.includes(genre)
        ? prevGenres.filter((g) => g !== genre)
        : [...prevGenres, genre]
    );
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        genreSelectorRef.current &&
        !genreSelectorRef.current.contains(e.target as Node) &&
        genreButtonRef.current &&
        !genreButtonRef.current.contains(e.target as Node)
      ) {
        setShowGenreSelector(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="search-screen">
      <div className="return-btn search" onClick={() => navigate("/")}>
        <IoCaretBack className="return-icon" /> Home
      </div>
      <div className="search-screen-content">
        <SearchScreenHeader
          filteredAnimeList={filteredAnimeList}
          sortBy={sortBy}
          setSortBy={setSortBy}
          selectedGenres={selectedGenres}
          showGenreSelector={showGenreSelector}
          genreButtonRef={genreButtonRef}
          genreSelectorRef={genreSelectorRef}
          handleGenreSelect={handleGenreSelect}
          genres={genres}
          handleGenreClick={handleGenreClick}
          handleSubmit={handleSubmit}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <div className="search-screen-list">
          <div className="selected-genres">
            {selectedGenres.length > 0 ? (
              selectedGenres.map((genre) => (
                <span
                  key={genre}
                  className="selected-genre"
                  onClick={() =>
                    setSelectedGenres(selectedGenres.filter((g) => g !== genre))
                  }
                >
                  {genre}
                  <div>x</div>
                </span>
              ))
            ) : (
              <span>No genres selected</span>
            )}
          </div>
          {filteredAnimeList.map((anime) => (
            <SearchElement key={anime.name} anime={anime} />
          ))}
        </div>
      </div>
    </div>
  );
}
