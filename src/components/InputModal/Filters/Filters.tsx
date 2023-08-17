import "./Filters.css";
import GuestsFilter from "./GuestsFilter/GuestsFilter";
import LocationFilter from "./LocationFilter/LocationFilter";
import SearchIcon from "@mui/icons-material/Search";

const Filters = ({ toggle }: { toggle: Function }) => {
  return (
    <div className="filter-container">
      <LocationFilter />
      <GuestsFilter />
      <div className="btn-container">
        <div
          className="search-btn"
          onClick={() => {
            console.log(`button Clicked`);
            toggle(false);
          }}>
          <SearchIcon /> Search
        </div>
      </div>
    </div>
  );
};

export default Filters;
