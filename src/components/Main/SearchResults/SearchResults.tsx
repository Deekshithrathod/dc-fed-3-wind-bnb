import { useRecoilValue } from "recoil";
import "./SearchResults.css";
import { fitleredSearchResults } from "../../../atoms/searchResults";
import SearchResult from "./SearchResult/SearchResult";
import SearchHeading from "./SearchHeading/SearchHeading";

const SearchResults = () => {
  const filteredResults = useRecoilValue(fitleredSearchResults);

  return (
    <main>
      <SearchHeading count={filteredResults.length} />
      <div className="search-results">
        {filteredResults.map((res) => (
          <SearchResult {...res} />
        ))}
      </div>
    </main>
  );
};

export default SearchResults;
