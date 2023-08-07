import PlaceIcon from "@mui/icons-material/Place";
import "./LocationSearch.css";
import { useState } from "react";

const LocationSearch = () => {
  const [showResults, setShowResults] = useState(false);
  return (
    <div className="loc-search">
      <div
        className="loc-input"
        style={{ border: showResults ? `1px solid black` : `` }}>
        <label htmlFor="add-loc">Location</label>
        <input
          type="text"
          name="location"
          id="add-loc"
          placeholder="Add Location..."
          onFocus={(e) => {
            e.target.style.outline = `none`;
            setShowResults(true);
          }}
          onBlur={() => {
            setShowResults(false);
          }}
        />
      </div>
      {showResults && (
        <div className="loc-search-results">
          <div className="loc-result">
            <PlaceIcon />
            <p>Helsinki, Finland</p>
          </div>
          <div className="loc-result">
            <PlaceIcon />
            <p>Helsinki, Finland</p>
          </div>
          <div className="loc-result">
            <PlaceIcon />
            <p>Helsinki, Finland</p>
          </div>
          <div className="loc-result">
            <PlaceIcon />
            <p>Helsinki, Finland</p>
          </div>
          <div className="loc-result">
            <PlaceIcon />
            <p>Helsinki, Finland</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationSearch;
