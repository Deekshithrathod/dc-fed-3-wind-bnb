import { useState } from "react";
import "./GuestsFilter.css";

const GuestsFilter = () => {
  const [isFocus, setIsFocus] = useState(false);
  // const [guestsFilter, setGuestsFilter] = useRecoilState(guestsFilterState);

  return (
    <>
      <div
        className="filter-input-container"
        style={{ border: isFocus ? `1px solid black` : `` }}>
        <label htmlFor="add-guests">Guests</label>
        <input
          type="text"
          name="guests"
          id="add-guests"
          value={``}
          placeholder="Add Guests..."
          onFocus={() => {
            setIsFocus(true);
          }}
          onBlur={() => {
            setIsFocus(false);
          }}
        />
      </div>
    </>
  );
};

export default GuestsFilter;
