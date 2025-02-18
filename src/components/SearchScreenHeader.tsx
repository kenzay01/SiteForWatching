import { useState } from "react";
import { JSX } from "react";
import type { Anime } from "../types/Anime";
import { IoSearch } from "react-icons/io5";
// import { TbLayoutListFilled } from "react-icons/tb";
// import { PiListBold } from "react-icons/pi";
// import { MdApps } from "react-icons/md";
export default function SearchScreenHeader({
  filteredAnimeList,
  sortBy,
  setSortBy,
  selectedGenres,
  showGenreSelector,
  genreButtonRef,
  genreSelectorRef,
  handleGenreSelect,
  genres,
  handleGenreClick,
  handleSubmit,
  setSearchTerm,
  searchTerm,
  layoutIndex,
  layoutOptions,
  handleLayoutChange,
}: {
  filteredAnimeList: Anime[];
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  selectedGenres: string[];
  showGenreSelector: boolean;
  genreButtonRef: React.RefObject<HTMLButtonElement | null>;
  genreSelectorRef: React.RefObject<HTMLDivElement | null>;
  handleGenreSelect: () => void;
  genres: string[];
  handleGenreClick: (genre: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  setSearchTerm: React.Dispatch<React.SetStateAction<string | undefined>>;
  searchTerm: string | undefined;
  layoutIndex: number;
  layoutOptions: { icon: JSX.Element; name: string }[];
  handleLayoutChange: () => void;
}) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="search-screen-input-container">
          <IoSearch className="search-icon search-screen-icn" />
          <input
            type="text"
            placeholder="Search anime..."
            autoFocus
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </div>
      </form>
      <div className="search-screen-header">
        <div className="search-screen-header-info-container">
          <div className="search-screen-header-title">Search Results:</div>
          <div className="search-screen-header-info">
            <b>{filteredAnimeList.length}</b> results found
          </div>
        </div>
        <div className="search-screen-filters">
          <div className="search-screen-sort-genres">
            <button
              ref={genreButtonRef}
              className="choose-genres-btn"
              onClick={handleGenreSelect}
            >
              Choose genres
            </button>
            {showGenreSelector && (
              <div ref={genreSelectorRef} className="genre-filters">
                {genres.map((genre) => (
                  <div
                    key={genre}
                    className={`genre-filter ${
                      selectedGenres.includes(genre) ? "active" : ""
                    }`}
                    onClick={() => handleGenreClick(genre)}
                  >
                    <label>{genre}</label>
                  </div>
                ))}
              </div>
            )}
          </div>

          <select
            onChange={(e) => setSortBy(e.target.value)}
            value={sortBy}
            className="search-screen-sort-by"
          >
            <option value="name">Sort by Name</option>
            <option value="rating">Sort by Rating</option>
          </select>
          <div
            className="search-screen-layout-options"
            onClick={() => {
              handleLayoutChange();
            }}
          >
            {layoutOptions[layoutIndex].icon}
          </div>
        </div>
      </div>
    </>
  );
}
