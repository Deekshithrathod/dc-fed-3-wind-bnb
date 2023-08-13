import "./LocationFilter.css";
import { useState } from "react";

const LocationFilter = () => {
  const [showResults, setShowResults] = useState(false);
  return (
    <>
      <div
        className="filter-input-container"
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
      {/* {showResults && (
        <div className="loc-search-results">
          <LocationFilterResult place="Helsinki" country="Finland" />
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
      )} */}
    </>
  );
};

export default LocationFilter;
