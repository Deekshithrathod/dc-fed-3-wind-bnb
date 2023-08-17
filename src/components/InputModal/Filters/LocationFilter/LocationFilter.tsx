import "./LocationFilter.css";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { showLocSearchResults } from "../../../../atoms/showFilterResults";
import { locFilterKeyword } from "../../../../atoms/filters";

const LocationFilter = () => {
  const [isFocus, setIsFocus] = useState(false);
  const setShowLocSearchResuls = useSetRecoilState(showLocSearchResults);

  const [loc, setLoc] = useRecoilState(locFilterKeyword);

  useEffect(() => {
    setShowLocSearchResuls(isFocus);
  }, [isFocus]);
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
          // setIsFocus(false);
        }}
        value={loc}
        onChange={(e) => setLoc(e.target.value)}
      />
    </div>
  );
};

export default LocationFilter;
