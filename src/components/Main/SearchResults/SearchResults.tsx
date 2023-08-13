import "./SearchResults.css";
import stays from "../../../../stays.json";
import SearchResult from "./SearchResult/SearchResult";

const SearchResults = () => {
  return (
    <div className="search-results">
      {stays.map((stay) => (
        <SearchResult {...stay} />
      ))}
    </div>
  );
};

export default SearchResults;
