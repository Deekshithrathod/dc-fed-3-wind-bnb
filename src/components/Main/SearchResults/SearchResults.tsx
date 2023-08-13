import "./SearchResults.css";
import SearchResult from "./SearchResult/SearchResult";
import { useRecoilValue } from "recoil";
import { searchResultsState } from "../../../atoms/searchResults";

const SearchResults = () => {
  const filteredStays = useRecoilValue(searchResultsState);
  return (
    <div className="search-results">
      {filteredStays.map((stay, index) => (
        <SearchResult {...stay} key={index} />
      ))}
    </div>
  );
};

export default SearchResults;
