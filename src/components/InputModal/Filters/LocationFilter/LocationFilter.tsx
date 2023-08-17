import "./LocationFilter.css";
import { useSetRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { showLocSearchResults } from "../../../../atoms/filterResults";

const LocationFilter = () => {
  const [isFocus, setIsFocus] = useState(false);
  const setShowLocSearchResuls = useSetRecoilState(showLocSearchResults);

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
          setIsFocus(false);
        }}
      />
    </div>
  );
};

export default LocationFilter;
