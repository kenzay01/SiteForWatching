import type { Anime } from "../types/Anime";
export default function SearchElement({ anime }: { anime: Anime }) {
  return (
    <div className="search-element">
      <div className="search-element-img"></div>
      <div className="search-element-info">
        <h1 className="search-element-title">{anime.name}</h1>
        <p className="search-element-description">Description</p>
      </div>
    </div>
  );
}
