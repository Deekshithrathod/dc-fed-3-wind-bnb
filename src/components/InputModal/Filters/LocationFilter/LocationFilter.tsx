import { useRecoilState } from "recoil";
import "./LocationFilter.css";
import { useState } from "react";
import { locationFilterState } from "../../../../atoms/filters";

const LocationFilter = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [currLoc, setCurrLoc] = useRecoilState(locationFilterState);

  return (
    <div
      className="filter-input-container"
      style={{ border: isFocus ? `1px solid black` : `` }}>
      <label htmlFor="add-loc">Location</label>
      <input
        type="text"
        name="location"
        id="add-loc"
        placeholder="Add Location..."
        onFocus={() => {
          setIsFocus(true);
        }}
        onBlur={() => {
          setIsFocus(false);
        }}
        value={currLoc}
        onChange={(e) => setCurrLoc(e.target.value)}
      />
    </div>
  );
};

export default LocationFilter;
